import { Star } from './Star';
import styles from './styles.module.scss';

export function Stars() {
  return (
    <div className={styles.stars}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}
