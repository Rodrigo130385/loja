import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LoaderbarService } from './loaderbar.service';

interface LoaderState {
  show: boolean;
}

@Component({
  selector: 'app-loaderbar',
  templateUrl: './loaderbar.component.html',
  styleUrls: ['./loaderbar.component.css']
})
export class LoaderbarComponent implements OnInit, OnDestroy {

  show:boolean = false;

  private subscription: Subscription;

  constructor(
    private loaderbarService: LoaderbarService
  ) { }

  ngOnInit() {
    this.subscription = this.loaderbarService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show
      })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
