import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from './firebase';

const db = getFirestore(app);

export const getAllBlogs = async () => {
  const blogsCollection = collection(db, 'blogs');
  const blogsSnapshot = await getDocs(blogsCollection);
  return blogsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
