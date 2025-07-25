import { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import { useAuth } from '../../hooks/auth';

const API_URL = import.meta.env.VITE_API_URL;

export const getMyListIds = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/mylist/${userId}`);
    return response?.data?.ids;
  } catch (e) {
    console.error('Error getting MyList:', e);
    // throw e;
    return [];
  }
}

export const getMyListGalleries = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/mylist/${userId}/galleries`);
    return response?.data;
  } catch (e) {
    console.error('Error getting MyList:', e);
    // throw e;
    return [];
  }
}

export const toggleMyListId = async (userId, movieId) => {
  try {
    const response = await axios.put(`${API_URL}/mylist/${userId}/toggle`, { movieId });
    return response?.data?.ids;
  } catch (e) {
    console.error('Error add to MyList:', e);
    // throw e;
    return [];
  }
}

export const checkMovieId = async (userId, movieId) => {
  try {
    const response = await axios.get(`${API_URL}/mylist/${userId}/watchlist/${movieId}`);
    return response.data.has;
  } catch (e) {
    console.error('Error getting MyList:', e);
    // throw e;
    return false;
  }
}

export default function useLocalStorage() {
  useAuth
  const key = "my-lists";
  const {userId} = useAuth();
  const [storedIds, setStoredIds] = useState(new Set());
  const [galleries, setGalleries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchIds = useCallback(async () => {
    try {
      // ids
      const response = await getMyListIds(userId);
      const newSet = new Set(response);
      setStoredIds(newSet);
      localStorage.setItem(key, JSON.stringify([...newSet]));

      // galleries
      const galleriesResponse = await getMyListGalleries(userId);
      setGalleries(galleriesResponse);
    } catch (error) {
      console.error('Failed to fetch from API:', error);
      const item = localStorage.getItem(key);
      if (item) {
        setStoredIds(new Set(JSON.parse(item)));
      }
    } finally {
      setIsLoading(false);
    }
  }, [userId, key]);

  const toggleId = useCallback(async (movieId) => {
    try {
      const response = await toggleMyListId(userId, movieId);
      const newSet = new Set(response);
      setStoredIds(newSet);
      localStorage.setItem(key, JSON.stringify([...newSet]));
      return newSet.has(movieId);
    } catch (error) {
      console.error('API failed, using localStorage only:', error);
      const newSet = new Set(storedIds);
      newSet.has(movieId) ? newSet.delete(movieId) : newSet.add(movieId);
      setStoredIds(newSet);
      localStorage.setItem(key, JSON.stringify([...newSet]));
      return newSet.has(movieId);
    }
  }, [userId, key, storedIds]);

  const checkId = useCallback(async (movieId) => {
    if (!isLoading) {
      return storedIds.has(movieId);
    }
    try {
      return await checkMovieId(userId, movieId);
    } catch (error) {
      console.error('API failed, using localStorage only:', error);
      return storedIds.has(movieId);
    }
  }, [isLoading, userId, storedIds]);

  useEffect(() => {
    fetchIds();
  }, [fetchIds]);

  return {
    storedIds,
    galleries,
    toggleId,
    checkId,
    isLoading
  };
}