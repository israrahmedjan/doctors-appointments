import React from "react";

function layout({ children }) {
  return (
    <>{children}</>
    // <div className="grid grid-cols-4">
    //   <div className="hidden md:block">
    //     {/* Category  */}
    //     {/* <CategoryList /> */}
    //   </div>
    //   <div className="col-span-4 md:col-span-3">{children}</div>
    // </div>
    // <div className="grid grid-cols-4 mx-4 md:mx-20 mt-5 h-screen">
    //   <div className="col-span-4 md:col-span-1">
    //     <p>skdfj {params.cname}</p>
    //     <CategoryList />
    //   </div>
    //   <div className="col-span-4 md:col-span-3">{children}</div>
    // </div>
  );
}

export default layout;
