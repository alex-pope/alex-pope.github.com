window.Flocking = ( function(Flocking, undefined) {
    Flocking.BufferedCanvas = function(width, height) {
		this.bufferCanvas = document.createElement('canvas');
		this.bufferContext = this.bufferCanvas.getContext('2d');
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		
		this.bufferCanvas.id = 'buffer';
		this.bufferCanvas.width = width || 960;
		this.bufferCanvas.height = height || 540;
		
		this.canvas.id = 'canvas';
		this.canvas.width = width || 960;
		this.canvas.height = height || 540;
		
		document.body.appendChild(this.canvas);
		
		this.textures = [];
		
		return this;
	};
    
    return Flocking;
} )(window.Flocking || {});