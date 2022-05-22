import Head from 'next/head';

export default function SEO({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Maisha Films is a documentary film production company based in California's Bay Area. In association with Maisha Photography." />
      <meta property="og:title" content={title} />
    </Head>
  );
}
