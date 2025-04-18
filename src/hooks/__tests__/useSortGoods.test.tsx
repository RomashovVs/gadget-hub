import {renderHook} from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import {useSortGoods} from '../useSortGoods';
import {Good} from '@/types/goods';

describe('useSortGoods', () => {
    const mockGoods: Good[] = [
        {
            id: '1',
            name: 'Product A',
            price: '100',
            rating: '4.5',
            img_src: 'image1.jpg',
            new_label: true,
            hit_label: false,
        },
        {
            id: '2',
            name: 'Product B',
            price: '200',
            rating: '4.0',
            img_src: 'image2.jpg',
            new_label: false,
            hit_label: true,
        },
        {
            id: '3',
            name: 'Product C',
            price: '150',
            rating: '4.2',
            img_src: 'image3.jpg',
            new_label: false,
            hit_label: false,
        },
        {
            id: '4',
            name: 'Product D',
            price: '300',
            rating: '4.7',
            img_src: 'image4.jpg',
            new_label: true,
            hit_label: true,
        },
    ];

    test('should return original array when no sort provided', () => {
        const {result} = renderHook(() => useSortGoods(mockGoods, undefined as any));
        expect(result.current).toEqual(mockGoods);
    });

    test('should return empty array when goods is empty', () => {
        const {result} = renderHook(() => useSortGoods([], 'new'));
        expect(result.current).toEqual([]);
    });

    test('should return empty array when goods is null', () => {
        const {result} = renderHook(() => useSortGoods(null, 'new'));
        expect(result.current).toEqual([]);
    });

    test('should return empty array when goods is undefined', () => {
        const {result} = renderHook(() => useSortGoods(undefined, 'new'));
        expect(result.current).toEqual([]);
    });

    test('should sort by new_label when sort is "new"', () => {
        const {result} = renderHook(() => useSortGoods(mockGoods, 'new'));

        const sorted = result.current;
        expect(sorted?.[0].new_label).toBe(true);
        expect(sorted?.[1].new_label).toBe(true);
        expect(sorted?.[2].new_label).toBe(false);
        expect(sorted?.[3].new_label).toBe(false);
    });

    test('should sort by hit_label when sort is "popular"', () => {
        const {result} = renderHook(() => useSortGoods(mockGoods, 'popular'));

        const sorted = result.current;
        expect(sorted?.[0].hit_label).toBe(true);
        expect(sorted?.[1].hit_label).toBe(true);
        expect(sorted?.[2].hit_label).toBe(false);
        expect(sorted?.[3].hit_label).toBe(false);
    });

    test('should sort by price descending when sort is "costly"', () => {
        const {result} = renderHook(() => useSortGoods(mockGoods, 'costly'));

        const sorted = result.current;
        expect(sorted?.[0].price).toBe('300');
        expect(sorted?.[1].price).toBe('200');
        expect(sorted?.[2].price).toBe('150');
        expect(sorted?.[3].price).toBe('100');
    });

    test('should sort by price ascending when sort is "cheaper"', () => {
        const {result} = renderHook(() => useSortGoods(mockGoods, 'cheaper'));

        const sorted = result.current;
        expect(sorted?.[0].price).toBe('100');
        expect(sorted?.[1].price).toBe('150');
        expect(sorted?.[2].price).toBe('200');
        expect(sorted?.[3].price).toBe('300');
    });

    test('should not mutate original array', () => {
        const originalCopy = [...mockGoods];
        renderHook(() => useSortGoods(mockGoods, 'cheaper'));

        expect(mockGoods).toEqual(originalCopy);
    });

    test('should handle mixed new and hit labels correctly', () => {
        const {result} = renderHook(() => useSortGoods(mockGoods, 'new'));

        const sorted = result.current;
        // Product D has both new and hit labels
        expect(sorted?.[0].id).toBe('1'); // Product A (new)
        expect(sorted?.[1].id).toBe('4'); // Product D (new + hit)
        expect(sorted?.[2].id).toBe('2'); // Product B (hit)
        expect(sorted?.[3].id).toBe('3'); // Product C (none)
    });
});
