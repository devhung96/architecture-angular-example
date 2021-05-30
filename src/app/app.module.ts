import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewModule } from './views/view.module';
import { CoreModule } from './core/core.module';

import { ProductModule } from './features/product/product.module';
import { TestFormModule } from './features/test-form/test-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    //App angular modules
    BrowserModule,

    // Core "singleton" modules
    CoreModule,
    ViewModule,

    //feature module
    ProductModule,
    TestFormModule,

    // App routing
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
