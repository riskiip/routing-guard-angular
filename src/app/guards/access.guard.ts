import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { LoginComponent } from "../components/login/login.component";

@Injectable({
  providedIn: "root",
})
export class AccessGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(component: LoginComponent) {
    if (component.email.dirty) {
      return window.confirm("Are you sure want to leave?");
    }
    return true;
  }
}
