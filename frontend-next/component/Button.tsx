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
// import React from "react";

// export default function Button(props) {
//   return (
//     <button className={`btn ${props.class}`} onClick={props.onClick}>
//       {props.text}
//     </button>
//   );
// }

import React from "react";

type ButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button className={`btn ${props.className}`} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
