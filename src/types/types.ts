import { SearchState } from "../redux/reducers/searchReducer";

export interface BeachTidesState {
  search: SearchState;
}
export interface BTError {
  status: number;
  message: string;
}
