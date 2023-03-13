import axiosInstance from '@utils/axios';
import MeDto from '@_types/MeDto';

const userApi = {
  me: async (): Promise<MeDto> => {
    const { data } = await axiosInstance.get('/v1/users/me');
    return data;
  },
  async updatePartnerInfo(userId: number, info: { skillTags: { skillName: string; level: number }[] }) {
    const { data } = await axiosInstance.put(`/v1/admin/partners/${userId}`, info);
    return data;
  },
};

export default userApi;
