import "@/styles/globals.css";
import "nprogress/nprogress.css";
import type { AppProps } from "next/app";
import { useNProgress } from "@/hooks/useNProgress";

export default function App({ Component, pageProps }: AppProps) {
  useNProgress();

  return <Component {...pageProps} />;
}
