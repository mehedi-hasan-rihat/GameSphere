import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  return (
    <div className="mb-[150px] container mx-auto">
       <div className="dark:text-white  text-center max-w-3xl mx-auto">
      <h3 className="text-3xl font-semibold mb-3">Upcoming games</h3>
      <p>Get ready for a thrilling start to the year with these highly anticipated games across multiple platforms</p>
      </div>

      <div className="">
        {" "}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="rounded-md">
            {/* <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg group">
              <img
                alt=""
                src="https://cdn2.unrealengine.com/fneco-33-11-winterfest-ip-motd-pastelglazegift-motd-1920x1080-1920x1080-bf1ed1581e3a.jpg?resize=1&w=1920"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <time className="block text-xs text-white/90">
                    {" "}
                    05th Jan 2025{" "}
                  </time>

                  <p>
                    <h3 className="mt-0.5 text-lg text-white">
                      How to position your furniture for positivity
                    </h3>
                  </p>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </div>
 */}

            <article className="group">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />

              <div className="p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Finding the Journey to Mordor
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg group">
              <img
                alt=""
                src="https://cdn2.unrealengine.com/ka-feral01-final4k-3840x2160-16081cebc9a4.png?resize=1&w=1920"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <time className="block text-xs text-white/90">
                    {" "}
                    10th Oct 2022{" "}
                  </time>

                  <p>
                    <h3 className="mt-0.5 text-lg text-white">
                      How to position your furniture for positivity
                    </h3>
                  </p>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </div>{" "} */}
            <article className="group">
              <img
                alt=""
                src="https://cf.geekdo-images.com/ZlKt11Zlf2Xb9D0BN6rnWQ__imagepage/img/fHBhX37B-mu01b8plutje6yYhVY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7840191.png"
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />

              <div className="p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Finding the Journey to Mordor
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            {/* <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg group">
              <img
                alt=""
                src="https://cdn2.unrealengine.com/ch6s1-ka-4k-1920x1080-eacf069a7f06.jpg?resize=1&w=1920"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <time className="block text-xs text-white/90">
                    {" "}
                    10th Oct 2022{" "}
                  </time>

                  <p>
                    <h3 className="mt-0.5 text-lg text-white">
                      How to position your furniture for positivity
                    </h3>
                  </p>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </div> */}
            <article className="group">
              <img
                alt=""
                src="https://ludusmagnusstudio.com/wp-content/uploads/2021/10/INFERNO_box.png"
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />

              <div className="p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Finding the Journey to Mordor
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg group">
              <img
                alt=""
                src="https://cdn2.unrealengine.com/crew-header-img-1920x1080-9df156cd050b.jpg?resize=1&w=1920"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <time className="block text-xs text-white/90">
                    {" "}
                    10th Oct 2022{" "}
                  </time>

                  <p>
                    <h3 className="mt-0.5 text-lg text-white">
                      How to position your furniture for positivity
                    </h3>
                  </p>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </div> */}
            <article className="group">
              <img
                alt=""
                src="https://cdn2.unrealengine.com/ka-feral01-final4k-3840x2160-16081cebc9a4.png?resize=1&w=1920"
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />

              <div className="p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Finding the Journey to Mordor
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg group">
              <img
                alt=""
                src="https://cdn2.unrealengine.com/33-11br-samuraibatman-motd-1920x1080-1920x1080-31aa7c203e56.jpg?resize=1&w=1920"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <time className="block text-xs text-white/90">
                    {" "}
                    10th Oct 2022{" "}
                  </time>

                  <p>
                    <h3 className="mt-0.5 text-lg text-white">
                      How to position your furniture for positivity
                    </h3>
                  </p>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </div> */}
            <article className="group">
              <img
                alt=""
                src="https://cf.geekdo-images.com/qMzwcF-wG3KGKSDE1FKvew__imagepage/img/uKmkQe483OxiQjfjwLCbwyVHgw4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7841939.jpg"
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />

              <div className="p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Finding the Journey to Mordor
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            {/* <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg group">
              <img
                alt=""
                src="https://cdn2.unrealengine.com/33-11br-samuraibatman-motd-1920x1080-1920x1080-31aa7c203e56.jpg?resize=1&w=1920"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <time className="block text-xs text-white/90">
                    {" "}
                    10th Oct 2022{" "}
                  </time>

                  <p>
                    <h3 className="mt-0.5 text-lg text-white">
                      How to position your furniture for positivity
                    </h3>
                  </p>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </div> */}
            <article className="group">
              <img
                alt=""
                src="https://imgs.crazygames.com/supermarket-simulator-cashier-game_16x9/20241223040731/supermarket-simulator-cashier-game_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=587.5"
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />

              <div className="p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Finding the Journey to Mordor
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            {/* <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg group">
              <img
                alt=""
                src="https://cdn2.unrealengine.com/33-11br-samuraibatman-motd-1920x1080-1920x1080-31aa7c203e56.jpg?resize=1&w=1920"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <time className="block text-xs text-white/90">
                    {" "}
                    10th Oct 2022{" "}
                  </time>

                  <p>
                    <h3 className="mt-0.5 text-lg text-white">
                      How to position your furniture for positivity
                    </h3>
                  </p>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </div> */}
            <article className="group">
              <img
                alt=""
                src="https://imgs.crazygames.com/dungeon-of-terror_16x9/20241223042103/dungeon-of-terror_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=587.5"
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />

              <div className="p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Finding the Journey to Mordor
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
