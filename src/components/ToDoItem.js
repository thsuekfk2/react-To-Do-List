import React from "react";
import styled from "styled-components";

const TodoItemBlock = styled.div``;

const Remove = styled.div``;

const CheckCircle = styled.div``;

const Text = styled.div``;

function TodoItem() {
  return (
    <TodoItemBlock>
      <CheckCircle></CheckCircle>
      <Text></Text>
      <Remove></Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
