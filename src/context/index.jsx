import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ResultContext = createContext({});
export function ResultPlantPay({ children }) {
  const navigate = useNavigate();
  //states plan monly
  const [ArcadePlan, setArcadePlan] = useState();
  const [AdvancedPlan, setAdvancedPlan] = useState();
  const [ProPlan, setProPlan] = useState();
  const [handleOptions, setHandleOptions] = useState();
  const [resultPlan, setResultPlan] = useState();
  const [textPlan, setTextPlan] = useState("");

  //states plan yearly
  const [ArcadePlanYearly, setArcadePlanYearly] = useState();
  const [AdvancedPlanYearly, setAdvancedPlanYearly] = useState();
  const [ProPlanYearly, setProPlanYearly] = useState();
  //state SelectPlan
  const [range, setRange] = useState();

  function SelectService(e) {
    e.preventDefault();
    {
      range > 50 ? navigate("/AddOnsYearly") : navigate("/addons");
    }
    {
      ArcadePlan ? setHandleOptions(9) : setHandleOptions(0);
    }

    {
      AdvancedPlan ? setHandleOptions(12) : setHandleOptions(0);
    }
    {
      ProPlan ? setHandleOptions(15) : setHandleOptions(0);
    }
    {
      ArcadePlanYearly ? setHandleOptions(90) : setHandleOptions(0);
    }
    {
      AdvancedPlanYearly ? setHandleOptions(120) : setHandleOptions(0);
    }
    {
      ProPlanYearly ? setHandleOptions(150) : setHandleOptions(0);
    }

    {
      handleOptions == 9
        ? setTextPlan("Arcade Monthly")
        : handleOptions == 12
        ? setTextPlan("Advanced Monthly")
        : handleOptions == 15
        ? setTextPlan("Pro Monthly")
        : handleOptions == 90
        ? setTextPlan("Arcade Yearly")
        : handleOptions == 120
        ? setTextPlan("Advanced Yearly")
        : handleOptions == 150
        ? setTextPlan("Pro Yearly")
        : alert("erro");
    }

    setResultPlan(handleOptions);
  }

  //states pick add-ons
  const [isOnlineService, setIsOnlineService] = useState(false);
  const [isLargerStorage, setIsLargerStorage] = useState(false);
  const [isCustomizable, setIsCustomizable] = useState(false);
  const [PicksAddOns, setPicksAddOns] = useState();
  const [plan, setPlan] = useState("/mo");
  const [isOnlineServiceText, setisOnlineServiceText] = useState("");
  const [isCustomizableText, setisCustomizableText] = useState("");
  const [isLargerStorageText, setisisLargerStorageText] = useState("");
  const [addOnsPriceService, setAddOnsPriceService] = useState();
  const [addOnsPrice, setAddOnsPrice] = useState();
  const [addOnsPriceCustomizable, setAddOnsPriceCustomizable] = useState();

  function SelectPickAddOns(e) {
    e.preventDefault();
    let n = 1;
    let x = 2;
    let y = 2;

    if (range > 50) {
      n = 10;
      x = 20;
      y = 20;
      setPlan("/yr");
    }

    const data = parseInt(resultPlan);
    let result = 0;

    console.log(isOnlineService, isLargerStorage, isCustomizable);

    if (isOnlineService && isLargerStorage && isCustomizable) {
      result = data + n + x + y;
      setisOnlineServiceText("Online Service");
      setisisLargerStorageText("Larger Storage");
      setisCustomizableText("Customizable profile");
      setAddOnsPriceService(n);
      setAddOnsPrice(x);
      setAddOnsPriceCustomizable(y);
    } else if (isOnlineService && isCustomizable) {
      result = data + n + y;
      setisOnlineServiceText("Online Service");
      setisCustomizableText("Customizable profile");
      setAddOnsPriceService(n);
      setAddOnsPriceCustomizable(y);
    } else if (isOnlineService && isLargerStorage) {
      result = data + n + x;
      setisOnlineServiceText("Online Service");
      setisisLargerStorageText("Larger Storage");
      setAddOnsPriceService(n);
      setAddOnsPrice(x);
    } else if (isLargerStorage && isCustomizable) {
      result = data + x + y;
      setisisLargerStorageText("Larger Storage");
      setisCustomizableText("Customizable profile");
      setAddOnsPrice(x);
      setAddOnsPriceCustomizable(y);
    } else if (isOnlineService) {
      result = data + n;
      setisOnlineServiceText("Online Service");
      setAddOnsPriceService(n);
    } else if (isLargerStorage) {
      result = data + x;
      setisisLargerStorageText("Larger Storage");
      setAddOnsPrice(x);
    } else if (isCustomizable) {
      result = data + y;
      setisCustomizableText("Customizable profile");
      setAddOnsPriceCustomizable(y);
    }
    setPicksAddOns(result);
    navigate("/summary");
  }

  return (
    <ResultContext.Provider
      value={{
        isCustomizableText,
        isOnlineServiceText,
        isLargerStorageText,
        addOnsPriceService,
        addOnsPriceCustomizable,
        addOnsPrice,
        SelectService,
        range,
        setRange,
        AdvancedPlan,
        ArcadePlan,
        ProPlan,
        resultPlan,
        textPlan,
        PicksAddOns,
        ArcadePlanYearly,
        AdvancedPlanYearly,
        ProPlanYearly,
        plan,
        isOnlineService,
        isCustomizable,
        isLargerStorage,
        setHandleOptions,
        SelectPickAddOns,
        setIsOnlineService,
        setIsLargerStorage,
        setPicksAddOns,
        setIsCustomizable,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
}
export default ResultPlantPay;
