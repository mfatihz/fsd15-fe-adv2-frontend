import { useEffect } from "react";
import Hero from "./hero";
import PosterGalleries from "./poster-galleries";
import PopupDetailCard from "./popup-detail-card";
import { usePopupDetailStore } from "../../stores/use-popup-detail";
import useLocalStorage from '../../services/api/myList-service';

function MainContentTemplate({ hero, basePath, galleries }) {
    const { toggleId: idToggleHandler, checkId } = useLocalStorage(new Set());
    const { isOpen } = usePopupDetailStore();

    useEffect(() => {
        if (isOpen) {
            // Menambahkan style overflow='hidden' ke html dan body
            // untuk memastikan scrollbar hilang di semua browser
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflowY = "auto";
            document.body.style.overflowY = "auto";
        }

        return () => {
            document.documentElement.style.overflowY = "auto";
            document.body.style.overflowY = "auto";
        };
    }, [isOpen]);

    return (
        <main>
            {hero && (
                <Hero
                    movie={hero}
                    basePath={basePath}
                    paddingClass="
                            px-6 sm:px-10 md:px-20
                            py-4 sm:py-10 md:py-20
                        "
                />
            )}
            {isOpen && (
                <PopupDetailCard
                    heroPaddingClass="p-4 sm:p-8 md:p-16"
                    paddingClass="
                            px-6 sm:px-8 md:px-16
                            my-2 sm:my-8
                        "
                    idToggleHandler={idToggleHandler}
                    checkId={checkId}
                />
            )}

            <PosterGalleries
                galleries={galleries}
                paddingClass="
                        px-6 sm:px-10 md:px-20
                        py-4 sm:py-10 md:py-20
                    "
                idToggleHandler={idToggleHandler}
                checkId={checkId}
            />
        </main>
    );
}

export default MainContentTemplate;
