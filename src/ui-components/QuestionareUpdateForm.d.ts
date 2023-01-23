/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Questionare } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QuestionareUpdateFormInputValues = {
    asking?: string;
    image?: string;
};
export declare type QuestionareUpdateFormValidationValues = {
    asking?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionareUpdateFormOverridesProps = {
    QuestionareUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    asking?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionareUpdateFormProps = React.PropsWithChildren<{
    overrides?: QuestionareUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    questionare?: Questionare;
    onSubmit?: (fields: QuestionareUpdateFormInputValues) => QuestionareUpdateFormInputValues;
    onSuccess?: (fields: QuestionareUpdateFormInputValues) => void;
    onError?: (fields: QuestionareUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionareUpdateFormInputValues) => QuestionareUpdateFormInputValues;
    onValidate?: QuestionareUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionareUpdateForm(props: QuestionareUpdateFormProps): React.ReactElement;
