import styled from "@emotion/styled";
import useToggle from "../hooks/useToggle";
import { ChangeEvent } from "react";

interface ToggleProps {
  on?: boolean;
  onChange?(e: ChangeEvent<HTMLInputElement>): void
}

const Toggle = ({on = false, onChange, ...props}: ToggleProps) => {
  const [checked, toggle] = useToggle(on);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    toggle();
    onChange?.(e);
  }

  return (
    <ToggleContainer {...props}>
      <ToggleInput type="checkbox" onChange={handleChange} checked={checked} />
      <ToggleSwitch />
    </ToggleContainer>
  );
}

export default Toggle;

const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const ToggleSwitch = styled.div`
  width: 54px;
  height: 26px;
  padding: 2px;
  border-radius: 15px;
  background-color: #ccc;
  box-sizing: border-box;
  transition: background-color 0.2s ease-out;

  &:after {
    content: '';
    position: relative;
    left: 0;
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: white;
    transition: left 0.2s ease-out;
  }
`;

const ToggleInput = styled.input`
  display: none;

  /* checked일 때, ToggleInput 바로 옆의 div 태그의 배경색 지정 */
  &:checked + div {
    background: royalblue;
  }

  /* checked일 때, ToggleInput 바로 옆의 div 태그의 after요소의 위치 지정 */
  &:checked + div:after {
    left: calc(100% - 22px);
  }
`;