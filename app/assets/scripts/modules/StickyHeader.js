import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class stickyheader {
	constructor(){
		this.siteheader= $('.site-header');
		this.HeaderTriggerElement = $('.large-hero__title');
		this.CreateHeaderWaypoint();
		this.PageSection=$('.page-section');
		this.HeaderLinks = $('.primary-nav a');
		this.CreatePageSectionWaypoint();
		this.addSmoothScroll();
	}

	addSmoothScroll(){
		this.HeaderLinks.smoothScroll();
	};

	CreateHeaderWaypoint(){
		var that = this ;
		new Waypoint({
			element : this.HeaderTriggerElement[0], 
			handler : function (direction){
				if (direction == 'down'){
					that.siteheader.addClass('site-header--dark');
				}else {
					that.siteheader.removeClass('site-header--dark');
				}
			}
		});
	}

	CreatePageSectionWaypoint(){
		var that = this; 
		this.PageSection.each(function(){
			var currentsection = this;
			new Waypoint({
				element: currentsection ,
				handler: function(direction){
					if(direction=='down'){
						var matchingHeaderLink = currentsection.getAttribute('data-matching-link');
					that.HeaderLinks.removeClass('is-current-link');
					$(matchingHeaderLink).addClass('is-current-link');
					}
				},
				offset : '18%'
			});
			new Waypoint({
				element: currentsection ,
				handler: function(direction){
					if(direction=='up'){
						var matchingHeaderLink = currentsection.getAttribute('data-matching-link');
					that.HeaderLinks.removeClass('is-current-link');
					$(matchingHeaderLink).addClass('is-current-link');
					}
				},
				offset : '-40%'
			});
		});
	}
}
export default stickyheader;