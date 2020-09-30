import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from './components/about/about.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from "./components/register/register.component";
import { AccessGuard } from "./guards/access.guard";
import { AuthGuard } from "./guards/auth.guard";
import { ChildGuard } from './guards/child.guard';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent, canDeactivate: [AccessGuard] },
  { path: "register", component: RegisterComponent },
  { path: "about", component: AboutComponent, canActivateChild: [ChildGuard], children: [
    { path: "detail", component: DetailComponent }
  ]},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
