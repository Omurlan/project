import React from 'react';
import cn from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={cn(styles.PageError, [className])}>
            <p className={styles.text}>{t('Unexpected Error Occurred')}</p>
            <Button onClick={reloadPage}>
                {t('Update page')}
            </Button>
        </div>
    );
};
