import React from "react";

const LayerListGroup = ({ data }) => {
  return (
    <div>
      {data.map((m) => {
        return (
          <div>
            {m.leaf ? <p>{m.name}</p> : <h5>{m.name}</h5>}
            {m.children && <LayerListGroup data={m.children} />}
          </div>
        );
      })}
    </div>
  );
};

export default LayerListGroup;
