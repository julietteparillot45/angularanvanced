import {NgModule} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";

const importExport = [
  MatButtonModule, MatInputModule, MatToolbarModule, MatFormFieldModule, MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    importExport
  ],
  exports: [
    importExport
  ]
})
export class AppMaterialModule {
}
