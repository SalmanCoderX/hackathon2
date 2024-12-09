import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

export default function Aboutus() {
  return (
    <div>
      {/* First Section: Content and Buttons */}
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center md:space-x-4">
          {/* Left Image */}
          <div className="flex justify-center w-full md:w-1/2 mb-6 md:mb-0">
            <Image
              className="object-cover object-center rounded-lg"
              alt="hero"
              src="/about1.jfif"
              width={309}
              height={536}
              layout="intrinsic"
            />
          </div>

          {/* Right Images */}
          <div className="flex flex-col space-y-4 w-full md:w-1/2">
            <Image
              className="object-cover object-center rounded-lg"
              alt="image2"
              src="/about4.png"
              width={309}
              height={271}
              layout="intrinsic"
            />
            {/* Bottom Image */}
            <Image
              className="object-cover object-center rounded-lg"
              alt="image3"
              src="/about3.png"
              width={309}
              height={382}
              layout="intrinsic"
            />
          </div>

          {/* Text Content and Buttons */}
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center mt-8 md:mt-0">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-black title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center gap-4">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="inline-flex text-black bg-white border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 block" />
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 flex-col items-center justify-center">
          <h1 className="text-black text-3xl font-bold mt-3 text-center">
            Why Choose Us
          </h1>
          <p className="text-black text-center mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>

          {/* Image Section */}
          <div className="mt-10 w-full">
            <Image
              className="mb-10 object-cover object-center w-full"
              alt="hero"
              src="/about.png"
              width={1320}
              height={386}
              layout="responsive"
            />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="text-white body-font">
        <div className="container px-3 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full flex justify-center items-center flex-col border-2 rounded-lg overflow-hidden">
                <Image
                  className="object-cover object-center"
                  src="/student.png"
                  width={80}
                  height={80}
                  alt="Best Chef"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-center">
                    BEST CHEF
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 flex justify-center items-center flex-col rounded-lg overflow-hidden">
                <Image
                  className="object-cover object-center"
                  src="/coffee.png"
                  width={80}
                  height={80}
                  alt="120 Item Food"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-center">
                    120 Item Food
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 flex justify-center items-center flex-col rounded-lg overflow-hidden">
                <Image
                  className="object-cover object-center"
                  src="/man.png"
                  width={80}
                  height={80}
                  alt="Clean Environment"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-center">
                    Clean Environment
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
