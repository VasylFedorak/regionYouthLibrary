import React from "react";
import LoremIpsum from "react-lorem-ipsum";

function About() {
  return (
    <div id="about">
      <h1>Hello to our first React Project</h1>
      <section>
        <LoremIpsum
          p={3}
          sentenceLowerBound={3}
          sentenceUpperBound={5}
          paragraphLowerBound={5}
          paragraphUpperBound={7}
        />
        <div></div>
        <div className="grid about-section">
          <img src="images/4.jpeg" alt="My Image" />
          <div>
            <LoremIpsum
              p={3}
              sentenceLowerBound={2}
              sentenceUpperBound={4}
              paragraphLowerBound={4}
              paragraphUpperBound={6}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
