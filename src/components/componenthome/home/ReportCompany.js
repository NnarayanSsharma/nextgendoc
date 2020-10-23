import React from "react";
import reportcompany from "../../../images/reportcompany1.jpg";

function ReportCompany() {
  return (
    <div>
      <div>
        <section class="text-white-500 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
              <div class="w-full sm:p-4 px-4 mb-6">
                <h1 class="title-font font-medium text-xl mb-2 text-white-900">
                  We provide neighborhood primary care doctors around the clock
                  24/7
                </h1>
                <div class="leading-relaxed">
                  Instantly connect with a primary care physician for any health
                  concerns and questions.
                </div>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                <h2 class="title-font font-medium text-3xl text-white-900">
                  2.7K
                </h2>
                <p class="leading-relaxed">Users</p>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                <h2 class="title-font font-medium text-3xl text-white-900">
                  1K
                </h2>
                <p class="leading-relaxed">Subscribes</p>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                <h2 class="title-font font-medium text-3xl text-white-900">
                  1.8K
                </h2>
                <p class="leading-relaxed">Likes</p>
              </div>
              {/* <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-white-900">
                  4
                </h2>
                <p class="leading-relaxed">Products</p>
              </div> */}
            </div>
            <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <img
                class="object-cover object-center w-full h-full"
                src={reportcompany}
                alt="stats"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ReportCompany;
