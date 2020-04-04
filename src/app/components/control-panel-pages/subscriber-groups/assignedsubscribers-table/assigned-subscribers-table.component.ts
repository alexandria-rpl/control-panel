import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {MatPaginator, MatSort, MatTab, MatTableDataSource} from '@angular/material';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Subscriber } from '../../../../controllers/subscriber/subscriber';
import { LibrarySubscriberService } from '../../../../services/library-subscriber-service/library-subscriber-service.service';
// tslint:disable-next-line:max-line-length
import { ComponentCommunicationService, ServiceCallRequest} from '../../../../services/component-communication-service/component-communication.service';
import { ModalCommunicationService } from '../../../../services/modal-communication-service/modal-communication.service';

@Component({
  selector: 'app-assignedsubscribers-table',
  templateUrl: './assigned-subscribers-table.component.html',
  styleUrls: ['./assigned-subscribers-table.component.scss'],
})
export class AssignedSubscribersTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /** Icons */
  faTrash = faTrash;

  private subscribers: Subscriber[];
  private subscriber: Subscriber;
  private errorMessage: string;
  private message: string;
  private modalSubscription: Subscription;
  private serviceRequest: ServiceCallRequest;

  constructor(private subscriberService: LibrarySubscriberService,
              private changeDetectorRef: ChangeDetectorRef,
              private modalService: NgbModal,
              private modalCommunicationService: ModalCommunicationService,
              private componentCommunicationService: ComponentCommunicationService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'lastName', 'subscriberEmail'];

  /** Initialize DataSource */
  dataSource = new MatTableDataSource<Subscriber>();

  ngOnInit() {

    this.componentCommunicationService.serviceRequest
      .subscribe( serviceRequest => {
        this.changeDetectorRef.detectChanges();
        this.serviceRequest = serviceRequest;
        console.log(this.serviceRequest);

        if (this.serviceRequest != null) {
        if (this.serviceRequest.serviceToCall === 'getSubscriberGroupMembers') {
          const arg = this.serviceRequest.serviceCallArguments[0].argument;
          console.log(arg);
          this.getSubscribersOfGroup(arg);
        }

        }
      },
        (error) => {
        console.log(error);
        }, () => {
        console.log(this.serviceRequest);
        });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getSubscribersOfGroup(group: number) {

    this.subscriberService.getAllSubscriberGroupMembers(group)
      .subscribe(( subscriberList: Subscriber[]) => {
        this.subscribers = subscriberList;
        console.log(this.subscribers);
        this.changeDetectorRef.detectChanges();
      },
        (error) => {
        },
        () => {
        this.dataSource = new MatTableDataSource(this.subscribers);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        });
  }
}
