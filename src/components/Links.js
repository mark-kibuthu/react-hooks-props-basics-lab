import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      {/* Render the GitHub link */}
      <a href={github} target="_blank" rel="noopener noreferrer">
        {github}
      </a>
      <br />
      {/* Render the LinkedIn link */}
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        {linkedin}
      </a>
    </div>
  );
}

export default Links;
