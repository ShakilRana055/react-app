import * as actions from "./actionType";

export const bugAdded = description => ({
    type: actions.bugAdded,
    payload: {
        description
    }
});

export const bugRemoved = id => ({
    type: actions.bugRemoved,
    payload:{id}
});

export const bugResolved = id => ({
    type: actions.bugResolved,
    payload:{id}
});
