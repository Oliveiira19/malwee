import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BlockUIModule } from 'ng-block-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashComponent } from './dash/dash.component';
import { RoutesModule } from './routes.module';
import { GroupComponent } from './group/group.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { SubgroupComponent } from './subgroup/subgroup.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ModalgroupComponent } from './modalgroup/modalgroup.component';
import { ColecaoComponent } from './colecao/colecao.component';
import { ProdutoComponent } from './produto/produto.component';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from 'src/services/question.service';
import { GroupomodalComponent } from './groupomodal/groupomodal.component';
import { SubgroupomodalComponent } from './subgroupomodal/subgroupomodal.component';
import { ColecaomodalComponent } from './colecaomodal/colecaomodal.component';
import { ProdutomodalComponent } from './produtomodal/produtomodal.component';
import { ClientemodalComponent } from './clientemodal/clientemodal.component';
import { UsermodalComponent } from './usermodal/usermodal.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidomodalComponent } from './pedidomodal/pedidomodal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    DashComponent,
    GroupComponent,
    UserComponent,
    SubgroupComponent,
    ClienteComponent,
    ModalgroupComponent,
    ColecaoComponent,
    ProdutoComponent,
    QuestionComponent,
    GroupomodalComponent,
    SubgroupomodalComponent,
    ColecaomodalComponent,
    ProdutomodalComponent,
    ClientemodalComponent,
    UsermodalComponent,
    PedidoComponent,
    PedidomodalComponent,
  ],
  imports: [
    RoutesModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BlockUIModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports : [
    RouterModule
  ],
  providers: [
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
