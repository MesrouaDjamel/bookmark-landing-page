type TInputProps = {
  className : string
  placeholder : string
}
const Input = ({className,placeholder}: TInputProps) => {
  return (
    <input className={className}
    placeholder={placeholder}
    />
  )
}

export default Input