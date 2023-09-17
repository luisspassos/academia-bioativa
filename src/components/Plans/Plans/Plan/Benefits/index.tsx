import { PlanProps } from '..';
import { BenefitList } from '../../../../BenefitList';
import styles from './style.module.scss';

type BenefitsProps = {
  benefits: PlanProps['benefits'];
};

export function Benefits({ benefits }: BenefitsProps) {
  return <BenefitList className={styles.benefits} benefits={benefits} />;
}
