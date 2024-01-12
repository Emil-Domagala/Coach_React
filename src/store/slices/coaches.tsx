import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  coaches: object[];
  filtredCoaches: object[];
  stateOfCoachFinding: string;
  initialized: boolean;
} = {
  coaches: [],
  filtredCoaches: [],
  stateOfCoachFinding: '',
  initialized: false,
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
      state.initialized = true;
    },

    filterCoaches(state, action) {
      if (action.payload.allCoaches.length === 0) {
        state.stateOfCoachFinding = 'No coaches yet';
        return;
      }

      if (
        action.payload.entredVal.trim() === '' &&
        action.payload.selectedValueId === 'empty'
      ) {
        state.filtredCoaches = action.payload.allCoaches;
        return;
      }

      let newFiltredCoaches: any;
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
        state.filtredCoaches = newFiltredCoaches;
        state.stateOfCoachFinding = 'Found no coaches.';
        return;
      }
      state.filtredCoaches = newFiltredCoaches;
    },
  },
});
export const coachesActions = coachesSlice.actions;
export default coachesSlice.reducer;
