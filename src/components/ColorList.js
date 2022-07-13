import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
/*
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        <li style={{ color: colors[0] }}>{colors[0]}</li>
        <li style={{ color: colors[1] }}>{colors[1]}</li>
        <li style={{ color: colors[2] }}>{colors[2]}</li>
        <li style={{ color: colors[3] }}>{colors[3]}</li>
        <li style={{ color: colors[4] }}>{colors[4]}</li>
      </ol>
    </div>
  );
  */
  
  const colorElements = colors.map((color) => {
    return <li style={{color: color}}>{color}</li>
  })
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
      </ol>
    </div>
  )
}

export default ColorList;



const users = [
  {id: 1, firstName: "Brian", lastName: "Wanjala"},
  {id: 2, firstName: "Judy", lastName: "Mukami"}
]

// using id for uniqueness
const userHeadings = users.map((map) => {
  return <h1 key={user.id}>{user.firstName}</h1>
})


//using index for uniqueness
const fib = [0, 1, 3, 9, 6, 4]

const fibList = fib.map((number, index) => {
  return <div key={index}>{number}</div>
})