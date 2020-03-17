export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';

export function fetchProfile() {
  return (dispatch) => {
        let token = 'YOUR_TOKEN_FROM_GITHUB';
        let headers = new Headers({
            "Content-Type": "application/json",
            "Authorization":"token "+token
        });
        fetch('https://api.github.com/users/mchavarria', {
            method: 'GET',
            headers: headers
        })
        .then(response => response.json()) 
        .then(json => {
            console.log(json)
            dispatch(loadProfile(json))
        })
        .catch(error => console.log(error));
    }
}

export function postInfo(post) {
  return (dispatch) => {
    fetch('http://www.json-generator.com/api/json/get/bVzgnqfPdu?indent=2', {
        method: 'POST',
        body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        dispatch(updateProfile(json))
    })
    .catch(error => console.log(error));
  }
}

export function loadProfile(results) {
  return {
    type : PROFILE_FETCHED,
    payload : results
  }
}

export function updateProfile(info) {
  return {
    type : PROFILE_EDITED,
    payload : info
  }
}
