import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import TodoData from "../mock_data/todo_data";
import TodoStructure from "../data_structures/todo_item";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = { count: 0, completed: false, todos: TodoData };
    this.handleClick = this.handleClick.bind(this);
    this.isCompleted = this.isCompleted.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if( todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return 
    })
  }

  render() {
    const todoData = this.state.todos.map((item) => (
      <TodoStructure
        key={item.id}
        task={item.task}
        completed={item.completed}
        handleChange={this.isCompleted}
      />
    ));

    return (
      <div style={{ paddingTop: 20 }}>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <p>
                {this.state.count}
                <Button variant="primary" onClick={this.handleClick}>
                  Change State
                </Button>
              </p>
            </Col>
            <Col>{todoData}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Todo;
