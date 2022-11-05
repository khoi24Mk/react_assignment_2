import React, { useState } from "react";
import { useQuery } from "react-query";
import "../styles.css";

import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import request from "../utils/request";
function Gallery({ onImgClick, getImg }) {
  const { data, status, refetch } = useQuery("meme", () =>
    request.get("/get_memes")
  );

  console.log("status: " + status);
  return (
    <div>
      <Button
        variant="outline-primary"
        className="refetch-btn"
        onClick={refetch}
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
