import Image from "next/image";
import emailImage from "../../../public/mail.png";
import phoneImage from "../../../public/phone.png";
import locationImage from "../../../public/location.png";
import enterImage from "../../../public/enterEmail.png";
import "../footer/footer.css";

export default function Footer() {
  return (
    <div className="w-[100%]">
      <div className="w-[90%] m-auto grid grid-cols-4 gap-10 items-start justify-around h-[50vh] flex-wrap">
        <div className="chocolate">
          <h2 className="font-bold text-[20px]">CHOCOLATE</h2>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sed
            nulla sapiente eveniet fuga officiis ratione consequuntur? Ab vel
            eveniet esse aliquam minima sunt accusamus tempora quas beatae
            molestias, dicta cum iste nihil quaerat ut earum rerum quisquam at.
            Praesentium accusamus rerum aperiam, distinctio officia placeat
            aspernatur necessitatibus quaerat excepturi?
          </p>
          <div className="email flex flex-row items-center gap-3 mt-9 text-sm">
            <Image src={emailImage} />
            <p>debra.holt@example.com</p>
          </div>
          <div className="phone flex flex-row items-center gap-3 mt-3 text-sm">
            <Image src={phoneImage} />
            <p>(303) 555-0105</p>
          </div>
          <div className="location flex flex-row items-center gap-3 mt-3 text-sm">
            <Image src={locationImage} />
            <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
          </div>
        </div>
        <div className="quickLinks">
          <h2 className="font-bold text-[20px] ">QUICK LINKS</h2>
          <ul className="mt-9">
            <li className="mt-5 text-[20px]">Test 01</li>
            <li className="mt-5 text-[20px]">Test 02</li>
            <li className="mt-5 text-[20px]">Test 03</li>
            <li className="mt-5 text-[20px]">Test 04</li>
          </ul>
        </div>
        <div className="collection ">
          <h2 className="font-bold text-[20px]">COLLECTION</h2>
          <ul className="mt-9 ">
            <li className="mt-5 text-[20px]">Test 01</li>
            <li className="mt-5 text-[20px]">Test 02</li>
            <li className="mt-5 text-[20px]">Test 03</li>
            <li className="mt-5 text-[20px]">Test 04</li>
          </ul>
        </div>
        <div className="newsLetter">
          <h2 className="font-bold text-[20px]">NEWS LETTER</h2>
          <p className="mt-9">
            Welcome to our chocolate haven, where passion meets <br />{" "}
            perfection.
          </p>
          <div className="input flex flex-row items-end gap-2 mt-3">
            <div className="input  border-b-2 border-black w-[80%] flex gap-2 items-center justify-center">
              <Image src={enterImage} />
              <p>Enter Your Email</p>
            </div>
            <div className="w-[100px] h-[50px] border-2 border-black flex items-center justify-center">
              SEND
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
