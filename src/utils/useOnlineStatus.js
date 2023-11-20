// import { useEffect, useState } from "react";

// const useOnlineStatus = () => {
//   const [onlineStatus, setOnlineStatus] = useState(true);

//   useEffect(() => {
//     window.addEventListener("offline", () => {
//       setOnlineStatus(false);
//     });

//     window.addEventListener("online", () => {
//       setOnlineStatus(true);
//     });
//   }, []);

//   // boolean value
//   return onlineStatus;
// };

// export default useOnlineStatus;

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  let [onlineStatus,setOnlineStatus] = useState(true);
  console.log("rendering page at first");
    window.addEventListener("offline",()=>{
      console.log("rendering page after offline");
      setOnlineStatus(false);
    });
    window.addEventListener("online",()=>{
      console.log("rendering page after online");
      setOnlineStatus(true);
  });
  return onlineStatus;
}

export default useOnlineStatus;











