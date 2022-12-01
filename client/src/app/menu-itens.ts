import { ClienteComponent } from "./cliente/cliente.component";
import { ColecaoComponent } from "./colecao/colecao.component";
import { GroupComponent } from "./group/group.component";
import { PedidoComponent } from "./pedido/pedido.component";
import { ProdutoComponent } from "./produto/produto.component";
import { SubgroupComponent } from "./subgroup/subgroup.component";
import { UserComponent } from "./user/user.component";

export const MenuItens = [
    {
        path: 'user',
        caption : 'Usuário',
        icon : 'person',
        component: UserComponent,
    },
    {
        path: 'group',
        caption : 'Grupo',
        icon : 'assessment',
        component: GroupComponent,
    },
    {
        path: 'subgroup',
        caption : 'Subgrupo',
        icon : 'assessment',
        component: SubgroupComponent,
    },
    {
        path: 'colecao',
        caption : 'Coleção',
        icon : 'assessment',
        component: ColecaoComponent,
    },
    {
        path: 'produto',
        caption : 'Produto',
        icon : 'store',
        component: ProdutoComponent,
    },
    {
        path: 'pedido',
        caption : 'Pedidos ',
        icon : 'store',
        component: PedidoComponent,
    },
    {
        path: 'cliente',
        caption : 'Cliente',
        icon : 'face',
        component: ClienteComponent,
    },
   
 
    
]