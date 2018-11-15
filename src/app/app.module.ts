import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery.component';
import { RouteGalleryComponent } from './route-gallery/route-gallery.component';
import { RouteDashboardComponent } from './route-dashboard/route-dashboard.component';
import { RouteMapComponent } from './route-map/route-map.component';
import { ImageService } from './shared/services/local_images.service';
import { ImageFilterPipe } from './shared/pipes/filter.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    RouteGalleryComponent,
    RouteDashboardComponent,
    RouteMapComponent,
    ImageFilterPipe,
    WelcomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: 'welcome', component: WelcomeComponent },
        { path: 'dashboard', component: RouteDashboardComponent },
        { path: 'gallery', component: RouteGalleryComponent },
        { path: 'map', component: RouteMapComponent },
        { path: '**', redirectTo: '/welcome' }
      ]
    )
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
