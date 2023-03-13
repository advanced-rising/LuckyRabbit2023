import axiosInstance from '@utils/axios';
import TeamDto from '@_types/TeamDto';

const QueryKeys = {
  GET_TEAM: 'get_team',
};

const byId = async (teamId: number): Promise<TeamDto> => {
  const { data } = await axiosInstance.get(`/v1/teams/${teamId}`);
  return data;
};

export default { QueryKeys, byId };
