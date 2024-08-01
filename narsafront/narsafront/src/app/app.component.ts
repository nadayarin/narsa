import {Component, OnInit} from '@angular/core';
import { UserAuthService } from './_services/user-auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'narsa';

  ngOnInit(): void {
    }

}
