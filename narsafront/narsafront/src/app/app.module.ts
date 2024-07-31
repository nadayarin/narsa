import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { CreateAffaireComponent } from './admin/create-affaire/create-affaire.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AjouterAvocatComponent } from './admin/ajouter-avocat/ajouter-avocat.component';
import { ConsulterAvocatComponent} from './admin/consulter-avocat/consulter-avocat.component';
import {AnalyseComponent} from './admin/analyse/analyse.component';
import {ConsulterAffairesComponent} from './admin/consulter-affaires/consulter-affaires.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    AdminSidebarComponent,
    CreateAffaireComponent,
    AjouterAvocatComponent,
    ConsulterAffairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    ConsulterAvocatComponent,
    AnalyseComponent
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
