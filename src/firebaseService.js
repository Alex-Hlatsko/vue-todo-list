import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { app } from './firebase';

const db = getFirestore(app);

export const getAllBlogs = async () => {
  const blogsCollection = collection(db, 'blogs');
  const blogsSnapshot = await getDocs(blogsCollection);
  return blogsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addBlog = async (title, desc) => {
  console.log('Adding blog:', title, desc);
  const blogsCollection = collection(db, 'blogs');
  const newBlogRef = await addDoc(blogsCollection, { title, desc });
  return newBlogRef.id;
};

