import { ErrorMessageProps } from "../models";

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <p className='text-center text-red-600'>{error}</p>
  )
}