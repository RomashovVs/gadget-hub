import {ReactNode} from 'react';
import dynamic from 'next/dynamic';

interface Props {
    children: ReactNode;
}

const _ClientOnly = (props: Props) => {
    const {children} = props;

    return children;
};

export const ClientOnly = dynamic(() => Promise.resolve(_ClientOnly), {
    ssr: false,
});
