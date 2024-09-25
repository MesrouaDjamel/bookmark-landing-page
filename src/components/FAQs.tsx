"use client"
import { useState } from "react";
import Button from "./Button";

import Description from "./Description";
import Separator from "./Separator";

const FAQs = () => {
  const [openAnswerIndex, setOpenAnswerIndex] = useState<null | number>(null);

  const toggleAnswer = (index:number) => {
    setOpenAnswerIndex(openAnswerIndex === index ? null : index);
  }
  const questionsAnswers = [
    {
      id: 1,
      question: "What is a Bookmark?",
      answer: `A bookmark is a feature used in web browsers and digital tools to save a webpage or a specific location within a document for easy access later. When you bookmark a page, you create a shortcut to that page, so you don't have to remember or search for it again.
              In web browsers, a bookmark typically saves the URL of the webpage, allowing you to revisit it with a click. In e-books or PDFs, a bookmark marks a specific page or section, so you can jump back to it quickly.`,
    },
    {
      id: 2,
      question: "How can I request a new browser?",
      answer: `To download a different web browser, you need to go to the browser manufacturer’s website or use your phone/Tablet’s “App Store” and get the latest version of it. NEVER download a web browser from anywhere other than official website or store - you risk getting
              viruses, malware or spyware otherwise.`,
    },
    {
      id: 3,
      question: "Is there a mobile app ?",
      answer: `Yes, there are several mobile apps designed specifically for bookmarking, allowing users to save and organize web pages, articles, videos, and other content for later viewing. These apps often provide features like tagging, offline access, and synchronization across devices`,
    },

    {
      id: 4,
      question: "What about other Chromium browsers ?",
      answer: `Several mobile browsers based on Chromium also offer built-in bookmarking features, allowing users to save and organize web pages across devices. Here are some popular Chromium-based browsers with bookmarking functionality`,
    },
  ];
  
  return (
    <div className="px-7 pt-32 pb-24 flex flex-col md:px-20 lg:px-40 2xl:px-80">
      <Description
        title="Frequently Asked Questions"
        desc="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
      />

      <div className="pt-16">
        {questionsAnswers.map((item) => (
          <div key={item.id}>
            {/* Questions */}
            <div className="flex items-center justify-between">
              <p className="text-veryDarkBlue cursor-pointer hover:text-softRed transition-colors ease-in-out duration-300">{item.question}</p>

              {openAnswerIndex === item.id ? (
                <Button
                  onClick={() => toggleAnswer(item.id)}
                  svgFile={
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
                      <g clipPath="url(#clip0_608_3)">
                        <path
                          d="M20.0117 11L10.5947 3L1.17777 11"
                          stroke="#FA5757"
                          stroke-width="3"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_608_3">
                          <rect
                            width="21.1882"
                            height="12"
                            fill="white"
                            transform="translate(21.1885 12) rotate(180)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                />
              ) : (
                <Button
                  onClick={() => toggleAnswer(item.id)}
                  svgFile={
                    <svg width="18" height="12">
                      <path
                        fill="none"
                        stroke="#5267DF"
                        strokeWidth="3"
                        d="M1 1l8 8 8-8"
                      />
                    </svg>
                  }
                />
              )}
            </div>

            {/* Answer */}
            {openAnswerIndex === item.id && (
              <p className="px-7 py-5 text-grayishBlue leading-loose">
                {item.answer}
              </p>
            )}

            <Separator />
          </div>
        ))}
      </div>

      <Button
        label="More info"
        className="text-white border-2 hover:border-softBlue hover:text-softBlue hover:bg-white transition-colors ease-in-out duration-200  text-sm font-semibold rounded-lg bg-softBlue px-4 py-4 mx-auto "
      />
    </div>
  );
};

export default FAQs;
