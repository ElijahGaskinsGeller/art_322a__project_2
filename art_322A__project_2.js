(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"art_322A__project_2_atlas_1", frames: [[0,603,300,300],[302,603,300,300],[0,0,601,601]]},
		{name:"art_322A__project_2_atlas_2", frames: [[0,0,601,601],[0,603,601,601],[0,1206,601,601],[603,0,601,601],[1206,0,601,601],[603,603,601,601],[603,1206,601,601],[1206,603,601,601],[1206,1206,601,601]]},
		{name:"art_322A__project_2_atlas_3", frames: [[0,701,601,601],[0,1304,601,601],[603,701,601,601],[603,1304,601,601],[1206,701,601,601],[1206,1304,601,601],[0,0,1986,699]]},
		{name:"art_322A__project_2_atlas_4", frames: [[0,0,1986,699],[0,701,1986,699]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._00 = function() {
	this.initialize(ss["art_322A__project_2_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._01 = function() {
	this.initialize(ss["art_322A__project_2_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._02 = function() {
	this.initialize(ss["art_322A__project_2_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._03 = function() {
	this.initialize(ss["art_322A__project_2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._03_1 = function() {
	this.initialize(ss["art_322A__project_2_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._10 = function() {
	this.initialize(ss["art_322A__project_2_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._20 = function() {
	this.initialize(ss["art_322A__project_2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._20_1 = function() {
	this.initialize(ss["art_322A__project_2_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._21 = function() {
	this.initialize(ss["art_322A__project_2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._22 = function() {
	this.initialize(ss["art_322A__project_2_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._23 = function() {
	this.initialize(ss["art_322A__project_2_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ac0 = function() {
	this.initialize(ss["art_322A__project_2_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ac1 = function() {
	this.initialize(ss["art_322A__project_2_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ac2 = function() {
	this.initialize(ss["art_322A__project_2_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ac3 = function() {
	this.initialize(ss["art_322A__project_2_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ac4 = function() {
	this.initialize(ss["art_322A__project_2_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ac5 = function() {
	this.initialize(ss["art_322A__project_2_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ac6 = function() {
	this.initialize(ss["art_322A__project_2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cop_car_0 = function() {
	this.initialize(ss["art_322A__project_2_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cop_car_1 = function() {
	this.initialize(ss["art_322A__project_2_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cop_car_2 = function() {
	this.initialize(ss["art_322A__project_2_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.police_panel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.cop_car_2();
	this.instance.setTransform(0,0,0.4531,0.4531);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({_off:true},5).wait(5));

	// Layer_3
	this.instance_1 = new lib.cop_car_1();
	this.instance_1.setTransform(0,0,0.4531,0.4531);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(14));

	// Layer_2
	this.instance_2 = new lib.cop_car_0();
	this.instance_2.setTransform(0,0,0.4532,0.4532);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},5).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,900,316.8);


(lib._23_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib._23();
	this.instance.setTransform(0,0,0.4992,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._23_1, new cjs.Rectangle(0,0,300,300), null);


(lib._22_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib._22();
	this.instance.setTransform(0,0,0.4992,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._22_1, new cjs.Rectangle(0,0,300,300), null);


(lib._21_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib._21();
	this.instance.setTransform(0,0,0.4992,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._21_1, new cjs.Rectangle(0,0,300,300), null);


(lib._20_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib._20_1();
	this.instance.setTransform(0,0,0.4992,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib._20();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._20_2, new cjs.Rectangle(0,0,300,300), null);


(lib._1x = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib._10();
	this.instance.setTransform(0,0,0.4992,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._1x, new cjs.Rectangle(0,0,300,300), null);


(lib._03_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib._03_1();
	this.instance.setTransform(0,0,0.4992,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib._03();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._03_2, new cjs.Rectangle(0,0,300,300), null);


(lib._02_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib._02();
	this.instance.setTransform(0,0,0.4992,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._02_1, new cjs.Rectangle(0,0,300,300), null);


(lib._01_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib._01();
	this.instance.setTransform(0,0,0.4992,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._01_1, new cjs.Rectangle(0,0,300,300), null);


(lib._00_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._00();
	this.instance.setTransform(0,0,0.4992,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._00_1, new cjs.Rectangle(0,0,300,300), null);


(lib.page = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ac_6
	this.instance = new lib.ac6();
	this.instance.setTransform(427,2842,1.5436,1.5436);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ac_2
	this.instance_1 = new lib.ac2();
	this.instance_1.setTransform(-195,2354,1.129,1.129);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// police
	this.instance_2 = new lib.police_panel();
	this.instance_2.setTransform(498,1571,1,1,0,0,0,450,171);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// ac_1
	this.instance_3 = new lib.ac1();
	this.instance_3.setTransform(590,1831,0.6206,0.6206);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// walk
	this.instance_4 = new lib._1x();
	this.instance_4.setTransform(500.7,5039.6,1,1,0,0,0,150,150);

	this.instance_5 = new lib._1x();
	this.instance_5.setTransform(500.7,4690.9,1,1,0,0,0,150,150);

	this.instance_6 = new lib._1x();
	this.instance_6.setTransform(500.7,4342.2,1,1,0,0,0,150,150);

	this.instance_7 = new lib._1x();
	this.instance_7.setTransform(500.7,3993.5,1,1,0,0,0,150,150);

	this.instance_8 = new lib._1x();
	this.instance_8.setTransform(500.7,3644.8,1,1,0,0,0,150,150);

	this.instance_9 = new lib._1x();
	this.instance_9.setTransform(500.7,3296.1,1,1,0,0,0,150,150);

	this.instance_10 = new lib._1x();
	this.instance_10.setTransform(500.7,2947.4,1,1,0,0,0,150,150);

	this.instance_11 = new lib._1x();
	this.instance_11.setTransform(500.7,2598.7,1,1,0,0,0,150,150);

	this.instance_12 = new lib._1x();
	this.instance_12.setTransform(500.7,2250,1,1,0,0,0,150,150);

	this.instance_13 = new lib._1x();
	this.instance_13.setTransform(500.7,1900,1,1,0,0,0,150,150);

	this.instance_14 = new lib._1x();
	this.instance_14.setTransform(500,1550,1,1,0,0,0,150,150);

	this.instance_15 = new lib._1x();
	this.instance_15.setTransform(500,1200,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// panels
	this.instance_16 = new lib._1x();
	this.instance_16.setTransform(500,1200,1,1,0,0,0,150,150);

	this.instance_17 = new lib._1x();
	this.instance_17.setTransform(500,850,1,1,0,0,0,150,150);

	this.instance_18 = new lib._1x();
	this.instance_18.setTransform(500,500,1,1,0,0,0,150,150);

	this.instance_19 = new lib._23_1();
	this.instance_19.setTransform(850,1200,1,1,0,0,0,150,150);

	this.instance_20 = new lib._03_2();
	this.instance_20.setTransform(150,1200,1,1,0,0,0,150,150);

	this.instance_21 = new lib._22_1();
	this.instance_21.setTransform(850,850,1,1,0,0,0,150,150);

	this.instance_22 = new lib._02_1();
	this.instance_22.setTransform(150,850,1,1,0,0,0,150,150);

	this.instance_23 = new lib._21_1();
	this.instance_23.setTransform(850,500,1,1,0,0,0,150,150);

	this.instance_24 = new lib._01_1();
	this.instance_24.setTransform(150,500,1,1,0,0,0,150,150);

	this.instance_25 = new lib._20_2();
	this.instance_25.setTransform(850,150,1,1,0,0,0,150,150);

	this.instance_26 = new lib._1x();
	this.instance_26.setTransform(500,150,1,1,0,0,0,150,150);

	this.instance_27 = new lib._00_1();
	this.instance_27.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(1));

	// ac_0
	this.instance_28 = new lib.ac0();
	this.instance_28.setTransform(82,1837,0.2173,0.2173);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1));

	// ac_3
	this.instance_29 = new lib.ac3();
	this.instance_29.setTransform(549,2691,0.3397,0.3397);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1));

	// ac_4
	this.instance_30 = new lib.ac4();
	this.instance_30.setTransform(-13,3401,0.4741,0.4741);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1));

	// ac_5
	this.instance_31 = new lib.ac5();
	this.instance_31.setTransform(235,4057,0.2694,0.2694);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EiR/AAAMEj/AAA");
	this.shape.setTransform(550.475,5970.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.page, new cjs.Rectangle(-384.9,0,1870.8000000000002,5971.1), null);


// stage content:
(lib.art_322A__project_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.page = new lib.page();
	this.page.name = "page";
	this.page.setTransform(511.25,1181.95,1,1,0,0,0,500,675);

	this.timeline.addTween(cjs.Tween.get(this.page).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(138.8,891,1357.9,5586.5);
// library properties:
lib.properties = {
	id: 'F09F6349E80CCB41AF97CF524489CFD5',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/art_322A__project_2_atlas_1.png", id:"art_322A__project_2_atlas_1"},
		{src:"images/art_322A__project_2_atlas_2.png", id:"art_322A__project_2_atlas_2"},
		{src:"images/art_322A__project_2_atlas_3.png", id:"art_322A__project_2_atlas_3"},
		{src:"images/art_322A__project_2_atlas_4.png", id:"art_322A__project_2_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F09F6349E80CCB41AF97CF524489CFD5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;