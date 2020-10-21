import cloneDeep from 'lodash/cloneDeep';

// algorithm:
// deep clone state
// change clone
// return clone

const managePhotos = (state = { photos: [], loading: false }, action) => {
  switch(action.type) {
    case 'LOADING_PHOTOS':
      return {
  
      }
    case 'DEFAULT_PHOTOS':
      console.log(action.payload.photos)
      return {
        ...state,
        photos: [...action.payload.photos]
      }

    default:
      return state
  }
}

export default managePhotos