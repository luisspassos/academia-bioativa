import { ReactNode } from 'react';
import { Top } from './Border/Top';
import { Bottom } from './Border/Bottom';
import styles from './styles.module.scss';

type DefaultProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type CustomizedBorderProps = {
  children: ReactNode;
} & DefaultProps;

export function CustomizedBorder({
  children,
  className,
  ...rest
}: CustomizedBorderProps) {
  return (
    <div className={styles.customizedBorder + ' ' + className} {...rest}>
      <Top />
      {children}
      <Bottom />
    </div>
  );
}
