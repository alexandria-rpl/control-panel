import {MenuItem} from './menu-item.interface';
import ObjectID from 'bson-objectid';

export interface MenuGroup {
  menuGroupId: number;
  menuGroupName: string;
  menuGroupDisplayName: string;
  menuGroupDescription: string;
  menuPosition: number; /* vertical position */
  menuGroups: MenuGroup[];
  menuItems: MenuItem[];
  isActive: boolean;
  isVisible: boolean;
}
