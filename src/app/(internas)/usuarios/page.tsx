'use client'
import { Pagina } from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import FormularioUsuario from "@/app/components/template/usuario/FormularioUsuario";
import ListaUsuario from "@/app/components/template/usuario/ListaUsuario";
import usuarios from "@/app/data/constants/usuarios";
import Backend from "@/backend";
import { Usuario } from "@/core/model/Usuario";
import { IconUser } from "@tabler/icons-react";
import { useState } from "react";

export default function Page() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const [usuario, setUsuario] = useState<Partial<Usuario> | null>(null)

    function salvar() {
        if (!usuario) return
        Backend.usuarios.salvar(usuario)
    }
    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo icone={IconUser} principal="Usuários" secundario="Cadastro de usuários" />
            {usuario ? (
                <FormularioUsuario 
                usuario={usuario} 
                onChange={setUsuario}
                salvar={salvar}
                cancelar={() => {}} />
            ): (
                <ListaUsuario onClick={setUsuario} />
            )}
        </Pagina>
    )
}