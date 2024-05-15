<?php
/**
 * Plugin Name: Advanced Options Gb
 * Description: Description of the Advanced Options Gb.
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: advanced-options-gb
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'AOG_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'AOG_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'AOG_DIR_PATH', plugin_dir_path( __FILE__ ) );


// class AOGPlugin{
//   function __construct(){
//     add_action( 'enqueue_block_editor_assets', [$this, 'enqueueBlockEditorAssets'] );
//     add_action( 'enqueue_block_assets', [$this, 'enqueueBlockAssets'] );
//   }

//   function enqueueBlockEditorAssets(){
//     wp_enqueue_script( 'aog-hello-advanced-script', AOG_DIR_URL . 'dist/advanced.js', ['wp-core-data'], AOG_VERSION, true );
//   }
//   function enqueueBlockAssets(){
//     wp_enqueue_script( 'aog-hello-advanced-style-script', AOG_DIR_URL . 'dist/advanced-style.js', [], AOG_VERSION, true );
//   }
// }
// new AOGPlugin();

require_once AOG_DIR_PATH . 'inc/block.php';