import axiosInstance from 'utils/axios';
import MeDto from 'types/MeDto';

const me = async (): Promise<MeDto> => {
  const { data } = await axiosInstance.get('/v1/user/me');
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
