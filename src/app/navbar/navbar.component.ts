import { Component, OnInit } from '@angular/core';
import { EventService, ISession } from '../shared';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = "";
  foundSessions: ISession[];

  constructor(public auth:AuthService, private eventService: EventService) { }

  ngOnInit(): void {
  }

  searchSessions(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    })
  }

}
