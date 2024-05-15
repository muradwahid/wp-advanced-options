import { createHigherOrderComponent } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
import { AdvancedOptions } from "./Components";

const ourBlocks = ['hb/hello', "aog/advanced-options-gb","b-blocks/hotspot-block"];
const options = ['background']

const setAttribute = (settings, name) => {
  if (ourBlocks.includes(name)) {
    // console.log("name")
    settings.attributes = Object.assign(settings.attributes || {}, {
      advanced: {
        type: "object"
      }
    })
  }
  return settings;
}

const addInspectorControl = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    if (ourBlocks.includes(props.name)) {
      return <>
        <BlockEdit {...props} />
        {/* <AdvancedOptions {...props} enabled={options} /> */}
      </>
    }

    return <BlockEdit {...props} />
  }
}, 'bBlocksAdvancedOptions');


const setToDataProps = (extraProps, blockType, attributes) => {
  if (ourBlocks.includes(blockType.name)) {
    const { advanced } = attributes;

    if (advanced) {
      extraProps = {
        ...extraProps,
        ['bblocks-advanced']: advanced,
      }
    }
  }

  return extraProps;
}

const withPropsToBlockListBlock = createHigherOrderComponent(
  (BlockListBlock) => (props) => {
    const { attributes } = props;
    const { advanced, wrapperProps = {} } = attributes;
    // console.log(props);
    return (ourBlocks.includes(props.name) && advanced) ? (
      // <AdvancedBlockListBlock
      //   {...props}
      //   BlockListBlock={BlockListBlock}
      // />
      <BlockListBlock
        {...props}
        wrapperProps={{
          ...wrapperProps,
          'data-bblocks-advanced': JSON.stringify(advanced)
        }}
        data-bblocks-advanced={advanced}
      />
    ) : (
      <BlockListBlock {...props} />
    );
  },
  "withPropsToBlockListBlock",
);


addFilter('blocks.registerBlockType', 'b-blocks/advanced', setAttribute);
addFilter('editor.BlockEdit', 'b-blocks/advanced', addInspectorControl)
addFilter('blocks.getSaveContent.extraProps', 'b-blocks/advanced', setToDataProps);
addFilter('editor.BlockListBlock', 'b-blocks/advanced', withPropsToBlockListBlock,);
