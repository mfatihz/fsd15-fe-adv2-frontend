import CoverImage from "../atoms/cover-image";
import PosterTitle from "../atoms/poster-title";
import HeroMuteButton from "../atoms/hero-mute-button";
import HeroStartButton from "../atoms/hero-start-button";
import AddButton from "../atoms/add-button";
import CloseButton from "../atoms/close-button";
import HeroContainer from "../atoms/hero-container";

const PopupHero = ({ image, title, closeHandler, paddingClass, styleClass,
  checkId,
  idToggleHandler,
  movieId,
  movieTitle,
 }) => {
    const heightClass = 'h-[225px] sm:h-[300px] md:h-[354px]'
    
    return (
      <HeroContainer imageUrl={image} heightClass={heightClass} paddingClass={paddingClass} styleClass={styleClass}>
        <CloseButton onClick={ closeHandler }/>
          <div className="flex-1"></div>
        <div className='w-full self-end flex flex-col gap-2 md:gap-4'>
          <PosterTitle className="text-xl">{title }</PosterTitle>
          <div className="flex gap-4">
            <HeroStartButton />
            <AddButton
            checkId={checkId}
                  idToggleHandler={idToggleHandler}
                  movieId={movieId}
                  movieTitle={movieTitle}
             />
            <HeroMuteButton position='right'/>
          </div>
        </div>
      </HeroContainer>
      // </div>
    );
}

export default PopupHero;