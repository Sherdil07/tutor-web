import ServiceImage from "../../src/assets/services-img1.png";
import QuestionAnswer from "./Questions";
import './Service.css'

const ServicePage = () => {
  return (
    <>
    
      
      <div className="service-container">
        <div>
          <h1>Our Services</h1>
        </div>

        <div className="main-content " >
          <div className="card-main">
            <div>
              <h2>Subject Tutoring</h2>
              <p>
                We offer tutoring in all academic levels. Get paired with a
                tutor to get help preparing for exams, reviewing homework, or
                just strengthening your concepts!
              </p>
              <div className="buttons-container">
                <button className="buttons-container-one">Learn More</button>
                <button className="buttons-container-two">Find a tutor</button>
              </div>
            </div>
          

          <div className="image-section">
            <div className="card-image">
              <img  src={ServiceImage} alt="Service" />
            </div>
          </div>
          </div>
          <div className="card-main">
          <div>
            <div>
              <h2>Subject Tutoring</h2>
              <p>
                We offer tutoring in all academic levels. Get paired with a
                tutor to get help preparing for exams, reviewing homework, or
                just strengthening your concepts!
              </p>
              <div className="buttons-container">
                <button className="buttons-container-one">Learn More</button>
                <button className="buttons-container-two">Find a tutor</button>
              </div>
            </div>
          </div>

          <div className="image-section">
            <div>
              <img src={ServiceImage} alt="Service" />
            </div>
          </div>
          
        </div>
        </div>
        
      </div>
      <QuestionAnswer />
    </>
  );
};

export default ServicePage;
