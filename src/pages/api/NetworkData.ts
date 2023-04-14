import { StaticImageData } from "next/image";

import Arbitrum from "../../assets/ArbitrumLogo.png";
import Aurora from "../../assets/AuroraLogo.png";
import Avalanche from "../../assets/AvalancheLogo.png";
import Base from "../../assets/BaseLogo.png";
import BNB from "../../assets/BNBLogo.png";
import Ethereum from "../../assets/EthereumLogo.png";
import GnosisChain from "../../assets/GnosisChainLogo.png";
import Optimism from "../../assets/OptimismLogo.png";
import Polygon from "../../assets/PolygonLogo.png";
import EARN_W_USDC from "../../assets/earn_w_usdc.jpg";
import COOKIE from "../../assets/icon-cookie-manage.svg";

interface Network {
  logoBG: string;
  logoColor: string;
  logoName: string;
  logoPath: StaticImageData;
}

export const networks: Network[] = [
  {
    logoBG: "bg-[#28a0f0]",
    logoColor: "text-white",
    logoName: "Arbitrum",
    logoPath: Arbitrum,
  },
  {
    logoBG: "bg-[#e8e7e6]",
    logoColor: "text-black",
    logoName: "Ethereum",
    logoPath: Ethereum,
  },
  {
    logoBG: "bg-[#f0b90b]",
    logoColor: "text-black",
    logoName: "BNB Smart Chain",
    logoPath: BNB,
  },
  {
    logoBG: "bg-[#ee1a37]",
    logoColor: "text-white",
    logoName: "Optimism",
    logoPath: Optimism,
  },
  {
    logoBG: "bg-[#673bb2]",
    logoColor: "text-white",
    logoName: "Polygon",
    logoPath: Polygon,
  },
  {
    logoBG: "bg-[#000000]",
    logoColor: "text-white",
    logoName: "Avalanche",
    logoPath: Avalanche,
  },
  {
    logoBG: "bg-[#48a9a6]",
    logoColor: "text-white",
    logoName: "Gnosis Chain",
    logoPath: GnosisChain,
  },
  {
    logoBG: "bg-[#f0b90b]",
    logoColor: "text-black",
    logoName: "BNB Smart Chain",
    logoPath: BNB,
  },
  {
    logoBG: "bg-[#78d64b]",
    logoColor: "text-white",
    logoName: "Aurora",
    logoPath: Aurora,
  },
];
