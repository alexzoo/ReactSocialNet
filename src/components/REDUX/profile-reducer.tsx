import {PostsType} from "../Profile/Profile";
import {ActionTypes, profilePageType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT" ;

export type AddPostActionType = {
    type: typeof ADD_POST
}
export type ChangeNewTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

let initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 15},
            {id: 2, message: "It is my first post!", likesCount: 20}
        ],
        dialogsData: [
            {
                id: 1,
                name: "Artem",
                src: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            },
            {
                id: 2,
                name: "Maks",
                src: "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg"
            },
            {
                id: 3,
                name: "Sergey",
                src: "https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg"
            },
            {
                id: 4,
                name: "Alina",
                src: "https://www.pinkvilla.com/files/styles/gallery-section/public/mouni_roys_these_stunning_photos_will_leave_you_spellbound_check_it_out.jpg?itok=h_J5SVj3"
            },
            {
                id: 5,
                name: "Sabina",
                src: "https://i2.wp.com/www.alphr.com/wp-content/uploads/2018/04/how_to_back_up_photos_on_google_photos.jpg?resize=563%2C563&ssl=1"
            },
            {
                id: 6,
                name: "Veronika",
                src: "https://i.pinimg.com/originals/6d/c8/7a/6dc87ad6f004abcdfee40c25299b9502.jpg"
            }
        ],
        newPostText: "la-la-lend"
    };

const profileReducer = (state: profilePageType = initialState, action: ActionTypes) => {
    switch(action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text: string): ChangeNewTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export default profileReducer;