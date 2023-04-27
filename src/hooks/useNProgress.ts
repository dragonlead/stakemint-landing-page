import { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

type ReturnType = [() => void, () => void];

export function useNProgress(): ReturnType {
  const router = useRouter();
  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  const handleStart = useCallback(() => {
    NProgress.start();
  }, []);

  const handleDone = useCallback(() => {
    NProgress.done();
  }, []);

  return [handleStart, handleDone];
}
