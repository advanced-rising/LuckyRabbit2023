export enum PackColors {
  RED = 0,
  BLUE = 1,
  YELLOW = 2,
  ORANGE = 3,
  GREEN = 4,
}

export default interface PacksDto {
  color: PackColors;
  comment: string;
  cost: number;
  id: string;
  isRead: number;
  someone: string;
  userId: string;
}
