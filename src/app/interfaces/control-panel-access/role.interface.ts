import { Privilege } from './privilege.interface';

export interface Role {
  _id: string;
  roleName: string;
  roleDescription: string;
  privileges: Privilege[];
}
