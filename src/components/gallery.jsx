import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useQuery } from "react-query";
import "../styles.css";

import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import request from "../utils/request";
function Gallery({ onImgClick, getImg }) {
  const [memes, setMemes] = useState([]);

  const { data, status } = useQuery("meme", () => request.get("/get_memes"));

  //   if (statu) {
  //     return <h1>Loading</h1>;
  //   }

  //   console.log("data: " + data);
  console.log("status: " + status);
  return (
    <div>
      <Button
        variant="secondary"
        onClick={() => {
          window.location.reload();
        }}
      >
        Hello
      </Button>
      {status === "loading" && <h1>Loading</h1>}
      {status === "error" && <h1>ERROR</h1>}
      {status === "success" && (
        <Carousel className="Gallery">
          {console.log(data.data.data.memes)}
          {console.log(data.results)}
          {data.data.data.memes.map((meme) => {
            return (
              <Carousel.Item className="item">
                <img
                  onClick={(e) => {
                    e.stopPropagation();
                    onImgClick(true);
                    getImg(meme.url);
                  }}
                  className="img"
                  key={meme.id}
                  src={meme.url}
                />
                <Carousel.Caption>
                  <h3>{meme.name}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}

export default Gallery;
