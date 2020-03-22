import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "../../components";
import axios from "../../axios-order";
import { Theme, GlobalStyle } from "../../styles";
import { MainPage } from "../main-page/main-page";

export const App = () => {
  const [storeData, setStoreData] = useState();
  useEffect(() => {
    const getStoreData = async () => {
      const response = await axios.get("categories.json");

      setStoreData(response.data);
    };

    getStoreData();
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <MainPage categories={storeData} />
    </ThemeProvider>
  );
};
