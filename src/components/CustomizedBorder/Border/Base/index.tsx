import styles from './styles.module.scss';

type DefaultProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type BaseProps = DefaultProps;

export function Base({ className, ...rest }: BaseProps) {
  return <div className={styles.base + ' ' + className} {...rest} />;
}
