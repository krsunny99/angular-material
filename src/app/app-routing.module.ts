import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"blogs",
    component:BlogsComponent
  },
  {
    path:"blog-detail",
    component:BlogDetailComponent
  },
  {
    path:"admin",
    component:AdminComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
