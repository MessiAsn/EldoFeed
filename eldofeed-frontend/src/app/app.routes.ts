import { Routes } from '@angular/router';
import { ListComponent } from './posts/list/list.component';
import { CreateComponent } from './posts/create/create.component';
import { EditComponent } from './posts/edit/edit.component';
import { DetailComponent } from './posts/detail/detail.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'detail/:id', component: DetailComponent }
];
