'use client';

import {FormEvent, KeyboardEvent, memo, useCallback, useState} from 'react';
import {Checkbox, CheckboxGroup, Flex, Input, RangeSlider} from '@mantine/core';

import {CatalogFilters} from '@/types/filters';
import {Button} from '@/ui';

import styles from './styles.module.css';

const LEFT_RANGE_DEFAULT = 0;
const RIGHT_RANGE_DEFAULT = 100000;

interface Props {
    onSetFilters(value: CatalogFilters): void;
}

export const CatalogSidebar = memo(function CatalogSidebar(props: Props) {
    // TODO Remove in RangeSlider
    const [rangeValue, setRangeValue] = useState<[number, number]>([LEFT_RANGE_DEFAULT, RIGHT_RANGE_DEFAULT]);
    const [inputValues, setInputValues] = useState<[number, number]>([LEFT_RANGE_DEFAULT, RIGHT_RANGE_DEFAULT]);

    const {onSetFilters} = props;

    const [types, setTypes] = useState<string[]>([]);
    const [colors, setColors] = useState<string[]>([]);

    const handleRangeSliderChange = useCallback((value: [number, number]) => {
        setRangeValue(value);
        setInputValues(value);
    }, []);

    const handleRightInputValueChange = useCallback((e: FormEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value);

        setInputValues((prev) => {
            return [prev[0], newValue];
        });
    }, []);
    const handleLeftInputValueChange = useCallback((e: FormEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value);

        setInputValues((prev) => {
            return [newValue, prev[1]];
        });
    }, []);

    const handleRightSliderChange = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') {
            return;
        }

        const newValue = Number(e.currentTarget.value);

        if (Number.isNaN(newValue)) {
            setRangeValue((prev) => {
                return [prev[0], 0];
            });
        }

        setRangeValue((prev) => {
            return [prev[0], newValue];
        });
    }, []);
    const handleLeftSliderChange = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') {
            return;
        }

        const newValue = Number(e.currentTarget.value);

        if (Number.isNaN(newValue)) {
            setRangeValue((prev) => {
                return [100, prev[1]];
            });
        }

        setRangeValue((prev) => {
            return [newValue, prev[1]];
        });
    }, []);

    const handleSubmit = useCallback(() => {
        onSetFilters({rangeCost: rangeValue, colors, types});
    }, [colors, onSetFilters, rangeValue, types]);

    const hendlerReset = useCallback(() => {
        setTypes([]);
        setColors([]);
        setRangeValue([LEFT_RANGE_DEFAULT, RIGHT_RANGE_DEFAULT]);

        onSetFilters({rangeCost: [LEFT_RANGE_DEFAULT, RIGHT_RANGE_DEFAULT], colors: [], types: []});
    }, [onSetFilters]);

    return (
        <Flex direction="column">
            <h1 className={styles.title}>Цена, ₽</h1>

            {/* TODO Create RangeSlider */}
            <Flex direction="row" gap="lg" mb="1rem">
                <div>
                    <div>От</div>
                    <Input
                        value={inputValues[0]}
                        onKeyDown={handleLeftSliderChange}
                        onChange={handleLeftInputValueChange}
                    />
                </div>

                <div>
                    <div>До</div>
                    <Input
                        value={inputValues[1]}
                        onKeyDown={handleRightSliderChange}
                        onChange={handleRightInputValueChange}
                    />
                </div>
            </Flex>
            <RangeSlider
                minRange={0}
                value={rangeValue}
                min={0}
                max={100000}
                step={1}
                onChange={handleRangeSliderChange}
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

            <Flex direction="row" mb="md">
                <Button className={styles.button} onClick={handleSubmit}>
                    Показать
                </Button>

                <Button className={styles.button} onClick={hendlerReset} variant="subtle">
                    Сбросить
                </Button>
            </Flex>
        </Flex>
    );
});
