import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import "./styles.css";

const CheckboxDemo = () => (
  <div
    style={{ display: "flex", alignItems: "center" }}
    className="w-full gap-4"
  >
    <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
      <Checkbox.Indicator className="CheckboxIndicator">
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label className="" htmlFor="c1">
      Você deseja receber novidades e atualizações sobre nossos produtos?
    </label>
  </div>
);

export default CheckboxDemo;
