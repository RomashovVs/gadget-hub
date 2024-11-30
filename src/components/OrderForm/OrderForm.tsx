import {FormEvent, memo, useCallback} from 'react';
import {Checkbox, Flex, Group, Radio, Select, TextInput} from '@mantine/core';
import {useForm} from '@mantine/form';

import {useLocalStorage} from '@/hooks';
import {addOrderDetails} from '@/lib/api/order';
import {Good} from '@/types/goods';
import {Button} from '@/ui';

import {dataPayForm, defaultPayForm} from './constants';
import styles from './styles.module.css';

export const OrderForm = memo(function OrderForm() {
    // TODO Убрать в общий хук, чтобы не знать ничего о типах и использовать только значения из хука {count, totalPrice}
    const [order, setOrder] = useLocalStorage<(Good & {select?: boolean; count: number})[]>('order');

    const count = order?.reduce((prevCount, {count, select}) => {
        if (select) {
            return prevCount + count;
        }

        return prevCount;
    }, 0);

    const totalPrice = order?.reduce((prevCount, good) => {
        if (good.select) {
            return prevCount + Number(good.price ?? 0) * good.count;
        }

        return prevCount;
    }, 0);

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
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Error'),
            addres: (value, {choseDelivery}) => (value.length > 0 || choseDelivery !== 'delivery' ? null : 'Error'),
        },
    });

    const handleSubmit = useCallback(
        (values: unknown, event: FormEvent | undefined) => {
            event?.preventDefault();

            void (async () =>
                await addOrderDetails({
                    number: String(Math.floor(100000 + Math.random() * 900000)),
                    at: new Date(),
                    countDevices: count,
                    totalCost: totalPrice,
                }))();

            setOrder([...order].filter(({select}) => !select));

            // eslint-disable-next-line no-console
            console.log(values);
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
                                key={form.key('phone')}
                                {...form.getInputProps('phone')}
                            />

                            <TextInput
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
                                <Radio value="selfPickup" label="Самовывоз" />
                                <Radio value="delivery" label="Доставка" />
                            </Group>
                        </Radio.Group>

                        {form.getValues().choseDelivery === 'delivery' && (
                            <TextInput
                                withAsterisk
                                w="100%"
                                label="Адрес"
                                key={form.key('addres')}
                                {...form.getInputProps('addres')}
                            />
                        )}

                        <Select label="Способ оплаты" data={dataPayForm} {...form.getInputProps('payForm')} />

                        <Checkbox
                            mt="md"
                            label="Нужна упаковка"
                            key={form.key('needPackage')}
                            {...form.getInputProps('needPackage', {type: 'checkbox'})}
                        />

                        <Button className={styles.button} type="submit" disabled={count === 0}>
                            Оформить заказ
                        </Button>
                    </Flex>
                </form>
            </div>
        </>
    );
});
