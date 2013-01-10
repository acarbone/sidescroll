/**
 * Sidescroll 0.1.0
 * @author Alessandro Carbone
 * MIT license
 */

(function(){

	var onload = function( obj, evt, fn ) {
		if ( typeof obj.addEventListener != "undefined" )
			obj.addEventListener( evt, fn, false );
		else if ( typeof obj.attachEvent != "undefined" )
			obj.attachEvent( "on" + evt, fn );
	};

	var self = window.Sidescroll = {

		init: function() {
			self.generate();
			onload( self.document, 'scroll', self.scrolling );
			onload( self.window, 'resize', self.recalc );
		},

		generate: function() {
			self.window             = window;
			self.document           = document;
			self.body               = self.document.body;
			self.wrapper            = self.document.createElement('div');
			self.wrapper.className  = "wrap-sidescroll";
			self.scroller           = self.document.createElement('hr');
			self.scroller.className = "sidescroll";

			self.wrapper.appendChild( self.scroller );
			self.body.appendChild( self.wrapper );
			self.recalc();
		},

		recalc: function() {
			self.bodyHeight = self.getBodyHeight();
			self.maxScroll  = self.bodyHeight - self.window.innerHeight;
			self.scrolling();
		},

		scrolling: function() {
			self.scroller.style.height = Math.round(self.getScrollTop() / self.maxScroll * 100) + '%';
		},

		getScrollTop: function() {
		    if (typeof pageYOffset!= 'undefined') {
		        return pageYOffset;
		    } else {
		        var dom = self.document.documentElement;
		        dom     = (dom.clientHeight)? dom: self.document.body;
		        return dom.scrollTop;
		    }
		},

		getBodyHeight: function() {
			return Math.max(
				Math.max(self.document.body.scrollHeight, self.document.documentElement.scrollHeight),
				Math.max(self.document.body.offsetHeight, self.document.documentElement.offsetHeight),
				Math.max(self.document.body.clientHeight, self.document.documentElement.clientHeight)
			);
		}
		
	};

	/**************************************
	 * Init Sidescroll
	 **************************************/
	(function() {
		onload( window, 'load', Sidescroll.init );
	})();

})();