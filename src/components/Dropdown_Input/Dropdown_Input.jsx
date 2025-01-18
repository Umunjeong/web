import React, { useState } from "react";
import {
  DropdownWrapper,
  DropdownButton,
  DropdownList,
  DropdownItem,
} from "../styles/custom_dropdown";

function CustomDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelection = (selectedValue) => {
    onChange(selectedValue); // 선택된 값 처리
    setIsOpen(false); // 드롭다운 닫기
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}>
        {value || "Select an option"}
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          <DropdownItem onClick={() => handleSelection("web")}>
            web
          </DropdownItem>
          <DropdownItem onClick={() => handleSelection("server")}>
            server
          </DropdownItem>
          <DropdownItem onClick={() => handleSelection("app")}>
            app
          </DropdownItem>
          <DropdownItem onClick={() => handleSelection("work")}>
            work
          </DropdownItem>
          <DropdownItem onClick={() => handleSelection("other")}>
            other
          </DropdownItem>
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}

export default CustomDropdown;
