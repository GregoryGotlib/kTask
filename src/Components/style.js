import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 90px 0 20px;
`;

export const TextFieldWrapper = styled(TextField)`
  .MuiOutlinedInput-root {
    background-color: white;
  }
`;

export const FormCard = styled(Card)`
  width: 260px;
  background-color: #efefef !important;
  display: block;
`;

export const FormCardContent = styled(CardContent)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CommentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameFieldWrapper = styled.div`
  margin: 10px 0;
`;

export const SubmitButtonWrapper = styled.div`
  margin: 10px 0;
  align-self: center;
`;

export const ComponentsCardContent = styled(CardContent)``;

export const BrandsWrapper = styled.div``;

export const TextWrapper = styled.div``;

export const FormCardHeader = styled(CardHeader)``;
