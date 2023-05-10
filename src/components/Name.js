import React from "react"

function Name(){
  let name = ["Kenny", "Steve", "Jason", "Chris", "Johnlenny", "Will"]
  let index = Math.floor((Math.random() * 5) + 1)
  let logic = name[index]
  return(
    <h1>{logic}</h1>
  )
}

export default Name;



