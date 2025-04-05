'use client';

import dynamic from 'next/dynamic';

const Preline = dynamic(() => import('./preline'), {
	ssr: false,
});

export default function PrelineWrapper() {
	return <Preline />;
}