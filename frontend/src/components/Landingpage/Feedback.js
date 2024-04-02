import React from "react";
import Typing from "./Typing";
export default function Feedback() {
  return (
    <>
      <div className="row feedback" style={{ color: "black", fontFamily: "cursive" }}>
        <div className="col-6 px-4">
          <h3
            className="mt-4 "
            style={{ color: "#486f92", fontFamily: "cursive" }}
          >
            {" "}
            <Typing title="We value you" />
          </h3>
          <h5 className="mt-5">
            Your feedback is essential to us. Whether it's a suggestion for
            improvement or a complaint, we value your input. Take a moment to
            type it into the provided box and hit send. Your contribution plays
            a crucial role in helping us enhance our services.
          </h5>
        </div>
        <div className=" col-6 mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            style={{ backgroundColor: "#ECECEC" }}
          ></textarea>
          <button className="btn btn-primary mt-3">Send</button>
        </div>
      </div>
    </>
  );
}
