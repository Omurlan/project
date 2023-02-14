import React from 'react';
import cn from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export type AppLinkTypes = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTypes;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        to, className, children, theme = 'primary', ...rest
    } = props;

    return (
        <Link
            to={to}
            className={cn(styles.AppLink, [className, styles[theme]])}
            {...rest}
        >
            {children}
        </Link>
    );
};
