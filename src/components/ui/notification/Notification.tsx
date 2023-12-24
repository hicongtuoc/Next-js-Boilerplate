'use client';

import './notification.scss';

import type { ToastOptions } from 'react-toastify';
import { toast } from 'react-toastify';

export interface MsgProps {
    title?: string;
    message: string;
}

interface NotificationServiceProps {
    title?: string;
    message: string;
    options?: ToastOptions;
}

const Msg = ({ title, message }: MsgProps) => (
    <div>
        {title && (
            <h1 style={{ fontWeight: 'bold', fontSize: '1rem' }}>{title}</h1>
        )}
        <p>{message}</p>
    </div>
);

// TODO:
// Thêm notification loading and promise
// https://fkhadra.github.io/react-toastify/promise#toastpromise
export const notificationService = {
    success: ({ title, message, options }: NotificationServiceProps) => {
        toast.success(<Msg title={title} message={message} />, options);
    },
    error: ({ title, message, options }: NotificationServiceProps) => {
        toast.error(<Msg title={title} message={message} />, options);
    },
    warn: ({ title, message, options }: NotificationServiceProps) => {
        toast.warn(<Msg title={title} message={message} />, options);
    },
    dismissAll: () => {
        toast.dismiss();
    },
};
