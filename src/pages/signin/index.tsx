import Image from "next/image";
import Header from "../components/Header";
import LOGO from "../../assets/swissborg-logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();

  const homePage = (e: any) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <>
      <Header />
      <main className="lg:bg-[#414259] w-full h-full lg:h-screen lg:flex justify-center items-center text-primary">
        <div className="bg-white rounded-md p-[40px] lg:flex flex-col gap-[24px]">
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
              Stakemint
            </span>
          </div>
          <p className="font-commonsRegular text-3xl text-center pt-[8px] mt-6 lg:mt-0">
            Welcome
          </p>
          <p className="font-commonsRegular text-lg text-center pt-[5px] lg:-my-[6px]">
            Please sign-in to continue to Stakemint
          </p>
          <div className="mt-6 font-commonsRegular lg:mt-0">
            <form action="">
              <div className="relative flex flex-col">
                {/* <label
                htmlFor="email"
                className="absolute hidden px-1 text-sm bg-white -top-2 left-4 focus:block"
                // className="absolute px-1 text-lg text-gray-500 bg-white top-3 left-4"
              >
                Email address
              </label> */}
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="w-full lg:w-[358px] h-[51px] outline-none border-[#c4c4c4] border-[1px] rounded-md px-4 hover:border-black focus:border-blue-500 focus:border-2 text-lg mb-3"
                />
                <input
                  required
                  type="password"
                  placeholder="Password"
                  className="w-full lg:w-[358px] h-[51px] outline-none border-[#c4c4c4] border-[1px] rounded-md px-4 hover:border-black focus:border-blue-500 focus:border-2 text-lg"
                />
                <Link
                  href="/reset-password"
                  className="mt-4 text-blue-500 font-commonsDemiBold"
                >
                  Forgot Password?
                </Link>
                <input
                  type="submit"
                  value="Continue"
                  className="py-3 w-full lg:w-[358px] hover:cursor-pointer bg-[#635dff] text-white rounded-md font-commonsRegular text-lg hover:bg-[#1769aa] active:bg-[#5d96c4] mt-6"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
