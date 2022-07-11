import { BarChart } from './components/barChart';

export const App = () => {
	return (
		<div className='flex items-center justify-center h-screen bg-neutral-cream'>
			<main className='flex flex-col space-y-4 p-4 max-w-md w-full'>
				<div className='flex justify-between p-5 bg-soft-red rounded-xl'>
					<div className='flex flex-col text-pale-orange'>
						<h3 className=''>My balance</h3>
						<h2 className='text-2xl font-bold'>$921.48</h2>
					</div>
					<div>
						<img src='./images/logo.svg' alt='logo' />
					</div>
				</div>
				<div className='flex flex-col p-5 bg-white rounded-xl'>
					<h2 className='text-2xl font-bold'>Spending - Last 7 days</h2>
					<BarChart />
					<hr className='w-90 border-neutral-cream border-t-2'></hr>
					<div className='flex justify-between pt-5 bg-white rounded-xl text-medium-brown'>
						<div className='flex flex-col'>
							<p>Total this month</p>
							<h1 className='text-dark-brown text-3xl font-bold'>$478.33</h1>
						</div>
						<div className='flex flex-col items-end justify-end'>
							<p className='text-dark-brown font-bold'>+2.4%</p>
							<p>from last month</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};
