import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ControlPanelAccessService {

  constructor(private http:Http,
              private router:Router) { }

  controlPanelAccessService = environment.controlPanelAccessService;

}
