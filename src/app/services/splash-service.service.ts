import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SplashServiceService {

  private loaded: boolean = false;

  constructor() { }

  setLoaded(loaded: boolean) {
    this.loaded = loaded;
  }

  getLoaded() {
    return this.loaded;
  }
}
