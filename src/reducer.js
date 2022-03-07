import * as actions from "./actionType";

let counterId = 0;

export default function reducer(state = [], action){
    if(action.type === actions.bugAdded){
        return [
            ...state,
            {
                id: ++counterId,
                description: action.payload.description,
                resolve: false,
            }
        ];
    }
    else if(action.type === actions.bugRemoved){
        return state.filter(bug => bug.id !== action.payload.id);
    }
    else if (action.type === actions.bugResolved){
        return state.map( bug => bug.id !== action.payload.id ? bug : { ...bug, resolve:true});
    }
    return state;
}