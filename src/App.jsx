
import { useState } from "react";
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { db } from "./data/data";

  //does it mutate (pagina para aprender los metodos de array)
function App() {
    //       console.log()
    //no puedes tener de forma condicional for , function un estado
    //state
    
   const [data, setData] = useState(db)
   const [cart, setCart] = useState([])

   //funciones 
   function agregandoAlCarrito(item){

    const existeelitem = cart.findIndex((g)=> g.identificación === item.identificación ) 
    //console.log(existeelitem)

    if(existeelitem >= 0){
      console.log('ya existe')
      const copiadelCart = [...cart];//no se puede modificar el original 
      copiadelCart[existeelitem].cantidad++
      setCart(copiadelCart)
    }else{ 
      item.cantidad = 1;
      console.log('no existe agregando')
      //setCart(prevCart => [...prevCart, item])//eslo mismo que la linea de abajo mas corto
      setCart([...cart, item])
    }

 

   }






  return (
    <>
    
     <Header />

     <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            
         {data.map((guitar)=>(
        <Guitar
         key={guitar.identificación}
         guitar={guitar}
         setCart={setCart}
         agregandoAlCarrito={agregandoAlCarrito}
         
        
        
           
         />

        
         ))}  
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

     
     
      
    </>
  )
}

export default App
