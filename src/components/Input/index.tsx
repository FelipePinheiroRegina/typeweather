import './styles.css';
import { Spin } from '../Spin';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean// quando é opcional coloque o ?
}


export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <div className="input" >
      <input type='text' {...rest} />

      {isLoading && <Spin />}
    </div>
  )
}