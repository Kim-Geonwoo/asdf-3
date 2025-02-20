import Image from "next/image";
import { Button } from "@heroui/button";

import Aurora from "@/components/lib/Aurora";
import BlurText from "@/components/lib/BlurText";
import DefaultLayout from "@/layouts/default";
import { ContentScroll } from "@/components/ContentScroll";
import { AboutMe } from "@/components/AboutMe";
import { PopupPlayer } from "@/components/PopupPlayer";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Aurora colorStops={["#1DB959", "#00D7FE", "#2FC125"]} speed={0.5} />
      <section className="flex flex-col items-center justify-center">
        <div className="items-between justify-between w-full md:h-[22.6rem] lg:h-[22.8rem] h-[20.3em]">
          <Image
            alt="human-1"
            className="z-20 absolute left-0 top-[1rem] w-auto h-1/2 lg:h-1/2"
            height={500}
            sizes="100vw"
            src="/images/human_1-nobg.png"
            width={500}
          />
          <div className="z-50 fixed top-[3em] right-2 w-auto h-1/5 lg:h-1/4">
            <Image
              alt="tape-1"
              className="z-50 fixed top-[3em] right-2 w-auto h-1/5 lg:h-1/4"
              height={500}
              sizes="100vw"
              src="/images/tape_1-nobg.png"
              width={500}
            />
            <div className="fixed z-50 top-[11rem] right-[3.8rem] text-white px-0.5 border box-border border-black">

            <PopupPlayer />
            </div>


            {/* <p className="fixed z-50 top-[11rem] right-[3.8rem] text-white px-0.5 border box-border border-black">click me!</p>*/}
          </div>
          

          <div className="flex flex-col pt-2 md:mt-[70px] lg:mt-[70px] mt-[50px] pr-3 justify-center">
            <BlurText
              animateBy="words"
              className="z-30 backdrop-blur-sm text-3xl sm:text-2xl md:text-3xl lg:text-4xl mt-24 text-white font-bold text-center"
              delay={150}
              direction="top"
              text="나를 위해 만들었던"
            />
            <BlurText
              animateBy="words"
              className="z-30 backdrop-blur-sm text-3xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center"
              delay={150}
              direction="top"
              text="음악모음집"
            />
          </div>
          <div className="flex mt-8 justify-center">
            <Button
              className="z-40 text-gray-200 bg-black border-white font-bold"
              color="primary"
              endContent={
                <Image
                  alt="down_arrow"
                  height={20}
                  src="/images/arrow-down-long-fill_white.svg"
                  width={20}
                />
              }
              radius="none"
              size="md"
              variant="shadow"
              onPress={() => {
                window.scrollTo({
                  behavior: "smooth",
                  top: document.body.scrollHeight,
                });
              }}
            >
              Listen Now
            </Button>
          </div>
        </div>
        <div className="container w-full mt-[20rem]">
          <AboutMe />
        </div>

        <div className="w-full mt-2">
          <ContentScroll />
        </div>
      </section>
    </DefaultLayout>
  );
}
