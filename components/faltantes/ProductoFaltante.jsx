import Link from "next/link";
import { useContext } from "react";
import productoContext from "../../context/productos/productoContext";
import faltanteContext from "../../context/faltantes/faltantesContext";


const ProductoFaltante = ({producto}) => {
    const {nombre, marca, codigo, disponibles, modelo, rubro, _id, faltante, proveedor} = producto
   
    const productosContext = useContext(productoContext)
    const {productoActual} = productosContext

    const faltantesContext = useContext(faltanteContext)
    const {eliminarFaltante} = faltantesContext

    return (
        <tr className="border-b dark:border-none hover:bg-gray-50 dark:hover:bg-gray-700">
            <td className="p-3 dark:text-gray-50 text-center">{codigo}</td>
            <td className="dark:text-gray-50 p-3 w-1">{nombre}</td>
            <td className="p-3 dark:text-gray-50 text-center">{marca}</td>
            <td className="p-3 dark:text-gray-50 text-center">{modelo}</td>
            <td className="p-3 dark:text-gray-50 text-center">{rubro}</td>
            <td className="p-3 dark:text-gray-50 text-center">{proveedor}</td>

            <td className="p-3 dark:text-gray-50 text-center uppercase">{disponibles && faltante ? <span className="font-bold text-red-600 p-1">{disponibles}</span> : disponibles && !faltante ? disponibles : <span className="font-bold text-white bg-red-600 p-1 uppercase">Sin stock</span>}</td>
            <td className="p-3 w-40 mt-2  ">

                <Link href={`/producto/${_id}`}>
                    <button
                        type="button"
                        className="bg-blue-600 hover:bg-blue-900 mb-2 w-full text-white p-2 uppercase font-bold text-xs mr-3 rounded-md"
                        onClick={() => productoActual(producto)}
                    >Detalles</button>
                </Link>
                <Link href="">
                    <button
                        type="button"
                        className="bg-red-600 hover:bg-red-900 mb-2 w-full text-white p-2 uppercase font-bold text-xs mr-3 rounded-md"
                        onClick={() => eliminarFaltante(_id)}
                    >Quitar de faltantes</button>
                </Link>
                
            </td>
        </tr>
    );
};

export default ProductoFaltante;
