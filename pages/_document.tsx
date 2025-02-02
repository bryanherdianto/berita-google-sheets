import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Site Verification Meta Tag */}
        <meta
          name="google-site-verification"
          content="rk1ZYhF8hYK3BP_AkmIKH1o2fDnlfhjWqSvR7qfzpMg"
        />
        {/* Google AdSense - Add the async script tag */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
