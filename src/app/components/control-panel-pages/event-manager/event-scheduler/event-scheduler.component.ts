import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

/*services*/
import { LibraryEventManagementService } from '../../../../services/library-event-management-service/library-event-management.service';

/*controllers*/
import { CalendarEvent } from '../../../../controllers/events/calendar-event.interface';

@Component({
  selector: 'app-event-scheduler',
  templateUrl: './event-scheduler.component.html',
  styleUrls: ['./event-scheduler.component.scss']
})
export class EventSchedulerComponent implements OnInit {

  /* icons */
  faCalendarAlt = faCalendarAlt;
  faPalette = faPalette;

  /*form components */
  calendarEvent: CalendarEvent;

  model = {
    allDay: false,
    resizableStart: true,
    resizableEnd: true,
    draggable: true
  };

  primaryToggle: any;
  secondaryToggle: any;

  startTime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  endTime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};

  modelStartDate = {
    year: '',
    month: '',
    day: ''
  };

  modelEndDate = {
    year: '',
    month: '',
    day: ''
  };

  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;
  meridian = true;
  spinners = true;
  seconds = true;
  primaryColor = '#ffffff';
  secondaryColor = '#ffffff';

  errorMessage: string;
  eventScheduler: FormGroup;

  allDayEventAccepted: boolean;
  resizableStartAccepted: boolean;
  resizableEndingAccepted: boolean;
  draggableAccepted: boolean;

  eventTypes: any[];
  eventFrequencies: any[];
  eventStatuses: any[];

  eventType: any;

  eventUpload: string;

  constructor(private eventManagementService: LibraryEventManagementService ) {  }

  ngOnInit() {
    this.eventScheduler = new FormGroup({
      eventTitle: new FormControl('', Validators.required),
      eventDescription: new FormControl('', Validators.required),
      eventImage: new FormControl(''),
      eventHost: new FormControl(''),
      eventLocation: new FormControl(''),
      eventType: new FormControl(''),
      eventFrequency: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl('')
    });

    this.allDayEventAccepted = false;
    this.resizableStartAccepted = true;
    this.resizableEndingAccepted = true;
    this.draggableAccepted = true;

    this.getEventTypes();
    this.getEventFrequencies();
    this.getEventStatuses();
  }

  getEventTypes() {
    this.eventManagementService.getEventTypes()
      .subscribe(
        (results: any[]) => {
          this.eventTypes = results;
          console.log(this.eventTypes);
        },
        (error) => console.log(error)
      );
  }

  getEventFrequencies() {
    this.eventManagementService.getEventFrequency()
      .subscribe(
        (results: any[]) => {
          this.eventFrequencies = results;
          console.log(this.eventFrequencies);
        },
        (error) => console.log(error)
      );
  }

  getEventStatuses() {
    this.eventManagementService.getEventStatuses()
      .subscribe(
        (results: any[]) => {
          this.eventStatuses = results;
          console.log(this.eventStatuses);
        },
        (error) => console.log(error)
      );
  }

  setColors() {
    this.eventType = this.eventScheduler.controls['eventType'].value;
    this.primaryColor = this.eventType.primary_color;
    this.secondaryColor = this.eventType.secondary_color;
  }

  submit() {

    const startDate = new Date(this.modelStartDate.year + '-' +
    this.modelStartDate.month + '-' +
    this.modelStartDate.day + ' ' +
    this.startTime.hour + ':' +
    this.startTime.minute + ':' +
    this.startTime.second);

    const endDate = new Date(this.modelEndDate.year + '-' +
      this.modelEndDate.month + '-' +
      this.modelEndDate.day + ' ' +
      this.endTime.hour + ':' +
      this.endTime.minute + ':' +
      this.endTime.second);

    let eventStatusId;
    for (const status of this.eventStatuses) {
      if (status.event_status_name === 'In progress') {
        eventStatusId = status.event_status_id;
      }
    }

    console.log(this.primaryColor);
    console.log(this.secondaryColor);

    this.calendarEvent = {
      start: startDate.toISOString(),
      end: endDate.toISOString(),
      title: this.eventScheduler.controls['eventTitle'].value,
      colors: {
                primary_color: this.primaryColor,
                secondary_color: this.secondaryColor
              },
      allDay: this.model.allDay,
      resizable: {
                    beforeStart: this.model.resizableStart,
                    afterEnd: this.model.resizableEnd
                 },
      draggable: this.model.draggable,
      details: {
                  description: this.eventScheduler.controls['eventDescription'].value,
                  host: this.eventScheduler.controls['eventHost'].value,
                  location: this.eventScheduler.controls['eventLocation'].value,
                  event_type_id: this.eventType.event_type_id,
                  event_status_id: eventStatusId,
                  event_frequency_id: this.eventScheduler.controls['eventFrequency'].value,
                  event_image_id: 0
               }
    };
    this.eventManagementService.addEvent(this.calendarEvent)
      .subscribe(response => {
        console.log(response);
      }, error => this.errorMessage = <any>error);

    // this.resetEventScheduleForm();
  }

  updateFile() {
    const name = this.eventUpload.replace(/^.*[\\\/]/, '');
    this.eventScheduler.controls['eventImage'].setValue(name);
    console.log(name);
  }

  resetEventScheduleForm() {
    this.eventScheduler.reset();
    this.eventScheduler.patchValue({

      eventType: '',
      eventFrequency: '',
      eventAllDayEvent: 'false',
      eventResizableStart: 'true',
      eventResizableEnding: 'true',
      eventDraggable: 'true'
    });

    this.startTime = {hour: 13, minute: 30, second: 30};
    this.endTime = {hour: 13, minute: 30, second: 30};

    this.primaryColor = '#fff';
    this.secondaryColor = '#fff';

    /*this.allDayEventAccepted = false;
    this.resizableStartAccepted = true;
    this.resizableEndingAccepted = true;
    this.draggableAccepted = true;*/

    this.model = {
      allDay: false,
      resizableStart: true,
      resizableEnd: true,
      draggable: true
    };

    this.eventScheduler.markAsUntouched();
    this.eventScheduler.markAsPristine();
  }
}
