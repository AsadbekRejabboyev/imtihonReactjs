import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./footer"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const WrapperMenu = styled.div`
.container{
  .add{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    button{
   
      background-color: white;
      border: none;
      border: 2px solid black;
      border-radius: 6px;
      font-size: 30px;
      margin: 0;
      padding: 0;
      padding: 0 10px
    }
    h1{
      border: 2px solid black;
    border-radius: 20%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px
      cursor: pointer;
    }
  }
  .card{
  .img{
    position: relative;
    span{
      position: absolute;
      bottom: 0;
      left: 25%; 
      display: none;
      transition: .5s;
      button{
        border: none;
        border: 2px solid black;
        background-color: white;
        border-radius: 6px;
        margin: 0 10px;
        margin-bottom: 10px;
      }
    }
    img{
      width: 100%;
    height: 300px;
    &:hover{
      border: 1px solid black;
    }
  }
  &:hover span{
    display:  block;
  }
  }
}
}
`
export default function Menu(){

  const [data, setData] = useState([
    {
      id: 1,
      imgUrl: 'https://www.learningresources.co.uk/media/catalog/product/2/0/2095-bigtimeclock_sh-4.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=700&canvas=700:500',
      name: "Modern lamp study",
      conts: "$258",
    },
  ]);

  return(
        <WrapperMenu>
                    <div className="container">
                    <h1 className="text-center">Mahsulotlar</h1>
                    <div className="add"> <NavLink to={"/add"}>
                    <button >+</button>
                    </NavLink></div>
                    <div className="add"></div>
                    <div className="row">
                    {data.map(m=>
                    <div className="col-xl-3  col-md-6 col-lg-4 my-4">
                    <div className="card text-center">
                    <div className="img"><span><NavLink to={"/edit"}><button className="bg-secondary text-light" >Edit</button></NavLink>
                    <button className="bg-danger text-light">Delete</button>
                    </span><img src={m.imgUrl} alt="" /></div>
                    <p className="fs-3">{m.name}</p>
                   <p>{m.conts}</p>
                    </div>
                    </div>
                  )}
                   </div>
                   </div>
          <Footer></Footer>
        </WrapperMenu>
  )
}
