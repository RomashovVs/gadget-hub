import {ButtonHTMLAttributes, memo} from 'react';
import classNames from 'classnames';
import {Button as ButtonMantine, ButtonProps as ButtonPropsMantine} from '@mantine/core';

import styles from './styles.module.css';

interface Props extends ButtonPropsMantine {}

export const Button = memo(function Button(props: Props) {
    const {className, ...other} = props;

    return <ButtonMantine className={classNames(styles.button, className)} {...other} />;
});
