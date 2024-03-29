// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require parsley
//= require underscore
//= require gmaps/google
//= require_tree .


$(function () {
	$('#restaurant_category_tokens').tokenInput('/categories.json', { crossDomain: false,
	prePopulate: $('#restaurant_category_tokens').data('pre'), preventDuplicates: true,
	theme: 'facebook', 
	});

	// Search form.
	$('#restaurant-search').submit(function () {
		$.get(this.action, $(this).serialize(), null, 'script');
		return false;
  	});
});