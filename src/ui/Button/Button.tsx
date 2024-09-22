import {ButtonHTMLAttributes, memo} from 'react';
import classNames from 'classnames';
import {Button as MantineButton, ButtonProps as MantineButtonProps} from '@mantine/core';

import styles from './styles.module.css';

interface Props extends MantineButtonProps {
    type?: 'submit' | 'button' | 'reset';
}

export const Button = memo(function Button(props: Props) {
    const {className, ...other} = props;

    return <MantineButton className={classNames(styles.button, className)} {...other} />;
});
