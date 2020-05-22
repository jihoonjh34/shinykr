export default(function(){"use strict";var e=function(t){if(!(this instanceof e))return new e(t);this.options=this.extend(t,{swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",detectScreenOrientation:!0,sortPluginsFor:[/palemoon/i],userDefinedFonts:[],excludeDoNotTrack:!0,excludePixelRatio:!0}),this.nativeForEach=Array.prototype.forEach,this.nativeMap=Array.prototype.map};return e.prototype={extend:function(e,t){if(null==e)return t;for(var n in e)null!=e[n]&&t[n]!==e[n]&&(t[n]=e[n]);return t},get:function(e){var t=this,n={data:[],addPreprocessedComponent:function(e){var r=e.value;"function"==typeof t.options.preprocessor&&(r=t.options.preprocessor(e.key,r)),n.data.push({key:e.key,value:r})}};n=this.userAgentKey(n),n=this.languageKey(n),n=this.colorDepthKey(n),n=this.deviceMemoryKey(n),n=this.pixelRatioKey(n),n=this.hardwareConcurrencyKey(n),n=this.screenResolutionKey(n),n=this.availableScreenResolutionKey(n),n=this.timezoneOffsetKey(n),n=this.sessionStorageKey(n),n=this.localStorageKey(n),n=this.indexedDbKey(n),n=this.addBehaviorKey(n),n=this.openDatabaseKey(n),n=this.cpuClassKey(n),n=this.platformKey(n),n=this.doNotTrackKey(n),n=this.pluginsKey(n),n=this.canvasKey(n),n=this.webglKey(n),n=this.webglVendorAndRendererKey(n),n=this.adBlockKey(n),n=this.hasLiedLanguagesKey(n),n=this.hasLiedResolutionKey(n),n=this.hasLiedOsKey(n),n=this.hasLiedBrowserKey(n),n=this.touchSupportKey(n),n=this.customEntropyFunction(n),this.fontsKey(n,(function(n){var r=[];t.each(n.data,(function(e){var t=e.value;t&&"function"==typeof t.join&&(t=t.join(";")),r.push(t)}));var i=t.x64hash128(r.join("~~~"),31);return e(i,n.data)}))},customEntropyFunction:function(e){return"function"==typeof this.options.customFunction&&e.addPreprocessedComponent({key:"custom",value:this.options.customFunction()}),e},userAgentKey:function(e){return this.options.excludeUserAgent||e.addPreprocessedComponent({key:"user_agent",value:this.getUserAgent()}),e},getUserAgent:function(){return navigator.userAgent},languageKey:function(e){return this.options.excludeLanguage||e.addPreprocessedComponent({key:"language",value:navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||""}),e},colorDepthKey:function(e){return this.options.excludeColorDepth||e.addPreprocessedComponent({key:"color_depth",value:window.screen.colorDepth||-1}),e},deviceMemoryKey:function(e){return this.options.excludeDeviceMemory||e.addPreprocessedComponent({key:"device_memory",value:this.getDeviceMemory()}),e},getDeviceMemory:function(){return navigator.deviceMemory||-1},pixelRatioKey:function(e){return this.options.excludePixelRatio||e.addPreprocessedComponent({key:"pixel_ratio",value:this.getPixelRatio()}),e},getPixelRatio:function(){return window.devicePixelRatio||""},screenResolutionKey:function(e){return this.options.excludeScreenResolution?e:this.getScreenResolution(e)},getScreenResolution:function(e){var t;return t=this.options.detectScreenOrientation&&window.screen.height>window.screen.width?[window.screen.height,window.screen.width]:[window.screen.width,window.screen.height],e.addPreprocessedComponent({key:"resolution",value:t}),e},availableScreenResolutionKey:function(e){return this.options.excludeAvailableScreenResolution?e:this.getAvailableScreenResolution(e)},getAvailableScreenResolution:function(e){var t;return window.screen.availWidth&&window.screen.availHeight&&(t=this.options.detectScreenOrientation?window.screen.availHeight>window.screen.availWidth?[window.screen.availHeight,window.screen.availWidth]:[window.screen.availWidth,window.screen.availHeight]:[window.screen.availHeight,window.screen.availWidth]),void 0!==t&&e.addPreprocessedComponent({key:"available_resolution",value:t}),e},timezoneOffsetKey:function(e){return this.options.excludeTimezoneOffset||e.addPreprocessedComponent({key:"timezone_offset",value:(new Date).getTimezoneOffset()}),e},sessionStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasSessionStorage()&&e.addPreprocessedComponent({key:"session_storage",value:1}),e},localStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasLocalStorage()&&e.addPreprocessedComponent({key:"local_storage",value:1}),e},indexedDbKey:function(e){return!this.options.excludeIndexedDB&&this.hasIndexedDB()&&e.addPreprocessedComponent({key:"indexed_db",value:1}),e},addBehaviorKey:function(e){return!this.options.excludeAddBehavior&&document.body&&document.body.addBehavior&&e.addPreprocessedComponent({key:"add_behavior",value:1}),e},openDatabaseKey:function(e){return!this.options.excludeOpenDatabase&&window.openDatabase&&e.addPreprocessedComponent({key:"open_database",value:1}),e},cpuClassKey:function(e){return this.options.excludeCpuClass||e.addPreprocessedComponent({key:"cpu_class",value:this.getNavigatorCpuClass()}),e},platformKey:function(e){return this.options.excludePlatform||e.addPreprocessedComponent({key:"navigator_platform",value:this.getNavigatorPlatform()}),e},doNotTrackKey:function(e){return this.options.excludeDoNotTrack||e.addPreprocessedComponent({key:"do_not_track",value:this.getDoNotTrack()}),e},canvasKey:function(e){return!this.options.excludeCanvas&&this.isCanvasSupported()&&e.addPreprocessedComponent({key:"canvas",value:this.getCanvasFp()}),e},webglKey:function(e){return!this.options.excludeWebGL&&this.isWebGlSupported()&&e.addPreprocessedComponent({key:"webgl",value:this.getWebglFp()}),e},webglVendorAndRendererKey:function(e){return!this.options.excludeWebGLVendorAndRenderer&&this.isWebGlSupported()&&e.addPreprocessedComponent({key:"webgl_vendor",value:this.getWebglVendorAndRenderer()}),e},adBlockKey:function(e){return this.options.excludeAdBlock||e.addPreprocessedComponent({key:"adblock",value:this.getAdBlock()}),e},hasLiedLanguagesKey:function(e){return this.options.excludeHasLiedLanguages||e.addPreprocessedComponent({key:"has_lied_languages",value:this.getHasLiedLanguages()}),e},hasLiedResolutionKey:function(e){return this.options.excludeHasLiedResolution||e.addPreprocessedComponent({key:"has_lied_resolution",value:this.getHasLiedResolution()}),e},hasLiedOsKey:function(e){return this.options.excludeHasLiedOs||e.addPreprocessedComponent({key:"has_lied_os",value:this.getHasLiedOs()}),e},hasLiedBrowserKey:function(e){return this.options.excludeHasLiedBrowser||e.addPreprocessedComponent({key:"has_lied_browser",value:this.getHasLiedBrowser()}),e},fontsKey:function(e,t){return this.options.excludeJsFonts?this.flashFontsKey(e,t):this.jsFontsKey(e,t)},flashFontsKey:function(e,t){return this.options.excludeFlashFonts?t(e):this.hasSwfObjectLoaded()&&this.hasMinFlashInstalled()?void 0===this.options.swfPath?t(e):void this.loadSwfAndDetectFonts((function(n){e.addPreprocessedComponent({key:"swf_fonts",value:n.join(";")}),t(e)})):t(e)},jsFontsKey:function(e,t){var n=this;return setTimeout((function(){var r=["monospace","sans-serif","serif"],i=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"];n.options.extendedJsFonts&&(i=i.concat(["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"])),i=(i=i.concat(n.options.userDefinedFonts)).filter((function(e,t){return i.indexOf(e)===t}));var o=document.getElementsByTagName("body")[0],a=document.createElement("div"),s=document.createElement("div"),c={},u={},l=function(){var e=document.createElement("span");return e.style.position="absolute",e.style.left="-9999px",e.style.fontSize="72px",e.style.fontStyle="normal",e.style.fontWeight="normal",e.style.letterSpacing="normal",e.style.lineBreak="auto",e.style.lineHeight="normal",e.style.textTransform="none",e.style.textAlign="left",e.style.textDecoration="none",e.style.textShadow="none",e.style.whiteSpace="normal",e.style.wordBreak="normal",e.style.wordSpacing="normal",e.innerHTML="mmmmmmmmmmlli",e},d=function(){for(var e=[],t=0,n=r.length;t<n;t++){var i=l();i.style.fontFamily=r[t],a.appendChild(i),e.push(i)}return e}();o.appendChild(a);for(var p=0,f=r.length;p<f;p++)c[r[p]]=d[p].offsetWidth,u[r[p]]=d[p].offsetHeight;var h=function(){for(var e,t,n,o={},a=0,c=i.length;a<c;a++){for(var u=[],d=0,p=r.length;d<p;d++){var f=(e=i[a],t=r[d],n=void 0,(n=l()).style.fontFamily="'"+e+"',"+t,n);s.appendChild(f),u.push(f)}o[i[a]]=u}return o}();o.appendChild(s);for(var g=[],m=0,y=i.length;m<y;m++)(function(e){for(var t=!1,n=0;n<r.length;n++)if(t=e[n].offsetWidth!==c[r[n]]||e[n].offsetHeight!==u[r[n]])return t;return t})(h[i[m]])&&g.push(i[m]);o.removeChild(s),o.removeChild(a),e.addPreprocessedComponent({key:"js_fonts",value:g}),t(e)}),1)},pluginsKey:function(e){return this.options.excludePlugins||(this.isIE()?this.options.excludeIEPlugins||e.addPreprocessedComponent({key:"ie_plugins",value:this.getIEPlugins()}):e.addPreprocessedComponent({key:"regular_plugins",value:this.getRegularPlugins()})),e},getRegularPlugins:function(){var e=[];if(navigator.plugins)for(var t=0,n=navigator.plugins.length;t<n;t++)navigator.plugins[t]&&e.push(navigator.plugins[t]);return this.pluginsShouldBeSorted()&&(e=e.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}))),this.map(e,(function(e){var t=this.map(e,(function(e){return[e.type,e.suffixes].join("~")})).join(",");return[e.name,e.description,t].join("::")}),this)},getIEPlugins:function(){var e=[];return(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window)&&(e=this.map(["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"],(function(e){try{return new window.ActiveXObject(e),e}catch(e){return null}}))),navigator.plugins&&(e=e.concat(this.getRegularPlugins())),e},pluginsShouldBeSorted:function(){for(var e=!1,t=0,n=this.options.sortPluginsFor.length;t<n;t++){var r=this.options.sortPluginsFor[t];if(navigator.userAgent.match(r)){e=!0;break}}return e},touchSupportKey:function(e){return this.options.excludeTouchSupport||e.addPreprocessedComponent({key:"touch_support",value:this.getTouchSupport()}),e},hardwareConcurrencyKey:function(e){return this.options.excludeHardwareConcurrency||e.addPreprocessedComponent({key:"hardware_concurrency",value:this.getHardwareConcurrency()}),e},hasSessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},hasLocalStorage:function(){try{return!!window.localStorage}catch(e){return!0}},hasIndexedDB:function(){try{return!!window.indexedDB}catch(e){return!0}},getHardwareConcurrency:function(){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:"unknown"},getNavigatorCpuClass:function(){return navigator.cpuClass?navigator.cpuClass:"unknown"},getNavigatorPlatform:function(){return navigator.platform?navigator.platform:"unknown"},getDoNotTrack:function(){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:"unknown"},getTouchSupport:function(){var e=0,t=!1;void 0!==navigator.maxTouchPoints?e=navigator.maxTouchPoints:void 0!==navigator.msMaxTouchPoints&&(e=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),t=!0}catch(e){}return[e,t,"ontouchstart"in window]},getCanvasFp:function(){var e=[],t=document.createElement("canvas");t.width=2e3,t.height=200,t.style.display="inline";var n=t.getContext("2d");return n.rect(0,0,10,10),n.rect(2,2,6,6),e.push("canvas winding:"+(!1===n.isPointInPath(5,5,"evenodd")?"yes":"no")),n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",this.options.dontUseFakeFontInCanvas?n.font="11pt Arial":n.font="11pt no-real-font-123",n.fillText("Cwm fjordbank glyphs vext quiz, 😃",2,15),n.fillStyle="rgba(102, 204, 0, 0.2)",n.font="18pt Arial",n.fillText("Cwm fjordbank glyphs vext quiz, 😃",4,45),n.globalCompositeOperation="multiply",n.fillStyle="rgb(255,0,255)",n.beginPath(),n.arc(50,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(0,255,255)",n.beginPath(),n.arc(100,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(255,255,0)",n.beginPath(),n.arc(75,100,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(255,0,255)",n.arc(75,75,75,0,2*Math.PI,!0),n.arc(75,75,25,0,2*Math.PI,!0),n.fill("evenodd"),t.toDataURL&&e.push("canvas fp:"+t.toDataURL()),e.join("~")},getWebglFp:function(){var e,t=function(t){return e.clearColor(0,0,0,1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),"["+t[0]+", "+t[1]+"]"};if(!(e=this.getWebglCanvas()))return null;var n=[],r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r);var i=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),r.itemSize=3,r.numItems=3;var o=e.createProgram(),a=e.createShader(e.VERTEX_SHADER);e.shaderSource(a,"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),e.compileShader(a);var s=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(s,"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),e.compileShader(s),e.attachShader(o,a),e.attachShader(o,s),e.linkProgram(o),e.useProgram(o),o.vertexPosAttrib=e.getAttribLocation(o,"attrVertex"),o.offsetUniform=e.getUniformLocation(o,"uniformOffset"),e.enableVertexAttribArray(o.vertexPosArray),e.vertexAttribPointer(o.vertexPosAttrib,r.itemSize,e.FLOAT,!1,0,0),e.uniform2f(o.offsetUniform,1,1),e.drawArrays(e.TRIANGLE_STRIP,0,r.numItems);try{n.push(e.canvas.toDataURL())}catch(e){}n.push("extensions:"+(e.getSupportedExtensions()||[]).join(";")),n.push("webgl aliased line width range:"+t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),n.push("webgl aliased point size range:"+t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),n.push("webgl alpha bits:"+e.getParameter(e.ALPHA_BITS)),n.push("webgl antialiasing:"+(e.getContextAttributes().antialias?"yes":"no")),n.push("webgl blue bits:"+e.getParameter(e.BLUE_BITS)),n.push("webgl depth bits:"+e.getParameter(e.DEPTH_BITS)),n.push("webgl green bits:"+e.getParameter(e.GREEN_BITS)),n.push("webgl max anisotropy:"+function(e){var t=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");if(t){var n=e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);return 0===n&&(n=2),n}return null}(e)),n.push("webgl max combined texture image units:"+e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),n.push("webgl max cube map texture size:"+e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),n.push("webgl max fragment uniform vectors:"+e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),n.push("webgl max render buffer size:"+e.getParameter(e.MAX_RENDERBUFFER_SIZE)),n.push("webgl max texture image units:"+e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),n.push("webgl max texture size:"+e.getParameter(e.MAX_TEXTURE_SIZE)),n.push("webgl max varying vectors:"+e.getParameter(e.MAX_VARYING_VECTORS)),n.push("webgl max vertex attribs:"+e.getParameter(e.MAX_VERTEX_ATTRIBS)),n.push("webgl max vertex texture image units:"+e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),n.push("webgl max vertex uniform vectors:"+e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),n.push("webgl max viewport dims:"+t(e.getParameter(e.MAX_VIEWPORT_DIMS))),n.push("webgl red bits:"+e.getParameter(e.RED_BITS)),n.push("webgl renderer:"+e.getParameter(e.RENDERER)),n.push("webgl shading language version:"+e.getParameter(e.SHADING_LANGUAGE_VERSION)),n.push("webgl stencil bits:"+e.getParameter(e.STENCIL_BITS)),n.push("webgl vendor:"+e.getParameter(e.VENDOR)),n.push("webgl version:"+e.getParameter(e.VERSION));try{var c=e.getExtension("WEBGL_debug_renderer_info");c&&(n.push("webgl unmasked vendor:"+e.getParameter(c.UNMASKED_VENDOR_WEBGL)),n.push("webgl unmasked renderer:"+e.getParameter(c.UNMASKED_RENDERER_WEBGL)))}catch(e){}return e.getShaderPrecisionFormat?(n.push("webgl vertex shader high float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision),n.push("webgl vertex shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMin),n.push("webgl vertex shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMax),n.push("webgl vertex shader medium float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision),n.push("webgl vertex shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMin),n.push("webgl vertex shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMax),n.push("webgl vertex shader low float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).precision),n.push("webgl vertex shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMin),n.push("webgl vertex shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMax),n.push("webgl fragment shader high float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision),n.push("webgl fragment shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMin),n.push("webgl fragment shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMax),n.push("webgl fragment shader medium float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision),n.push("webgl fragment shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMin),n.push("webgl fragment shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMax),n.push("webgl fragment shader low float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).precision),n.push("webgl fragment shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMin),n.push("webgl fragment shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMax),n.push("webgl vertex shader high int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).precision),n.push("webgl vertex shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMin),n.push("webgl vertex shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMax),n.push("webgl vertex shader medium int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).precision),n.push("webgl vertex shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMin),n.push("webgl vertex shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMax),n.push("webgl vertex shader low int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).precision),n.push("webgl vertex shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMin),n.push("webgl vertex shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMax),n.push("webgl fragment shader high int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).precision),n.push("webgl fragment shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMin),n.push("webgl fragment shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMax),n.push("webgl fragment shader medium int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).precision),n.push("webgl fragment shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMin),n.push("webgl fragment shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMax),n.push("webgl fragment shader low int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).precision),n.push("webgl fragment shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMin),n.push("webgl fragment shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMax),n.join("~")):n.join("~")},getWebglVendorAndRenderer:function(){try{var e=this.getWebglCanvas(),t=e.getExtension("WEBGL_debug_renderer_info");return e.getParameter(t.UNMASKED_VENDOR_WEBGL)+"~"+e.getParameter(t.UNMASKED_RENDERER_WEBGL)}catch(e){return null}},getAdBlock:function(){var e=document.createElement("div");e.innerHTML="&nbsp;",e.className="adsbox";var t=!1;try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e)}catch(e){t=!1}return t},getHasLiedLanguages:function(){if(void 0!==navigator.languages)try{if(navigator.languages[0].substr(0,2)!==navigator.language.substr(0,2))return!0}catch(e){return!0}return!1},getHasLiedResolution:function(){return window.screen.width<window.screen.availWidth||window.screen.height<window.screen.availHeight},getHasLiedOs:function(){var e,t=navigator.userAgent.toLowerCase(),n=navigator.oscpu,r=navigator.platform.toLowerCase();if(e=t.indexOf("windows phone")>=0?"Windows Phone":t.indexOf("win")>=0?"Windows":t.indexOf("android")>=0?"Android":t.indexOf("linux")>=0?"Linux":t.indexOf("iphone")>=0||t.indexOf("ipad")>=0?"iOS":t.indexOf("mac")>=0?"Mac":"Other",("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&"Windows Phone"!==e&&"Android"!==e&&"iOS"!==e&&"Other"!==e)return!0;if(void 0!==n){if((n=n.toLowerCase()).indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e)return!0;if(n.indexOf("linux")>=0&&"Linux"!==e&&"Android"!==e)return!0;if(n.indexOf("mac")>=0&&"Mac"!==e&&"iOS"!==e)return!0;if((-1===n.indexOf("win")&&-1===n.indexOf("linux")&&-1===n.indexOf("mac"))!=("Other"===e))return!0}return r.indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e||(r.indexOf("linux")>=0||r.indexOf("android")>=0||r.indexOf("pike")>=0)&&"Linux"!==e&&"Android"!==e||(r.indexOf("mac")>=0||r.indexOf("ipad")>=0||r.indexOf("ipod")>=0||r.indexOf("iphone")>=0)&&"Mac"!==e&&"iOS"!==e||(-1===r.indexOf("win")&&-1===r.indexOf("linux")&&-1===r.indexOf("mac"))!=("Other"===e)||void 0===navigator.plugins&&"Windows"!==e&&"Windows Phone"!==e},getHasLiedBrowser:function(){var e,t=navigator.userAgent.toLowerCase(),n=navigator.productSub;if(("Chrome"==(e=t.indexOf("firefox")>=0?"Firefox":t.indexOf("opera")>=0||t.indexOf("opr")>=0?"Opera":t.indexOf("chrome")>=0?"Chrome":t.indexOf("safari")>=0?"Safari":t.indexOf("trident")>=0?"Internet Explorer":"Other")||"Safari"===e||"Opera"===e)&&"20030107"!==n)return!0;var r,i=eval.toString().length;if(37===i&&"Safari"!==e&&"Firefox"!==e&&"Other"!==e)return!0;if(39===i&&"Internet Explorer"!==e&&"Other"!==e)return!0;if(33===i&&"Chrome"!==e&&"Opera"!==e&&"Other"!==e)return!0;try{throw"a"}catch(e){try{e.toSource(),r=!0}catch(e){r=!1}}return!(!r||"Firefox"===e||"Other"===e)},isCanvasSupported:function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},isWebGlSupported:function(){if(!this.isCanvasSupported())return!1;var e=this.getWebglCanvas();return!!window.WebGLRenderingContext&&!!e},isIE:function(){return"Microsoft Internet Explorer"===navigator.appName||!("Netscape"!==navigator.appName||!/Trident/.test(navigator.userAgent))},hasSwfObjectLoaded:function(){return void 0!==window.swfobject},hasMinFlashInstalled:function(){return window.swfobject.hasFlashPlayerVersion("9.0.0")},addFlashDivNode:function(){var e=document.createElement("div");e.setAttribute("id",this.options.swfContainerId),document.body.appendChild(e)},loadSwfAndDetectFonts:function(e){var t="___fp_swf_loaded";window[t]=function(t){e(t)};var n=this.options.swfContainerId;this.addFlashDivNode();var r={onReady:t};window.swfobject.embedSWF(this.options.swfPath,n,"1","1","9.0.0",!1,r,{allowScriptAccess:"always",menu:"false"},{})},getWebglCanvas:function(){var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(e){}return t||(t=null),t},each:function(e,t,n){if(null!==e)if(this.nativeForEach&&e.forEach===this.nativeForEach)e.forEach(t,n);else if(e.length===+e.length){for(var r=0,i=e.length;r<i;r++)if(t.call(n,e[r],r,e)==={})return}else for(var o in e)if(e.hasOwnProperty(o)&&t.call(n,e[o],o,e)==={})return},map:function(e,t,n){var r=[];return null==e?r:this.nativeMap&&e.map===this.nativeMap?e.map(t,n):(this.each(e,(function(e,i,o){r[r.length]=t.call(n,e,i,o)})),r)},x64Add:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]+t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]+t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]+t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]+t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]},x64Multiply:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]*t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]*t[3],n[1]+=n[2]>>>16,n[2]&=65535,n[2]+=e[3]*t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]*t[3],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[2]*t[2],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[3]*t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]},x64Rotl:function(e,t){return 32==(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])},x64LeftShift:function(e,t){return 0==(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]},x64Xor:function(e,t){return[e[0]^t[0],e[1]^t[1]]},x64Fmix:function(e){return e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[4283543511,3981806797]),e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[3301882366,444984403]),this.x64Xor(e,[0,e[0]>>>1])},x64hash128:function(e,t){t=t||0;for(var n=(e=e||"").length%16,r=e.length-n,i=[0,t],o=[0,t],a=[0,0],s=[0,0],c=[2277735313,289559509],u=[1291169091,658871167],l=0;l<r;l+=16)a=[255&e.charCodeAt(l+4)|(255&e.charCodeAt(l+5))<<8|(255&e.charCodeAt(l+6))<<16|(255&e.charCodeAt(l+7))<<24,255&e.charCodeAt(l)|(255&e.charCodeAt(l+1))<<8|(255&e.charCodeAt(l+2))<<16|(255&e.charCodeAt(l+3))<<24],s=[255&e.charCodeAt(l+12)|(255&e.charCodeAt(l+13))<<8|(255&e.charCodeAt(l+14))<<16|(255&e.charCodeAt(l+15))<<24,255&e.charCodeAt(l+8)|(255&e.charCodeAt(l+9))<<8|(255&e.charCodeAt(l+10))<<16|(255&e.charCodeAt(l+11))<<24],a=this.x64Multiply(a,c),a=this.x64Rotl(a,31),a=this.x64Multiply(a,u),i=this.x64Xor(i,a),i=this.x64Rotl(i,27),i=this.x64Add(i,o),i=this.x64Add(this.x64Multiply(i,[0,5]),[0,1390208809]),s=this.x64Multiply(s,u),s=this.x64Rotl(s,33),s=this.x64Multiply(s,c),o=this.x64Xor(o,s),o=this.x64Rotl(o,31),o=this.x64Add(o,i),o=this.x64Add(this.x64Multiply(o,[0,5]),[0,944331445]);switch(a=[0,0],s=[0,0],n){case 15:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(l+14)],48));case 14:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(l+13)],40));case 13:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(l+12)],32));case 12:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(l+11)],24));case 11:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(l+10)],16));case 10:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(l+9)],8));case 9:s=this.x64Xor(s,[0,e.charCodeAt(l+8)]),s=this.x64Multiply(s,u),s=this.x64Rotl(s,33),s=this.x64Multiply(s,c),o=this.x64Xor(o,s);case 8:a=this.x64Xor(a,this.x64LeftShift([0,e.charCodeAt(l+7)],56));case 7:a=this.x64Xor(a,this.x64LeftShift([0,e.charCodeAt(l+6)],48));case 6:a=this.x64Xor(a,this.x64LeftShift([0,e.charCodeAt(l+5)],40));case 5:a=this.x64Xor(a,this.x64LeftShift([0,e.charCodeAt(l+4)],32));case 4:a=this.x64Xor(a,this.x64LeftShift([0,e.charCodeAt(l+3)],24));case 3:a=this.x64Xor(a,this.x64LeftShift([0,e.charCodeAt(l+2)],16));case 2:a=this.x64Xor(a,this.x64LeftShift([0,e.charCodeAt(l+1)],8));case 1:a=this.x64Xor(a,[0,e.charCodeAt(l)]),a=this.x64Multiply(a,c),a=this.x64Rotl(a,31),a=this.x64Multiply(a,u),i=this.x64Xor(i,a)}return i=this.x64Xor(i,[0,e.length]),o=this.x64Xor(o,[0,e.length]),i=this.x64Add(i,o),o=this.x64Add(o,i),i=this.x64Fmix(i),o=this.x64Fmix(o),i=this.x64Add(i,o),o=this.x64Add(o,i),("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)+("00000000"+(o[0]>>>0).toString(16)).slice(-8)+("00000000"+(o[1]>>>0).toString(16)).slice(-8)}},e.VERSION="1.8.0",e}());