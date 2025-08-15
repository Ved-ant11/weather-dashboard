import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface WeatherState {
  city: string;
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  city: "",
  data: null,
  loading: false,
  error: null,
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(import.meta.env.VITE_RAPIDAPI_ENDPOINT, {
        params: {
          place: city, 
          units: "metric", 
          lang: "en",
          mode: "json",
        },
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
          Accept: "application/json",
        },
      });
      console.log(response.data); 
      if (!response.data || response.data.cod !== 200) {
        return rejectWithValue(response.data?.message || "Weather not found");
      }
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Error fetching weather data"
      );
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setCity } = weatherSlice.actions;
export default weatherSlice.reducer;
