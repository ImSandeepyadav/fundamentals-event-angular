import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router'
import { IEvent } from 'src/app/shared';

declare let toastr

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
export class ListEventComponent implements OnInit {
  events: IEvent[]
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events']
  }

}
