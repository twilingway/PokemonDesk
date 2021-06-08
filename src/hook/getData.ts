import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTypesAction } from '../store/pokemon';
import req from '../utils/request';

export interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

export interface IPokemon {
  abilities: string[];
  stats: IStats;
  types: string[];
  img: string;
  name: string;

  height: number;
  id: number;

  order: number;
  weight: number;
}

const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const result = await req<T>(endpoint, query);
        dispatch(getTypesAction());
        setData(result);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, isLoading, isError };
};

export default useData;
