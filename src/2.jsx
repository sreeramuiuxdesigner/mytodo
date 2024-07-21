import styled from "styled-components";
import PropTypes from "prop-types";

const TaskDetailsChild = styled.div`
  width: 467px;
  height: 357px;
  position: relative;
  border-radius: 10px;
  background-color: #e1ffcf;
  display: none;
  max-width: 100%;
`;
const NameOffice = styled.div`
  position: relative;
  z-index: 2;
`;
const Status1 = styled.div`
  position: relative;
  display: inline-block;
  min-width: 49px;
  z-index: 2;
`;
const TaskStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px 0px 0px;
`;
const TaskStatusValueChild = styled.img`
  height: 49px;
  width: 172px;
  position: relative;
  border-radius: 5px;
  display: none;
`;
const NotCompleted = styled.div`
  position: relative;
  display: inline-block;
  min-width: 113px;
  z-index: 3;
`;
const TaskStatusIncompleteIcon = styled.img`
  height: 15px;
  width: 18px;
  position: relative;
  object-fit: contain;
  z-index: 3;
`;
const TaskStatusValue = styled.div`
  border-radius: 5px;
  background-color: #fa7373;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px 14px;
  gap: 13px;
  z-index: 2;
  color: #fff;
`;
const TaskStatusParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 29px;
`;
const TaskNameAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 37.5px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: 19px;
  }
`;
const TaskNameDescription = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 3px;
  box-sizing: border-box;
  max-width: 100%;
`;
const TaskActionButtonsChild = styled.img`
  height: 36px;
  width: 115px;
  position: relative;
  border-radius: 5px;
  display: none;
`;
const Edit = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 29px;
  z-index: 3;
`;
const TaskActionButtons = styled.div`
  border-radius: 5px;
  background-color: #26b668;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 43px 9px;
  z-index: 2;
`;
const Delete = styled.div`
  position: relative;
  display: inline-block;
  min-width: 48px;
  z-index: 3;
`;
const TaskActionButtons1 = styled.div`
  border-radius: 5px;
  background-color: #f31414;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 33px 9px 34px;
  z-index: 2;
`;
const TaskActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 28px;
  color: #fff;
`;
const TaskDetailsRoot = styled.div`align-self: stretch;
  border-radius: 10px;
  background-color: #e1ffcf;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 45px 16px 28px;
  box-sizing: border-box;
  gap: 86px;
  max-width: 100%;
  z-index: 1;
  text-align: left;
  font-size: 16px;
  color: #000;
  font-family: Inter;
  @media screen and (max-width: 825px) {
  gap: 43px;
  
  }
  @media screen and (max-width: 450px) {
  padding-top: 29px;
  padding-bottom: 20px;
  box-sizing: border-box;
  
  }
  align-self: ${(p) => p.propAlignSelf}
  width: ${(p) => p.propWidth}
`;

const TaskDetails = ({
  className = "",
  nameOfficeTask1,
  descriptionThisIsTheDescr,
  rectangle9,
  notCompleted,
  taskStatusIncompleteIcon,
  rectangle10,
  rectangle11,
  propAlignSelf,
  propWidth,
}) => {
  return (
    <TaskDetailsRoot
      propAlignSelf={propAlignSelf}
      propWidth={propWidth}
      className={className}
    >
      <TaskDetailsChild />
      <TaskNameDescription>
        <TaskNameAndDescription>
          <NameOffice>{nameOfficeTask1}</NameOffice>
          <NameOffice>{descriptionThisIsTheDescr}</NameOffice>
          <TaskStatusParent>
            <TaskStatus>
              <Status1>Status</Status1>
            </TaskStatus>
            <TaskStatusValue>
              <TaskStatusValueChild alt="" src={rectangle9} />
              <NotCompleted>{notCompleted}</NotCompleted>
              <TaskStatusIncompleteIcon alt="" src={taskStatusIncompleteIcon} />
            </TaskStatusValue>
          </TaskStatusParent>
        </TaskNameAndDescription>
      </TaskNameDescription>
      <TaskActions>
        <TaskActionButtons>
          <TaskActionButtonsChild alt="" src={rectangle10} />
          <Edit>edit</Edit>
        </TaskActionButtons>
        <TaskActionButtons1>
          <TaskActionButtonsChild alt="" src={rectangle11} />
          <Delete>delete</Delete>
        </TaskActionButtons1>
      </TaskActions>
    </TaskDetailsRoot>
  );
};

TaskDetails.propTypes = {
  className: PropTypes.string,
  nameOfficeTask1: PropTypes.string,
  descriptionThisIsTheDescr: PropTypes.string,
  rectangle9: PropTypes.string,
  notCompleted: PropTypes.string,
  taskStatusIncompleteIcon: PropTypes.string,
  rectangle10: PropTypes.string,
  rectangle11: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default TaskDetails;

