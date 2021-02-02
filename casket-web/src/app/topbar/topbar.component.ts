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

    trigger('settingsMainAnimation', [
      
      transition(':enter', [
        style({
          right: 'auto',
        }),
        animate('200ms', style({
          right: '100px',
        })),
      ]),
      
      transition(':leave', [
        animate('200ms', style({
          right: 'auto',
        })),
      ])
    ]),

    trigger('settingsSlideAnimation', [
      
      transition(':enter', [
        style({
          left: 'auto',
        }),
        animate('200ms', style({
          left: '100px',
        })),
      ]),
      
      transition(':leave', [
        animate('200ms', style({
          left: 'auto',
        })),
      ])
    ]),
  ],
})
export class TopbarComponent implements OnInit {

  public menuVisible: boolean = false;
  public inputValue: string = "";
  public popupWindow: string = "default";

  constructor(public _theme: ThemeService) { }

  ngOnInit(): void {
  }

  onUserLogoClick() {
    this.menuVisible = !this.menuVisible;
    this.popupWindow = "default";
  }

  onSettingsButtonClick() {
    this.popupWindow = "settings";
  }

  onPopupSettingsBackCLick() {
    this.popupWindow = "default";
  }

}
