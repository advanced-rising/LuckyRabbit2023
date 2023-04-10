export default interface TeamDto {
  id: number;
  name: string;
  remainingWorkingHour: number;
  workingHourAttainHistories: { workingHour: number; createdAt: Date; memo: string }[];
  usedWH: number;
  createdAt: Date;
  updatedAt: Date;
}
