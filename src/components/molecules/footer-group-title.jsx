import ToggleDropdownButton from "../atoms/toggle-dropdown-button";
import clsx from 'clsx'

const FooterGroupTitle = ({ title, isMobile, isOpen, onClick=()=>{} }) => {
  const cursorPointer = isMobile ? 'cursor-pointer' : '';

  return (
      <button
        type="button"
        onClick={onClick}
        className={clsx("flex justify-between items-center text-lg font-semibold focus:outline-none", cursorPointer)}
      >
        { title } { isMobile && <ToggleDropdownButton isOpen={isOpen} /> }
      </button>
  );
};

export default FooterGroupTitle;
