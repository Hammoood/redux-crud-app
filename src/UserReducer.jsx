import { createSlice } from '@reduxjs/toolkit';
import { userList } from './Data';

const userSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const u = state.find(user => user.id == id);
            if(u) {
                return state.filter(f => f.id != id)
            }
        },
        updateUser: (state, action) => {
            const {id, name, email} = action.payload;
            const user = state.find(u => u.id == id);
            if (user) {
                user.name = name;
                user.email = email;
            }
        },
    },
});

export const {addUser, deleteUser, updateUser} = userSlice.actions;
export default userSlice.reducer;