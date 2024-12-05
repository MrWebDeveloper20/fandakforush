'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SlickBanner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplaySpeed: 5000,
    autoplay : true,
    InitalSlide: 0,
    rtl: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          infinite: true,
        },
      },
    ],
  }
  return (
    <div className="w-4/5 m-auto my-5">
      <div className="slider-container">
        <Slider {...settings}>
          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/bondn/bondn01-07.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Bondon   </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/derui/derui01-01.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Derui   </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/honest/honest01-04.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Honest Think   </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/honest/honest02-03.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Honest Laser   </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/lighter/lighter01-02.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Lighter Laser   </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/lighter/lighter02-03.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Lighter Luxury   </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/lighter/lighter03-06.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Lighter Match   </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/lighter/lighter04-03.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Lighter Gold   </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/lighter/lighter05-02.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Lighter    </h2>
          </Link>
          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/lighter/lighter05-02.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Lighter    </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/lighter/lighter06-01.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Lighter    </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/sense/sense01-04.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Touch  </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/zorro/zorro01-06.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Zorro   </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/zorro/zorro02-04.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Zorro Gold  </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/zorro/zorro03-03.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Zorro Luxury  </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/zorro/zorro04-01.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Zorro Coin  </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/yubang/yubang01-03.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Yubang  </h2>
          </Link>

          <Link
            href="/"
            className="flex flex-col justify-center items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/category/yubang/yubang02-03.jpg"
              alt=""
              width={300}
              height={300}
            />

            <h2 className="text-yellow-400 text-lg text-center mb-2  ml-5 p-1"> Yubang  </h2>
          </Link>

         
        </Slider>
      </div>
    </div>
  )
}

export default SlickBanner
