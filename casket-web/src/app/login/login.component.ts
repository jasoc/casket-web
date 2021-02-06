import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  hide = true;

  constructor(public _theme: ThemeService) { }

  ngOnInit(): void {
  }

  onLoginButtonClick(){

  }

  onLogonButtonClick(){

  }
}
