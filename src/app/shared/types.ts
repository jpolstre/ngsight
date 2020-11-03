export type FormatOrders = [Date, number];
export type SetServStatus = {id:number, payload:string};



export type RespGetCharData = { customer: string, data: FormatOrders[] }


export interface ThemeColors {
  name: string;
  colorSet: string[];
}