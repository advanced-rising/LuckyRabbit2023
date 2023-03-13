import userApi from '@apis/userApi';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import MeDto from '@_types/MeDto';
import { AxiosError } from 'axios';

export default function useUserQuery(
  userId?: number,
  options?: Omit<UseQueryOptions<MeDto, AxiosError>, 'queryKey' | 'queryFn'>,
) {
  return useQuery(['/users/me'], () => userApi.me(), {
    onError: () => {
      // router.push('/auth/login');
    },
    retry: false,
  });
}
