import axiosInstance from 'utils/axios';
import MeDto from 'types/MeDto';

const userApi = {
  me: async (): Promise<MeDto> => {
    const { data } = await axiosInstance.get('/v1/users/me');
    return data;
  },
  async updatePartnerInfo(userId: number, info: { skillTags: { skillName: string; level: number }[] }) {
    const { data } = await axiosInstance.put(`/v1/admin/partners/${userId}`, info);
    return data;
  },

  logout() {
    localStorage.removeItem('accessToken');
    delete axiosInstance.defaults.headers.common.Authorization;
  },
};

export default userApi;
