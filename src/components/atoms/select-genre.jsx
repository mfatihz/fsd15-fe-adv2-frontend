import { useState } from 'react';
import GenreButton from './genre-button';
import GenreDropdown from './genre-dropdown';
import { genreData } from "../../utils/ui/home-ui-elements";
import clsx from 'clsx';
import FooterLinks from '../molecules/footer-links';

function SelectGenre({basePath}) {
  const [isHovered, setIsHovered] = useState(false);
  const genreBaseStyle = `columns-2 mx-4 sm:mx-1 md:mx-0`;
  const contentGap = 'gap-4';
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='absolute w-fit z-10'
    >
      <GenreButton />

      {isHovered && <GenreDropdown>
        <FooterLinks
          links={genreData.links}
          basePath={basePath}
          styleClass={clsx(genreBaseStyle, contentGap)}
        />
      </GenreDropdown>}
    </div>
  );
}

export default SelectGenre;