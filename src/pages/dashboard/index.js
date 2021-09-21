import React from "react";
import { Container, Row, Col, Card, CardTitle } from "reactstrap";

import chartConfiguration from "./config.json";

import ChartWrapper from "../../components/chart";

function componentsFactory(result) {
  let obj = null;

  switch (result.widget.type) {
    case "chart":
      obj = <ChartWrapper configuration={result.component_config} />;
      break;
    default:
      obj = <ChartWrapper configuration={result.component_config} />;
  }
  return obj;
}

function Dashboard() {
  const priorities = Object.keys(chartConfiguration);

  return (
    <Container>
      <Row>
        {priorities.map((item) => {
          const widget_style = {
            width: `${
              chartConfiguration[item].widget.width
                ? chartConfiguration[item].widget.width
                : "auto"
            }`,
            height: `${
              chartConfiguration[item].widget.height
                ? chartConfiguration[item].widget.height
                : "auto"
            }`,
          };

          return (
            <Col
              md={chartConfiguration[item].widget.size || 12}
              className={
                chartConfiguration[item].widget.class
                  ? chartConfiguration[item].widget.class
                  : ""
              }
              key={`widget-priority-${item}`}
              style={widget_style}
            >
              <Card body className={`chart-container`}>
                {chartConfiguration[item].widget.title && (
                  <CardTitle tag="h5">
                    {chartConfiguration[item].widget.title}
                  </CardTitle>
                )}

                {componentsFactory(chartConfiguration[item])}
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Dashboard;
