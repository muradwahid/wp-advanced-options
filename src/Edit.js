import { InspectorControls } from "@wordpress/block-editor";
import { useEffect, useState } from 'react';
import { AdvancedOptions } from './Components';
import { BGradient } from "./Components/Panel/BGradient/BGradient";
import { TabPanel } from './Components/Panel/TabPanel/TabPanel';
const Edit = props => {
	const { className, setAttributes, clientId, attributes } = props;
	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId
	const { gradient } = attributes;
	const [items, setItems] = useState([
		{ title: "title 1", value: "value 1" },
		{ title: "title 2", value: "value 2" },
		{ title: "title 3", value: "value 3" },
		{ title: "title 4", value: "value 4" },
		{ title: "title 5", value: "value 5" },
		{ title: "title 6", value: "value 6" },
	])
	const [tab, setTab] = useState('content');

	useEffect(() => {
		// console.log(gradient)
	}, [gradient])
	return <div className={className} id={`hbHelloBlock-${clientId}`}>
		<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur libero expedita soluta, porro voluptatum facilis quisquam similique in deserunt temporibus architecto praesentium odio repellendus cupiditate, optio laudantium. Dolorum, voluptatum delectus.</p>
		<InspectorControls>
			<TabPanel value={tab} onChange={setTab} />
			{
				tab === 'content' && <>
					{/* <BGradient value={gradient} onChange={val => setAttributes({ gradient: val })} />
					<AdvancedOptions attributes={attributes} setAttributes={setAttributes} /> */}

				</>
			}
		</InspectorControls>
	</div>;
};
export default Edit;