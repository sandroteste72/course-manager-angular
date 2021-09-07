import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/error-404/error-404.component";
import { NavbarComponent } from "./component/navbar/navbar.component";

@NgModule({
    declarations: [
        NavbarComponent,
        Error404Component
    ],
    imports: [
        RouterModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class CoreModule {

}