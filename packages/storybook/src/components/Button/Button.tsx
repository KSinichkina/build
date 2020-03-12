import * as React from 'react';
import Styles from './Button.scss';
export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (e: any) => void;
}
const styles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};
const Button: React.SFC<ButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick} style={styles} className={Styles.red} type="button">
    {children}
  </button>
);

export default Button;
