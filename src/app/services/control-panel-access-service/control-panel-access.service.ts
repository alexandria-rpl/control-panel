import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Role } from '../../interfaces/control-panel-access/role.interface';
import { Privilege } from '../../interfaces/control-panel-access/privilege.interface';
import { User } from '../../interfaces/control-panel-access/user.interface';
import { Branch } from '../../interfaces/control-panel-access/branch.interface';
import { MenuItem } from '../../interfaces/control-panel-access/menu-item.interface';

@Injectable({
  providedIn: 'root'
})
export class ControlPanelAccessService {

  constructor(private http:Http,
              private router:Router) { }

  controlPanelAccessService = environment.controlPanelAccessService;

  /* Role Management */
  getAllRoles(): Observable<Role[]> {
    const url = this.controlPanelAccessService + 'getAllRoles';
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  /* Privilege Management */
  getAllPrivileges(): Observable<Privilege[]> {
    const url = this.controlPanelAccessService + 'getAllPrivileges';
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  /* User Management */
  getAllUsers(): Observable<User[]> {
    const url = this.controlPanelAccessService + 'getAllUsers';
    return this.http.get(url)
      .map((response: any) => response.json())
    .catch(error => Observable.throw(error.json()));
  }

  getUserByUserName(userName: string): Observable<User[]> {
    const url = this.controlPanelAccessService + 'getUserByUserName';
    return this.http.get(url, userName)
      .map((response: any) => response.json())
    .catch(error => Observable.throw(error.json()));
  }

  /* Branch Management */
  getBranches(): Observable<Branch[]> {
    const url = this.controlPanelAccessService + 'getAllBranches';
    return this.http.get(url)
      .map((response: any) => response.json())
    .catch(error => Observable.throw(error.json()));
  }

  /* Menu Management */
  getAllMenuItems(): Observable<MenuItem[]> {
    const url = this.controlPanelAccessService + 'getMenuItems';
    return this.http.get(url)
      .map((response: any) => response.json())
    .catch(error => Observable.throw(error.json()));
  }
}
