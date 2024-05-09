import './style.scss';
import { createRoot } from 'react-dom/client';
// Block Name
function FrontEnd({attributes}) {
	return (
    <>
    </>
  );
}

const container = document.querySelectorAll('.wp-block-hb-hello');
container?.forEach(ele => {
	const attributes = JSON.parse(ele.dataset.attributes);
	const root = createRoot(ele);
	root.render(<FrontEnd attributes={attributes} />);
})