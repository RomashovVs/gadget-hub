import {CatalogFilters} from '@/types/filters';
import {Good} from '@/types/goods';

export const useFilterGoods = (goods: Good[] | undefined | null, filters: CatalogFilters | undefined) => {
    if (!filters) {
        return goods;
    }

    const {rangeCost} = filters;

    const newGoods = goods?.filter((good) => Number(good.price) > rangeCost[0] && Number(good.price) < rangeCost[1]);

    return newGoods;
};
