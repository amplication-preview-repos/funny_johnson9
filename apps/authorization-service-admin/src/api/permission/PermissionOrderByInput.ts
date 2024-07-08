import { SortOrder } from "../../util/SortOrder";

export type PermissionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
};
