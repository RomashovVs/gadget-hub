import {OrderElement} from '@/types/order';

export const useOrderTotalPrice = (order: OrderElement[]) =>
    order?.reduce((prevCount, good) => {
        if (good.select) {
            return prevCount + Number(good.price ?? 0) * good.count;
        }

        return prevCount;
    }, 0);
