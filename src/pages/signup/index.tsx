import Image from "next/image";
import LOGO from "../../assets/swissborg-logo.png";
import { useRouter } from "next/router";
import Header from "../components/Header";

export default function SignUp() {
  const router = useRouter();

  const signIn = (e: any) => {
    e.preventDefault();
    router.push("/signin");
  };

  return (
    <>
      <Header />
      <main className="flex flex-col lg:flex-row text-primary">
        <div className="w-full lg:w-[35%] bg-[#e3edff]">
          <div className="flex items-center m-[30px]">
            <Image
              src={LOGO}
              alt="LOGO"
              className="w-[35px] h-[40px] mr-[10px]"
            />
            <span className="text-[2.5rem] leading-[46px] font-commonsDemiBold mt-[10px]">
              CryptoDawg
            </span>
          </div>
        </div>
        <div className="w-full lg:w-[58.5%] p-4 lg:p-[46px]">
          <p className="font-commonsDemiBold text-[32px] lg:text-6xl pt-[10px]">
            Welcome to CryptoDawg
          </p>
          <p className="font-commonsRegular text-[20px] lg:text-[22px] mt-[14px] mb-[47px]">
            We&apos;re excited to have you on board. Let&apos;s get started by
            creating your account.
          </p>
          <form action="" method="post">
            <div className="flex flex-col gap-4">
              <div className="relative font-commonsRegular">
                <input
                  type="text"
                  className="w-full lg:w-[358px] h-[51px] outline-none border-[#c4c4c4] border-[1px] rounded-md px-4 hover:border-black focus:border-blue-500 focus:border-2"
                />
                <p className="absolute -top-2 left-4 bg-white px-1 text-sm">
                  First Name*
                </p>
              </div>
              <div className="relative font-commonsRegular">
                <input
                  type="text"
                  className="w-full lg:w-[358px] h-[51px] outline-none border-[#c4c4c4] border-[1px] rounded-md px-4 hover:border-black focus:border-blue-500 focus:border-2"
                />
                <p className="absolute -top-2 left-4 bg-white px-1 text-sm">
                  Last Name*
                </p>
              </div>
              <div className="relative font-commonsRegular">
                <input
                  type="email"
                  className="w-full lg:w-[358px] h-[51px] outline-none border-[#c4c4c4] border-[1px] rounded-md px-4 hover:border-black focus:border-blue-500 focus:border-2"
                />
                <p className="absolute -top-2 left-4 bg-white px-1 text-sm">
                  Email*
                </p>
              </div>
              <div className="relative font-commonsRegular">
                <input
                  type="password"
                  className="w-full lg:w-[358px] h-[51px] outline-none border-[#c4c4c4] border-[1px] rounded-md px-4 hover:border-black focus:border-blue-500 focus:border-2"
                />
                <p className="absolute -top-2 left-4 bg-white px-1 text-sm">
                  Password*
                </p>
              </div>
              <input
                type="submit"
                value="Sign Up"
                className="py-3 w-full lg:w-[358px] hover:cursor-pointer bg-[#0d113f] text-white rounded-md font-commonsRegular text-lg hover:bg-[#1769aa] active:bg-[#5d96c4] mt-6"
              />
            </div>
          </form>
          <div className="font-commonsRegular flex text-lg mt-6">
            <p>Already have an account?</p>{" "}
            <button
              className="hover:underline text-blue-500 font-commonsDemiBold ml-1"
              onClick={signIn}
            >
              Sign In
            </button>
          </div>
          <div className="py-[70px]">
            <hr />
          </div>
          <div className="font-commonsRegular">
            <p>
              The information on this website does not constitute an offer to
              sell securities or a solicitation of an offer to buy securities.
              Further, none of the information contained on this website is a
              recommendation to invest in any securities. By using this website,
              you accept our{" "}
              <a href="#" className="text-blue-500">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>
              . Past performance is no guarantee of future results. Any
              historical returns, expected returns or probability projections
              may not reflect actual future performance. All investments involve
              risk and may result in loss, including loss of principal. Percent
              does not render investment, financial, legal or accounting advice.
            </p>
            <p className="mt-7">
              © {new Date().getFullYear()} CryptoDawg. All Rights Reserved.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
