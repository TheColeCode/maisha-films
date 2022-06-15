import Poster from 'next/image';

export const films = [
  {
    title: 'Finding Hope Home',
    category: 'Documentary',
    releaseDate: 'May 15, 2022',
    about: 'The story of a family who began rescuing children from the streets of Nairobi, Kenya in 1996.',
    watchNow: 'https://www.xumo.tv/channel/99991731/free-documentaries?v=XM0EVY9FIA2HF5&p=74071',
    watchNow1: 'https://www.christianchannel.com/videos/knee93520c-finding-hope-home-main',
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
    about: 'Stories told by some of the most important figures of the 19th century.',
    watchNow: null,
    watchNow1: null,
    embed: null,
    trailer: null,
    poster: <Poster src='/Echoes_Poster_extra_small.jpg' alt="Echoes Poster" title="Echoes Poster" width="200px" height="300px" />,
    links:
      {
        imdb: null,
        facebook: 'https://www.facebook.com/Echoes19thCentury',
        youtube: 'https://www.youtube.com/channel/UCm3ZmUZsSB77gr8awf5BZFA',
        soundtrack: null
      }
  }
];
