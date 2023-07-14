// import React from "react";
// import { utils_video } from "./utils";



// const MyCarousel = () => {
//   return (
//     <div className="wrapper w-[100%]">
//       <div className="main flex flex-nowrap w-[100%] items-center">
//         <div className="w-[5%]">
//           <button>
//             <svg
//               width={60}
//               height={60}
//               viewBox="0 0 60 60"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 opacity="0.962"
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M41.3085 10.4883C41.3778 11.1451 41.2802 11.7702 41.0155 12.3633C35.1545 18.2047 29.3147 24.0641 23.496 29.9414C29.3147 35.8187 35.1545 41.6781 41.0155 47.5195C41.4061 48.3008 41.4061 49.082 41.0155 49.8633C40.2016 50.6331 39.2837 50.7698 38.2616 50.2734C31.8749 43.8867 25.4882 37.5 19.1014 31.1133C18.7108 30.332 18.7108 29.5508 19.1014 28.7695C25.4882 22.3828 31.8749 15.9961 38.2616 9.60937C39.5654 8.98562 40.5811 9.27859 41.3085 10.4883Z"
//                 fill="#443926"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="w-[90%] flex flex-row overflow-hidden">
//         {utils_video.map((item, index) => (
//           <video className="rounded-[20px] h-[855px] mr-[50px]"  width={"550px"} height="240" controls>
//             <source src={item.coment}  type="video/mp4" />
//           </video>
//         ))}
//         </div>
//         <div className="w-[5%]">
//           <button>
//             <svg
//               width={24}
//               height={31}
//               viewBox="0 0 24 31"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 opacity="0.962"
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M0.691537 40.5117C0.622162 39.8549 0.719779 39.2298 0.984505 38.6367C6.84552 32.7953 12.6853 26.9359 18.504 21.0586C12.6853 15.1813 6.84552 9.32192 0.984506 3.48048C0.59392 2.69918 0.59392 1.91801 0.984506 1.13673C1.79837 0.36692 2.7163 0.230164 3.73841 0.72657C10.1251 7.11329 16.5118 13.5 22.8986 19.8867C23.2892 20.668 23.2892 21.4492 22.8986 22.2305C16.5118 28.6172 10.1251 35.0039 3.73841 41.3906C2.43458 42.0144 1.41892 41.7214 0.691537 40.5117Z"
//                 fill="#443926"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyCarousel;

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const MyCarousel = () => {
  return (
    <div className='w-[80%] mx-auto flex justify-center '>
      <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
     
    </Swiper>
    </div>
  )
}

export default MyCarousel