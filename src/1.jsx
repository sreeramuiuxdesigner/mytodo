import styled from "styled-components";
import PropTypes from "prop-types";

const MyTodo = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  @media screen and (max-width: 825px) {
    font-size: 51px;
  }
  @media screen and (max-width: 450px) {
    font-size: 38px;
  }
`;
const TodoContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 26px 0px 20px;
`;
const FrameChild = styled.div`
  height: 77px;
  width: 511px;
  position: relative;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const TodoName = styled.div`
  position: relative;
  display: inline-block;
  min-width: 105px;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const RectangleParent = styled.div`
  flex: 1;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 25px 29px 24px;
  min-width: 332px;
  max-width: 100%;
  @media screen and (max-width: 1500px) {
    flex: 1;
  }
`;
const TodoDescription = styled.div`
  position: relative;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const AddTodoButton = styled.div`
  flex: 0.969;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 25px 36px 24px;
  min-width: 332px;
  max-width: 100%;
  @media screen and (max-width: 1500px) {
    flex: 1;
  }
`;
const AddTodoButtonItem = styled.div`
  height: 77px;
  width: 340px;
  position: relative;
  border-radius: 10px;
  background-color: #1cbd23;
  display: none;
  max-width: 100%;
`;
const AddTodo = styled.div`
  position: relative;
  display: inline-block;
  min-width: 88px;
  z-index: 1;
`;
const AddTodoButton1 = styled.div`
  width: 340px;
  border-radius: 10px;
  background-color: #1cbd23;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 27px 20px 26px;
  box-sizing: border-box;
  white-space: nowrap;
  max-width: 100%;
  color: #fff;
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 72px;
  max-width: 100%;
  font-size: 20px;
  @media screen and (max-width: 1500px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 825px) {
    gap: 36px;
  }
  @media screen and (max-width: 450px) {
    gap: 18px;
  }
`;
const TodoItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 56px;
  max-width: 100%;
  @media screen and (max-width: 825px) {
    gap: 28px;
  }
`;
const TodoItemWrapperRoot = styled.section`
  width: 1608px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 48px 0px 54px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: 64px;
  color: #000;
  font-family: Inter;
  @media screen and (max-width: 1200px) {
    padding-left: 27px;
    padding-right: 24px;
    box-sizing: border-box;
  }
`;

const FrameComponent = ({ className = "" }) => {
  return (
    <TodoItemWrapperRoot className={className}>
      <TodoItem>
        <TodoContent>
          <MyTodo>My todo</MyTodo>
        </TodoContent>
        <FrameParent>
          <RectangleParent>
            <FrameChild />
            <TodoName>todo Name</TodoName>
          </RectangleParent>
          <AddTodoButton>
            <FrameChild />
            <TodoDescription>todo Description</TodoDescription>
          </AddTodoButton>
          <AddTodoButton1>
            <AddTodoButtonItem />
            <AddTodo>Add todo</AddTodo>
          </AddTodoButton1>
        </FrameParent>
      </TodoItem>
    </TodoItemWrapperRoot>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;

