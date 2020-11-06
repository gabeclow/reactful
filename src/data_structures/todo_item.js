import React from "react";
import { Card, ListGroupItem } from "react-bootstrap";

function TodoItem(props) {
  return (
    <Card style={{ width: "18rem", margin: "2%" }}>
      <Card.Body>
        <Card.Title>TO DO:</Card.Title>
        <ListGroupItem>
          <input
            type="checkbox"
            checked={props.completed}
            handleChange={() => props.isCompleted(props.id)}
          />
          {props.task}
        </ListGroupItem>
      </Card.Body>
    </Card>
  );
}

export default TodoItem;
