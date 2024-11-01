import { assets } from "@/public/assets/images";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [titleText, setTitleText] = useState("");
  const [descText, setDescText] = useState("");

  const titleWords = ["Design. Develop. Deliver. The Musais Way"];
  const descWords = ["We build websites that make your business shine."];

  const typewriterEffect = (words, setText, delayBetweenWords = 100) => {
    let wordIndex = 0;
    let charIndex = 0;
    let currentText = "";

    const type = () => {
      if (charIndex < words[wordIndex].length) {
        currentText += words[wordIndex][charIndex];
        setText(currentText);
        charIndex++;
        setTimeout(type, 30);
      } else {
        setTimeout(() => {
          wordIndex++;
          if (wordIndex < words.length) {
            charIndex = 0;
            currentText = "";
            setTimeout(type, delayBetweenWords);
          }
        }, delayBetweenWords);
      }
    };

    type();
  };

  useEffect(() => {
    typewriterEffect(titleWords, setTitleText, 100);
    setTimeout(() => {
      typewriterEffect(descWords, setDescText, 50);
    }, 1000);
  }, []);

  return (
    <>
      <div className="min-h-screen primary_bg">
        <div>
          <nav className="flex justify-center items-center gap-1 p-4 py-12">
            <Image src={assets.logo} width={30} height={30} alt="logo" />
            <span className="font-extralight text-[#f9e9d9] text-2xl">
              Musais
            </span>
          </nav>
          {/* HERO SECTION */}
          <div className="flex justify-center items-center mt-10 text-center">
            <div>
              <motion.h2
                className="font-bold text-7xl leading-normal w-full max-w-[65rem]"
                initial={{ color: "#0a4444", opacity: 0.5 }}
                animate={{
                  color: ["#722719", "#722719", "#ffecd2"],
                  opacity: 1,
                }}
                transition={{ duration: 3 }}
              >
                {titleText}
              </motion.h2>

              <div className="grid items-center justify-center text-center">
                <motion.p
                  className="capitalize font-sans text-lg flex items-center justify-center gap-2 mt-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  {descText}
                  <span className="font-bold text-xl capitalize block text_glow relative">
                    business shine
                    <Image
                      src={assets.icon3}
                      width={25}
                      height={25}
                      alt="icon"
                      className="absolute top-[-0.3rem] right-[-1.2rem] rotate-45"
                    />
                  </span>
                </motion.p>

                <div className="mt-8 grid justify-center items-center">
                  <motion.button
                    className="btn_main font-sans bg-[#dfede3] text-black font-semibold text-lg flex justify-center items-center transition-all duration-300 ease-in-out"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book a chat with Amena
                    <Image
                      src={assets.chat_icon2}
                      width={25}
                      height={25}
                      alt="chat-icon"
                    />
                  </motion.button>
                  <span className="block italic font-extralight mt-2 text-base text-[#ebeded]">
                    Best websites ever!
                  </span>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
