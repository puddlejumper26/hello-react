import About from "./pages/About";
import Home from "./pages/Home";
import News from "./pages/Home/News";
import MyNavLink from "./components/MyNavLink";
import Count from "./components/Count";
import { NavLink, Routes, Link, Route } from "react-router-dom";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Count />
    </div>
  );
}
