import {MenuGroup} from './menu-group.interface';

export interface MenuContainer {
  _id: string;
  containerName: string;
  containerDescription: string;
  containerType: string;
  menuGroups: MenuGroup[];
  isActive: boolean;
  isVisible: boolean;
}
