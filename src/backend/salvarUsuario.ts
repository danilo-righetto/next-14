'use server'

import { Usuario } from "@/core/model/Usuario";
import Id from "@/core/utils/Id";
import RepositorioUsuario from "./RepositorioUsuario";

export default async function salvarUsuario(usuario: Partial<Usuario>) {
    const novoUsuario = {
        ...usuario,
        id: usuario.id ?? Id.novo
    }

    RepositorioUsuario.salvar(novoUsuario as Usuario);
}