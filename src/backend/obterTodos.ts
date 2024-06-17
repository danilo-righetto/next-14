'use server'

import RepositorioUsuario from "./RepositorioUsuario";

export default async function obterTodos() {
    RepositorioUsuario.listarTodos();
}