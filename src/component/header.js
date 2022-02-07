import React from 'react';
import styled from "styled-components";
import Poisk from './img/Vector.png'

const WrapperHeader =styled.div`
  width: 100%;
  height: 10vh;
  padding: 10px 0;
  margin-bottom: 20px;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      color: black;
    }
  }
`

export default function Header(){
  return(
    <WrapperHeader>
    <div className="container">
    <div className="top">
        <h1>Furniutr</h1>
        <img src={Poisk} alt="" />
      </div>
      <div className="tittle text-center">
        <p className=" pb-2">Barchasini ko’rish / qo’shish / o’zgartirish / o’chirish paneli</p>
      </div> 
    </div>
    </WrapperHeader>
  )
}