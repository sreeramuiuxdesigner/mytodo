import styled from "styled-components";
import TaskDetails from "./TaskDetails";
import PropTypes from "prop-types";

const MyTodo = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  @media screen and (max-width: 825px) {
    font-size: 26px;
  }
  @media screen and (max-width: 450px) {
    font-size: 19px;
  }
`;
const TodoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 43px;
`;
const TodoItem = styled.div`
  width: 467px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 66px;
  max-width: 100%;
  @media screen and (max-width: 825px) {
    gap: 33px;
  }
`;
const FilterLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 0px 0px;
`;
const FrameChild = styled.div`
  height: 61px;
  width: 63px;
  position: relative;
  background-color: #fa7373;
  display: none;
`;
const All = styled.div`
  position: relative;
  display: inline-block;
  min-width: 24px;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const FilterValueIconChild = styled.img`
  width: 14px;
  height: 13px;
  position: relative;
  object-fit: contain;
  z-index: 1;
`;
const FilterValueIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px 0px 0px;
`;
const RectangleParent = styled.div`
  background-color: #fa7373;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 19px 6px 18px 12px;
  gap: 7px;
  font-size: 20px;
  color: #fff;
`;
const FilterLabelParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 28px;
`;
const Filter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 20px;
  box-sizing: border-box;
  max-width: 100%;
`;
const FilterParent = styled.div`
  width: 467px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 52px;
  max-width: 100%;
  @media screen and (max-width: 825px) {
    gap: 26px;
  }
`;
const TodoItemParentRoot = styled.section`
  width: 1607px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 100%;
  gap: 20px;
  text-align: left;
  font-size: 32px;
  color: #000;
  font-family: Inter;
  @media screen and (max-width: 1500px) {
    flex-wrap: wrap;
  }
`;

const FrameComponent1 = ({ className = "" }) => {
  return (
    <TodoItemParentRoot className={className}>
      <TodoItem>
        <TodoContent>
          <MyTodo>My Todo</MyTodo>
        </TodoContent>
        <TaskDetails
          nameOfficeTask1="Name : Office task - 1"
          descriptionThisIsTheDescr="Description : this is the description of my first task"
          rectangle9="/rectangle-9.svg"
          notCompleted="Not completed"
          taskStatusIncompleteIcon="/task-status-incomplete-icon.svg"
          rectangle10="/rectangle-10.svg"
          rectangle11="/rectangle-11.svg"
        />
      </TodoItem>
      <TaskDetails
        nameOfficeTask1="Name : Office task - 2"
        descriptionThisIsTheDescr="Description : this is the description of my second task"
        rectangle9="/rectangle-14.svg"
        notCompleted="Completed"
        taskStatusIncompleteIcon="/task-status-complete-icon.svg"
        rectangle10="/rectangle-15.svg"
        rectangle11="/rectangle-16.svg"
        propAlignSelf="unset"
        propWidth="467px"
      />
      <FilterParent>
        <Filter>
          <FilterLabelParent>
            <FilterLabel>
              <MyTodo>Status filter :</MyTodo>
            </FilterLabel>
            <RectangleParent>
              <FrameChild />
              <All>All</All>
              <FilterValueIcon>
                <FilterValueIconChild
                  loading="lazy"
                  alt=""
                  src="/polygon-4.svg"
                />
              </FilterValueIcon>
            </RectangleParent>
          </FilterLabelParent>
        </Filter>
        <TaskDetails
          nameOfficeTask1="Name : Office task - 3"
          descriptionThisIsTheDescr="Description : this is the description of my third task"
          rectangle9="/rectangle-19.svg"
          notCompleted="Not completed"
          taskStatusIncompleteIcon="/task-status-incomplete-icon.svg"
          rectangle10="/rectangle-20.svg"
          rectangle11="/rectangle-21.svg"
          propAlignSelf="stretch"
          propWidth="unset"
        />
      </FilterParent>
    </TodoItemParentRoot>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;

