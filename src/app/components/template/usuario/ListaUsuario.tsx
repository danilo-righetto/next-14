import LinhaUsuario from "./LinhaUsuario";
import usuarios from '../../../data/constants/usuarios'
import { Usuario } from "@/core/model/Usuario";

export default function ListaUsuario() {
    return (
        <div className="flex flex-col gap-4">
            {usuarios.map((usuario: Usuario, i) => {
                return <LinhaUsuario key={i} usuario={usuario} />
            })}
        </div>
    )
}