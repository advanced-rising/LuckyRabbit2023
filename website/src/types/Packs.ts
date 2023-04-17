export enum PackColors {
  RED = 0,
  BLUE = 1,
  YELLOW = 2,
  ORANGE = 3,
  GREEN = 4,
}

export default interface PacksDto {
  cost: number;
  color: PackColors;
  commnet: string;
  someone: string;
}
