import { useDataIndex } from '../../../../../contexts/DataIndex';
import styles from './styles.module.scss';

export function Testimony() {
  const { currentData } = useDataIndex();

  return <p className={styles.css}>{currentData.testimony}</p>;
}
