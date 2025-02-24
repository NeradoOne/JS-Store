// const URL = 'https://run.mocky.io/v3/600ca878-d052-44b2-8242-2f6a3ad6317a'

import { initializeApp } from "firebase/app";
import { addDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore/lite";

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

export const getProducts = async (setProduct, setLoad) => {
  try {
    const itemsCol = collection(db, 'items');
    const itemsSnapshot = await getDocs(itemsCol);
    const itemList = itemsSnapshot.docs.map(doc => ({ 'id': doc.id, ...doc.data() }))
    setProduct(itemList)
  } catch(err) {
    console.error(err)
  }
  finally {
    setLoad(false)
  }
}

export const getProductsCategory = async (setCategories) => {
  try {
    const itemsCol = collection(db, 'items');
    const itemsSnapshot = await getDocs(itemsCol);
    const itemList = itemsSnapshot.docs.map(doc => (doc.data().category))
    setCategories(itemList)
  } catch(err) {
    console.error(err)
  }
}

export const getProductByCategory = async (setProduct, setLoad, category) => {
  try {
    const itemsQuery = query(collection(db, "items"), where("category", "==", category));
    const itemsSnapshot = await getDocs(itemsQuery);
    const itemList = itemsSnapshot.docs.map(doc => ({ 'id':doc.id, ...doc.data() }))
    setProduct(itemList)
  } catch(err) {
    console.error("No such document.", err)
  }
  finally {
    setLoad(false)
  }
}

export const getProductById = async (setProduct, setLoad, id) => {
  try {
    const docRef = doc(db, 'items', id)
    const docSnap = await getDoc(docRef)
    setProduct({'id':id, ...docSnap.data()})
  } catch(err) {
    console.error("No such document.", err)
  } finally {
    setLoad(false)
  }
}

export const addItems = async () => {
  const d = JSON.parse(JSON.stringify({name:"Tokyo",country:"Japan"}))
  // addDoc(collection(db, "items"),JSON.parse(JSON.stringify(d)))
  const docRef= doc(db, "items", "test")
  const payload = {
    brand: "asus",
    category: "graphics card",
    detail:"Delivering the latest AMD RDNA™ 2 architecture experience in its purest form, the ASUS Dual Radeon™ RX 6650 XT melds performance and simplicity like no other. Leveraging advanced cooling technologies derived from flagship graphics cards, the Dual opts for substance over style, the perfect choice for a well-balanced build. Buckle up and engage cutting-edge gaming prowess.",
    image:"https://dlcdnwebimgs.asus.com/gain/2a65f82f-4ca0-481d-a209-bb78760cc9c4/w800/fwebp",
    price: 80160,
    published: serverTimestamp(),
    stock: 10,
    title: "ASUS Dual Radeon™ RX 6650 XT OC Edition 8GB GDDR6",
}
  await addDoc(collection(db, 'items'), d)
}

let data = [
  {
    brand: "asus",
    category: "graphics card",
    detail:"Delivering the latest AMD RDNA™ 2 architecture experience in its purest form, the ASUS Dual Radeon™ RX 6650 XT melds performance and simplicity like no other. Leveraging advanced cooling technologies derived from flagship graphics cards, the Dual opts for substance over style, the perfect choice for a well-balanced build. Buckle up and engage cutting-edge gaming prowess.",
    image:"https://dlcdnwebimgs.asus.com/gain/2a65f82f-4ca0-481d-a209-bb78760cc9c4/w800/fwebp",
    price: 80160,
    published: serverTimestamp(),
    stock: 10,
    title: "ASUS Dual Radeon™ RX 6650 XT OC Edition 8GB GDDR6",
},
{
    brand: "msi",
    category: "graphics card",
    detail:"MSI Gaming GeForce RTX 3060 12GB 15 Gbps GDRR6 192-Bit HDMI/DP PCIe 4 Torx Triple Fan Ampere OC Graphics Card (RTX 3060 Ventus 3X 12G OC)",
    image:"https://asset.msi.com/resize/image/global/product/product_1610444356cd57d92b6aec488c9abcb8566aaef5df.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    price: 82998.96,
    published: serverTimestamp(),
    stock: 8,
    title: "MSI VENTUS 3X RTX™ 3060 12G OC",
},
{
    brand: "corsair",
    category: "ram",
    detail:"CORSAIR VENGEANCE RGB RS. Compact DDR4 memory optimized for Intel® and AMD™ motherboards, with six individually addressable RGB LEDs.",
    image:"https://www.corsair.com/medias/sys_master/images/images/h54/hf6/9838217855006/CMG16GX4M1E3200C16/Gallery/VENGEANCE_RGB_RS_01/-CMG16GX4M1E3200C16-Gallery-VENGEANCE-RGB-RS-01.png_1200Wx1200H",
    price: 14990.99,
    published: serverTimestamp(),
    stock: 12,
    title: "Corsair VENGEANCE® 16GB 3600MHz DDR4 RGB Memory C16",
},
{
    brand: "gigabyte",
    category: "ram",
    detail:"The all new AORUS RGB Memory kit is engineered to be the best and to deliver absolute performance. The stylish, luxurious design and the glossy finish make it stand out against the competition. The diffused RGB LEDs paired with aluminum heatsinks provide both effective heat dissipation and impressive style at the same time. If you want a memory kit that will take your PC to the next level the AORUS RGB Memory kit is what will make your system shine!",
    image:"https://static.gigabyte.com/StaticFile/Image/Global/b34daa6c69902ba8222c6b9fbe9aa241/Product/25250/png/500",
    price: 23999,
    published: serverTimestamp(),
    stock: 8,
    title: "AORUS RGB Memory DDR4 16GB (2x8GB) 4400MHz",
},
]