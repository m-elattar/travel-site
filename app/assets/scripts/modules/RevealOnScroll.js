import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(els,offsets){
		this.itemsToreveal = els;
		this.offsetPersentages = offsets;
		this.hideInitially();
		this.createWayPoints();
	}

	hideInitially(){
		this.itemsToreveal.addClass('reveal-item');
	}

	createWayPoints(){
		var that = this;
		this.itemsToreveal.each(function(){
			var currentItem = this;
			new Waypoint({
				element  : currentItem,
				handler : function(){
					$(currentItem).addClass('reveal-item--is-visible');
				},
				offset : that.offsetPersentages
			});
		});
	}
}

export default RevealOnScroll;