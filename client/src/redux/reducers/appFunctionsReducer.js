import sublinks from "../../utils/data";
import { CLOSE_SUBMENU, OPEN_SUBMENU, SET_SEARCH_ITEM,SET_IS_SEARCHING,SET_SEARCH_RESULT,SET_IS_LOADING_SEARCH,SET_SHOW_SIDEBAR } from "../action";

// reducers/productReducer.js
const initialState = {
  // Initial product state

  categoryClicked: "",

  loading: false,
  showSidebar: false,

  errorMessage: "",
  isShowSubmenu: false,
  page: { page: "", links: [] },
  location: {},
  searchItem: "",
  searchResult: [],
  IsSearching: false,
  isLoadingSearch: false,
  serviceCategory: "",
  serviceLocation: "",
  isServiceContainerOpen: false,
  isLocationContainerOpen: false,
};

const openSubmenu = (state, text, coordinate) => {
  const page = sublinks.find((link) => {
    if (link.page === text) {
      return link;
    }
  });
  return { ...state, page: page, location: coordinate, isShowSubmenu: true };
  //setLocation(coordinates);
  // setIsShowSubmenu(true);
};

const appFunctionsReducer = (state = initialState, action) => {
  // Handle actions and return new state accordingly

  if (action.type == CLOSE_SUBMENU) {
    // console.log("memememememmem")
    //return null
    return { ...state, isShowSubmenu: false };
  }

  if (action.type == OPEN_SUBMENU) {
    return openSubmenu(state, action.payload.text, action.payload.coordinate);
  }

  if (action.type == SET_SEARCH_ITEM) {
    return { ...state, searchItem: action.payload.input };
  }
  if(action.type== SET_IS_SEARCHING){
    return { ...state, IsSearching:action.payload.status };
  }
  if(action.type== SET_SEARCH_RESULT){
    return{...state,searchResult:action.payload.result}
  }
   if (action.type == SET_IS_LOADING_SEARCH) {
     return { ...state, isLoadingSearch: action.payload.status };
   }
 if (action.type == SET_SHOW_SIDEBAR) {
   return { ...state, showSidebar: action.payload.status };
 }

  return state;
};

export default appFunctionsReducer;
