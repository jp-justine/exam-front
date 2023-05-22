import { Card, Space } from 'antd';
import { useQuery, gql } from "@apollo/client";
import { IContinents } from "../interfaces";

const CONTINENTS = gql`
  query getContinents {
    continents {
      code
      name
    }
  }
`;
function Continents() {
  const { data, loading } = useQuery(CONTINENTS);

  if (loading) {
    return <div>loading</div>;
  }

  return  data.continents.map(({ code, name }: IContinents) => (
    <div key={code}>
        <Space direction="vertical" size={16}>
    <Card title={name} extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>{code}</p>
    </Card>
  </Space>
    </div>
  ));
}

export default Continents;
