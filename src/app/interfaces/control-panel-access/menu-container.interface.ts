import {MenuGroup} from './menu-group.interface';

export interface MenuContainer {
  _id: string;
  containerName: string;
  containerCodeName: string;
  containerDescription: string;
  containerType: string;
  isActive: boolean;
  isVisible: boolean;
}
