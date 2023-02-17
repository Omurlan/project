import React from 'react';
import cn from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ className }) => (
    <div className={cn(styles.PageLoader, [className])}>
        <Loader />
    </div>
);
