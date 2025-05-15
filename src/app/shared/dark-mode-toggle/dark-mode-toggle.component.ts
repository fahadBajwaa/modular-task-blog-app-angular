import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss'],
})
export class DarkModeToggleComponent {
  darkMode = signal(false);

  toggleDarkMode() {
    this.darkMode.update((val) => !val);
  }

  constructor() {
    effect(() => {
      document.body.style.background = this.darkMode() ? '#121212' : '#fff';
      document.body.style.color = this.darkMode() ? '#fff' : '#000';
    });
  }
}
