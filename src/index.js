import store from "./store";
import * as crudBug from "./actions";


store.dispatch(crudBug.bugAdded("bug1"));
store.dispatch(crudBug.bugAdded("bug2"));

store.dispatch(crudBug.bugResolved(2));

console.log(store.getState()); 