import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Contact } from './components/contact/contact.component';
import { Desktopnavbar } from './components/desktopnavbar/desktopnavbar.component';
import { Footer } from './components/footer/footer.component';
import { Home } from './components/home/home.component';
import { PriceCard } from './components/price-card/price-card.component';
import { Pricing } from './components/pricing/pricing.component';
import { Product1 } from './components/product1/product1.component';

@NgModule({
  declarations: [
    AppComponent,
    Footer,
    Contact,
    Desktopnavbar,
    Home,
    PriceCard,
    Pricing,
    Product1,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
