import { DnDBuilder, useEditor } from 'build-ui';
import { Counter } from './Counter';

type CounterViewProps = {
	id: string;
	[key: string]: any;
};

export const CounterView: React.FC<CounterViewProps> = ({ id, ...props }) => {
	const editor = useEditor({ id });
	return (
		<DnDBuilder
			onClick={editor.handlePanel}
			onDragStart={editor.handleDragStart}
			onDragEnd={editor.handleDragEnd}
			draggable={true}
		>
			<Counter {...props} />
		</DnDBuilder>
	);
};
