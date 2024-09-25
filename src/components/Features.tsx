"use client";
import Image from "next/image";
import Description from "./Description";
import Separator from "./Separator";
import Button from "./Button";
import { useState } from "react";
import BorderEffect from "./BorderEffect";

const Features = () => {
  const [seeFeatures, setSeeFeatures] = useState<null | number>(1);

  const features = [
    {
      id: 1,
      link: "Simple Bookmarking",
      image: "/images/tab1.svg",
      title: "Bookmark in one click",
      desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
    },
    {
      id: 2,
      link: "Speedy Searching",
      image: "/images/tab2.svg",
      title: "Intelligent search",
      desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks",
    },
    {
      id: 3,
      image: "/images/tab3.svg",
      link: "Easy Sharing",
      title: "Share your bookmarks",
      desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];

  const toggleFeature = (id: number) => {
    setSeeFeatures(seeFeatures === id ? null : id);
  };
  return (
    <div className="pt-28">
      <div className="md:px-14 xl:px-40">
        <Description
          title="Features"
          desc="A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free!"
          className="px-7 mx-auto"
          titleClassName="text-center"
        />

        <div className="px-7 pt-12 pb-14 xl:px-40 ">
          <div className="md:flex justify-between">
            <Separator className="md:hidden" />
            <h3
              onClick={() => toggleFeature(1)}
              className={`relative cursor-pointer text-xl text-center text-veryDarkBlue font-semibold hover:text-softRed transition-colors ease-in-out duration-300`}
            >
              Simple Bookmarking
              {seeFeatures === 1 && <BorderEffect />}
            </h3>
            <Separator className="md:hidden" />
            <h3
              onClick={() => toggleFeature(2)}
              className={`relative cursor-pointer text-xl text-center text-veryDarkBlue font-semibold hover:text-softRed transition-colors ease-in-out duration-300`}
            >
              Speedy Searching
              {seeFeatures === 2 && <BorderEffect />}
            </h3>
            <Separator className="md:hidden" />
            <h3
              onClick={() => toggleFeature(3)}
              className={`relative cursor-pointer text-xl text-center text-veryDarkBlue font-semibold hover:text-softRed transition-colors ease-in-out duration-300`}
            >
              Easy Sharing
              {seeFeatures === 3 && <BorderEffect />}
            </h3>
            <Separator className="md:hidden" />
          </div>
          <Separator className="hidden md:block" />
        </div>
      </div>

      {features.map((feature) => (
        <div key={feature.id}>
          {seeFeatures === feature.id && (
            <div className="md:flex lg:gap-12 xl:gap-20">
              <div className="max-w-[350px] xl:min-w-[800px]">
                <Image
                  src={feature.image}
                  alt="Illustration Hero"
                  width={500}
                  height={500}
                  className="object-cover pr-7  w-full "
                />
              </div>
              <div className="flex flex-col gap-14">
                <Description
                  title={feature.title}
                  desc={feature.desc}
                  className="pt-10 px-7 md:pt-0 md:max-w-[450px] lg:max-w-[550px]"
                  titleClassName="md:text-left"
                  desClassName="md:text-left"
                />

                <Button
                  label="More info"
                  className="text-white hidden md:block  text-sm font-semibold rounded-lg bg-softBlue px-4 py-4 mx-auto border-2 hover:border-softBlue hover:text-softBlue hover:bg-white transition-colors ease-in-out duration-200 "
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Features;
