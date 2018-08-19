<?php 

// Note: The snippet below would be placed into my child theme's `functions.php`:

// include custom jQuery library of choice
function custom_jquery()
{
  // CDN link or file path to jquery library you wish to register:
  $jquery_path = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";

  // De-register WordPress's default jQuery library:
  wp_deregister_script('jquery');
  
  // Enqueue jQuery CDN version of choice into WordPress:
  wp_enqueue_script('jquery', $jquery_path, null, null, true);

}

// Use `wp_enqueue_scripts` hook and invoke our custom_jquery() method:
add_action('wp_enqueue_scripts', 'custom_jquery');


