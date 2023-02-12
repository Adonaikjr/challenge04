import { ContainerAddOns, InputCheckBox } from "../styled";
import { Section } from "../../../components/Section";

import { Form } from "../../../components/Form";
import { Footer } from "../../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ResultContext } from "../../../context";

export default function AddOnsYearly() {
  const navigate = useNavigate();
  const {
    isOnlineService,
    isCustomizable,
    isLargerStorage,
    SelectPickAddOns,
    setIsOnlineService,
    setPicksAddOns,
    setIsCustomizable,
    setIsLargerStorage,
  } = useContext(ResultContext);

  const isChecketService = () => {
    setIsOnlineService(!isOnlineService);
  };
  const isChecketLarger = () => {
    setIsLargerStorage(!isLargerStorage);
  };
  const isCheckeCustomizable = () => {
    setIsCustomizable(!isCustomizable);
  };

  const handleSubmitNext = () => {
    navigate("/summary");
  };

  return (
    <ContainerAddOns>
      <Section
        title="Pick add-ons"
        text="Add-ons help enhance your gaming experience."
      />
      <Form>
        <label>
          <InputCheckBox
            type="checkbox"
            id="online"
            name="online"
            checked={isOnlineService}
            onChange={isChecketService}
          />
          <p>
            <span>Online service</span>
            acess to multiplayer games
          </p>
          <h5>+$10/yr</h5>
        </label>
        <label>
          <InputCheckBox
            type="checkbox"
            id="larger"
            checked={isLargerStorage}
            onChange={isChecketLarger}
          />
          <p>
            <span>Online service</span>
            acess to multiplayer games
          </p>
          <h5>+$20/yr</h5>
        </label>
        <label>
          <InputCheckBox
            type="checkbox"
            id="customizable"
            checked={isCustomizable}
            onChange={isCheckeCustomizable}
          />
          <p>
            <span>Online service</span>
            acess to multiplayer games
          </p>
          <h5>+$20/yr</h5>
        </label>
      </Form>
      <Footer title="Next Step" onClick={SelectPickAddOns} />
    </ContainerAddOns>
  );
}
