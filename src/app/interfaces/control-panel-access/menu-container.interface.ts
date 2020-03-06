import {MenuGroup} from './menu-group.interface';

export interface MenuContainer {
  menuContainerId: number;
  containerName: string;
  containerDisplayName: string;
  containerDescription: string;
  containerType: string;
  isActive: boolean;
  isVisible: boolean;
}
