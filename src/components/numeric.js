import React from "react";

function Numeric(props) {
  const { configuration } = props;

  if (configuration === undefined) return null;

  return (
    <div
      className={`numeric-container ${
        configuration.class ? configuration.class : ""
      }`}
    >
      <h5>{configuration.data}</h5>
    </div>
  );
}

const MemoizedNumeric = React.memo(Numeric);
export default MemoizedNumeric;
