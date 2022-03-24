import React, { useState, useEffect } from "react";

const AccordionGroupTest = ({ children }) => {
  const [curAccordionId, setCurAccordionId] = useState(null);

  const handleChange = (id) => {
    setCurAccordionId(curAccordionId === id ? null : id);
  };

  useEffect(() => {
    setCurAccordionId(curAccordionId);
  }, [curAccordionId]);

  useEffect(() => {
    setCurAccordionId(null);
  }, [children]);

  const childrenWithProps = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      onChange: () => handleChange(index),
      expanded: curAccordionId === index,
    });
  });

  return <>{childrenWithProps}</>;
};

export default AccordionGroupTest;
