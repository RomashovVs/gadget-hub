import {FormEvent, memo, useCallback} from 'react';
import {Checkbox, Flex, Group, Radio, Select, TextInput} from '@mantine/core';
import {useForm} from '@mantine/form';

import {useLocalStorage} from '@/hooks';
import {useGoodsOrderCount} from '@/hooks/useGoodsOrderCount';
import {useOrderTotalPrice} from '@/hooks/useOrderTotalPrice';
import {addOrderDetails} from '@/lib/api/order';
import {OrderElement} from '@/types/order';
import {Button} from '@/ui';

import {dataPayForm, defaultPayForm} from './constants';
import {getOrderNumber} from './logic';
import styles from './styles.module.css';

const EMAIL_REGEXP = /^\S+@\S+$/;

export const OrderForm = memo(function OrderForm() {
    // TODO Убрать в общий хук, чтобы не знать ничего о типах и использовать только значения из хука {count, totalPrice}
    const [order, setOrder] = useLocalStorage<OrderElement[]>('order');

    const count = useGoodsOrderCount(order);

    const totalPrice = useOrderTotalPrice(order);

    const form = useForm({
        mode: 'uncontrolled',
        clearInputErrorOnChange: false,
        initialValues: {
            phone: '',
            email: '',
            needPackage: false,
            payForm: defaultPayForm,
            choseDelivery: 'selfPickup',
            addres: '',
        },
        validate: {
            email: (value) => (EMAIL_REGEXP.test(value) ? null : 'Error'),
            addres: (value, {choseDelivery}) => (value.length > 0 || choseDelivery !== 'delivery' ? null : 'Error'),
        },
    });

    const handleSubmit = useCallback(
        (values: unknown, event: FormEvent | undefined) => {
            event?.preventDefault();

            void (async () =>
                await addOrderDetails({
                    number: getOrderNumber(),
                    at: new Date(),
                    countDevices: count,
                    totalCost: totalPrice,
                }))();

            setOrder([...order].filter(({select}) => !select));

            // eslint-disable-next-line no-console
            // console.log(values);
        },
        [count, order, setOrder, totalPrice],
    );

    return (
        <>
            <div className={styles.title}>Оформление заказа</div>
            <div className={styles.conatiner}>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Flex gap="1rem" direction="column" w="50%">
                        <Flex direction="row" gap="md">
                            <TextInput
                                w="100%"
                                label="Телефон"
                                data-testid="Телефон"
                                key={form.key('phone')}
                                {...form.getInputProps('phone')}
                            />

                            <TextInput
                                data-testid="Email"
                                withAsterisk
                                label="Email"
                                w="100%"
                                key={form.key('email')}
                                {...form.getInputProps('email')}
                            />
                        </Flex>

                        <Radio.Group
                            name="favoriteFramework"
                            key={form.key('email')}
                            {...form.getInputProps('choseDelivery')}
                        >
                            <Group mt="xs">
                                <Radio value="selfPickup" label="Самовывоз" data-testid="Самовывоз" />
                                <Radio value="delivery" label="Доставка" data-testid="Доставка" />
                            </Group>
                        </Radio.Group>

                        {form.getValues().choseDelivery === 'delivery' && (
                            <TextInput
                                data-testid="Адрес"
                                withAsterisk
                                w="100%"
                                label="Адрес"
                                key={form.key('addres')}
                                {...form.getInputProps('addres')}
                            />
                        )}

                        <Select
                            data-testid="Способ оплаты"
                            label="Способ оплаты"
                            data={dataPayForm}
                            {...form.getInputProps('payForm')}
                        />

                        <Checkbox
                            data-testid="Нужна упаковка"
                            mt="md"
                            label="Нужна упаковка"
                            key={form.key('needPackage')}
                            {...form.getInputProps('needPackage', {type: 'checkbox'})}
                        />

                        <Button
                            className={styles.button}
                            type="submit"
                            disabled={count === 0}
                            data-testid="Оформить заказ"
                        >
                            Оформить заказ
                        </Button>
                    </Flex>
                </form>
            </div>
        </>
    );
});
