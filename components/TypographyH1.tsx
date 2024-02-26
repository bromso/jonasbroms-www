import React, { ReactNode, ReactElement } from 'react';

export const TypographyH1 = ({ children }: { children: ReactNode; }): ReactElement => {
	return (
		<h1 className="scroll-m-20 text-6xl tracking-tight lg:text-8xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
			{children}
		</h1>
	);
}