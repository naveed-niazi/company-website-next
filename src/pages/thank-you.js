import Image from "next/image";
import thankImg from "../assets/thank-you.svg";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="m-auto md:w-1/3 text-center h-screen	">
      <div className="block  md:pt-12 pt-28 pb-3 ">
        <Image priority={true} src={thankImg} height={350} alt="modal image" />
      </div>
      <h1 className="md:text-5xl text-4xl mb-3 text-slate-700">Thank You</h1>
      <p className="text-slate-600 md:px-0 px-4 ">
        Your form has been successfully submitted and a representative will be
        in touch shortly. Thanks for reaching out!
      </p>
      <Link href="/">
        <button
          onClick={() =>
            document.querySelector("body").classList.remove("overflow-hidden")
          }
          className="mt-6 text-white tracking-wide font-semibold bg-orange-600 hover:bg-orange-700 md:w-3/6 w-4/6 rounded-md opacity-90 h-10"
        >
          GO TO NAREMIS.COM
        </button>
      </Link>
    </div>
  );
}
