import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Navigation,
    Footer,
    Home,
    About,
    Contact,
    Blog,
    Posts,
    Post, Science, Events, Education,
} from "./components";

ReactDOM.render(
    <Router>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/science" element={<Science/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/education" element={<Education/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />}>
                <Route path="" element={<Posts />} />
                <Route path=":postSlug" element={<Post />} />
            </Route>
        </Routes>
        <Footer />
    </Router>,

    document.getElementById("root")
);

