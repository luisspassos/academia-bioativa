import { Base } from '../Base';
import { Item } from './Item';
import {
  Icon as WhatsappIcon,
  link as whatsappLink,
} from '../../../WhatsappButton';
import { BsTelephone } from 'react-icons/bs';
import styles from './style.module.scss';
import { phone } from '../../../../utils/contact';

export function Contact() {
  const phoneText = '3084-7123';

  return (
    <Base title='Contato' className={styles.base}>
      <address className={styles.css}>
        <Item
          text={phoneText}
          target='_blank'
          Icon={WhatsappIcon}
          href={whatsappLink}
        />
        <Item text={phoneText} Icon={BsTelephone} href={`tel:${phone}`} />
      </address>
    </Base>
  );
}
