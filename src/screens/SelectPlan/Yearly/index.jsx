import { Card } from "../../../components/Card";
import { ContainerYearly } from "./styled";
import advanced from "../../../assets/images/icon-advanced.svg";
import pro from "../../../assets/images/icon-pro.svg";
import arcade from "../../../assets/images/icon-arcade.svg";
import { useContext } from "react";
import { ResultContext } from "../../../context";
export function Yearly() {
  const {
    ArcadePlanYearly,
    AdvancedPlanYearly,
    ProPlanYearly,
    setHandleOptions,
  } = useContext(ResultContext);

  return (
    <ContainerYearly>
      <Card
        key="advancedId"
        img={<img src={arcade} alt="arcade" />}
        price="90/yr"
        title="Arcade"
        monthsFree="2 months free"
      >
        <input
          type="radio"
          name="plan"
          id="planYearly1"
          value={90}
          checked={ArcadePlanYearly}
          onChange={(e) => setHandleOptions(e.target.value)}
        />
      </Card>

      <Card
        img={<img src={advanced} alt="advanced" />}
        price="120/yr"
        title="Advanced"
        monthsFree="2 months free"
      >
        <input
          type="radio"
          name="plan"
          id="planYearly2"
          value={120}
          checked={AdvancedPlanYearly}
          onChange={(e) => setHandleOptions(e.target.value)}
        />
      </Card>

      <Card
        img={<img src={pro} alt="pro" />}
        price="150/yl"
        title="Pro"
        monthsFree="2 months free"
      >
        <input
          type="radio"
          name="plan"
          id="planYearly3"
          value={150}
          checked={ProPlanYearly}
          onChange={(e) => setHandleOptions(e.target.value)}
        />
      </Card>
    </ContainerYearly>
  );
}

/**
 *       <div>
     Plano1
     
      </label>
      </div>
      <div>
      <label for="plan2">plano 2
      <input type="radio" name='plan' id='plan2'/>
      </label>
      </div>
      <div>
      <label for="plan3">plano 3
      <input type="radio" name='plan' id='plan3'/>
      </label>
      </div>
 */
