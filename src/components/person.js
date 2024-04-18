/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx, css } from '@emotion/react';

const Person = (props) => {
  const { person, onFilmClick } = props;

  const [films, setFilms] = useState(null);

  const styles = css`
    .films-container {
      display: flex;
      flex-direction: column;
    }
  `;

  useEffect(() => {
    const resultOfAll = Promise.all(person.films.map((filmUrl) => {
      return fetch(filmUrl).then((response) => response.json());
    }));

    resultOfAll.then((result) => {
      setFilms(result);
    });
  }, [person.films]);


  return (
    <div css={styles}>
      <div>{person.name}</div>
      <div className='films-container'>
        {films?.map((film) => {
          return (
            <button onClick={() => onFilmClick(film.url)}>
              {film.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Person;
