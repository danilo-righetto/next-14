import { Usuario } from "@/core/model/Usuario";
import { PrismaClient } from "@prisma/client";

export default class RepositorioUsuario {
    private static db: PrismaClient = new PrismaClient()

    static async listarTodos(): Promise<Usuario[]> {
        return await this.db.usuario.findMany()
    }

    static async listarPorId(id: string): Promise<Usuario> {
        const usuario =  await this.db.usuario.findUnique({ where: { id }})
        return usuario as Usuario
    }

    static async salvar(usuario: Usuario): Promise<Usuario> {
        return await this.db.usuario.upsert({
            where: { id: usuario.id },
            update: usuario,
            create: usuario
        })
    }
}