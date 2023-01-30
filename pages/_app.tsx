import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(App);
