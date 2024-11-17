import {memo} from 'react';
import {Checkbox, Flex, Group, Radio, Select, TextInput} from '@mantine/core';
import {useForm} from '@mantine/form';

import {Button} from '@/ui';

import {dataPayForm, defaultPayForm} from './constants';
import styles from './styles.module.css';

export const OrderForm = memo(function OrderForm() {
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

    return (
        <>
            <div className={styles.title}>Оформление заказа</div>
            <div className={styles.conatiner}>
                {/* eslint-disable-next-line no-console */}
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
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

                        <Button className={styles.button} type="submit">
                            Оформить заказ
                        </Button>
                    </Flex>
                </form>
            </div>
        </>
    );
});
