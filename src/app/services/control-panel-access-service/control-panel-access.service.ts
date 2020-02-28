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
import {UserGroup} from '../../interfaces/control-panel-access/user-group.interface';
import {MenuContainer} from '../../interfaces/control-panel-access/menu-container.interface';
import {Menu} from '../../interfaces/control-panel-access/menu.interface';
import {MenuGroup} from '../../interfaces/control-panel-access/menu-group.interface';

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

  addNewRole(role: Role): Observable<any> {
    const url = this.controlPanelAccessService + 'addNewRole';
    return this.http.post(url, role)
      .map(this.extractData)
    .catch(this.handleErrorObservable);
  }
  /* Privilege Management */
  getAllPrivileges(): Observable<Privilege[]> {
    const url = this.controlPanelAccessService + 'getAllPrivileges';
    return this.http.get(url)
      .map((response: any) => response.json())
    .catch(error => Observable.throw(error.json()));
  }

  addNewPrivilege(privilege: Privilege): Observable<any> {
    const url = this.controlPanelAccessService + 'addNewPrivilege';
    return this.http.post(url, privilege)
      .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  /* User Management */
  getAllUsers(): Observable<User[]> {
    const url = this.controlPanelAccessService + 'getAllUsers';
    return this.http.get(url)
      .map((response: any) => response.json())
    .catch(error => Observable.throw(error.json()));
  }

  addNewUser(user: User): Observable<any> {
    const url = this.controlPanelAccessService + 'addNewUser';
    console.log(user);
    return this.http.post(url, user)
      .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  getAllCustomUsers() {
    const url = this.controlPanelAccessService + 'getAllCustomUsers';
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
  getMenuContainers(): Observable<MenuContainer[]> {
    const url = this.controlPanelAccessService + 'getAllMenuContainers';
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  getAllMenus(): Observable<Menu[]> {
    const url = this.controlPanelAccessService + 'getAllMenus';
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch( error => Observable.throw(error.json()));
  }

  getAllMenuGroups(): Observable<MenuGroup[]> {
    const url = this.controlPanelAccessService + 'getAllMenuGroups';
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch( error => Observable.throw(error.json()));
  }

  addNewMenuItem(menuItem: MenuItem): Observable<any> {
    const url = this.controlPanelAccessService + 'addNewMenuItem';
    console.log(menuItem);
    return this.http.post(url, menuItem)
      .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  getAllUserGroups() {
    const url = this.controlPanelAccessService + 'getAllUserGroups';
    return this.http.get(url)
      .map((response: any) => response.json())
    .catch(error => Observable.throw(error.json()));
  }

  addNewUsergroup(newGroup: UserGroup): Observable<any> {
    const url = this.controlPanelAccessService + 'addNewUserGroup';
    console.log(newGroup);
    return this.http.post(url, newGroup)
      .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  getAllUnAssignedUsers() {
    const url = this.controlPanelAccessService + 'getAllUnassignedUsers';
    return this.http.get(url)
      .map((response: any) => response.json())
    .catch(error => Observable.throw(error()));
  }

  getAllAssignedUsers() {
    const url = this.controlPanelAccessService + 'getAllAssignedUsers';
    return this.http.get(url)
      .map((response: any) => response.json())
    .catch(error => Observable.throw(error()));
  }

  getUserGroupById(groupId: string) {
    const url = `${this.controlPanelAccessService}getUserGroupById/${groupId}`;
    return this.http.get(url)
      .map((response: any) => response.json())
    .catch(error => Observable.throw(error()));
  }



  extractData(res: Response) {
    const body = res.json();
    console.log(body);
    return body || {};
  }

  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }



}
