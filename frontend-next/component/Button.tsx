// import React from "react";

// export default function Button(props) {
//   return (
//     <div>
//       <a className={"btn ${props.class}"} href="">
//         <button>{props.text}</button>
//       </a>
//     </div>
//   );
// }
import React from "react";

export default function Button(props) {
  return (
    <button className={`btn ${props.class}`} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
