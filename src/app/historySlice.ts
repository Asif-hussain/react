import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'history',
  initialState: { searches: [] as string[] },
  reducers: {
    addSearch: (state, action: PayloadAction<string>) => {
        const uniqueSearches = new Set(state.searches);
        uniqueSearches.add(action.payload);
        state.searches = Array.from(uniqueSearches).filter(search => search.trim() !== '');
      },
  },
});

export const { addSearch } = historySlice.actions;
export default historySlice.reducer;
