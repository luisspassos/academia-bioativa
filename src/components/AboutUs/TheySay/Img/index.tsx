import { useDataIndex } from '../../../../contexts/DataIndex';
import { CustomizedBorder } from '../../../CustomizedBorder';
import styles from './styles.module.scss';

export function Img() {
  const {
    currentData: { img, name },
  } = useDataIndex();

  return (
    <CustomizedBorder className={styles.container}>
      <img
        className={styles.img}
        width={350}
        height={390}
        src={img}
        alt={`Foto de ${name}`}
      />
    </CustomizedBorder>
  );
}
