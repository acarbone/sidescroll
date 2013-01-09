/**
 * Sidescroll 0.1.0
 * @author Alessandro Carbone
 * MIT license
 */

(function(){

	if( !window.addEventListener ) {
		return;
	}

	var self = window.Sidescroll = {
		init: function() {
			self.generate();

			document.addEventListener('scroll', self.scrolling, false);
		},

		generate: function() {

			self.wrapper = document.createElement('div');
			self.wrapper.className = "wrap-sidescroll";
			self.scroller = document.createElement('hr');
			self.scroller.className = "sidescroll";
			self.wrapper.appendChild( self.scroller );
			document.body.appendChild( self.wrapper );

		},

		scrolling: function() {
		


		},

		getScrollTop: function() {
		    if (typeof pageYOffset!= 'undefined'){
		        //most browsers
		        return pageYOffset;
		    }
		    else{
		        var B= document.body; //IE 'quirks'
		        var D= document.documentElement; //IE with doctype
		        D= (D.clientHeight)? D: B;
		        return D.scrollTop;
		    }
		}
		styleElement: function(style) {
			if (style.hasAttribute('data-noprefix')) {
				return;
			}
			var disabled = style.disabled;
			
			style.textContent = self.fix(style.textContent, true, style);
			
			style.disabled = disabled;
		},

		styleAttribute: function(element) {
			var css = element.getAttribute('style');
			
			css = self.fix(css, false, element);
			
			element.setAttribute('style', css);
		}
		
	};

	/**************************************
	 * Init Sidescroll
	 **************************************/
	(function(){
		document.addEventListener('DOMContentLoaded', Sidescroll.init, false);
	})();

})();