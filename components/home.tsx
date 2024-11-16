"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSession } from "next-auth/react";
import Navbar from "./navbar";

interface GameData {
  id: string;
  title: string;
  image: string;
}

interface HomepageProps {
  data: GameData[];
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  customPaging: () => (
    <div
      style={{
        width: "7px",
        height: "7px",
        marginTop: "4px",
        background: "#ffff", // Default color for inactive dots
        borderRadius: "50%",
      }}
    />
  ),
};

export default function Homepage({ data }: HomepageProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  /*   useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  } */

  const handlePress = (item: GameData) => {
    switch (item.title) {
      case "Garena Free Fire":
        router.push("/games/freefire");
        break;
      case "Battleground Mobile India":
        router.push("/games/bgmi");
        break;
      case "Call Of Duty":
        router.push("/games/cod");
        break;
      case "Ludo King":
        router.push("/games/ludo");
        break;
      default:
        console.warn("Route not found for this game.");
    }
  };

  return (
    <div className="p-4">
      <Navbar />
      <div className="">
        <Slider {...settings}>
          <div className=" h-60  w-20  relative  rounded-2xl">
            <Image
              src="/images/ff.png"
              alt="Garena Free Fire Banner"
              fill
              className="rounded-2xl"
            />
          </div>
          <div className=" h-60  w-20  relative  rounded-2xl">
            <Image
              src="/images/ff.png"
              alt="Garena Free Fire Banner"
              fill
              className="rounded-2xl"
            />
          </div>
        </Slider>
      </div>
      <div>
        <h1 className="text-4xl  mt-2 font-semibold">Games</h1>
        <div className="grid grid-cols-2 gap-4  mt-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer bg-white rounded-t-xl"
              onClick={() => handlePress(item)}
            >
              <div className="w-full h-32 relative overflow-hidden flex justify-center items-center rounded-t-xl">
                <Image src={item.image} alt={item.title} fill className="" />
              </div>
              <h2 className="text-xl font-bold px-1 text-primary">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
