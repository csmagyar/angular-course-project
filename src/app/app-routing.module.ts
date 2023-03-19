import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthLoggedinGuard } from "./auth/auth-loggedin.guard";
import { AuthComponent } from "./auth/auth.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'auth', component: AuthComponent, canActivate: [AuthLoggedinGuard] },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}