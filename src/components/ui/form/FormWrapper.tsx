import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import * as React from 'react';
import type {
    FieldValues,
    SubmitHandler,
    UseFormProps,
    UseFormReturn,
} from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { ZodType, ZodTypeDef } from 'zod';

type FormProps<TFormValues extends FieldValues, Schema> = {
    className?: string;
    onSubmit: SubmitHandler<TFormValues>;
    children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
    options?: UseFormProps<TFormValues>;
    id?: string;
    schema?: Schema;
};

export const FormWrapper = <
    TFormValues extends Record<string, unknown> = Record<string, unknown>,
    Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
        unknown,
        ZodTypeDef,
        unknown
    >,
>({
    onSubmit,
    children,
    className,
    options,
    id,
    schema,
}: FormProps<TFormValues, Schema>) => {
    const methods = useForm<TFormValues>({
        ...options,
        resolver: schema && zodResolver(schema),
    });
    return (
        <form
            className={clsx('', className)}
            onSubmit={methods.handleSubmit(onSubmit)}
            id={id}
        >
            {children(methods)}
        </form>
    );
};
