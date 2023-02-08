import styles from "./LangSwitcher.module.scss";
import cn from "shared/lib/classNames/classNames";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div className={cn(styles.LangSwitcher, [className])}>
      <Button onClick={toggle}>{t("language")}</Button>
    </div>
  );
};
