import userApi from 'apis/userApi';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import MeDto from 'types/MeDto';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export default function useUserQuery(options?: Omit<UseQueryOptions<MeDto, AxiosError>, 'queryKey' | 'queryFn'>) {
  const navigate = useNavigate();
  return useQuery(['/v1/user/me'], () => userApi.me(), {
    onError: () => {
      navigate('/signin');
    },
    retry: false,
  });
}
