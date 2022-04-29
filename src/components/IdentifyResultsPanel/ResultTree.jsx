import { useState, useEffect } from "react";
import LotTree from "./LotTree";
import ResultItemTree from "./ResultItemTree";

const ResultTree = ({ results }) => {
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    results.length && results[0].open ? setExpanded([results[0].id]) : setExpanded([]);
  }, [results]);

  const handleExpand = (value) => {
    const expandNode = [value[0]];
    expandNode[0] === expanded[0] ? setExpanded([]) : setExpanded(expandNode);
  };

  return (
    <>
      {results.map((result) => {
        return result.isLotLayer ? (
          <LotTree
            key={result.id}
            result={result}
            expanded={expanded}
            handleExpand={handleExpand}
          />
        ) : (
          <ResultItemTree
            key={result.id}
            result={result}
            expanded={expanded}
            handleExpand={handleExpand}
          />
        );
      })}
    </>
  );
};

export default ResultTree;
