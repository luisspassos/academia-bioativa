import { PlanProps } from '../Plans/Plans/Plan';
import { Item } from './Item';
import styles from './style.module.scss';

type BenefitListProps = {
  benefits: PlanProps['benefits'];
  className: string;
};

export function BenefitList({ benefits, className }: BenefitListProps) {
  return (
    <ul className={styles.list + ' ' + className}>
      {benefits.map((benefit) => {
        const key = typeof benefit === 'object' ? benefit.text : benefit;

        return <Item benefit={benefit} key={key} />;
      })}
    </ul>
  );
}
