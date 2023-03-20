export const Colors = {
  mainColor: '#E48254',
  darkMainColor: '#e27543',
  mainTitleColor: '#444444',
  mainBackgroundColor: '#f3f1e0',
  subTextB: '#333333',
  subTextG: '#9E9E9E',
  warningColor: '#E26F6B',
  bgColor: '#FFFFFF',
  fontColor: '#FFFFFF',
} as const;

export const BASE_URL = (() => {
  return 'http://ec2-15-165-104-125.ap-northeast-2.compute.amazonaws.com:8080';
})();
