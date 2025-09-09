import { useQuery } from '@tanstack/react-query';
import { CompanyData } from '../types/vacancies.types';
import { vacanciesService } from '../services/getVacancies.service';

export function useVacancies() {
  const { data, isLoading, isError, isSuccess } = useQuery<CompanyData[]>({
    queryKey: ['vacancies'],
    queryFn: () => {
      return vacanciesService.getVacancies();
    },
    staleTime: 60_000,
  });

  return { data, isLoading, isError };
}
