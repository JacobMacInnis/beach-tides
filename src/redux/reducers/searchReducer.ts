import moment from 'moment';
import { SET_LOCATION, SET_DATE, GET_TIDES_REQUEST, GET_TIDES_SUCCESS, GET_TIDES_ERROR } from '../actions/searchActions';
import { BTError } from '../../types/types';

export interface SearchState {
	location: string;
	date: string;
	tideData: any;
	loading: boolean;
	error: BTError | null;
}


const initialState: SearchState = {
  location: 'Zip or City, State',
  date: `${moment().format('MM DD YYYY')}`,
  tideData: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action: any) {
  if (action.type === SET_LOCATION) {
		return Object.assign({}, state, {
			location: action.location
		});
	} else if (action.type === SET_DATE) {
		return Object.assign({}, state, {
			date: action.date
		});
	} else if (action.type === GET_TIDES_REQUEST) {
		return Object.assign({}, state, {
      loading: true,
      error: null,
      tideData: null
		});
	} else if (action.type === GET_TIDES_SUCCESS) {
		return Object.assign({}, state, {
      loading: false,
      error: null,
      tideData: action.tideData
		});
	} else if (action.type === GET_TIDES_ERROR) {
		return Object.assign({}, state, {
      loading: false,
      error: action.error,
      tideData: null
		});
	} else {
    return state;
	}
};
