import { Routes, RouterModule } from '@angular/router';
import { PhoneLoginComponent } from './home/phone-login/phone-login.component'

export const routes:Routes=[
        {path: 'phone-login', component: PhoneLoginComponent},
        {path:'', redirectTo:'/phone-login', pathMatch:'full'}        
    ]

export const routing = RouterModule.forRoot(routes);
