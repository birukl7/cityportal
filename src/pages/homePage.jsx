import Footer from "../components/Footer";
import Billboard from "../components/BillBoard";
import MaxWidth from "../components/MaxWidth";
import MessageCard from "../components/MessageCard";
import MayorMessageCard from "../components/MayorMessageCard";
import DeputyMayorCard from "../components/DeputyMayorCard";
import SectionHeader from "../components/SectionHeader";
import LatestStat from "../components/LatestStat";


function LandingPage() {
  return(
    <>
    
<Billboard />
  <MaxWidth>
    <div className=" grid grid-cols-3 gap-x-5 mt-10 px-5 mt-[-40px] max-w-[1200px] mx-auto ">
      <MessageCard 
        containerClasses=' rounded-tl-[80px] py-[50px] px-[60px]'  squareBoxClasses={" left-[10px] bottom-[20px] bg-[#08A508]"} 
      />
      <MessageCard 
        message={"Expolore the Heart of Shagger City"}
        dashBoxClasses={" bg-[#2d515d]"}
        squareBoxClasses={" right-[5px] top-[10px] "}
      />
      <MessageCard
        message={"Live Like a Local"}
        squareBoxClasses={"right-[10px] bottom-[10px]"}
        containerClasses={" rounded-tr-[100px]"}
      />
    </div>

    <MayorMessageCard />

    <section className="mt-[10rem]">
      <SectionHeader
        personPostion={"Deputy Mayors"}
        dashboxStyle={"w-[292px]"}
      />
      <DeputyMayorCard/>
      <DeputyMayorCard 
        firtContainerStyle={"order-2"}
        personImage={"/public-images/deputy-mayor-2.svg"} 
        personName={"Mr. Gugsa Dejene"}
        personMessage={"As the Deputy Mayor of Shaggar City and head of the Administration and Service Sector, I am pleased to present this bulletin, “The Future City.” This document encapsulates our ongoing commitment to en-hancing the quality of public services and improving the overall well-being of our residents"}
      />
      <DeputyMayorCard 
        personImage={"/public-images/deputy-mayor-3.svg"} 
        personName={"Mr.Girma Hailu"}
        personMessage={"As the Deputy Mayor of Shaggar City and head of the Urban Agriculture Cluster, I am excited to emphasize the critical role urban agriculture plays in our community. In a rapidly urbanizing world, integrating agricultural practices into our city not only enhances food security but also promotes sustainability, economic resilience, and community well-being."}
      />
    </section>

    <section className="mt-[10rem]">
      <SectionHeader 
        topText={"Latest"}
        personPostion={"stats"}
        dashboxStyle={" w-[76px]"}
        hidden={"invisible"}
      />
    </section>

    <section>
      <LatestStat />
    </section>


  </MaxWidth>

  <Footer/>
    </>
  )

}

export default LandingPage;
