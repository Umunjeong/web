import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import FirstPage from "./pages/FirstPage/index";
import Signin from "./pages/Signin/index";
import Signup_signup from "./pages/Signup";
import Home from "./pages/Home/index";
import Field from "./pages/Field/Field/index";
import Pin from "./pages/Pin/Pin/index";
import CreatePin from "./pages/Pin/CreatePin/index";
import UpdatePin from "./pages/Pin/UpdatePin/index";
import CreateField from "./pages/Field/CreateField/index";
import UpdateField from "./pages/Field/UpdateField/index";
import CreateTodo from "./pages/Todo/CreateTodo/index";
import UpdateTodo from "./pages/Todo/UpdateTodo/index";
import NotFound from "./pages/NotFound/index";

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/firstPage" element={<FirstPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup_signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/field" element={<Field />} />
            <Route path="/pin" element={<Pin />} />
            <Route path="/createPin" element={<CreatePin />} />
            <Route path="/updatePin" element={<UpdatePin />} />
            <Route path="/createField" element={<CreateField />}></Route>
            <Route path="/updateField" element={<UpdateField />}></Route>
            <Route path="/createTodo" element={<CreateTodo />}></Route>
            <Route path="/updateTodo" element={<UpdateTodo />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
