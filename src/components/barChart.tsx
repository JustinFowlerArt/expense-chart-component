import { useState } from 'react';
import data from '../data.json';

export const BarChart = () => {
	const [maxHeight, setMaxHeight] = useState(0);
	const [active, setActive] = useState(-1);

	const showActiveBar = (i: number) => {
		setActive(i);
	};

	const hideActiveBar = () => {
		setActive(-1);
	};

	data.forEach(item => {
		if (item.amount > maxHeight) {
			setMaxHeight(item.amount);
		}
	});

	const dynamicStyles = (amount: number) => {
		return { height: (amount / maxHeight) * 100 + '%' };
	};

	return (
		<div className='grid grid-cols-7 mt-12 items-end h-48 text-xs text-medium-brown'>
			{data.map((item, i) => {
				return (
					<div
						key={item.day}
						style={dynamicStyles(item.amount)}
						className='relative flex flex-col h-full items-center justify-end'
					>
						{item.amount === maxHeight || active === i ? (
							<div className='absolute top-[-2rem] bg-dark-brown text-pale-orange py-1 px-2 rounded'>
								{item.amount.toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
								})}
							</div>
						) : (
							<></>
						)}
						<div
							className={`rounded w-9/12 h-full hover:opacity-70${
								item.amount === maxHeight ? ' bg-primary-cyan' : ' bg-soft-red '
							}`}
							onMouseEnter={() => showActiveBar(i)}
							onMouseLeave={() => hideActiveBar()}
						></div>
						<p>{item.day}</p>
					</div>
				);
			})}
		</div>
	);
};
