// const URL = 'https://run.mocky.io/v3/600ca878-d052-44b2-8242-2f6a3ad6317a'

import { initializeApp } from "firebase/app";
import { collection, getDocs, doc, getDoc, getDocFromCache , getFirestore } from "firebase/firestore/lite";


// export const getProducts = (setProduct, setLoad, category=0, productId=0) => {
//     fetch(URL)
//       .then(res => res.json()) 
//       .then(data => 
          
//           //En caso de existir una categoria, filtra en la base de datos y los retorna
//             category ? setProduct(data.filter(x => x.type === category)) :
//           //En caso de existir una id, lo ubica en la base de datos y los retorna
//             productId ? setProduct(data.find(x => x.productId === parseInt(productId))) :
//           //En caso de que no se cumplan ninguna de los casos devuelve todos los productos
//             setProduct(data)
//         )
//       .finally(() => setLoad(false))
// }


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProducts = async ( setProduct, setLoad, category=false, productId=false ) => {

    const itemsCol = collection(db, 'items');
    const itemsSnapshot = await getDocs(itemsCol);

    const itemList = itemsSnapshot.docs.map(doc => ({'id': doc.id, ... doc.data()}))
    // console.log(itemList,'item')
    try {
        category ? setProduct(itemList.filter(x => x.category === category)) :
        productId ? setProduct(itemList.find(x => x.id ===productId)) :
        setProduct(itemList)
    }
    catch(err) {
      console.error(err)
    }
    finally{
      setLoad(false)
    }
}

export const getProductById = async (setProduct, setLoad, id) => {
  const docRef = doc(db, 'items', id)
  const docSnap = await getDoc(docRef)
  try {
    docSnap.exists() ? setProduct(docSnap.data()) :
    console.log('error on try')
  }
  catch(err) {
    console.error("No such document.", err)
  }
  finally{
    setLoad(false)
  }
}