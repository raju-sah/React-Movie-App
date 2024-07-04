import { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "Home", icon: HiHome },
    { name: "Search", icon: HiMagnifyingGlass },
    { name: "Watch List", icon: HiPlus },
    { name: "Trending", icon: HiStar },
    { name: "Movies", icon: HiPlayCircle },
    { name: "TV Shows", icon: HiTv },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover"
          alt="logo"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <HeaderItems key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItems key={index} name={""} Icon={item.icon} />
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItems key="menu-toggle" name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 3 && (
                      <HeaderItems
                        key={index}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <img
        src="https://www.svgrepo.com/show/284827/profile-user.svg"
        className="w-[40px] h-[40px] rounded-full"
        alt="profile"
      />
    </div>
  );
}

export default Header;
