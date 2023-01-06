import { useQuery } from '@tanstack/react-query';
import { Office } from './types';

export const fetchOffices = async (): Promise<Office> => await (await fetch('/api/offices')).json();

export const useGetOffices = () => {
  return useQuery<Office>(['offices'], () => fetchOffices());
};
