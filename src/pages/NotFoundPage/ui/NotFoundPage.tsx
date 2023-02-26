import React from 'react';
import cn from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={cn(styles.NotFoundPage, [className])}>
            {t('notFound')}
        </div>
    );
};

export default NotFoundPage;
