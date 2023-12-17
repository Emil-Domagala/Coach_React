import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coaches: [{}],
};

const coachesSlice = createSlice({
  name: 'coaches',
  initialState: initialState,
  reducers: {
    addCoaches(state, action) {
      const allCoaches = action.payload;

    //   for (const key in allCoaches) {
    //     const coach = {
    //       coachId: key,
    //       coachName: allCoaches[key].entredName,
    //       coachLastname: allCoaches[key].entredLastname,
    //       coachPrice: allCoaches[key].entredPrice,
    //       coachUrl: allCoaches[key].entredUrl,
    //       coachDesc: allCoaches[key].entredDesc,
    //       coachWays: allCoaches[key].waysValue,
    //       coachSize: allCoaches[key].sizeValue,
    //     };
    //     state.coaches.push(coach);
    //   }
    },
  },
});
export const coachesActions = coachesSlice.actions;
export default coachesSlice.reducer;
