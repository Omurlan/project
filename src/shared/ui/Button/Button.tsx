import React, { ComponentProps } from 'react';
import cn from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export type ButtonTypes = 'clear' | 'outlined';

interface ButtonProps extends ComponentProps<'button'> {
  className?: string;
  theme?: ButtonTypes;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    theme,
    children,
    ...props
}) => (
    <button
        type="button"
        className={cn(styles.Button, [className], {
            [styles.clear]: theme === 'clear',
            [styles.outlined]: theme === 'outlined',
        })}
        {...props}
    >
        {children}
    </button>
);
