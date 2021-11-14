import { useEffect } from "react";
import { useRouter } from 'next/router';

export default function ScrollToTop() {
  const { asPath } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 400)
  }, [asPath]);


  return null;
}
