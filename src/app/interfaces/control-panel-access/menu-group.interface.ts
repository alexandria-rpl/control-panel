import {MenuItem} from './menu-item.interface';

export interface MenuGroup {
  _id: string;
  menuGroupName: string;
  menuGroupDisplayName: string;
  menuGroupDescription: string;
  menuPosition: number; /* vertical position */
  menuGroups: MenuGroup[];
  menuItems: MenuItem[];
  isActive: boolean;
  isVisible: boolean;
}
