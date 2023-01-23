/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QuestionareCreateFormInputValues = {
    asking?: string;
    image?: string;
};
export declare type QuestionareCreateFormValidationValues = {
    asking?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionareCreateFormOverridesProps = {
    QuestionareCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    asking?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionareCreateFormProps = React.PropsWithChildren<{
    overrides?: QuestionareCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: QuestionareCreateFormInputValues) => QuestionareCreateFormInputValues;
    onSuccess?: (fields: QuestionareCreateFormInputValues) => void;
    onError?: (fields: QuestionareCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionareCreateFormInputValues) => QuestionareCreateFormInputValues;
    onValidate?: QuestionareCreateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionareCreateForm(props: QuestionareCreateFormProps): React.ReactElement;
