import { Pagina } from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import ListaUsuario from "@/app/components/template/usuario/ListaUsuario";
import { IconUser } from "@tabler/icons-react";

export default function Page() {
    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo icone={IconUser} principal="Usuários" secundario="Cadastro de usuários" />
            <ListaUsuario />
        </Pagina>
    )
}