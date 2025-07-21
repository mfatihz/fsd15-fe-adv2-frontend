import { useEffect, useRef } from "react";
import { Toaster } from "sonner";
import { usePopupDetailStore } from "../../stores/use-popup-detail";
import Header from "../organisms/home-header";
import Footer from "../organisms/home-footer";
import { Outlet } from "react-router";
import {
    navData,
    useMenuData,
    genreData,
    helpData,
} from "../../utils/ui/home-ui-elements";

function PageTemplate() {
    const topRef = useRef(null);

    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const { isOpen } = usePopupDetailStore();
    const menuData = useMenuData();

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
        <div className="min-h-screen w-dvw flex flex-col mx-auto">
            <Toaster position="bottom-center" />

            <Header
                navData={navData}
                menuData={menuData}
                paddingClass="
                    px-6 sm:px-10 md:px-20
                    py-3 sm:py-4 md:py-6
                "
                ref={topRef}
            />

            <Outlet />

            <Footer
                genreData={genreData}
                helpData={helpData}
                paddingClass="
                    px-6 sm:px-10 md:px-20
                    py-10 md:py-20
                "
                componentGapClass="gap-4 sm:gap-8 md:gap-12"
                contentGap="gap-2 sm:gap-4 md:gap-6"
                onClick={scrollToTop}
            />
        </div>
    );
}

export default PageTemplate;
