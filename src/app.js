import Gallery from "./components/gallery";

import "./styles.css";
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [imgClass, setImgClass] = useState(false);
  const [img, setImg] = useState("");
  return (
    <QueryClientProvider client={queryClient}>
      <div
        id="lightbox"
        onClick={() => {
          setImgClass(false);
        }}
        className={imgClass ? "active" : ""}
      >
        <img
          className="img"
          onClick={(e) => {
            e.stopPropagation();
          }}
          src={img}
          alt=""
        />
      </div>
      <Gallery onImgClick={setImgClass} getImg={setImg} />
    </QueryClientProvider>
  );
}

export default App;
