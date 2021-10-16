import React, { lazy, Suspense, useState } from "react";
import calculatorFormViews from "../constants/calculatorFormViews";
import { Container } from "./Imperial/styled";

const MetricForm = lazy(() =>
  import("./Metric/MetricForm").then(({ MetricForm }) => ({
    default: MetricForm,
  }))
);
const ImperialForm = lazy(() =>
  import("./Imperial/ImperialForm").then(({ ImperialForm }) => ({
    default: ImperialForm,
  }))
);

export default function BMICalculator() {
  const [formView, setFormView] = useState(calculatorFormViews.imperial);

  const imperialMode = formView === calculatorFormViews.imperial;
  const metricMode = formView === calculatorFormViews.metric;

  return (
    <Container>
      <Suspense
        fallback={
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        }
      >
        {imperialMode && (
          <ImperialForm formView={formView} setFormView={setFormView} />
        )}
        {metricMode && (
          <MetricForm formView={formView} setFormView={setFormView} />
        )}
      </Suspense>
    </Container>
  );
}
