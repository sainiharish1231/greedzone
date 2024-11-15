import Image from "next/image";
import React from "react";
// Ensure you have web-compatible paths for these assets.

const Navbar = () => {
  return (
    <div className="p-4 bg-primary rounded-b-[40px]">
      <div className="flex flex-row justify-between items-center">
        <Image
          src={"/icons/manu.png"} // Adjusted from `manu` to `menu` assuming typo
          alt="Menu Icon"
          className="w-14 h-14 rotate-180"
          width={56}
          height={56}
        />

        {/* Center Logo */}
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/images/apklogo.png"}
            alt="App Logo"
            className="w-10 h-10"
            width={40}
            height={40}
          />
          <p className="text-white font-bold text-2xl">Greed Zoon</p>
        </div>

        {/* Right Icon */}
        <Image
          src={"/icons/notification.png"}
          alt="Notification Icon"
          className="w-10 h-10"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default Navbar;
