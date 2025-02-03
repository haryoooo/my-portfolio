import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

// Define a type for the expected data structure
interface DataItem {
  id: string;
  name: string;
  value: []; // Adjust the type based on your actual data
}

export const getDataList = async (): Promise<DataItem[]> => {
  try {
    const getData = await getDocs(collection(db, "dataList"));
    
    return getData.docs.map((doc) => ({ id: doc.id, ...doc.data() } as DataItem));
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ensure the error propagates
  }
};
