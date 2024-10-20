import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function DescriptionAndReviewSection(props) {
  return (
    <div className="row px-4 mx-auto mt-2 mb-4">
      <Tabs
        defaultActiveKey="Description"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Description" title="Description">
          <div className="py-4">
            <h6 className="m-0 my-2 fw-bold fs-3 "> About Product : </h6>
            <p className="lh-lg">{props.description}</p>
          </div>
        </Tab>
        <Tab eventKey="Reviews" title="Reviews">
          <h1 className="lh-lg text-center m-5 p-5 text-warning">OPPS No Reviews Yet...! 😓</h1>
        </Tab>
        <Tab eventKey="Write a review" title="Write a review" disabled>
          <p className="lh-lg">How about the product ?</p>
        </Tab>
      </Tabs>
    </div>
  );
}

export default DescriptionAndReviewSection;
