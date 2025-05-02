import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Home() {
  return (
    <div className="pb-20">
      {/* バナースライドショー：ヘッダーにくっつける */}
      <div className="w-full mt-20">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {['SALE10.png', 'SALE10P.png', 'slider1.png'].map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={`/img/${img}`}
                alt={`バナー${i + 1}`}
                className="w-full h-[40vh] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 mt-8">
  
  {/* 今すぐ見積もりボタン */}
  <Link
    to="/simulation"
    className="bg-gradient-to-r from-red-400 to-red-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:from-red-500 hover:to-red-700 transition w-64 text-center"
  >
    今すぐ見積もり
  </Link>

  {/* LINE相談ボタン */}
  <a
    href="https://line.me/ti/p/xxxxx"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:from-green-500 hover:to-green-700 transition w-64 text-center"
  >
    LINEで相談
  </a>

</div>



      {/* コンテンツだけに余白を持たせる */}
      <div className="px-6 pt-6">
        <h1 className="text-2xl font-bold mb-4"></h1>
        <p></p>
      </div>
    </div>
  );
}
