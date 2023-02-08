import React from "react";
import styles from "./Navbar.module.scss";
import cn from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={cn(styles.Navbar, [className])}>
      <div className={styles.links}>
        <AppLink theme="secondary" to="/">
          Главная
        </AppLink>
        <AppLink theme="secondary" to="/about">
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
