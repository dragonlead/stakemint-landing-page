import React from "react";
import Link from "next/link";

function FooterB() {
  return (
    <div className="flex justify-center px-7 bg-[#edeff1] dark:bg-black">
      <div className="flex flex-col pt-10 gap-10 mb-[58px] contentDivLG text-secondary dark:text-white">
        <div className="flex flex-col justify-between gap-4 text-sm lg:flex-row lg:gap-0 font-commonsRegular">
          <div className="flex flex-col justify-between gap-1 w-full lg:w-[20%]">
            <p className="font-commonsDemiBold">
              Holding and headquarters in Switzerland
            </p>
            <div>
              <p>SBorg SA</p>
              <p>Rue du Grand-Chêne 8, 1003 Lausanne Switzerland</p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-1 w-full lg:w-[20%]">
            <p className="font-commonsDemiBold">
              Representative office in Switzerland of Stakemint Solutions OÜ
            </p>
            <div>
              <p>Stakemint Invest SA</p>
              <p>Rue du Grand-Chêne 8, 1003 Lausanne, Switzerland</p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-1 w-full lg:w-[20%]">
            <p className="font-commonsDemiBold">
              Operating the Stakemint App under the license FVT000326 in Estonia
              and under the registration E2022-034 in France
            </p>
            <div>
              <p>Stakemint Solutions OÜ</p>
              <p>
                Rotermanni tn 6 Kesklinna district, Tallinn Harju county 10111,
                Estonia
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[23%]">
            <p>
              By using this website you agree to our Terms of Use. Nothing on
              this website should be construed as a recommendation for any
              action. Stakemint Solutions OÜ is the owner of the license:
              FVT000326 (link) and E2022-034 (link). For more details, please
              see the Terms of Use of the Stakemint app.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full gap-4 lg:flex-row lg:items-end font-commonsRegular">
          <div className="text-xs">
            <Link href="#" className="mr-5">
              Terms of Use
            </Link>
            <Link href="#" className="mr-5">
              Privacy Policy
            </Link>
            <Link href="#">Cookies Policy</Link>
          </div>
          <div className="w-full lg:w-[23%]">
            <p className="text-sm text-left">
              © SBorg SA. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterB;
