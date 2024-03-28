import "./Slideshow.css";
import { LandingPageInfoCardBG4, LandingPageInfoCardBG5 } from "../../Assets";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Zoom } from "react-reveal";
import { useNavigate } from "react-router-dom";
const words = [
  "Step inside, for comfort and magic await you.",
  "Where luxury meets comfort",
  "Elevate your space with our sofas",
]; // Example words for Typewriter effect

const pics = [
  LandingPageInfoCardBG4,
  LandingPageInfoCardBG5,
  LandingPageInfoCardBG4,
];

export default function Slideshow() {
  const typewriterRef = useRef(null); // Ref for Typewriter instance
  const navigate = useNavigate();

  const typeWords = (index) => {
    if (typewriterRef.current) {
      const currentWord = words[index];

      // Start typing the current word
      typewriterRef.current
        .typeString(currentWord)
        .pauseFor(2500) // Pause after typing each word
        .deleteAll() // Delete the typed word
        .callFunction(() => {
          // Move to the next word after deletion
          const nextIndex = (index + 1) % words.length;
          typeWords(nextIndex);
        })
        .start();
    }
  };

  useEffect(() => {
    if (typewriterRef.current) {
      // Start typing animation when component mounts
      typeWords(0); // Start typing the first word
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Zoom>
        <div className="landing_page_slideshow_box">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {words.map((word, index) => (
              <SwiperSlide key={index} className="landing_page_swiper_card">
                <div className="landing_page_infocard">
                  <img
                    src={pics[index]}
                    alt=""
                    className="landing_page_infocard_bg_img"
                  />
                  <div className="landing_page_infocard_content">
                    <div className="landing_page_infocard_title">
                      <Typewriter
                        // onInit={(typewriter) => {
                        //   typewriterRef.current = typewriter;
                        //   typewriter
                        //     .changeDeleteSpeed(1)
                        //     .typeString(word.word)
                        //     .pauseFor(2500)
                        //     .start();
                        // }}
                        ref={(typewriter) =>
                          (typewriterRef.current = typewriter)
                        }
                        loop
                        cursor
                        words={[word]}
                      />
                    </div>
                    <button
                      className="landing_page_infocard_btn"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("products");
                      }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Zoom>
    </>
  );
}
