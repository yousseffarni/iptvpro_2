import React,{useState,createContext} from 'react';


const DataContext = createContext({});

export const DataProvider = ({ children }) =>{

    //System States: --------
    // Language :
    const [Lang, setLang] = useState("EN");
    // Currency :
    const [Currency, setCurrency] = useState("MAD");
    // Dark Mode :
    const [DarkMode, setDarkMode] = useState(false);
    const [StartingSoon, setStartingSoon] = useState(false);
    const [ChatBox, setChatBox] = useState(null);
    const [PageName, setPageName] = useState("");
    //--------------------------------

    //Store States: ------
    const [ChoppingCart, setChoppingCart] = useState([]);


    //------------------

    
    return (
        <DataContext.Provider value={{ 
            Lang , setLang,
            Currency , setCurrency,
            DarkMode , setDarkMode,
            ChoppingCart , setChoppingCart,
            StartingSoon , setStartingSoon,
            ChatBox , setChatBox,
            PageName , setPageName
        }}>
          {children}
        </DataContext.Provider>
    )
}  

export default DataContext;