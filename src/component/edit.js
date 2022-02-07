import styled from "styled-components"
import {NavLink} from "react-router-dom"

const WrapperEdit = styled.div`
   .container{
    input{
      width: 48%;
      border: none;
      border: 2px solid black;
      border-radius: 8px;
      margin: 10px;
      padding: 10px;
    }
    .buttons{
      margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
     
        button{
          width: 200px;
          margin: 0 10px;
          border-radius: 6px;
          background-color: black;
          color: white;
          border: none;
          padding: 10px 0;
          transition: .5s;
          &:active{
            transform: scale(.98);
          }
        }
    }
   }
`

export default  function EditPages(){
  return (
<WrapperEdit>
    <div className="container">
      <h1 className=" text-center">O'zgartirish</h1>
    <div className="inputs">
    <input type="text"  placeholder="Maxsulot rasmi"/>
    <input type="text"  placeholder=" Maxsulot nomi"/>
    <input type="text"  placeholder="Maxsulot narxi"/>
    </div>
    <div className="buttons">
    <NavLink to="/"><button>Ortga qaytish</button></NavLink>
      <button>Saqlash</button>
    </div>
    </div>
</WrapperEdit>
  )
}