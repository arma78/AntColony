
const INITIAL_STATE = {
	antValues: []
}


export const Ants = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'GET_ANT':
        console.log(action.antValues);
        return {
          ...state,        
            antValues: action.antValues,
          }
        
      default:
        return state;
        
      
    }
   
  }
  
