import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { app } from '@/configs/firebase-config';
import { IArticle } from '@/types/article';
import { User } from '@/types/user';
import { Auth } from 'firebase/auth/cordova';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

export const auth: Auth = getAuth();

export const signUp = ({ email, password }: User) => createUserWithEmailAndPassword(auth, email, password);

export const logIn = ({ email, password }: User) => signInWithEmailAndPassword(auth, email, password);

export const logOut = () => signOut(auth);

// firestore

export const db = getFirestore(app);

export const docRef = async (collectionData: object) => await addDoc(collection(db, 'articles'), collectionData);

export const getArticleById = async (id: string) => {
  const docRefData = doc(db, 'articles', id);
  const docSnap = await getDoc(docRefData);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return false;
  }
};

export const getArticleByName = async ({ name, callback }: IArticle) => {
  const q = query(collection(db, 'articles'), where('title', '>=', name));

  const snapshot = await getDocs(q);

  const array: any[] = [];

  if (name != '') {
    snapshot.docs.map((doc) => array.push({ ...doc.data(), id: doc?.id }));

    callback(array);
  } else {
    callback([]);
  }
};

export const updateArticle = async (options: object, id: string) => {
  const updateDocRef = doc(db, 'articles', id);

  await updateDoc(updateDocRef, options);
};

export const getUserArticles = async (userId: string) => {
  const q = query(collection(db, 'articles'), where('userId', '==', userId));

  const querySnapshot = await getDocs(q);

  return querySnapshot;
};

export const subscribeToUserArticles = async ({ id, callback }: IArticle) => {
  const q = query(collection(db, 'articles'), where('userId', '==', id));

  const snapshot = await getDocs(q);

  const array: any[] = [];

  snapshot.docs.map((doc) => array.push({ ...doc.data(), id: doc.id }));

  callback(array);
};

export const deleteArticle = async (id: string) => {
  const deleteDocRef = doc(db, 'articles', id);

  await deleteDoc(deleteDocRef);
};

// storage functions

export const storage = getStorage(app);

export const uploadImageToStorage = async (image: File, callback: (url: string) => void) => {
  if (!image || image.size > 3000000 || (image.type !== 'image/jpeg' && image.type !== 'image/png')) {
    alert('Invalid file');

    return;
  }

  const storageRef = ref(storage, `/images/${image.name}`);
  const uploadTask = uploadBytesResumable(storageRef, image);

  try {
    await uploadTask;
    const url = await getDownloadURL(uploadTask.snapshot.ref);
    callback(url);
  } catch (error) {
    console.log(error);
  }
};
