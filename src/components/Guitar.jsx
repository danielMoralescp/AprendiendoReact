





export default function Guitar({guitar, agregandoAlCarrito}){
   
   const{identificación
    , nombre, Precio, 
    descripción
    , imagen }=guitar;

/*
    const handleClick = (guitar) =>{
    setCart([...cart, guitar])
    }*/




   

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={`/img/${imagen}.jpg`} alt="imagen guitarra" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{nombre}</h3>
                    <p>{descripción}</p>
                    <p className="fw-black text-primary fs-3">${Precio}</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100"
                     onClick={() =>  agregandoAlCarrito(guitar)}
                        
                    >Agregar al Carrito</button>
                </div>
        </div>
    )
}