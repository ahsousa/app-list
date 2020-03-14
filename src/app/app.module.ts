import { BrowserModule }                from '@angular/platform-browser';
import { NgxPaginationModule }          from 'ngx-pagination';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { AppRoutingModule }             from './app-routing.module';
import { AppComponent }                 from './app.component';
import { AppListComponent }             from './app-list/app-list.component';
import { HttpClientModule }             from '@angular/common/http';
import { NavComponent }                 from './nav/nav.component';
import { SearchPipe }                   from './core/pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    NavComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
