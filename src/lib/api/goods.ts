'use server';

import {Good} from '@/models';
import {Good as TGood} from '@/types/goods';

export const getGood = async (): Promise<TGood[] | null | undefined> => {
    try {
        const goods = await Good.find(
            {},
            {
                _id: 0,
                id: 1,
                name: 1,
                img_src: 1,
                hit_label: 1,
                new_label: 1,
                price: 1,
                rating: 1,
                color: 1,
                type: 1,
            },
        )
            .lean()
            .exec();

        return goods;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};
