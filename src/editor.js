import { registerBlockType } from '@wordpress/blocks';
import metadata from '../inc/block.json';
import Edit from './Edit';
import './Components/AdvancedOptions/style';
import './editor.scss';
import { blockIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: blockIcon,

	// Build in Functions
	edit: Edit,

	save: () => null,
});