import React from "react";
import { Chart } from "react-google-charts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function ChartWrapper(props) {
  const { configuration } = props;

  if (configuration === undefined) return null;

  return (
    <Chart
      loader={
        <div className="loading-chart">
          <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
          Loading Chart
        </div>
      }
      chartType={configuration.type}
      data={configuration.data}
      options={configuration.options}
      width={configuration.width}
      height={configuration.height}
      className={configuration.class ? configuration.class : ""}
    />
  );
}

const MemoizedChart = React.memo(ChartWrapper);
export default MemoizedChart;
