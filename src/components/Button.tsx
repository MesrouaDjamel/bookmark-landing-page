"use client"
type TButtonProps = {
  label?: string
  svgFile ?: React.ReactNode
  className?: string
  onClick?: () => void
}
const Button = ({label,className,svgFile, onClick}: TButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {svgFile} {label}
    </button>
  )
}

export default Button