import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
  ListEventComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  EventRouteActivator,
  EventResolver
} from './events/index'

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent'] },
  { path: 'events', component: ListEventComponent, resolve: {events:EventListResolver}},
  { path: 'events/:id' , component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  {path: 'events/session/new', component:CreateSessionComponent},
  { path: '404' , component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
