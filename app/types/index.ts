export type ChartProps = {
    title: string;
    labelsVlue: string[];
    dataValue: number[];
    bgColors: string[];
    borderColor: string[]
}

export interface WarningProps {
    show: boolean;
    title: string;
    closeWarning: () =>  void 
}

export interface Medicine {
    id?: string | number;
    Name: string;
    Box_Amount?: number;
    Tape_Amount: number;
    Tape_Price: number ;
    Expire: string ;
    barcode: number; 
    showWarning?: () => void;
    addWarningtext?: (text: string) => void 
  }
 