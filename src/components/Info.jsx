import BannerLogo from "../../src/assets/about-banner-img.png";
import "./Info.css";


const IntroductionPage = () => {
  return (
    <main className="main-container">
      <div className="info-heading">
        <h1>Empowering minds, one lesson at a time</h1>
      </div>

      <div >
        <p className="about-p">
          Tutors Ivy is dedicated to helping students achieve their academic
          goals. With a team of expert tutors, we provide personalized,
          one-on-one instruction to help students succeed in their aspirations.
          This includes academic tutoring in subjects such as maths, sciences,
          and english, as well as Test Prep and College Counseling. We work with
          students of all grade levels from elementary to high school students.
          Whether you're struggling with a particular subject or just looking to
          improve your grades, our tutors are here to help. With a focus on
          building confidence and fostering a love of learning, we strive to
          make a positive impact on every student we work with. Contact us today
          to learn more if you are looking for a tutor for your student or
          interested in becoming a tutor!
        </p>
      </div>

      <div>
        <img className='about-img'src={BannerLogo} alt="banner" />
      </div>
    </main>
  );
};

export default IntroductionPage;
