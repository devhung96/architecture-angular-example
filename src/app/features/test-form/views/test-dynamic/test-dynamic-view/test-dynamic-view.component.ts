import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormBaseComponent } from '../../../components/form-base/form-base.component';

@Component({
  selector: 'app-test-dynamic-view',
  templateUrl: './test-dynamic-view.component.html',
  styleUrls: ['./test-dynamic-view.component.css'],
})
export class TestDynamicViewComponent implements OnInit {
  /**
   * Khai  bao data:
   *
   */
  @ViewChild('mainContainer', { read: ViewContainerRef, static: true })
  mainContainer!: ViewContainerRef;

  componentA!: ComponentRef<FormBaseComponent>;

  /**
   * Lifecyle
   */

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  /**
   * Event
   */

  async loadComponentA() {
    const cfResolver = this.cfr.resolveComponentFactory(FormBaseComponent);
    this.mainContainer.clear();
    this.componentA = this.mainContainer.createComponent(cfResolver);


    // Event component A
    const sub  = this.componentA.instance.onCancelPush.subscribe((data) => {
      this.componentA && this.componentA.destroy();
    });

    this.componentA.onDestroy(()=>{
      sub.unsubscribe();
    })


  }

  async closeComponentA() {
    console.log(this.componentA);
    this.mainContainer.clear();
    this.componentA && this.componentA.destroy();
  }

  getValuesFromFilters(data: any) {
    console.log('chui vao day');
    console.log(data);
  }
}
