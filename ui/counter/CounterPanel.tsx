import React from 'react';
import { useEditor } from 'build-ui';

type CounterPanelProps = {
	id: string;
	[key: string]: any;
};

export const CounterPanel: React.FC<CounterPanelProps> = ({ id }) => {
	const editor = useEditor({
		id: id,
	});
	return (
		<div>
			<input
				name='counterText'
				value={editor.props.counterText}
				// @ts-ignore
				onChange={editor.handleUpdate}
			/>
		</div>
	);
};
