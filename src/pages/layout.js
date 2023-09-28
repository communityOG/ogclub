import React from "react";
import Head from "next/head";
import Script from "next/script";

export default function layout({ children }) {
  return (
    <div className="text-white">      
      <Head>
        <title>OGClub DAO</title>
      </Head>
      <main>{children}</main>
    </div>
  );
}
