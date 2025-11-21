import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { PortfolioData } from "../types/portfolioType";

export const getDataList = async (): Promise<PortfolioData[]> => {
  try {
    const getData = await getDocs(collection(db, "dataList"));

    return getData.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as PortfolioData)
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ensure the error propagates
  }
};
