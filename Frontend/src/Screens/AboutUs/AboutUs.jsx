import { AboutUsPerson1 } from "../../Assets";
import "./AboutUs.css";
import React from "react";
import Fade from "react-reveal";

export default function AboutUs() {
  return (
    <>
      <div className="team_intro_box">
        <div className="team_title">Team</div>

        <div className="team_info_card_container">
          <Fade left>
            <div className="team_infocard">
              <img
                src={AboutUsPerson1}
                alt="person"
                className="team_infocard_img"
              />

              <div className="team_content_container">
                <div className="team_infocard_name">
                  Saad Khan - Lead Web Developer
                </div>

                <div className="team_points_container">
                  <div className="team_intro_point">
                    Hello, I'm Saad Khan, the Lead Web Developer steering the
                    course of this project. My multifaceted role extends beyond
                    coding; I've meticulously automated our data pipeline,
                    ensuring seamless operations and unwavering precision.
                    Moreover, I've played a pivotal role in advancing the AI
                    components, collaborating with the team to sculpt
                    intelligent functionalities that elevate our project to new
                    heights. With an unwavering commitment to excellence, I
                    strive to push boundaries, delivering innovative digital
                    solutions that leave a lasting impact..
                  </div>

                  {/* {data.intro.map((data, index) => (
                    //   <BulletPoint data={data} />
                    <li className="team_intro_point">{data}</li>
                  ))} */}
                </div>
              </div>
            </div>
          </Fade>
          {/* {data.map((data, index) => (
            <TeamInfoCard data={data} />
          ))} */}
        </div>
      </div>
    </>
  );
}
