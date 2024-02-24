import axiosInstance from "../../../api/axiosInstance";

export const getTransactions = async ()=>{
    const response = await axiosInstance.get('/transactions');
    return response.data;
}

export const addTransaction = async (data)=>{
    const res = await axiosInstance.post('/transactions', data);
    return res.data;
}

export const editTransaction = async (id, data)=>{
    const res = await axiosInstance.put(`/transactions/${id}`, data);
    return res.data;
}

export const deleteTransaction = async (id)=>{
    const res = await axiosInstance.delete(`/transactions/${id}`);
    return res.data;
}

