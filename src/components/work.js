
import React from "react";
import Workcard from "./workcard";
import work_card_data from "./work_card_data";

const work = () => {
  return (
    <div className="work-container">
    <h1 className="project-heading">Project</h1>
    <div className="project-container">
       {work_card_data.map((val,ind)=>{
        return(
            <Workcard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
          />  
        )
       })}
    </div>
    </div>
  )
};

export default work