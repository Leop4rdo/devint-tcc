import DevEntity from "../adapters/database/entities/DevEntity"
import IDevProps from "./IDev"

export default interface ICareerProps {
  id : string
  name : string
  dev : DevEntity
}