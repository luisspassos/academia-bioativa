import { createContext, ReactNode, useContext, useState } from 'react';
import { data } from './data';

type DataIndexProviderProps = {
  children: ReactNode;
};

type DataIndexContextType = {
  dataIndex: number;
  setDataIndex: React.Dispatch<React.SetStateAction<number>>;
  currentData: (typeof data)[number];
};

export const DataIndexContext = createContext({} as DataIndexContextType);

export function DataIndexProvider({ children }: DataIndexProviderProps) {
  const [dataIndex, setDataIndex] = useState(0);
  const currentData = data[dataIndex];

  return (
    <DataIndexContext.Provider value={{ dataIndex, setDataIndex, currentData }}>
      {children}
    </DataIndexContext.Provider>
  );
}

export function useDataIndex() {
  const data = useContext(DataIndexContext);

  return data;
}
