import FHHPoster from 'next/image';

export const films = [
  {
    title: 'Finding Hope Home',
    category: 'Documentary',
    releaseDate: 'May 15, 2022',
    about: 'The story of a family who began rescuing children from the streets of Nairobi, Kenya in 1996.',
    watchNow: 'https://www.christianchannel.com/videos/knee93520c-finding-hope-home-main',
    trailer: 'https://www.youtube.com/watch?v=0OcizQfU6Gk',
    poster: <FHHPoster src='/Poster-IMDB.jpg' alt="Finding Hope Home Poster" title="Finding Hope Home Poster" width="200px" height="300px" />,
    links:
      {
        imdb: 'https://www.imdb.com/title/tt18265508/',
        facebook: 'https://www.facebook.com/findinghopehome',
        youtube: 'https://www.youtube.com/channel/UCm3ZmUZsSB77gr8awf5BZFA',
        soundtrack: 'https://findinghopehome.hearnow.com/'
      }
  }
];
