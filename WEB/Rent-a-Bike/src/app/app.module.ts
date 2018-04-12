import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeListComponent } from './bikes/bike-list/bike-list.component';
import { BikeRowComponent } from './bikes/bike-list/bike-row/bike-row.component';
import { BikeDetailComponent } from './bikes/bike-detail/bike-detail.component';
import { BikeService } from './bikes/bike.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/message.service';


@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    BikeListComponent,
    BikeRowComponent,
    BikeDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    BikeService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
