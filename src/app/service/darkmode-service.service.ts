import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeServiceService {
  private darkMode: boolean = false;

  constructor() {
    this.readFromLocalStorage();
  }

  public isDarkMode() {
    return this.darkMode;
  }

  public toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.writeToLocalStorage(this.darkMode);
  }

  private writeToLocalStorage(isDarkMode: boolean) {
    localStorage.setItem('darkmode', JSON.stringify(isDarkMode));
  }

  private readFromLocalStorage() {
    let darkMode = localStorage.getItem('darkmode');
    if (darkMode) {
      this.darkMode = JSON.parse(darkMode);
    }
  }
}
