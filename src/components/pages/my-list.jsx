import useLocalStorage from '../../services/api/myList-service';
import MainContentTemplate from '../organisms/main-content-template';

function MyList() {
  const { galleries } = useLocalStorage(new Set());
  
  return (
    <MainContentTemplate
      galleries={galleries}
    />
  );
}

export default MyList;