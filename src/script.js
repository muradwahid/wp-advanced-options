import './style.scss';
import { createRoot } from 'react-dom/client';
// Block Name
function FrontEnd({ attributes }) {
  const { advanced } = attributes;
  
	return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea maxime
        recusandae voluptate deleniti quod ipsam quisquam ex reiciendis commodi
        aliquam nostrum voluptatum illo, corporis eveniet officia velit. Ipsum,
        fuga! Facere?
      </p>
    </div>
  );
}

const container = document.querySelectorAll(".wp-block-aog-hello");
container?.forEach(ele => {
	const attributes = JSON.parse(ele.dataset.attributes);
  const root = createRoot(ele);
  ele.removeAttribute("data-attributes");
	root.render(<FrontEnd attributes={attributes} />);
})