// import { useEffect, useState } from "react"
// import { getHero } from "../../services/api/hero-service";
// import { getGalleries } from "../../services/api/gallery-service";
// import MainContentTemplate from "../organisms/main-content-template";

// function Movies() {
//   const [hero, setHero] = useState([]);
//   const [galleries, setGalleries] = useState()
  
//   useEffect(() => {
//     const fetchHero = async () => {
//       try {
//         const response = await getHero('movies');
//         setHero(response.data);
//       } catch (e) {
//         console.error('Error fetching hero: ', e)
//       }
//     };

//     const fetchGalleries = async () => {
//       try {
//         const response = await getGalleries('movies');
//         setGalleries(response.data);
//       } catch (e) {
//         console.error('Error fetching galleries: ', e)
//       }
//     };

//     fetchHero();
//     fetchGalleries();
//   }, []);

//   return (
//     <MainContentTemplate
//       hero={hero}
//       basePath={'/movies/genre/'}
//       galleries={galleries}
//     />
//   )
// }

// export default Movies

import MainContentTemplate from "../organisms/main-content-template";
import { useGetHeroQuery, useGetGalleriesQuery } from "../../services/api/api-slice";
import { useParams } from "react-router";

function Series() {
  let params = useParams();
  const { data: hero } = useGetHeroQuery('movies');
  const { data: galleries } = useGetGalleriesQuery({page:'movies', genreId: params.genreId});
  
  return (
    <MainContentTemplate
      hero={hero}
      basePath={'/movies/genre/'}
      galleries={galleries}
    />
  )
}

export default Series