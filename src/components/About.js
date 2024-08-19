import React from "react";
import Links from "./Links"; // Assuming Links is another component you'll be creating

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      
      {/* Conditionally render the <p> tag only if bio is provided and not empty */}
      {bio && <p>{bio}</p>}
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      {/* Render the Links component, passing down the links prop */}
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
