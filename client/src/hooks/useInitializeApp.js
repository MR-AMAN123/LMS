import { useEffect } from 'react';
import { useLoadUserQuery } from '@/features/api/authApi';

// This hook initializes the app by loading user data in the background
// It doesn't block rendering, just loads user data when the app starts
export const useInitializeApp = () => {
  const { data, isLoading, isError } = useLoadUserQuery();

  useEffect(() => {
    // User data is automatically dispatched to Redux via the authApi
    // This hook just ensures the query is triggered on app load
  }, []);

  return { isLoading, isError, data };
};
