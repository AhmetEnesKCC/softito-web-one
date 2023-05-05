import { FC, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "./Loading";

import { Router } from "next/router";
import Date from "./Date";

const Layout: FC<React.PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router?.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    Router?.events.on("routeChangeComplete", () => {
      setLoading(false);
    });

    Router?.events.on("routeChangeError", () => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container mx-auto">
        <Header />
        {children}
        <Date />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
