export default interface MeDto {
  id: number;
  name: string;
  phone: string;
  email: string;
  pwdHash: string;
  profileImgUrl: string;
  emailVerified: number;
  isDeleted: number;
  createdAt: Date;

  updatedAt: Date;

  teams: {
    id: number;

    name: string;
    notionUrl: string;
    remainingWorkingHour: number;
  }[];
}
