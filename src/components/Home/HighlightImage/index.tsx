import { Fade } from '../../Fade';
import { Triangle } from './Triangle';
import styles from './style.module.scss';
import womanFirstImg from './assets/woman_first.png';

export function HighlightImage() {
  return (
    <Fade className={styles.fade} direction='right'>
      <div className={styles.container}>
        <Triangle />
        <img
          src={womanFirstImg}
          alt='Mulher segurando peso'
          width={958}
          height={1177}
          className={styles.first}
        />
      </div>
    </Fade>
  );
}
