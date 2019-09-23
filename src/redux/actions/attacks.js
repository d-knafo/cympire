import axios from 'axios';
import { FETCH_ATTACKS } from './../const'

export const fetchAttacks = () => {
  return dispatch => {
    axios.get('https://cors-anywhere.herokuapp.com/https://i3gy725noe.execute-api.us-east-1.amazonaws.com/default/VisualizatorApi',
     {
       headers: {
         "x-api-key": '9Iaq5lP41La1PWe8XMRdRTQNTZCypPJ6NbdjHxy9',
       },
     })
      .then(res => {
        dispatch(add_attacks(res.data));
      })
  };
};

const add_attacks = data => ({
  type: FETCH_ATTACKS,
  payload: {
    ...data
  }
});
