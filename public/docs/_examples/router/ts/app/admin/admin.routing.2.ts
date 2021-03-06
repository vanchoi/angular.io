// #docplaster
// #docregion
import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { ManageCrisesComponent }    from './manage-crises.component';
import { ManageHeroesComponent }    from './manage-heroes.component';

// #docregion admin-route, can-activate-child
import { AuthGuard }                from '../auth-guard.service';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ],
        // #enddocregion admin-route
        // #docregion can-activate-child
        canActivateChild: [AuthGuard]
        // #docregion admin-route
      }
    ]
  }
];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);
// #enddocregion
