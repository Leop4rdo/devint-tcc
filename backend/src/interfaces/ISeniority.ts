import DevEntity from "../adapters/database/entities/DevEntity"

export default interface ISeniorityProps {
  id : string
  names : string
  devs : DevEntity[]
}