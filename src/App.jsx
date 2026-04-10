import React from "react";
import Greeting from "./Greeting";
import DeclearingProp from "./DeclearingProp";
import DestructuringProps from "./DestructuringProps";
import ConditionalRender from "./Component/ConditionalRender";
import ListRendering from "./Component/ListRendering";
import UseStateHook from "./Component/UseStateHook";
import Theme from "./Component/Theme";
import Fields from "./Component/Fields";
import RegForm from "./Component/RegForm";
import ConditionalForm from "./Component/ConditionalForm";
import UseEffectHook from "./Component/UseEffectHook";
import Timer from "./Component/Timer";
import Watch from "./Component/Watch";
import UseEffectAPI from "./Component/UseEffectAPI";
import UseRefHook from "./Component/UseRefHook";

export default function App() {
  const name = "hari";
  const age = "55";
  const phone = "5466599";

  const name2 = "kumar";
  const age2 = "44";
  const gender2 = "male";
  const phone2 = "449498498";

  const name3 = "raj kumar ";
  const age3 = "77";
  const phone3 = "48999494949498498";

  const city = "chennai";

  return (
    <>
      <UseRefHook />
      <UseEffectAPI />
      <Watch />
      <Timer />
      <UseEffectHook />
      <ConditionalForm />
      <RegForm />
      <Fields />
      <Theme />
      <UseStateHook />
      <ListRendering />
      <ConditionalRender />
      hello
      <DestructuringProps name={name} age={age} phone={phone} />
      <DestructuringProps
        name={name2}
        gender={gender2}
        age={age2}
        phone={phone2}
      />
      <DestructuringProps name={name3} age={age3} phone={phone3} />
      <DeclearingProp name={name} city={city} />
      <Greeting />
      <h2>react class - {name}</h2>
    </>
  );
}
