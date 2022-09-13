const INITIAL_STATE = {
    collaborateur: []
}


function collabReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case "LOADARTICLES": {
            return {
                ...state,
                collaborateur: action.payload
            }
        }
    }

    return state;
}
export default collabReducer;



export const getArticles = () => dispatch => {

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: 'LOADARTICLES',
            payload: data
        })
    })

}