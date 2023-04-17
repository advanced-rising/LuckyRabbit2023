import userApi from 'apis/userApi';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import MeDto from 'types/MeDto';
import { AxiosError } from 'axios';

export default function useUserQuery(options?: Omit<UseQueryOptions<MeDto, AxiosError>, 'queryKey' | 'queryFn'>) {
  return useQuery(['/v1/user/me'], () => userApi.me(), {
    onError: () => {
      // router.push('/auth/login');
    },
    retry: false,
  });
}
