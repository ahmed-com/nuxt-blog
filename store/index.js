import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state : {
            loadedPosts : []
        },
        getters : {
            loadedPosts(state){
                return state.loadedPosts;
            }
        },
        mutations : {
            setPosts(state,posts){
                state.loadedPosts = posts;
            }
        },
        actions : {
            fetchPosts({commit},payload){

            }
        }
    });
}

export default createStore;