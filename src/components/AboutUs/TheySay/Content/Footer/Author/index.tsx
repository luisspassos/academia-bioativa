import { Name } from './Name';
import { Stars } from './Stars';
import styles from './styles.module.scss';

export function Author() {
  return (
    <div className={styles.css}>
      <Name />
      <div>-</div>
      <Stars />
    </div>
  );
}
