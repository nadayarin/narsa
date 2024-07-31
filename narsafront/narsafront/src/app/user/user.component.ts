import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message: string;  // Déclaration du type pour `message`

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.forUser();
  }

  forUser(): void {  // Ajout du type de retour `void`
    this.userService.forUser().subscribe(
      (response: string) => {  // Spécification du type de réponse
        console.log(response);
        this.message = response;
      },
      (error: any) => {  // Spécification du type d'erreur
        console.log(error);
      }
    );
  }
}
