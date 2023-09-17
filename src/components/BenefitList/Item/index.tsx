import { BsCheck2Circle } from 'react-icons/bs';
import styles from './style.module.scss';
import { PlanProps } from '../../Plans/Plans/Plan';

type ItemProps = {
  benefit: PlanProps['benefits'][number];
};

export function Item({ benefit }: ItemProps) {
  const isObject = typeof benefit === 'object';
  const isHighlighted = isObject && benefit.isHighlighted;

  const text = isObject ? benefit.text : benefit;
  const highlightedClass = isHighlighted ? styles.highlighted : '';

  const icon = isHighlighted ? <span>🎉</span> : <BsCheck2Circle />;

  return (
    <li className={styles.item + ' ' + highlightedClass}>
      {icon}
      {text}
    </li>
  );
}
