import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class stickyheader {
	constructor(){
		this.siteheader= $('.site-header');
		this.HeaderTriggerElement = $('.large-hero__title');
		this.CreateHeaderWaypoint();
	}

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
}
export default stickyheader;