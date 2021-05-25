import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashServiceService } from '../services/splash-service.service';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.page.html',
  styleUrls: ['./splash-page.page.scss'],
})
export class SplashPagePage implements OnInit {

  constructor(
    private router: Router,
    private splashService: SplashServiceService
  ) {

    setTimeout(() => {
      this.splashService.setLoaded(true);
      this.router.navigateByUrl('home');
    }, 3000);
  }

  ngOnInit() {

  }

}
