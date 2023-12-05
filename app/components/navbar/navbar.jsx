import "./navbar.css";
import Image from "next/image";
import imageTwo from "../../../public/profile.png";
import imageSearch from "../../../public/search.png";
import imageCart from "../../../public/basket.png";
import imageHeart from "../../../public/heart.png";

export default function Navbar() {
  return (
    <div className="bg-black fixed top-0 w-[100%]">
      <div className="flex flex-row items-center justify-around w-[90%] h-[70px] bg-black text-lime-50 m-auto ">
        <div className="partOne">
          <ul className="flex flex-row items-center gap-5 hidden md:block md:flex">
            <li className="hover:border-t-4 p-1 hover:cursor-pointer">
              Test 1
            </li>
            <li className="hover:border-t-4 p-1 hover:cursor-pointer">
              Test 2
            </li>
            <li className="hover:border-t-4 p-1 hover:cursor-pointer">
              Test 3
            </li>
            <li className="hover:border-t-4 p-1 hover:cursor-pointer">
              Test 4
            </li>
            <li className="hover:border-t-4 p-1 hover:cursor-pointer">
              Test 5
            </li>
          </ul>
        </div>
        <div className="partTwo text-[20px]">
          <h1>CHOCOLATE</h1>
        </div>
        <div className="partThree flex flex-row items-center justify-around gap-4">
          <Image src={imageSearch} />
          <div className=" flex flex-row items-center gap-10">
            <div className="login flex flex-row items-center gap-1">
              <p>Login</p>
              <div className="profile ">
                <Image src={imageTwo} />
              </div>
            </div>
            <div className="cart flex flex-row items-center gap-1">
              <Image src={imageCart} />
              <div className="w-[25px] h-[25px] border rounded-full bg-white text-black flex items-center justify-center">
                32
              </div>
            </div>
            <div className="flex flex-row items-center gap-1">
              <Image src={imageHeart} />
              <div className="w-[25px] h-[25px] border rounded-full bg-white text-black flex items-center justify-center">
                32
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
