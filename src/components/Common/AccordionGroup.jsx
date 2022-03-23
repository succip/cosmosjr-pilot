import React, { useState, useEffect } from "react";

const AccordionGroup = ({ accordionType, content }) => {
  const [curAccordionId, setCurAccordionId] = useState(null);

  const handleChange = (id) => {
    setCurAccordionId(curAccordionId === id ? null : id);
  };

  useEffect(() => {
    setCurAccordionId(curAccordionId);
  }, [curAccordionId]);

  useEffect(() => {
    setCurAccordionId(null);
  }, [content]);

  return content.map((data, index) => {
    return React.createElement(accordionType, {
      key: index,
      accordionId: index,
      handleChange,
      expanded: curAccordionId === index,
      data,
    });
  });
};

export default AccordionGroup;
