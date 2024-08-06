import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../_services/user-auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userAuthService: UserAuthService, private router: Router) {}

  ngOnInit(): void {}




}
