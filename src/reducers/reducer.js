const initialData = {
    list: []
}

const reducers = (state= initialData,action) => {
  switch(action.type){
    case "SENDMESSAGE":
      
    const {id, data} = action.payload;

    return {
        ...state,
        list: [
            ...state.list,
            {
                id:id,
                data: data
            }
        ]
    }
    default: return state;
  }
}
export default reducers