import SquareBox from "./decorations/SquareBox"
import PrimaryButton from "./PrimaryButton"



const DeputyMayorCard = ({firtContainerStyle, secondContainerStyle, personImage, personName, personPositon, personMessage}) => {
  return (
    <div className=" p-4 pb-[80px]  mx-4  rounded-[30px] inline-block">
    <div className="w-full align-top flex flex-row  rounded-lg overflow-hidden gap-[70px] ">
      <div className={"rounded-[40px] shrink-0 border border-gray-600 " + firtContainerStyle}>
        <img
          src={personImage || "/public-images/deputy-mayor-1.svg"}
          alt="card-image"
          className="w-full max-w-[515px] object-cover rounded-[20px] max-h-[366px]"
        />
        <div className="flex flex-col items-center py-[30px]">
          <h2 className=" text-[45px] mb-[2rem]">{ personName ||  "Mr. Guyo Galgalo"}</h2>
          <p className="text-[30px] text-center max-w-[400px]">{ personPositon ||"Deputy Mayor and head of the Economic Sector"}</p>
        </div>
      </div>

      <div className={"py-[100px]  "+ secondContainerStyle}>
      

        <p className="relative text-gray-600 mb-6 leading-[35px] text-[30px]">
        <span className=" text-[50px]">"</span>{personMessage ||  "I am pleased to share our commitment to building a vibrant and sustainable community through this bulletin, “The Future City.” Shaggar is at a crucial juncture, where innovation and collaboration are essential to addressing our urban challenges and harnessing new opportunities.”"}

        <SquareBox 
          customStyles={"top-[-20%] w-[57px] h-[49px] rounded-tl-[38px] "}
        />
        <SquareBox 
          customStyles={"bottom-[0%] w-[57px] h-[49px] rounded-br-[38px] bg-cutom-blue right-0 "}
        />
        <PrimaryButton />
        </p>

        
      </div>
    </div>

    {/* SquareBox Decorations */}
    </div>
  )
}

export default DeputyMayorCard
