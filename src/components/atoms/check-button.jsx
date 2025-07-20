import icon from "../../assets/images/icons/check-icon.svg";
import ToggleIdButton from "./toggle-id-button";

function CheckButton({
  checkId,
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

export default CheckButton;
