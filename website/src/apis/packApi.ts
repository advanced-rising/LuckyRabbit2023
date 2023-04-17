import PacksDto from 'types/Packs';
import axiosInstance from 'utils/axios';

const getPacks = async (): Promise<PacksDto[]> => {
  const { data } = await axiosInstance.get(`/v1/packs`);
  return data;
};

export default {
  getPacks,
};
