import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';
import {CreateAffaireComponent} from './admin/create-affaire/create-affaire.component';
import { AjouterAvocatComponent } from './admin/ajouter-avocat/ajouter-avocat.component';
import {ConsulterAvocatComponent} from './admin/consulter-avocat/consulter-avocat.component';
import {AnalyseComponent} from './admin/analyse/analyse.component';
import {ConsulterAffairesComponent} from './admin/consulter-affaires/consulter-affaires.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles:  ['Admin']} },
  { path: 'user', component: UserComponent ,  canActivate: [AuthGuard], data : { roles: ['User']} },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'admin/avocat/ajouterAv', component: AjouterAvocatComponent , canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'admin/affaires/createAf', component: CreateAffaireComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'admin/avocat/consulterAv', component: ConsulterAvocatComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'admin/analyses', component: AnalyseComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'admin/affaires/consulterAf', component: ConsulterAffairesComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
