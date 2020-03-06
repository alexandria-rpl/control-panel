import ObjectID from 'bson-objectid';

export interface MenuItem {
  menuItemId: number;
  menuItemName: string;
  menuItemDescription: string;
  componentName: string;
  url: string;
  active: boolean;
  visible: boolean;
}
