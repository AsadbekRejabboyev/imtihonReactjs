import React from "react";
import Header from "./component/header";
import  Menu from "./component/menu";
import AddPages from "./component/add";
import EditPages from "./component/edit";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (
   <>
   <Header/> 
      <Routes>
          <Route path={"/"}  element={<Menu/>}/>
          <Route path={"/add"}  element={<AddPages/>}/>
          <Route path={"/edit"} element={<EditPages/>}/>
      </Routes>
   </>
  );
}

export default App;
