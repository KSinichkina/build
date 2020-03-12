import * as React from 'react';
export interface IButtonProps {
    children?: React.ReactNode;
    onClick?: (e: any) => void;
}
declare const Button: React.SFC<IButtonProps>;
export default Button;
