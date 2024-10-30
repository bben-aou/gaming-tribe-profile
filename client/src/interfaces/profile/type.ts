export type InfoFieldProps = {
    label: string;
    value: string;
  };
  
  export type InfoRowProps = {
    fields: InfoFieldProps[];
  };
  
  export type InfoRow = InfoFieldProps[];
  
  export type InfoRowsType = InfoRow[]