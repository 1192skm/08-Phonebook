import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk("contacts/addContact",
    async (newContact, thunkApi) => {
        try {
            const response = await axios.post("/contacts", newContact);
            return response.data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

