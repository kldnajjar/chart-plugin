import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";

import { getData } from "../../services/demo";
import componentsConfig from "./config.json";

import MemoizedChart from "../../components/chart";
import MemoizedNumeric from "../../components/numeric";
import MemoizedContent from "../../components/content";

class Dashboard extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const priorities = componentsConfig.sort(this.compare);

    const data = priorities.map((item) => {
      const result = new Promise((resolve, reject) => {
        resolve(getData(item.type, item.data));
      });

      return result;
    });

    Promise.all(data).then((values) => {
      this.setState({ data: values });
    });
  }

  componentsFactory(data, item) {
    let obj = null;
    switch (item.type) {
      case "chart":
        obj = <MemoizedChart configuration={data} />;
        break;
      case "numeric":
        obj = <MemoizedNumeric configuration={data} />;
        break;
      case "content":
        obj = <MemoizedContent configuration={data} />;
        break;
      default:
        obj = null;
    }

    return obj;
  }

  compare(a, b) {
    const priority_a = a.priority;
    const priority_b = b.priority;

    let comparison = 0;
    if (priority_a > priority_b) {
      comparison = 1;
    } else if (priority_a < priority_b) {
      comparison = -1;
    }

    return comparison;
  }

  render() {
    const { data } = this.state;
    const priorities = componentsConfig.sort(this.compare);

    if (!data.length) return null;

    return (
      <Container>
        <Row>
          <Col>
            <Row>
              {priorities.map((item, index) => {
                const widget_style = {
                  width: `${item.width ? item.width : "auto"}`,
                  height: `${item.height ? item.height : "auto"}`,
                };

                return (
                  <Col
                    lg={item.size || 12}
                    className={item.class ? item.class : ""}
                    key={`widget-priority-${index}`}
                    style={widget_style.width !== "auto" ? widget_style : {}}
                  >
                    <Card className={`card-container`}>
                      {item.title && <CardHeader>{item.title}</CardHeader>}

                      <CardBody>
                        {this.componentsFactory(data[index], item)}
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
