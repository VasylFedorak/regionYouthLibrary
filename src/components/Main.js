import React from "react";
import LoremIpsum from "react-lorem-ipsum";

function Main() {
  return (
    <main>
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
          <div>
            <LoremIpsum
              p={3}
              sentenceLowerBound={2}
              sentenceUpperBound={4}
              paragraphLowerBound={4}
              paragraphUpperBound={6}
            />
          </div>

          <img src={process.env.PUBLIC_URL + "libraries.jpeg"} alt="My Image" />
        </div>
      </section>
    </main>
  );
}

export default Main;
