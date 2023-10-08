import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Edit() {
  const dispatch = useDispatch();
  const history = useHistory();
  const paramsObject = useParams();

  // bring in details from the _rootReducer
  const editDetails = useSelector((store) => store.details.editReducer);
  console.log("EDIT DETAILS: ", editDetails);

  return (
    <div>
      <h1>Edit Page</h1>
      <h2>Under Construction</h2>
    </div>
  );
}
