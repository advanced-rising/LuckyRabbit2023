import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import packApi from 'apis/packApi';
import PacksDto from 'types/Packs';
import useUserQuery from './useUserQuery';

export default function usePacksQuery(
  filter: 'all' | 'read' | 'unRead',
  options?: Omit<UseQueryOptions<PacksDto[], AxiosError>, 'queryKey' | 'queryFn'>,
) {
  const { data: me } = useUserQuery();
  return useQuery<PacksDto[], AxiosError>(['/v1/packs', me, { filter }], () => packApi.getPacks(), {
    enabled: !!me,
    ...options,
  });
}
