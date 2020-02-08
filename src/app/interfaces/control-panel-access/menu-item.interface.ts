export interface MenuItem {
  _id: string;
  menuItemName: string;
  menuItemDescription: string;
  positionNumber: number; /* vertical position */
  isActive: boolean;
  isVisible: boolean;
}
