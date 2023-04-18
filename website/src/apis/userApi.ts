import axiosInstance from 'utils/axios';
import MeDto from 'types/MeDto';
import { JWT_TOKEN_NAME } from 'utils/Constants';

const me = async (): Promise<MeDto> => {
  const accessToken = localStorage.getItem(JWT_TOKEN_NAME);

  const { data } = await axiosInstance.get('/v1/user/me', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return data;
};

const logout = () => {
  localStorage.removeItem('accessToken');
  delete axiosInstance.defaults.headers.common.Authorization;
};

export default {
  me,
  logout,
};
