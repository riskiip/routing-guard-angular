import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { AccessGuard } from "./guards/access.guard";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent, canDeactivate: [AccessGuard] },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
