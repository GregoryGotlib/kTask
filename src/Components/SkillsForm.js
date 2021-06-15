import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { useDispatch, useSelector } from "react-redux";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import { addSkill } from "../Redux/actions/user";
import { useHistory } from "react-router-dom";

function SkillsForm() {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [userName, setUserName] = useState("");
  const appState = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setUserName(appState.userName);
  }, [appState.userName]);

  useEffect(() => {
    setSkills(appState.skills);
  }, [appState.skills]);

  const handleSubmit = (event) => {
    dispatch(addSkill(event.target.value));
  };

  return (
    <Style.FormCard>
      <Style.FormCardHeader
        title={`Hi ${userName}`}
        subheader="Nice to meet you."
      />
      <Style.FormCardContent>
        <div>
          <Radio
            checked={skills?.indexOf("a") >= 0}
            onChange={handleSubmit}
            value="a"
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
          <Radio
            checked={skills?.indexOf("b") >= 0}
            onChange={handleSubmit}
            value="b"
            name="radio-button-demo"
            inputProps={{ "aria-label": "B" }}
          />
          <Radio
            checked={skills?.indexOf("c") >= 0}
            onChange={handleSubmit}
            value="c"
            name="radio-button-demo"
            inputProps={{ "aria-label": "C" }}
          />
        </div>
        <Style.SubmitButtonWrapper>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/")}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              history.push("brands");
            }}
          >
            Next
          </Button>
        </Style.SubmitButtonWrapper>
      </Style.FormCardContent>
    </Style.FormCard>
  );
}

export default SkillsForm;
