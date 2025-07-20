// import { useState, useEffect } from 'react';
// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

// export const getMyListIds = async (userId) => {
//     try {
//         const response = await axios.get(`${API_URL}/mylist/${userId}`);
//         return response?.data?.ids;
//     } catch (e) {
//         console.error('Error getting MyList:', e);
//         throw e;
//     }
// }

// export const getMyListGalleries = async (userId) => {
//     try {
//         const response = await axios.get(`${API_URL}/mylist/${userId}/galleries`);
//         return response?.data;
//     } catch (e) {
//         console.error('Error getting MyList:', e);
//         throw e;
//     }
// }

// export const toggleMyListId = async (userId, movieId) => {
//     try {
//         const response = await axios.put(`${API_URL}/mylist/${userId}/toggle`, { movieId });
//         return response?.data?.ids;
//     } catch (e) {
//         console.error('Error add to MyList:', e);
//         throw e;
//     }
// }

// export const checkMovieId = async (userId, movieId) => {
//     try {
//         const response = await axios.get(`${API_URL}/mylist/${userId}/${movieId}`);
//         return response.data.has;
//     } catch (e) {
//         console.error('Error getting MyList:', e);
//         throw e;
//     }
// }

// export default function useLocalStorage(initialValue = new Set()) {
//   const key = "my-lists";
//   const [userId] = useState('chill_user'); // TODO: ganti dengan actual ID
//   const [storedIds, setStoredIds] = useState(new Set(initialValue));
//   const [galleries, setGalleries] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function fetchIds() {
//       try {
//         const response = await getMyListIds(userId);
//         const newSet = new Set(response);
//         setStoredIds(newSet);
//         localStorage.setItem(key, JSON.stringify([...newSet]));
//       } catch (error) {
//         console.error('Failed to fetch from API:', error);
//         try {
//           const item = localStorage.getItem(key);
//           if (item) {
//             setStoredIds(new Set(JSON.parse(item)));
//           }
//         } catch (localError) {
//           console.error('Failed to read from localStorage:', localError);
//         }
//       } finally {
//         setIsLoading(false);
//       }
//       // const response = await getMyListIds(userId);
//       //   const newSet = new Set(response);
//       //   console.log(newSet)
//     }

//     fetchIds();
    
//   }, [userId, key]);

//   const toggleId = async (movieId) => {
    
//     try {
//       const response = await toggleMyListId(userId, movieId);
//       const newSet = new Set(response);
//       setStoredIds(newSet);
//       localStorage.setItem(key, JSON.stringify([...newSet]));
//       return newSet.has(movieId);
//     } catch (error) {
//       console.error('API failed, using localStorage only:', error);
//       const newSet = new Set(storedIds);
//       if (newSet.has(movieId)) {
//         newSet.delete(movieId);
//       } else {
//         newSet.add(movieId);
//       }
//       setStoredIds(newSet);
//       localStorage.setItem(key, JSON.stringify([...newSet]));
//       return newSet.has(movieId);
//     }
//   };

//   const checkId = async (movieId) => {
//     console.log(storedIds)
//     if (!isLoading) {
//       return storedIds.has(movieId);
//     }
//     try {
//       return await checkMovieId(userId, movieId);
//     } catch (error) {
//       console.error('API failed, using localStorage only:', error);
//       return storedIds.has(movieId);
//     }
//   };

//   return {
//     storedIds,
//     galleries,
//     toggleId,
//     checkId,
//     isLoading
//   };
// }

import { useState, useEffect, useCallback } from 'react';
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getMyListIds = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/mylist/${userId}`);
        return response?.data?.ids;
    } catch (e) {
        console.error('Error getting MyList:', e);
        throw e;
    }
}

export const getMyListGalleries = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/mylist/${userId}/galleries`);
        return response?.data;
    } catch (e) {
        console.error('Error getting MyList:', e);
        throw e;
    }
}

export const toggleMyListId = async (userId, movieId) => {
    try {
        const response = await axios.put(`${API_URL}/mylist/${userId}/toggle`, { movieId });
        return response?.data?.ids;
    } catch (e) {
        console.error('Error add to MyList:', e);
        throw e;
    }
}

export const checkMovieId = async (userId, movieId) => {
    try {
        const response = await axios.get(`${API_URL}/mylist/${userId}/${movieId}`);
        return response.data.has;
    } catch (e) {
        console.error('Error getting MyList:', e);
        throw e;
    }
}

export default function useLocalStorage(initialValue = new Set()) {
  const key = "my-lists";
  const [userId] = useState('chill_user'); // TODO: ganti dengan actual ID
  const [storedIds, setStoredIds] = useState(new Set(initialValue));
  const [galleries, setGalleries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toggleCounter, setToggleCounter] = useState(false); // Tambahan state untuk trigger useEffect

  const fetchIds = useCallback(async () => {
    try {
      const response = await getMyListIds(userId);
      const newSet = new Set(response);
      setStoredIds(newSet);
      localStorage.setItem(key, JSON.stringify([...newSet]));
      
      // Fetch galleries when IDs change
      const galleriesResponse = await getMyListGalleries(userId);
      setGalleries(galleriesResponse);
    } catch (error) {
      console.error('Failed to fetch from API:', error);
      try {
        const item = localStorage.getItem(key);
        if (item) {
          setStoredIds(new Set(JSON.parse(item)));
        }
      } catch (localError) {
        console.error('Failed to read from localStorage:', localError);
      }
    } finally {
      setIsLoading(false);
    }
  }, [userId, key]);

  useEffect(() => {
    fetchIds();
  }, [userId, key, toggleCounter, fetchIds]);

  const toggleId = async (movieId) => {
    try {
      const response = await toggleMyListId(userId, movieId);
      const newSet = new Set(response);
      setStoredIds(newSet);
      localStorage.setItem(key, JSON.stringify([...newSet]));
      setToggleCounter(!toggleCounter); // Trigger useEffect
      return newSet.has(movieId);
    } catch (error) {
      console.error('API failed, using localStorage only:', error);
      const newSet = new Set(storedIds);
      if (newSet.has(movieId)) {
        newSet.delete(movieId);
      } else {
        newSet.add(movieId);
      }
      setStoredIds(newSet);
      localStorage.setItem(key, JSON.stringify([...newSet]));
      setToggleCounter(prev => prev + 1); // Trigger useEffect
      return newSet.has(movieId);
    }
  };

  const checkId = async (movieId) => {
    if (!isLoading) {
      return storedIds.has(movieId);
    }
    try {
      return await checkMovieId(userId, movieId);
    } catch (error) {
      console.error('API failed, using localStorage only:', error);
      return storedIds.has(movieId);
    }
  };

  return {
    storedIds,
    galleries,
    toggleId,
    checkId,
    isLoading
  };
}