import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../app.service';
import { Auth } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lk-pages-signin',
  templateUrl: './pages-signin.component.html',
  styleUrls: [
    './pages-signin.component.scss'
  ]
})
export class PagesSigninComponent implements OnInit, OnDestroy {

  myAuth: any = null;

  constructor(public router: Router,private appService: AppService, private auth: Auth) {
    this.auth.handleAuthentication();
    appService.getState().topnavTitle = 'Sign In';
    appService.getState().pageFullscreen = true;
  }

  ngOnInit() {
  }

  ngOnDestroy() { 
    this.appService.getState().pageFullscreen = false;
  }

  clickFacebook() 
  {
    console.log("click facebook");
    this.router.navigate(['notifier-location']);
  }

  clickGoogle() {
    console.log("click clickGoogle");
  //  this.myAuth.loginWithGoogle();
    this.router.navigate(['notifier-location']);
  }

  clickLogin() {
    console.log("click login");
    this.router.navigate(['notifier-location']);
    
  }


}
