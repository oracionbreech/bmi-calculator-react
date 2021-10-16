import React, { useState } from "react";
import calculatorFormViews from "../constants/calculatorFormViews";
import { ImperialForm } from "./Imperial/ImperialForm";
import { Container } from "./Imperial/styled";
import { MetricForm } from "./Metric/MetricForm";

export default function BMICalculator() {
  const [formView, setFormView] = useState(calculatorFormViews.imperial);

  const imperialMode = formView === calculatorFormViews.imperial;
  const metricMode = formView === calculatorFormViews.metric;
  return (
    <Container>
      {imperialMode && (
        <ImperialForm formView={formView} setFormView={setFormView} />
      )}
      {metricMode && (
        <MetricForm formView={formView} setFormView={setFormView} />
      )}
    </Container>
  );
}
