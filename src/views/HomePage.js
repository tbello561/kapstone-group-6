import { useState, useEffect, useRef } from "react";
import { css } from "@emotion/core";
import useStore from "../store/store";
import ricardsimonsGif from "./GifImages/richardSimonsApp.gif";
import fitnessOne from "../assets/images/fitness1.jpg";
import fitnessTwo from "../assets/images/fitness2.jpg";
import fitnessThree from "../assets/images/fitness3.jpg";
import fitnessFour from "../assets/images/fitness4.jpg";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function HomePage(props) {
  const users = useStore((state) => state.users);
  const setUsers = useStore((state) => state.setUsers);
  const currentUser = useStore((state) => state.currentUser);

  const currentUserIndex = users.findIndex((user) => {});

  return (
    <div>
      <h1>Welcome {currentUser.displayName}!</h1>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={fitnessOne} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={fitnessTwo} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={fitnessThree} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={fitnessFour} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <h3>
        Get fit quick with a fun yet cheesey 80's themed workout planner! For
        only 10 minutes a day you can expect to see some truly outstanding
        results for your body using routines like The Russian Twist, Overhead
        Press, Burpees and maybe even some Jazzercize!
      </h3>
      <p></p>
    </div>
  );
}

export default HomePage;
