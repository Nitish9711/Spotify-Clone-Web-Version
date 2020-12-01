export const initialState = {
    user:null,
    playlist: [],
    spotify:null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // token:"BQB64-ZeVn-SNvSVaqelj-iXKJAA2Fjmng8jNH3tvQKxZlz10LGYkSt7jiP6gwGsPmPwDJcQcSV4pqo4ALanpJ8zlJ3R8jwEsig0eTgaWYoa4UXShxTCfNc1iLxSdWf93mcgsXhDJBSj98U9HfOY2CiUgspbwD8aHADuTBVRmubx-Un3lhoO",
    token:null,
}

const reducer = (state, action) => {

    console.log(action);
    // Action-> type ,[payload]

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
                
            };
        
        case "SET_PLAYING":
            return {
            ...state,
            playing: action.playing,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        default: 
            return state;
        
    }
}
export default reducer;