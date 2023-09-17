import { TheySay } from './TheySay';
import { WhyChooseUs } from './WhyChooseUs';
import styles from './styles.module.scss';

export const id = 'sobre-nos';

export function AboutUs() {
  return (
    <div className={styles.css} id={id}>
      <WhyChooseUs />
      <TheySay />
    </div>
  );
}
