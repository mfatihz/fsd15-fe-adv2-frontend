import MainContentTemplate from "../organisms/main-content-template";
import { useGetHeroQuery, useGetGalleriesQuery } from "../../services/api/api-slice";
import { useParams } from "react-router";

function Series() {
  let params = useParams();//TODO: ganti ke useSearchParams
  const { data: hero } = useGetHeroQuery('series');
  const { data: galleries } = useGetGalleriesQuery({page:'series', genreId: params.genreId});
  return (
    <MainContentTemplate
      hero={hero}
      basePath={'/series/genre/'}//TODO: ganti ke url param
      galleries={galleries}
    />
  )
}

export default Series