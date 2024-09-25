type TDescriptionProps = {
  title : string
  desc : string
  className?:string
  titleClassName?:string
  desClassName? : string
}
const Description = ({title,desc,className,titleClassName,desClassName}:TDescriptionProps) => {
  return (
    <section className={className}>
      <h2 className={`text-veryDarkBlue font-semibold text-3xl pb-5  text-center ${titleClassName}`}>
        {title}
      </h2>
      <p className={`text-center text-grayishBlue text-xl leading-loose ${desClassName}`}>
        {desc}
      </p>
    </section>
  );
}

export default Description