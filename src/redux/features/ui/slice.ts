import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProject } from "@/types/project";

type TInitialState = {
    isLaunchApp: boolean;
    isBuyProject: boolean;
    selectedProject: IProject | null;
    isSellProject: boolean;
    isBuyOnSaleProject: boolean;
    isMobile: boolean;
};

const initialState: TInitialState = {
    isLaunchApp: false,
    isBuyProject: false,
    selectedProject: null,
    isSellProject: false,
    isBuyOnSaleProject: false,
    isMobile: false,
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setLaunchApp: (state, action: PayloadAction<boolean>) => {
            state.isLaunchApp = action.payload;
        },
        setBuyProject: (state, action: PayloadAction<boolean>) => {
            state.isBuyProject = action.payload;
        },
        setSelectedProject: (state, action: PayloadAction<null | IProject>) => {
            state.selectedProject = action.payload;
        },
        setSellPrice: (state, action: PayloadAction<boolean>) => {
            state.isSellProject = action.payload;
        },
        setBuyOnSaleProject: (state, action: PayloadAction<boolean>) => {
            state.isBuyOnSaleProject = action.payload;
        },
        setMobile: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload;
        },
    },
});

export const { setLaunchApp, setBuyProject, setSelectedProject, setSellPrice, setBuyOnSaleProject, setMobile } =
    uiSlice.actions;

export default uiSlice.reducer;
