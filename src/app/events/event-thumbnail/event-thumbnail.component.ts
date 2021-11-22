import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'src/app/shared';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

 @Input() event: IEvent

  constructor() { }

  ngOnInit(): void {
  }
  getStartTimeStyle(): any{
    if(this.event && this.event.time ==='8:00 am')
    return{color:'#003300', 'font-weight':'bold'}
    return{}
  }
}
