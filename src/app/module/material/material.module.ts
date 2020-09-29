import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from '@angular/material/toolbar';

const ModulMaterial = [MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule];

@NgModule({
  declarations: [],
  imports: [ModulMaterial],
  exports: [ModulMaterial],
})
export class MaterialModule {}
