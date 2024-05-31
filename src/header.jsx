import React from 'react';
import ReactDOM from 'react-dom';


const date=new Date();
const currentYear = date.getFullYear()
let userName = prompt('Enter Name')
let birthYear = prompt('Enter your birth year')
let msg;

if(Number(birthYear) < currentYear-16){
    msg='Congrats ' + userName+'!' +' You can apply for a driver\'s license!'
  }
  else{
    msg='Sorry! You can not apply!'
  }

const root = ReactDOM.createRoot(document.getElementById('root'));

const textColor={
    color:"red",
    backgroundColor: "lightgreen",
    fontSize: 30,
    borderTop: "5px solid #1770dc"
  }


function Header(){
    return <div>
    {/* <p style={{color:"red"}}>{userName} is {currentYear-birthYear} years old</p> */}

    <p style={textColor} >{msg}</p>
</div>
}



export default Header;