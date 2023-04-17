import axiosInstance from 'utils/axios';

const signup = async (params: { email: string; username: string; password: string }) => {
  const { data } = await axiosInstance.post(`/v1/auth/signup`, params);
  return data;
};
const signin = async (params: { email: string; password: string }): Promise<{ accessToken: string }> => {
  const { data } = await axiosInstance.post(`/v1/auth/signin`, params);
  return data;
};

export default {
  signup,
  signin,
};
