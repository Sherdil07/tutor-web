import QuestionImage from "../../src/assets/faq-img.png";
import PlusIcon from "../../src/assets/plus-icon.png";
import "./Question.css";
const QuestionAnswer = () => {
  return (
    <div className="main-section">
      <div>
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="content-container">
        <div className="image-container">
          <img src={QuestionImage} alt="Question" className="question-image" />
        </div>

        <div className="question-container">
          <div className="content">
            <div className="heading-QA">
              <h3>Where Do Session Take Place </h3>
            </div>
            <div className="icon">
              <button
                className="question-image-button"
                onClick={() => console.log("Button Clicked")}
              >
                <img
                  className="button-img"
                  src={PlusIcon}
                  alt="Question Content"
                />
              </button>
            </div>
          </div>
          <div className="question-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod justo ac leo aliquam, vel vestibulum nisl fermentum. Fusce
              ullamcorper vehicula mi, et convallis mauris tincidunt ac. In hac
              habitasse platea dictumst. Nullam hendrerit nisl a ex consectetur,
              a fermentum ligula semper.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionAnswer;
