import { Component, OnInit, NgModule } from '@angular/core';
import { ThemeService } from 'src/services/theme.service';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  animations: [

    trigger('openClose', [
      
      state('open', style({
        opacity: 1,
        visibility: 'visible'
      })),
      
      state('closed', style({
        opacity: 0,
        visibility: 'hidden'
      })),
      
      transition('open <=> closed', [ animate('.1s') ]),
    ]),

    trigger('borderNotBorder', [
      
      state('border', style({
        border: 'none'
      })),
      
      state('notBorder', style({
        border: '3px solid #a8a8a8'
      })),
      
      transition('open <=> closed', [ animate('.1s') ]),
    ]),

    trigger('search', [
      
      state('search', style({
        opacity: 1,
        visibility: 'visible'
      })),
      
      state('notSearch', style({
        opacity: 0,
        visibility: 'hidden'
      })),
      
      transition('search <=> notSearch', [ animate('.1s') ]),
    ]),
  ],
})
export class TopbarComponent implements OnInit {

  public menuVisible: boolean = false;
  public inputValue: string = "";

  constructor(public _theme: ThemeService) { }

  ngOnInit(): void {
  }

  onUserLogoClick() {
    this.menuVisible = !this.menuVisible;
  }

}
