import { Privilege } from './privilege.interface';

export interface Role {
  roleId: number;
  roleName: string;
  roleDescription: string;
  privileges: Privilege[];
}
