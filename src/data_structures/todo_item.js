import React from "react";
import { Card, ListGroupItem } from "react-bootstrap";

function TodoItem(props) {

  const completedStyle={
    fontStyle: "italic",
    color:"#cdcdcd",
    textDecoration: "line-through"
  }

  return (
    <Card style={{ width: "18rem", margin: "2%" }}>
      <Card.Body>
        <ListGroupItem>
          <input
            type="checkbox"
            checked={props.completed}
            onChange={() => props.handleChange(props.id)}
          />
          <p style={props.completed ? completedStyle: null}>{props.task}</p>
        </ListGroupItem>
      </Card.Body>
    </Card>
  );
}

export default TodoItem;
