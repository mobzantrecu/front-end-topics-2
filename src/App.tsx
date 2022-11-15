import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import "./components/web/rich-text";
import NotFoundPage from "./pages/404";

const Home = React.lazy(() => import("./pages/Home"));
const Detail = React.lazy(() => import("./pages/Detail"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contacts/:contactId" element={<Detail />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
//#989898 Debit card
