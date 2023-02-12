import { Card } from "../../../components/Card";
import { ContainerMonthly } from "./styled";
import advanced from "../../../assets/images/icon-advanced.svg";
import pro from "../../../assets/images/icon-pro.svg";
import arcade from "../../../assets/images/icon-arcade.svg";
import { useContext, useState } from "react";
import { ResultContext } from "../../../context";

export function Monthly() {
  const {
    setHandleOptions,
    ProPlan,
    AdvancedPlan,
    ArcadePlan,
  } = useContext(ResultContext);

  return (
    <ContainerMonthly>
      <Card
        key="advancedId"
        img={<img src={arcade} alt="arcade" />}
        price="9/mo"
        title="Arcade"
      >
        <input
          type="radio"
          name="plan"
          id="planMonthly1"
          value={9}
          checked={ArcadePlan}
          onChange={(e) => setHandleOptions(e.target.value)}
        />
      </Card>

      <Card
        img={<img src={advanced} alt="advanced" />}
        price="12/mo"
        title="Advanced"
      >
        <input
          type="radio"
          name="plan"
          id="planMonthly2"
          value={12}
          checked={AdvancedPlan}
          onChange={(e) => setHandleOptions(e.target.value)}
        />
      </Card>

      <Card img={<img src={pro} alt="pro" />} price="15/mo" title="Pro">
        <input
          type="radio"
          name="plan"
          id="planMonthly3"
          value={15}
          checked={ProPlan}
          onChange={(e) => setHandleOptions(e.target.value)}
        />
      </Card>
    </ContainerMonthly>
  );
}
