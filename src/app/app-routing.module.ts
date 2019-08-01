import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/post/post.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DocComponent } from './pages/doc/doc.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SearchComponent } from './pages/search/search.component';




const routes: Routes = [
  {
    path : '' ,component : PortafolioComponent  
  }
  ,{
    path : 'about' ,component : AboutComponent  
  },{
    path : 'item/:id' ,component : ItemComponent  
  },{
    path : 'blog' ,component : BlogComponent  
  },{
    path : 'search/:term' ,component : SearchComponent  
  },{
    path : 'blog/post' ,component : PostComponent  
  },{
    path : 'contact' ,component : ContactComponent  
  },{
    path : 'doc' ,component : DocComponent  
  },
   {
     path : '**' , pathMatch:'full', redirectTo : '' 
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
