import FHHPoster from 'next/image';

export const films = [
  {
    title: 'Finding Hope Home',
    releaseDate: 'TDB',
    about: 'The story of a family that began rescuing children from the streets of Nairobi, Kenya in 1996.',
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
