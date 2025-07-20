import MainContentTemplate from "../organisms/main-content-template";
import { useGetHeroQuery, useGetGalleriesQuery } from "../../services/api/api-slice";
import { useParams } from "react-router";

function Movies() {
  let params = useParams();
  const { data: hero } = useGetHeroQuery('movies');
  const { data: galleries } = useGetGalleriesQuery({ page: 'movies', genreId: params.genreId });

  return (
    <MainContentTemplate
      hero={hero}
      heroFilterBasePath={'/movies/genre/'}
      galleries={galleries}
    />
  )
}

export default Movies