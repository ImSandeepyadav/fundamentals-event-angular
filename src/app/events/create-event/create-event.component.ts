import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/shared/index';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  newEvent
  event
  isDirty: boolean = true
  constructor(private router: Router, private eventService:EventService) { }

  saveEvent(formValues){
    this.eventService.saveEvent(formValues)
    this.isDirty = false
    this.router.navigate(['/events'])

  }

  cancel(){
    this.router.navigate(['/events'])
  }

  ngOnInit(): void {
  }

}
