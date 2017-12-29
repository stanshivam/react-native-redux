import { 
    FETCHING_CROPS, 
    FETCHING_CROPS_SUCCESS, 
    FETCHING_CROPS_FAILURE 
  } from '../constants'

export const doSubmit = (name, phone) => {
    console.log(name);

    return {
        type: 'DOSUBMIT',
        name: name,
        phone: phone
    };
};

export const selectCrop = (crop) => {

    return {
        type: 'SELECTCROP',
        crop: crop
    };
};

export function fetchCropFromAPI() {
  console.log('here in fetch crops');
    return (dispatch) => {
      dispatch(getCrops())
      fetch('https://swapi.co/api/people/')
      .then(data => data.json())
      .then(json => {
        // console.log('json:', json)
        dispatch(getCropsSuccess(json.results))
      })
      .catch(err => dispatch(getCropsFailure(err)))
    }
  }
  
  export function getCrops() {
    return {
      type: FETCHING_CROPS
    }
  }
  
  export function getCropsSuccess(data) {
    return {
      type: FETCHING_CROPS_SUCCESS,
      data,
    }
  }
  
  export function getCropsFailure() {
    return {
      type: FETCHING_CROPS_FAILURE
    }
  }
