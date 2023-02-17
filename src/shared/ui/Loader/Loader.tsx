import React from 'react';
import cn from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ className }) => (
    <div className={cn('lds-ellipsis', [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
