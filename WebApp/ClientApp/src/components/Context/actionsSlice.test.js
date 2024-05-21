import { actionsSlice, setCanDouble, setCanSplit, setCanInsurance, resetActions } from '../actionsSlice';

describe('actionsSlice', () => {
    const initialState = {
        canDouble: true,
        canSplit: false,
        canInsurance: false
    };

    it('should return the initial state', () => {
        expect(actionsSlice.reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle setCanDouble', () => {
        const previousState = initialState;
        const expectedState = { ...previousState, canDouble: false };
        expect(actionsSlice.reducer(previousState, setCanDouble(false))).toEqual(expectedState);
    });

    it('should handle setCanSplit', () => {
        const previousState = initialState;
        const expectedState = { ...previousState, canSplit: true };
        expect(actionsSlice.reducer(previousState, setCanSplit(true))).toEqual(expectedState);
    });

    it('should handle setCanInsurance', () => {
        const previousState = initialState;
        const expectedState = { ...previousState, canInsurance: true };
        expect(actionsSlice.reducer(previousState, setCanInsurance(true))).toEqual(expectedState);
    });

    it('should handle resetActions', () => {
        const modifiedState = {
            canDouble: false,
            canSplit: true,
            canInsurance: true
        };
        expect(actionsSlice.reducer(modifiedState, resetActions())).toEqual(initialState);
    });
});
