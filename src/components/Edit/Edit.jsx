import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// Styling
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function Edit() {
  //   const dispatch = useDispatch();
  const history = useHistory();
  //   const paramsObject = useParams();

  // bring in details from the _rootReducer
  const editDetails = useSelector((store) => store.details.editReducer);
  console.log("EDIT DETAILS: ", editDetails);

  return (
    <div>
      <h1>Edit Page</h1>
      <h2>Under Construction</h2>
      <Card>
        <CardContent>
          <Typography variant="h4">{editDetails.title}</Typography>
          <br />
          <Typography variant="h6">{editDetails.description}</Typography>
        </CardContent>
        <Button onClick={() => history.push("/details/:id")}>Cancel</Button>
        <Button>Save</Button>
      </Card>
    </div>
  );
}
