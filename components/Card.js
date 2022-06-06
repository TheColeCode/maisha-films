import React, { useState } from 'react';
import ArrowIcon from '../components/ArrowIcon';

export default function Card({title, category, releaseDate, about, watchNow, watchNow1, embed, trailer, poster, links}) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
    window.scrollTo(0, 0);
  };

  const modal = () => {
    return (
      showModal ? 
      <div className="donate-modal">
        <h1>Thank you for watching!</h1>
        <p>Kindly donate to Children&rsquo;s Hope Home <a href="https://www.childrens-hope-home.org/hoffnungstraeger_donate.html" target="_blank" title="Donate to Children's Hope Home" rel="noreferrer" className="highlighted-link">HERE</a>.</p>
        <div className="video-container"><div className="video-in-modal">{embed}</div></div>
        <button className="close-button-modal" onClick={() => setShowModal(false)}>Close X</button>
      </div> : null
    )
  };

  return (
    <>
      <li
        className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0 p-4 m-2"
      >
        <div style={{'display': 'grid', 'gridTemplateColumns': '200px auto'}}>
          <div className="mr-4">
            <p>{poster}</p>
          </div>
          <div>
            <h3 className="uppercase mb-0 font-bold">{title}</h3>
            <p className="uppercase mb-0 font-bold opacity-60" style={{'fontSize': '10pt'}}>{category}</p>
            <p className="uppercase mb-2 font-bold opacity-60" style={{'fontSize': '10pt'}}>Release Date: {releaseDate}</p>
            <div className="flex mb-2">
              <a href={watchNow} title="Watch Now | Finding Hope Home" target="_blank" rel="noreferrer" className="font-bold" style={{'color': 'white', 'fontSize': '10pt'}}>Watch on Xumo</a>
              <ArrowIcon className="mt-0.5" />
            </div>
            <div className="flex mb-2">
              <a href={watchNow1} title="Watch Now | Finding Hope Home" target="_blank" rel="noreferrer" className="font-bold" style={{'color': 'white', 'fontSize': '10pt'}}>Watch on Christian Channel</a>
              <ArrowIcon className="mt-0.5" />
            </div>
            <div className="flex mb-2">
              <button onClick={handleShowModal} title="Watch Now | Finding Hope Home" target="_blank" rel="noreferrer" className="font-bold" style={{'color': 'white', 'fontSize': '10pt'}}>Watch &#38; Donate</button>
              <ArrowIcon className="mt-0.5" />
            </div>
            <div className="flex mb-6">
              <a href={trailer} title="Finding Hope Home Trailer" target="_blank" rel="noreferrer" className="font-bold" style={{'color': 'white', 'fontSize': '10pt'}}>Trailer</a>
              <ArrowIcon className="mt-0.5" />
            </div>
          </div>
        </div>
        <div className="mt-2 mb-2 pl-4 pr-4">
          <>{about}</>
        </div>
        <hr className="mt-4 mb-4" style={{'opacity': '0.3'}} />
        <ul style={{'display': 'flex', 'justifyContent': 'space-between', 'width': '100%', 'maxWidth': '400px', 'margin': '0 auto'}}>
          <li><a href={links.imdb} target="_blank" rel="noreferrer" className="" style={{'fontSize': '10pt', 'color': 'white'}}>IMdb</a></li>
          <li><a href={links.facebook} target="_blank" rel="noreferrer" style={{'fontSize': '10pt', 'color': 'white'}}>Facebook</a></li>
          <li><a href={links.youtube} target="_blank" rel="noreferrer" style={{'fontSize': '10pt', 'color': 'white'}}>Youtube</a></li>
          <li><a href={links.soundtrack} target="_blank" rel="noreferrer" style={{'fontSize': '10pt', 'color': 'white'}}>Soundtrack</a></li>
        </ul>
      </li>
    {modal()}
    </>
  );
}
  