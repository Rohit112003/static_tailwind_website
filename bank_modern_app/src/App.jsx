import React from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Bussines from "./components/Bussines";
import Billing from "./components/Billing";


import Clients from "./components/Clients"
import Footer from "./components/Footer";


const App = () => {
  return (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        
        <Navbar/>
      
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

 
   
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/> 
        <Bussines/>
        <Billing />

    
        <Clients/> 
        
        <Footer/> 

      </div>
    </div>
  </div>
  )
};

export default App;
