import React, { useEffect, useState } from 'react';

const Film = (props) => {
  const { filmUrl, onPersonClick } = props;

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(filmUrl).then((response) => response.json()).then((json) => {
      setData(json);
    });
  }, []);

  return (
    <div>
      <div>{data?.title}</div>
      {data?.characters.map((personUrl) => (
        <button onClick={() => onPersonClick(personUrl)}>
          {personUrl}
        </button>
      ))}
    </div>
  );
};

export default Film;
