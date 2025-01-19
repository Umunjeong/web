import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import FirstPage from "./pages/FirstPage/index.jsx";
import Signin from "./pages/Signin/index.jsx";
import Signup from "./pages/Signup/index.jsx";
import Home from "./pages/Home/index.jsx";
import Field from "./pages/Field/Field/index.jsx";
import Pin from "./pages/Pin/Pin/index.jsx";
import CreatePin from "./pages/Pin/CreatePin/index.jsx";
import UpdatePin from "./pages/Pin/UpdatePin/index.jsx";
import CreateField from "./pages/Field/CreateField/index.jsx";
import UpdateField from "./pages/Field/UpdateField/index.jsx";
import CreateTodo from "./pages/Todo/CreateTodo/index.jsx";
import UpdateTodo from "./pages/Todo/UpdateTodo/index.jsx";
import NotFound from "./pages/NotFound/index.jsx";

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
            <Route path="/signup" element={<Signup />} />
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
