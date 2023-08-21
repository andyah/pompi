import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { declarations } from './core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { TableUserComponent } from './table-user/table-user.component';

@NgModule({
  declarations: [
    AppComponent,
    declarations,
    LoginComponent,
    HomeComponent,
    AdminUserComponent,
    TableUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
