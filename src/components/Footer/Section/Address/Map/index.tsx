import { CustomizedBorder } from '../../../../CustomizedBorder';
import styles from './style.module.scss';

export function Map() {
  return (
    <CustomizedBorder className={styles.container}>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282.591928530981!2d-43.89047726167701!3d-16.744407108406328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab5376a3eba32f%3A0x3649e59acf43de38!2sBioativa%20Academia%20Feminina!5e0!3m2!1spt-BR!2sbr!4v1694368148723!5m2!1spt-BR!2sbr'
        className={styles.map}
        style={{ border: 0 }}
        allowFullScreen={false}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </CustomizedBorder>
  );
}
