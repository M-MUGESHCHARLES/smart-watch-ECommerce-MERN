import React from "react";
import { RiQuestionAnswerLine } from "react-icons/ri";


export default function FAQ() {
  return (
    <>
      <section id="FAQ-section">
        <div className=" row container mx-auto">
          <div className="col-8 mx-auto mb-4 mt-5 text-center">
            <h3 className="mb-3 mt-49  ">
              {/* <span className="material-symbols-outlined fs-1 align-middle">
                quiz
              </span> */}
              <RiQuestionAnswerLine />
              &nbsp; Frequently asked questions
            </h3>
            <p>
              overall, smartwatches provide users with convenient access to
              essential information
            </p>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="accordion " id="accordionExample">
            <div className="accordion-item my-2">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  What are the standout features of the new smartwatch?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur, architecto, explicabo perferendis nostrum, maxime
                  impedit atque odit sunt pariatur illo obcaecati soluta
                  molestias iure facere dolorum adipisci eum? Saepe, itaque.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  How does it compare to existing brands in terms of
                  functionality?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur, architecto, explicabo perferendis nostrum, maxime
                  impedit atque odit sunt pariatur illo obcaecati soluta
                  molestias iure facere dolorum adipisci eum? Saepe, itaque.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Is the design sleek and comfortable for everyday wear?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur, architecto, explicabo perferendis nostrum, maxime
                  impedit atque odit sunt pariatur illo obcaecati soluta
                  molestias iure facere dolorum adipisci eum? Saepe, itaque.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What unique health-tracking capabilities does it offer?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur, architecto, explicabo perferendis nostrum, maxime
                  impedit atque odit sunt pariatur illo obcaecati soluta
                  molestias iure facere dolorum adipisci eum? Saepe, itaque.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Does it integrate well with other devices and ecosystems?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur, architecto, explicabo perferendis nostrum, maxime
                  impedit atque odit sunt pariatur illo obcaecati soluta
                  molestias iure facere dolorum adipisci eum? Saepe, itaque.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="light-bg-hr">
          <hr />
        </div>
      </section>
    </>
  );
}
