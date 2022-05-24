import { useContext, useEffect, useState } from "react";
import Compra from "./Compra";
import compraContext from "../../../context/historial/compras/compraContext";
import authContext from "../../../context/auth/authContext";
import Image from "next/image";

const ListadoCompras = () => {

    const AuthContext = useContext(authContext)
    const {modo, usuarioAutenticado} = AuthContext

    const CompraContext = useContext(compraContext)

    const {
        compras, 
        traerCompras, 
        filtroCompra, 
        filtrados,
        orderNombre,
        orderNombreFiltrados,
        orderMarca,
        orderMarcaFiltrados,
        orderModelo,
        orderModeloFiltrados,
    } = CompraContext

    const [filtrando, setFiltrando] = useState("")    //contiene lo que voy escribiendo
    const [escribiendo, setEscribiendo] = useState(false)   //cuando escribo pasa a true
    const [focus, setFocus] = useState(false)   //activar el ring en el buscador
    const [ordenNombre, setOrdenNombre] = useState(false)
    const [ordenMarca, setOrdenMarca] = useState(false)
    const [ordenModelo, setOrdenModelo] = useState(false)
    const [ordenProveedor, setOrdenProveedor] = useState(false)


    useEffect(() => {
        usuarioAutenticado()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        traerCompras()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    useEffect(() => {
        if(filtrando) {
            orderNombreFiltrados(ordenNombre)
        }
        orderNombre(ordenNombre)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ordenNombre])
    useEffect(() => {
        if(filtrando) {
            orderMarcaFiltrados(ordenMarca)
        }
        orderMarca(ordenMarca)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ordenMarca])
    useEffect(() => {
        if(filtrando) {
            orderModeloFiltrados(ordenModelo)
        }
        orderModelo(ordenModelo)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ordenModelo])  
    

    useEffect(() => {
        if(filtrando) {
            setEscribiendo(true)
        } else {
            setEscribiendo(false)
        }
    }, [filtrando])

    const onChangeFiltro = e => {
        setFiltrando(e.target.value)
        filtroCompra(e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))  //envio al productoState
    }

    const ordenarNombre = () => {
        setOrdenNombre(!ordenNombre)
    }
    const ordenarMarca = () => {
        setOrdenMarca(!ordenMarca)
    }
    const ordenarModelo = () => {
        setOrdenModelo(!ordenModelo)
    }
  
  return (
    <>   
        <div className="absolute lg:relative min-w-full m-0">
            <h1 className="font-black dark:text-yellow-500 text-3xl sm:text-4xl text-yellow-500 text-center mt-2 sm:mt-0 mb-4 ">Listado de compras</h1>
            <div className="flex flex-col-reverse sm:flex-row justify-between ">
                <div className={`${focus && "ring-2"} relative my-auto p-2 w-full sm:w-2/6 xl:w-2/6 shadow dark:bg-gray-900 focus:outline-none focus:ring focus:border-blue-300 dark:text-gray-50 bg-white rounded-md md:rounded-lg`}>
                        <input 
                            type="text" 
                            className="w-10/12 xl:w-11/12 p-2 focus:outline-none dark:bg-transparent" //outline-none le quita el borde default, focus-ring le pone borde
                            placeholder="Consulta el historial"
                            onChange={onChangeFiltro}
                            value={filtrando}
                            onFocus={()=> setFocus(true)}
                            onBlur={()=> setFocus(false)}
                        />
                        <div className="absolute mr-2 -inset-y-1 flex right-0 opacity-40">
                            <Image
                                src={`${modo && escribiendo ? "/close_dark.svg" : !modo && escribiendo ? "/close_light.svg": modo && !escribiendo ? "/search_light.svg" : "/search_dark.svg"}`}
                                alt="Cerrar"
                                width={30} 
                                height={30}
                                priority={true}
                                className="cursor-pointer"
                                onClick={escribiendo ? () => setFiltrando("") : null}
                            />
                        </div> 
                    </div>  
                </div>    
        </div>
        <table className="relative top-44 sm:top-44 lg:top-0 w-full mt-5 table-auto shadow rounded-lg dark:bg-gray-900 bg-white ">
            <thead className="bg-yellow-500 text-white">
                <tr className="hover:cursor-pointer select-none">
                    <th onClick={() => ordenarNombre()} className="p-2 rounded-tl-lg" >NOMBRE</th>
                    <th onClick={() => ordenarMarca()}>MARCA</th>
                    <th onClick={() => ordenarModelo()}>MODELO</th>
                    <th>CANTIDAD</th>
                    <th>FECHA DE COMPRA</th>
                    <th>PROVEEDOR</th>
                    <th>VALOR DEL DOLAR</th>
                    <th className="rounded-tr-lg">PRECIO EN USD</th>
                </tr>
            </thead>
            <tbody>
            
            {Object.keys(filtrados).length === 0 && escribiendo ? (
                    <>
                        <tr className="relative p-3 text-2xl dark:text-gray-50">
                            <td>No hay resultados</td>
                        </tr>
                    </>) 
                : Object.keys(filtrados).length > 0 && escribiendo ?(
                    <>
                        {filtrados.map(producto => (
                            <Compra
                                key={producto._id}
                                producto={producto}
                            />
                        ))}
                    </>)
                : (
                <>
                    {compras.map(producto => (
                        <Compra
                            key={producto._id}
                            producto={producto}
                        />
                    ))}
                </>
                )}  
                
            </tbody>
        </table>
    </>
  )
}

export default ListadoCompras;