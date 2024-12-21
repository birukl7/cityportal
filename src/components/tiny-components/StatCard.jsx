import DashBox from "../decorations/DashBox"

const StatCard = ({number, variable}) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[50px] relative inline-block">{
        number || "+2,111,770" }
        <DashBox customStyles={"w-[60px] h-[3px] bg-custon-blue bottom-[-0.5px] right-[50%] left-[40%]"} />
      </h2>
      <p className={"text-[20px]"}>{variable || "Population"}</p>
    </div>
  )
}

export default StatCard
