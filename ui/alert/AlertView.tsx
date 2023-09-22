import { DnDBuilder, useEditor } from 'build-ui';
import Alert from './Alert';

type AlertViewProps = {
	id: string;
	message: string;
	text: string;
	[key: string]: any;
};

const AlertView: React.FC<AlertViewProps> = ({ id, ...props }) => {
	const editor = useEditor({
		id: id,
	});
	return (
		<DnDBuilder
			onDragStart={editor.handleDragStart}
			onDragEnd={editor.handleDragEnd}
			draggable={true}
		>
			<Alert {...props} />
		</DnDBuilder>
	);
};
export default AlertView;
