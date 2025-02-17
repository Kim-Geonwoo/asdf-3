import Image from "next/image";
import { Button } from "@heroui/button";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-between justify-between w-full pr-10">
          <Image
            alt="human-1"
            height={500}
            sizes="100vw"
            src="/images/human_1-nobg.png"
            style={{
              width: "70%",
              height: "auto",
            }}
            width={500}
          />
          <Image
            alt="tape-1"
            height={500}
            sizes="50vw"
            src="/images/tape_1-nobg.png"
            style={{
              width: "40%",
              height: "40%",
            }}
            width={500}
          />
          <div />
          <div className="fixed top-32 right-16 mt-24 pt-2 pr-3">
            <Button
              className="text-gray-200 border-white font-bold"
              color="primary"
              endContent={
                <Image
                  alt="down_arrow"
                  height={20}
                  src="/images/arrow-down-long-fill_white.svg"
                  width={20}
                />
              }
              size="md"
              radius="none"
              variant="bordered"
            >
              Listen Now
            </Button>
          </div>
        </div>
        <h1 className="text-4xl text-white font-bold text-center mt-12">
          나만들을려고 만든 음악모음
        </h1>
      </section>
    </DefaultLayout>
  );
}
