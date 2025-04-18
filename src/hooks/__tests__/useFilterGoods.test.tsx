import {renderHook} from '@testing-library/react';

import {useFilterGoods} from '../useFilterGoods';
import {Good} from '@/types/goods';
import {CatalogFilters} from '@/types/filters';

describe('useFilterGoods', () => {
    // Моковые данные для тестов
    const mockGoods: Good[] = [
        {id: '1', price: '100', color: ['red'], type: ['shirt'], name: '', rating: '', img_src: ''},
        {id: '2', price: '200', color: ['blue'], type: ['pants'], name: '', rating: '', img_src: ''},
        {id: '3', price: '300', color: ['green'], type: ['hat'], name: '', rating: '', img_src: ''},
        {id: '4', price: '400', color: ['red'], type: ['shoes'], name: '', rating: '', img_src: ''},
        {id: '5', price: '500', color: ['blue'], type: ['hat'], name: '', rating: '', img_src: ''},
    ];

    test('should return all goods when no filters applied', () => {
        const {result} = renderHook(() => useFilterGoods(mockGoods, undefined));
        expect(result.current).toEqual(mockGoods);
    });

    test('should return all goods when filters are empty', () => {
        const emptyFilters: CatalogFilters = {rangeCost: [] as never as [number, number], colors: [], types: []};
        const {result} = renderHook(() => useFilterGoods(mockGoods, emptyFilters));
        expect(result.current).toEqual(mockGoods);
    });

    test('should filter by price range', () => {
        const filters: CatalogFilters = {rangeCost: [150, 450], colors: [], types: []};
        const {result} = renderHook(() => useFilterGoods(mockGoods, filters));

        expect(result.current).toEqual([
            {id: '2', price: '200', color: ['blue'], type: ['pants'], name: '', rating: '', img_src: ''},
            {id: '3', price: '300', color: ['green'], type: ['hat'], name: '', rating: '', img_src: ''},
            {id: '4', price: '400', color: ['red'], type: ['shoes'], name: '', rating: '', img_src: ''},
        ]);
    });

    test('should filter by color', () => {
        const filters: CatalogFilters = {
            rangeCost: [] as never as [number, number],
            colors: ['red', 'blue'],
            types: [],
        };
        const {result} = renderHook(() => useFilterGoods(mockGoods, filters));

        expect(result.current).toEqual([
            {id: '1', price: '100', color: ['red'], type: ['shirt'], name: '', rating: '', img_src: ''},
            {id: '2', price: '200', color: ['blue'], type: ['pants'], name: '', rating: '', img_src: ''},
            {id: '4', price: '400', color: ['red'], type: ['shoes'], name: '', rating: '', img_src: ''},
            {id: '5', price: '500', color: ['blue'], type: ['hat'], name: '', rating: '', img_src: ''},
        ]);
    });

    test('should filter by type', () => {
        const filters: CatalogFilters = {
            rangeCost: [] as never as [number, number],
            colors: [],
            types: ['hat', 'shoes'],
        };
        const {result} = renderHook(() => useFilterGoods(mockGoods, filters));

        expect(result.current).toEqual([
            {id: '3', price: '300', color: ['green'], type: ['hat'], name: '', rating: '', img_src: ''},
            {id: '4', price: '400', color: ['red'], type: ['shoes'], name: '', rating: '', img_src: ''},
            {id: '5', price: '500', color: ['blue'], type: ['hat'], name: '', rating: '', img_src: ''},
        ]);
    });

    test('should combine multiple filters', () => {
        const filters: CatalogFilters = {
            rangeCost: [199, 501],
            colors: ['red', 'blue'],
            types: ['shirt', 'hat'],
        };
        const {result} = renderHook(() => useFilterGoods(mockGoods, filters));

        expect(result.current).toStrictEqual([
            {id: '5', price: '500', color: ['blue'], type: ['hat'], name: '', rating: '', img_src: ''},
        ]);
    });

    test('should return undefined when goods is undefined', () => {
        const {result} = renderHook(() => useFilterGoods(undefined, undefined));
        expect(result.current).toBeUndefined();
    });

    test('should return null when goods is null', () => {
        const {result} = renderHook(() => useFilterGoods(null, undefined));
        expect(result.current).toBeNull();
    });

    test('should return empty array when no goods match filters', () => {
        const filters: CatalogFilters = {rangeCost: [1000, 2000], colors: [], types: []};
        const {result} = renderHook(() => useFilterGoods(mockGoods, filters));
        expect(result.current).toEqual([]);
    });
});
