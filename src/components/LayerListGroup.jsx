const LayerListGroup = ({ data }) => {
  return (
    <>
      {data.map((m) => {
        return (
          <div>
            {m.group && <h4>{m.name}</h4>}
            {m.leaf && <p>{m.name}</p>}
            {m.children && <LayerListGroup data={m.children} />}
          </div>
        );
      })}
    </>
  );
};

export default LayerListGroup;
