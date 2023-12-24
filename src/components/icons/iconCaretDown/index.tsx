import type { FC } from 'react';

import type { IconProps } from '../type';

export const IconCaretDown: FC<IconProps> = ({ className, width, height }) => {
    return (
        <svg
            width={width ?? '16'}
            height={height ?? '16'}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M19 9L12 15L5 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
