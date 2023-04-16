import Card from "./Card";
import React from "react";


const CardList = ({robots})=> {

  const CardComponent = robots.map((user,i)=>{
   return <Card id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email} />
  })

   return(
<div>
     {CardComponent}
</div>
   );
}
 
export default CardList;