'use client';

import {memo, useCallback, useState} from 'react';
import {Checkbox, CheckboxGroup, Flex, Input, RangeSlider} from '@mantine/core';

import {Button} from '@/ui';

import styles from './styles.module.css';

export const CatalogSidebar = memo(function CatalogSidebar() {
    const [rangeValue, setRangeValue] = useState<[number, number]>([100, 900]);
    const [types, setTypes] = useState<string[]>([]);
    const [colors, setColors] = useState<string[]>([]);

    const handlerRangeSliderChange = useCallback((value: [number, number]) => {
        setRangeValue(value);
    }, []);

    const hendlerSubmit = useCallback(() => {
        // eslint-disable-next-line no-console
        console.log('values');
    }, []);

    const hendlerReset = useCallback(() => {
        setTypes([]);
        setColors([]);
        setRangeValue([100, 900]);
    }, []);

    return (
        <Flex direction="column">
            <h1 className={styles.title}>Цена, ₽</h1>
            <Flex direction="row" gap="lg" mb="1rem">
                <div>
                    <div>От</div>
                    <Input defaultValue={rangeValue[0]} />
                </div>

                <div>
                    <div>До</div>
                    <Input defaultValue={rangeValue[1]} />
                </div>
            </Flex>
            <RangeSlider
                minRange={0}
                value={rangeValue}
                min={0}
                max={1000}
                step={1}
                onChange={handlerRangeSliderChange}
                label={null}
                mb="1rem"
            />

            <h1 className={styles.priceTitle}>Тип товара</h1>
            <CheckboxGroup onChange={setTypes} value={types} mb="1rem">
                <Flex direction="column" className={styles.checkboxes} gap="sm">
                    <Checkbox value="smartphone" description="Сматрфоны" />
                    <Checkbox value="braslette" description="Фитнес браслеты" />
                    <Checkbox value="acoustics" description="Портативная акустика" />
                </Flex>
            </CheckboxGroup>

            <h1 className={styles.priceTitle}>Цвет</h1>
            <CheckboxGroup onChange={setColors} value={colors} mb="1rem">
                <Flex direction="column" className={styles.checkboxes} gap="sm">
                    <Checkbox value="red" description="Красный" />
                    <Checkbox value="orange" description="Оранжевый" />
                    <Checkbox value="yellow" description="Желтый" />
                    <Checkbox value="green" description="Зеленый" />
                    <Checkbox value="blue" description="Голубой" />
                    <Checkbox value="navy_blue" description="Синий" />
                    <Checkbox value="violet" description="Фиолетовый" />
                </Flex>
            </CheckboxGroup>

            <Flex direction="row">
                <Button className={styles.button} onClick={hendlerSubmit}>
                    Показать
                </Button>

                <Button className={styles.button} onClick={hendlerReset} variant="subtle">
                    Сбросить
                </Button>
            </Flex>
        </Flex>
    );
});
