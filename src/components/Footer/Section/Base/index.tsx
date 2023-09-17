import { ReactNode } from 'react';
import styles from './style.module.scss';
import { Fade } from '../../../Fade';

type BaseProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function Base({ children, title, className }: BaseProps) {
  return (
    <Fade className={styles.base + ' ' + className} direction='up'>
      <section>
        <h1>{title}</h1>
        {children}
      </section>
    </Fade>
  );
}
