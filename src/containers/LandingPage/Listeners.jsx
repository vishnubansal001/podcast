import React, { useRef,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import quotes from "../../assets/quotes.svg";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import spotify1 from "../../assets/spotify1.svg";
import googlePod from "../../assets/googlePod.svg";
import applePod from "../../assets/applePod.svg";
import about from "../../assets/about.svg";


const Listners = () => {
  const [_, setInit] = useState();

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <>
      <section className="flex select-none items-center justify-center  min-h-[85vh] h-full p-4 flex-col md:py-8 relative bg-[#EDF3F7]">
        <div className="flex items-center justify-center w-full max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-center w-full flex-col gap-6 sm:gap-8 lg:gap-12">
            <div className="w-full flex flex-col items-center justify-center md:gap-4 gap-2">
              <h1 className="text-center font-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                What our listeners say
              </h1>
              <p className="text-[#4D4D4D] font-medium text-sm lg:text-base text-center">
                Their experience throughout every platform
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-10 s:left-[8rem]  md:left-[10rem] lg:left-[14rem] hidden sm:flex items-center justify-center">
          <svg
            width="105"
            height="105"
            viewBox="0 0 105 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M89.9246 62.3434C85.8777 61.3043 79.06 60.1923 76.5443 58.4788C75.5053 57.7679 75.6329 56.984 75.8152 56.4371C75.9975 55.9267 77.0365 55.3981 77.6745 55.4345C79.1147 55.4892 80.5548 55.7991 81.9402 56.1819C85.0209 57.0205 88.0834 57.8955 91.1095 58.8981C92.7136 59.4267 93.224 60.6481 92.2943 61.4319C91.7475 61.8876 91.2371 62.3434 89.9246 62.3434Z"
              fill="#CD4631"
            />
            <path
              d="M26.1224 90.5074C26.3047 89.5413 26.6693 89.0309 27.1979 88.2835C29.2578 85.4033 31.4088 82.5777 33.5234 79.7522C33.651 79.5882 33.7969 79.4059 33.9609 79.2783C34.6901 78.6585 35.5104 77.9293 36.4583 78.6038C37.4062 79.2965 37.0781 80.3173 36.5677 81.1376C34.4531 84.583 32.3021 88.01 30.1146 91.4189C29.7865 91.9475 29.2214 92.4033 28.6562 92.6767C27.2526 93.3512 26.013 92.4215 26.1224 90.5074Z"
              fill="#CD4631"
            />
            <path
              d="M71.6771 89.87C71.6771 90.6903 71.0391 91.2737 70.5652 91.3648C69.9271 91.4924 69.3803 91.383 68.4688 90.7633C68.1589 90.5627 67.9766 90.0705 67.7943 89.6877C66.4636 86.8075 65.1146 83.9455 63.8204 81.0471C63.4922 80.3362 63.1641 79.5158 63.2188 78.7684C63.2735 78.094 63.6928 77.1278 64.2396 76.8908C64.7683 76.6539 65.4792 76.5809 66.3178 77.4013C66.6277 77.6929 66.9193 78.1851 67.1198 78.6408C68.4323 81.6851 69.7448 84.7294 71.0209 87.7919C71.2579 88.3752 71.4037 89.0132 71.6771 89.87Z"
              fill="#CD4631"
            />
            <path
              d="M13.8177 64.7501C12.9792 64.5131 12.4323 64.112 12.3047 63.5652C12.1406 62.8725 12.487 61.9428 12.888 61.2865C13.1979 60.7943 13.9089 60.4844 14.5104 60.2839C17.5183 59.2813 20.5443 58.2969 23.5886 57.3672C24.099 57.2032 24.7552 57.1485 25.2474 57.3126C26.0495 57.586 26.3959 58.224 25.7396 58.9896C25.375 59.4271 24.9558 59.8829 24.4636 60.1199C21.6198 61.5417 18.7578 62.9089 15.8776 64.2579C15.349 64.4949 14.638 65.0053 13.8177 64.7501Z"
              fill="#CD4631"
            />
            <path
              d="M75.5781 33.4689C75.1771 33.3048 74.8308 32.6485 74.8125 32.211C74.7943 31.6095 74.9766 30.8803 75.3412 30.3881C77.0365 28.0548 78.8229 25.7579 80.5912 23.4793C80.8464 23.1329 81.1927 22.8595 81.5391 22.586C82.3229 21.9845 83.3438 21.4558 84.0365 22.3673C84.4375 22.8959 84.5651 24.2449 84.1823 24.7006C81.849 27.5444 79.3334 30.2605 76.836 32.9767C76.6354 33.2136 76.2344 33.5965 75.5781 33.4689Z"
              fill="#CD4631"
            />
            <path
              d="M17.1354 29.513C18.1562 29.8229 18.9401 30.0052 19.6875 30.2786C21.8568 31.0625 24.026 31.8646 26.1771 32.6849C26.7786 32.9219 27.4167 33.1588 27.9088 33.5416C28.2552 33.8151 28.638 34.5078 28.5104 34.763C28.2917 35.1823 27.9635 35.7109 27.2161 35.6562C26.9062 35.638 26.5052 35.6198 26.1588 35.5286C23.7161 34.8724 21.2734 34.2526 18.8489 33.5234C18.0286 33.2864 17.1719 32.9401 16.5156 32.4114C16.0417 32.0286 15.6042 31.1719 15.7318 30.6614C15.8411 30.1875 16.2422 29.513 17.1354 29.513Z"
              fill="#CD4631"
            />
            <path
              d="M50.4949 21.966C50.4767 22.1847 50.4584 22.4035 50.3855 22.604C50.0756 23.4972 49.8751 24.4998 48.6173 24.4087C47.2866 24.3175 47.2319 23.2238 47.2501 22.3306C47.3048 20.1795 47.5053 18.0285 47.6694 15.8592C47.7423 15.0754 47.8334 14.2733 48.0522 13.5259C48.2709 12.7603 48.5808 11.9764 49.6381 12.104C50.6225 12.2316 50.9506 12.8879 50.9689 13.7629C50.9689 14.7108 50.6772 20.1795 50.4949 21.966Z"
              fill="#CD4631"
            />
          </svg>
        </div>
        
     
      <div className="w-full swiper md:pt-12 pt-6 pb-10 bg-[#EDF3F7] relative">
        <div className="overflow-hidden w-full">
          <div className="w-full mb-6 p-2">
            <Swiper
              modules={[Navigation, Pagination, EffectFade, Autoplay]}
              //   slidesPerView={5}
              //   spaceBetween={20}
              onInit={() => setInit(true)}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              autoplay={{ delay: 4500 }}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1280:{
                  slidesPerView:3,
                  spaceBetween: 20,
                }
              }}
            >
              <SwiperSlide>
                <div className=" bg-white w-full flex flex-col justify-start items-start swiper-slide px-3 py-5 rounded-[14px]">
                  <div className="w-[90%] mx-auto flex justify-start items-center">
                    <div className="flex justify-start items-start flex-col lg:gap-4 gap-3">
                      <img src={quotes} alt="" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam facere rem consectetur, quod voluptates numquam
                        quis quos esse ut?
                      </p>
                      <div className="flex sm:flex-row flex-col w-full justify-center items-center p-2 gap-2">
                        <img src={pic1} alt="" />
                        <p className="text-xs lg:text-base">Luna lovegood,</p>
                        <img src={spotify1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-white w-full flex flex-col justify-start items-start swiper-slide px-3 py-5 rounded-[14px]">
                  <div className="w-[90%] mx-auto flex justify-start items-center">
                    <div className="flex justify-start items-start flex-col lg:gap-4 gap-3">
                      <img src={quotes} alt="" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam facere rem consectetur, quod voluptates numquam
                        quis quos esse ut?
                      </p>
                      <div className="flex justify-center sm:flex-row flex-col w-full items-center p-2 gap-2">
                        <img src={pic2} alt="" />
                        <p  className="text-xs lg:text-base">Luna lovegood,</p>
                        <img src={googlePod} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-white w-full flex flex-col justify-start items-start swiper-slide px-3 py-5 rounded-[14px]">
                  <div className="w-[90%] mx-auto flex justify-start items-center">
                    <div className="flex justify-start items-start flex-col lg:gap-4 gap-3">
                      <img src={quotes} alt="" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam facere rem consectetur, quod voluptates numquam
                        quis quos esse ut?
                      </p>
                      <div className="flex justify-center sm:flex-row flex-col w-full items-center p-2 gap-2">
                        <img src={pic1} alt="" />
                        <p  className="text-xs lg:text-base">Luna lovegood,</p>
                        <img src={spotify1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-white w-full flex flex-col justify-start items-start swiper-slide px-3 py-5 rounded-[14px]">
                  <div className="w-[90%] mx-auto flex justify-start items-center">
                    <div className="flex justify-start items-start flex-col lg:gap-4 gap-3">
                      <img src={quotes} alt="" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam facere rem consectetur, quod voluptates numquam
                        quis quos esse ut?
                      </p>
                      <div className="flex justify-center sm:flex-row flex-col w-full items-center p-2 gap-2">
                        <img src={pic3} alt="" />
                        <p  className="text-xs lg:text-base">Luna lovegood,</p>
                        <img src={applePod} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-white w-full flex flex-col justify-start items-start swiper-slide px-3 py-5 rounded-[14px]">
                  <div className="w-[90%] mx-auto flex justify-start items-center">
                    <div className="flex justify-start items-start flex-col lg:gap-4 gap-3">
                      <img src={quotes} alt="" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam facere rem consectetur, quod voluptates numquam
                        quis quos esse ut?
                      </p>
                      <div className="flex justify-center sm:flex-row flex-col w-full items-center p-2 gap-2">
                        <img src={pic1} alt="" />
                        <p  className="text-xs lg:text-base">Luna lovegood,</p>
                        <img src={spotify1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-white w-full flex flex-col justify-start items-start swiper-slide px-3 py-5 rounded-[14px]">
                  <div className="w-[90%] mx-auto flex justify-start items-center">
                    <div className="flex justify-start items-start flex-col lg:gap-4 gap-3">
                      <img src={quotes} alt="" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam facere rem consectetur, quod voluptates numquam
                        quis quos esse ut?
                      </p>
                      <div className="flex justify-center sm:flex-row flex-col w-full items-center p-2 gap-2">
                        <img src={pic2} alt="" />
                        <p  className="text-xs lg:text-base">Luna lovegood,</p>
                        <img src={googlePod} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-white w-full flex flex-col justify-start items-start swiper-slide px-3 py-5 rounded-[14px]">
                  <div className="w-[90%] mx-auto flex justify-start items-center">
                    <div className="flex justify-start items-start flex-col lg:gap-4 gap-3">
                      <img src={quotes} alt="" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam facere rem consectetur, quod voluptates numquam
                        quis quos esse ut?
                      </p>
                      <div className="flex justify-center sm:flex-row flex-col w-full items-center p-2 gap-2">
                        <img src={pic3} alt="" />
                        <p  className="text-xs lg:text-base">Luna lovegood,</p>
                        <img src={applePod} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="swiper-nav-btns flex md:px-10 mx-auto md:mt-10 mt-4">
                <button ref={prevRef}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24 5.50049C13.784 5.50049 5.5 13.7825 5.5 24.0005C5.5 34.2165 13.784 42.5005 24 42.5005C34.216 42.5005 42.5 34.2165 42.5 24.0005C42.5 13.7825 34.216 5.50049 24 5.50049Z"
                      stroke="black"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26.8847 17.0581L19.9127 24.0001L26.8847 30.9421"
                      stroke="black"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button ref={nextRef}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20 38.4996C30.216 38.4996 38.5 30.2176 38.5 19.9996C38.5 9.78363 30.216 1.49963 20 1.49963C9.784 1.49963 1.5 9.78363 1.5 19.9996C1.5 30.2176 9.784 38.4996 20 38.4996Z"
                      stroke="#CD4631"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.1153 26.942L24.0873 20L17.1153 13.058"
                      stroke="#CD4631"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="absolute -top-10 left-0 right-0 flex items-center justify-center">
        <img src={about} alt="sprial" className="w-20 h-20" />
      </div>
      </section>
    </>
  );
};

export default Listners;
