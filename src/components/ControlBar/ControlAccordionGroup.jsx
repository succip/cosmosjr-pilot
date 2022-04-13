import { useEffect, useState } from "react";
import ControlAccordion from "./ControlAccordion";
import accordions from "../../config/Accordions";
import { useDispatch, useSelector } from "react-redux";
import { setActivePanel } from "../../store/actions/appActions";

const ControlAccordionGroup = () => {
  const [curAccordionId, setCurAccordionId] = useState(null);
  const { activePanel } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const handleChange = (id) => {
    console.log("changed", activePanel, curAccordionId);
    setCurAccordionId(curAccordionId === id ? null : id);
    dispatch(setActivePanel(id));
  };

  useEffect(() => {
    setCurAccordionId(activePanel);
  }, [activePanel]);

  return accordions.map((accordion, index) => {
    return (
      <ControlAccordion
        accordionId={index}
        key={index}
        title={accordion.title}
        panel={accordion.component}
        handleChange={handleChange}
        expanded={curAccordionId === index}
      />
    );
  });
};

export default ControlAccordionGroup;
