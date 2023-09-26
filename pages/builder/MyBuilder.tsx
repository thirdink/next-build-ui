import { Builder, Workspace, item, Panel, branch } from 'build-ui';
import { CounterView, CounterPanel, CounterTools } from '../../ui/counter';
import { SectionView } from '../../ui/section';
import { TopBar } from '../../ui/topbar/Topbar';

const MyBuilder = () => {
	const view = {
		Counter: CounterView,
		Section: SectionView,
	};
	const panel = {
		Counter: CounterPanel,
	};
	const section = item({
		type: 'Section',
	});
	const tree = branch(section);
	return (
		<Builder initialTree={tree}>
			<TopBar />
			<Workspace view={view} />
			<Panel view={panel} />
			<CounterTools />
		</Builder>
	);
};
export default MyBuilder;
