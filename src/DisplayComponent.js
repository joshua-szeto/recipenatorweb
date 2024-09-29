import { Card, Button, Popconfirm, Row, Col } from "antd";

const DisplayComponent = (props) => {
  const gridStyle = {
    width: "20%",
    textAlign: "center",
  };
  const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
  console.log('props: ', props)
  return (
    <div>
      <Card>
        {props.items.map((c) => (
          <Card.Grid style={gridStyle}>
            <Row gutter={16} style={{ paddingBottom: "10px" }}>
              <Col span={24}>
                <Card title={c.recipe} bordered={false}
                cover={<img alt="example" src={c.imageUrl} />}
>
        Calories: {c.calories}
      </Card>
              </Col>
            </Row>
          </Card.Grid>
        ))}
      </Card>
    </div>
  );
};

export default DisplayComponent;
