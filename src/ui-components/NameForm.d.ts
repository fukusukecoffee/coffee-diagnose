/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NameFormOverridesProps = {
    NameForm?: PrimitiveOverrideProps<ViewProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "\u307F\u3046\u3089\u3075\u304F\u3059\u3051"?: PrimitiveOverrideProps<TextProps>;
    "\u304A\u540D\u524D"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NameFormProps = React.PropsWithChildren<Partial<ViewProps> & {
    user?: User;
} & {
    overrides?: NameFormOverridesProps | undefined | null;
}>;
export default function NameForm(props: NameFormProps): React.ReactElement;
