import {render, screen} from '@testing-library/react';
import {describe, test, expect, vi} from 'vitest';
import {Good} from '@/types/goods';
import {MantineProvider} from '@mantine/core';
import {GoodModal} from '../GoodModal';

const mockGood: Good = {
    id: '1',
    name: 'Телефон',
    price: '10000',
    rating: '4.5',
    img_src: 'phone.jpg',
};

vi.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => <img {...props} />,
}));

const Wrapper = ({children}: {children: React.ReactNode}) => <MantineProvider>{children}</MantineProvider>;

describe('GoodModal', () => {
    test('renders modal with product info when opened', () => {
        render(<GoodModal opened={true} onClose={vi.fn()} good={mockGood} />, {wrapper: Wrapper});

        expect(screen.getByText('Телефон')).toBeInTheDocument();
        expect(screen.getByText('В корзину')).toBeInTheDocument();
    });

    test('does not render when not opened', () => {
        const screen = render(<GoodModal opened={false} onClose={vi.fn()} good={mockGood} />, {wrapper: Wrapper});

        expect(screen.getByTestId('GoodModal')).toBeEmptyDOMElement();
    });

    test('renders close button', () => {
        render(<GoodModal opened={true} onClose={vi.fn()} good={mockGood} />, {wrapper: Wrapper});

        expect(screen.getByTestId('close')).toBeInTheDocument();
    });
});
