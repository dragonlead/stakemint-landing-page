import Image from "next/image";
import Header from "../components/Header";
import LOGO from "../../assets/swissborg-logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "@/api/auth";

export default function SignIn() {
  const router = useRouter();

  const homePage = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  const formik = useFormik({
    initialValues: {
      email: "demo@stakemint.io",
      password: "auto_ixeds",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        const response = await login(values.email, values.password);
        router.push("/");
        // console.log(response);
      } catch (err: any) {
        console.log(err);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message || err });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Header />
      <main className="lg:bg-[#414259] w-full h-screen flex justify-center items-center text-primary">
        <video autoPlay muted loop className="absolute top-0 bottom-0 left-0 right-0 z-0 object-cover w-full h-full">
          <source src="/safe-logo.mp4" type="video/mp4" />
        </video>
        <div className="relative z-[2] bg-white rounded-md m-5 sm:m-0 p-[40px] lg:flex flex-col gap-[24px]">
          <div className="flex items-center justify-center hover:cursor-pointer" onClick={homePage}>
            <Image src={LOGO} alt="LOGO" className="w-[40px] h-[45px] lg:w-[35px] lg:h-[40px] mr-[10px]" />
            <span className="text-[3rem] lg:text-[2.5rem] leading-[46px] font-commonsDemiBold mt-[10px]">
              Stakemint
            </span>
          </div>
          <p className="font-commonsRegular text-3xl text-center pt-[8px] mt-6 lg:mt-0">Welcome</p>
          <p className="font-commonsRegular text-lg text-center pt-[5px] lg:-my-[6px]">
            Please sign-in to continue to Stakemint
          </p>
          <div className="mt-6 font-commonsRegular lg:mt-0">
            <form onSubmit={formik.handleSubmit}>
              <div className="relative flex flex-col">
                <input
                  required
                  type="email"
                  name="email"
                  value={formik.values.email}
                  placeholder="Email address"
                  className="w-full lg:w-[358px] h-[51px] outline-none border-[#c4c4c4] border-[1px] rounded-md px-4 hover:border-black focus:border-blue-500 focus:border-2 text-lg mb-3"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <input
                  required
                  type="password"
                  name="password"
                  value={formik.values.password}
                  placeholder="Password"
                  className="w-full lg:w-[358px] h-[51px] outline-none border-[#c4c4c4] border-[1px] rounded-md px-4 hover:border-black focus:border-blue-500 focus:border-2 text-lg"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.errors.submit && (
                  <p className="font-commonsRegular text-sm text-[#ff000080] pt-[5px] lg:-my-[6px]">
                    {formik.errors.submit}
                  </p>
                )}
                <Link href="/reset-password" className="mt-4 text-blue-500 font-commonsDemiBold">
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
