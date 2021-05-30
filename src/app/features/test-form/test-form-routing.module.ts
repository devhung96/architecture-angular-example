import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TestFormViewComponent } from './views/test-form-view/test-form-view.component';
import { TestDynamicViewComponent } from './views/test-dynamic/test-dynamic-view/test-dynamic-view.component';

const routes: Routes = [
  {
    path: 'test-form',
    component: TestFormViewComponent,
  },
  {
    path:'test-dynamic',
    component: TestDynamicViewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TestFormRoutingModule {}
