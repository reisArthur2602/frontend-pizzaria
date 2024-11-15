import React, { forwardRef } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { Input, InputProps } from "../../../components/ui/input";

export const TableInput = forwardRef(
  (
    props: NumericFormatProps<InputProps>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <NumericFormat
        {...props}
        prefix="Mesa "
        allowNegative={false}
        decimalScale={0}
        customInput={Input}
        getInputRef={ref}
      />
    );
  },
);

TableInput.displayName = "TableInput";
