import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BsModalRef, ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpBasicAuthServiceService } from './service/http/http-basic-auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [BsModalRef,{provide : HTTP_INTERCEPTORS, useClass : HttpBasicAuthServiceService, multi :true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
