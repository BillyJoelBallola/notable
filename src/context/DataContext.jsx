import { createContext, useEffect, useState } from "react";

export const DataContext = createContext([]);

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [action, setAction] = useState("");
  const [sampleData, setSampleData] = useState([
    {
      "id": "ASBFGJ1234BSADnk",
      "note": "Sample Note",
      "date": "06-01-2002",
      "status": "pending"
    },
  ]);

  useEffect(() => {
    if(!data || action === ''){
      const dataDb = window.localStorage.getItem("data");
      if(dataDb){
        setData(JSON.parse(dataDb));
      }else{
        window.localStorage.setItem("data", JSON.stringify(sampleData));
      }
      setAction("");
    }
  }, [action])

  return (
    <DataContext.Provider value={{ data, setData, setAction }}>
      {children}
    </DataContext.Provider>
  )
}