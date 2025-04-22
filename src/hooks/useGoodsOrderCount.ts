import {OrderElement} from '@/types/order';

export const useGoodsOrderCount = (order: OrderElement[]) =>
    order?.reduce((prevCount, {count, select}) => {
        if (select) {
            return prevCount + count;
        }

        return prevCount;
    }, 0);
