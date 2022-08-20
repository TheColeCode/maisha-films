import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

export default function Layout({ children }) {
  const setAppTheme = () => {
    document.documentElement.classList.add('dark');
    return;
  };

  useEffect(() => {
    setAppTheme();
  }, []);

  return (
    <div className="relative pb-24 overflow-hidden">
      <div className="items-center w-full mx-auto">
        {children}
      </div>
    </div>
  );
}
