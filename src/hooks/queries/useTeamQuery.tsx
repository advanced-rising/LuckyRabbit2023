import teamApi from '@apis/teamApi';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import TeamDto from '@_types/TeamDto';
import { AxiosError } from 'axios';
import useUserQuery from './useUserQuery';

export default function useTeamQuery(
  options?: Omit<UseQueryOptions<TeamDto | null, AxiosError>, 'queryKey' | 'queryFn'>,
) {
  const { data: me } = useUserQuery();
  const teamQuery = useQuery<TeamDto | null, AxiosError>(
    [teamApi.QueryKeys.GET_TEAM, { me: me }],
    async () => {
      if (me?.teams[0].id) {
        return teamApi.byId(me?.teams[0].id);
      }
      return null;
    },
    {
      enabled: me?.teams && me.teams.length > 0,
      ...options,
    },
  );

  return teamQuery;
}
