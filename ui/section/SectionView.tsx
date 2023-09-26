import { DnDBuilder, useEditor } from 'build-ui';
import Section from './Section';

type SectionViewProps = {
	id: string;
	[key: string]: any;
};

const SectionView: React.FC<SectionViewProps> = ({ id, ...props }) => {
	const editor = useEditor({
		id: id,
	});
	return (
		<DnDBuilder onDrop={editor.handleDrop}>
			<Section {...props} />
		</DnDBuilder>
	);
};

export default SectionView;
