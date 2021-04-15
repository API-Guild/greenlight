import React from "react"

export default function TableauApi(props) {

  const pathSegment = "/javascripts/api/";
  const fullPath = props.server + pathSegment + props.version;

  console.log(fullPath);

  return (
    <script src={fullPath} type="text/javascript"></script>
  )
}
