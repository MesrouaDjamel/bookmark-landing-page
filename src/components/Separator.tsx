type TSeparatorProps = {
  isVisible?: boolean
  className?: string
}
const Separator = ({ isVisible=true,className }: TSeparatorProps) => {
  return <div className={`${className}  w-full h-[2px] bg-grayishBlue my-6 ${isVisible ? "block" : "hidden"}`}></div>;
};

export default Separator;
