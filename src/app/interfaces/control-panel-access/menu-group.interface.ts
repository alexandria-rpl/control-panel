import {MenuItem} from './menu-item.interface';

export interface MenuGroup {
  _id: string;
  menuGroupName: string;
  menuGroupDescription: string;
  menuPosition: number; /* vertical position */
  menuItems: MenuItem[];
  isActive: boolean;
  isVisible: boolean;
}
