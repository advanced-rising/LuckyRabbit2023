import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import packApi from 'apis/packApi';
import PacksDto from 'types/Packs';

export default function usePacksQuery(options?: Omit<UseQueryOptions<PacksDto[], AxiosError>, 'queryKey' | 'queryFn'>) {
  return useQuery<PacksDto[], AxiosError>(['/v1/packs'], () => packApi.getPacks(), {
    ...options,
  });
}
