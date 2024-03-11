import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThemeOveralViewComponent } from "./theme-overal-view/theme-overal-view.component";
import { ThemeAddComponent } from "./theme-add/theme-add.component";
import { ThemeCurrentComponent } from "./theme-current/theme-current.component";
import { AuthenticationActivate } from "../guards/authentication.activate";

const routes: Routes = [
    { path: 'themes', component: ThemeOveralViewComponent },
    { path: 'theme-add', component: ThemeAddComponent, canActivate: [AuthenticationActivate] },
    { path: 'themes/:id', component: ThemeCurrentComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ThemeRoutingModule { }
