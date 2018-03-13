import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(){
		this.itemsToreveal = $('.feature-item');
		this.hideInitially();
		this.createWayPoints();
	}

	hideInitially(){
		this.itemsToreveal.addClass('reveal-item');
	}

	createWayPoints(){
		this.itemsToreveal.each(function(){
			var currentItem = this;
			new Waypoint({
				element  : currentItem,
				handler : function(){
					$(currentItem).addClass('reveal-item--is-visible');
				},
				offset : "80%"
			});
		});
	}
}

export default RevealOnScroll;