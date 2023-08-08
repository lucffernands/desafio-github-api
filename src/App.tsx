import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Profile from "./routes/Home/Profile";
import Github from "./routes/Home/Profile/Github";
import NotFound from "./routes/Home/Profile/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<HomeBody />} />
          <Route path="/profile" element={<Profile />} >
            <Route path="/profile/github" element={<Github />} />
            <Route path="/profile/NotFound" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App
