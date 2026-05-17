// @ts-ignore
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
   return (    
      <div className="content home">
         <div className="container">
            <h1 className="containerh1" style={{ fontSize: 35 }}>Resume & Recruitment</h1>
            <h1 className="containerh2" style={{ fontSize: 24 }} >Management System </h1>

            <br />
            <div style={{ width: "40%", height: 130 }}>
               <p>
                  Create and manage job postings effortlessly, track candidates through every stage of the hiring process, and organize company information in a structured and efficient way—all in one unified platform.

                  Streamline your entire recruitment workflow with a smart, intuitive, and well-organized dashboard designed to improve productivity, reduce manual effort, and make hiring faster and more effective
               </p>
            </div>
            <div className="btn-wrapper">
               <Link to='/companies' className="cta-btn">Get Started</Link>
            </div>
         </div>
      </div>
   );
};

export default Home;
