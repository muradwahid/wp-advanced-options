const AdvancedBlockListBlock = (props) => {
	const { BlockListBlock, ...blockListBlockProps } = props;

	const { attributes, wrapperProps = {} } = blockListBlockProps;

	const { advanced = {} } = attributes;

	// console.log(advanced);

	return (
		<BlockListBlock
			{...blockListBlockProps}
			wrapperProps={{
				...wrapperProps,
				...(advanced && {
					'bblocks-advanced': advanced,
				})
			}}
		/>
	);
};
export default AdvancedBlockListBlock;