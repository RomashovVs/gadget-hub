import {Good} from '@/types/goods';
import {Sort} from '@/types/sort';

const compareSortNew = (a: Good, b: Good) => (a.new_label === b.new_label ? 0 : a.new_label ? -1 : 1);

const compareSortHit = (a: Good, b: Good) => (a.hit_label === b.hit_label ? 0 : a.hit_label ? -1 : 1);

export const useSortGoods = (_goods: Good[] | undefined | null, sort: Sort) => {
    // TODO Убрать на бэк, тут не место
    const goods = [...(_goods ?? [])];

    if (sort === 'new') {
        return goods.sort(compareSortNew);
    }

    if (sort === 'popular') {
        return goods.sort(compareSortHit);
    }

    if (sort === 'costly') {
        return goods.sort((a, b) => Number(b.price) - Number(a.price));
    }

    if (sort === 'cheaper') {
        return goods.sort((a, b) => Number(a.price) - Number(b.price));
    }

    return goods;
};
