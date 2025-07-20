import { useState, useEffect } from 'react';
import { checkMovieId, getMyListIds, toggleMyListId } from '../services/api/myList-service';

export default function useLocalStoragex(initialValue = new Set()) {
  const key = "my-lists";
  const [userId] = useState('chill_user'); // TODO: ganti dengan actual ID
  const [storedIds, setStoredIds] = useState(new Set(initialValue));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMyListIds(userId);
        const newSet = new Set(response);
        setStoredIds(newSet);
        localStorage.setItem(key, JSON.stringify([...newSet]));
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
      // const response = await getMyListIds(userId);
      //   const newSet = new Set(response);
      //   console.log(newSet)
    }

    fetchData();
  }, [userId, key]);

  const toggleId = async (movieId) => {
    console.log(storedIds)
    try {
      const response = await toggleMyListId(userId, movieId);
      const newSet = new Set(response);
      setStoredIds(newSet);
      localStorage.setItem(key, JSON.stringify([...newSet]));
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
      return newSet.has(movieId);
    }
  };

  const checkId = async (movieId) => {
    console.log(storedIds)
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
    toggleId,
    checkId,
    isLoading
  };
}