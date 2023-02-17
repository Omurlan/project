import React, { ComponentProps } from 'react';
import cn from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export type ButtonTypes = 'CLEAR';

interface ButtonProps extends ComponentProps<'button'> {
  className?: string;
  theme?: ButtonTypes;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    children,
    ...props
}) => (
    <button type="button" className={cn(styles.Button, [styles.clear, className])} {...props}>
        {children}
    </button>
);
