import { StaticImageData } from "next/image";

import BTC from "../../assets/networks/btc.svg";
import ETH from "../../assets/networks/eth.svg";
import CHSB from "../../assets/networks/CHSB_token.svg";
import USDC from "../../assets/networks/USDC.svg";
import BNB_NET from "../../assets/networks/bnb.svg";
import XRP from "../../assets/networks/xrp.svg";
import USDT from "../../assets/networks/usdt.svg";
import MATIC from "../../assets/networks/MATIC.svg";
import DAI from "../../assets/networks/DAI.svg";
import GHST from "../../assets/networks/GHST.svg";
import AVAX from "../../assets/networks/avax.svg";
import CRV from "../../assets/networks/CRV.svg";
import DOT from "../../assets/networks/dot.svg";
import AAVE from "../../assets/networks/Aave.svg";
import CAKE from "../../assets/networks/cake.svg";
import SUSHI from "../../assets/networks/sushi.svg";
import MC_NET from "../../assets/networks/mc.svg";
import BUSD from "../../assets/networks/busd.svg";
import SOL from "../../assets/networks/sol.svg";
import SAND from "../../assets/networks/SAND.svg";
import ATOM from "../../assets/networks/atom.svg";
import ADA from "../../assets/networks/ada.svg";
import GRT from "../../assets/networks/GRT.svg";
import APE from "../../assets/networks/ape.svg";

interface Network {
  netLogo: StaticImageData;
  netName: string;
  netProgram: string;
  standard: number;
  explorer: number;
  community: number;
  pioneer: number;
  generation: number;
  genesis: number;
}

export const networks: Network[] = [
  {
    netLogo: BTC,
    netName: "BTC",
    netProgram: "",
    standard: 0.05,
    explorer: 0.06,
    community: 0.08,
    pioneer: 0.09,
    generation: 0.1,
    genesis: 0.1,
  },
  {
    netLogo: ETH,
    netName: "ETH",
    netProgram: "",
    standard: 2.25,
    explorer: 2.81,
    community: 3.38,
    pioneer: 3.94,
    generation: 4.5,
    genesis: 4.5,
  },
  {
    netLogo: CHSB,
    netName: "CHSB",
    netProgram: "",
    standard: 8.85,
    explorer: 11.06,
    community: 13.27,
    pioneer: 15.49,
    generation: 17.7,
    genesis: 17.7,
  },
  {
    netLogo: USDC,
    netName: "USDC",
    netProgram: "SMART YIELD",
    standard: 0.97,
    explorer: 1.21,
    community: 1.46,
    pioneer: 1.7,
    generation: 1.94,
    genesis: 1.94,
  },
  {
    netLogo: USDC,
    netName: "USDC",
    netProgram: "STARGATE",
    standard: 1.99,
    explorer: 2.97,
    community: 3.57,
    pioneer: 4.17,
    generation: 4.76,
    genesis: 4.76,
  },
  {
    netLogo: BNB_NET,
    netName: "BNB",
    netProgram: "",
    standard: 2.05,
    explorer: 2.56,
    community: 3.07,
    pioneer: 3.59,
    generation: 4.1,
    genesis: 4.1,
  },
  {
    netLogo: XRP,
    netName: "XRP",
    netProgram: "",
    standard: 0.05,
    explorer: 0.06,
    community: 0.08,
    pioneer: 0.09,
    generation: 0.1,
    genesis: 0.1,
  },
  {
    netLogo: USDT,
    netName: "USDT",
    netProgram: "SMART YIELD",
    standard: 1.5,
    explorer: 1.88,
    community: 2.25,
    pioneer: 2.63,
    generation: 3,
    genesis: 3,
  },
  {
    netLogo: USDT,
    netName: "USDT",
    netProgram: "STARGATE",
    standard: 2.2,
    explorer: 2.75,
    community: 3.3,
    pioneer: 3.85,
    generation: 4.4,
    genesis: 4.4,
  },
  {
    netLogo: MATIC,
    netName: "MATIC",
    netProgram: "",
    standard: 2,
    explorer: 2.5,
    community: 3,
    pioneer: 3.5,
    generation: 4,
    genesis: 4,
  },
  {
    netLogo: DAI,
    netName: "DAI",
    netProgram: "",
    standard: 2,
    explorer: 2.5,
    community: 3,
    pioneer: 3.5,
    generation: 4,
    genesis: 4,
  },
  {
    netLogo: GHST,
    netName: "GHST",
    netProgram: "",
    standard: 2.25,
    explorer: 2.81,
    community: 3.38,
    pioneer: 3.94,
    generation: 4.5,
    genesis: 4.5,
  },
  {
    netLogo: AVAX,
    netName: "AVAX",
    netProgram: "",
    standard: 1.75,
    explorer: 2.19,
    community: 2.63,
    pioneer: 3.06,
    generation: 3.5,
    genesis: 3.5,
  },
  {
    netLogo: CRV,
    netName: "CRV",
    netProgram: "",
    standard: 0.78,
    explorer: 0.98,
    community: 1.17,
    pioneer: 1.36,
    generation: 1.56,
    genesis: 1.56,
  },
  {
    netLogo: DOT,
    netName: "DOT",
    netProgram: "",
    standard: 3,
    explorer: 3.75,
    community: 4.5,
    pioneer: 5.25,
    generation: 6,
    genesis: 6,
  },
  {
    netLogo: AAVE,
    netName: "AAVE",
    netProgram: "",
    standard: 2.5,
    explorer: 3.13,
    community: 3.75,
    pioneer: 4.38,
    generation: 5,
    genesis: 5,
  },
  {
    netLogo: CAKE,
    netName: "CAKE",
    netProgram: "",
    standard: 6,
    explorer: 7.5,
    community: 9,
    pioneer: 10.5,
    generation: 12,
    genesis: 12,
  },
  {
    netLogo: SUSHI,
    netName: "SUSHI",
    netProgram: "",
    standard: 1,
    explorer: 1.25,
    community: 1.5,
    pioneer: 1.75,
    generation: 2,
    genesis: 2,
  },
  {
    netLogo: MC_NET,
    netName: "MC",
    netProgram: "",
    standard: 2.5,
    explorer: 3.13,
    community: 3.75,
    pioneer: 4.38,
    generation: 5,
    genesis: 5,
  },
  {
    netLogo: BUSD,
    netName: "BUSD",
    netProgram: "SMART YIELD",
    standard: 2.25,
    explorer: 2.81,
    community: 3.38,
    pioneer: 3.94,
    generation: 4.5,
    genesis: 4.5,
  },
  {
    netLogo: BUSD,
    netName: "BUSD",
    netProgram: "STARGATE",
    standard: 1.55,
    explorer: 1.94,
    community: 2.33,
    pioneer: 2.71,
    generation: 3.1,
    genesis: 3.1,
  },
  {
    netLogo: SOL,
    netName: "SOL",
    netProgram: "",
    standard: 4.22,
    explorer: 5.27,
    community: 6.33,
    pioneer: 7.38,
    generation: 8.44,
    genesis: 8.44,
  },
  {
    netLogo: SAND,
    netName: "SAND",
    netProgram: "",
    standard: 1.98,
    explorer: 2.48,
    community: 2.97,
    pioneer: 3.46,
    generation: 3.96,
    genesis: 3.96,
  },
  {
    netLogo: ATOM,
    netName: "ATOM",
    netProgram: "",
    standard: 25.61,
    explorer: 32.01,
    community: 38.41,
    pioneer: 44.82,
    generation: 51.22,
    genesis: 51.22,
  },
  {
    netLogo: ADA,
    netName: "ADA",
    netProgram: "",
    standard: 3.31,
    explorer: 4.14,
    community: 4.96,
    pioneer: 5.79,
    generation: 6.62,
    genesis: 6.62,
  },
  {
    netLogo: GRT,
    netName: "GRT",
    netProgram: "",
    standard: 1.28,
    explorer: 1.6,
    community: 1.92,
    pioneer: 2.24,
    generation: 2.56,
    genesis: 2.56,
  },
  {
    netLogo: APE,
    netName: "APE",
    netProgram: "",
    standard: 23.39,
    explorer: 29.24,
    community: 35.09,
    pioneer: 40.93,
    generation: 46.78,
    genesis: 46.78,
  },
];
