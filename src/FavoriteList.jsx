import { useContext } from "react"
import { Link } from "react-router-dom"
import { NameArr } from "./NameContextProvider"
function FavoriteList(){
    var {favorite,setFavorite} = useContext(NameArr)
    function addRemove(removeid){
        var temp = favorite.filter(function(item){
            if(item.id === removeid){
                return false
            }
            else{
                return true
            }
        })
        setFavorite(temp)
    }
    return(
        <div>
            <div className="bg-red-400 p-5 flex gap-20">
                <h1 className="underline text-white text-xl"> <Link to={"/"}>List of Students</Link> </h1>
                <h1 className="underline text-white text-xl"><Link>Favourite Students</Link></h1>
            </div>
            <div>
            {
                    favorite.map(function(item,index){
                        return(
                            <div className="flex justify-between items-center">
                                <p className="text-xl m-5 my-9 font-medium">{index+1}.{item.name}</p>
                                <button onClick={()=>addRemove(item.id)} className="bg-red-600 text-white p-1 rounded-md" style={{marginRight:"75%"}}>Remove</button>
                            </div>
                        ) 
                    })
                }
            </div>
        </div>
    )
}
export default FavoriteList