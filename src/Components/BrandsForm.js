import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { useDispatch, useSelector } from "react-redux";
import { addBrand } from "../Redux/actions/user";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

function BrandsForm() {
  const [brand, setBrand] = useState("");
  const [brands, setBrands] = useState([]);
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.app);
  const history = useHistory();

  useEffect(() => {
    setBrands(appState.brands);
  }, [appState.brands]);

  const handleBrandsChange = (event) => {
    setBrand(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(addBrand(brand));
    setBrand("");
  };

  return (
    <Style.FormCard>
      <Style.FormCardHeader
        title="Brands you worked with"
        subheader="For example: Zara, Nike, etc .."
      />
      <Style.FormCardContent>
        <Style.NameFieldWrapper>
          <Style.TextFieldWrapper
            id="outlined-multiline-flexible"
            label="Brand"
            multiline
            rowsMax={8}
            value={brand}
            onChange={handleBrandsChange}
            variant="outlined"
          />
        </Style.NameFieldWrapper>
        <Style.BrandsWrapper>
          {brands?.map((brand) => `@${brand} `)}
        </Style.BrandsWrapper>
        <Style.SubmitButtonWrapper>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("skills")}
          >
            back
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Style.SubmitButtonWrapper>
      </Style.FormCardContent>
    </Style.FormCard>
  );
}

export default BrandsForm;
