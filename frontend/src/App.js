import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import Mytodo from "./screens/Mytodo/Mytodo";
import CreateNote from "./screens/CreateNote/CreateNote.js";
import Course1 from "./components/Home/courses/course1";
import Course2 from "./components/Home/courses/course2";
import Course3 from "./components/Home/courses/course3";
import Course4 from "./components/Home/courses/course4";

import { useState } from "react";
import ProfilePage from "./screens/ProfilePage/ProfilePage";
import SingleNote from "./screens/CreateNote/SingleNote.js";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <BrowserRouter>
      <Header setSearch={(s) => setSearch(s)} />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/Home" component={Home} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/createtask" component={CreateNote} />
        <Route path="/course1" component={Course1} />
        <Route path="/course2" component={Course2} />
        <Route path="/course3" component={Course3} />
        <Route path="/course4" component={Course4} />
        <Route path="/note/:id" component={SingleNote} />
        <Route path="/Mytodo" component={() => <Mytodo search={search} />} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
