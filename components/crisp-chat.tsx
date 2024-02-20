"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1b9337de-1550-435b-aff1-c818a951fe4d");
  }, []);

  return null;
};