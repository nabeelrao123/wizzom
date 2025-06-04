// store/colorSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ColorState {
    color: string;
}

const initialState: ColorState = {
    color: '#020E1A',
};

const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        changeColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload;
        },
    },
});

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;

