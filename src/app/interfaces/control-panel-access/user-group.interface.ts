import {Role} from './role.interface';
import {MenuItem} from './menu-item.interface';
import {User} from './user.interface';

export interface UserGroup {
  _id: string;
  groupName: string;
  groupDescription: string;
  users: User[];
  roles: Role[];
  menuItems: MenuItem[];
}
