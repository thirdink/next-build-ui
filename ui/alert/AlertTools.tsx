import { DnDBuilder, useTools, item, branch } from 'build-ui';

const AlertTools = () => {
	const tools = useTools();
	const handleDragTool = () => {
		const alertProps = {
			message: 'How is it going, folk?',
			text: 'Greet me',
		};
		const alert = item({
			type: 'Alert',
			props: alertProps,
		});
		const data = branch(alert);
		tools.triggerDragStart({
			data: data,
		});
	};
	return (
		<DnDBuilder
			onDragStart={handleDragTool}
			onDragEnd={tools.handleDragEnd}
			draggable={true}
			as='button'
		>
			Alert
		</DnDBuilder>
	);
};
export default AlertTools;
