import css from './Spinner.module.css';
import { RotatingLines } from 'react-loader-spinner';

export function Spinner() {
  return (
    <div className={css.spinner}>
      <RotatingLines width="60" strokeColor="yellow" />
    </div>
  );
}
