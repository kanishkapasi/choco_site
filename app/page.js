import "./globals.css";
import image from "../public/chocoGatway.png";
import Image from "next/image";
import emailImage from "../public/whitemail.png";
import lockImage from "../public/lockpng.png";
import imageEye from "../public/eyepng.png";
import forgetImage from "../public/forgotmail.png";

export default function Home() {
  return (
    <div className="mainBgContainer w-[100%]">
      {/* Part One Section */}
      <div className="mainContainer w-[100%] h-[50vh] m-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-lime-50 lg:text-[64px] md:text-[32px]">
          CHOCOLATE BLIS AWAITS LOGIN!
        </h1>
        <div className="flex justify-center items-center w-[200px]">
          <div className="border-b-2 w-[200px]"></div>
        </div>
        <ul className="text-lime-50 flex justify-center items-center gap-9 mt-5">
          <li className="flex items-center gap-2">
            <div className="rounded-full bg-white w-3 h-3"></div>Home
          </li>
          <li className="flex items-center gap-2">
            <div className="rounded-full bg-white w-3 h-3"></div>Login
          </li>
        </ul>
      </div>

      {/* Part Two Section */}
      <div className="partTwo w-[100%] h-[100vh] m-auto bg-black">
        <div className="w-[90%] h-[80vh] flex items-start  gap-5 justify-center">
          <div className="image">
            <Image src={image} className="h-[800px] w-[466px] mt-5" />
            <h2 className="headline">
              CHCOCO <br /> GATEWAYE.
            </h2>
          </div>
          <div className="description mt-10 w-[50%] flex flex-col">
            <div className="flex flex-row items-center justify-center">
              <div className="login bg-[#772000] w-[40%] h-[40px] text-center flex items-center justify-center text-lime-50 text-[30px] font-bold">
                LOGIN
              </div>
              <div className="register  w-[40%] h-[40px] text-center flex items-center justify-center text-lime-50 text-[30px] font-bold border-2 border-[#772000]">
                REGISTER
              </div>
            </div>
            <p className="text-[20px] text-lime-50 ml-20 mt-20">
              Enter Your Account Information:
            </p>
            <div className="bg-[#232323] h-[64px] w-[700px] rounded-md ml-20 flex flex-row gap-3 items-center pl-3 mt-10">
              <Image src={emailImage} />
              <div className="h-[15px] w-[2px] bg-lime-50"></div>
              <p className="text-lime-50">example@gmail.com</p>
            </div>
            <div className="bg-[#232323] h-[64px] w-[700px] rounded-md ml-20 flex flex-row gap-3 items-center pl-3 mt-10 justify-between">
              <div className="flex flex-row items-center gap-3">
                <Image src={lockImage} />
                <div className="h-[15px] w-[2px] bg-lime-50"></div>
                <p className="text-lime-50">password</p>
              </div>
              <Image src={imageEye} className="mr-4" />
            </div>
            <div className="forget flex flex-row items-center ml-20 mt-10 gap-5 text-lime-50">
              <Image src={forgetImage} />
              <p>
                Forget Your <strong>password ?</strong>
              </p>
            </div>
            <p className="text-lime-50 ml-20 mt-10 ">
              If You Don't Have An Account ,Please{" "}
              <strong>Register Here</strong>
            </p>
            <div className="w-[700px] ml-20 mt-10 h-[50px] flex items-center justify-center bg-[#772000] text-lime-50 text-[20px]">
              LOGIN
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
