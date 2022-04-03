import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import { films } from '../utils/films';

export default function Index({ globalData }) {

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-1xl lg:text-3xl font-bold m-2 mb-6">
          {globalData.blogTitle}
        </h1>

        <ul className="w-full">
          {films.map((film) => (
            <Card
              key={film.title}
              title={film.title}
              category={film.category}
              releaseDate={film.releaseDate}
              about={film.about}
              trailer={film.trailer}
              poster={film.poster}
              links={film.links}
            />
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
