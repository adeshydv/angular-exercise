import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { BookEventComponent } from './book-event/book-event.component';

const routes: Routes = [
  { path: '',        component: EventListComponent },
  { path: 'eventList',        component: EventListComponent },
  { path: 'bookEvent', component: BookEventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
