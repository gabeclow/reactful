import React from "react";
import { Card, ListGroupItem } from "react-bootstrap";

function TeaserCard(props) {
  console.log("test");
  return (
    <Card style={{width:'18rem', margin:'2%'}}>
      <Card.Body>
        <Card.Title>Title: {props.title}</Card.Title>
        <ListGroupItem>Name: {props.name}</ListGroupItem>
        <ListGroupItem style={{display: props.email ? "block" : "none"}}>Email: {props.email}</ListGroupItem>
      </Card.Body>
    </Card>
  );
}
export default TeaserCard;
