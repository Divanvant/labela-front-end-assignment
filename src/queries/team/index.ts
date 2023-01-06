import { useQuery } from '@tanstack/react-query';
import { Team } from './types';

export const fetchTeam = async (): Promise<Team> => await (await fetch('/api/team')).json();

export const useGetTeam = () => {
  return useQuery<Team>(['team'], () => fetchTeam());
};
