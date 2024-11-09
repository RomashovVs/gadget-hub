import {memo, MouseEventHandler} from 'react';
import classNames from 'classnames';
import {Button as MantineButton, ButtonProps as MantineButtonProps} from '@mantine/core';

import styles from './styles.module.css';

interface Props extends Omit<MantineButtonProps, 'onClick'> {
    type?: 'submit' | 'button' | 'reset';
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = memo(function Button(props: Props) {
    const {className, ...other} = props;

    return <MantineButton className={classNames(styles.button, className)} {...other} />;
});
