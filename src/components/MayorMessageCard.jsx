import SquareBox from "./decorations/SquareBox";
import SectionHeader from "./SectionHeader";


export default function MayorMessageCard() {
    return (
      <div className="relative p-4 pb-[80px]  border border-gray-600 mx-4 mt-8 rounded-[30px] inline-block">
        <SectionHeader />

        <div className="w-full align-top flex flex-row  rounded-lg overflow-hidden">
          <div className="w-[50%] rounded-[50px] shrink-0">
            <img
              src={"/public-images/the-mayor.svg"}
              alt="card-image"
              className="h-full w-full object-cover rounded-[20px]"
            />
          </div>

          <div className="p-6 w-3/5">
          
            <p className="text-gray-600 mb-6 leading-[35px] text-[23px]">
            <span className=" text-[50px]">"</span>As the mayor of Shaggar City, I am excited to share our bold vision 
            for the future of our community. We are committed to transforming Shaggar 
            into a model smart city—competitive, livable, and responsive to the needs 
            of all residents. Our goal is to establish Shaggar as a com-pact, polycentric
              economic hub, fostering inclusivity, connectivity, and environmental sustainability
              through strategic spatial planning and targeted investments in innovative infrastructure.”
            </p>
            <h1 className="text-[45px] p-[30px] leading-[40px]  max-w-[550px]">Teshome Adugna (Ph.D.) <span className="text-[30px]">Shaggar City Mayor</span></h1>
          </div>
        </div>

        {/* SquareBox Decorations */}
        <SquareBox customStyles={"top-6 right-6 bg-custom-red-dark w-[25px]"}  />
        <SquareBox customStyles={"bottom-6 w-[25px]"}  />
        <SquareBox customStyles={"right-6 bottom-6 bg-custom-green w-[25px]"}  />
        </div>
    );
  }
  