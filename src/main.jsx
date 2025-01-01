import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import PostListPage from "./pages/PostListPage.jsx";
import SinglePostPage from "./pages/SinglePostPage.jsx";
import PublishPost from "./pages/PublishPost.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="postlist" element={<PostListPage />} />
        <Route path="singlepost" element={<SinglePostPage />} />
        <Route path="publishpost" element={<PublishPost />} />

        {/* <Route element={<AuthLayout />}> */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
