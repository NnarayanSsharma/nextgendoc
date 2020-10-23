import React from "react";
import ShowMoreText from "react-show-more-text";
import "./FeedbackPatient.css";

function FeedbackPatient() {
  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };
  return (
    <div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            See what our patients say
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-base">
            I can talk to a doctor 24/7 from anywhere. Whether I'm at home, or
            in the office, or even in the car driving my kids around...
            Nextgendoc is a huge help!
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="demo">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div id="testimonial-slider" class="owl-carousel">
                    <div class="testimonial">
                      <h3 class="title">Very impressed!</h3>
                      <p class="description">
                        <ShowMoreText
                          /* Default options */
                          lines={4}
                          more="Show more"
                          less="Show less"
                          anchorClass=""
                          onClick={executeOnClick}
                          expanded={false}
                          width={250}
                        >
                          I have been in the medical/pharmaceutical industry for
                          20 years. I am very proud of the accomplishments in
                          terms of the discovery of new beneficial treatments.
                          I’m not proud however of the costs and difficulty in
                          accessing these treatments. This is my first
                          experience with your service and is extremely
                          satisfied and impressed! Thank you for making the
                          process much more accessible!
                        </ShowMoreText>
                      </p>
                    </div>
                    <div class="testimonial">
                      <h3 class="title">It works!!</h3>
                      <p class="description">
                        <ShowMoreText
                          /* Default options */
                          lines={4}
                          more="Show more"
                          less="Show less"
                          anchorClass=""
                          onClick={executeOnClick}
                          expanded={false}
                          width={250}
                        >
                          I was skeptical at first, but the doctor was able to
                          call in antibiotics in under an hour. The medicine is
                          working. I’ve recommended this app to all of my family
                          and friends.
                        </ShowMoreText>
                      </p>
                    </div>
                    <div class="testimonial">
                      <h3 class="title">Worked so well and so easily!</h3>
                      <p class="description">
                        <ShowMoreText
                          /* Default options */
                          lines={4}
                          more="Show more"
                          less="Show less"
                          anchorClass=""
                          onClick={executeOnClick}
                          expanded={false}
                          width={250}
                        >
                          I can talk to a doctor 24/7 from anywhere. Whether I'm
                          at home, or in the office, or even in the car driving
                          my kids around... Nextgendoc is a huge help!
                        </ShowMoreText>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPatient;
