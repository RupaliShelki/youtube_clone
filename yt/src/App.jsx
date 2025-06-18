import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
// import Feed from "./components/Feed";
// import VideoDetail from "./components/VideoDetail";
// import ChannelDetail from "./components/ChannelDetail";
// import SearchFeed from "./components/SearchFeed";
// import Navbar from "./components/Navbar"
import {Navbar, SearchFeed, ChannelDetail, VideoDetail, Feed} from "./components"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:id" element={<SearchFeed/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
