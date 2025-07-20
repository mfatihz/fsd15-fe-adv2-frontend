import { useEffect, useState } from 'react';
//import useLocalStorage from "../../hooks/use-local-storage";
import useLocalStorage , { getMyListGalleries } from '../../services/api/myList-service';
import MainContentTemplate from '../organisms/main-content-template';

function MyList() {
  const [userId] = useState('chill_user')
  const { storedIds, galleries, isLoading } = useLocalStorage(new Set());
  // const [ galleries, setGalleries ] = useState([]);
  // const { storedIds } = useLocalStorage(new Set());

  // useEffect(() => {
  //   const fetchGalleries = async () => {
  //     try {
  //       const galleriesData = await getMyListGalleries(userId);
  //       setGalleries(galleriesData);
  //     } catch (error) {
  //       console.error('Failed to fetch galleries:', error);
  //     }
  //   };

  //   fetchGalleries();
  // }, [userId, storedIds ]);
  
  return (
    <MainContentTemplate
      galleries={galleries}
    />
  );
}

export default MyList;