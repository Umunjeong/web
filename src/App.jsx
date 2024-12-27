import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import FirstPage from "./pages/FirstPage/code";
import Signin from "./pages/Signin/code/index";
import Signup_info from "./pages/Signup/code/index_info";
import Signup_signup from "./pages/Signup/code/index_signup";
import Home from "./pages/Home/code/index";
import Field from "./pages/Field/Field/code/index";
import Pin from "./pages/Pin/Pin/code/index";
import CreatePin from "./pages/Pin/CreatePin/code";
import UpdatePin from "./pages/Pin/UpdatePin/code/index";
import CreateField from "./pages/Field/CreateField/code/index";
import UpdateField from "./pages/Field/UpdateField/code/index";
import CreateTodo from "./pages/Todo/CreateTodo/code/index";
import UpdateTodo from "./pages/Todo/UpdateTodo/code/index";
import Email from "./pages/Email/index";
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
            <Route path="/signup_info" element={<Signup_info />} />
            <Route path="/signup_signup" element={<Signup_signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/field" element={<Field />} />
            <Route path="/pin" element={<Pin />} />
            <Route path="/createPin" element={<CreatePin />} />
            <Route path="/updatePin" element={<UpdatePin />} />
            <Route path="/createField" element={<CreateField />}></Route>
            <Route path="/updateField" element={<UpdateField />}></Route>
            <Route path="/createTodo" element={<CreateTodo />}></Route>
            <Route path="/updateTodo" element={<UpdateTodo />}></Route>
            {/*이메일은 나중에 삭제 필요 */}
            <Route path="/email" element={<Email />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
