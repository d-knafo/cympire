import { FETCH_ATTACKS } from './../const'

const initialState = {
  campaign_instance_id: 0,
  campaign_name: '',
  team_instances: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ATTACKS:
      return {
       ...state,
       campaign_instance_id: action.payload.campaign_instance_id,
       campaign_name: action.payload.campaign_name,
       team_instances: action.payload.team_instances
     };
    default:
      return state
  }
}
