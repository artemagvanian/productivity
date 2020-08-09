import React, { useState, useEffect } from "react";
import { classify } from "../utils/toxicityClassifier";

let rendered = false;

const Label = ({ text, classifier }) => {
  const [label, setLabel] = useState("loading...");

  useEffect(() => {
    if (classifier) {
      setLabel("loading...");
      const fn = async () => {
        const newLabel = await classify(!rendered, classifier, text);
        setLabel(newLabel);
        rendered = true;
      };
      fn();
    }
  }, [setLabel, text, classifier]);

  return <div>{label}</div>;
};

export default Label;
