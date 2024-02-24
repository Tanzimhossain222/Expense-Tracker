import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addTransaction, deleteTransaction, editTransaction, getTransactions } from './transactionAPI';

const initialSatate = {
    transactions: [],
    isLoading: false,
    error: null,
    isError: false
}

export const fetchTransactions = createAsyncThunk('transaction/fetchTransactions', async () => {
    const transactions = await getTransactions();
    return transactions;
})

export const createTransaction = createAsyncThunk('transaction/createTransaction', async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
})

export const removeTransaction = createAsyncThunk('transaction/removeTransaction', async (id) => {
    const transaction = await deleteTransaction(id);
    return transaction;
})

export const changeTransaction = createAsyncThunk('transaction/changeTransaction', async ({ id, data }) => {
    const transaction = await editTransaction(id, data);
    return transaction;
})

//createSlice

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: initialSatate,
    extraReducers: (builder) => {
        builder.addCase(fetchTransactions.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        builder.addCase(fetchTransactions.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.transactions = action.payload;
        })
        builder.addCase(fetchTransactions.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
            state.transactions = [];
        })

        builder.addCase(createTransaction.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })

        builder.addCase(createTransaction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.transactions.push(action.payload);
        })

        builder.addCase(createTransaction.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })

        builder.addCase(removeTransaction.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })

        builder.addCase(removeTransaction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload.id);
        })

        builder.addCase(removeTransaction.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })

        builder.addCase(changeTransaction.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })

        builder.addCase(changeTransaction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.transactions = state.transactions.map(transaction => transaction.id === action.payload.id ? action.payload : transaction);
        })

        builder.addCase(changeTransaction.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })

    }
})

export default transactionSlice.reducer;









