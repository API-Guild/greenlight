import React from "react"
import { ReactComponent as Greenlight} from "../../assets/svg/greenlight.svg"
import * as logoStyles from "./logo.module.css"

// this component is meant to receive an .svg file as a logo
// for dynamic sizing and coloring
export default function Logo() {
  return (
    <Greenlight className={logoStyles.logo}/>
  )
}
