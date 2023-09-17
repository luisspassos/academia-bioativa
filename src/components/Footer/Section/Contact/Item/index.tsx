import { IconType } from 'react-icons';
import styles from './style.module.scss';

type DefaultProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type ItemProps = {
  href: string;
  Icon: IconType;
  text: string;
} & DefaultProps;

export function Item({ href, Icon, text, ...rest }: ItemProps) {
  return (
    <a className={styles.item} href={href} {...rest}>
      <Icon />
      (38) {text}
    </a>
  );
}
