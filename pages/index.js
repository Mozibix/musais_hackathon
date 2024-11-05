import { assets } from "@/public/assets/images";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [titleText, setTitleText] = useState("");
  const [descText, setDescText] = useState("");

  const titleWords = ["Design. Develop. Deliver. The Musais Way"];
  const descWords = ["We build websites that make your business shine."];
  const [activeOption, setActiveOption] = useState("monthly");
  const [isMounted, setIsMounted] = useState(false);
  const [showImages, setShowImages] = useState(false);

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

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImages(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="h-full hide-scroll primary_bg">
        {/* HERO SECTION */}
        <div>
          <nav className="flex justify-center items-center gap-1 p-4 py-12">
            <Image src={assets.logo} width={30} height={30} alt="logo" />
            <span className="font-extralight text-[#f9e9d9] text-2xl">
              Musais
            </span>
          </nav>
          {/* HERO SECTION */}
          <div className="flex justify-center items-center mt-5 lg:mt-10 text-center">
            <div>
              <div className="min-h-fit lg:min-h-[14rem] relative">
                {showImages && (
                  <>
                    <Image
                      src={assets.icon1}
                      width={40}
                      height={40}
                      alt="icon"
                      className="absolute bottom-[4rem] left-[12rem] hidden lg:block "
                    />
                    <Image
                      src={assets.icon2}
                      width={40}
                      height={40}
                      alt="icon"
                      className="absolute top-[-0.1rem] right-[3.3rem] hidden lg:block "
                    />
                    <Image
                      src={assets.line}
                      width={290}
                      height={350}
                      alt="icon"
                      className="absolute bottom-[4rem] left-[24rem] hidden lg:block "
                    />
                  </>
                )}
                {isMounted && (
                  <motion.h2
                    className="font-bold text-4xl lg:text-7xl leading-normal-full max-w-[65rem]"
                    initial={{ color: "#0a4444", opacity: 0.5 }}
                    animate={{
                      color: ["#722719", "#722719", "#ffecd2"],
                      opacity: 1,
                    }}
                    transition={{ duration: 3 }}
                  >
                    {titleText}
                  </motion.h2>
                )}
              </div>

              <div className="grid items-center justify-center text-center mt-4 lg:mt-0">
                <motion.p
                  className="capitalize font-sans text-lg flex items-center justify-center gap-2 flex-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
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
          </div>
        </div>
        {/* PROJECT SECTION */}
        <div className="flex justify-center items-center mt-16 px-4">
          <div className="flex justify-center items-center gap-1 max-w-[90rem] flex-wrap lg:flex-nowrap">
            {[
              { src: assets.image_4, alt: "Project 4" },
              { src: assets.image_3, alt: "Project 3" },
              { src: assets.image_2, alt: "Project 2" },
              { src: assets.image_1, alt: "Project 1" },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                }}
                viewport={{ once: true, amount: 0.6 }}
                className="overflow-hidden rounded-lg shadow-lg w-full h-[17rem]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full transition-transform duration-300 ease-in-out"
                  width={2000}
                  height={2000}
                  layout="responsive"
                />
              </motion.div>
            ))}
          </div>
        </div>
        {/* WHY CLIENTS CHOOSE US */}
        <div className="why_choose_us_sec p-8 px-6 lg:max-w-[80%] max-w-[90%] mx-auto mt-16 rounded-3xl outline outline-[0.4rem] outline-[#596464] secondary_bg shadow-[0_4px_15px_rgba(0,0,0,0.7)]">
          <div>
            <div className="relative w-full max-w-fit mx-auto ">
              <Image
                src={assets.line}
                width={430}
                height={430}
                alt="icon"
                className="absolute bottom-[-1.7rem] left-[4.2rem] hidden lg:block "
              />
              <motion.h3
                className="text-center capitalize text-3xl lg:text-5xl text-[#ffecd2] font-normal"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                why client choose us?
              </motion.h3>
            </div>
            <ul className="why_choose_us_ul">
              {[
                {
                  title: "Responsive Design",
                  description:
                    "Crafting websites that adjust smoothly across devices for user experience on desktops, tablets, and mobile",
                  icon: assets.icon6,
                },
                {
                  title: "Custom Development",
                  description:
                    "Developing unique websites for each client, blending creativity and functionality to stand out",
                  icon: assets.icon5,
                },
                {
                  title: "Best Blogs",
                  description:
                    "We write best songs and articles for our clients; that's why people choose musais",
                  icon: assets.icon4,
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="why_choose_us_li"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                >
                  <div className="why_choose_us_li_inner">
                    <div className="image_section">
                      <Image
                        src={item.icon}
                        width={50}
                        height={50}
                        alt="icon"
                      />
                    </div>

                    <div className="grid gap-2 content_section">
                      <motion.h4
                        className="capitalize text-[#ebebeb] text-[1.5rem]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.3 + 0.2 }}
                      >
                        {item.title}
                      </motion.h4>

                      <motion.p
                        className="text-[#919ba2] font-medium text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.3 + 0.4 }}
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        {/* UI/UX DESIGNS */}
        <div className="mt-20 grid gap-10">
          {/* Animated Header */}

          <div className="relative w-full max-w-fit mx-auto ">
            <Image
              src={assets.line}
              width={290}
              height={350}
              alt="icon"
              className="absolute bottom-[-1rem] left-[1rem] hidden lg:block "
            />
            <motion.h3
              className="text-center capitalize text-5xl text-[#ffecd2] font-normal mt-30"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              UI/UX Designs
            </motion.h3>
          </div>

          {/* Main Content with Light Background */}
          <motion.div
            className="h-full w-full max-w-[95%] mx-auto light_img_bg pt-[1rem] pb-[4rem] rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            {/* Inner Image Container */}
            <motion.div
              className="h-full w-full max-w-[40rem] mx-auto z-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <Image
                src={assets.moodboard_img}
                width={200000}
                height={200000}
                alt="mood board"
                className="w-full h-full rounded-lg shadow-md transition-transform duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
        {/* OUR EXPERTISE */}
        <div className="mt-28 grid gap-10 max-w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Animated Header */}

            <div className="relative w-full max-w-fit mx-auto ">
              <Image
                src={assets.line}
                width={290}
                height={350}
                alt="icon"
                className="absolute bottom-[-1rem] left-[1rem] hidden lg:block "
              />
              <motion.h3
                className="text-center capitalize text-5xl text-[#ffecd2] font-normal mt-30"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              >
                Our Expertise
              </motion.h3>
            </div>
            <motion.p
              className="text-center text-lg text-gray-300 mt-7 max-w-[40rem] mx-auto"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              Our blend of creativity and technical finesse ensures bespoke
              solutions that elevate <b>brands</b> and captivate audiences,
              leaving an unforgettable imprint on the design landscape.
            </motion.p>
          </motion.div>

          <div className="relative flex justify-center items-center">
            <motion.div
              className="absolute inset-0 bg-black opacity-50 rounded-lg shadow-lg z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1 }}
            />
            <Image
              src={assets.expertise_bg}
              width={1000}
              height={1000}
              alt="expertise bg"
              className="rounded-lg shadow-2xl z-20"
              initial={{ scale: 1.1 }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
        {/* Testimonials Section */}
        <motion.div
          className="mt-28 grid gap-10 max-w-[90%] mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-fit mx-auto ">
            <Image
              src={assets.line}
              width={290}
              height={350}
              alt="icon"
              className="absolute bottom-[-1rem] left-[1rem] hidden lg:block "
            />
            <motion.h3
              className="text-center capitalize text-5xl text-[#ffecd2] font-normal mt-30"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              Testimonials{" "}
            </motion.h3>
          </div>
          <motion.p
            className="text-center text-lg text-gray-300"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            Let&apos;s see what our clients say about us
          </motion.p>
          <motion.div
            className="bg-[#d9d9d9] w-fit max-w-fit mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <Image
              src={assets.testimonial_bg}
              width={700}
              height={700}
              alt="testimonial bg"
            />
          </motion.div>
        </motion.div>
        {/* Pricing Section */}
        <motion.div
          className="light_img_bg pb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
        >
          <div className="mt-28 grid gap-10 max-w-[90%] mx-auto text-center py-6">
            <div className="flex flex-col justify-center items-center">
              <ul className="flex border-[#43484B] border-[0.8px] h-11 p-[0.2rem]  rounded-3xl w-full justify-around max-w-96 relative mb-8 ">
                <span className="absolute right-[-1rem] sm:right-[-2rem] rotate-[30deg] top-[-1rem] bg-red w-20 rounded-lg font-sans font-bold bg-[#F10000] ">
                  25% off
                </span>
                <li
                  onClick={() => handleOptionClick("monthly")}
                  className={`cursor-pointer w-full rounded-3xl flex justify-center items-center text-xl font-sans hover:bg-[#2F8382] hover:text-white ${
                    activeOption === "monthly"
                      ? "bg-[#2F8382] text-white"
                      : "text-gray-500"
                  }`}
                >
                  Monthly
                </li>
                <li
                  onClick={() => handleOptionClick("yearly")}
                  className={`cursor-pointer w-full rounded-3xl flex justify-center items-center text-xl font-sans hover:bg-[#2F8382] hover:text-white ${
                    activeOption === "yearly"
                      ? "bg-[#2F8382] text-white"
                      : "text-gray-500"
                  }`}
                >
                  Yearly
                </li>
              </ul>

              <div className="relative">
                <Image
                  src={assets.line}
                  width={650}
                  height={650}
                  alt="icon"
                  className="absolute bottom-[-2rem] left-0 hidden lg:block "
                />
                <motion.h3
                  className="text-center capitalize text-5xl text-[#ffecd2] font-normal mt-30"
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                >
                  pick the right plan for you
                </motion.h3>
              </div>
              {/* Plan Cards with Hover Animation */}
              <ul className="flex justify-center items-center gap-[2rem] flex-wrap lg:flex-nowrap mt-20">
                <motion.li
                  className="plan_box1 w-72 h-[30rem] flex justify-center items-center rounded-3xl "
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="font-sans">
                    <span className="font-normal text-2xl ">xxxx</span>
                    <h3 className="text-5xl font-sans mb-4">xxxxx</h3>

                    <button className="border_test w-44 h-10 rounded-lg btn_bg capitalize cursor-pointer mb-4 ">
                      get started now
                    </button>

                    <div className="grid gap-2">
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        5 Landing Pages
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  className="plan_box2 w-full max-w-96  h-[35rem] flex justify-center items-center rounded-3xl "
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="font-sans">
                    <span className="font-normal text-2xl text-[#63E057] ">
                      xxxx
                    </span>
                    <h3 className="text-5xl font-sans ">
                      $XXX
                      <span className="font-normal text-[#FFFFFFB2] ">/mo</span>
                    </h3>
                    <span className="font-normal text-2xl block  mb-4 tex-[#FFFFFFCF] ">
                      xxxx
                    </span>

                    <button className=" w-64 h-10 rounded-3xl btn_bg white capitalize cursor-pointer mb-4 font-bold tex-base ">
                      get started now
                    </button>

                    <div className="grid gap-2">
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        5 Landing Pages
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  className="plan_box1 w-72 h-[30rem] flex justify-center items-center rounded-3xl "
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="font-sans">
                    <span className="font-normal text-2xl ">xxxx</span>
                    <h3 className="text-5xl font-sans mb-4">xxxxx</h3>

                    <button className="border_test w-44 h-10 rounded-lg btn_bg capitalize cursor-pointer mb-4 ">
                      get started now
                    </button>

                    <div className="grid gap-2">
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        5 Landing Pages
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                      <div className="flex justify-start items-center gap-2 text-white font-normal text-base">
                        <Image
                          src={assets.good_icon}
                          width={20}
                          height={20}
                          alt="good"
                        />
                        XXXXXXXXXX
                      </div>
                    </div>
                  </div>
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>
        {/* Footer */}
        <footer className="light_img_bg mt-44 flex justify-between items-center px-8 py-12">
          <div className="flex items-center gap-1">
            <Image src={assets.logo} width={30} height={30} alt="logo" />
            <span className="font-extralight text-[#f9e9d9] text-2xl">
              Musais
            </span>
          </div>
          <motion.div
            className="flex justify-center items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image src={assets.x} width={20} height={20} alt="socials" />
            <Image src={assets.linkedin} width={20} height={20} alt="socials" />
            <Image
              src={assets.instagram}
              width={20}
              height={20}
              alt="socials"
            />
          </motion.div>
        </footer>{" "}
      </div>
    </>
  );
}

export const Preloader = () => {
  return (
    <div className="preloader_container">
      <motion.div
        className="preloader_text"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 1],
          scale: [0.8, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <motion.div
          className="logo_container"
          animate={{ filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image src={assets.logo} width={60} height={60} alt="logo" />
        </motion.div>
        Musais
      </motion.div>
    </div>
  );
};
