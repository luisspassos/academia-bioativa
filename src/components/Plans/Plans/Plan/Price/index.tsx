import { PlanProps } from '..';
import { PriceText } from './PriceText';
import styles from './styles.module.scss';

type PriceProps = {
  price: PlanProps['price'];
  dividedIn?: number;
};

export function Price({ price, dividedIn }: PriceProps) {
  if (dividedIn) {
    return (
      <div className={styles.container}>
        <small aria-label={`${dividedIn} vezes de`}>{dividedIn}X</small>
        <div>
          <PriceText price={price} />
          <small>POR MÊS</small>
        </div>
      </div>
    );
  }

  return <PriceText price={price} className={styles.price} />;
}
