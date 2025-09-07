import React from "react";
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/description'
import Testimonials from '../components/Testimonials'
import GenerateBtn from '../components/Generate_Btn'


const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Testimonials/>
      <GenerateBtn/>
    </div>
  );
};

export default Home;
