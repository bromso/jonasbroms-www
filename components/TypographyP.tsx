import React, { ReactNode, ReactElement } from 'react';

export const TypographyP = ({ children }: { children: ReactNode; }): ReactElement => {
	return (
		<p className="mt-2 font-normal lg:text-2xl text-base bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
			{children}
		</p>
	);
}