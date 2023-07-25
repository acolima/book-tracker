import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

import { NgIconsModule } from '@ng-icons/core';
import { TablerBook, TablerBooks, TablerUser } from '@ng-icons/tabler-icons';
import { MainComponent } from './pages/main/main.component';
import { BookshelfComponent } from './pages/bookshelf/bookshelf.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    BookshelfComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ TablerBook, TablerBooks, TablerUser }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
