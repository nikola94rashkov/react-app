import { auth } from '@/services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const subscribeToUserData = onAuthStateChanged(auth, (u) => setUser(u));

    return subscribeToUserData;
  }, [user]);
};
