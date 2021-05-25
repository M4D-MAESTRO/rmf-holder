import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashServiceService } from '../services/splash-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  item = {
    src: 'assets/icon/favicon.png',
    text: 'R.M.F - RPG Manager Factory'
  };

  constructor(
    private router: Router,
    private splashService: SplashServiceService
  ) { }

  ngOnInit() {
    
    if (!this.splashService.getLoaded()) {
      this.router.navigate(['']);
    }
  }

  externalHandle(link: string): void {
    window.open(link, "_blank");
  }

}
