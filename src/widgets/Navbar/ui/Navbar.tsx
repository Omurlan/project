import React from 'react';
import cn from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={cn(styles.Navbar, [className])}>
            <div className={styles.links}>
                <AppLink theme="secondary" to="/">
                    {t('Main')}
                </AppLink>
                <AppLink theme="secondary" to="/about">
                    {t('About site')}
                </AppLink>
            </div>
        </div>
    );
};
