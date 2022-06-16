import { firestore } from "../firebase/firebase";
import { getDoc,doc,setDoc,addDoc, collection, getDocs,deleteDoc } from "firebase/firestore";

export const addProduct = async (product) => {
  let  docRef = collection(firestore, "products");
  let resp = await addDoc(docRef, product);
  console.log("estamos dentro de agregar");
  return resp
}

export const getProducts = async () => {
  let  docRef = collection(firestore, "products");
  let queryProducts = await getDocs(docRef);
  let array = [];
  queryProducts.forEach((doc) => {
    array.push({... doc.data(), id: doc.id});
  });
  return array;
}

export const getProduct = async (id) => {
  const docRef = doc(firestore, "products",id);
  console.log("THIS IS JUST FOR THE ID",id);
  let product = await getDoc(docRef);
  let productData = {...product.data(), id: product.id};
  return productData;
}

export const deleteProduct = async(id) => {
  const docRef = doc(firestore, "products",id);
  await deleteDoc(docRef);
}

export const setProduct = async(id,product) => {
  const docRef = doc(firestore, "products",id);
  await setDoc(docRef, product);
}