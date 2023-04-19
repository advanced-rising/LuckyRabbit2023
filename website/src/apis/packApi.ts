import PacksDto, { PackColors } from 'types/Packs';
import axiosInstance from 'utils/axios';

const getPacks = async (): Promise<PacksDto[]> => {
  const { data } = await axiosInstance.get(`/v1/packs`);
  return data;
};

const createPack = async (params: { cost: number; color: PackColors; comment: string; someone: string }) => {
  console.log('params', params);
  const { data } = await axiosInstance.post(`/v1/packs`, params);
  return data;
};

export default {
  getPacks,
  createPack,
};
