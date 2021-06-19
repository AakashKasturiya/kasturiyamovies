import './Header.css';
import Logo from './Logo.png';
const Header =()=>{

    return (
    <>
       <span onClick={()=>{window.scroll(0,0)}}
    className="header">

    <img src={Logo} alt="logo" 
     style={{width:"50px",
        padding:"5px"}}/> 
   <span className="logoText">
    Kasturiya's Movies App
    </span>
    </span>;

    </>
    );
 

};
export default Header;