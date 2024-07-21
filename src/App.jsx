import FrameComponent from "../components/FrameComponent";
import styled from "styled-components";
import FrameComponent1 from "../components/FrameComponent1";

const PginaHomeChild = styled.div`
  width: 21px;
  height: 1px;
  position: relative;
  background-color: #d9d9d9;
  display: none;
`;
const PginaHomeRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 122px 20px 318px;
  box-sizing: border-box;
  gap: 93px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 825px) {
    gap: 46px;
  }
  @media screen and (max-width: 450px) {
    gap: 23px;
  }
`;

const PginaHome = () => {
  return (
    <PginaHomeRoot>
      <FrameComponent />
      <PginaHomeChild />
      <PginaHomeChild />
      <PginaHomeChild />
      <FrameComponent1 />
    </PginaHomeRoot>
  );
};

export default PginaHome;

