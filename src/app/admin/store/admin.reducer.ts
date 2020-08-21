import { createReducer,on } from "@ngrx/store";
import { setSearch, getSearch } from "./admin.actions";



export interface AdminState{
    search:string;
}
const initialState:AdminState={
    search:''
}
const _adminReducer=createReducer(initialState,
on(setSearch,(state,{search})=>{
  return {
      search
  }
}),
on(getSearch,(state)=>({search:state.search}))
);

export function adminReducer(state,action){
    return _adminReducer(state,action);
}

