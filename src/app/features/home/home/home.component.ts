import { Component } from '@angular/core';
import { RoutePaths } from '../../../core/route-paths.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public RP = RoutePaths;
}
