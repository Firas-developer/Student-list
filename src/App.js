import StudentsList from "./StudentsList"
import FavoriteList from "./FavoriteList"
import NameContextProvider from "./NameContextProvider"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <div>
      <NameContextProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentsList/>}></Route>
          <Route path="/favorite" element={<FavoriteList />}></Route>
        </Routes>
        </BrowserRouter>
      </NameContextProvider>
    </div>
  )
}
export default App