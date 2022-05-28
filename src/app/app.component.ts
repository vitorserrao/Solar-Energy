import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'solar_energy';
  onMenu: boolean = false;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.onMenuEmiter.subscribe((view) => (this.onMenu = view));
  }
}
