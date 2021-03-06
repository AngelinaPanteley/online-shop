import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Header, MainPage, ProductPage } from "../../components";
import axios from "../../axios-order";
import { Theme, GlobalStyle } from "../../styles";

export const BasketContext = createContext({
  products: [],
  addToBasket: () => {}
});

export const App = () => {
  const [storeData, setStoreData] = useState();
  const [basketProducts, setBasketProducts] = useState([]);

  useEffect(() => {
    const getStoreData = async () => {
      const response = await axios.get("categories.json");

      setStoreData(response.data);
    };

    getStoreData();
  }, []);

  const basketContext = {
    products: basketProducts,
    addToBasket: product => {
      setBasketProducts(products => [...products, product]);
      console.log([...basketProducts, product]);
    }
  };

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter basename="/">
        <BasketContext.Provider value={basketContext}>
          <GlobalStyle />
          <Header />
          {storeData && (
            <Switch>
              <Route path="/product/:productId">
                <ProductPage storeData={storeData} />
              </Route>
              <Route path="/">
                <MainPage
                  storeData={storeData}
                />
              </Route>
            </Switch>
          )}
        </BasketContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
