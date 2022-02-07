import styled from "styled-components"
import Logo from './img/image.png'




const WrapperFooter = styled.div`
.container{
background-color: black;
display: flex;
justify-content: center;
align-items: center;
padding:  30px 0;
border-radius: 10px;
}
`

export default function Footer(){
return (
<WrapperFooter>
   <div className="container">
   <img src={Logo} alt="" />
   </div>
</WrapperFooter>
)
}