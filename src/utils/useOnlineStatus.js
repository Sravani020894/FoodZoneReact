 import { useEffect, useState } from "react";

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

import { useState } from "react";

const useOnlineStatus = () => {
  let [onlineStatus,setOnlineStatus] = useState(true);
  useEffect(()=>{
    window.addEventListener("offline",()=>{
      setOnlineStatus(false);
      console.log("rendering page after offline");
    });
    window.addEventListener("online",()=>{
      setOnlineStatus(true);
      console.log("rendering page after online");
    });
  },[]);
  return onlineStatus;
}

export default useOnlineStatus;











