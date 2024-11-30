'use server';

import {Order} from '@/models';
import {OrderDetail} from '@/types/order';

export const getOrderDetails = async (): Promise<OrderDetail[] | null | undefined> => {
    try {
        const orderDetails = await Order.find(
            {},
            {
                _id: 0,
                number: 1,
                at: 1,
                countDevices: 1,
                totalCost: 1,
            },
        )
            .lean()
            .exec();

        return orderDetails;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};
