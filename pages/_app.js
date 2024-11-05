import "@/styles/globals.css";
import "@/styles/custom.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Preloader } from ".";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initialLoadTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      clearTimeout(initialLoadTimeout);
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && <Preloader />}
      <Component {...pageProps} />
    </>
  );
}
