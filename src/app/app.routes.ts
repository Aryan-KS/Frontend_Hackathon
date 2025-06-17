import { Routes } from '@angular/router';
import { ProjectPageComponent } from './project-microservice/project-page/project-page.component';
import { ProjectComponent } from './project-microservice/project/project.component';
import { UserComponent } from './project-microservice/user/user.component';
import { TaskComponent } from './project-microservice/task/task.component';

export const routes: Routes = [


    {

        path: "project-microservice/project-page",
        component: ProjectPageComponent
    }, {

        path: "project-microservice/project",
        component: ProjectComponent
    }, {

        path: "project-microservice/user",
        component: UserComponent
    }, {

        path: "project-microservice/task",
        component: TaskComponent
    },
];
