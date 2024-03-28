"use client";
import React from "react";
import Listing from "@/components/dashboard/project/Listing";
import BuyProject from "@/components/ui/popup/BuyProject";
import SellProject from "@/components/ui/popup/SellProject";
import { useAppSelector } from "@/redux/hooks";

const page = () => {
  const { isBuyProject, isSellProject } = useAppSelector(
    (state) => state.uiState
  );
  return (
    <div className="px-4 py-6 min-h-screen">
      <Listing />
      {isBuyProject && <BuyProject />}
      {isSellProject && <SellProject />}
    </div>
  );
};

export default page;
