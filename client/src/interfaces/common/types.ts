export type TConditionalRenderingProps = {
	condition: boolean;
	defaultComponent?: React.ReactNode | JSX.Element;
	children: React.ReactNode | JSX.Element;
};
export type TSpinner = {
    containerClassName?: string,
    spinnerStyle?: string
}
export  type TSuspenseImage = {
    src: string;
    alt: string;
    Skeleton: JSX.Element;
  
}