import type { FC } from 'react';

import type { IconProps } from '../type';

export const IconMinus: FC<IconProps> = ({ className, width, height }) => {
    return (
        <svg
            width={width ?? '16'}
            height={height ?? '20'}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    );
};
