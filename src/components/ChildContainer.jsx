import React from "react";

const ChildContainer = ({ name, number }) => {
  return (
    <div className={`child ${name}`}>
      <h1>Container {number}</h1>
      <h2>Hello world</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius voluptate
        eum culpa aut vitae ab placeat sint non omnis perspiciatis velit debitis
        et suscipit, at ex ullam magnam sequi a?
      </p>
    </div>
  );
};

export default ChildContainer;
