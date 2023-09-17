import { Base } from '../Base';
import { Map } from './Map';
import styles from './style.module.scss';

export function Address() {
  return (
    <Base className={styles.base} title='Endereço'>
      <address className={styles.css}>
        <Map />
      </address>
    </Base>
  );
}
