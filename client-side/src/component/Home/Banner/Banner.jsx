import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Next from "../../../assets/next.png";
import Prev from "../../../assets/prev.png";

export default function Banner() {
  const Heros = [
    "https://media.contentapi.ea.com/content/dam/apex-legends/common/from-the-rift/apex-section-bg-from-the-rift-blogpage-xl.jpg.adapt.1920w.jpg",
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fedda57d7bd05538e8e7b2903ddc1c65f1440575-3440x1020.jpg?auto=format&fit=fill&q=80&h=640",
    "https://act-webstatic.hoyoverse.com/puzzle/hk4e/pz_QaiBDjkyxb/resource/puzzle/2024/12/09/0fe98545fc1dc91013ae70e6c820f2fb_8135622234369919869.png?x-oss-process=image/format,webp/quality,Q_90",
    "https://mkt-web.gameloft.com/static/4064951ee135480e3c20b8f4fe87a4cd.jpg",
    "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3871/07edb091bb329145ee3f3f01476adb40acc6457b.jpg",
  ];
  return (
    <div className="z-10 mb-[90px]">
      {" "}
      <Slide
        nextArrow={
          <button className="text-white w-16  rounded-full focus:scale-90 mx-5 p-2">
            <img src={Next} alt="" className="rounded-full" />
          </button>
        }
        prevArrow={
          <button className="text-white w-16  rounded-full focus:scale-90 mx-5 p-2">
            <img src={Prev} alt="" className="rounded-full" />
          </button>
        }
      >
        {Heros.map((hero, idx) => {
          return (
            <div key={idx} className="each-slide-effect relative">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${hero})`,
                }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Content */}
              <div className="relative right-[250px] xl:right-[400px] 2xl:right-[500px] top-16 xl:top-20  2xl:top-40 z-10 flex items-center justify-center h-[300px] md:h-[400px] xl:h-[550px] 2xl:h-[676px]">
                <div className=" text-xl sm:text-2xl 2xl:text-4xl font-bold max-w-[36vw] xl:max-w-[32vw] text-black/80 space-y-3  bg-purple-50/60 rounded-md p-10 hidden lg:block">
                  <h3>Face the Frost in the Winter’s Haunt Event</h3>
                  <p className="text-[16px] 2xl:text-lg font-medium leading-5">
                    Take on a trial by tracks with the Winter Express LTM,
                    collect Bloodhound’s “Winter’s Bane,” and earn 150 Heirloom
                    Shards.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
