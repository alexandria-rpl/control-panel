import {Privilege} from './privilege.interface';
import {MenuItem} from './menu-item.interface';

export interface CustomUser {
  _id: string;
  userName: string;
  privileges: Privilege[];
  menuItems: MenuItem[];
}
