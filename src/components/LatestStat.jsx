import SecondaryButton from "./SecondaryButton"
import StatCard from "./tiny-components/StatCard"

const LatestStat = () => {
  return (
    <div className=" grid grid-cols-2 gap-[40px]">
      <div className={" border border-black py-[40px] p-[40px] rounded-[27px] rounded-tl-[196px] "}>
        <div className=" grid grid-cols-2 gap-[40px]">
          <StatCard  />
          <StatCard number={"12"} variable={"Subcity"}/>
          <StatCard number={"36"} variable={"Woreda"} />
          <StatCard number={"5,037"} variable={"Employee"} />
        </div>
        <div>
          <p className="text-[25px] max-w-[588px] py-[30px]">The stats are increasing more job opportunties are created and more employees are here.</p>
        </div>
        <div className=" text-right">
          <SecondaryButton />
        </div>
      </div>

      <div>
        <div className="p-[30px] flex border border-black rounded-[10px]">
          <div className="text-[23px] max-w-[265px]">The stats are increasing more job opportunties are created and more employees are here.</div>
          <div>
            <img src="/public-images/girl.svg" alt="" />
          </div>
        </div>
        <div></div>

      </div>

    </div>
  )
}

export default LatestStat
