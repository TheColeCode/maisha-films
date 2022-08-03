import Poster from 'next/image';

export const films = [
  {
    title: 'Finding Hope Home',
    category: 'Documentary',
    releaseDate: 'May 15, 2022',
    about: 'The story of a family who began rescuing children from the streets of Nairobi, Kenya in 1996.',
    watchNow: 'https://youtu.be/6W9SJD8F6Mw',
    embed: <iframe width="560" height="315" src="https://www.youtube.com/embed/6W9SJD8F6Mw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>,
    trailer: 'https://www.youtube.com/watch?v=0OcizQfU6Gk',
    poster: <Poster src='/Poster_small.jpg' alt="Finding Hope Home Poster" title="Finding Hope Home Poster" width="200px" height="300px" />,
    links:
      {
        imdb: 'https://www.imdb.com/title/tt18265508/',
        facebook: 'https://www.facebook.com/findinghopehome',
        youtube: 'https://www.youtube.com/channel/UCm3ZmUZsSB77gr8awf5BZFA',
        soundtrack: 'https://findinghopehome.hearnow.com/'
      }
  },
  {
    title: 'Echoes from the 19th Century',
    category: 'Documentary',
    releaseDate: 'TBD',
    about: 'An immersive documentary that brings some of the most important figures of the 19th Century to life.',
    watchNow: null,
    watchNow1: null,
    embed: null,
    trailer: 'https://youtu.be/2cbVuQycltw',
    poster: <Poster src='/2-3.jpg' alt="Echoes Poster" title="Echoes Poster" width="200px" height="300px" />,
    links:
      {
        imdb: null,
        facebook: 'https://www.facebook.com/Echoes19thCentury',
        youtube: 'https://www.youtube.com/channel/UCm3ZmUZsSB77gr8awf5BZFA',
        soundtrack: null
      }
  }
];
