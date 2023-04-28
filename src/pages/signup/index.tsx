import Image from "next/image";
import LOGO from "../../assets/swissborg-logo.png";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNProgress } from "@/hooks/useNProgress";
import { signup } from "@/api/auth";
// import { Widget } from "react-chat-widget";
// import "react-chat-widget/lib/styles.css";

export default function SignUp() {
  const router = useRouter();
  const [handleStart, handleDone] = useNProgress();

  const signIn = (e: any) => {
    e.preventDefault();
    router.push("/signin");
  };

  const homePage = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  const handleNewUserMessage = (newMessage: any) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      handleStart();
      try {
        const response = await signup(values.email, values.password, `${values.firstName} ${values.lastName}`);
        router.push("/");
        // console.log(response);
      } catch (err: any) {
        console.log(err);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message || err });
        helpers.setSubmitting(false);
      }
      handleDone();
    },
  });

  return (
    <>
      <Header />
      <main className="flex flex-col lg:flex-row text-primary">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 bottom-0 left-0 right-0 z-0 object-cover w-full h-[1200px] md:h-full"
        >
          <source src="/safe-logo.mp4" type="video/mp4" />
        </video>
        <div className="relative z-[2] w-full lg:w-[35%] bg-[#e3edff] md:h-screen">
          <div className="flex items-center m-[30px] hover:cursor-pointer" onClick={homePage}>
            <Image src={LOGO} alt="LOGO" className="w-[35px] h-[40px] mr-[10px]" />
            <span className="text-[2.5rem] leading-[46px] font-commonsDemiBold mt-[10px]">Stakemint</span>
          </div>
        </div>
        <div className="relative z-[2] w-full lg:w-[58.5%] p-4 lg:p-[46px]">
          <p className="font-commonsDemiBold text-[32px] lg:text-6xl pt-[10px]">Welcome to Stakemint</p>
          <p className="font-commonsRegular text-[20px] lg:text-[22px] mt-[14px] mb-[47px]">
            We&apos;re excited to have you on board. Let&apos;s get started by creating your account.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-4">
              <div className="relative font-commonsRegular">
                <input
                  required
                  name="firstName"
                  value={formik.values.firstName}
                  type="text"
                  className="w-full lg:w-[358px] h-[51px] outline-none border-[#c4c4c4] border-[1px] rounded-md px-4 hover:border-black focus:border-blue-500 focus:border-2"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <p className="absolute px-1 text-sm bg-white -top-2 left-4">First Name*</p>
              </div>
              <div className="relative font-commonsRegular">
                <input
                  required
                  name="lastName"
                  value={formik.values.lastName}
                  type="text"
                  className="w-full lg:w-[358px] h-[51px] outline-none border-[#c4c4c4] border-[1px] rounded-md px-4 hover:border-black focus:border-blue-500 focus:border-2"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <p className="absolute px-1 text-sm bg-white -top-2 left-4">Last Name*</p>
              </div>
              <div className="relative font-commonsRegular">
                <input
                  required
                  name="email"
                  value={formik.values.email}
                  type="email"
                  className="w-full lg:w-[358px] h-[51px] outline-none border-[#c4c4c4] border-[1px] rounded-md px-4 hover:border-black focus:border-blue-500 focus:border-2"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <p className="absolute px-1 text-sm bg-white -top-2 left-4">Email*</p>
              </div>
              <div className="relative font-commonsRegular">
                <input
                  required
                  name="password"
                  value={formik.values.password}
                  type="password"
                  className="w-full lg:w-[358px] h-[51px] outline-none border-[#c4c4c4] border-[1px] rounded-md px-4 hover:border-black focus:border-blue-500 focus:border-2"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <p className="absolute px-1 text-sm bg-white -top-2 left-4">Password*</p>
              </div>
              {formik.errors.submit && (
                <p className="font-commonsRegular text-sm text-[#ff000080] pt-[5px] lg:-my-[6px]">
                  {formik.errors.submit}
                </p>
              )}
              <input
                type="submit"
                value="Sign Up"
                className="py-3 w-full lg:w-[358px] hover:cursor-pointer bg-[#0d113f] text-white rounded-md font-commonsRegular text-lg hover:bg-[#1769aa] active:bg-[#5d96c4] mt-6"
              />
            </div>
          </form>
          <div className="flex mt-6 text-lg font-commonsRegular">
            <p>Already have an account?</p>{" "}
            <button className="ml-1 text-blue-500 hover:underline font-commonsDemiBold" onClick={signIn}>
              Sign In
            </button>
          </div>
          <div className="py-10">
            <hr />
          </div>
          <div className="font-commonsRegular">
            <p>
              The information on this website does not constitute an offer to sell securities or a solicitation of an
              offer to buy securities. Further, none of the information contained on this website is a recommendation to
              invest in any securities. By using this website, you accept our{" "}
              <a href="#" className="text-blue-500">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>
              . Past performance is no guarantee of future results.
            </p>
            <p className="mt-7">© {new Date().getFullYear()} Stakemint. All Rights Reserved.</p>
          </div>
        </div>
        {/* <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Stakemint Support"
          subtitle=""
        /> */}
      </main>
    </>
  );
}
