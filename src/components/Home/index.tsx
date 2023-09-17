import { useGetHeaderHeight } from '../../hooks/getHeaderHeight';
import { Content } from './Content';
import { HighlightImage } from './HighlightImage';

import styles from './style.module.scss';

export const id = 'inicio';

export function Home() {
  const { height } = useGetHeaderHeight();

  return (
    <div
      style={{
        scrollMarginTop: height.rem,
      }}
      id={id}
    >
      <section className={styles.home}>
        <Content />
        <HighlightImage />
      </section>
    </div>
  );
}
