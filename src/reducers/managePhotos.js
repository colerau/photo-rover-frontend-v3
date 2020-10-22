import cloneDeep from 'lodash/cloneDeep';

// algorithm:
// deep clone state
// change clone
// return clone

const managePhotos = (state = { photos: [], loading: false }, action) => {

  switch(action.type) {

    case 'LOADING_PHOTOS':
      return {
        ...state,
        loading: true
      }

    case 'DEFAULT_PHOTOS':
      return {
        ...state,
        photos: [...action.payload.photos],
        loading: false
      }

    default:
      return state
  }
}

export default managePhotos