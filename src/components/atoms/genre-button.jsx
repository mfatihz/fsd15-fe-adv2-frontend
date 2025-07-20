import ChevronDownIcon from "./chevron-down-icon";

function GenreButton() {
  return (
    <div
      className={`
        flex items-center justify-center gap-2
        text-xs sm:text-sm md:text-base
        h-6 sm:h-8 w-fit
        px-2 sm:px-3 md:px-4
        rounded-md bg-[#181A1C] cursor-pointer
        transition-all duration-200
        hover:shadow-md focus:outline-none
      `}
    >
      Genre <ChevronDownIcon/>
    </div>
  );
}

export default GenreButton;