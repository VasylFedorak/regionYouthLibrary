import React, { useEffect, useState } from "react";

function About() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="about">
      <h1>Hello to our first React Project</h1>
      <section>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Litora tellus
          lobortis arcu dignissim natoque a. Aliquam nullam curae finibus in
          semper velit, tellus faucibus. Molestie non varius suscipit torquent
          morbi placerat tempus placerat. Libero vel laoreet finibus enim litora
          dignissim leo. Senectus egestas ante vivamus suspendisse molestie
          libero magna. Nascetur sit euismod enim luctus porttitor facilisi
          vitae. Tempus lobortis ultrices euismod arcu cras justo tristique.
          Ultrices conubia aptent ipsum elit porttitor; facilisis mauris
          curabitur. Donec sociosqu egestas efficitur euismod commodo lobortis
          eu. Tincidunt augue mi in gravida diam. Bibendum cubilia faucibus arcu
          scelerisque quam class finibus malesuada sociosqu. Dictum hac primis
          tristique nascetur arcu est dui. Netus consequat eros enim neque
          feugiat per nisi porta. Pharetra natoque praesent tincidunt facilisi
          malesuada duis consequat lectus mattis. Ultricies pharetra quisque
          curae tempus elementum. Tellus sit elit fusce hendrerit aliquam
          mollis, quisque condimentum at. Urna congue congue arcu blandit leo
          praesent turpis. Netus primis senectus dolor interdum egestas feugiat.
          Congue habitant nibh vehicula curabitur laoreet mauris sit dictum.
          Conubia arcu ex ultricies habitasse suspendisse. Nibh mollis euismod
          lacus pretium phasellus fermentum inceptos dui nostra. Mus taciti
          ornare lorem nulla quam dictum habitant eleifend velit.
        </p>
        <div></div>
        <div className="grid about-section">
          <img
            src="images/4.jpeg"
            alt="My Image"
            style={{ width: `calc(100% - ${offsetY / 10}px)` }}
          />
          <div className="about_img_text">
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti sit id
              porttitor luctus maecenas nascetur nulla purus. Imperdiet cursus
              nibh sodales massa primis lacinia mauris eros. Donec lorem
              phasellus magnis potenti euismod. Convallis volutpat urna nibh
              pharetra tempus integer torquent auctor. Erat facilisi tempus
              vestibulum quis vehicula suspendisse potenti. Vivamus facilisis
              maecenas nisi vehicula, fringilla varius torquent. Feugiat iaculis
              dictumst est platea libero conubia? Volutpat pulvinar iaculis,
              taciti massa donec ridiculus. Tristique magnis curae congue dolor
              class sapien. Vivamus ullamcorper lobortis pharetra dictum primis
              urna pretium. Aenean netus ipsum mauris turpis vivamus hac
              facilisi pulvinar. Conubia dui at eget ac tellus quisque. Senectus
              tincidunt duis aliquam nostra maximus. Porta leo blandit elit,
              tristique varius fermentum. Arcu etiam sed iaculis sit nostra
              torquent, torquent amet. Orci sed eros viverra auctor bibendum
              euismod. Urna parturient donec quam ipsum sem? Sed inceptos
              fermentum sociosqu, adipiscing ultricies morbi nulla justo.
              Maecenas eget montes odio amet class aenean montes duis. Quis
              magnis hac vehicula facilisi parturient. Mi urna odio mattis ipsum
              metus porttitor dictum. Interdum libero non mauris senectus metus.
              Suspendisse sapien purus lorem fermentum eros purus rhoncus.
              Aenean adipiscing diam libero tincidunt; parturient finibus
              cubilia. Nostra vivamus quis sed nec ornare.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
