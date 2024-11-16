import React from "react";

import Homepage from "@/components/home";

const data = [
  { id: "1", title: "Garena Free Fire", image: "/images/cards.png" },
  { id: "2", title: "Battleground Mobile India", image: "/images/bgmi.png" },
  { id: "3", title: "Call Of Duty", image: "/images/cod.png" },
  { id: "4", title: "Ludo King", image: "/images/ludo.png" },
  { id: "5", title: "Garena Free Fire", image: "/images/cards.png" },
  { id: "6", title: "Battleground Mobile India", image: "/images/bgmi.png" },
  { id: "7", title: "Call Of Duty", image: "/images/cod.png" },
  { id: "8", title: "Ludo King", image: "/images/ludo.png" },
];

const Home = () => {
  return <Homepage data={data} />;
};

export default Home;
