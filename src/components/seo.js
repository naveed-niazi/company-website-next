import Head from "next/head";

const title = "Naremis - Web Design and Development";
const description =
  "Custom Website Development and Design Agency based in Pakistan.  We build scalable web app solutions that are quick to deploy and easy to maintain.";
const author = "Naremis";
const metaData = [
  {
    name: `description`,
    content: description,
  },
  {
    property: `og:title`,
    content: title,
  },
  {
    property: `og:description`,
    content: description,
  },
  {
    property: `og:type`,
    content: `website`,
  },
  {
    name: `twitter:card`,
    content: `summary`,
  },
  {
    name: `twitter:creator`,
    content: author,
  },
  {
    name: `twitter:title`,
    content: title,
  },
  {
    name: `twitter:description`,
    content: description,
  },
];

export default function SEO() {
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}
