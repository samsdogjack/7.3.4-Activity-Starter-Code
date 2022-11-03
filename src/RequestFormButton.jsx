import React, { useContext } from "react";
import StylesContext from "./StylesContext";

const buttonStyling = React.useContext (StylesContext)

export default function RequestFormButton() {
  return (
    <div>
      <button>
        Click Here!
      </button>
      <input type="submit" value="Submit" />

    </div>
  );
}
