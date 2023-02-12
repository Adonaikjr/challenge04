import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { ResultContext } from "../../context";

import { Monthly } from "./Monthly";
import { ContainerForm, ContainerSelectPlan } from "./styled";
import { Yearly } from "./Yearly";

export default function SelectPlan() {
  const { SelectService, range, setRange } = useContext(ResultContext);

  return (
    <ContainerSelectPlan>
      <Section
        title="Select your plan"
        text="You have the option of monthly or yearly biling."
      />
      { range > 50 ? <Yearly /> : <Monthly /> }
      <ContainerForm>
        <p>Monthly</p>
        <label>
          <input
            type="range"
            name={range}
            onChange={(e) => setRange(e.target.value)}
            min="0"
            max="100"
          />
        </label>
        <p>Yearly</p>
      </ContainerForm>
      <Footer title="Next Step" onClick={SelectService} />
    </ContainerSelectPlan>
  );
}
