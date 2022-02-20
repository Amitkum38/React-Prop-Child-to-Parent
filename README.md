# React-Prop-Child-to-Parent
 const  favoriteclothes ='Jeans'; const  Favorite = () =>{   if (favoriteclothes === 'T-shirt') {     return<Tshirt/>   }      else {     return<Jeans/>     } }   const App = () =>(      <>    <Favorite/>     {favoriteclothes === 'Jeans' ?  <Tshirt/> :  <Jeans/>}        </> );
