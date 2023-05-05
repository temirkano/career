import scss from "./Jobs.module.scss";
import signup from "../../assets/JobsImg/signup.svg";
import resume from "../../assets/JobsImg/resume.svg";
import search from "../../assets/JobsImg/search.svg";

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
            <i>Step 1</i>
            <h3>Create an account</h3>
            <p>Nunc nonummy metus. Donec elit libero</p>
         </div>
         <div className={scss.boxJobs}>
            <img src={resume} alt="icon" />
            <i>Step 2</i>
            <h3>Complete your profile</h3>
            <p>Nunc nonummy metus. Donec elit libero</p>
         </div>
         <div className={scss.boxJobs}>
            <img src={search} alt="icon" />
            <i>Step 3</i>
            <h3>Search your job</h3>
            <p>Nunc nonummy metus. Donec elit libero</p>
         </div>
      </div>
    </div>
  );
}

export default jobs;
