import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react"

const WrapperAdd= styled.div`
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
export default  function AddPages(){
    const [data, setData] = useState([
      {
        imgUrl: 'https://www.learningresources.co.uk/media/catalog/product/2/0/2095-bigtimeclock_sh-4.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=700&canvas=700:500',
        name: "Modern lamp study",
        conts: "$258",
      },
    ]);
  const [img , setImg] = useState("");
  const [name, setName] = useState("");
  const [conts, setConts] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const newObj = {
      imgUrl : img,
      name: name,
      conts: conts,
    }
    setData(data.push(newObj))
  };

  return (
<WrapperAdd>
    <div className="container">
      <div className="title text-center"><h1>Qo'shish</h1></div>
    <div className="inputs">
   <form onSubmit={submit}>
   <input type="text" name="rasm" placeholder="Maxsulot rasmi"  onChange={(e) => setImg(e.target.value)} />
    <input type="text" name="nomi"  placeholder=" Maxsulot nomi" onChange={(e) => setName(e.target.value)}/>
    <input type="text" name="narxi"  placeholder="Maxsulot narxi"  onChange={(e) => setConts(e.target.value)}/>
   </form>
    </div>
    <div className="buttons">
      <NavLink to="/"><button>Ortga qaytish</button></NavLink>
      <button type={submit}>Saqlash</button>
    </div>
    </div>
</WrapperAdd>
  )
}