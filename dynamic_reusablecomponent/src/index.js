import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import rizwanimage from "./image/6782C.jpg"
//destructuring 
// function Hi(props) {
//   return <div className='red  box green'>Hello
//   {props.name}!{props.color}</div>;
// }
//Es5 function
// function Hi({name,color,width}) {
//     return <div> Hello{name}!{color} {width}</div>;
//    }
//A constant holding an anonymous function
// const Hi = function({name,color,width}) {
//       return <div> Hello{name}!{color} {width}</div>;
//      }
  //Turning the function into an arrow
  // const Hi = ({name,color,width})=> {
  //   return <div> Hello{name}!{color} {width}</div>;
  //  }

   // Optional step 3: Removing the braces, which makes the
// "return" implicit so we can remove that too. Leaving the parens
// in for readability:
// const Hi = ({name,color,width})=> ( 
// <div> Hello{name}!{color} {width}</div>);
const Mediacard = ({title, body, imageUrl})=>(
  <div className='mediacard'>     
    <h2>
      {title}
    </h2>
    <p>
      {body}
    </p>
    <img width={300} src = {imageUrl} alt =""/>
 
   
  </div>
)

const MediaPage = () => (
  <>
    <Mediacard
     title= "MERN stack Devloper"
     body= "I am a Rizwan and I am a Web devloper"
    imageUrl={rizwanimage}
    
     />
     
     <Mediacard
     title= "The Car"
     body= "Car is the expensive way to commute"
    imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*"
    
     />

<Mediacard
     title= "The Walk"
     body= "Walk is the best exercise ever"
    imageUrl="https://post.healthline.com/wp-content/uploads/2022/06/female-walking-dog-1200x628-facebook-1200x628.jpg"
    />
    
     
  </>
)

  
// ReactDOM.render(
//   <Hi
//     name="rizwan"
//     color="green"
//     green={true}
//     width={64}
//     options={{ awesome: "yes", disabled: "no" }}
    
//   />, document.querySelector('#root'));
   ReactDOM.render(<MediaPage/>,document.querySelector('#root')

   );
     
