import DashBox from "./decorations/DashBox"


const SectionHeader = (
    {
  personPostion, 
  dashboxStyle, 
  topText, 
  hidden
    }
  ) => {
  return (
    <>
      <h1 className="text-[42px] font-regular">{topText || "Let's Hear from" }</h1>
        <div className=" relative pl-10  inline-block pb-[35px] mt-[-28px]">
          <h2 className={"text-[40px] inline-block "}><span className={hidden}>the </span><span className="text-[60px]">{personPostion || "Mayor"}</span></h2>
          <DashBox customStyles={" right-0 bottom-0 top-[70%] w-[158px] h-[6px] " + dashboxStyle } />
        </div>
    </>
  )
}

export default SectionHeader
