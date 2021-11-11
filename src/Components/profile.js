import Bio from "./bio.js";
import "./styles.css";
import "../App.css";
import Name from "./name.js";
// import * as AllName from "./name";
import "../Components/styles.css";

import Profession from "./Profession";
import ImageURL from "./image";
// import { render } from "@testing-library/react";

function ProfileMaker() {
  // render(alert(`Welcome ${AllName.NameValue}`));
  return (
    <>
      <div>
        <Name />
        <Bio />
        <Profession />
        <ImageURL>
          https://pbs.twimg.com/profile_images/1214606758221500416/qpv1F1UX_400x400.jpg
        </ImageURL>
      </div>
    </>
  );
}

export default ProfileMaker;
