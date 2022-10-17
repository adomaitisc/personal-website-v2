import Head from "next/head";

export default function SEO() {
  const title = "Cauã Adomaitis | Web Developer";
  const description =
    "Front end developer, UI/UX designer, and a passionate about technology.";

  return (
    <Head>
      {/* General tags */}
      <title>{title}</title>
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        name="keywords"
        content="Website Developer Software Design Development Front End Back End Full Stack JavaScript React Next.js Node.js HTML CSS"
      />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={description} />

      {/* Twitter tags */}
      <meta name="twitter:domain" content="adomaitisc.com" />
      <meta name="twitter:url" content="https://adomaitisc.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://raw.githubusercontent.com/adomaitisc/personal-website-v2/main/public/social-1200x630.png"
      />

      {/* Facebook tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://adomaitisc.com" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/adomaitisc/personal-website-v2/main/public/social-1200x630.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://raw.githubusercontent.com/adomaitisc/personal-website-v2/main/public/social-1200x630.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Favicon tags */}

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
