import Image from "next/image";
import Header from "../components/Header";
import LOGO from "../../assets/swissborg-logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ResetPassword() {
  const router = useRouter();

  const homePage = (e: any) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <>
      <Header />
      <main className="lg:bg-[#414259] w-full h-full lg:h-screen lg:flex justify-center items-center text-primary">
        <div className="bg-white w-fit rounded-md p-[40px] lg:flex flex-col gap-[24px]">
          <div
            className="flex items-center justify-center hover:cursor-pointer"
            onClick={homePage}
          >
            <Image
              src={LOGO}
              alt="LOGO"
              className="w-[40px] h-[45px] lg:w-[35px] lg:h-[40px] mr-[10px]"
            />
            <span className="text-[3rem] lg:text-[2.5rem] leading-[46px] font-commonsDemiBold mt-[10px]">
              CryptoDawg
            </span>
          </div>
          <p className="font-commonsRegular text-3xl text-center pt-[8px] mt-6 lg:mt-0">
            Forgot Your Password?
          </p>
          <p className="font-commonsRegular text-base lg:text-lg text-center pt-2 leading-6 lg:-my-[6px]">
            Enter your email address and we will send you{" "}
            <br className="hidden lg:flex" /> instructions to reset your
            password.
          </p>
          <div className="font-commonsRegular mt-6 lg:mt-0">
            <div className="relative flex flex-col">
              {/* <label
                htmlFor="email"
                className="absolute -top-2 left-4 px-1 text-sm bg-white hidden focus:block"
                // className="absolute top-3 left-4 px-1 text-lg text-gray-500 bg-white"
              >
                Email address
              </label> */}
              <input
                type="email"
                placeholder="Email address"
                className="w-full lg:w-[358px] h-[51px] outline-none border-[#c4c4c4] border-[1px] rounded-md px-4 hover:border-black focus:border-blue-500 focus:border-2 text-lg mb-3"
              />
              <input
                type="submit"
                value="Continue"
                className="py-3 w-full lg:w-[358px] hover:cursor-pointer bg-[#635dff] text-white rounded-md font-commonsRegular text-lg hover:bg-[#1769aa] active:bg-[#5d96c4] mt-6"
              />
            </div>
          </div>
          <p className="font-commonsDemiBold text-blue-500 mt-6 text-lg text-center pt-[5px] leading-6 lg:-my-[6px]">
            <Link href="/">Back to CryptoDawg</Link>
          </p>
        </div>
      </main>
    </>
  );
}
