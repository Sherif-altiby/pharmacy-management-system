export type ChartProps = {
    title: string;
    labelsVlue: string[];
    dataValue: number[];
    bgColors: string[];
    borderColor: string[]
}

export interface Medicine {
    id: number;
    Name: string;
    Box_Amount: number;
    Tape_Amount: number;
    Tape_Price: number;
    Expire: string;
    barcode: string;
  }