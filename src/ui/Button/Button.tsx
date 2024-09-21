import {ButtonHTMLAttributes, memo} from 'react';
import classNames from 'classnames';
import {Button as ButtonAnt, ButtonProps as ButtonPropsAnt} from 'antd';

import styles from './styles.module.css';

interface Props extends ButtonPropsAnt {}

export const Button = memo(function Button(props: Props) {
    const {className, ...other} = props;

    return <ButtonAnt className={classNames(styles.button, className)} {...other} />;
});
