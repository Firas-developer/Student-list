import { useContext } from "react"
import { NameArr } from "./NameContextProvider"
import { Link } from "react-router-dom"
function StudentsList(){
    var {List,favorite,setFavorite} = useContext(NameArr)
    function addFavorite(favData,event){
        event.currentTarget.disabled = true;
        event.currentTarget.className = "bg-gray-400 text-white p-1 rounded-md";
        setFavorite([...favorite,{id:favData.id,name:favData.name}])
    }
    return(
        <div>
            <div className="bg-red-400 p-5 flex gap-20">
                <h1 className="underline text-white text-xl"> <Link>List of Students</Link> </h1>
                <h1 className="underline text-white text-xl"><Link to={"/favorite"}>Favourite Students</Link></h1>
            </div>
            <div>
                {
                    List.map(function(item,index){
                        return(
                            <div className="flex justify-between items-center">
                                <p className="text-xl m-5 my-9 font-medium">{index+1}.{item.name}</p>
                                <button onClick={(event)=>addFavorite(item,event)} className="bg-black text-white p-1 rounded-md" style={{marginRight:"75%"}}>Add to Favorites</button>
                            </div>
                        ) 
                    })
                }
            </div>
        </div>
    )
}
export default StudentsList