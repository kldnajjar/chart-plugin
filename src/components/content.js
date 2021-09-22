import React from "react";

function Content(props) {
  const { configuration } = props;

  if (configuration === undefined) return null;

  return (
    <div
      className={`content-container ${
        configuration.class ? configuration.class : ""
      }`}
    >
      <p>{configuration.data}</p>
    </div>
  );
}

const MemoizedContent = React.memo(Content);
export default MemoizedContent;
