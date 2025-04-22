import {Good} from './goods';

export interface OrderDetail {
    number: string;
    at: Date;
    countDevices: number;
    totalCost: number;
}

export type OrderElement = Good & {select?: boolean; count: number};
