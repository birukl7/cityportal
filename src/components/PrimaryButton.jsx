import DashBox from "./decorations/DashBox"
import Arrow from "./tiny-components/Arrow"


const PrimaryButton = () => {
  return (
    <div className="mt-[4rem] relative">
    <button>
        <div className="border border-black rounded-full px-[50px] py-[10px] flex items-center gap-x-[20px] hover:border-white hover:text-white hover:bg-custom-red-light">
          <div className="text-[20px]"><Arrow /></div>
          <span className="text-[20px] text-black">Send Email</span>
        </div>
    </button>

    <DashBox 
      customStyles={"bottom-[-16px] rounded-full"}
    />
    </div>

  )
}

export default PrimaryButton
