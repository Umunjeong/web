import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import FirstPage from "./pages/FirstPage/code";
import Signin from "./pages/Signin/code/index";
import Signup_info from "./pages/Signup/code/index_info";
import Signup_signup from "./pages/Signup/code/index_signup";
import Home from "./pages/Home/code/index";

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/firstPage" element={<FirstPage />} />
            <Route path="/signin" element={<Signin />} />'
            <Route path="/signup_info" element={<Signup_info />} />'
            <Route path="/signup_signup" element={<Signup_signup />} />'
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
