import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    brutto: 0,
    netto: 0,
    fee: 0,
    description: "",
    invoice: false,
    installment: false,
    receiver: {},
    sender: {},
};


const transferSlice = createSlice({
    name: "transfer",
    initialState,
    reducers: {

        setTransfer: (state, action) => {
            state.id = action.payload._id;
            state.netto = action.payload.netto;
            state.brutto = action.payload.brutto;
            state.fee = action.payload.fee;
            state.description = action.payload.description;
            state.invoice = action.payload.invoice;
            state.installment = action.payload.installment;
            state.receiver = action.payload.receiver;
            state.sender = action.payload.sender;
        },
    },
});

export default transferSlice.reducer; // Store
export const { setTransfer } = transferSlice.actions;
