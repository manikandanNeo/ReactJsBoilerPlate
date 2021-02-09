import React from "react";
import { connect, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  setCount,
  setSteps,
} from "../../store/actions/counterActions";
const Home = (props) => {
  const { counter = 1, steps: { step = 1 } = { step: 1 } } = props;
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1 className="display-4">Counter</h1>
      </div>
      <section className="col-lg-5 col-md-12 col-sm-12">
        <div className="row mt-2 mb-2">
          <input
            type="text"
            value={step}
            onChange={(event) => {
              dispatch(setSteps(event.target.value));
            }}
            className="flex-grow-1"
          />
        </div>
        <div className="row ">
          <button
            type="button"
            onClick={() => dispatch(increment(step))}
            className="btn btn-primary flex-grow-1 mr-2"
          >
            {`+${step}`}
          </button>
          <button
            type="button"
            onClick={() => dispatch(decrement(step))}
            className="btn btn-secondary flex-grow-1"
          >
            {`-${step}`}
          </button>
        </div>
        <div className="row mt-2 mb-2">
          <input
            type="text"
            value={counter}
            onChange={(event) => {
              dispatch(setCount(event.target.value));
            }}
            className="flex-grow-1"
          />
        </div>
      </section>
    </>
  );
};

const mapStatesToProps = (state) => {
  return { counter: state.counter.counter, steps: state.counter.steps };
};
export default connect(mapStatesToProps)(Home);
