import React from "react";
import { Chart } from "react-google-charts";
import chartConfiguration from "./config.json";
import { Container, Row, Col } from "reactstrap";

function Charts() {
  const priorities = Object.keys(chartConfiguration);
  return (
    <Container>
      <Row>
        {priorities.map((item) => {
          return (
            <Col md={chartConfiguration[item].size || 12}>
              <Chart
                loader={<div>Loading Chart</div>}
                chartType={chartConfiguration[item].type}
                data={chartConfiguration[item].data}
                options={chartConfiguration[item].options}
                width={chartConfiguration[item].width}
                height={chartConfiguration[item].height}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Charts;
