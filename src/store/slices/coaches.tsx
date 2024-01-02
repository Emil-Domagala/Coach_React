import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  coaches: object[];
  filtredCoaches: object[];
  foundNoCoaches: boolean;
} = {
  coaches: [],
  filtredCoaches: [],
  foundNoCoaches: false,
};

const coachesSlice = createSlice({
  name: 'coaches',
  initialState: initialState,
  reducers: {
    addCoaches(state, action) {

      if (state.coaches.length === 0) {
        state.coaches = [action.payload];
        return;
      }

      const existingIDs = state.coaches.map(
        (existCoach: any) => existCoach.coachId,
      );

      if (!existingIDs.includes(action.payload.coachId)) {
        state.coaches.push(action.payload);
      }
    },

    filterCoaches(state, action) {
      if (action.payload.allCoaches.length === 0) {
        state.foundNoCoaches = true;
        console.log('all coaches empty');
        return;
      }

      if (
        action.payload.entredVal.trim() === '' &&
        action.payload.selectedValueId === 'empty'
      ) {
        state.filtredCoaches = action.payload.allCoaches;
        state.foundNoCoaches = false;
        console.log('no need to filter');
        return;
      }

      let newFiltredCoaches: any;

      console.log(action.payload);
      if (
        action.payload.allCoaches !== 0 &&
        action.payload.entredVal.trim() !== '' &&
        action.payload.selectedValueId === 'empty'
      ) {
        newFiltredCoaches = state.coaches.filter(function (coach: any) {
          return (
            coach['coachName'].includes(action.payload.entredVal) ||
            coach['coachLastname'].includes(action.payload.entredVal)
          );
        });
      } else if (
        action.payload.allCoaches !== 0 &&
        action.payload.entredVal.trim() !== '' &&
        action.payload.selectedValueId !== 'empty'
      ) {
        newFiltredCoaches = state.coaches.filter(function (coach: any) {
          return (
            (coach['coachName'].includes(action.payload.entredVal) ||
              coach['coachLastname'].includes(action.payload.entredVal)) &&
            coach['coachSize'][action.payload.selectedValueId] === true
          );
        });
      } else if (
        action.payload.allCoaches !== 0 &&
        action.payload.entredVal.trim() === '' &&
        action.payload.selectedValueId !== 'empty'
      ) {
        newFiltredCoaches = state.coaches.filter(function (coach: any) {
          return coach['coachSize'][action.payload.selectedValueId] === true;
        });
      }

      if (newFiltredCoaches.length === 0) {
        state.foundNoCoaches = true;
        state.filtredCoaches = newFiltredCoaches;
        console.log('no more coaches after filters');
        return;
      }
      console.log('found coaches after filters');
      state.foundNoCoaches = false;
      state.filtredCoaches = newFiltredCoaches;
    },
  },
});
export const coachesActions = coachesSlice.actions;
export default coachesSlice.reducer;
