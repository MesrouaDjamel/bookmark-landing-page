import Image from "next/image";
import Button from "./Button";

type TCard = {
  image: string;
  title: string;
  minVersion: number;
  index: number;
};
const Card = ({ image, title, minVersion,index }: TCard) => {
  return (
    <div
      className={` max-w-[300px] flex flex-col items-center px-6 shadow-xl ${
        index === 2 && "lg:translate-y-12"
      } ${index === 3 && "lg:translate-y-24"}`}
    >
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className="object-cover pt-10"
      />
      <div className="flex flex-col py-7 text-center">
        <h3 className="text-veryDarkBlue font-semibold text-xl">{title}</h3>
        <p className="text-grayishBlue text-sm">Minimum version {minVersion}</p>
      </div>

      <svg width="280" height="4">
        <path
          fill="#495DCF"
          fillOpacity=".2"
          fillRule="evenodd"
          d="M0 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm280 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-18 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm122 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-70 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM88 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM70 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM53 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM35 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM18 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        />
      </svg>

      <Button
        label="Add & Install Extension"
        className="border-2 hover:border-softBlue hover:text-softBlue hover:bg-white transition-colors ease-in-out duration-200 text-white  text-sm font-semibold rounded-lg bg-softBlue px-4 py-4 my-5 "
      />
    </div>
  );
};

export default Card;
