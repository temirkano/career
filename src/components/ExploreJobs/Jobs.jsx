import scss from "./Jobs.module.scss";
import signup from "../../assets/JobsImg/signup.svg";
import resume from "../../assets/JobsImg/resume.svg";
import search from "../../assets/JobsImg/search.svg";
import btnIcon from "../../assets/JobsImg/btnIcon.svg";

function Jobs() {
  return (
    <div className={scss.jobs}>
      <i>For Candidates</i>
      <h1>Explore Thousands of Jobs</h1>
      <p>
        Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi
        mattis ullamcorper velit.
      </p>
      <div className={scss.boxsJobs}>
        <div className={scss.boxJobs}>
          <img src={signup} alt="icon" />
          <p className={scss.step}>Step 1</p>
          <h3>Create an account</h3>
          <p>Nunc nonummy metus. Donec elit libero</p>
        </div>
        <div className={scss.boxJobs}>
          <img src={resume} alt="icon" />
          <p className={scss.step}>Step 2</p>
          <h3>Complete your profile</h3>
          <p>Nunc nonummy metus. Donec elit libero</p>
        </div>
        <div className={scss.boxJobs}>
          <img src={search} alt="icon" />
          <p className={scss.step}>Step 3</p>
          <h3>Search your job</h3>
          <p>Nunc nonummy metus. Donec elit libero</p>
        </div>
      </div>
      <div className={scss.btnUpload}>
        <button>
          <img src={btnIcon} alt="icon" />
          <p>Upload Your CV</p>
        </button>
      </div>
    </div>
  );
}

export default Jobs;
