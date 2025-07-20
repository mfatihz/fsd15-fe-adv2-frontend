function GenreDropdown({ children }) {
  return (
    <div
      className={`
        flex items-center justify-center gap-2 columns-2
        text-xs sm:text-sm md:text-base
        w-fit
        p-4
        rounded-md bg-[#181A1C] cursor-pointer
        transition-all duration-200
        hover:shadow-md focus:outline-none
      `}
    >
      {children}
    </div>
  );
}

export default GenreDropdown;