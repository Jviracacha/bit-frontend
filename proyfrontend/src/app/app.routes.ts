import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { SingUpRegister } from './components/pages/sing-up-register/sing-up-register';
import { SingInlogin } from './components/pages/sing-in-login/sing-in-login';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';

export const routes: Routes = [
    {path :"Home",component: Home, title: 'Home | proyecto frontend'},
    {path :"Dashboard",component: Dashboard, title: 'Dashboard | proyecto frontend'},
    {path :"singUpRegister",component: SingUpRegister, title: 'singUpRegister | proyecto frontend'},
    {path :"singInlogin",component: SingInlogin, title: 'singInlogin | proyecto frontend'},
    /* redireccionamos al home*/
    {path :'', redirectTo: '/Home', pathMatch: 'full'},
    /* Mensaje si es pagina no encontrada - not found */
    {path :'**', component: PageNotFound, title: 'Error 404 | proyecto frontend'},

];
