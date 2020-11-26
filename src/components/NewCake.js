import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const NewCake = (props) => {
  const [number, setNumber] = useState();
  return (
    <div>
      <h2>Num Of items: {props.numOfItems}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numIceCream;
  return {
    numOfItems: itemState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCake);
