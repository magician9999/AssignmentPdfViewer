import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const DropdownBox = () => {

  const { t } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };



  return (
    <>
     <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
               Choose Language 
               </Dropdown.Toggle>

              <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleLanguageChange("fr")}>English(default) to French</Dropdown.Item>
              <Dropdown.Item >Hindi</Dropdown.Item>
              <Dropdown.Item >Tamil</Dropdown.Item>
              </Dropdown.Menu>
      </Dropdown>
      
    </>
  );
};

export default DropdownBox;