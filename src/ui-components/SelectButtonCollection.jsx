/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import SelectButton from "./SelectButton";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function SelectButtonCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      itemsPerPage={6}
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "SelectButtonCollection")}
      {...rest}
    >
      {(item, index) => (
        <SelectButton
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SelectButton>
      )}
    </Collection>
  );
}
