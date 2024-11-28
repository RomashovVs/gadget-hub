import {CatalogFilters} from '@/types/filters';
import {Good} from '@/types/goods';

export const useFilterGoods = (goods: Good[] | undefined | null, filters: CatalogFilters | undefined) => {
    if (!filters) {
        return goods;
    }

    const {rangeCost, colors, types} = filters;

    let result = goods;

    if (rangeCost.length) {
        result = result?.filter((good) => Number(good.price) > rangeCost[0] && Number(good.price) < rangeCost[1]);
    }

    if (colors.length) {
        result = result?.filter(({color}) => colors.some((c) => color?.includes(c)));
    }

    if (types.length) {
        result = result?.filter(({type}) => types.some((t) => type?.includes(t)));
    }

    return result;
};
