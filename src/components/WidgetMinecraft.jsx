import React from "react";
import { Flex, Progress, Card, List, Tag, Typography, Spin } from "antd";
import { FetchMine } from "../api";

const result = await FetchMine('https://api.mcsrvstat.us/2/big.mbars.net');

const data = [
  {
    ...result,
  },
];
export function WidgetMinecraft() {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card
            title={
              <h4>
                {item.hostname}
                <Tag style={{ marginLeft: "1rem" }} color="green">
                  {item.online && item.protocol_name}
                </Tag>
              </h4>
            }
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: ".15rem solid #000000",
            }}
          >
            <Flex vertical gap="2rem" align="center">
              <img src={item.icon} alt="Offline" />
              <Typography.Title
                level={5}
                style={{
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {item.online ? item.motd.clean[0] : `Оффлайн`}
              </Typography.Title>
              <Tag
                color="green"
                style={{
                  fontSize: "1.4rem",
                  height: "2.2rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.ip + ":" + item.port}
              </Tag>
              <Progress
                percent={(item.online) && (item.players.online / item.players.max) * 100}
                steps={9}
                strokeColor={[
                  "#0bbf08",
                  "#0bbf08",
                  "#0bbf08",
                  "#9bbf08",
                  "#9bbf08",
                  "#bf7608",
                  "#bf7608",
                  "#bf2908",
                  "#bf2908",
                ]}
                format={() => {
                  if (item.online) {
                    return `${item.players.max}/${item.players.online}`
                  } 
                  return "0/0"
                }}
              />
            </Flex>
          </Card>
        </List.Item>
      )}
    />
  );
}
