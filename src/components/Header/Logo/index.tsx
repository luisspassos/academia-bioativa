import logo from './logo.png';

import styles from './styles.module.scss';

export function Logo() {
  return (
    <a className={styles.link} href='/'>
      <img
        height={385}
        width={522}
        className={styles.logo}
        src={logo}
        alt='logo'
      />
    </a>
  );
}
