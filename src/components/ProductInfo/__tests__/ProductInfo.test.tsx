import {render, screen} from '@testing-library/react';
import {describe, test, expect, beforeEach, vi} from 'vitest';
import {ProductInfo} from '../ProductInfo';
import {Good} from '@/types/goods';
import {MantineProvider} from '@mantine/core';

// Мок для next/image
vi.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => <img {...props} />,
}));

const mockGood: Good = {
    id: '1',
    name: 'Смартфон фиолетовый',
    price: '79990',
    rating: '4.8',
    img_src: '/phone.jpg',
    new_label: true,
    hit_label: false,
};

const wrapper = ({children}: {children: React.ReactNode}) => <MantineProvider>{children}</MantineProvider>;

describe('ProductInfo', () => {
    test('should render all product information correctly', () => {
        render(<ProductInfo good={mockGood} />, {wrapper});

        // Проверяем название товара
        expect(screen.getByText(mockGood.name)).toBeInTheDocument();

        // Проверяем цену
        expect(screen.getByText(`${mockGood.price} ₽`)).toBeInTheDocument();

        // Проверяем рейтинг
        expect(screen.getByText(mockGood.rating)).toBeInTheDocument();

        // Проверяем иконку рейтинга
        expect(screen.getByTestId('star-icon')).toBeInTheDocument();

        // Проверяем описание (статичное в компоненте)
        expect(
            screen.getByText(
                'Смартфон фиолетовый — девайс со складным корпусом и двумя экранами, что расширяет его возможности.',
            ),
        ).toBeInTheDocument();
    });

    test('should display correct image with alt text', () => {
        render(<ProductInfo good={mockGood} />, {wrapper});

        const image = screen.getByAltText(mockGood.name);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', mockGood.img_src);
    });

    test('should render rating with star icon', () => {
        render(<ProductInfo good={mockGood} />, {wrapper});

        const ratingContainer = screen.getByTestId('rating-container');
        expect(ratingContainer).toContainElement(screen.getByTestId('star-icon'));
        expect(ratingContainer).toHaveTextContent(mockGood.rating);
    });

    test('should render with different product data', () => {
        const anotherGood: Good = {
            id: '2',
            name: 'Ноутбук игровой',
            price: '129990',
            rating: '4.9',
            img_src: '/laptop.jpg',
            new_label: false,
            hit_label: true,
        };

        render(<ProductInfo good={anotherGood} />, {wrapper});

        expect(screen.getByText(anotherGood.name)).toBeInTheDocument();
        expect(screen.getByText(`${anotherGood.price} ₽`)).toBeInTheDocument();
        expect(screen.getByText(anotherGood.rating)).toBeInTheDocument();
    });
});
