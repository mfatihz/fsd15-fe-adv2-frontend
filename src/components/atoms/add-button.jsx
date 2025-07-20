import icon from '../../assets/images/icons/add-icon.svg'
import ToggleIdButton from './toggle-id-button';

function AddButton({
  checkId = () => Promise.resolve(false),
  idToggleHandler,
  movieId,
  movieTitle,
}) {
  return (
    <ToggleIdButton
      checkId={checkId}
      idToggleHandler={idToggleHandler}
      movieId={movieId}
      movieTitle={movieTitle}
      icon={icon}
    />

  );
}

export default AddButton;