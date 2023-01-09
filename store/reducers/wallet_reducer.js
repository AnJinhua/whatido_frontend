import { createSlice } from '@reduxjs/toolkit';

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    currentAccount: '',
    walletBalance: '',
    ethAddress: '',
    ethEquivalent: '',
    usdEquivalent: '',
    error: '',
    isLoading: false,
    txHash: '',
    toggleSideDrawer: false,
  },

  reducers: {
    setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
    setWalletBalance: (state, action) => {
      state.walletBalance = action.payload;
    },
    setEthAddress: (state, action) => {
      state.ethAddress = action.payload;
    },
    setEthEquivalent: (state, action) => {
      state.ethEquivalent = action.payload;
    },
    setUsdEquivalent: (state, action) => {
      state.usdEquivalent = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setTxHash: (state, action) => {
      state.txHash = action.payload;
    },
    setToggleSideDrawer: (state, action) => {
      state.toggleSideDrawer = action.payload;
    },
  },
});

export const {
  setCurrentAccount,
  setWalletBalance,
  setEthAddress,
  setEthEquivalent,
  setUsdEquivalent,
  setError,
  setIsLoading,
  setTxHash,
  setToggleSideDrawer,
} = walletSlice.actions;

export default walletSlice.reducer;
