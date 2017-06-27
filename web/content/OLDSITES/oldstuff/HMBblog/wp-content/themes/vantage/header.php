<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package vantage
 * @since vantage 1.0
 * @license GPL 2.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta http-equiv="X-UA-Compatible" content="IE=10" />

<title>Hungry March Band - Legendary NYC Brass Ensemble</title>
<meta name="DESCRIPTION" content="Hungry March Band, Brass Band">	
<meta name="KEYWORDS" content="Bands, Band, Jazz, Wedding Band, New York City Band, New York city, Brass Band, 
Brass Bands, Wedding Band, Wedding Bands, Band for hire in NYC, NYC, Best Band in the World, 
Marching Band, Music, Alternative, Hungry March band, Hungry Marching Band, Hungry Man Marching Band,
 Brass band, jazz, New Orleans, Second Line, New York City, Brooklyn, Fun, Music, Street brass band,
  Hungary March Band, New york city wedding band, Music, street music, brass street music, japanese members, Funeral band,
   secondline, second line, second line brass band, Brooklyn Band, brooklyn based band, 
Critical Brass, Hungry Man March Band, Jazz explosion, brass explosion,
Portable Soundtracks for Temporary Utopias,
The band that ate the world,
Kris Anton,  
Jason Candler,  
Emily Fairey,
Cousin Johnny Heyenga, 
Sebastian Carlo Isler,  
Jeremy Mushlin,  
Sasha Sumner, 
Okkon Tomohiko, 
Samantha Tsistinas, 
Sara Valentine , 
Theresa Westerdahl, 
Tara Fire Ball, 
Libby Stephens,
John Waters,
Tom Abbs,
Cecil

 ">



	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<?php do_action('vantage_before_page_wrapper') ?>

<div id="page-wrapper">

	<?php do_action( 'vantage_before_masthead' ); ?>

	<?php get_template_part( 'parts/masthead', apply_filters( 'vantage_masthead_type', siteorigin_setting( 'layout_masthead' ) ) ); ?>

	<?php do_action( 'vantage_after_masthead' ); ?>

	<?php vantage_render_slider() ?>

	<?php do_action( 'vantage_before_main_container' ); ?>

	<div id="main" class="site-main">
		<div class="full-container">
			<?php do_action( 'vantage_main_top' ); ?>