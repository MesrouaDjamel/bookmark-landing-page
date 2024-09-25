import Image from "next/image";
import Description from "./Description";
import Button from "./Button";
import Features from "./Features";
import DownLoadExtensions from "./DownLoadExtensions";
import FAQs from "./FAQs";
import EmailSection from "./EmailSection";

const Hero = () => {
  return (
    <>
      <div className="pt-16 flex flex-col md:gap-10 md:flex-row-reverse xl:pl-40 ">
        <div className="max-w-[350px] xl:max-w-[600px] self-end md:self-center ">
          <Image
            src="/images/illustrationHero.svg"
            alt="Illustration Hero"
            width={350}
            height={500}
            className="object-cover w-full  pl-7 xl:hidden"
          />

          <Image
            src="/images/xlHero.svg"
            alt="Illustration Hero"
            width={350}
            height={500}
            className=" hidden object-cover w-full  pl-7 xl:block   "
          />
        </div>

        <div className=" md:min-w-[450px] xl:min-w-[550px] flex-1 px-7  2xl:pl-60">
          <Description
            title="A Simple Bookmark Manager"
            desc="A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free!"
            className=" pt-12 pb-8 md:pt-0  "
            titleClassName="xl:text-[48px] py-2 leading-snug md:text-left"
            desClassName="xl:text-2xl  py-2 md:text-left"
          />

          <div className=" flex justify-center md:justify-start gap-4 md:gap-8">
            <Button
              label="Get it on Chrome"
              className="text-white  text-sm font-semibold rounded-lg bg-softBlue px-4 py-4 border-2 hover:border-softBlue hover:text-softBlue hover:bg-white transition-colors ease-in-out duration-200 "
            />
            <Button
              label="Get it on Firefox"
              className="text-veryDarkBlue text-sm font-semibold rounded-lg bg-[#F7F7F7] px-4 py-4 border-2 hover:border-veryDarkBlue hover:text-veryDarkBlue hover:bg-white transition-colors ease-in-out duration-200  "
            />
          </div>
        </div>
      </div>
      <Features />
      <DownLoadExtensions />
      <FAQs />
      <EmailSection />
    </>
  );
};

export default Hero;
