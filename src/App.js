/** @jsx jsx */
import { jsx, css } from '@emotion/react';

// import Person from './components/person';
import { useState } from 'react';
import PeopleCatalog from './components/people-catalog';
import Film from './components/film';

function App() {
  const [currentFilmUrl, setCurrentFilmUrl] = useState(null);
  const [mode, setMode] = useState('catalog');

  return (
    <div css={css``}>
      {mode === 'catalog' && (
        <PeopleCatalog onFilmClick={(filmUrl) => {
          setMode('film');
          setCurrentFilmUrl(filmUrl);
        }} />
      )}
      {mode === 'film' && (
        <Film filmUrl={currentFilmUrl} />
      )}
    </div>
  );
}

export default App;
