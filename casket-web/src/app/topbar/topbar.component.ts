import { Component, OnInit, NgModule } from '@angular/core';
import { ThemeService } from 'src/services/theme.service';
import { UserService } from 'src/services/user.service';

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
          right: '100%',
        }),
        animate('250ms', style({
          height: 'auto',
          right: '0px',
        })),
      ]),
      
      transition(':leave', [
        animate('250ms', style({
          right: '100%',
          height: '0px',
        })),
      ])
    ]),

    trigger('settingsSlideAnimation', [
      
      transition(':enter', [
        style({
          left: '100%',
        }),
        animate('200ms', style({
          width: '100%',
          left: '0px',
        })),
      ]),

      transition(':leave', [
        animate('200ms', style({
          left: '100%',
        })),
      ])
    ]),
  ],
})
export class TopbarComponent implements OnInit {

  public menuVisible: boolean = false;
  public inputValue: string = "";
  public popupWindow: string = "default";

  constructor(public _theme: ThemeService, public _user: UserService) { }

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
