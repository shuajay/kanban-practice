import { Routes } from '@angular/router';
import { KanbanBoardComponent } from './kanban/kanban-board/kanban-board.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'kanban',
        component: KanbanBoardComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];
