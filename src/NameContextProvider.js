import { createContext } from "react"
import { useState } from "react"
var NameArr = createContext()
function NameContextProvider(data){
    var [List,setList] = useState([{id:1,name:"Bharath"},{id:2,name:"Praveen"},{id:3,name:"Kumar"},{id:4,name:"Ramya"},{id:5,name:"Monica"}])
    var [favorite,setFavorite] = useState([])
    return(
        <NameArr.Provider value={{List,setList,favorite,setFavorite}}>
            {data.children}
        </NameArr.Provider>
    )
}
export default NameContextProvider
export {NameArr}