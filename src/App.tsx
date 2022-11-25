import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { AlertProvider } from "./components/AlertPortal/AlertPortal";
import ErrorBoundary from "./components/ErrorBoundary";
import "./components/web/rich-text";
import NotFoundPage from "./pages/404";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   gql,
// } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "react-query";

// const client = new ApolloClient({
//   uri: "https://rickandmortyapi.com/graphql",
//   cache: new InMemoryCache(),
// });

const queryClient = new QueryClient();

const Home = React.lazy(() => import("./pages/Home"));
const Detail = React.lazy(() => import("./pages/Detail"));

const theme = {
  main: "mediumseagreen",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <ApolloProvider client={client}> */}
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <AlertProvider>
            <Suspense>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="contacts/:contactId" element={<Detail />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </BrowserRouter>
            </Suspense>
          </AlertProvider>
        </ErrorBoundary>
      </QueryClientProvider>
      {/* </ApolloProvider> */}
    </ThemeProvider>
  );
}

export default App;
