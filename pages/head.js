import React from "react";
import Head from "next/head";

export default function CustomHead(params) {
  return (
    <Head>
      <title>RainbowKit App</title>
      <meta
        name="description"
        content="Generated by @rainbow-me/create-rainbowkit"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}