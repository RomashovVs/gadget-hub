import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import {describe, test, expect, vi, beforeEach} from 'vitest';
import {OrderForm} from '../OrderForm';
import {MantineProvider} from '@mantine/core';
import type {Good} from '@/types/goods';
import {useLocalStorage} from '@/hooks/useLocalStorage';
import {addOrderDetails} from '@/lib/api/order';

class ResizeObserverMock {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
}

global.ResizeObserver = ResizeObserverMock;

vi.mock('@/hooks/useLocalStorage', () => ({
    useLocalStorage: vi.fn(() => [[], vi.fn()]),
}));

vi.mock('@/lib/api/order', () => ({
    addOrderDetails: vi.fn(() => Promise.resolve(true)),
}));

type OrderItem = Good & {select?: boolean; count: number};

const Wrapper = ({children}: {children: React.ReactNode}) => <MantineProvider>{children}</MantineProvider>;

describe('OrderForm', () => {
    const mockGood: Good = {
        id: '1',
        name: 'Телефон',
        price: '10000',
        rating: '4.5',
        img_src: 'phone.jpg',
        new_label: false,
        hit_label: false,
        type: null,
        color: null,
    };

    beforeEach(() => {
        vi.clearAllMocks();

        vi.mocked(useLocalStorage).mockReturnValue([[], vi.fn(), vi.fn()]);
    });

    test('отображает все обязательные поля формы', () => {
        render(<OrderForm />, {wrapper: Wrapper});

        expect(screen.getByTestId('Телефон')).toBeInTheDocument();
        expect(screen.getByTestId('Email')).toBeInTheDocument();
        expect(screen.getByTestId('Самовывоз')).toBeInTheDocument();
        expect(screen.getByTestId('Доставка')).toBeInTheDocument();
        expect(screen.getByTestId('Способ оплаты')).toBeInTheDocument();
        expect(screen.getByTestId('Нужна упаковка')).toBeInTheDocument();
        expect(screen.getByTestId('Оформить заказ')).toBeInTheDocument();
    });

    test('показывает поле адреса только при выборе доставки', async () => {
        render(<OrderForm />, {wrapper: Wrapper});

        expect(screen.queryByTestId('Адрес')).not.toBeInTheDocument();

        fireEvent.click(screen.getByTestId('Доставка'));
        expect(screen.getByTestId('Адрес')).toBeInTheDocument();
    });

    test('ввод невалидного email', async () => {
        render(<OrderForm />, {wrapper: Wrapper});

        const emailInput = screen.getByTestId('Email');
        const button = screen.getByTestId('Оформить заказ');

        fireEvent.change(emailInput, {target: {value: 'invalid-email'}});
        fireEvent.blur(emailInput);
        fireEvent.submit(button);
        expect(screen.getByText('Error')).toBeInTheDocument();
    });

    test('ввод валидного email', async () => {
        render(<OrderForm />, {wrapper: Wrapper});

        const emailInput = screen.getByTestId('Email');
        const button = screen.getByTestId('Оформить заказ');

        fireEvent.change(emailInput, {target: {value: 'valid@example.com'}});
        fireEvent.blur(emailInput);
        fireEvent.submit(button);
        expect(screen.queryByText('Error')).not.toBeInTheDocument();
    });

    test('валидация адреса работает при выборе доставки', async () => {
        render(<OrderForm />, {wrapper: Wrapper});
        const button = screen.getByTestId('Оформить заказ');

        fireEvent.click(screen.getByTestId('Доставка'));
        const addressInput = screen.getByTestId('Адрес');

        fireEvent.blur(addressInput);
        fireEvent.submit(button);
        expect(screen.getByTestId('Адрес').getAttribute('aria-invalid')).toBe('true');

        fireEvent.change(addressInput, {target: {value: 'ул. Примерная, 123'}});
        fireEvent.blur(addressInput);
        fireEvent.submit(button);
        expect(screen.getByTestId('Адрес').getAttribute('aria-invalid')).toBe('false');
    });

    test('отправляет форму с корректными данными', async () => {
        const mockSetOrder = vi.fn();
        const mockOrder: OrderItem[] = [{...mockGood, select: true, count: 1}];

        vi.mocked(useLocalStorage).mockReturnValue([mockOrder, mockSetOrder, vi.fn()]);

        render(<OrderForm />, {wrapper: Wrapper});

        fireEvent.change(screen.getByTestId('Телефон'), {target: {value: '+79991234567'}});
        fireEvent.change(screen.getByTestId('Email'), {target: {value: 'test@example.com'}});
        fireEvent.click(screen.getByTestId('Доставка'));
        fireEvent.change(screen.getByTestId('Адрес'), {target: {value: 'ул. Примерная, 123'}});

        fireEvent.click(screen.getByText('Оформить заказ'));

        await waitFor(() => {
            expect(addOrderDetails).toHaveBeenCalledWith({
                number: expect.stringMatching(/^\d{6}$/),
                at: expect.any(Date),
                countDevices: 1,
                totalCost: 10000,
            });
            expect(mockSetOrder).toHaveBeenCalled();
        });
    });

    test('блокирует кнопку отправки если нет выбранных товаров', () => {
        vi.mocked(useLocalStorage).mockReturnValue([[], vi.fn(), vi.fn()]);
        render(<OrderForm />, {wrapper: Wrapper});

        expect(screen.getByTestId('Оформить заказ')).toBeDisabled();
    });

    test('разблокирует кнопку при наличии выбранных товаров', () => {
        const mockOrder = [{...mockGood, select: true, count: 1}];
        vi.mocked(useLocalStorage).mockReturnValue([mockOrder, vi.fn(), vi.fn()]);

        render(<OrderForm />, {wrapper: Wrapper});

        expect(screen.getByTestId('Оформить заказ')).not.toBeDisabled();
    });

    test('не отправляет форму при невалидном email', () => {
        render(<OrderForm />, {wrapper: Wrapper});
        fireEvent.change(screen.getByTestId('Email'), {target: {value: 'invalid'}});
        fireEvent.click(screen.getByTestId('Оформить заказ'));
        expect(addOrderDetails).not.toHaveBeenCalled();
    });
});
