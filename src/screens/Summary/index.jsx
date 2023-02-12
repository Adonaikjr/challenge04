import { ContainerApp } from "../App/styled";
import { Section } from "../../components/Section";
import { useContext } from "react";
import { ResultContext } from "../../context";
import { Footer } from "../../components/Footer";
import { ContainerContent, ContainerTotal } from "./styled";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Summary() {
  const {
    resultPlan,
    textPlan,
    PicksAddOns,
    plan,
    isCustomizableText,
    isOnlineServiceText,
    isLargerStorageText,
    addOnsPriceService,
    addOnsPrice,
    addOnsPriceCustomizable,
  } = useContext(ResultContext);

  return (
    <ContainerApp>
      <Section
        title="Finishing up"
        text="Double-check everything looks OK before confirming."
      />

      <ContainerContent>
        <article>
          <div>
            <h3>{textPlan}</h3>
            <Link to="/select-plan">Change</Link>
          </div>
          <h4>
            ${resultPlan}
            <span>{plan}</span>
          </h4>
        </article>
        <section>
          <p>
            {isCustomizableText}
            <strong>
              {isCustomizableText
                ? `+$${addOnsPriceCustomizable}${plan}`
                : isCustomizableText}
            </strong>
          </p>
          <p>
            {isLargerStorageText}
            <strong>
              {isLargerStorageText
                ? `+$${addOnsPrice}${plan}`
                : isLargerStorageText}
            </strong>
          </p>

          <p>
            {isOnlineServiceText}
            <strong>
              {isOnlineServiceText
                ? `+$${addOnsPriceService}${plan}`
                : isOnlineServiceText}
            </strong>
          </p>
        </section>
      </ContainerContent>

      <ContainerTotal>
        <p>
          Total (per {plan})
          <span>
            +${PicksAddOns}
            {plan}
          </span>
        </p>
      </ContainerTotal>

      <Footer title="Confirm" />
    </ContainerApp>
  );
}
