import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { Header, MainPage, ProductPage } from "../../components";
import axios from "../../axios-order";
import { Theme, GlobalStyle } from "../../styles";

export const App = () => {
  const [storeData, setStoreData] = useState();
  const [currentProduct, setCurrentProduct] = useState();
  useEffect(() => {
    const getStoreData = async () => {
      const response = await axios.get("categories.json");

      setStoreData(response.data);
      setCurrentProduct(response.data.category01.products.product01);
    };

    getStoreData();
  }, []);

  const handleProductChange = (product) => {
    setCurrentProduct(product);
  }

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <MainPage categories={storeData} handleProductClick={handleProductChange}/>
      <ProductPage product={currentProduct} />
    </ThemeProvider>
  );
};
