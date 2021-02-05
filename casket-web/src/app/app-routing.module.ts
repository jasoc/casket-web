import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }