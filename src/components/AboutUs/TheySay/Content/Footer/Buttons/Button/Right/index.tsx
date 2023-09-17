import { BsArrowRight } from 'react-icons/bs';
import { Button } from '..';
import { useDataIndex } from '../../../../../../../../contexts/DataIndex';
import { data } from '../../../../../../../../contexts/data';

export function Right() {
  const { dataIndex, setDataIndex } = useDataIndex();

  const isBlocked = dataIndex === data.length - 1;

  function handleAdvance() {
    setDataIndex((prev) => prev + 1);
  }

  return (
    <Button
      aria-label='Voltar'
      onClick={handleAdvance}
      blocked={isBlocked}
      Icon={BsArrowRight}
    />
  );
}
