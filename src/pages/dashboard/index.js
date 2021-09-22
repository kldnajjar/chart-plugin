import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";

import chartConfiguration from "./config.json";

import MemoizedChart from "../../components/chart";
import MemoizedNumeric from "../../components/numeric";
import MemoizedContent from "../../components/content";

function componentsFactory(result) {
  let obj = null;

  switch (result.widget.type) {
    case "chart":
      obj = <MemoizedChart configuration={result.component_config} />;
      break;
    case "numeric":
      obj = <MemoizedNumeric configuration={result.component_config} />;
      break;
    case "content":
      obj = <MemoizedContent configuration={result.component_config} />;
      break;
    default:
      obj = null;
  }
  return obj;
}

function drawComponent(result) {
  const priorities = Object.keys(result);

  return (
    <Row>
      {priorities.map((item) => {
        const json_obj = result[item];

        const widget_style = {
          width: `${json_obj.widget.width ? json_obj.widget.width : "auto"}`,
          height: `${json_obj.widget.height ? json_obj.widget.height : "auto"}`,
        };

        return (
          <Col
            lg={json_obj.widget.size || 12}
            className={json_obj.widget.class ? json_obj.widget.class : ""}
            key={`widget-priority-${item}`}
            style={widget_style.width !== "auto" ? widget_style : {}}
          >
            <Card className={`chart-container`}>
              {json_obj.widget.title && (
                <CardHeader>{json_obj.widget.title}</CardHeader>
              )}

              <CardBody>{componentsFactory(json_obj)}</CardBody>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

function Dashboard() {
  return (
    <Container>
      <Row>
        <Col xl={9} lg={12}>
          {drawComponent(chartConfiguration.main)}
        </Col>
        <Col xl={3} lg={12}>
          {drawComponent(chartConfiguration.side)}
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
