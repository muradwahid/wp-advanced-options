<?php
class AOGHelloBlock{
	public function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}
	function onInit() {
		wp_register_style( 'aog-hello-style', AOG_DIR_URL . 'dist/style.css', [ ], AOG_VERSION ); // Style
		wp_register_style( 'aog-hello-editor-style', AOG_DIR_URL . 'dist/editor.css', [ 'aog-hello-style' ], AOG_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'aog-hello-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'aog-hello-editor-script', 'textdomain', AOG_DIR_PATH . 'languages' );
	}

	function render( $attributes ){
		extract( $attributes );
		
		wp_enqueue_style( 'aog-hello-style' );
		wp_enqueue_script( 'aog-hello-script', AOG_DIR_URL . 'dist/script.js', [ 'react', 'react-dom' ], AOG_VERSION, true );
		wp_set_script_translations( 'aog-hello-script', 'textdomain', AOG_DIR_PATH . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-aog-hello $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='aogHelloBlock-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	}
}
new AOGHelloBlock();
