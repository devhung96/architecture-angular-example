import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestFormViewComponent } from './views/test-form-view/test-form-view.component';
import { TestFormRoutingModule } from './test-form-routing.module';
import { FormBaseComponent } from './components/form-base/form-base.component';
import { FormsModule } from '@angular/forms';
import { TestDynamicViewComponent } from './views/test-dynamic/test-dynamic-view/test-dynamic-view.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TestFormViewComponent,
    FormBaseComponent,
    TestDynamicViewComponent,
  ],

    imports: [CommonModule, TestFormRoutingModule, FormsModule,BrowserModule],
})
export class TestFormModule {}
