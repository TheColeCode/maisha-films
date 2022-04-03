import ArrowIcon from '../components/ArrowIcon';

export default function Card({title, category, releaseDate, about, trailer, poster, links}) {
  return (
    <li
      className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0 p-4 m-2"
    >
      <div style={{'display': 'grid', 'grid-template-columns': '200px auto'}}>
        <div className="mr-4">
          <p>{poster}</p>
        </div>
        <div>
          <h3 className="uppercase mb-0 font-bold">{title}</h3>
          <p className="uppercase mb-0 font-bold opacity-60" style={{'font-size': '10pt'}}>{category}</p>
          <p className="uppercase mb-6 font-bold opacity-60" style={{'font-size': '10pt'}}>Release Date: {releaseDate}</p>
          <div className="flex mb-6">
            <a href={trailer} title="Finding Hope Home Trailer" target="_blank" rel="noreferrer" className="font-bold" style={{'color': 'white'}}>Trailer</a>
            <ArrowIcon className="mt-0.5" />
          </div>
          <div className="mt-2 mb-2">
            <>{about}</>
          </div>
        </div>
      </div>
      <ul style={{'display': 'flex', 'justify-content': 'space-between', 'width': '100%', 'max-width': '400px', 'margin': '0 auto'}}>
        <li><a href={links.imdb} target="_blank" rel="noreferrer" className="" style={{'font-size': '10pt', 'color': 'white'}}>IMdb</a></li>
        <li><a href={links.facebook} target="_blank" rel="noreferrer" style={{'font-size': '10pt', 'color': 'white'}}>Facebook</a></li>
        <li><a href={links.youtube} target="_blank" rel="noreferrer" style={{'font-size': '10pt', 'color': 'white'}}>Youtube</a></li>
        <li><a href={links.soundtrack} target="_blank" rel="noreferrer" style={{'font-size': '10pt', 'color': 'white'}}>Soundtrack</a></li>
      </ul>
    </li>
  );
}
  