import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbTimeStruct, NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView, CalendarMonthViewDay, CalendarEvent } from 'angular-calendar';

import { Subject } from 'rxjs';
import { LibraryEventManagementService } from '../../../../services/library-event-management-service/library-event-management.service';
import { log } from 'util';
import { Event } from '../../../../controllers/events/event';
import { NewEvent } from '../../../../controllers/events/new-event';

/*icons*/
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-event-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  /* icons */
  faCalendarAlt = faCalendarAlt;
  faPalette = faPalette;
  faPencilAlt = faPencilAlt;
  faTimes = faTimes;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  currentDate = {
    year: '',
    month: ''
  };

  startDateModel: NgbDateStruct;
  endDateModel: NgbDateStruct;

  calendarEvents: Event[];

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  activeDayIsOpen = true;

  calendarDays: any[];

  events: CalendarEvent[] = [ ];

  newEvent: NewEvent;

  /*form components */
  calendarEvent: CalendarEvent;

  model = {
    allDay: false,
    resizableStart: false,
    resizableEnd: false,
    draggable: false
  };

  startTime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  endTime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};

  modelStartDate: {
    year: number,
    month: number,
    day: number
  };

  modelEndDate: {
    year: number,
    month: number,
    day: number
  };

  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;
  meridian = true;
  spinners = true;
  seconds = true;
  primaryColor: any = '#ffffff';
  secondaryColor: any = '#ffffff';

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
  eventUploadFileName: string;

  isEditable: string;
  checkBoxEditable: boolean;
  isEnabled: boolean;
  isReadOnly: boolean;

  constructor(private calendar: NgbCalendar,
              private modal: NgbModal,
              private eventManagementService: LibraryEventManagementService) {}


  actions: CalendarEventAction[] = [
    {
      // label: '<i class="fa fa-fw fa-pencil"></i>',
      label: '<fa-icon [icon]="faPencilAlt"></fa-icon>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      // label: '<i class="fa fa-fw fa-times"></i>',
      label: '<fa-icon [icon]="faTimes"></fa-icon>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  ngOnInit() {
    this.eventManagementService.getEvents()
      .subscribe(
        (results: any[]) => {
          this.calendarDays = results;
        },
        (error) => console.log(error),
        () => this.setDays(this.calendarDays)
      );

      this.eventScheduler = new FormGroup({
        eventTitle: new FormControl('', Validators.required),
        eventDescription: new FormControl('', Validators.required),
        eventImage: new FormControl(''),
        eventHost: new FormControl(''),
        eventLocation: new FormControl(''),
        eventType: new FormControl(''),
        eventFrequency: new FormControl(''),

      });

      this.getEventTypes();
      this.getEventFrequencies();
      this.getEventStatuses();
      // this.disableFormControls();
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

  setDays(days: any[]) {
    for (const day of days) {
      console.log(day);
      let newEvent: any;
        newEvent = {
          start: new Date(day.start),
          end: new Date(day.end),
          title: day.title,
          color: {
            primary_color: day.colors.primary_color,
            secondary_color: day.colors.secondary_color
          },
          actions: this.actions,
          allDay: day.allDay,
          resizable: {
            beforeStart: day.resizable.beforeStart,
            afterEnd: day.resizable.afterEnd
          },
          draggable: day.draggable,
          meta: {
            _id: day._id,
            details: {
              description: day.details.description,
              host: day.details.host,
              location: day.details.location,
              event_type_id: day.details.event_type_id,
              event_status_id: day.details.event_status_id,
              event_frequency_id: day.details.event_frequency_id,
              event_image_id: day.details.event_image_id
          }
        }
      };

      this.events.push(newEvent);
      this.refresh.next();
    }
    console.log(this.events);
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  onRightClick() {
    return false;
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  getFullYear(date: Date) {
    return date.getFullYear().toString();
  }

  getDay(date: Date) {
    return date.getUTCDate().toString();
  }

  getMonth(date: Date) {
    let month;
    month = date.getUTCMonth() + 1;
    return month.toString();
  }

  getHr(date: Date) {
    return date.getHours().toString();
  }

  getMin(date: Date) {
    return date.getMinutes().toString();
  }

  getSec(date: Date) {
    return date.getSeconds().toString();
  }

  setColors() {
    this.eventType = this.eventScheduler.controls['eventType'].value;
    this.primaryColor = this.eventType.primary_color;
    this.secondaryColor = this.eventType.secondary_color;
  }

  ableToEdit(editMode: string) {
    this.isEditable = editMode;
  }

  disableFormControls() {
    this.eventScheduler.controls['eventTitle'].disable();
    this.eventScheduler.controls['eventDescription'].disable();
    this.eventScheduler.controls['eventImage'].disable();
    this.eventScheduler.controls['eventHost'].disable();
    this.eventScheduler.controls['eventLocation'].disable();
    this.eventScheduler.controls['eventType'].disable();
    this.eventScheduler.controls['eventFrequency'].disable();

    this.ableToEdit('false');
    // this.checkBoxEditable = false;
    this.isReadOnly = true;
    this.isEnabled = false;
    console.log(this.isReadOnly);
    console.log(this.isEditable);
    console.log(this.checkBoxEditable);
  }

  enableFormControls() {
    this.eventScheduler.controls['eventTitle'].enable();
    this.eventScheduler.controls['eventDescription'].enable();
    this.eventScheduler.controls['eventImage'].enable();
    this.eventScheduler.controls['eventHost'].enable();
    this.eventScheduler.controls['eventLocation'].enable();
    this.eventScheduler.controls['eventType'].enable();
    this.eventScheduler.controls['eventFrequency'].enable();

    this.ableToEdit('true');
    /*this.checkBoxEditable = true;
    this.isReadOnly = false;*/
    this.isEnabled = true;
    console.log(this.isReadOnly);
    console.log(this.isEditable);
    console.log(this.checkBoxEditable);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.disableFormControls();

    this.modelStartDate = {
      year: parseInt(this.getFullYear(new Date(event.start)), 10),
      month: parseInt(this.getMonth(new Date(event.start)), 10),
      day: parseInt(this.getDay(new Date(event.start)), 10)
    };

    this.startTime = {
      hour: parseInt(this.getHr(new Date(event.start)), 10),
      minute: parseInt(this.getMin(new Date(event.start)), 10),
      second: parseInt(this.getSec(new Date(event.start)), 10)
    };

    this.modelEndDate = {
      year: parseInt(this.getFullYear(new Date(event.end)), 10),
      month: parseInt(this.getMonth(new Date(event.end)), 10),
      day: parseInt(this.getDay(new Date(event.end)), 10)
    };

    this.endTime = {
      hour: parseInt(this.getHr(new Date(event.end)), 10),
      minute: parseInt(this.getMin(new Date(event.end)), 10),
      second: parseInt(this.getSec(new Date(event.end)), 10)
    };

    this.startDateModel = this.modelStartDate;
    this.endDateModel = this.modelEndDate;

    const colorValues = Object.keys(event.color).map(key => event.color[key]);
    this.primaryColor = colorValues[0];
    this.secondaryColor = colorValues[1];

    this.model = {
      allDay: event.meta.details.allDay,
      resizableStart: event.resizable.beforeStart,
      resizableEnd: event.resizable.afterEnd,
      draggable: event.draggable
    };
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  updateEvent(event: any) {
      console.log('Event to update:');
      console.log(event);
  }

  deleteEvent(event: any) {
    console.log('Event to delete:');
    console.log(event);
    const _id = event.meta._id.toString();
    // console.log(_id.toHexString());
    this.eventManagementService.deleteEvent(_id)
      .then(function(response) {
        console.log(response.json());
      });

    location.reload();
  }

  addEvent(): void {
    /*this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });*/
    this.refresh.next();
  }

}
