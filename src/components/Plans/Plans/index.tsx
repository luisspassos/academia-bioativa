import { Fade } from '../../Fade';
import { Plan } from './Plan';
import { plans } from './plans';
import styles from './styles.module.scss';

export type SetIsFinal = React.Dispatch<React.SetStateAction<boolean | null>>;

export function Plans() {
  return (
    <Fade style={{ width: '100%' }} direction='up'>
      <div className={styles.container}>
        <ol id='plans' className={styles.plans}>
          {plans.map((plan) => (
            <Plan {...plan} key={plan.name} />
          ))}
        </ol>
      </div>
    </Fade>
  );
}
