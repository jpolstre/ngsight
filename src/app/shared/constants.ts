import { ThemeColors } from "./types";

export const API_URL = 'http://localhost:5000/api';
// export const API_URL = 'http://beta.apisight.com/api';
// export const API_URL = 'http://192.168.0.101/api';

export const THEME_COLORS: ThemeColors[] = [
  {
    name: 'Default',
    colorSet: [
      '#083d77',
      '#ff6b6b',
      '#f4d35e',
      '#ee964b',
      '#f9573b',
    ]
  },
  {
    name: 'Bright',
    colorSet: [
      '#26547c',
      '#ff6b6b',
      '#ffd166',
      '#06d6a0',
      '#fcfcfc',
    ]
  },

]


//line-chary
export const LINE_CHART_COLORS:any[] = [
  {
    backgroundColor: 'rgba(6, 214, 160, 0.2)',
    borderColor: 'rgba(0, 200, 140, 0.5)',
    pointBackroundColor: '#000',
    pointHoverBackroundColor: '#555',
    pointHoverBorderColor: '#555',

  },
  {
    backgroundColor: 'rgba(255, 209, 102, 0.2)',
    borderColor: 'rgba(240, 180, 89, 0.5)',
    pointBackroundColor: '#000',
    pointHoverBackroundColor: '#555',
    pointHoverBorderColor: '#555',

  },
  {
    backgroundColor: 'rgba(15, 78, 133, 0.2)',
    borderColor: 'rgba(3, 64, 128, 0.5)',
    pointBackroundColor: '#000',
    pointHoverBackroundColor: '#555',
    pointHoverBorderColor: '#555',

  },

]