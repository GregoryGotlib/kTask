import React, { useState, useEffect } from "react";
import * as Style from "./style";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "../Redux/actions/user";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

function NameForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const appState = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setName(appState.userName);
  }, [appState]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const validateNameValue = () => {
    if (validator.isEmpty(name)) {
      setNameError("Please write name");
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  const handleSubmit = () => {
    const isNameValid = validateNameValue();
    if (isNameValid) {
      dispatch(addName(name));
      history.push("skills");
    }
  };

  return (
    <Style.FormCard>
      <Style.FormCardHeader title="What is your name?" />
      <Style.FormCardContent>
        <Style.NameFieldWrapper>
          <Style.TextFieldWrapper
            id="outlined-multiline-flexible"
            label="My name is"
            multiline
            error={nameError ? true : false}
            rowsMax={8}
            value={name}
            onChange={handleNameChange}
            variant="outlined"
            helperText={nameError}
          />
        </Style.NameFieldWrapper>
        <Style.SubmitButtonWrapper>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Next
          </Button>
        </Style.SubmitButtonWrapper>
      </Style.FormCardContent>
    </Style.FormCard>
  );
}

export default NameForm;
