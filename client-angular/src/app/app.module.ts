import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { AllLinesComponent } from './all-lines/all-lines.component';
import { EditLineComponent } from './edit-line/edit-line.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { SearchLineComponent } from './search-line/search-line.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EditUserComponent,
    AllUsersComponent,
    AllTicketsComponent,
    AllLinesComponent,
    EditLineComponent,
    TopMenuComponent,
    FooterComponent,
    SearchLineComponent,
    BuyTicketComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
