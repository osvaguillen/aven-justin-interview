import React from 'react';
import { useEffect, useState } from "react";

import Person from './person';

const PeopleCatalog = (props) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/people').then((response) => response.json()).then((json) => {
      setData(json);
    });
  }, []);

  return (
    <div>
      {data?.results.map((person) => (
        <Person person={person} onFilmClick={props.onFilmClick} />
      ))}
    </div>
  );
};

export default PeopleCatalog;
