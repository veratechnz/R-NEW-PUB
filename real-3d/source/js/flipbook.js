/* v 2.9.5
author http://codecanyon.net/user/zlac/portfolio?ref=zlac
*/
var FLIPBOOK = FLIPBOOK || {};

{ /* Main */
    (function init(jQuery, window, document, undefined) {

        jQuery.fn.flipBook = function(options) {
            //entry point
            return new FLIPBOOK.Main(options, this);
        };

        // DEFAULT OPTIONS
        jQuery.fn.flipBook.options = {

            /*array of page objects - this must be passed to plugin constructor
    		{
    			src:"page url",
    			thumb:"thumb url",
    		}*/
            pages: [],
            /*array of table_of_content objects
    		{
    			title:"Cover",
    			page:"1",
    		}*/
            tableOfContent: [],
            tableOfContentCloseOnClick: false,

            webglMinAndroidVersion: 4.4,

            deeplinking: {
                // deep linking options go gere
                enabled: false,
                prefix: ""
            },

            rootFolder: "",

            assets: {
                preloader: "images/preloader.jpg",
                overlay: "images/overlay.png",
                flipMp3: "mp3/turnPage.mp3"
            },

            pageShadow1: true,
            pageShadow2: true,
            pageShadow3: true,
            pageShadow4: true,
            pageShadow3IfMobile: false,
            pageShadow4IfMobile: false,

            // pageMode : "doubleWithCover",
            pageMode: "singlePage",

            //pdf file
            pdfUrl: null,
            pdfBrowserViewerIfMobile: false,
            pdfBrowserViewerFullscreen: true,
            pdfBrowserViewerFullscreenTarget: "_blank",
            pdfPageScale: 2,

            rightToLeft: false,

            //page that will be displayed when the book starts
            startPage: 0,

            //if the sound is enabled
            sound: true,

            backgroundColor: "#818181",
            backgroundPattern: "",

            //book default settings
            pageWidth: null,
            pageHeight: null,
            thumbnailWidth: 100,
            thumbnailHeight: 141,

            loadAllPages: false,

            //menu buttons
            currentPage: {
                enabled: true,
                title: "Current page"
            },
            btnNext: {
                enabled: true,
                title: "Next page",
                icon: "fa-chevron-right"
            },
            btnLast: {
                enabled: false,
                title: "Last page",
                icon: "fa-step-forward"
            },
            btnPrev: {
                enabled: true,
                title: "Previous page",
                icon: "fa-chevron-left"
            },
            btnFirst: {
                enabled: false,
                title: "First page",
                icon: "fa-step-backward"
            },
            btnZoomIn: {
                enabled: true,
                title: "Zoom in",
                icon: "fa-plus"
            },
            btnZoomOut: {
                enabled: true,
                title: "Zoom out",
                icon: "fa-minus"
            },
            btnToc: {
                enabled: true,
                title: "Table of content",
                icon: "fa-list-ol"
            },
            btnThumbs: {
                enabled: true,
                title: "Pages",
                icon: "fa-th-large"
            },
            btnShare: {
                enabled: true,
                title: "Share",
                icon: "fa-link"
            },
            btnDownloadPages: {
                enabled: true,
                title: "Download pages",
                icon: "fa-download",
                url: "images/pages.zip"
            },
            btnDownloadPdf: {
                forceDownload: false,
                enabled: true,
                title: "Download PDF",
                icon: "fa-file",
                url: "images/pages.pdf",
                openInNewWindow:true
            },
            btnSound: {
                enabled: true,
                title: "Volume",
                icon: "fa-volume-up"
            },
            btnExpand: {
                enabled: true,
                title: "Toggle fullscreen",
                icon: "fa-expand",
                iconAlt: "fa-compress"
            },
            btnExpandLightbox: {
                enabled: true,
                title: "Toggle fullscreen",
                icon: "fa-expand",
                iconAlt: "fa-compress"
            },
            btnPrint: {
                enabled: true,
                title: "Print",
                icon: "fa-print"
            },

            btnTocIfMobile: true,
            btnThumbsIfMobile: true,
            btnShareIfMobile: false,
            btnDownloadPagesIfMobile: true,
            btnDownloadPdfIfMobile: true,
            btnSoundIfMobile: false,
            btnExpandIfMobile: true,
            btnPrintIfMobile: false,

            sideNavigationButtons: true,
            hideMenu: false,

            //share

            google_plus: {
                enabled: true,
                url: null
            },
            twitter: {
                enabled: true,
                url: null,
                description: null
            },
            facebook: {
                enabled: true,
                load_sdk: true,
                url: null,
                app_id: null,
                title: null,
                caption: null,
                description: null,
                image: null
            },
            pinterest: {
                enabled: true,
                url: null,
                image: null,
                description: null
            },
            email: {
                enabled: true,
                title: null,
                description: null
            },

            pdf: {
                supportedScales: [0.5, 1, 2, 3],
                annotationLayer: false,
            },

            //flip animation type; can be "2d", "3d" , "webgl", "scroll"
            viewMode: 'webgl',
            singlePageMode: false,
            singlePageModeIfMobile: true,
            useMobileView: false,
            zoomLevels: [.8, 1, 1.5, 3, 6],
            zoomDisabled: false,

            //flip animation parameters
            time1: 300,
            transition1: 'easeInSine',
            time2: 400,
            transition2: 'easeOutSine',

            skin: "light", //dark, light

            contentOnStart: false,
            thumbnailsOnStart: false,


            //lightbox settings
            lightBox: false,
            lightBoxOpened: false,
            lightBoxFullscreen: false,
            lightboxTransparent: true,
            lightboxCloseOnClick: false,
            lightboxPadding: 0,
            lightboxMargin: 20,

            lightboxWidth: '75%', //width of the lightbox in pixels or percent, for example '1000px' or '75%'
            lightboxHeight: 600,
            lightboxMinWidth: 400, //minimum width of lightbox before it starts to resize to fit the screen
            lightboxMinHeight: 100,
            lightboxMaxWidth: 9999,
            lightboxMaxHeight: 9999,

            lightboxAutoSize: true,
            lightboxAutoHeight: false,
            lightboxAutoWidth: false,

            //WebGL settings
            webgl: true,
            renderer: "webgl", // "webgl" or "canvas"
            //web gl 3d settings
            cameraDistance: 2800,

            pan: 0,
            panMax: 10,
            panMax2: 2,
            panMin: -10,
            panMin2: -2,
            tilt: 0,
            tiltMax: 0,
            tiltMax2: 0,
            tiltMin: -20,
            tiltMin2: -5,

            rotateCameraOnMouseMove: false,
            rotateCameraOnMouseDrag: true,

            // pageAngleRight:-5,
            pageFlippedAngle: -175,
            pageFlippedForce: .2,

            //pages
            pageMaterial: 'phong', // page material, 'phong' or 'basic'
            pageShadow: true,
            pageHardness: 2,
            coverHardness: 2,
            pageSegmentsW: 10,
            pageSegmentsH: 1,
            pageShininess: 20,
            pageFlipDuration: 1,

            ambLightColor: "#DDD",

            //spot light
            spotLightColor: "#FFF",
            spotLightX: 0, // spot light x position
            spotLightY: 0, // spot light y position
            spotLightIntensity: 0.1, // spot light intensity
            spotLightShadowDarkness: 0.5, // spot light shadow darkness
        };

        FLIPBOOK.Main = function(options, elem) {
            var self = this;
            self.elem = elem;
            self.$elem = jQuery(elem);
            self.options = {};

            var dummyStyle = document.createElement('div').style,
                vendor = (function() {
                    var vendors = 't,webkitT,MozT,msT,OT'.split(','),
                        t,
                        i = 0,
                        l = vendors.length;

                    for (; i < l; i++) {
                        t = vendors[i] + 'ransform';
                        if (t in dummyStyle) {
                            return vendors[i].substr(0, vendors[i].length - 1);
                        }
                    }
                    return false;
                })(),
                prefixStyle = function(style) {
                    if (vendor === '')
                        return style;

                    style = style.charAt(0).toUpperCase() + style.substr(1);
                    return vendor + style;
                },

                isAndroid = (/android/gi).test(navigator.appVersion),
                isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
                has3d = prefixStyle('perspective') in dummyStyle

            this.msie = window.navigator.userAgent.indexOf("MSIE ");

            self.isAndroid = isAndroid;
            self.has3d = has3d;
            self.hasWebGl = Detector.webgl;

            self.thumbsShowing = false
            self.tocShowing = false

            //default options are overridden by options object passed to plugin constructor
            self.options = jQuery.extend({}, jQuery.fn.flipBook.options, options);
            self.options.main = self;
            self.options.pageShininess = self.options.pageShininess / 2;
            self.p = false;

            jQuery('head').append("<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />");

            if (self.options.singlePageMode) {
                self.options.viewMode = '3d'
                self.options.rightToLeft = false
                self.options.pageMode = 'singlePage'
            }

            self.options.isMobile = jQuery.browser.mobile || isIDevice || isAndroid

            if (self.options.isMobile && self.options.useMobileView)
                self.options.viewMode = 'carousel';

            if (self.options.isMobile) {
                self.options.singlePageMode = self.options.singlePageModeIfMobile ? true : self.options.singlePageMode
                if (self.options.singlePageMode) {
                    self.viewMode = '3d'
                    self.options.viewMode = '3d'
                }
                self.options.pageShadow3 = self.options.pageShadow3IfMobile
                self.options.pageShadow4 = self.options.pageShadow4IfMobile

                self.options.pageShadow1 =
                    self.options.pageShadow2 =
                    self.options.pageShadow3 =
                    self.options.pageShadow4 = false
                self.options.btnPrint = {
                    enabled: false
                }
                self.options.btnDownloadPages = {
                    enabled: false
                }
            }

            function getAndroidVersion(ua) {
                ua = (ua || navigator.userAgent).toLowerCase();
                var match = ua.match(/android\s([0-9\.]*)/);
                return match ? match[1] : false;
            };

            if (self.options.viewMode == 'webgl') {
                if (!self.hasWebGl || ((parseFloat(getAndroidVersion()) < self.options.webglMinAndroidVersion) && self.isAndroid))
                    self.options.viewMode = '3d'
            }
            if (self.options.viewMode == '3d' && !self.has3d)
                self.options.viewMode = '2d'



            if (self.options.isMobile && options.pdfBrowserViewerIfMobile && self.options.pdfUrl) {

                // if( options.pdfBrowserViewerIfMobile && options.pdfUrl){  // TEST mobile = true

                if (self.options.lightBox && !self.options.lightBoxOpened) {
                    self.$elem.on("touched click", function() {
                        openPdfBrowserViewer()
                    }).css('cursor', 'pointer')
                } else {
                    openPdfBrowserViewer()
                }
                return;
            }

            function openPdfBrowserViewer() {
                if (self.options.pdfBrowserViewerFullscreen) {
                    window.open(self.options.pdfUrl, self.options.pdfBrowserViewerFullscreenTarget)
                } else {
                    jQuery('<object type="application/pdf"/>').width("100%").height("100%").attr('data', self.options.pdfUrl).appendTo(self.$elem)
                    //<div> <object data="test.pdf" type="application/pdf" width="300" height="200"> alt : <a href="test.pdf">test.pdf</a> </object> </div>
                }
            }

            if (self.options.pages && self.options.pages.length > 0)
                self.options.pdfUrl = ""

            self.options.pdfMode = self.options.pdfUrl != ""

            self.pages = self.options.pages;

            var zl = self.options.zoomLevels

            if (typeof zl == 'string')
                zl = zl.split(',')

            for (i = 0; i < zl.length; i++) {
                zl[i] = Number(zl[i])
            }

            self.options.zoomLevels = zl;

            self.options.zoomMin = zl[0]
            self.options.zoom = self.options.zoomMin
            self.options.zoomMax = zl[zl.length - 1]
            self.onZoom(self.options.zoom)
            self.wrapper = jQuery(document.createElement('div'))
                .addClass('flipbook-main-wrapper');

            if (self.options.backgroundColor != "")
                self.wrapper.css('background', self.options.backgroundColor);
            if (self.options.backgroundPattern != "")
                self.wrapper.css('background', 'url(' + self.options.backgroundPattern + ') repeat');

            self.bookLayer = jQuery(document.createElement('div'))
                .addClass('flipbook-bookLayer')
                .appendTo(self.wrapper);
            if (self.options.hideMenu)
                self.bookLayer.css('bottom', '0')

            self.book = jQuery(document.createElement('div'))
                .addClass('book')
                .appendTo(self.bookLayer);

            this.createLoadingBar();

            //start page
            if (self.options.deeplinking.enabled) {
                window.onhashchange = function(e) {
                    var targetPage = self.getPageFromHash()
                    targetPage = self.options.rightToLeft ? self.options.pages.length - targetPage + 1 : targetPage
                    if (self.options.singlePageMode) targetPage--;
                    if (typeof(self.Book) != 'undefined' && targetPage >= 0) {
                        self.Book.goToPage(targetPage, true)
                    }
                }
                if (this.options.startPage <= 1) {
                    var p = this.getPageFromHash()
                    this.options.startPage = p
                }
            }

            this.options.startPage = this.options.singlePageMode ? this.options.startPage - 1 : this.options.startPage

            function loadFirstPage() {
                var loader = document.createElement("img");
                loader.setAttribute('src', options.pages[0].src);
                self.setLoadingProgress(.5)
                loader.onload = function() {
                    if (!self.options.pageWidth) self.options.pageWidth = this.width
                    if (!self.options.pageHeight) self.options.pageHeight = this.height
                    self.start();
                    self.setLoadingProgress(1)
                }
            }

            //if pdf
            if (!self.options.pdfMode) {
                if (!self.options.lightBox) {
                    self.wrapper.appendTo(self.$elem);
                    //load first page
                    loadFirstPage()
                } else {
                    self.$elem.css('cursor', 'pointer')
                        .bind('touchstart mousedown', function(e) {
                            //load first page
                            loadFirstPage()
                        });
                    if (this.options.startPage > 1 || this.options.lightboxOpened)
                        loadFirstPage()
                }
            } else if (!self.options.lightBox) {
                self.initPdf();
                self.wrapper.appendTo(self.$elem);
            } else {
                self.$elem.css('cursor', 'pointer')
                    .bind('touchstart mousedown', function(e) {
                        //darken
                        //add preloader
                        self.initPdf();
                    });
                //open lightbox
                if (this.options.startPage > 1 || this.options.lightBoxOpened)
                    self.initPdf()
            }

            this.flipsound = document.createElement('audio');
            this.flipsound.setAttribute('src', this.options.assets.flipMp3);
            this.flipsound.setAttribute('type', 'audio/mpeg')
        };
        
        FLIPBOOK.Main.prototype = {
            start: function() {
                if (this.started)
                    return;
                this.started = true;

                if (this.options.lightBox) {
                    //test out
                    this.lightbox = new FLIPBOOK.Lightbox(this, this.wrapper, this.options);
                    if (this.options.lightboxTransparent == true) {
                        this.wrapper.css('background', 'none');
                        this.bookLayer.css('background', 'none');
                        this.book.css('background', 'none');
                    }
                }


                this.createBook();
            },
            lightboxStart: function() {
                var self = this;
                if (!this.started)
                    this.start();
                if (typeof this.Book == 'undefined') {
                    setTimeout(function() {
                        self.lightboxStart()
                    }, 100);
                    return;
                }
                this.Book.enable();
                if (this.options.contentOnStart)
                    this.toggleToc(true)
                if (this.options.thumbnailsOnStart)
                    this.toggleThumbs(true)
                self.updateCurrentPage();
                self.initColors();
                self.resize();
            },
            setHash: function(page) {
                //debugger;
                if (this.options.deeplinking.enabled && this.Book.enabled)
                    window.location.hash = "#" + this.options.deeplinking.prefix + String(page)
            },
            clearHash: function() {
                window.location.hash = "";
            },
            getPageFromHash: function() {
                // debugger;
                var res = parseInt(window.location.hash.replace(/#/g, '').replace(this.options.deeplinking.prefix, ""))
                if (isNaN(res)) res = 0;
                return res;
            },
            initColors: function() {
                jQuery(".skin-color-bg")
                    .removeClass("flipbook-bg-light")
                    .removeClass("flipbook-bg-dark")
                    .addClass("flipbook-bg-" + this.options.skin);

                jQuery(".skin-color")
                    .removeClass("flipbook-color-light")
                    .removeClass("flipbook-color-dark")
                    .addClass("flipbook-color-" + this.options.skin);
            },
            lightboxEnd: function() {
                this.Book.disable();

                screenfull.exit();

                if (window.location.hash) {
                    // var urlWithoutHash = document.location.href.replace(location.hash , "" );
                    this.clearHash()
                }
            },
            turnPageComplete: function() {
                this.animating = false;
                this.updateCurrentPage();
                jQuery(this).trigger("onTurnPageComplete")
            },
            updateCurrentPage: function(index) {
                if (typeof this.currentPage === 'undefined')
                    return;
                var rightIndex = this.Book.rightIndex || 0;
                if (this.options.singlePageMode) {
                    rightIndex++;
                    if (this.options.rightToLeft) {
                        rightIndex = this.options.pages.length - rightIndex
                    }
                    this.currentPage.attr('value', rightIndex)
                    this.enableButton(this.btnPrev, rightIndex > 1)
                    this.enableButton(this.btnFirst, rightIndex > 1)
                    this.Book.enablePrev(rightIndex > 1)
                    this.enableButton(this.btnNext, rightIndex <= this.pages.length - 1)
                    this.enableButton(this.btnLast, rightIndex <= this.pages.length - 1)
                    this.Book.enableNext(rightIndex <= this.pages.length - 1)
                    this.currentPageNumber = rightIndex
                    if (this.options.deeplinking.enabled)
                        this.setHash(this.currentPageNumber)
                    return
                }

                if (typeof(index) != 'undefined')
                    rightIndex = index

                var rtl = this.options.rightToLeft
                var total = this.options.numPages

                var current = rtl ? this.options.pages.length - rightIndex : rightIndex
                if (current % 2 == 0 && current < this.options.numPages)
                    current++
                    if (current > total) current = total
                this.currentPage.attr('value', String(current));
                this.currentPage.val(String(current));

                if (this.p && this.options.pages.length / 8 != 3 && this.options.pages.length / 8 != 2 && this.options.pages.length != 8 && this.options.pages.length != 30 && this.options.pages.length / 8 != 4)
                    this.Book.goToPage(0)

                // console.log(rightIndex)
                if (rtl) {
                    this.enableButton(this.btnPrev, current < total)
                    this.enableButton(this.btnFirst, current < total)
                    this.Book.enablePrev(current < total)

                    this.enableButton(this.btnNext, current > 1)
                    this.enableButton(this.btnLast, current > 1)
                    this.Book.enableNext(current > 1)

                } else {
                    this.enableButton(this.btnPrev, current > 1)
                    this.enableButton(this.btnFirst, current > 1)
                    this.Book.enablePrev(current > 1)

                    this.enableButton(this.btnNext, current < total)
                    this.enableButton(this.btnLast, current < total)
                    this.Book.enableNext(current < total)
                }
                this.setHash(current)

            },
            initPdf: function() {

                var self = this;

                //load pdf.js first

                if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.compatibilityjsSrc]) {
                    self.loadScript(FLIPBOOK.compatibilityjsSrc, self.initPdf)
                    return;
                }

                if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.pdfjsSrc]) {
                    self.loadScript(FLIPBOOK.pdfjsSrc, self.initPdf)
                    return;
                }

                var self = this;
                PDFJS.disableWorker = true;
                PDFJS.workerSrc = FLIPBOOK.pdfjsworkerSrc

                function getDocumentProgress(progressData) {
                    //console.log(progressData.loaded / progressData.total);

                    self.setLoadingProgress(progressData.loaded / progressData.total);
                }

                PDFJS.getDocument(self.options.pdfUrl /*, null, false, getDocumentProgress*/ ).then(function(pdf) {
                    self.onPdfOpen(pdf);
                });
            },
            onPdfOpen: function(pdf) {

                var self = this;
                self.pdfDocument = pdf;

                this.options.numPages = pdf.pdfInfo.numPages;

                var pages = []

                for (var i = 0; i < this.options.numPages; i++) {
                    pages.push({
                        title: "Page " + String(i + 1)
                    })
                }

                self.pages = self.options.pages = pages
                // self.loadPageFromPdf(0, self.start);

                //self.loadPagesFromPdf([0,1], self.start);
                self.pdfDocument.getPage(1).then(function(page) {


                    var viewportOriginal = page.getViewport(1);
                    var bh = self.book.height()
                    // var scale = bh / viewportOriginal.height
                    // scale *= self.zoom * self.scroll.scale
                    // if (scale > 4) scale = 4

                    var scale = 2

                    var viewport = page.getViewport(1)
                    self.options.pageWidth = viewport.width;
                    self.options.pageHeight = viewport.height;
                    var pageSize = 1000
                    self.options.pageWidth = pageSize * viewport.width / viewport.height;
                    self.options.pageHeight = pageSize;
                    self.start()
                });

            },
            loadPagesFromPdf: function(arr, callback) {
                /*if(this.options.pageMode == 'doubleWithCover'){
    				var newArr = []
    				for(var i=0;i<arr.length;i++){
    					if(newArr.length == 0 || newArr[newArr.length-1] != (parseInt((arr[i]+1)/2)))
    					newArr.push(parseInt((arr[i]+1)/2))
    				}

    			}*/

                var toLoad = arr[0],
                    self = this;

                arr.shift()

                if (arr.length > 0) {

                    this.loadPageFromPdf(toLoad, function() {
                        self.loadPagesFromPdf(arr, callback)
                    })
                } else
                    this.loadPageFromPdf(toLoad, callback)
            },
            loadPageFromPdf: function(pageIndex, callback) {
                var self = this;
                var pdf = self.pdfDocument;
                var index = self.options.pageMode == 'doubleWithCover' ? Math.round(pageIndex / 2) + 1 : pageIndex + 1
                if (index > pdf.pdfInfo.numPages) {
                    //callback.call(self)
                    return;
                }
                if (!self.options.pages[pageIndex] /*|| self.options.pages[pageIndex].canvas*/ ) {
                    callback.call(self)
                } else {
                    self.setLoadingProgress(.3)
                    pdf.getPage(index).then(function(p) {
                        self.renderPageFromPdf(p, index - 1, callback)
                    });
                }
            },
            renderPageFromPdf: function(page, pi, callback) {
                if (this.bookLayer.height() == 0) return;
                var self = this,
                    pdf = self.pdfDocument,
                    info = pdf.pdfInfo,
                    numPages = info.numPages,
                    scale = this.options.pdfPageScale;

                self.setLoadingProgress(.6)
                var viewportOriginal = page.getViewport(1);
                var bh = this.bookLayer.height()
                scale = bh / viewportOriginal.height
                scale *= this.zoom

                function findClosestInArray(num, arr) {
                    var minDist = null
                    var dist
                    for (var i = 0; i < arr.length; i++) {
                        dist = Math.abs(num - arr[i])
                        if (!minDist || dist < minDist) {
                            minDist = dist
                            min = arr[i]
                        }
                    }
                    return min
                }

                scale = findClosestInArray(scale, self.options.pdf.supportedScales)

                this.options.pdf.currentScale = scale

                /*if(self.options.pages[pi].canvases && self.options.pages[pi].canvases[scale]){
    				var destinationCanvas = self.options.pages[pi].canvases[scale]

    				if(self.options.pageMode == 'doubleWithCover'){
    					if(pi == 0 ){
    						self.options.pages[0].canvas = destinationCanvas
    					}else if(pi == self.options.pages.length/2){
    						self.options.pages[self.options.pages.length-1].canvas = destinationCanvas
    					}else{
    						self.options.pages[2*pi].canvas = destinationCanvas
    						//clone canvas
    						var c2    = document.createElement('canvas');
    						c2.width  = destinationCanvas.width;
    						c2.height = destinationCanvas.height;
    						var ctx2 = c2.getContext('2d');
    						ctx2.drawImage(destinationCanvas, 0, 0);
    						self.options.pages[2*pi-1].canvas = c2
    					}
    				}else
    					self.options.pages[pi].canvas = destinationCanvas

    				callback.call(self)
    				return;
    			}*/

                var viewport = page.getViewport(scale);
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');

                var textLayerDiv = document.createElement('div');
                textLayerDiv.className = 'textLayer';
                textLayerDiv.style.width = viewport.width;
                textLayerDiv.style.height = viewport.height;

                var textLayer = new TextLayerBuilder({
                    textLayerDiv: textLayerDiv,
                    pageIndex: pi,
                    viewport: viewport
                });


                //context.fillStyle = '#f00';
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                if (!self.options.pageHeight) self.options.pageHeight = viewport.height;
                if (!self.options.pageWidth) self.options.pageWidth = viewport.width;

                var destCanvasW = viewport.width
                var destCanvasH = viewport.height
                var destinationCanvas = document.createElement("canvas");
                destinationCanvas.width = destCanvasW
                destinationCanvas.height = destCanvasH
                var destCtx = destinationCanvas.getContext('2d');
                destCtx.fillStyle = "#FFFFFF";

                // document.body.appendChild(destinationCanvas)



                page.getTextContent().then(function(textContent) {

                    //the page. It is set to page.number - 1.
                    /*textLayer.setTextContent(textContent);
                textLayer.render(TEXT_LAYER_RENDER_DELAY);

				
				self.options.pages[pi].htmlContent = textLayerDiv*/
                    var renderContext = {
                        canvasContext: context,
                        viewport: viewport,
                        textLayer: textLayer
                    };

                    self.options.pages[pi].renderTask = page.render(renderContext).then(function() {
                        self.options.pages[pi].renderedPage = page

                        destCtx.fillRect(0, 0, canvas.width, canvas.height);

                        //draw the original canvas onto the destination canvas
                        destCtx.imageSmoothingEnabled = false
                        destCtx.drawImage(canvas, 0, 0, destCanvasW, destCanvasH);

                        /*function saveCanvas(pageIndex,scale,canvas){
						if(!self.pages[pageIndex].canvases)
							self.pages[pageIndex].canvases = {}
						self.pages[pageIndex].canvases[scale] = canvas
					}*/


                        if (self.options.pageMode == 'doubleWithCover') {
                            if (pi == 0) {
                                self.options.pages[0].canvas = destinationCanvas
                                //saveCanvas(0,viewport.scale,destinationCanvas)
                            } else if (pi == self.options.pages.length / 2) {
                                self.options.pages[self.options.pages.length - 1].canvas = destinationCanvas
                            } else {
                                self.options.pages[2 * pi].canvas = destinationCanvas
                                //saveCanvas(2*pi,viewport.scale,destinationCanvas)
                                //clone canvas
                                var c2 = document.createElement('canvas');
                                c2.width = destinationCanvas.width;
                                c2.height = destinationCanvas.height;
                                var ctx2 = c2.getContext('2d');
                                ctx2.drawImage(destinationCanvas, 0, 0);
                                self.options.pages[2 * pi - 1].canvas = c2
                                //saveCanvas(2*pi-1,viewport.scale,destinationCanvas)
                            }
                        } else
                            self.options.pages[pi].canvas = destinationCanvas
                            //saveCanvas(pi,viewport.scale,destinationCanvas)


                        /*jQuery('body').append('<div>'+String(pi)+'</div>')
    					jQuery('body').append(jQuery(destinationCanvas))*/


                            /*function createAnnotationsLayerBuilder(pageDiv, pdfPage) {
    					  return new AnnotationsLayerBuilder({
    						pageDiv: pageDiv,
    						pdfPage: pdfPage,
    						linkService: self.linkService || new SimpleLinkService()
    					  });
    					}

    					if (!self.options.pages[pi].annotationLayer) {
    					  self.options.pages[pi].annotationLayer = createAnnotationsLayerBuilder(textLayerDiv, page);
    					}
    					self.options.pages[pi].annotationLayer.setupAnnotations(viewport);

    					jQuery('.annotationLayer').css('z-index','999')
    	               */


                        callback.call(self)
                        self.setLoadingProgress(1)
                    });
                });



            },

            loadThumbsFromPdf: function() {
                var self = this,
                    pdf = self.pdfDocument,
                    info = pdf.pdfInfo,
                    numPages = info.numPages,
                    scale = .4;
                for (var i = 0; i < numPages; i++) {
                    var canvas = document.createElement('canvas');
                    self.pages[i].thumbCanvas = canvas
                    pdf.getPage(i + 1).then(function(page) {
                        var viewport = page.getViewport(scale);

                        //
                        // Prepare canvas using PDF page dimensions
                        //
                        var c = self.pages[page.pageIndex].thumbCanvas
                        var context = c.getContext('2d');
                        c.height = viewport.height;
                        c.width = viewport.width;


                        //
                        // Render PDF page into canvas context
                        //
                        var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        page.render(renderContext);
                        self.thumbScroll.refresh()
                    });
                }
            },
            /*loadScript:function (src, callback) {
    			var self = this
    			jQuery.getScript(src,function(){
    				FLIPBOOK.scriptsLoaded[src] = true;
    				if (callback)
    					callback.call(self);
    			})
    		},	*/


            loadScript: function(src, callback) {
                var self = this
                var script = document.createElement('script');
                var prior = document.getElementsByTagName('script')[0];
                script.async = 1;
                prior.parentNode.insertBefore(script, prior);

                script.onload = script.onreadystatechange = function(_, isAbort) {
                    if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                        script.onload = script.onreadystatechange = null;
                        script = undefined;

                        if (!isAbort) {
                            if (callback) callback.call(self);
                        }
                        FLIPBOOK.scriptsLoaded[src] = true;
                    }
                };

                script.src = src;
            },



            createBook: function() {
                var self = this;

                if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.touchSwipeSrc] || typeof(window.jQuery.fn.swipe) == 'undefined') {
                    self.loadScript(FLIPBOOK.touchSwipeSrc, self.createBook)
                    return;
                }

                if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.shareSrc]) {
                    self.loadScript(FLIPBOOK.shareSrc, self.createBook)
                    return;
                }

                if (self.options.viewMode == "webgl") {
                    if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.threejsSrc] && typeof THREE == 'undefined') {
                        self.loadScript(FLIPBOOK.threejsSrc, self.createBook)
                        return;
                    }
                    if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.flipbookWebGlSrc] && typeof FLIPBOOK.BookWebGL == 'undefined') {
                        self.loadScript(FLIPBOOK.flipbookWebGlSrc, self.createBook)
                        return;
                    }
                }

                this.initEasing()

                if (self.options.pageMode == "doubleWithCover" && self.options.pages.length > 2) {
                    var newArr = [self.options.pages[0]]
                    for (var i = 1; i <= self.options.pages.length - 2; i++) {
                        var p = self.options.pages[i]
                        var left = {
                            src: p.src,
                            thumb: p.thumb,
                            title: p.title,
                            htmlContent: p.htmlContent,
                            side: 'left'
                        }
                        var right = {
                            src: p.src,
                            thumb: p.thumb,
                            title: p.title,
                            htmlContent: p.htmlContent,
                            side: 'right'
                        }
                        if (self.options.rightToLeft) {
                            newArr.push(right)
                            newArr.push(left)
                        } else {
                            newArr.push(left)
                            newArr.push(right)
                        }

                    }
                    newArr.push(self.options.pages[self.options.pages.length - 1])
                    self.options.pages = newArr
                }

                this.options.numPages = this.options.pages.length
                if (this.options.numPages % 2 != 0 && !this.options.singlePageMode) {
                    this.oddPages = true
                    this.options.oddPages = true
                    this.options.pages.push({
                        src: this.options.assets.preloader,
                        thumb: ''
                    })
                }

                if (self.options.rightToLeft) {
                    self.pagesReversed = [];
                    for (var i = self.options.pages.length - 1; i >= 0; i--) {
                        self.pagesReversed.push(self.options.pages[i]);
                    }
                    self.options.pages = self.pagesReversed;
                }

                if (self.options.pages.length > 0) {
                    for (var i = 0; i < self.options.pages.length; i++) {
                        if (typeof(self.options.pages[i].htmlContent) != 'undefined') {
                            self.options.viewMode = '3d'
                        }
                    }
                }

                if (self.options.viewMode == "webgl") {
                    var bookOptions = self.options;
                    bookOptions.pagesArr = self.options.pages;
                    bookOptions.scroll = self.scroll;
                    bookOptions.parent = self;
                    self.Book = new FLIPBOOK.BookWebGL(self.book[0], bookOptions);
                    self.webglMode = true;
                    self.initSwipe();
                } else if (self.options.viewMode == "carousel") {
                    self.Book = new FLIPBOOK.BookCarousel(self);
                } else {
                    if (self.options.viewMode != "2d")
                        self.options.viewMode = "3d"

                    // window.addEventListener('FLIPBOOK.bookInitialized', function(){
                    self.scroll = new FLIPBOOK.IScroll(self.bookLayer[0], {
                        zoom: true,
                        zoomMin: self.options.zoomMin,
                        zoomMax: self.options.zoomMax,
                        scrollX: true,
                        scrollY: true,
                        // mouseWheel: true,
                        keepInCenterV: true,
                        keepInCenterH: true,
                        preventDefault: false //for text selection and other events in html layer
                        // wheelAction: 'zoom'
                    });

                    self.Book = new FLIPBOOK.Book3(self.book[0], self.options);
                    self.scroll.on("zoomEnd", function() {
                        self.onZoom(self.scroll.scale / self.ratio)
                    })

                    // self.updateCurrentPage()
                    self.initSwipe();
                    // })


                    // self.scroll.on("zoomStart", function(){
                    // self.onZoom(self.scroll.scale * self.ratio)
                    // })


                    // self.scroll.on("scrollStart", function(){
                    // console.log(this)
                    // })
                    // self.scroll.on("scrollEnd", function(){
                    // self.onZoom(self.scroll.scale * self.ratio)
                    // })
                    self.webglMode = false;
                }

                this.createToc(this.options.tableOfContent);
                this.thumbsCreated = false;

                this.createMenu();

                this.createCurrentPage();
                if (!this.options.currentPage.enabled) {
                    this.currentPageHolder.hide()
                }

                this.onBookCreated();
            },
            onBookCreated: function() {
                //this.setLoadingProgress(.5)
                if (this.options.lightBox)
                    this.lightbox.openLightbox();
                this.lightboxStart()

                var self = this
                jQuery(window).resize(function() {
                    self.resize();
                });

                self.resize();

                if (self.options.rightToLeft) {
                    self.Book.goToPage(Number(self.options.pages.length - Number(self.options.startPage) + 1), true);
                } else {
                    self.Book.goToPage(Number(self.options.startPage), true);
                }

                this.updateCurrentPage();

                //keyboard evetns
                document.addEventListener("keydown", function(e) {
                    e = e || window.event;
                    switch (e.keyCode) {
                        //left
                        case 37:
                            self.Book.prevPage();
                            break;
                            //up
                        case 38:
                            self.zoomIn();
                            break;
                            //right
                        case 39:
                            self.Book.nextPage();
                            break;
                            //down
                        case 40:
                            self.zoomOut();
                            break;
                    }
                })

                if (!self.options.zoomDisabled) {
                    //disable page scrolling
                    jQuery(this.wrapper).on('DOMMouseScroll', function(e) {
                        e.preventDefault();
                    });
                    jQuery(this.wrapper).on('mousewheel', function(e) {
                        e.preventDefault();
                    });
                }

                this.zoom = this.options.zoom;

                //add mouse scroll listeners
                if (!this.options.zoomDisabled) {
                    //Firefox
                    this.bookLayer.bind('DOMMouseScroll', function(e) {
                        if (e.originalEvent.detail > 0) {
                            //scroll down
                            // console.log('Down');
                            self.zoomOut()
                        } else {
                            //scroll up
                            // console.log('Up');
                            self.zoomIn()
                        }
                        //prevent page fom scrolling
                        return false;
                    });

                    //IE, Opera, Safari
                    this.bookLayer.bind('mousewheel', function(e) {
                        // alert("mousewheel")
                        if (e.originalEvent.wheelDelta < 0) {
                            //scroll down
                            // console.log('Down');
                            self.zoomOut()
                        } else {
                            //scroll up
                            // console.log('Up');
                            self.zoomIn()
                        }
                        //prevent page fom scrolling
                        return false;
                    });

                    this.bookLayer.bind('gesturestart', function(e) {
                        // alert("gesturestart")
                        if (e.scale < 1.0) {
                            // User moved fingers closer together
                        } else if (e.scale > 1.0) {
                            // User moved fingers further apart
                        }
                    }, false);

                    this.bookLayer.bind('gestureend', function(e) {
                        // alert("gestureend")
                        if (e.scale < 1.0) {
                            self.zoomOut()
                            // User moved fingers closer together
                        } else if (e.scale > 1.0) {
                            self.zoomIn()
                            // User moved fingers further apart
                        }
                    }, false);

                    this.bookLayer.bind('gesturechange', function(e) {
                        // alert("gesturechange")
                        if (e.scale < 1.0) {
                            // User moved fingers closer together
                            self.zoomOut()
                        } else if (e.scale > 1.0) {
                            // User moved fingers further apart
                            self.zoomIn()
                        }
                    }, false);

                }

                if (self.options.contentOnStart)
                    self.toggleToc(true);
                if (self.options.thumbnailsOnStart)
                    self.toggleThumbs(true);

                self.Book.enable()
                self.Book.updateVisiblePages()

                /*if (self.options.lightBox && !self.options.lightBoxOpened)
				self.Book.disable()
			else {
				if (self.options.contentOnStart)
					self.toggleToc(true);
				if (self.options.thumbnailsOnStart)
					self.toggleThumbs(true);

				self.Book.enable()
			}*/
                self.initColors();
            },
            initSwipe: function() {
                var self = this
                window.jQuery(this.bookLayer).swipe({
                    swipeStatus: function(e, phase, direction, distance, duration, fingerCount, fingerData) {
                        // console.log(e)
                        // console.log(phase)
                        // e.preventDefault()
                        // e.stopPropagation()
                        self.Book.onSwipe(e, phase, direction, distance, duration, fingerCount, fingerData)
                        // self.bookLayer[0].dispatchEvent(e)
                    }
                });
            },
            createButton: function(btn) {
                return jQuery(document.createElement('span'))
                    .attr('aria-hidden', 'true')
                    .appendTo(this.menu)
                    .addClass(btn.icon)
                    .addClass('flipbook-icon-general flipbook-menu-btn skin-color fa')
                    .attr('title', btn.title)
            },
            createMenu: function() {
                if (this.p && this.options.pages.length / 8 != 3 && this.options.pages.length / 8 != 2 && this.options.pages.length != 8 && this.options.pages.length != 30 && this.options.pages.length / 8 != 4)
                    return;
                if (!screenfull.enabled) {
                    this.options.btnExpand = {
                        enabled: false
                    }
                    this.options.btnExpandLightbox = {
                        enabled: false
                    }
                }
                var self = this;
                this.menuWrapper = jQuery(document.createElement('div'))
                    .addClass('flipbook-menuWrapper')

                this.menuWrapper.appendTo(this.wrapper);
                if (this.options.hideMenu)
                    this.menuWrapper.hide();
                this.menu = jQuery(document.createElement('div'))
                    .addClass('flipbook-menu')
                    .addClass('skin-color-bg')
                    .appendTo(this.menuWrapper);
                if (this.options.lightboxTransparent) {}



                //arrows
                if (self.options.sideNavigationButtons) {

                    if (self.options.btnNext.enabled)
                        self.btnNext = jQuery('<div><div class="flipbook-arrow-wrapper"><span class="flipbook-right-arrow fa fa-angle-right skin-color skin-color-bg"></div></div>').appendTo(self.bookLayer).bind('touchend click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.nextPage();
                        });

                    if (self.options.btnPrev.enabled)
                        self.btnPrev = jQuery('<div><div class="flipbook-arrow-wrapper"><span class="flipbook-left-arrow fa fa-angle-left skin-color skin-color-bg"></div></div>').appendTo(self.bookLayer).bind('touchend click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.prevPage();
                        });

                    if (self.options.btnFirst.enabled)
                        self.btnFirst = jQuery('<div><div class="flipbook-arrow-wrapper"><span class="flipbook-first-arrow fa fa-step-backward skin-color skin-color-bg"></div></div>').appendTo(self.bookLayer).bind('touchend click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.goToPage(0);
                        });

                    if (self.options.btnLast.enabled)
                        self.btnLast = jQuery('<div><div class="flipbook-arrow-wrapper"><span class="flipbook-last-arrow fa fa-step-forward skin-color skin-color-bg"></div></div>').appendTo(self.bookLayer).bind('touchend click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.goToPage(self.pages.length - 1);
                        });
                } else {

                    if (self.options.btnFirst.enabled)
                        this.btnFirst = this.createButton(self.options.btnFirst)
                        .bind('touchend click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.goToPage(0);
                        });

                    if (self.options.btnPrev.enabled)
                        this.btnPrev = this.createButton(self.options.btnPrev)
                        .bind('touchend click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.prevPage();
                        });
                    if (self.options.btnNext.enabled)
                        this.btnNext = this.createButton(self.options.btnNext)
                        .bind('touchend click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.nextPage();
                        });

                    if (self.options.btnLast.enabled)
                        this.btnLast = this.createButton(self.options.btnLast)
                        .bind('touchend click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.goToPage(self.pages.length - 1);
                        });
                }

                if (self.options.btnZoomIn.enabled)
                    this.btnZoomIn = this.createButton(self.options.btnZoomIn)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.zoomIn();
                    });

                if (self.options.btnZoomOut.enabled)
                    this.btnZoomOut = this.createButton(self.options.btnZoomOut)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.zoomOut();
                    });

                this.onZoom(this.options.zoom)
                if (self.options.btnToc.enabled && (self.options.btnTocIfMobile || !self.options.isMobile))
                    this.btnToc = this.createButton(self.options.btnToc)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.toggleToc();
                    });

                if (self.options.btnThumbs.enabled && (self.options.btnThumbsIfMobile || !self.options.isMobile))
                    this.btnThumbs = this.createButton(self.options.btnThumbs)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.toggleThumbs();
                    });

                if (self.options.btnShare.enabled /*&& this.options.socialShare.length > 0*/ && (self.options.btnShareIfMobile || !self.options.isMobile)) {

                    this.btnShare = this.createButton(self.options.btnShare)
                        .addClass('flipbook-share')
                        .bind('touchend click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.toggleShare();
                        });

                    var share_button_top = new Share(this.btnShare[0], {
                        networks: {
                            google_plus: self.options.google_plus,
                            twitter: self.options.twitter,
                            facebook: self.options.facebook,
                            pinterest: self.options.pinterest,
                            email: self.options.email
                        }
                    });
                }

                if (self.options.btnDownloadPages.enabled && (self.options.btnDownloadPagesIfMobile || !self.options.isMobile))
                    this.btnDownloadPages = this.createButton(self.options.btnDownloadPages)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        window.location = self.options.btnDownloadPages.url;
                    });

                if (self.options.btnPrint.enabled && (self.options.btnPrintIfMobile || !self.options.isMobile))
                    this.btnPrint = this.createButton(self.options.btnPrint)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.togglePrintWindow();
                    });

                if (self.options.btnDownloadPdf.enabled && (self.options.btnDownloadPdfIfMobile || !self.options.isMobile)) {

                    this.btnDownloadPdf = this.createButton(self.options.btnDownloadPdf)

                    if (self.options.pdfMode)
                        self.options.btnDownloadPdf.url = self.options.pdfUrl

                    // if(this.options.btnDownloadPdf.forceDownload){
                    if (false) {
                        this.btnDownloadPdf.append('<a style="display:block;position:absolute;top:0;left:0;width:40px;height:40px;" download="' + self.options.btnDownloadPdf.url + '"></a>')
                    } else {
                        this.btnDownloadPdf
                            .bind('touchend click', function(e) {
                                e.stopPropagation();
                                e.preventDefault();
                                var target = self.options.btnDownloadPdf.openInNewWindow || typeof(self.options.btnDownloadPdf.openInNewWindow == 'undefined') ? '_blank' : '_self'
                                window.open(self.options.btnDownloadPdf.url, target)
                            });
                    }

                }

                if (self.options.sound && self.options.btnSound.enabled && (self.options.btnSoundIfMobile || !self.options.isMobile))
                    this.btnSound = this.createButton(self.options.btnSound)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        if (self.options.sound) {
                            self.options.sound = false
                            jQuery(this)
                                .addClass('fa-volume-off')
                                .removeClass('fa-volume-up');
                        } else {
                            self.options.sound = true
                            jQuery(this)
                                .addClass('fa-volume-up')
                                .removeClass('fa-volume-off');
                        }
                    });

                if (self.options.btnExpand.enabled && (self.options.btnExpandIfMobile || !self.options.isMobile))
                    this.btnExpand = this.createButton(self.options.btnExpand)
                    .addClass('btnExpand')
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.toggleExpand()
                    })

                handleFsChange = function() {
                    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
                        jQuery('.btnExpand')
                            .addClass(self.options.btnExpand.iconAlt)
                            .removeClass(self.options.btnExpand.icon);
                    } else {
                        jQuery('.btnExpand')
                            .addClass(self.options.btnExpand.icon)
                            .removeClass(self.options.btnExpand.iconAlt);
                    }
                }

                document.addEventListener("MSFullscreenChange", function(e) {
                    handleFsChange()
                });

                document.addEventListener("mozfullscreenchange", function(e) {
                    handleFsChange()
                });

                document.addEventListener("webkitfullscreenchange", function(e) {
                    handleFsChange()
                });

                document.addEventListener("fullscreenchange", function(e) {
                    handleFsChange()
                });
            },
            createLoadingBar: function() {
                /*this.loadingBar = jQuery(document.createElement('div'))
				.addClass('flipbook-loading-bar')
				.appendTo(this.wrapper);

			this.progressBar = jQuery(document.createElement('div'))
				.addClass('flipbook-progress-bar')
				.appendTo(this.loadingBar);*/

                this.loadingGif = jQuery('<div id="floatingCirclesG"><div class="f_circleG" id="frotateG_01"></div><div class="f_circleG" id="frotateG_02"></div><div class="f_circleG" id="frotateG_03"></div><div class="f_circleG" id="frotateG_04"></div><div class="f_circleG" id="frotateG_05"></div><div class="f_circleG" id="frotateG_06"></div><div class="f_circleG" id="frotateG_07"></div><div class="f_circleG" id="frotateG_08"></div></div>')
                    .appendTo(this.wrapper);


                this.setLoadingProgress(0);
            },
            setLoadingProgress: function(percent) {
                if (percent > 0 && percent < 1) {
                    // this.loadingBar.css('display', 'block');
                    this.loadingGif.css('display', 'block');
                } else {
                    // this.loadingBar.css('display', 'none');
                    this.loadingGif.css('display', 'none');
                }
                // this.progressBar.css('width', (percent * 100).toString() +'%');
            },
            createNavigation: function() {
                var self = this;

                this.navLeft = jQuery('<div />');
                this.navLeft
                // .appendTo(this.bookLayer)
                // .css('position','absolute')
                // .css('width','200px')
                // .css('height','200px')
                .css('background', '#f00')
                    .css('left', '0')
                    .css('top', '200px')
                    .attr('aria-hidden', 'true')
                    .addClass('skin-color fa fa-chevron-left fa-5x')
                    .css('margin-top', this.navLeft.height() + 'px')
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.Book.prevPage();
                    });

                this.navRight = jQuery('<div />')
                    .appendTo(this.bookLayer)
                    .css('position', 'absolute')
                    .css('width', '200px')
                    .css('height', '200px')
                    .css('margin-top', '-100px')
                    .css('background', '#f00')
                    .css('right', '0')
                    .css('top', '200px')
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.Book.nextPage();
                    });


            },
            playFlipSound: function() {
                var self = this
                if (this.options.sound && this.Book.enabled && typeof(this.flipsound.play) != 'undefined') {
                    this.flipsound.currentTime = 0;
                    setTimeout(function() {
                        self.flipsound.play()
                    }, 100);
                }
            },

            
            onMouseWheel: function(e) {
                //console.log(e)

                if ('wheelDeltaX' in e) {
                    wheelDeltaX = e.wheelDeltaX / 12;
                    wheelDeltaY = e.wheelDeltaY / 12;
                } else if ('wheelDelta' in e) {
                    wheelDeltaX = wheelDeltaY = e.wheelDelta / 12;
                } else if ('detail' in e) {
                    wheelDeltaX = wheelDeltaY = -e.detail * 3;
                } else {
                    return;
                }
                if (wheelDeltaX > 0)
                    this.zoomIn()
                else
                    this.zoomOut();

            },
            zoomOut: function() {

                var zl = this.options.zoomLevels;
                for (var i = 0; i < zl.length; i++) {
                    var level = zl[i]
                    if (this.zoom == level && i > 0) {
                        this.zoom = zl[i - 1]
                        break;
                    }
                    // this.zoom = zl[0]
                }
                switch (this.options.viewMode) {
                    case '2d':
                    case '3d':
                        this.scroll.zoom(this.zoom * this.ratio, this.bookLayer.width() / 2, this.bookLayer.height() / 2, 0);
                        break;
                    case 'webgl':
                        this.Book.zoomTo(this.zoom);
                        break;
                    case 'carousel':
                        this.Book.zoomOut(this.zoom);
                        break;
                }
                this.onZoom(this.zoom)
            },
            zoomIn: function() {
                var zl = this.options.zoomLevels;
                for (var i = 0; i < zl.length; i++) {
                    var level = zl[i]
                    if (this.zoom == level && i < (zl.length - 1)) {
                        this.zoom = zl[i + 1]
                        break;
                    }
                    // this.zoom = zl[0]
                }
                switch (this.options.viewMode) {
                    case '2d':
                    case '3d':
                        this.scroll.zoom(this.zoom * this.ratio, this.bookLayer.width() / 2, this.bookLayer.height() / 2, 0);
                        break;
                    case 'webgl':
                        this.Book.zoomTo(this.zoom);
                        break;
                    case 'carousel':
                        this.Book.zoomIn(this.zoom);
                        break;
                }
                this.onZoom(this.zoom)
            },
            onZoom: function(newZoom) {
                this.zoom = newZoom
                this.enableButton(this.btnZoomIn, newZoom < this.options.zoomMax)
                this.enableButton(this.btnZoomOut, newZoom > this.options.zoomMin)
                // this.enableSwipe(newZoom <= this.options.zoomMin)
                this.enableSwipe(newZoom <= 1)
                if (this.pdfDocument)
                    this.pdfResize()
            },
            enableSwipe: function(val) {
                if (this.bookLayer) {
                    var action = val ? "enable" : "disable"
                    window.jQuery(this.bookLayer).swipe(action)
                }

            },
            toggleShare: function() {
                //this.shareButtons.toggleClass('invisible');
            },
            createCurrentPage: function() {
                var self = this;
                var currentPageHolder = jQuery('<div>').appendTo(this.menuWrapper).addClass('flipbook-currentPageHolder')
                this.currentPageHolder = currentPageHolder
                this.currentPage = jQuery(document.createElement('input'))
                    .addClass('flipbook-currentPage')
                    .attr('type', 'text')
                    .attr('size', '1')
                    .attr('maxlength', '4')
                    .addClass('skin-color')
                // .addClass('skin-color-bg')
                .appendTo(currentPageHolder)
                    .keyup(function(e) {
                        if (e.keyCode == 13) {
                            var value = parseInt(jQuery(this).val()) - 1;
                            value = value > self.pages.length ? self.pages.length : value;
                            if (self.options.rightToLeft) {
                                value = self.options.pages.length - value - 1;
                            }
                            self.updateCurrentPage();
                            self.Book.goToPage(value);
                        }
                    })
                    .focus(function(e) {
                        jQuery(this).val("");
                    })
                    .focusout(function(e) {
                        var value = parseInt(jQuery(this).val()) - 1;
                        self.updateCurrentPage();
                        // self.Book.goToPage(value);
                    });

                this.totalPages = jQuery('<span/>')
                    .text('/ ' + this.options.numPages)
                    .appendTo(currentPageHolder)
                    .addClass('skin-color')
                //.addClass('skin-color-bg')
                .addClass('flipbook-totalPages')
            },
            createToc: function(tocArray) {
                var self = this;
                this.tocHolder = jQuery('<div>')
                    .addClass('flipbook-tocHolder skin-color-bg')
                    .appendTo(this.wrapper)
                    .hide();;
                this.toc = jQuery('<div>')
                    .addClass('.flipbook-toc')
                    .appendTo(this.tocHolder);
                self.tocScroll = new FLIPBOOK.IScroll(self.tocHolder[0], {
                    bounce: false,
                    mouseWheel: true,
                    scrollbars: true
                });

                //tiile
                var title = jQuery(document.createElement('span'))
                    .addClass('flipbook-tocTitle')
                    .addClass('skin-color')
                    .appendTo(this.toc);

                var btnClose = jQuery('<span>')
                    .attr('aria-hidden', 'true')
                    .appendTo(title)
                    .addClass('flipbook-btn-close fa fa-times flipbook-icon-general skin-color')
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.toggleToc();
                    });


                if (tocArray.length > 0) {

                    var pages = this.pages;
                    for (var i = 0; i < tocArray.length; i++) {

                        var tocItem = jQuery(document.createElement('a'))
                            .attr('class', 'flipbook-tocItem')
                            // .addClass('skin-color-bg')
                            .addClass('skin-color')
                            .attr('title', tocArray[i].page)
                            .appendTo(this.toc)
                            //                    .unbind(self.CLICK_EV)
                            .bind('touchend click', function(e) {
                                e.stopPropagation();
                                e.preventDefault();

                                if (!self.tocScroll.moved) {
                                    var clickedPage = Number(jQuery(this).attr('title'));
                                    if (self.options.rightToLeft)
                                        clickedPage = self.pages.length - clickedPage - 1;
                                    if (self.Book.goingToPage != clickedPage) {
                                        self.Book.goToPage(clickedPage);
                                        if (self.options.tableOfContentCloseOnClick)
                                            self.toggleToc(false)
                                    }
                                }
                            });
                        jQuery(document.createElement('span'))
                            .appendTo(tocItem)
                            .text(tocArray[i].title);
                        jQuery(document.createElement('span'))
                            .appendTo(tocItem)
                            .attr('class', 'right')
                            .text(tocArray[i].page);
                    }

                } else {
                    var pages = this.pages;
                    for (var i = 0; i < pages.length; i++) {
                        if (pages[i].title == "")
                            continue;
                        if (typeof pages[i].title === "undefined")
                            continue;

                        var tocItem = jQuery(document.createElement('a'))
                            .attr('class', 'flipbook-tocItem')
                            // .addClass('skin-color-bg')
                            .addClass('skin-color')
                            .attr('title', String(i + 1))
                            .appendTo(this.toc)
                            //                    .unbind(self.CLICK_EV)
                            .bind('touchend click', function(e) {
                                e.stopPropagation();
                                e.preventDefault();

                                if (!self.tocScroll.moved) {
                                    var clickedPage = Number(jQuery(this).attr('title'));
                                    if (self.options.rightToLeft)
                                        clickedPage = self.pages.length - clickedPage - 1;
                                    if (self.Book.goingToPage != clickedPage) {
                                        self.Book.goToPage(clickedPage);
                                        if (self.options.tableOfContentCloseOnClick)
                                            self.toggleToc(false)
                                    }

                                    //                            console.log(e,this);

                                }
                            });
                        jQuery(document.createElement('span'))
                            .appendTo(tocItem)
                            .text(pages[i].title);
                        jQuery(document.createElement('span'))
                            .appendTo(tocItem)
                            .attr('class', 'right')
                            .text(i + 1);
                    }
                }

                self.tocScroll.refresh();
            },
            enableButton: function(button, enabled) {
                if (typeof(button) == 'undefined')
                    return;
                if (enabled) {
                    button.css('opacity', '1')
                    button.css('pointer-events', 'auto')
                } else {
                    button.css('opacity', '.3')
                    button.css('pointer-events', 'none')
                }
                button.enabled = enabled
            },
            resize: function(self) {
                if (typeof(self) == 'undefined') self = this
                    // console.log(self)
                this.blw = self.bookLayer.width()
                this.blh = self.bookLayer.height()
                var bw = self.book.width()
                var bh = self.book.height()

                if (this.blw / this.blh >= bw / bh)
                    self.fitToHeight(true);
                else
                    self.fitToWidth(true);

                if (self.options.viewMode == 'carousel') {
                    self.Book.resize();
                }
                if (self.options.viewMode == 'webgl') {
                    self.Book.onResize();
                }

                if (this.pdfDocument) {
                    this.pdfResize()
                }

                if (this.scroll) this.scroll.refresh()
            },
            pdfResize: function() {
                var self = this
                this.pdfDocument.getPage(1).then(function(page) {
                    var viewportOriginal = page.getViewport(1);
                    var bh = self.bookLayer.height()
                    scale = bh / viewportOriginal.height
                    scale *= self.zoom

                    function findClosestInArray(num, arr) {
                        var minDist = null
                        var dist
                        for (var i = 0; i < arr.length; i++) {
                            dist = Math.abs(num - arr[i])
                            if (!minDist || dist < minDist) {
                                minDist = dist
                                min = arr[i]
                            }
                        }
                        return min
                    }

                    scale = findClosestInArray(scale, self.options.pdf.supportedScales)


                    if (self.Book && self.options.pdf.currentScale != scale)
                        self.Book.onZoom();
                });


            },
            fitToHeight: function(resize) {
                var x = this.bookLayer.height();
                var y = this.book.height();
                if (resize)
                    this.ratio = x / y;
                this.fit(this.ratio, resize);
                this.thumbsVertical();
            },
            fitToWidth: function(resize) {
                var x = this.bookLayer.width();
                var y = this.book.width();
                if (resize)
                    this.ratio = x / y;
                this.fit(this.ratio, resize);
                //            this.thumbsHorizontal();
                this.thumbsVertical();
            },
            fit: function(r, resize) {
                if (!this.webglMode && this.scroll) {
                    r = resize ? this.ratio : this.scroll.scale;
                    if (resize) {

                        this.scroll.options.zoomMin = r * this.options.zoomMin;
                        this.scroll.options.zoomMax = r * this.options.zoomMax;
                    }
                    this.scroll.zoom(r * this.options.zoom, this.bookLayer.width() / 2, this.bookLayer.height() / 2, 0);
                }
            },
            createThumbs: function() {
                var self = this,
                    point1,
                    point2;
                if (!self.options.btnThumbs.enabled) {
                    return;
                }
                if (self.options.pdfMode) {
                    self.loadThumbsFromPdf()
                }
                self.thumbsCreated = true;
                //create thumb holder - parent for thumb container
                self.thumbHolder = jQuery(document.createElement('div'))
                    .addClass('flipbook-thumbHolder')
                    .addClass('skin-color-bg')
                    .appendTo(self.wrapper);
                //create thumb container - parent for thumbs
                self.thumbsContainer = jQuery(document.createElement('div')).
                appendTo(self.thumbHolder)
                    .addClass('flipbook-thumbContainer')

                .width(2 * self.options.thumbnailWidth + 45);

                //tiile
                var title = jQuery(document.createElement('span'))
                    .addClass('flipbook-thumbsTitle')
                    // .addClass('skin-color-bg')
                    .addClass('skin-color')
                    .appendTo(this.thumbHolder);

                var btnClose = jQuery(document.createElement('span'))
                    .attr('aria-hidden', 'true')
                    .appendTo(title)
                    .addClass('flipbook-btn-close')
                    .addClass('fa fa-times')
                    .addClass('flipbook-icon-general')
                    .addClass('skin-color')
                    // .addClass('skin-color-bg')
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.toggleThumbs();
                    });



                self.thumbs = [];
                var pages = self.pages;

                var $thumb = jQuery('<div class="flipbook-thumb">').appendTo(self.thumbsContainer).width(self.options.thumbnailWidth);

                for (var i = 0; i < pages.length; i++) {
                    var th = pages[i].thumb;

                    var $thumb = jQuery('<div class="flipbook-thumb">').appendTo(self.thumbsContainer);

                    if (pages[i].thumbCanvas) {
                        var $thumbImg = jQuery(pages[i].thumbCanvas)
                    } else {
                        var $thumbImg = jQuery('<img/>').attr('src', th)
                        $thumbImg[0].onload = function() {
                            self.thumbScroll.refresh()
                        }

                    }
                    $thumbImg.appendTo($thumb)
                        .width(self.options.thumbnailWidth)
                    // .height(self.options.thumbnailHeight)
                    .attr('title', i + 1)
                        .bind('touchend click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            if (!self.thumbScroll.moved) {
                                var clickedPage = Number(jQuery(this).attr('title'));
                                if (self.options.rightToLeft)
                                    clickedPage = pages.length - clickedPage - 1;
                                if (self.Book.goingToPage != clickedPage)
                                    self.Book.goToPage(clickedPage);
                            }
                        });
                    var $pageNumber = jQuery('<span/>').text(i + 1)
                        .appendTo($thumb)
                        .addClass('skin-color')
                        .addClass('flipbook-thumb-num')
                        .width(self.options.thumbnailWidth);
                }
                self.thumbScroll = new FLIPBOOK.IScroll(self.thumbHolder[0], {
                    bounce: false,
                    mouseWheel: true,
                    scrollbars: true
                });
            },
            toggleThumbs: function(value) {
                if (!this.thumbsCreated) {
                    this.createThumbs()
                    this.initColors()
                }
                if (this.thumbHolder) {
                    if (!this.thumbsShowing) {
                        this.thumbHolder.show()
                        if (this.tocShowing)
                            this.toggleToc()
                        this.thumbsVertical();

                        this.bookLayer.css('left', this.thumbHolder.width() + 'px')

                    } else {
                        this.thumbHolder.hide()
                        this.bookLayer.css('left', '0')
                    }
                    this.thumbsShowing = !this.thumbsShowing
                    this.resize()
                }
            },
            toggleToc: function(value) {
                if (!this.tocShowing) {
                    this.tocHolder.show()
                    if (this.thumbsShowing)
                        this.toggleThumbs()
                    this.tocScroll.refresh();
                    this.bookLayer.css('left', this.tocHolder.width() + 'px')
                } else {
                    this.tocHolder.hide()
                    this.bookLayer.css('left', '0')
                }
                this.tocShowing = !this.tocShowing
                this.resize()
            },
            printPdf: function(url) {
                var iframe = this._printIframe;
                if (!this._printIframe) {
                    iframe = this._printIframe = document.createElement('iframe');
                    document.body.appendChild(iframe);

                    iframe.style.display = 'none';
                    iframe.onload = function() {
                        setTimeout(function() {
                            iframe.focus();
                            iframe.contentWindow.print();
                        }, 1);
                    };
                }

                iframe.src = url;
            },
            togglePrintWindow: function(value) {
                var self = this;

                if (self.options.pdfUrl) {
                    self.printPdf(self.options.pdfUrl)
                    return
                }

                function printme() {
                    link = "about:blank";
                    var pw = window.open(link, "_new");
                    pw.document.open();
                    var images = ""
                    for (var i = 0; i < self.options.pages.length; i++) {
                        if (self.options.pages[i].src)
                            images += '<img src="' + self.options.pages[i].src.toString() + '"/>\n'
                    }
                    var printHtml = printWindowHtml(images)
                    pw.document.write(printHtml);
                    pw.document.close();
                }


                function printWindowHtml(images) {
                    // We break the closing script tag in half to prevent
                    // the HTML parser from seeing it as a part of
                    // the *main* page.

                    return "<html>\n" +
                        "<head>\n" +
                        "<title>Temporary Printing Window</title>\n" +
                        "<script>\n" +
                        "function step1() {\n" +
                        "  setTimeout('step2()', 10);\n" +
                        "}\n" +
                        "function step2() {\n" +
                        "  window.print();\n" +
                        "  window.close();\n" +
                        "}\n" +
                        "</scr" + "ipt>\n" +
                        "</head>\n" +
                        "<body onLoad='step1()'>\n" +
                        images +
                        "</body>\n" +
                        "</html>\n";
                }

                printme()
                return;


                var self = this
                if (!this.printWindowCreated) {
                    this.printWindowCreated = true
                    this.printWindow = jQuery('<div>').addClass('flipbook-print-window').appendTo(this.wrapper)
                    var html = jQuery('<div class="panel panel-default">' +
                        '<div class="panel-heading">Print</div>' +
                        '<div class="panel-body">' +
                        '<div class="row">' +
                        '<div class="col-lg-12">' +
                        '<form role="form">' +
                        '<div class="form-group">' +
                        '<label></label>' +
                        '<label class="radio-inline"><input type="radio" name="optionsRadiosInline" id="optionsRadiosInline1" value="option1" checked>Left page</label>' +
                        '<label class="radio-inline"><input type="radio" name="optionsRadiosInline" id="optionsRadiosInline2" value="option2">Right page</label>' +
                        '<label class="radio-inline"><input type="radio" name="optionsRadiosInline" id="optionsRadiosInline3" value="option3">All pages</label>' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label>Or select one or more pages</label>' +
                        '<select multiple class="form-control">' +
                        '<option>Page 1</option>' +
                        '</select>' +
                        '</div>' +
                        '<button type="button" class="btn btn-default btn-close">Close</button>' +
                        '<button type="button" class="btn btn-default pull-right btn-print">Print</button>' +
                        '</form>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>').appendTo(this.printWindow).hide().fadeIn()

                    this.printWindow.find('.btn-print').bind('touchend click', function() {
                        printme()
                    })
                    this.printWindow.find('.btn-close').bind('touchend click', function() {
                        self.printWindow.fadeToggle()
                    })
                } else {
                    this.printWindow.fadeToggle()
                }
            },
            thumbsVertical: function() {
                if (!this.thumbsCreated)
                    return;
                this.thumbScroll.hScroll = false;
                this.thumbScroll.vScroll = true;
                this.thumbScroll.refresh();
            },
            toggleExpand: function() {
                var elem = this.lightbox ? this.lightbox.overlay[0] : this.wrapper[0]
                var self = this
                screenfull.toggle(elem)
                setTimeout(function() {
                    self.zoomIn()
                    self.zoomOut()
                    jQuery(window).trigger('resize');
                }, 0);
                setTimeout(function() {
                    self.zoomIn()
                    self.zoomOut()
                    jQuery(window).trigger('resize');
                }, 1000);
                setTimeout(function() {
                    self.zoomIn()
                    self.zoomOut()
                }, 2000);
                setTimeout(function() {
                    self.zoomIn()
                    self.zoomOut()
                    jQuery(window).trigger('resize');
                }, 3000);
            },

            initEasing: function() {
                //easign functions
                window.jQuery.extend(window.jQuery.easing, {
                    def: 'easeOutQuad',
                    swing: function(x, t, b, c, d) {
                        //alert(jQuery.easing.default);
                        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
                    },
                    easeInQuad: function(x, t, b, c, d) {
                        return c * (t /= d) * t + b;
                    },
                    easeOutQuad: function(x, t, b, c, d) {
                        return -c * (t /= d) * (t - 2) + b;
                    },
                    easeInOutQuad: function(x, t, b, c, d) {
                        if ((t /= d / 2) < 1)
                            return c / 2 * t * t + b;
                        return -c / 2 * ((--t) * (t - 2) - 1) + b;
                    },
                    easeInCubic: function(x, t, b, c, d) {
                        return c * (t /= d) * t * t + b;
                    },
                    easeOutCubic: function(x, t, b, c, d) {
                        return c * ((t = t / d - 1) * t * t + 1) + b;
                    },
                    easeInOutCubic: function(x, t, b, c, d) {
                        if ((t /= d / 2) < 1)
                            return c / 2 * t * t * t + b;
                        return c / 2 * ((t -= 2) * t * t + 2) + b;
                    },
                    easeInQuart: function(x, t, b, c, d) {
                        return c * (t /= d) * t * t * t + b;
                    },
                    easeOutQuart: function(x, t, b, c, d) {
                        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
                    },
                    easeInOutQuart: function(x, t, b, c, d) {
                        if ((t /= d / 2) < 1)
                            return c / 2 * t * t * t * t + b;
                        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                    },
                    easeInQuint: function(x, t, b, c, d) {
                        return c * (t /= d) * t * t * t * t + b;
                    },
                    easeOutQuint: function(x, t, b, c, d) {
                        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                    },
                    easeInOutQuint: function(x, t, b, c, d) {
                        if ((t /= d / 2) < 1)
                            return c / 2 * t * t * t * t * t + b;
                        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
                    },
                    easeInSine: function(x, t, b, c, d) {
                        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
                    },
                    easeOutSine: function(x, t, b, c, d) {
                        return c * Math.sin(t / d * (Math.PI / 2)) + b;
                    },
                    easeInOutSine: function(x, t, b, c, d) {
                        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
                    },
                    easeInExpo: function(x, t, b, c, d) {
                        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
                    },
                    easeOutExpo: function(x, t, b, c, d) {
                        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
                    },
                    easeInOutExpo: function(x, t, b, c, d) {
                        if (t == 0)
                            return b;
                        if (t == d)
                            return b + c;
                        if ((t /= d / 2) < 1)
                            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
                    },
                    easeInCirc: function(x, t, b, c, d) {
                        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
                    },
                    easeOutCirc: function(x, t, b, c, d) {
                        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
                    },
                    easeInOutCirc: function(x, t, b, c, d) {
                        if ((t /= d / 2) < 1)
                            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
                    },
                    easeInElastic: function(x, t, b, c, d) {
                        var s = 1.70158;
                        var p = 0;
                        var a = c;
                        if (t == 0)
                            return b;
                        if ((t /= d) == 1)
                            return b + c;
                        if (!p)
                            p = d * .3;
                        if (a < Math.abs(c)) {
                            a = c;
                            var s = p / 4;
                        } else
                            var s = p / (2 * Math.PI) * Math.asin(c / a);
                        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                    },
                    easeOutElastic: function(x, t, b, c, d) {
                        var s = 1.70158;
                        var p = 0;
                        var a = c;
                        if (t == 0)
                            return b;
                        if ((t /= d) == 1)
                            return b + c;
                        if (!p)
                            p = d * .3;
                        if (a < Math.abs(c)) {
                            a = c;
                            var s = p / 4;
                        } else
                            var s = p / (2 * Math.PI) * Math.asin(c / a);
                        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
                    },
                    easeInOutElastic: function(x, t, b, c, d) {
                        var s = 1.70158;
                        var p = 0;
                        var a = c;
                        if (t == 0)
                            return b;
                        if ((t /= d / 2) == 2)
                            return b + c;
                        if (!p)
                            p = d * (.3 * 1.5);
                        if (a < Math.abs(c)) {
                            a = c;
                            var s = p / 4;
                        } else
                            var s = p / (2 * Math.PI) * Math.asin(c / a);
                        if (t < 1)
                            return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
                    },
                    easeInBack: function(x, t, b, c, d, s) {
                        if (s == undefined)
                            s = 1.70158;
                        return c * (t /= d) * t * ((s + 1) * t - s) + b;
                    },
                    easeOutBack: function(x, t, b, c, d, s) {
                        if (s == undefined)
                            s = 1.70158;
                        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
                    },
                    easeInOutBack: function(x, t, b, c, d, s) {
                        if (s == undefined)
                            s = 1.70158;
                        if ((t /= d / 2) < 1)
                            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
                    },
                    easeInBounce: function(x, t, b, c, d) {
                        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
                    },
                    easeOutBounce: function(x, t, b, c, d) {
                        if ((t /= d) < (1 / 2.75)) {
                            return c * (7.5625 * t * t) + b;
                        } else if (t < (2 / 2.75)) {
                            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                        } else if (t < (2.5 / 2.75)) {
                            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                        } else {
                            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                        }
                    },
                    easeInOutBounce: function(x, t, b, c, d) {
                        if (t < d / 2)
                            return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
                        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
                    }
                });
            }
        };

    })(jQuery, window, document)
}

{ /* FLIPBOOK.Lightbox */
    FLIPBOOK.Lightbox = function(context, content, options) {
        var self = this;
        this.context = context;
        this.options = options;
        this.lightboxOpened = false
        context.$elem.bind('touchstart mousedown', function(e) {
            self.openLightbox();
            if (self.context.options.lightBoxFullscreen)
                self.context.toggleExpand();
        });

        var img = jQuery(context.elem).find('img');

        self.overlay = jQuery(document.createElement('div'))
            .attr('class', 'flipbook-overlay')
            .css('display', 'none')
        // .css('visibility', 'hidden')
        .css('z-index', '999999') // on top of everything ! wordpress menu bar has z-index 99999
        .bind('touchstart mousedown', function(e) {
            if (jQuery(e.target).hasClass('flipbook-bookLayer') && self.options.lightboxCloseOnClick) {
                self.closeLightbox();
            }
        })
            .appendTo('body')

        jQuery(document).keyup(function(e) {
            if (e.keyCode == 27) {
                self.closeLightbox();
            } // escape key maps to keycode `27`
        });


        self.wrapper = jQuery(document.createElement('div'))
            .css('width', self.options.lightboxWidth)
            .css('height', 'auto')
            .appendTo(self.overlay);
        if (self.options.lightboxTransparent == true) {
            self.wrapper
                .attr('class', 'flipbook-wrapper-transparent')
                .css('margin', '0px auto')
                .css('padding', '0px')
                .css('height', '100%')
                .css('width', '100%');
        } else {
            self.wrapper
                .attr('class', 'flipbook-wrapper')
                .css('margin', String(self.options.lightboxMargin) + 'px auto')
                .css('padding', String(self.options.lightboxPadding) + 'px');
            content
                .css('margin', String(self.options.lightboxPadding) + 'px')
        }

        content
        //        .css('margin', String(self.options.lightboxPadding)+'px')
        .appendTo(self.wrapper);

        // close button
        var $toolbar = jQuery('<div/>')
            .appendTo(self.wrapper)
            .addClass('flipbook-lightbox-toolbar');

        var $close = jQuery('<span title="Press Esc tp close"/>')
            .appendTo($toolbar)
            .bind('touchend click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                self.closeLightbox();
            })
            .addClass('flipbook-lightbox-close fa fa-times skin-color skin-color-bg');

        if (options.btnExpandLightbox.enabled) {
            var $fullscreen = jQuery('<span title="Enter Fullscreen"/>')
                .appendTo($toolbar)
                .addClass('.btnExpand')
                .bind('touchend click', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    context.toggleExpand();
                })
                .addClass('flipbook-lightbox-fullscreen fa skin-color skin-color-bg').addClass(options.btnExpandLightbox.icon);
        }

        //    this.overlay.css('display','none');

    };
    FLIPBOOK.Lightbox.prototype = {

        openLightbox: function() {
            var self = this;
            this.overlay.css('visibility', 'visible');
            this.overlay.css('display', 'none');
            this.wrapper.css('display', 'none');
            this.overlay.fadeIn("fast", function() {
                self.wrapper.css('display', 'block')
                self.wrapper.css('opacity', '1')
                self.context.lightboxStart();
                self.lightboxOpened = true
            });
            this.wrapper.css('display', 'block')
            this.wrapper.css('opacity', '0')
            jQuery('body').css('overflow', 'hidden');
            // self.context.resize();
        },
        closeLightbox: function() {
            var self = this;
            if (self.lightboxOpened != true) return;
            self.lightboxOpened = false;
            this.overlay.fadeOut("fast");
            //        this.overlay.css('visibility','hidden');
            jQuery('body').css('overflow', 'auto');

            self.context.lightboxEnd();
        },
        resize: function() {
            var self = this;
            var jQuerywindow = jQuery(window),
                ww = jQuerywindow.width(),
                wh = jQuerywindow.height();
            if (self.options.lightboxTransparent == true) {
                //        if(self.options.lightboxTransparent == true || (THREEx.FullScreen.available() && THREEx.FullScreen.activated())) {
                // self.wrapper
                // .css('width', '100%')
                // ;
                // } else {
                self.wrapper.css('width', self.options.lightboxWidth);

                if ((self.wrapper.width() + 2 * self.options.lightboxMargin + 2 * self.options.lightboxPadding) < self.options.lightboxMinWidth) {
                    self.wrapper.css('width', String(ww - 2 * self.options.lightboxMargin - 2 * self.options.lightboxPadding) + 'px');
                }

            }
        }
    };
}

{ /* FLIPBOOK.BookCarousel */
    FLIPBOOK.BookCarousel = function(main) {
        var self = this
        this.main = main
        this.bookLayer = main.bookLayer
        this.rightIndex = 1;
        this.currentPage = 0;


        this.scroller = main.book.removeClass('book').addClass('flipbook-carousel-scroller')

        this.left = jQuery('<div>').appendTo(this.scroller).addClass('flipbook-carousel-page').css({
            'width': String(window.innerWidth - 1) + 'px',
            /*'background':'#f00', */
            'display': 'inline-block'
        });
        this.imgLeft = jQuery("<img>").appendTo(this.left).addClass('img')

        this.center = jQuery('<div>').appendTo(this.scroller).addClass('flipbook-carousel-page').css({
            'width': String(window.innerWidth - 1) + 'px',
            /*'background':'#0f0',*/
            'display': 'inline-block'
        });
        this.imgCenter = jQuery("<img>").appendTo(this.center).addClass('img')

        this.right = jQuery('<div>').appendTo(this.scroller).addClass('flipbook-carousel-page').css({
            'width': String(window.innerWidth - 1) + 'px',
            /*'background':'#00f',*/
            'display': 'inline-block'
        });
        this.imgRight = jQuery("<img>").appendTo(this.right).addClass('img')


        this.zoomLayer = jQuery('<div>').appendTo(this.main.bookLayer).addClass('')
            .css({
                'position': 'absolute',
                'top': '0',
                'left': '0',
                'width': '100%',
                'height': '100%',
                'display': 'inline-block'
            });
        this.imgScroller = jQuery("<div>").appendTo(this.zoomLayer)
            .css({
                'position': 'relative',
                'width': String(main.options.pageWidth) + 'px',
                'height': String(main.options.pageHeight) + 'px',
                'background': 'rgba(230,230,230,1)',
                'background-size': 'contain'
            })
        this.imgZoom = jQuery("<img>").appendTo(this.imgScroller)

        // this.zoomLayer.remove()
        this.zoomScroll = new FLIPBOOK.IScroll(this.zoomLayer[0], {
            zoom: true,
            zoomMin: 0,
            zoomMax: 100,
            scrollX: true,
            scrollY: true,
            mouseWheel: true,
            keepInCenterV: true,
            keepInCenterH: true,
            wheelAction: 'zoom'
            /*,
		click:true,
		tap:true*/
        })
        this.zoomScroll.refresh();


        this.iscroll = new FLIPBOOK.IScroll(main.bookLayer[0], {
            scrollX: true,
            scrollY: false,
            momentum: false,
            snap: true,
            snapSpeed: 400,
            keyBindings: true
            /*,
		click:true,
		tap:true*/
        });


        this.iscroll.on("scrollEnd", function() {
            // self.rightIndex = self.iscroll.currPageX + 1;
            // main.updateCurrentPage();
            if (this.currentPage.pageX == 0 && self.currentPage > 0) {
                // console.log('prev complete')
                self.currentPage--;
                self.updateImages()
            } else if (this.currentPage.pageX == 2 && self.currentPage < self.main.options.pages.length - 1) {
                self.currentPage++;
                // console.log('next complete')
                self.updateImages()
            } else if (this.currentPage.pageX == 1 && self.currentPage == 0) {
                self.currentPage++
                self.updateImages()
            } else if (this.currentPage.pageX == 1 && self.currentPage == self.main.options.pages.length - 1) {
                self.currentPage--
                self.updateImages()
            }
            main.updateCurrentPage(self.currentPage + 1);
            self.rightIndex = self.currentPage + 1
            main.turnPageComplete();
        })



        this.iscroll.refresh()
        this.resize();

        this.zoomTo(1)
    }
    FLIPBOOK.BookCarousel.prototype.constructor = FLIPBOOK.BookCarousel;
    FLIPBOOK.BookCarousel.prototype = {
        goToPage: function(value, time) {
            //if(this.iscroll.pagesX.length == 0) return;
            if (isNaN(value) || value < 0)
                value = 0
            this.currentPage = value
            this.updateImages()
        },
        updateImages: function() {
            var pages = this.main.options.pages
            var page = this.currentPage

            if (page > 0)
                this.imgLeft.attr('src', pages[page - 1].src)
                // this.imgLeft.css({'background-image':'url('+pages[page-1].src+')'})

            this.imgCenter.attr('src', pages[page].src)
            // this.imgCenter.css({'background-image':'url('+pages[page].src+')'})

            if (page < pages.length - 1)
                this.imgRight.attr('src', pages[page + 1].src)

            this.imgScroller.css({
                'background-image': 'url(' + pages[page].src + ')',
                'background-repeat': 'no-repeat'
            })

            // this.imgZoom.attr('src',pages[page].src)

            if (page == pages.length - 1) {
                this.imgCenter.attr('src', pages[page - 1].src)
                this.imgRight.attr('src', pages[page].src)
            }

            if (page == 0) {
                this.left.hide()
                this.scrollToPage(0, 0)
            } else if (page == pages.length - 1) {
                //this.right.hide()
                this.left.show()
                this.right.show()
                this.scrollToPage(2, 0)
            } else {
                this.left.show()
                this.right.show()
                this.scrollToPage(1, 0)
            }
        },
        nextPage: function() {
            if (this.currentPage == 0)
                this.scrollToPage(1)
            else
                this.scrollToPage(2)
        },
        prevPage: function() {
            this.scrollToPage(0)
        },
        updateVisiblePages: function() {

        },
        disable: function() {

        },
        enable: function() {

        },
        resize: function() {

            jQuery(this.scroller.children()).css('width', String(this.main.bookLayer.width()) + 'px');

            if (this.main.bookLayer.width() / this.main.bookLayer.height() > this.main.options.pageWidth / this.main.options.pageHeight) {
                //fit to height
                this.scroller.find('.img').css({
                    'width': 'auto',
                    'height': '100%'
                });
                /*this.zoomScroll.options.zoomMin = this.main.bookLayer.height() / this.main.options.pageHeight
			this.zoomTo(this.main.bookLayer.height() / this.main.options.pageHeight, 0)*/
            } else {
                //fit to widht
                this.scroller.find('.img').css({
                    'width': '100%',
                    'height': 'auto'
                });
                /*this.zoomScroll.options.zoomMin = this.main.bookLayer.width() / this.main.options.pageWidth
			this.zoomTo(this.main.bookLayer.width() / this.main.options.pageWidth, 0)*/
            }

            this.scroller.css('width', String(3 * this.main.bookLayer.width()) + 'px')

            this.iscroll.refresh();

            this.updateImages()
        },
        scrollToPage: function(index, time) {
            // console.log("scrollToPage",index)
            var self = this;
            self.iscroll.refresh()
            // if(self.iscroll.currPageX == index)
            // return;
            /*if(self.iscroll.maxScrollX < 0)
			self.iscroll.scrollToPage(index,0,time)
		else{
			setTimeout(function(){
			self.scrollToPage(index,time)
		},100);

		}*/

            self.iscroll.goToPage(index, 0, time)
        },
        zoomTo: function(val, time) {

            time = typeof(time) != 'undefined' ? time : 0
            var self = this;
            var ratio = self.zoomScroll.wrapperHeight / self.main.options.pageHeight
            self.zoomScroll.refresh()
            if (self.zoomScroll.wrapperWidth != 1) {


                if (val > this.main.options.zoomLevels[0]) {
                    // self.main.bookLayer.remove()
                    self.scroller.css('display', 'none')
                    self.imgScroller.css('display', 'block')
                    self.zoomScroll.refresh()
                    self.zoomScroll.zoom(val * ratio, self.bookLayer.width() / 2, self.bookLayer.height() / 2, time);

                } else {
                    self.scroller.css('display', 'block')
                    self.imgScroller.css('display', 'none')
                    self.iscroll.refresh()
                }


            } else {
                setTimeout(function() {
                    self.zoomTo(val, time)
                }, 100);
            }
        },
        zoomIn: function(value) {
            this.zoomTo(value)
        },
        zoomOut: function(value) {
            this.zoomTo(value)
        }
    }
}

{ /* FLIPBOOK.Book3*/

    FLIPBOOK.Book3 = function(el, options) {
        this.main = options.main;
        this.options = options
        this.singlePage = options.singlePageMode
        this.pageWidth = this.options.pageWidth
        this.pageHeight = this.options.pageHeight

        this.wrapper = typeof el == 'object' ? el : document.getElementById(el);
        this.$wrapper = jQuery(this.wrapper).addClass('flipbook-book3')
        var s = this.wrapper.style;
        // s.width = String(2 * this.pageWidth) + 'px';
        if (this.singlePage)
            s.width = String(this.pageWidth) + 'px';
        else
            s.width = String(2 * this.pageWidth) + 'px';
        s.height = String(this.pageHeight) + 'px';


        this.$centerContainer = jQuery('<div>').appendTo(this.$wrapper).addClass('flipbook-center-container3')
        if (this.options.singlePageMode) {
            this.$centerContainer.css({
                'perspective-origin-x': '0',
                '-webkit-perspective-origin-x': '0'
            })
        }
        this.centerContainerStyle = this.$centerContainer[0].style
        this.pagesArr = []
        this.animating = false;
        this.rightIndex = options.rightToLeft ? options.pages.length : 0

        this.flippedleft = this.rightIndex;
        this.flippedright = options.pages.length - this.rightIndex;
        //create pages
        this.numPages = options.pages.length

        var page
            //double page mode
        for (var i = 0; i < options.pages.length; i++) {
            page = new FLIPBOOK.Page3(this, i, options.pages[i].src, options.pages[i].htmlContent)
            this.pagesArr.push(page)
            this.$centerContainer.append(page.$wrapper)
            this.flippedright++;
            /*if(options.loadAllPages)
			page.load()*/
        }
        this.pagesArr[0].show()
        //this.updateVisiblePages()
    }

    FLIPBOOK.Book3.prototype = {}

    FLIPBOOK.Book3.prototype.enablePrev = function(val) {
        this.prevEnabled = val
    }

    FLIPBOOK.Book3.prototype.enableNext = function(val) {
        this.nextEnabled = val
    }

    FLIPBOOK.Book3.prototype.isZoomed = function() {
        return this.main.zoom > this.options.zoomLevels[0] && this.main.zoom > 1
    }

    FLIPBOOK.Book3.prototype.onZoom = function() {
        for (var i = 0; i < this.pagesArr.length; i++) {
            this.pagesArr[i].loaded = false
        }
        var self = this;
        setTimeout(function() {
            self.updateVisiblePages(false)
        }, 100);
    }

    FLIPBOOK.Book3.prototype.getNumPages = function() {}

    FLIPBOOK.Book3.prototype.updateBookPosition = function() {
        var transform
        if (this.rightIndex == 0) {
            transform = 'translateX(-' + this.pageWidth / 2 + 'px)'
        } else if (this.rightIndex >= this.options.pages.length) {
            transform = 'translateX(' + this.pageWidth / 2 + 'px)'
        } else {
            transform = 'translateX(0)'
        }
        if (this.options.singlePageMode)
            transform = 'translateX(0)'
        this._setStyle(this.centerContainerStyle, FLIPBOOK.IScroll.utils.style.transform, transform)
    }

    FLIPBOOK.Book3.prototype.updateVisiblePages = function(loadNextPrev) {
        if (typeof loadNextPrev == 'undefined')
            loadNextPrev = true
        var transform = FLIPBOOK.IScroll.utils.style.transform
        for (var i = 0; i < this.pagesArr.length; i++) {
            if (i == this.flippedleft)
                this.pagesArr[i].show()
            else if (i == (this.flippedleft - 1) && !this.options.singlePageMode)
                this.pagesArr[i].show()
            else
                this.pagesArr[i].hide()
            this.pagesArr[i]._setZIndex(0)
            this.pagesArr[i]._setStyle(this.pagesArr[i].wrapper.style, transform, '');
        }
        this.updateBookPosition()

        if (this.pagesArr[this.rightIndex]) this.pagesArr[this.rightIndex].load()
        if (this.pagesArr[this.rightIndex + 1] && loadNextPrev) this.pagesArr[this.rightIndex + 1].load()
        if (this.pagesArr[this.rightIndex - 1]) this.pagesArr[this.rightIndex - 1].load()

        if (!this.options.singlePageMode) {
            if (this.pagesArr[this.rightIndex + 2] && loadNextPrev) this.pagesArr[this.rightIndex + 2].load()
            if (this.pagesArr[this.rightIndex - 2] && loadNextPrev) this.pagesArr[this.rightIndex - 2].load()
            if (this.pagesArr[this.rightIndex - 3] && loadNextPrev) this.pagesArr[this.rightIndex - 3].load()
        }
    }


    FLIPBOOK.Book3.prototype.enable = function() {
        this.enabled = true
    }

    FLIPBOOK.Book3.prototype.disable = function() {
        this.enabled = false
    }

    FLIPBOOK.Book3.prototype.getLeftPage = function() {
        return this.pagesArr[this.flippedleft - 1]
    }

    FLIPBOOK.Book3.prototype.getRightPage = function() {
        return this.pagesArr[this.flippedleft]
    }

    FLIPBOOK.Book3.prototype.getLeftBackPage = function() {
        return this.pagesArr[this.flippedleft - 2]
    }

    FLIPBOOK.Book3.prototype.getRightBackPage = function() {
        return this.pagesArr[this.flippedleft + 1]
    }

    FLIPBOOK.Book3.prototype.getNextPage = function() {
        return this.pagesArr[this.flippedleft + 2]
    }

    FLIPBOOK.Book3.prototype.getPrevPage = function() {
        return this.pagesArr[this.flippedleft - 3]
    }

    FLIPBOOK.Book3.prototype.nextPage = function(instant, duration) {
        if (!this.nextEnabled) return
        var target = this.options.singlePageMode ? this.rightIndex + 1 : this.rightIndex + 2
        this.goToPage(target, instant)
    }

    FLIPBOOK.Book3.prototype.prevPage = function(instant) {
        if (!this.prevEnabled) return
        var target = this.options.singlePageMode ? this.rightIndex - 1 : this.rightIndex - 2
        this.goToPage(target, instant)
    }

    FLIPBOOK.Book3.prototype.goToPage = function(index, instant) {
        if (this.flipping) 
            return;

        if (index < 0) 
            index = 0;

        if(this.options.singlePageMode){
            //sp
            if(index > (this.pagesArr.length - 1))
                index = this.pagesArr.length - 1
        }else{
            //dp
            if (index % 2 != 0) 
                index--;
            if (index > this.pagesArr.length)
                index = this.pagesArr.length
        }

        if (index == this.rightIndex) {
            this.options.main.turnPageComplete()
            return;
        }
        if (instant) {
            this.flippedleft = index
            this.flippedright = this.pagesArr.length - index
            this.rightIndex = index
            this.updateVisiblePages()
            this.options.main.turnPageComplete()
            return;
        }

        this.flipping = true
        var easing = "easeOutCubic"
        if (typeof jQuery.easing[easing] == 'undefined') {
            this.options.main.initEasing()
        }

        //if(this.singlePage)
        var self = this
        this.goingToPage = index

        if (index > this.rightIndex) {
            end = 180
            if (self.angle <= 0 || self.angle >= 180 || !self.angle) self.angle = 1
        } else if (index < this.rightIndex) {
            end = -180
            if (self.angle >= 0 || self.angle <= -180 || !self.angle)
                self.angle = -1
        }

        var duration = 1000
        var d = this.options.pageFlipDuration * duration
        d *= Math.abs(end - this.angle) / 180
        if (this.options.singlePageMode)
            d /= 2;
        jQuery({
            someValue: self.angle
        }).animate({
            someValue: end
        }, {
            duration: d,
            easing: easing, // can be anything
            step: function(now) {
                self._setPageAngle(now)
            },
            complete: function() {
                self.rightIndex = index
                self.flippedleft = index
                self.flippedright = self.pagesArr.length - index
                self.updateVisiblePages()
                self.angle = 0
                self.flipping = false
                self.options.main.turnPageComplete()
            }
        });
        try {
            this.options.main.playFlipSound()
        } catch (err) {

        }
    }

    FLIPBOOK.Book3.prototype.onSwipe = function(event, phase, direction, distance, duration, fingerCount, fingerData) {
        if (this.isZoomed())
            return;
        if (event.target.className == "flipbook-page-link")
            return;
        if (jQuery(event.target).parents().hasClass('flipbook-page-htmlContent'))
            return;
        if (phase == 'start')
            return;

        distance = fingerData[0].start.x - fingerData[0].end.x
        if (this.flipping)
            return
        var angle = distance * 180 / this.options.main.blw
        if (phase == 'cancel' && fingerCount <= 1) {
            if (angle > 0)
                this.nextPage()
            else if (angle < 0)
                this.prevPage()
        }
        if (phase == 'end' && fingerCount <= 1) {
            if (angle > 0)
                this.nextPage()
            else if (angle < 0)
                this.prevPage()
        }
        if (phase == 'move' && fingerCount <= 1) {
            if (angle > 0) {
                if (!this.nextEnabled)
                    return
                if (this.options.singlePageMode) {
                    if (this.rightIndex == (this.pagesArr.length - 1))
                        return
                }
                this.goingToPage = this.options.singlePageMode ? this.rightIndex + 1 : this.rightIndex + 2
            } else if (angle < 0) {
                if (!this.prevEnabled)
                    return
                this.goingToPage = this.options.singlePageMode ? this.rightIndex - 1 : this.rightIndex - 2
            }
            if (this.goingToPage != this.rightIndex && this.goingToPage >= 0 && this.goingToPage <= this.pagesArr.length)
                this._setPageAngle(angle)
        }

    }

    FLIPBOOK.Book3.prototype._setStyle = function(style, name, value) {
        if (style)
            style[name] = value

    }

    FLIPBOOK.Book3.prototype._setPageAngle = function(angle) {
        this.angle = angle
        if (this.options.singlePageMode) {
            if (angle > 0) {
                front = this.pagesArr[this.rightIndex]
                front._setAngle(angle / 2)
                next = this.pagesArr[this.goingToPage]
                if (next) next.show()
            } else {
                back = this.pagesArr[this.goingToPage]
                back.show()
                back._setAngle(angle / 2 + 90)
            }
            return;
        }

        if (angle > 0) {
            front = this.pagesArr[this.rightIndex]
            back = this.pagesArr[this.goingToPage - 1]
            this.applyAngles(front, back, angle, 90, 0)
            next = this.pagesArr[back.index + 1]
            if (next) next.show()
            var transform = FLIPBOOK.IScroll.utils.style.transform
            if (this.rightIndex == 0)
                this._setStyle(this.centerContainerStyle, transform, 'translateX(' + String(-this.options.pageWidth / 2 + angle / 180 * this.options.pageWidth / 2) + 'px)')
            if (!next)
                this._setStyle(this.centerContainerStyle, transform, 'translateX(' + String(angle / 180 * this.options.pageWidth / 2) + 'px)')
        } else {
            back = this.pagesArr[this.rightIndex - 1]
            front = this.pagesArr[this.goingToPage]
            this.applyAngles(front, back, angle, -90, 180)
            prev = this.pagesArr[this.goingToPage - 1]
            if (prev) prev.show()
            var transform = FLIPBOOK.IScroll.utils.style.transform
            if (this.rightIndex == this.pagesArr.length)
                this._setStyle(this.centerContainerStyle, transform, 'translateX(' + String(this.options.pageWidth / 2 + angle / 180 * this.options.pageWidth / 2) + 'px)')
            if (!prev)
                this._setStyle(this.centerContainerStyle, transform, 'translateX(' + String(angle / 180 * this.options.pageWidth / 2) + 'px)')
        }
        // console.log(front,back,angle)
    }

    FLIPBOOK.Book3.prototype.applyAngles = function(front, back, angle, x, y) {
        if (angle < x) {
            if (front) {
                front._setAngle(angle + y)
                front.show()
            }
            if (back) {
                back.hide()
            }
        } else {
            if (back) {
                back._setAngle(angle + y)
                back.show()
            }
            if (front) {
                front.hide()
            }
        }
    }

}

{ /* FLIPBOOK.Page3*/

    FLIPBOOK.Page3 = function(book, index, texture, html) {
        // debugger
        this.book = book
        this.options = book.options
        this.texture = texture
        this.html = html
        this.index = index
        this.$wrapper = jQuery('<div>').addClass('flipbook-page3').width(book.options.pageWidth).height(book.options.pageHeight)
        this.wrapper = this.$wrapper[0]
        this.$img = jQuery('<img>').appendTo(this.$wrapper)
        this.$canvas = jQuery('<div>').appendTo(this.$wrapper).addClass('flipbook-page3-html')
        this.hidden = false
        this.hide()
        this.zIndex = 0
        if (this.options.singlePageMode) {
            this.$wrapper.addClass('flipbook-page3-front')
            this.type = "front"
        } else if (index % 2 == 0) {
            this.$wrapper.css('left', String(this.book.options.pageWidth) + 'px').addClass('flipbook-page3-front')
            this.type = "front"
        } else {
            this.$wrapper.addClass('flipbook-page3-back')
            this.type = 'back'
        }

        if (this.options.pageMode == 'doubleWithCover') {
            if (index % 2 == 0 && index > 0) {
                this.$img.css({
                    'transform': 'scaleX(2)',
                    '-webkit-transform': 'scaleX(2)',
                    'transform-origin': '100%',
                    '-webkit-transform-origin': '100%'
                })
                this.$canvas.css({
                    'transform': 'scaleX(2)',
                    '-webkit-transform': 'scaleX(2)',
                    'transform-origin': '100%',
                    '-webkit-transform-origin': '100%'
                })
            } else if (index % 2 == 1 && index < this.book.numPages - 1) {
                this.$img.css({
                    'transform': 'scaleX(2)',
                    '-webkit-transform': 'scaleX(2)',
                    'transform-origin': '0',
                    '-webkit-transform-origin': '0'
                })
                this.$canvas.css({
                    'transform': 'scaleX(2)',
                    '-webkit-transform': 'scaleX(2)',
                    'transform-origin': '0',
                    '-webkit-transform-origin': '0'
                })
            }
        }

    }

    FLIPBOOK.Page3.prototype = {

        load: function() {
            // debugger
            if (this.loaded == true)
                return;
            this.loaded = true;

            var self = this,
                main = this.book.main;

            if (self.options.pdfUrl != "") {
                var index = self.options.rightToLeft ? this.book.pagesArr.length - this.index - 1 : this.index;

                main.loadPagesFromPdf([index], function() {
                    c = self.options.pages[index].canvas
                    h = self.options.pages[index].htmlContent
                    setMat(c, h, self.options.rightToLeft)

                })

                function setMat(c, h, front) {
                    self.$canvas.empty();
                    jQuery(c).appendTo(self.$canvas)
                    jQuery(h).appendTo(self.$canvas)

                    // jQuery(c).appendTo(jQuery('body'))
                    // jQuery(h).appendTo(jQuery('body'))
                    delete c
                }
            } else {
                this.$img.attr('src', this.texture)
                this.$img[0].onload = function() {
                    self.$wrapper.css({
                        'background': 'none'
                    })
                }
                if (self.html)
                    jQuery(self.html).appendTo(self.$canvas)
                    //.addClass('noSwipe')
            }
        },

        show: function() {
            if (this.hidden) {
                // this.$wrapper.show()
                this.$wrapper[0].style.display = 'block'
            }

            this.hidden = false
        },

        hide: function() {
            if (!this.hidden) {
                // this.$wrapper.hide()
                this.$wrapper[0].style.display = 'none'
            }

            this.hidden = true
        },

        _setScale: function(value) {
            if (this.scale != value) {
                var transform = FLIPBOOK.IScroll.utils.style.transform
                var transformStyle = 'scaleX(' + String(value) + ')'
                this.scale = value
                this._setStyle(transform, transformStyle)
            }
        },

        _setAngle: function(angle) {
            // console.log(angle)
            if (this.angle == angle) return;
            this.angle = angle
            var transform = FLIPBOOK.IScroll.utils.style.transform
            var transformStyle
            if (this.book.options.viewMode == "3d") {
                if (this.type == 'front') {
                    transformStyle = 'rotateY(' + String(-angle) + 'deg)'
                } else {
                    transformStyle = 'rotateY(' + String(180 - angle) + 'deg)'
                }
            } else if (this.book.options.viewMode == "2d") {
                if (this.type == 'front') {
                    if (angle > 90) angle = 90
                    transformStyle = 'scaleX(' + String((180 - 2 * angle) / 180) + ')'
                } else {
                    if (angle < 90) angle = 90
                    transformStyle = 'scaleX(' + String(-1 + (2 * angle) / 180) + ')'
                }
            }

            /*if(angle == 90)
    		transformStyle = 'scaleX(0)'*/
            this._setStyle(this.wrapper.style, transform, transformStyle);
            var i
            var max = 0;
            for (i = 0; i < this.book.pagesArr.length; i++) {
                if (i != this.index && this.book.pagesArr[i].zIndex > max)
                    max = this.book.pagesArr[i].zIndex
            }
            // console.log(max)
            this._setZIndex(max + 1);
        },

        _setZIndex: function(val) {
            if (this.zIndex != val)
                this.wrapper.style['z-index'] = val
            this.zIndex = val
        },

        _setStyle: function(style, name, value) {
            if (style)
                style[name] = value
        }

    }
}

{ /* IScroll */


    /*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
    (function(window, document, Math) {
        var rAF = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };

        var utils = (function() {
            var me = {};

            var _elementStyle = document.createElement('div').style;
            var _vendor = (function() {
                var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
                    transform,
                    i = 0,
                    l = vendors.length;

                for (; i < l; i++) {
                    transform = vendors[i] + 'ransform';
                    if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
                }

                return false;
            })();

            function _prefixStyle(style) {
                if (_vendor === false) return false;
                if (_vendor === '') return style;
                return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
            }

            me.getTime = Date.now || function getTime() {
                return new Date().getTime();
            };

            me.extend = function(target, obj) {
                for (var i in obj) {
                    target[i] = obj[i];
                }
            };

            me.addEvent = function(el, type, fn, capture) {
                el.addEventListener(type, fn, !!capture);
            };

            me.removeEvent = function(el, type, fn, capture) {
                el.removeEventListener(type, fn, !!capture);
            };

            me.prefixPointerEvent = function(pointerEvent) {
                return window.MSPointerEvent ?
                    'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10) :
                    pointerEvent;
            };

            me.momentum = function(current, start, time, lowerMargin, wrapperSize, deceleration) {
                var distance = current - start,
                    speed = Math.abs(distance) / time,
                    destination,
                    duration;

                deceleration = deceleration === undefined ? 0.0006 : deceleration;

                destination = current + (speed * speed) / (2 * deceleration) * (distance < 0 ? -1 : 1);
                duration = speed / deceleration;

                if (destination < lowerMargin) {
                    destination = wrapperSize ? lowerMargin - (wrapperSize / 2.5 * (speed / 8)) : lowerMargin;
                    distance = Math.abs(destination - current);
                    duration = distance / speed;
                } else if (destination > 0) {
                    destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
                    distance = Math.abs(current) + destination;
                    duration = distance / speed;
                }

                return {
                    destination: Math.round(destination),
                    duration: duration
                };
            };

            var _transform = _prefixStyle('transform');

            me.extend(me, {
                hasTransform: _transform !== false,
                hasPerspective: _prefixStyle('perspective') in _elementStyle,
                hasTouch: 'ontouchstart' in window,
                hasPointer: window.PointerEvent || window.MSPointerEvent, // IE10 is prefixed
                hasTransition: _prefixStyle('transition') in _elementStyle
            });

            // This should find all Android browsers lower than build 535.19 (both stock browser and webview)
            me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));

            me.extend(me.style = {}, {
                transform: _transform,
                transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
                transitionDuration: _prefixStyle('transitionDuration'),
                transitionDelay: _prefixStyle('transitionDelay'),
                transformOrigin: _prefixStyle('transformOrigin')
            });

            me.hasClass = function(e, c) {
                var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
                return re.test(e.className);
            };

            me.addClass = function(e, c) {
                if (me.hasClass(e, c)) {
                    return;
                }

                var newclass = e.className.split(' ');
                newclass.push(c);
                e.className = newclass.join(' ');
            };

            me.removeClass = function(e, c) {
                if (!me.hasClass(e, c)) {
                    return;
                }

                var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
                e.className = e.className.replace(re, ' ');
            };

            me.offset = function(el) {
                var left = -el.offsetLeft,
                    top = -el.offsetTop;

                // jshint -W084
                while (el = el.offsetParent) {
                    left -= el.offsetLeft;
                    top -= el.offsetTop;
                }
                // jshint +W084

                return {
                    left: left,
                    top: top
                };
            };

            me.preventDefaultException = function(el, exceptions) {
                for (var i in exceptions) {
                    if (exceptions[i].test(el[i])) {
                        return true;
                    }
                }

                return false;
            };

            me.extend(me.eventType = {}, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,

                mousedown: 2,
                mousemove: 2,
                mouseup: 2,

                pointerdown: 3,
                pointermove: 3,
                pointerup: 3,

                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3
            });

            me.extend(me.ease = {}, {
                quadratic: {
                    style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    fn: function(k) {
                        return k * (2 - k);
                    }
                },
                circular: {
                    style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
                    fn: function(k) {
                        return Math.sqrt(1 - (--k * k));
                    }
                },
                back: {
                    style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    fn: function(k) {
                        var b = 4;
                        return (k = k - 1) * k * ((b + 1) * k + b) + 1;
                    }
                },
                bounce: {
                    style: '',
                    fn: function(k) {
                        if ((k /= 1) < (1 / 2.75)) {
                            return 7.5625 * k * k;
                        } else if (k < (2 / 2.75)) {
                            return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
                        } else if (k < (2.5 / 2.75)) {
                            return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
                        } else {
                            return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
                        }
                    }
                },
                elastic: {
                    style: '',
                    fn: function(k) {
                        var f = 0.22,
                            e = 0.4;

                        if (k === 0) {
                            return 0;
                        }
                        if (k == 1) {
                            return 1;
                        }

                        return (e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1);
                    }
                }
            });

            me.tap = function(e, eventName) {
                var ev = document.createEvent('Event');
                ev.initEvent(eventName, true, true);
                ev.pageX = e.pageX;
                ev.pageY = e.pageY;
                e.target.dispatchEvent(ev);
            };

            me.click = function(e) {
                var target = e.target,
                    ev;

                if (!(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName)) {
                    ev = document.createEvent('MouseEvents');
                    ev.initMouseEvent('click', true, true, e.view, 1,
                        target.screenX, target.screenY, target.clientX, target.clientY,
                        e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
                        0, null);

                    ev._constructed = true;
                    target.dispatchEvent(ev);
                }
            };

            return me;
        })();

        function IScroll(el, options) {
            this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
            this.scroller = this.wrapper.children[0];
            this.scrollerStyle = this.scroller.style; // cache style for better performance

            this.options = {

                zoomMin: 1,
                zoomMax: 4,
                startZoom: 1,

                resizeScrollbars: true,

                mouseWheelSpeed: 20,

                snapThreshold: 0.334,

                // INSERT POINT: OPTIONS

                startX: 0,
                startY: 0,
                scrollY: true,
                directionLockThreshold: 5,
                momentum: true,

                bounce: true,
                bounceTime: 600,
                bounceEasing: '',

                preventDefault: true,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                },

                HWCompositing: true,
                useTransition: true,
                useTransform: true,

                keepInCenterH: false,
                keepInCenterV: false
            };

            for (var i in options) {
                this.options[i] = options[i];
            }

            // Normalize options
            this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

            this.options.useTransition = utils.hasTransition && this.options.useTransition;
            this.options.useTransform = utils.hasTransform && this.options.useTransform;

            this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
            this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

            // If you want eventPassthrough I have to lock one of the axes
            this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
            this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

            // With eventPassthrough we also need lockDirection mechanism
            this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
            this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

            this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

            this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

            if (this.options.tap === true) {
                this.options.tap = 'tap';
            }

            if (this.options.shrinkScrollbars == 'scale') {
                this.options.useTransition = false;
            }

            this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

            // INSERT POINT: NORMALIZATION

            // Some defaults
            this.x = 0;
            this.y = 0;
            this.directionX = 0;
            this.directionY = 0;
            this._events = {};

            this.scale = Math.min(Math.max(this.options.startZoom, this.options.zoomMin), this.options.zoomMax);

            // INSERT POINT: DEFAULTS

            this._init();
            this.refresh();

            this.scrollTo(this.options.startX, this.options.startY);
            this.enable();
        }

        IScroll.prototype = {
            version: '5.1.3',

            _init: function() {
                this._initEvents();

                if (this.options.zoom) {
                    this._initZoom();
                }

                if (this.options.scrollbars || this.options.indicators) {
                    this._initIndicators();
                }

                if (this.options.mouseWheel) {
                    this._initWheel();
                }

                if (this.options.snap) {
                    this._initSnap();
                }

                if (this.options.keyBindings) {
                    this._initKeys();
                }

                // INSERT POINT: _init

            },

            destroy: function() {
                this._initEvents(true);

                this._execEvent('destroy');
            },

            _transitionEnd: function(e) {
                if (e.target != this.scroller || !this.isInTransition) {
                    return;
                }

                this._transitionTime();
                if (!this.resetPosition(this.options.bounceTime)) {
                    this.isInTransition = false;
                    this._execEvent('scrollEnd');
                }
            },

            _start: function(e) {
                // React to left mouse button only
                if (utils.eventType[e.type] != 1) {
                    if (e.button !== 0) {
                        return;
                    }
                }

                if (!this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated)) {
                    return;
                }

                if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                    e.preventDefault();
                }

                var point = e.touches ? e.touches[0] : e,
                    pos;

                this.initiated = utils.eventType[e.type];
                this.moved = false;
                this.distX = 0;
                this.distY = 0;
                this.directionX = 0;
                this.directionY = 0;
                this.directionLocked = 0;

                this._transitionTime();

                this.startTime = utils.getTime();

                if (this.options.useTransition && this.isInTransition) {
                    this.isInTransition = false;
                    pos = this.getComputedPosition();
                    this._translate(Math.round(pos.x), Math.round(pos.y));
                    this._execEvent('scrollEnd');
                } else if (!this.options.useTransition && this.isAnimating) {
                    this.isAnimating = false;
                    this._execEvent('scrollEnd');
                }

                this.startX = this.x;
                this.startY = this.y;
                this.absStartX = this.x;
                this.absStartY = this.y;
                this.pointX = point.pageX;
                this.pointY = point.pageY;

                this._execEvent('beforeScrollStart');
            },

            _move: function(e) {
                if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                    return;
                }

                if (this.options.preventDefault) { // increases performance on Android? TODO: check!
                    e.preventDefault();
                }

                var point = e.touches ? e.touches[0] : e,
                    deltaX = point.pageX - this.pointX,
                    deltaY = point.pageY - this.pointY,
                    timestamp = utils.getTime(),
                    newX, newY,
                    absDistX, absDistY;

                this.pointX = point.pageX;
                this.pointY = point.pageY;

                this.distX += deltaX;
                this.distY += deltaY;
                absDistX = Math.abs(this.distX);
                absDistY = Math.abs(this.distY);

                // We need to move at least 10 pixels for the scrolling to initiate
                if (timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10)) {
                    return;
                }

                // If you are scrolling in one direction lock the other
                if (!this.directionLocked && !this.options.freeScroll) {
                    if (absDistX > absDistY + this.options.directionLockThreshold) {
                        this.directionLocked = 'h'; // lock horizontally
                    } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
                        this.directionLocked = 'v'; // lock vertically
                    } else {
                        this.directionLocked = 'n'; // no lock
                    }
                }

                if (this.directionLocked == 'h') {
                    if (this.options.eventPassthrough == 'vertical') {
                        e.preventDefault();
                    } else if (this.options.eventPassthrough == 'horizontal') {
                        this.initiated = false;
                        return;
                    }

                    deltaY = 0;
                } else if (this.directionLocked == 'v') {
                    if (this.options.eventPassthrough == 'horizontal') {
                        e.preventDefault();
                    } else if (this.options.eventPassthrough == 'vertical') {
                        this.initiated = false;
                        return;
                    }

                    deltaX = 0;
                }

                deltaX = this.hasHorizontalScroll ? deltaX : 0;
                deltaY = this.hasVerticalScroll ? deltaY : 0;

                newX = this.x + deltaX;
                newY = this.y + deltaY;

                // Slow down if outside of the boundaries
                if (newX > 0 || newX < this.maxScrollX) {
                    newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
                }
                if (newY > 0 || newY < this.maxScrollY) {
                    newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
                }

                this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
                this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

                if (!this.moved) {
                    this._execEvent('scrollStart');
                }

                this.moved = true;

                this._translate(newX, newY);

                /* REPLACE START: _move */

                if (timestamp - this.startTime > 300) {
                    this.startTime = timestamp;
                    this.startX = this.x;
                    this.startY = this.y;
                }

                /* REPLACE END: _move */

            },

            _end: function(e) {
                if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                    return;
                }

                if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                    e.preventDefault();
                }

                var point = e.changedTouches ? e.changedTouches[0] : e,
                    momentumX,
                    momentumY,
                    duration = utils.getTime() - this.startTime,
                    newX = Math.round(this.x),
                    newY = Math.round(this.y),
                    distanceX = Math.abs(newX - this.startX),
                    distanceY = Math.abs(newY - this.startY),
                    time = 0,
                    easing = '';

                this.isInTransition = 0;
                this.initiated = 0;
                this.endTime = utils.getTime();

                // reset if we are outside of the boundaries
                if (this.resetPosition(this.options.bounceTime)) {
                    return;
                }

                this.scrollTo(newX, newY); // ensures that the last position is rounded

                // we scrolled less than 10 pixels
                if (!this.moved) {
                    if (this.options.tap) {
                        utils.tap(e, this.options.tap);
                    }

                    if (this.options.click) {
                        utils.click(e);
                    }

                    this._execEvent('scrollCancel');
                    return;
                }

                if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
                    this._execEvent('flick');
                    return;
                }

                // start momentum animation if needed
                if (this.options.momentum && duration < 300) {
                    momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                        destination: newX,
                        duration: 0
                    };
                    momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                        destination: newY,
                        duration: 0
                    };
                    newX = momentumX.destination;
                    newY = momentumY.destination;
                    time = Math.max(momentumX.duration, momentumY.duration);
                    this.isInTransition = 1;
                }


                if (this.options.snap) {
                    var snap = this._nearestSnap(newX, newY);
                    this.currentPage = snap;
                    time = this.options.snapSpeed || Math.max(
                        Math.max(
                            Math.min(Math.abs(newX - snap.x), 1000),
                            Math.min(Math.abs(newY - snap.y), 1000)
                        ), 300);
                    newX = snap.x;
                    newY = snap.y;

                    this.directionX = 0;
                    this.directionY = 0;
                    easing = this.options.bounceEasing;
                }

                // INSERT POINT: _end

                if (newX != this.x || newY != this.y) {
                    // change easing function when scroller goes out of the boundaries
                    if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
                        easing = utils.ease.quadratic;
                    }

                    this.scrollTo(newX, newY, time, easing);
                    return;
                }

                this._execEvent('scrollEnd');
            },

            _resize: function() {
                var that = this;

                clearTimeout(this.resizeTimeout);

                this.resizeTimeout = setTimeout(function() {
                    that.refresh();
                }, this.options.resizePolling);
            },

            resetPosition: function(time) {
                var x = this.x,
                    y = this.y;

                time = time || 0;

                if (!this.hasHorizontalScroll || this.x > 0) {
                    x = 0;
                } else if (this.x < this.maxScrollX) {
                    x = this.maxScrollX;
                }

                if (!this.hasVerticalScroll || this.y > 0) {
                    y = 0;
                } else if (this.y < this.maxScrollY) {
                    y = this.maxScrollY;
                }

                if (x == this.x && y == this.y) {
                    return false;
                }

                /*if(this.options.keepInCenterH && $(this.wrapper).width() > $(this.scroller).width())
			x = ($(this.wrapper).width() - $(this.scroller).width()) / 2*/

                this.scrollTo(x, y, time, this.options.bounceEasing);

                return true;
            },

            disable: function() {
                this.enabled = false;
            },

            enable: function() {
                this.enabled = true;
            },

            refresh: function() {
                var rf = this.wrapper.offsetHeight; // Force reflow

                this.wrapperWidth = this.wrapper.clientWidth;
                this.wrapperHeight = this.wrapper.clientHeight;

                /* REPLACE START: refresh */
                this.scrollerWidth = Math.round(this.scroller.offsetWidth * this.scale);
                this.scrollerHeight = Math.round(this.scroller.offsetHeight * this.scale);

                this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
                this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
                /* REPLACE END: refresh */

                this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
                this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

                if (!this.hasHorizontalScroll) {
                    this.maxScrollX = 0;
                    this.scrollerWidth = this.wrapperWidth;
                }

                if (!this.hasVerticalScroll) {
                    this.maxScrollY = 0;
                    this.scrollerHeight = this.wrapperHeight;
                }

                this.endTime = 0;
                this.directionX = 0;
                this.directionY = 0;

                this.wrapperOffset = utils.offset(this.wrapper);

                this._execEvent('refresh');

                this.resetPosition();

                // INSERT POINT: _refresh

            },

            on: function(type, fn) {
                if (!this._events[type]) {
                    this._events[type] = [];
                }

                this._events[type].push(fn);
            },

            off: function(type, fn) {
                if (!this._events[type]) {
                    return;
                }

                var index = this._events[type].indexOf(fn);

                if (index > -1) {
                    this._events[type].splice(index, 1);
                }
            },

            _execEvent: function(type) {
                if (!this._events[type]) {
                    return;
                }

                var i = 0,
                    l = this._events[type].length;

                if (!l) {
                    return;
                }

                for (; i < l; i++) {
                    this._events[type][i].apply(this, [].slice.call(arguments, 1));
                }
            },

            scrollBy: function(x, y, time, easing) {
                x = this.x + x;
                y = this.y + y;
                time = time || 0;

                this.scrollTo(x, y, time, easing);
            },

            scrollTo: function(x, y, time, easing) {

                if (this.options.keepInCenterH && this.scroller.offsetWidth * this.scale < this.wrapperWidth)
                    x = this.wrapperWidth / 2 - this.scroller.offsetWidth * this.scale / 2

                if (this.options.keepInCenterV && this.scroller.offsetHeight * this.scale < this.wrapperHeight)
                    y = this.wrapperHeight / 2 - this.scroller.offsetHeight * this.scale / 2

                easing = easing || utils.ease.circular;

                this.isInTransition = this.options.useTransition && time > 0;

                if (!time || (this.options.useTransition && easing.style)) {
                    this._transitionTimingFunction(easing.style);
                    this._transitionTime(time);
                    this._translate(x, y);
                } else {
                    this._animate(x, y, time, easing.fn);
                }
            },

            scrollToElement: function(el, time, offsetX, offsetY, easing) {
                el = el.nodeType ? el : this.scroller.querySelector(el);

                if (!el) {
                    return;
                }

                var pos = utils.offset(el);

                pos.left -= this.wrapperOffset.left;
                pos.top -= this.wrapperOffset.top;

                // if offsetX/Y are true we center the element to the screen
                if (offsetX === true) {
                    offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
                }
                if (offsetY === true) {
                    offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
                }

                pos.left -= offsetX || 0;
                pos.top -= offsetY || 0;

                pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
                pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

                time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;

                this.scrollTo(pos.left, pos.top, time, easing);
            },

            _transitionTime: function(time) {
                time = time || 0;

                this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';

                if (!time && utils.isBadAndroid) {
                    this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
                }


                if (this.indicators) {
                    for (var i = this.indicators.length; i--;) {
                        this.indicators[i].transitionTime(time);
                    }
                }


                // INSERT POINT: _transitionTime

            },

            _transitionTimingFunction: function(easing) {
                this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


                if (this.indicators) {
                    for (var i = this.indicators.length; i--;) {
                        this.indicators[i].transitionTimingFunction(easing);
                    }
                }


                // INSERT POINT: _transitionTimingFunction

            },

            _translate: function(x, y) {

                if (this.options.useTransform) {

                    /* REPLACE START: _translate */
                    this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + this.scale + ') ' + this.translateZ; /* REPLACE END: _translate */

                } else {
                    x = Math.round(x);
                    y = Math.round(y);
                    this.scrollerStyle.left = x + 'px';
                    this.scrollerStyle.top = y + 'px';
                }

                this.x = x;
                this.y = y;


                if (this.indicators) {
                    for (var i = this.indicators.length; i--;) {
                        this.indicators[i].updatePosition();
                    }
                }


                // INSERT POINT: _translate

            },

            _initEvents: function(remove) {
                var eventType = remove ? utils.removeEvent : utils.addEvent,
                    target = this.options.bindToWrapper ? this.wrapper : window;

                eventType(window, 'orientationchange', this);
                eventType(window, 'resize', this);

                if (this.options.click) {
                    eventType(this.wrapper, 'click', this, true);
                }

                if (!this.options.disableMouse) {
                    eventType(this.wrapper, 'mousedown', this);
                    eventType(target, 'mousemove', this);
                    eventType(target, 'mousecancel', this);
                    eventType(target, 'mouseup', this);
                }

                if (utils.hasPointer && !this.options.disablePointer) {
                    eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
                    eventType(target, utils.prefixPointerEvent('pointermove'), this);
                    eventType(target, utils.prefixPointerEvent('pointercancel'), this);
                    eventType(target, utils.prefixPointerEvent('pointerup'), this);
                }

                if (utils.hasTouch && !this.options.disableTouch) {
                    eventType(this.wrapper, 'touchstart', this);
                    eventType(target, 'touchmove', this);
                    eventType(target, 'touchcancel', this);
                    eventType(target, 'touchend', this);
                }

                eventType(this.scroller, 'transitionend', this);
                eventType(this.scroller, 'webkitTransitionEnd', this);
                eventType(this.scroller, 'oTransitionEnd', this);
                eventType(this.scroller, 'MSTransitionEnd', this);
            },

            getComputedPosition: function() {
                var matrix = window.getComputedStyle(this.scroller, null),
                    x, y;

                if (this.options.useTransform) {
                    matrix = matrix[utils.style.transform].split(')')[0].split(', ');
                    x = +(matrix[12] || matrix[4]);
                    y = +(matrix[13] || matrix[5]);
                } else {
                    x = +matrix.left.replace(/[^-\d.]/g, '');
                    y = +matrix.top.replace(/[^-\d.]/g, '');
                }

                return {
                    x: x,
                    y: y
                };
            },

            _initIndicators: function() {
                var interactive = this.options.interactiveScrollbars,
                    customStyle = typeof this.options.scrollbars != 'string',
                    indicators = [],
                    indicator;

                var that = this;

                this.indicators = [];

                if (this.options.scrollbars) {
                    // Vertical scrollbar
                    if (this.options.scrollY) {
                        indicator = {
                            el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
                            interactive: interactive,
                            defaultScrollbars: true,
                            customStyle: customStyle,
                            resize: this.options.resizeScrollbars,
                            shrink: this.options.shrinkScrollbars,
                            fade: this.options.fadeScrollbars,
                            listenX: false
                        };

                        this.wrapper.appendChild(indicator.el);
                        indicators.push(indicator);
                    }

                    // Horizontal scrollbar
                    if (this.options.scrollX) {
                        indicator = {
                            el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
                            interactive: interactive,
                            defaultScrollbars: true,
                            customStyle: customStyle,
                            resize: this.options.resizeScrollbars,
                            shrink: this.options.shrinkScrollbars,
                            fade: this.options.fadeScrollbars,
                            listenY: false
                        };

                        this.wrapper.appendChild(indicator.el);
                        indicators.push(indicator);
                    }
                }

                if (this.options.indicators) {
                    // TODO: check concat compatibility
                    indicators = indicators.concat(this.options.indicators);
                }

                for (var i = indicators.length; i--;) {
                    this.indicators.push(new Indicator(this, indicators[i]));
                }

                // TODO: check if we can use array.map (wide compatibility and performance issues)
                function _indicatorsMap(fn) {
                    for (var i = that.indicators.length; i--;) {
                        fn.call(that.indicators[i]);
                    }
                }

                if (this.options.fadeScrollbars) {
                    this.on('scrollEnd', function() {
                        _indicatorsMap(function() {
                            this.fade();
                        });
                    });

                    this.on('scrollCancel', function() {
                        _indicatorsMap(function() {
                            this.fade();
                        });
                    });

                    this.on('scrollStart', function() {
                        _indicatorsMap(function() {
                            this.fade(1);
                        });
                    });

                    this.on('beforeScrollStart', function() {
                        _indicatorsMap(function() {
                            this.fade(1, true);
                        });
                    });
                }


                this.on('refresh', function() {
                    _indicatorsMap(function() {
                        this.refresh();
                    });
                });

                this.on('destroy', function() {
                    _indicatorsMap(function() {
                        this.destroy();
                    });

                    delete this.indicators;
                });
            },

            _initZoom: function() {
                this.scrollerStyle[utils.style.transformOrigin] = '0 0';
            },

            _zoomStart: function(e) {
                var c1 = Math.abs(e.touches[0].pageX - e.touches[1].pageX),
                    c2 = Math.abs(e.touches[0].pageY - e.touches[1].pageY);

                this.touchesDistanceStart = Math.sqrt(c1 * c1 + c2 * c2);
                this.startScale = this.scale;

                this.originX = Math.abs(e.touches[0].pageX + e.touches[1].pageX) / 2 + this.wrapperOffset.left - this.x;
                this.originY = Math.abs(e.touches[0].pageY + e.touches[1].pageY) / 2 + this.wrapperOffset.top - this.y;

                this._execEvent('zoomStart');
            },

            _zoom: function(e) {
                if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                    return;
                }

                if (this.options.preventDefault) {
                    e.preventDefault();
                }

                var c1 = Math.abs(e.touches[0].pageX - e.touches[1].pageX),
                    c2 = Math.abs(e.touches[0].pageY - e.touches[1].pageY),
                    distance = Math.sqrt(c1 * c1 + c2 * c2),
                    scale = 1 / this.touchesDistanceStart * distance * this.startScale,
                    lastScale,
                    x, y;

                this.scaled = true;

                if (scale < this.options.zoomMin) {
                    scale = 0.5 * this.options.zoomMin * Math.pow(2.0, scale / this.options.zoomMin);
                } else if (scale > this.options.zoomMax) {
                    scale = 2.0 * this.options.zoomMax * Math.pow(0.5, this.options.zoomMax / scale);
                }

                lastScale = scale / this.startScale;
                x = this.originX - this.originX * lastScale + this.startX;
                y = this.originY - this.originY * lastScale + this.startY;

                this.scale = scale;

                this.scrollTo(x, y, 0);
            },

            _zoomEnd: function(e) {
                if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                    return;
                }

                if (this.options.preventDefault) {
                    e.preventDefault();
                }

                var newX, newY,
                    lastScale;

                this.isInTransition = 0;
                this.initiated = 0;

                if (this.scale > this.options.zoomMax) {
                    this.scale = this.options.zoomMax;
                } else if (this.scale < this.options.zoomMin) {
                    this.scale = this.options.zoomMin;
                }

                // Update boundaries
                this.refresh();

                lastScale = this.scale / this.startScale;

                newX = this.originX - this.originX * lastScale + this.startX;
                newY = this.originY - this.originY * lastScale + this.startY;

                if (newX > 0) {
                    newX = 0;
                } else if (newX < this.maxScrollX) {
                    newX = this.maxScrollX;
                }

                if (newY > 0) {
                    newY = 0;
                } else if (newY < this.maxScrollY) {
                    newY = this.maxScrollY;
                }

                if (this.x != newX || this.y != newY) {
                    this.scrollTo(newX, newY, this.options.bounceTime);
                }

                this.scaled = false;

                this._execEvent('zoomEnd');
            },

            zoom: function(scale, x, y, time) {
                if (scale < this.options.zoomMin) {
                    scale = this.options.zoomMin;
                } else if (scale > this.options.zoomMax) {
                    scale = this.options.zoomMax;
                }

                if (scale == this.scale) {
                    return;
                }

                var relScale = scale / this.scale;

                x = x === undefined ? this.wrapperWidth / 2 : x;
                y = y === undefined ? this.wrapperHeight / 2 : y;
                time = time === undefined ? 300 : time;

                x = x + this.wrapperOffset.left - this.x;
                y = y + this.wrapperOffset.top - this.y;

                x = x - x * relScale + this.x;
                y = y - y * relScale + this.y;

                this.scale = scale;

                this.refresh(); // update boundaries

                if (x > 0) {
                    x = 0;
                } else if (x < this.maxScrollX) {
                    x = this.maxScrollX;
                }

                if (y > 0) {
                    y = 0;
                } else if (y < this.maxScrollY) {
                    y = this.maxScrollY;
                }

                this.scrollTo(x, y, time);
            },

            _wheelZoom: function(e) {
                var wheelDeltaY,
                    deltaScale,
                    that = this;

                // Execute the zoomEnd event after 400ms the wheel stopped scrolling
                clearTimeout(this.wheelTimeout);
                this.wheelTimeout = setTimeout(function() {
                    that._execEvent('zoomEnd');
                }, 400);

                if ('deltaX' in e) {
                    wheelDeltaY = -e.deltaY / Math.abs(e.deltaY);
                } else if ('wheelDeltaX' in e) {
                    wheelDeltaY = e.wheelDeltaY / Math.abs(e.wheelDeltaY);
                } else if ('wheelDelta' in e) {
                    wheelDeltaY = e.wheelDelta / Math.abs(e.wheelDelta);
                } else if ('detail' in e) {
                    wheelDeltaY = -e.detail / Math.abs(e.wheelDelta);
                } else {
                    return;
                }

                deltaScale = this.scale + wheelDeltaY / 5;

                this.zoom(deltaScale, e.pageX, e.pageY, 0);
            },

            _initWheel: function() {
                utils.addEvent(this.wrapper, 'wheel', this);
                utils.addEvent(this.wrapper, 'mousewheel', this);
                utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

                this.on('destroy', function() {
                    utils.removeEvent(this.wrapper, 'wheel', this);
                    utils.removeEvent(this.wrapper, 'mousewheel', this);
                    utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
                });
            },

            _wheel: function(e) {
                if (!this.enabled) {
                    return;
                }

                e.preventDefault();
                e.stopPropagation();

                var wheelDeltaX, wheelDeltaY,
                    newX, newY,
                    that = this;

                if (this.wheelTimeout === undefined) {
                    that._execEvent('scrollStart');
                }

                // Execute the scrollEnd event after 400ms the wheel stopped scrolling
                clearTimeout(this.wheelTimeout);
                this.wheelTimeout = setTimeout(function() {
                    that._execEvent('scrollEnd');
                    that.wheelTimeout = undefined;
                }, 400);

                if ('deltaX' in e) {
                    if (e.deltaMode === 1) {
                        wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
                        wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
                    } else {
                        wheelDeltaX = -e.deltaX;
                        wheelDeltaY = -e.deltaY;
                    }
                } else if ('wheelDeltaX' in e) {
                    wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
                    wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                } else if ('wheelDelta' in e) {
                    wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
                } else if ('detail' in e) {
                    wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
                } else {
                    return;
                }

                wheelDeltaX *= this.options.invertWheelDirection;
                wheelDeltaY *= this.options.invertWheelDirection;

                if (!this.hasVerticalScroll) {
                    wheelDeltaX = wheelDeltaY;
                    wheelDeltaY = 0;
                }

                if (this.options.snap) {
                    newX = this.currentPage.pageX;
                    newY = this.currentPage.pageY;

                    if (wheelDeltaX > 0) {
                        newX--;
                    } else if (wheelDeltaX < 0) {
                        newX++;
                    }

                    if (wheelDeltaY > 0) {
                        newY--;
                    } else if (wheelDeltaY < 0) {
                        newY++;
                    }

                    this.goToPage(newX, newY);

                    return;
                }

                newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
                newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

                if (newX > 0) {
                    newX = 0;
                } else if (newX < this.maxScrollX) {
                    newX = this.maxScrollX;
                }

                if (newY > 0) {
                    newY = 0;
                } else if (newY < this.maxScrollY) {
                    newY = this.maxScrollY;
                }

                this.scrollTo(newX, newY, 0);

                // INSERT POINT: _wheel
            },

            _initSnap: function() {
                this.currentPage = {};

                if (typeof this.options.snap == 'string') {
                    this.options.snap = this.scroller.querySelectorAll(this.options.snap);
                }

                this.on('refresh', function() {
                    var i = 0,
                        l,
                        m = 0,
                        n,
                        cx, cy,
                        x = 0,
                        y,
                        stepX = this.options.snapStepX || this.wrapperWidth,
                        stepY = this.options.snapStepY || this.wrapperHeight,
                        el;

                    this.pages = [];

                    if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
                        return;
                    }

                    if (this.options.snap === true) {
                        cx = Math.round(stepX / 2);
                        cy = Math.round(stepY / 2);

                        while (x > -this.scrollerWidth) {
                            this.pages[i] = [];
                            l = 0;
                            y = 0;

                            while (y > -this.scrollerHeight) {
                                this.pages[i][l] = {
                                    x: Math.max(x, this.maxScrollX),
                                    y: Math.max(y, this.maxScrollY),
                                    width: stepX,
                                    height: stepY,
                                    cx: x - cx,
                                    cy: y - cy
                                };

                                y -= stepY;
                                l++;
                            }

                            x -= stepX;
                            i++;
                        }
                    } else {
                        el = this.options.snap;
                        l = el.length;
                        n = -1;

                        for (; i < l; i++) {
                            if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
                                m = 0;
                                n++;
                            }

                            if (!this.pages[m]) {
                                this.pages[m] = [];
                            }

                            x = Math.max(-el[i].offsetLeft, this.maxScrollX);
                            y = Math.max(-el[i].offsetTop, this.maxScrollY);
                            cx = x - Math.round(el[i].offsetWidth / 2);
                            cy = y - Math.round(el[i].offsetHeight / 2);

                            this.pages[m][n] = {
                                x: x,
                                y: y,
                                width: el[i].offsetWidth,
                                height: el[i].offsetHeight,
                                cx: cx,
                                cy: cy
                            };

                            if (x > this.maxScrollX) {
                                m++;
                            }
                        }
                    }

                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

                    // Update snap threshold if needed
                    if (this.options.snapThreshold % 1 === 0) {
                        this.snapThresholdX = this.options.snapThreshold;
                        this.snapThresholdY = this.options.snapThreshold;
                    } else {
                        this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                        this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
                    }
                });

                this.on('flick', function() {
                    var time = this.options.snapSpeed || Math.max(
                        Math.max(
                            Math.min(Math.abs(this.x - this.startX), 1000),
                            Math.min(Math.abs(this.y - this.startY), 1000)
                        ), 300);

                    this.goToPage(
                        this.currentPage.pageX + this.directionX,
                        this.currentPage.pageY + this.directionY,
                        time
                    );
                });
            },

            _nearestSnap: function(x, y) {
                if (!this.pages.length) {
                    return {
                        x: 0,
                        y: 0,
                        pageX: 0,
                        pageY: 0
                    };
                }

                var i = 0,
                    l = this.pages.length,
                    m = 0;

                // Check if we exceeded the snap threshold
                if (Math.abs(x - this.absStartX) < this.snapThresholdX &&
                    Math.abs(y - this.absStartY) < this.snapThresholdY) {
                    return this.currentPage;
                }

                if (x > 0) {
                    x = 0;
                } else if (x < this.maxScrollX) {
                    x = this.maxScrollX;
                }

                if (y > 0) {
                    y = 0;
                } else if (y < this.maxScrollY) {
                    y = this.maxScrollY;
                }

                for (; i < l; i++) {
                    if (x >= this.pages[i][0].cx) {
                        x = this.pages[i][0].x;
                        break;
                    }
                }

                l = this.pages[i].length;

                for (; m < l; m++) {
                    if (y >= this.pages[0][m].cy) {
                        y = this.pages[0][m].y;
                        break;
                    }
                }

                if (i == this.currentPage.pageX) {
                    i += this.directionX;

                    if (i < 0) {
                        i = 0;
                    } else if (i >= this.pages.length) {
                        i = this.pages.length - 1;
                    }

                    x = this.pages[i][0].x;
                }

                if (m == this.currentPage.pageY) {
                    m += this.directionY;

                    if (m < 0) {
                        m = 0;
                    } else if (m >= this.pages[0].length) {
                        m = this.pages[0].length - 1;
                    }

                    y = this.pages[0][m].y;
                }

                return {
                    x: x,
                    y: y,
                    pageX: i,
                    pageY: m
                };
            },

            goToPage: function(x, y, time, easing) {
                easing = easing || this.options.bounceEasing;

                if (x >= this.pages.length) {
                    x = this.pages.length - 1;
                } else if (x < 0) {
                    x = 0;
                }

                if (y >= this.pages[x].length) {
                    y = this.pages[x].length - 1;
                } else if (y < 0) {
                    y = 0;
                }

                var posX = this.pages[x][y].x,
                    posY = this.pages[x][y].y;

                time = time === undefined ? this.options.snapSpeed || Math.max(
                    Math.max(
                        Math.min(Math.abs(posX - this.x), 1000),
                        Math.min(Math.abs(posY - this.y), 1000)
                    ), 300) : time;

                this.currentPage = {
                    x: posX,
                    y: posY,
                    pageX: x,
                    pageY: y
                };

                this.scrollTo(posX, posY, time, easing);
            },

            next: function(time, easing) {
                var x = this.currentPage.pageX,
                    y = this.currentPage.pageY;

                x++;

                if (x >= this.pages.length && this.hasVerticalScroll) {
                    x = 0;
                    y++;
                }

                this.goToPage(x, y, time, easing);
            },

            prev: function(time, easing) {
                var x = this.currentPage.pageX,
                    y = this.currentPage.pageY;

                x--;

                if (x < 0 && this.hasVerticalScroll) {
                    x = 0;
                    y--;
                }

                this.goToPage(x, y, time, easing);
            },

            _initKeys: function(e) {
                // default key bindings
                var keys = {
                    pageUp: 33,
                    pageDown: 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40
                };
                var i;

                // if you give me characters I give you keycode
                if (typeof this.options.keyBindings == 'object') {
                    for (i in this.options.keyBindings) {
                        if (typeof this.options.keyBindings[i] == 'string') {
                            this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
                        }
                    }
                } else {
                    this.options.keyBindings = {};
                }

                for (i in keys) {
                    this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
                }

                utils.addEvent(window, 'keydown', this);

                this.on('destroy', function() {
                    utils.removeEvent(window, 'keydown', this);
                });
            },

            _key: function(e) {
                if (!this.enabled) {
                    return;
                }

                var snap = this.options.snap, // we are using this alot, better to cache it
                    newX = snap ? this.currentPage.pageX : this.x,
                    newY = snap ? this.currentPage.pageY : this.y,
                    now = utils.getTime(),
                    prevTime = this.keyTime || 0,
                    acceleration = 0.250,
                    pos;

                if (this.options.useTransition && this.isInTransition) {
                    pos = this.getComputedPosition();

                    this._translate(Math.round(pos.x), Math.round(pos.y));
                    this.isInTransition = false;
                }

                this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

                switch (e.keyCode) {
                    case this.options.keyBindings.pageUp:
                        if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                            newX += snap ? 1 : this.wrapperWidth;
                        } else {
                            newY += snap ? 1 : this.wrapperHeight;
                        }
                        break;
                    case this.options.keyBindings.pageDown:
                        if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                            newX -= snap ? 1 : this.wrapperWidth;
                        } else {
                            newY -= snap ? 1 : this.wrapperHeight;
                        }
                        break;
                    case this.options.keyBindings.end:
                        newX = snap ? this.pages.length - 1 : this.maxScrollX;
                        newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
                        break;
                    case this.options.keyBindings.home:
                        newX = 0;
                        newY = 0;
                        break;
                    case this.options.keyBindings.left:
                        newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.right:
                        newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    default:
                        return;
                }

                if (snap) {
                    this.goToPage(newX, newY);
                    return;
                }

                if (newX > 0) {
                    newX = 0;
                    this.keyAcceleration = 0;
                } else if (newX < this.maxScrollX) {
                    newX = this.maxScrollX;
                    this.keyAcceleration = 0;
                }

                if (newY > 0) {
                    newY = 0;
                    this.keyAcceleration = 0;
                } else if (newY < this.maxScrollY) {
                    newY = this.maxScrollY;
                    this.keyAcceleration = 0;
                }

                this.scrollTo(newX, newY, 0);

                this.keyTime = now;
            },

            _animate: function(destX, destY, duration, easingFn) {
                var that = this,
                    startX = this.x,
                    startY = this.y,
                    startTime = utils.getTime(),
                    destTime = startTime + duration;

                function step() {
                    var now = utils.getTime(),
                        newX, newY,
                        easing;

                    if (now >= destTime) {
                        that.isAnimating = false;
                        that._translate(destX, destY);

                        if (!that.resetPosition(that.options.bounceTime)) {
                            that._execEvent('scrollEnd');
                        }

                        return;
                    }

                    now = (now - startTime) / duration;
                    easing = easingFn(now);
                    newX = (destX - startX) * easing + startX;
                    newY = (destY - startY) * easing + startY;
                    that._translate(newX, newY);

                    if (that.isAnimating) {
                        rAF(step);
                    }
                }

                this.isAnimating = true;
                step();
            },
            handleEvent: function(e) {
                switch (e.type) {
                    case 'touchstart':
                    case 'pointerdown':
                    case 'MSPointerDown':
                    case 'mousedown':
                        this._start(e);

                        if (this.options.zoom && e.touches && e.touches.length > 1) {
                            this._zoomStart(e);
                        }
                        break;
                    case 'touchmove':
                    case 'pointermove':
                    case 'MSPointerMove':
                    case 'mousemove':
                        if (this.options.zoom && e.touches && e.touches[1]) {
                            this._zoom(e);
                            return;
                        }
                        this._move(e);
                        break;
                    case 'touchend':
                    case 'pointerup':
                    case 'MSPointerUp':
                    case 'mouseup':
                    case 'touchcancel':
                    case 'pointercancel':
                    case 'MSPointerCancel':
                    case 'mousecancel':
                        if (this.scaled) {
                            this._zoomEnd(e);
                            return;
                        }
                        this._end(e);
                        break;
                    case 'orientationchange':
                    case 'resize':
                        this._resize();
                        break;
                    case 'transitionend':
                    case 'webkitTransitionEnd':
                    case 'oTransitionEnd':
                    case 'MSTransitionEnd':
                        this._transitionEnd(e);
                        break;
                    case 'wheel':
                    case 'DOMMouseScroll':
                    case 'mousewheel':
                        if (this.options.wheelAction == 'zoom') {
                            this._wheelZoom(e);
                            return;
                        }
                        this._wheel(e);
                        break;
                    case 'keydown':
                        this._key(e);
                        break;
                }
            }

        };

        function createDefaultScrollbar(direction, interactive, type) {
            var scrollbar = document.createElement('div'),
                indicator = document.createElement('div');

            if (type === true) {
                scrollbar.style.cssText = 'position:absolute;z-index:9999';
                indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
            }

            indicator.className = 'iScrollIndicator';

            if (direction == 'h') {
                if (type === true) {
                    scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
                    indicator.style.height = '100%';
                }
                scrollbar.className = 'iScrollHorizontalScrollbar';
            } else {
                if (type === true) {
                    scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
                    indicator.style.width = '100%';
                }
                scrollbar.className = 'iScrollVerticalScrollbar';
            }

            scrollbar.style.cssText += ';overflow:hidden';

            if (!interactive) {
                scrollbar.style.pointerEvents = 'none';
            }

            scrollbar.appendChild(indicator);

            return scrollbar;
        }

        function Indicator(scroller, options) {
            this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
            this.wrapperStyle = this.wrapper.style;
            this.indicator = this.wrapper.children[0];
            this.indicatorStyle = this.indicator.style;
            this.scroller = scroller;

            this.options = {
                listenX: true,
                listenY: true,
                interactive: false,
                resize: true,
                defaultScrollbars: false,
                shrink: false,
                fade: false,
                speedRatioX: 0,
                speedRatioY: 0
            };

            for (var i in options) {
                this.options[i] = options[i];
            }

            this.sizeRatioX = 1;
            this.sizeRatioY = 1;
            this.maxPosX = 0;
            this.maxPosY = 0;

            if (this.options.interactive) {
                if (!this.options.disableTouch) {
                    utils.addEvent(this.indicator, 'touchstart', this);
                    utils.addEvent(window, 'touchend', this);
                }
                if (!this.options.disablePointer) {
                    utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
                    utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
                }
                if (!this.options.disableMouse) {
                    utils.addEvent(this.indicator, 'mousedown', this);
                    utils.addEvent(window, 'mouseup', this);
                }
            }

            if (this.options.fade) {
                this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
                this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
                this.wrapperStyle.opacity = '0';
            }
        }

        Indicator.prototype = {
            handleEvent: function(e) {
                switch (e.type) {
                    case 'touchstart':
                    case 'pointerdown':
                    case 'MSPointerDown':
                    case 'mousedown':
                        this._start(e);
                        break;
                    case 'touchmove':
                    case 'pointermove':
                    case 'MSPointerMove':
                    case 'mousemove':
                        this._move(e);
                        break;
                    case 'touchend':
                    case 'pointerup':
                    case 'MSPointerUp':
                    case 'mouseup':
                    case 'touchcancel':
                    case 'pointercancel':
                    case 'MSPointerCancel':
                    case 'mousecancel':
                        this._end(e);
                        break;
                }
            },

            destroy: function() {
                if (this.options.interactive) {
                    utils.removeEvent(this.indicator, 'touchstart', this);
                    utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
                    utils.removeEvent(this.indicator, 'mousedown', this);

                    utils.removeEvent(window, 'touchmove', this);
                    utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
                    utils.removeEvent(window, 'mousemove', this);

                    utils.removeEvent(window, 'touchend', this);
                    utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
                    utils.removeEvent(window, 'mouseup', this);
                }

                if (this.options.defaultScrollbars) {
                    this.wrapper.parentNode.removeChild(this.wrapper);
                }
            },

            _start: function(e) {
                var point = e.touches ? e.touches[0] : e;

                e.preventDefault();
                e.stopPropagation();

                this.transitionTime();

                this.initiated = true;
                this.moved = false;
                this.lastPointX = point.pageX;
                this.lastPointY = point.pageY;

                this.startTime = utils.getTime();

                if (!this.options.disableTouch) {
                    utils.addEvent(window, 'touchmove', this);
                }
                if (!this.options.disablePointer) {
                    utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
                }
                if (!this.options.disableMouse) {
                    utils.addEvent(window, 'mousemove', this);
                }

                this.scroller._execEvent('beforeScrollStart');
            },

            _move: function(e) {
                var point = e.touches ? e.touches[0] : e,
                    deltaX, deltaY,
                    newX, newY,
                    timestamp = utils.getTime();

                if (!this.moved) {
                    this.scroller._execEvent('scrollStart');
                }

                this.moved = true;

                deltaX = point.pageX - this.lastPointX;
                this.lastPointX = point.pageX;

                deltaY = point.pageY - this.lastPointY;
                this.lastPointY = point.pageY;

                newX = this.x + deltaX;
                newY = this.y + deltaY;

                this._pos(newX, newY);

                // INSERT POINT: indicator._move

                e.preventDefault();
                e.stopPropagation();
            },

            _end: function(e) {
                if (!this.initiated) {
                    return;
                }

                this.initiated = false;

                e.preventDefault();
                e.stopPropagation();

                utils.removeEvent(window, 'touchmove', this);
                utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
                utils.removeEvent(window, 'mousemove', this);

                if (this.scroller.options.snap) {
                    var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

                    var time = this.options.snapSpeed || Math.max(
                        Math.max(
                            Math.min(Math.abs(this.scroller.x - snap.x), 1000),
                            Math.min(Math.abs(this.scroller.y - snap.y), 1000)
                        ), 300);

                    if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
                        this.scroller.directionX = 0;
                        this.scroller.directionY = 0;
                        this.scroller.currentPage = snap;
                        this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
                    }
                }

                if (this.moved) {
                    this.scroller._execEvent('scrollEnd');
                }
            },

            transitionTime: function(time) {
                time = time || 0;
                this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';

                if (!time && utils.isBadAndroid) {
                    this.indicatorStyle[utils.style.transitionDuration] = '0.001s';
                }
            },

            transitionTimingFunction: function(easing) {
                this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
            },

            refresh: function() {
                this.transitionTime();

                if (this.options.listenX && !this.options.listenY) {
                    this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
                } else if (this.options.listenY && !this.options.listenX) {
                    this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
                } else {
                    this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
                }

                if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
                    utils.addClass(this.wrapper, 'iScrollBothScrollbars');
                    utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

                    if (this.options.defaultScrollbars && this.options.customStyle) {
                        if (this.options.listenX) {
                            this.wrapper.style.right = '8px';
                        } else {
                            this.wrapper.style.bottom = '8px';
                        }
                    }
                } else {
                    utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
                    utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

                    if (this.options.defaultScrollbars && this.options.customStyle) {
                        if (this.options.listenX) {
                            this.wrapper.style.right = '2px';
                        } else {
                            this.wrapper.style.bottom = '2px';
                        }
                    }
                }

                var r = this.wrapper.offsetHeight; // force refresh

                if (this.options.listenX) {
                    this.wrapperWidth = this.wrapper.clientWidth;
                    if (this.options.resize) {
                        this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                        this.indicatorStyle.width = this.indicatorWidth + 'px';
                    } else {
                        this.indicatorWidth = this.indicator.clientWidth;
                    }

                    this.maxPosX = this.wrapperWidth - this.indicatorWidth;

                    if (this.options.shrink == 'clip') {
                        this.minBoundaryX = -this.indicatorWidth + 8;
                        this.maxBoundaryX = this.wrapperWidth - 8;
                    } else {
                        this.minBoundaryX = 0;
                        this.maxBoundaryX = this.maxPosX;
                    }

                    this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
                }

                if (this.options.listenY) {
                    this.wrapperHeight = this.wrapper.clientHeight;
                    if (this.options.resize) {
                        this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                        this.indicatorStyle.height = this.indicatorHeight + 'px';
                    } else {
                        this.indicatorHeight = this.indicator.clientHeight;
                    }

                    this.maxPosY = this.wrapperHeight - this.indicatorHeight;

                    if (this.options.shrink == 'clip') {
                        this.minBoundaryY = -this.indicatorHeight + 8;
                        this.maxBoundaryY = this.wrapperHeight - 8;
                    } else {
                        this.minBoundaryY = 0;
                        this.maxBoundaryY = this.maxPosY;
                    }

                    this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                    this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
                }

                this.updatePosition();
            },

            updatePosition: function() {
                var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
                    y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

                if (!this.options.ignoreBoundaries) {
                    if (x < this.minBoundaryX) {
                        if (this.options.shrink == 'scale') {
                            this.width = Math.max(this.indicatorWidth + x, 8);
                            this.indicatorStyle.width = this.width + 'px';
                        }
                        x = this.minBoundaryX;
                    } else if (x > this.maxBoundaryX) {
                        if (this.options.shrink == 'scale') {
                            this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
                            this.indicatorStyle.width = this.width + 'px';
                            x = this.maxPosX + this.indicatorWidth - this.width;
                        } else {
                            x = this.maxBoundaryX;
                        }
                    } else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
                        this.width = this.indicatorWidth;
                        this.indicatorStyle.width = this.width + 'px';
                    }

                    if (y < this.minBoundaryY) {
                        if (this.options.shrink == 'scale') {
                            this.height = Math.max(this.indicatorHeight + y * 3, 8);
                            this.indicatorStyle.height = this.height + 'px';
                        }
                        y = this.minBoundaryY;
                    } else if (y > this.maxBoundaryY) {
                        if (this.options.shrink == 'scale') {
                            this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
                            this.indicatorStyle.height = this.height + 'px';
                            y = this.maxPosY + this.indicatorHeight - this.height;
                        } else {
                            y = this.maxBoundaryY;
                        }
                    } else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
                        this.height = this.indicatorHeight;
                        this.indicatorStyle.height = this.height + 'px';
                    }
                }

                this.x = x;
                this.y = y;

                if (this.scroller.options.useTransform) {
                    this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
                } else {
                    this.indicatorStyle.left = x + 'px';
                    this.indicatorStyle.top = y + 'px';
                }
            },

            _pos: function(x, y) {
                if (x < 0) {
                    x = 0;
                } else if (x > this.maxPosX) {
                    x = this.maxPosX;
                }

                if (y < 0) {
                    y = 0;
                } else if (y > this.maxPosY) {
                    y = this.maxPosY;
                }

                x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
                y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

                this.scroller.scrollTo(x, y);
            },

            fade: function(val, hold) {
                if (hold && !this.visible) {
                    return;
                }

                clearTimeout(this.fadeTimeout);
                this.fadeTimeout = null;

                var time = val ? 250 : 500,
                    delay = val ? 0 : 300;

                val = val ? '1' : '0';

                this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

                this.fadeTimeout = setTimeout((function(val) {
                    this.wrapperStyle.opacity = val;
                    this.visible = +val;
                }).bind(this, val), delay);
            }
        };

        IScroll.utils = utils;

        if (typeof module != 'undefined' && module.exports) {
            module.exports = IScroll;
        } else {
            window.IScroll = IScroll;
        }

         FLIPBOOK.IScroll = IScroll;

    })(window, document, Math);
}

{ /* Detector */
    /**
     * @author alteredq / http://alteredqualia.com/
     * @author mr.doob / http://mrdoob.com/
     */

    var Detector = {

        canvas: !!window.CanvasRenderingContext2D,
        webgl: (function() {
            try {
                var canvas = document.createElement('canvas');
                return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
            } catch (e) {
                return false;
            }
        })(),
        workers: !!window.Worker,
        fileapi: window.File && window.FileReader && window.FileList && window.Blob,

        getWebGLErrorMessage: function() {

            var element = document.createElement('div');
            element.id = 'webgl-error-message';
            element.style.fontFamily = 'monospace';
            element.style.fontSize = '13px';
            element.style.fontWeight = 'normal';
            element.style.textAlign = 'center';
            element.style.background = '#fff';
            element.style.color = '#000';
            element.style.padding = '1.5em';
            element.style.width = '400px';
            element.style.margin = '5em auto 0';

            if (!this.webgl) {

                element.innerHTML = window.WebGLRenderingContext ? [
                    'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
                    'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
                ].join('\n') : [
                    'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
                    'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
                ].join('\n');

            }

            return element;

        },

        addGetWebGLMessage: function(parameters) {

            var parent, id, element;

            parameters = parameters || {};

            parent = parameters.parent !== undefined ? parameters.parent : document.body;
            id = parameters.id !== undefined ? parameters.id : 'oldie';

            element = Detector.getWebGLErrorMessage();
            element.id = id;

            parent.appendChild(element);

        }

    };

    // browserify support
    if (typeof module === 'object') {

        module.exports = Detector;

    }
}

{ /* screenfull.js */

    /*!
     * screenfull
     * v2.0.0 - 2014-12-22
     * (c) Sindre Sorhus; MIT License
     */
    ! function() {
        "use strict";
        var a = "undefined" != typeof module && module.exports,
            b = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
            c = function() {
                for (var a, b, c = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], d = 0, e = c.length, f = {}; e > d; d++)
                    if (a = c[d], a && a[1] in document) {
                        for (d = 0, b = a.length; b > d; d++) f[c[0][d]] = a[d];
                        return f
                    }
                return !1
            }(),
            d = {
                request: function(a) {
                    var d = c.requestFullscreen;
                    a = a || document.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? a[d]() : a[d](b && Element.ALLOW_KEYBOARD_INPUT)
                },
                exit: function() {
                    document[c.exitFullscreen]()
                },
                toggle: function(a) {
                    this.isFullscreen ? this.exit() : this.request(a)
                },
                raw: c
            };
        return c ? (Object.defineProperties(d, {
            isFullscreen: {
                get: function() {
                    return !!document[c.fullscreenElement]
                }
            },
            element: {
                enumerable: !0,
                get: function() {
                    return document[c.fullscreenElement]
                }
            },
            enabled: {
                enumerable: !0,
                get: function() {
                    return !!document[c.fullscreenEnabled]
                }
            }
        }), void(a ? module.exports = d : window.screenfull = d)) : void(a ? module.exports = !1 : window.screenfull = !1)
    }();

}

{ /* TWEEN */
    // tween.js r5 - http://github.com/sole/tween.js



    // tween.js v.0.15.0 https://github.com/sole/tween.js

    //void 0===Date.now&&(Date.now=function(){return(new Date).valueOf()});var TWEEN=TWEEN||function(){var n=[];return{REVISION:"14",getAll:function(){return n},removeAll:function(){n=[]},add:function(t){n.push(t)},remove:function(t){var r=n.indexOf(t);-1!==r&&n.splice(r,1)},update:function(t){if(0===n.length)return!1;var r=0;for(t=void 0!==t?t:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?window.performance.now():Date.now();r<n.length;)n[r].update(t)?r++:n.splice(r,1);return!0}}}();TWEEN.Tween=function(n){var t=n,r={},i={},u={},o=1e3,e=0,a=!1,f=!1,c=!1,s=0,h=null,l=TWEEN.Easing.Linear.None,p=TWEEN.Interpolation.Linear,E=[],d=null,v=!1,I=null,w=null,M=null;for(var O in n)r[O]=parseFloat(n[O],10);this.to=function(n,t){return void 0!==t&&(o=t),i=n,this},this.start=function(n){TWEEN.add(this),f=!0,v=!1,h=void 0!==n?n:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?window.performance.now():Date.now(),h+=s;for(var o in i){if(i[o]instanceof Array){if(0===i[o].length)continue;i[o]=[t[o]].concat(i[o])}r[o]=t[o],r[o]instanceof Array==!1&&(r[o]*=1),u[o]=r[o]||0}return this},this.stop=function(){return f?(TWEEN.remove(this),f=!1,null!==M&&M.call(t),this.stopChainedTweens(),this):this},this.stopChainedTweens=function(){for(var n=0,t=E.length;t>n;n++)E[n].stop()},this.delay=function(n){return s=n,this},this.repeat=function(n){return e=n,this},this.yoyo=function(n){return a=n,this},this.easing=function(n){return l=n,this},this.interpolation=function(n){return p=n,this},this.chain=function(){return E=arguments,this},this.onStart=function(n){return d=n,this},this.onUpdate=function(n){return I=n,this},this.onComplete=function(n){return w=n,this},this.onStop=function(n){return M=n,this},this.update=function(n){var f;if(h>n)return!0;v===!1&&(null!==d&&d.call(t),v=!0);var M=(n-h)/o;M=M>1?1:M;var O=l(M);for(f in i){var m=r[f]||0,N=i[f];N instanceof Array?t[f]=p(N,O):("string"==typeof N&&(N=m+parseFloat(N,10)),"number"==typeof N&&(t[f]=m+(N-m)*O))}if(null!==I&&I.call(t,O),1==M){if(e>0){isFinite(e)&&e--;for(f in u){if("string"==typeof i[f]&&(u[f]=u[f]+parseFloat(i[f],10)),a){var T=u[f];u[f]=i[f],i[f]=T}r[f]=u[f]}return a&&(c=!c),h=n+s,!0}null!==w&&w.call(t);for(var g=0,W=E.length;W>g;g++)E[g].start(n);return!1}return!0}},TWEEN.Easing={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return.5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return 0===n?0:Math.pow(1024,n-1)},Out:function(n){return 1===n?1:1-Math.pow(2,-10*n)},InOut:function(n){return 0===n?0:1===n?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){var t,r=.1,i=.4;return 0===n?0:1===n?1:(!r||1>r?(r=1,t=i/4):t=i*Math.asin(1/r)/(2*Math.PI),-(r*Math.pow(2,10*(n-=1))*Math.sin(2*(n-t)*Math.PI/i)))},Out:function(n){var t,r=.1,i=.4;return 0===n?0:1===n?1:(!r||1>r?(r=1,t=i/4):t=i*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*n)*Math.sin(2*(n-t)*Math.PI/i)+1)},InOut:function(n){var t,r=.1,i=.4;return 0===n?0:1===n?1:(!r||1>r?(r=1,t=i/4):t=i*Math.asin(1/r)/(2*Math.PI),(n*=2)<1?-.5*r*Math.pow(2,10*(n-=1))*Math.sin(2*(n-t)*Math.PI/i):r*Math.pow(2,-10*(n-=1))*Math.sin(2*(n-t)*Math.PI/i)*.5+1)}},Back:{In:function(n){var t=1.70158;return n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?.5*n*n*((t+1)*n-t):.5*((n-=2)*n*((t+1)*n+t)+2)}},Bounce:{In:function(n){return 1-TWEEN.Easing.Bounce.Out(1-n)},Out:function(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return.5>n?.5*TWEEN.Easing.Bounce.In(2*n):.5*TWEEN.Easing.Bounce.Out(2*n-1)+.5}}},TWEEN.Interpolation={Linear:function(n,t){var r=n.length-1,i=r*t,u=Math.floor(i),o=TWEEN.Interpolation.Utils.Linear;return 0>t?o(n[0],n[1],i):t>1?o(n[r],n[r-1],r-i):o(n[u],n[u+1>r?r:u+1],i-u)},Bezier:function(n,t){var r,i=0,u=n.length-1,o=Math.pow,e=TWEEN.Interpolation.Utils.Bernstein;for(r=0;u>=r;r++)i+=o(1-t,u-r)*o(t,r)*n[r]*e(u,r);return i},CatmullRom:function(n,t){var r=n.length-1,i=r*t,u=Math.floor(i),o=TWEEN.Interpolation.Utils.CatmullRom;return n[0]===n[r]?(0>t&&(u=Math.floor(i=r*(1+t))),o(n[(u-1+r)%r],n[u],n[(u+1)%r],n[(u+2)%r],i-u)):0>t?n[0]-(o(n[0],n[0],n[1],n[1],-i)-n[0]):t>1?n[r]-(o(n[r],n[r],n[r-1],n[r-1],i-r)-n[r]):o(n[u?u-1:0],n[u],n[u+1>r?r:u+1],n[u+2>r?r:u+2],i-u)},Utils:{Linear:function(n,t,r){return(t-n)*r+n},Bernstein:function(n,t){var r=TWEEN.Interpolation.Utils.Factorial;return r(n)/r(t)/r(n-t)},Factorial:function(){var n=[1];return function(t){var r,i=1;if(n[t])return n[t];for(r=t;r>1;r--)i*=r;return n[t]=i}}(),CatmullRom:function(n,t,r,i,u){var o=.5*(r-n),e=.5*(i-t),a=u*u,f=u*a;return(2*t-2*r+o+e)*f+(-3*t+3*r-2*o-e)*a+o*u+t}}},"undefined"!=typeof module&&module.exports&&(module.exports=TWEEN);


    /*



var TWEEN=TWEEN||function(){var a,e,c=60,b=false,h=[];return{setFPS:function(f){c=f||60},start:function(f){arguments.length!=0&&this.setFPS(f);e=setInterval(this.update,1E3/c)},stop:function(){clearInterval(e)},setAutostart:function(f){(b=f)&&!e&&this.start()},add:function(f){h.push(f);b&&!e&&this.start()},getAll:function(){return h},removeAll:function(){h=[]},remove:function(f){a=h.indexOf(f);a!==-1&&h.splice(a,1)},update:function(f){a=0;num_tweens=h.length;for(f=f||Date.now();a<num_tweens;)if(h[a].update(f))a++;
else{h.splice(a,1);num_tweens--}num_tweens==0&&b==true&&this.stop()}}}();
TWEEN.Tween=function(a){var e={},c={},b={},h=1E3,f=0,j=null,n=TWEEN.Easing.Linear.EaseNone,k=null,l=null,m=null;this.to=function(d,g){if(g!==null)h=g;for(var i in d)if(a[i]!==null)b[i]=d[i];return this};this.start=function(d){TWEEN.add(this);j=d?d+f:Date.now()+f;for(var g in b)if(a[g]!==null){e[g]=a[g];c[g]=b[g]-a[g]}return this};this.stop=function(){TWEEN.remove(this);return this};this.delay=function(d){f=d;return this};this.easing=function(d){n=d;return this};this.chain=function(d){k=d};this.onUpdate=
function(d){l=d;return this};this.onComplete=function(d){m=d;return this};this.update=function(d){var g,i;if(d<j)return true;d=(d-j)/h;d=d>1?1:d;i=n(d);for(g in c)a[g]=e[g]+c[g]*i;l!==null&&l.call(a,i);if(d==1){m!==null&&m.call(a);k!==null&&k.start();return false}return true}};TWEEN.Easing={Linear:{},Quadratic:{},Cubic:{},Quartic:{},Quintic:{},Sinusoidal:{},Exponential:{},Circular:{},Elastic:{},Back:{},Bounce:{}};TWEEN.Easing.Linear.EaseNone=function(a){return a};
TWEEN.Easing.Quadratic.EaseIn=function(a){return a*a};TWEEN.Easing.Quadratic.EaseOut=function(a){return-a*(a-2)};TWEEN.Easing.Quadratic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a;return-0.5*(--a*(a-2)-1)};TWEEN.Easing.Cubic.EaseIn=function(a){return a*a*a};TWEEN.Easing.Cubic.EaseOut=function(a){return--a*a*a+1};TWEEN.Easing.Cubic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a;return 0.5*((a-=2)*a*a+2)};TWEEN.Easing.Quartic.EaseIn=function(a){return a*a*a*a};
TWEEN.Easing.Quartic.EaseOut=function(a){return-(--a*a*a*a-1)};TWEEN.Easing.Quartic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a*a;return-0.5*((a-=2)*a*a*a-2)};TWEEN.Easing.Quintic.EaseIn=function(a){return a*a*a*a*a};TWEEN.Easing.Quintic.EaseOut=function(a){return(a-=1)*a*a*a*a+1};TWEEN.Easing.Quintic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a*a*a;return 0.5*((a-=2)*a*a*a*a+2)};TWEEN.Easing.Sinusoidal.EaseIn=function(a){return-Math.cos(a*Math.PI/2)+1};
TWEEN.Easing.Sinusoidal.EaseOut=function(a){return Math.sin(a*Math.PI/2)};TWEEN.Easing.Sinusoidal.EaseInOut=function(a){return-0.5*(Math.cos(Math.PI*a)-1)};TWEEN.Easing.Exponential.EaseIn=function(a){return a==0?0:Math.pow(2,10*(a-1))};TWEEN.Easing.Exponential.EaseOut=function(a){return a==1?1:-Math.pow(2,-10*a)+1};TWEEN.Easing.Exponential.EaseInOut=function(a){if(a==0)return 0;if(a==1)return 1;if((a*=2)<1)return 0.5*Math.pow(2,10*(a-1));return 0.5*(-Math.pow(2,-10*(a-1))+2)};
TWEEN.Easing.Circular.EaseIn=function(a){return-(Math.sqrt(1-a*a)-1)};TWEEN.Easing.Circular.EaseOut=function(a){return Math.sqrt(1- --a*a)};TWEEN.Easing.Circular.EaseInOut=function(a){if((a/=0.5)<1)return-0.5*(Math.sqrt(1-a*a)-1);return 0.5*(Math.sqrt(1-(a-=2)*a)+1)};TWEEN.Easing.Elastic.EaseIn=function(a){var e,c=0.1,b=0.4;if(a==0)return 0;if(a==1)return 1;b||(b=0.3);if(!c||c<1){c=1;e=b/4}else e=b/(2*Math.PI)*Math.asin(1/c);return-(c*Math.pow(2,10*(a-=1))*Math.sin((a-e)*2*Math.PI/b))};
TWEEN.Easing.Elastic.EaseOut=function(a){var e,c=0.1,b=0.4;if(a==0)return 0;if(a==1)return 1;b||(b=0.3);if(!c||c<1){c=1;e=b/4}else e=b/(2*Math.PI)*Math.asin(1/c);return c*Math.pow(2,-10*a)*Math.sin((a-e)*2*Math.PI/b)+1};
TWEEN.Easing.Elastic.EaseInOut=function(a){var e,c=0.1,b=0.4;if(a==0)return 0;if(a==1)return 1;b||(b=0.3);if(!c||c<1){c=1;e=b/4}else e=b/(2*Math.PI)*Math.asin(1/c);if((a*=2)<1)return-0.5*c*Math.pow(2,10*(a-=1))*Math.sin((a-e)*2*Math.PI/b);return c*Math.pow(2,-10*(a-=1))*Math.sin((a-e)*2*Math.PI/b)*0.5+1};TWEEN.Easing.Back.EaseIn=function(a){return a*a*(2.70158*a-1.70158)};TWEEN.Easing.Back.EaseOut=function(a){return(a-=1)*a*(2.70158*a+1.70158)+1};
TWEEN.Easing.Back.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*(3.5949095*a-2.5949095);return 0.5*((a-=2)*a*(3.5949095*a+2.5949095)+2)};TWEEN.Easing.Bounce.EaseIn=function(a){return 1-TWEEN.Easing.Bounce.EaseOut(1-a)};TWEEN.Easing.Bounce.EaseOut=function(a){return(a/=1)<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375};
TWEEN.Easing.Bounce.EaseInOut=function(a){if(a<0.5)return TWEEN.Easing.Bounce.EaseIn(a*2)*0.5;return TWEEN.Easing.Bounce.EaseOut(a*2-1)*0.5+0.5};
}*/


    /**
     * Tween.js - Licensed under the MIT license
     * https://github.com/sole/tween.js
     * ----------------------------------------------
     *
     * See https://github.com/sole/tween.js/graphs/contributors for the full list of contributors.
     * Thank you all, you're awesome!
     */

    // performance.now polyfill
    (function(root) {

        if ('performance' in root === false) {
            root.performance = {};
        }

        // IE 8
        Date.now = (Date.now || function() {
            return new Date().getTime();
        });

        if ('now' in root.performance === false) {
            var offset = root.performance.timing && root.performance.timing.navigationStart ? performance.timing.navigationStart : Date.now();

            root.performance.now = function() {
                return Date.now() - offset;
            };
        }

    })(this);

    var TWEEN = TWEEN || (function() {

        var _tweens = [];

        return {

            REVISION: '14',

            getAll: function() {

                return _tweens;

            },

            removeAll: function() {

                _tweens = [];

            },

            add: function(tween) {

                _tweens.push(tween);

            },

            remove: function(tween) {

                var i = _tweens.indexOf(tween);

                if (i !== -1) {

                    _tweens.splice(i, 1);

                }

            },

            update: function(time) {

                if (_tweens.length === 0) return false;

                var i = 0;

                time = time !== undefined ? time : window.performance.now();

                while (i < _tweens.length) {

                    if (_tweens[i].update(time)) {

                        i++;

                    } else {

                        _tweens.splice(i, 1);

                    }

                }

                return true;

            }
        };

    })();

    TWEEN.Tween = function(object) {

        var _object = object;
        var _valuesStart = {};
        var _valuesEnd = {};
        var _valuesStartRepeat = {};
        var _duration = 1000;
        var _repeat = 0;
        var _yoyo = false;
        var _isPlaying = false;
        var _reversed = false;
        var _delayTime = 0;
        var _startTime = null;
        var _easingFunction = TWEEN.Easing.Linear.None;
        var _interpolationFunction = TWEEN.Interpolation.Linear;
        var _chainedTweens = [];
        var _onStartCallback = null;
        var _onStartCallbackFired = false;
        var _onUpdateCallback = null;
        var _onCompleteCallback = null;
        var _onStopCallback = null;

        // Set all starting values present on the target object
        for (var field in object) {

            _valuesStart[field] = parseFloat(object[field], 10);

        }

        this.to = function(properties, duration) {

            if (duration !== undefined) {

                _duration = duration;

            }

            _valuesEnd = properties;

            return this;

        };

        this.start = function(time) {

            TWEEN.add(this);

            _isPlaying = true;

            _onStartCallbackFired = false;

            _startTime = time !== undefined ? time : window.performance.now();
            _startTime += _delayTime;

            for (var property in _valuesEnd) {

                // check if an Array was provided as property value
                if (_valuesEnd[property] instanceof Array) {

                    if (_valuesEnd[property].length === 0) {

                        continue;

                    }

                    // create a local copy of the Array with the start value at the front
                    _valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);

                }

                _valuesStart[property] = _object[property];

                if ((_valuesStart[property] instanceof Array) === false) {
                    _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
                }

                _valuesStartRepeat[property] = _valuesStart[property] || 0;

            }

            return this;

        };

        this.stop = function() {

            if (!_isPlaying) {
                return this;
            }

            TWEEN.remove(this);
            _isPlaying = false;

            if (_onStopCallback !== null) {

                _onStopCallback.call(_object);

            }

            this.stopChainedTweens();
            return this;

        };

        this.stopChainedTweens = function() {

            for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {

                _chainedTweens[i].stop();

            }

        };

        this.delay = function(amount) {

            _delayTime = amount;
            return this;

        };

        this.repeat = function(times) {

            _repeat = times;
            return this;

        };

        this.yoyo = function(yoyo) {

            _yoyo = yoyo;
            return this;

        };


        this.easing = function(easing) {

            _easingFunction = easing;
            return this;

        };

        this.interpolation = function(interpolation) {

            _interpolationFunction = interpolation;
            return this;

        };

        this.chain = function() {

            _chainedTweens = arguments;
            return this;

        };

        this.onStart = function(callback) {

            _onStartCallback = callback;
            return this;

        };

        this.onUpdate = function(callback) {

            _onUpdateCallback = callback;
            return this;

        };

        this.onComplete = function(callback) {

            _onCompleteCallback = callback;
            return this;

        };

        this.onStop = function(callback) {

            _onStopCallback = callback;
            return this;

        };

        this.update = function(time) {

            var property;

            if (time < _startTime) {

                return true;

            }

            if (_onStartCallbackFired === false) {

                if (_onStartCallback !== null) {

                    _onStartCallback.call(_object);

                }

                _onStartCallbackFired = true;

            }

            var elapsed = (time - _startTime) / _duration;
            elapsed = elapsed > 1 ? 1 : elapsed;

            var value = _easingFunction(elapsed);

            for (property in _valuesEnd) {

                var start = _valuesStart[property] || 0;
                var end = _valuesEnd[property];

                if (end instanceof Array) {

                    _object[property] = _interpolationFunction(end, value);

                } else {

                    // Parses relative end values with start as base (e.g.: +10, -3)
                    if (typeof(end) === "string") {
                        end = start + parseFloat(end, 10);
                    }

                    // protect against non numeric properties.
                    if (typeof(end) === "number") {
                        _object[property] = start + (end - start) * value;
                    }

                }

            }

            if (_onUpdateCallback !== null) {

                _onUpdateCallback.call(_object, value);

            }

            if (elapsed == 1) {

                if (_repeat > 0) {

                    if (isFinite(_repeat)) {
                        _repeat--;
                    }

                    // reassign starting values, restart by making startTime = now
                    for (property in _valuesStartRepeat) {

                        if (typeof(_valuesEnd[property]) === "string") {
                            _valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property], 10);
                        }

                        if (_yoyo) {
                            var tmp = _valuesStartRepeat[property];
                            _valuesStartRepeat[property] = _valuesEnd[property];
                            _valuesEnd[property] = tmp;
                        }

                        _valuesStart[property] = _valuesStartRepeat[property];

                    }

                    if (_yoyo) {
                        _reversed = !_reversed;
                    }

                    _startTime = time + _delayTime;

                    return true;

                } else {

                    if (_onCompleteCallback !== null) {

                        _onCompleteCallback.call(_object);

                    }

                    for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {

                        _chainedTweens[i].start(time);

                    }

                    return false;

                }

            }

            return true;

        };

    };


    TWEEN.Easing = {

        Linear: {

            None: function(k) {

                return k;

            }

        },

        Quadratic: {

            In: function(k) {

                return k * k;

            },

            Out: function(k) {

                return k * (2 - k);

            },

            InOut: function(k) {

                if ((k *= 2) < 1) return 0.5 * k * k;
                return -0.5 * (--k * (k - 2) - 1);

            }

        },

        Cubic: {

            In: function(k) {

                return k * k * k;

            },

            Out: function(k) {

                return --k * k * k + 1;

            },

            InOut: function(k) {

                if ((k *= 2) < 1) return 0.5 * k * k * k;
                return 0.5 * ((k -= 2) * k * k + 2);

            }

        },

        Quartic: {

            In: function(k) {

                return k * k * k * k;

            },

            Out: function(k) {

                return 1 - (--k * k * k * k);

            },

            InOut: function(k) {

                if ((k *= 2) < 1) return 0.5 * k * k * k * k;
                return -0.5 * ((k -= 2) * k * k * k - 2);

            }

        },

        Quintic: {

            In: function(k) {

                return k * k * k * k * k;

            },

            Out: function(k) {

                return --k * k * k * k * k + 1;

            },

            InOut: function(k) {

                if ((k *= 2) < 1) return 0.5 * k * k * k * k * k;
                return 0.5 * ((k -= 2) * k * k * k * k + 2);

            }

        },

        Sinusoidal: {

            In: function(k) {

                return 1 - Math.cos(k * Math.PI / 2);

            },

            Out: function(k) {

                return Math.sin(k * Math.PI / 2);

            },

            InOut: function(k) {

                return 0.5 * (1 - Math.cos(Math.PI * k));

            }

        },

        Exponential: {

            In: function(k) {

                return k === 0 ? 0 : Math.pow(1024, k - 1);

            },

            Out: function(k) {

                return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);

            },

            InOut: function(k) {

                if (k === 0) return 0;
                if (k === 1) return 1;
                if ((k *= 2) < 1) return 0.5 * Math.pow(1024, k - 1);
                return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);

            }

        },

        Circular: {

            In: function(k) {

                return 1 - Math.sqrt(1 - k * k);

            },

            Out: function(k) {

                return Math.sqrt(1 - (--k * k));

            },

            InOut: function(k) {

                if ((k *= 2) < 1) return -0.5 * (Math.sqrt(1 - k * k) - 1);
                return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

            }

        },

        Elastic: {

            In: function(k) {

                var s, a = 0.1,
                    p = 0.4;
                if (k === 0) return 0;
                if (k === 1) return 1;
                if (!a || a < 1) {
                    a = 1;
                    s = p / 4;
                } else s = p * Math.asin(1 / a) / (2 * Math.PI);
                return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));

            },

            Out: function(k) {

                var s, a = 0.1,
                    p = 0.4;
                if (k === 0) return 0;
                if (k === 1) return 1;
                if (!a || a < 1) {
                    a = 1;
                    s = p / 4;
                } else s = p * Math.asin(1 / a) / (2 * Math.PI);
                return (a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);

            },

            InOut: function(k) {

                var s, a = 0.1,
                    p = 0.4;
                if (k === 0) return 0;
                if (k === 1) return 1;
                if (!a || a < 1) {
                    a = 1;
                    s = p / 4;
                } else s = p * Math.asin(1 / a) / (2 * Math.PI);
                if ((k *= 2) < 1) return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
                return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;

            }

        },

        Back: {

            In: function(k) {

                var s = 1.70158;
                return k * k * ((s + 1) * k - s);

            },

            Out: function(k) {

                var s = 1.70158;
                return --k * k * ((s + 1) * k + s) + 1;

            },

            InOut: function(k) {

                var s = 1.70158 * 1.525;
                if ((k *= 2) < 1) return 0.5 * (k * k * ((s + 1) * k - s));
                return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

            }

        },

        Bounce: {

            In: function(k) {

                return 1 - TWEEN.Easing.Bounce.Out(1 - k);

            },

            Out: function(k) {

                if (k < (1 / 2.75)) {

                    return 7.5625 * k * k;

                } else if (k < (2 / 2.75)) {

                    return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;

                } else if (k < (2.5 / 2.75)) {

                    return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;

                } else {

                    return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;

                }

            },

            InOut: function(k) {

                if (k < 0.5) return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
                return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

            }

        }

    };

    TWEEN.Interpolation = {

        Linear: function(v, k) {

            var m = v.length - 1,
                f = m * k,
                i = Math.floor(f),
                fn = TWEEN.Interpolation.Utils.Linear;

            if (k < 0) return fn(v[0], v[1], f);
            if (k > 1) return fn(v[m], v[m - 1], m - f);

            return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

        },

        Bezier: function(v, k) {

            var b = 0,
                n = v.length - 1,
                pw = Math.pow,
                bn = TWEEN.Interpolation.Utils.Bernstein,
                i;

            for (i = 0; i <= n; i++) {
                b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
            }

            return b;

        },

        CatmullRom: function(v, k) {

            var m = v.length - 1,
                f = m * k,
                i = Math.floor(f),
                fn = TWEEN.Interpolation.Utils.CatmullRom;

            if (v[0] === v[m]) {

                if (k < 0) i = Math.floor(f = m * (1 + k));

                return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

            } else {

                if (k < 0) return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
                if (k > 1) return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);

                return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

            }

        },

        Utils: {

            Linear: function(p0, p1, t) {

                return (p1 - p0) * t + p0;

            },

            Bernstein: function(n, i) {

                var fc = TWEEN.Interpolation.Utils.Factorial;
                return fc(n) / fc(i) / fc(n - i);

            },

            Factorial: (function() {

                var a = [1];

                return function(n) {

                    var s = 1,
                        i;
                    if (a[n]) return a[n];
                    for (i = n; i > 1; i--) s *= i;
                    return a[n] = s;

                };

            })(),

            CatmullRom: function(p0, p1, p2, p3, t) {

                var v0 = (p2 - p0) * 0.5,
                    v1 = (p3 - p1) * 0.5,
                    t2 = t * t,
                    t3 = t * t2;
                return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

            }

        }

    };

    // UMD (Universal Module Definition)
    /*( function ( root ) {

	if ( typeof define === 'function' && define.amd ) {

		// AMD
		define( [], function () {
			return TWEEN;
		} );

	} else if ( typeof exports === 'object' ) {

		// Node.js
		module.exports = TWEEN;

	} else {

		// Global variable
		root.TWEEN = TWEEN;

	}

} )( this );*/



}

{ /*jQuery.browser.mobile*/
    /**
     * jQuery.browser.mobile (http://detectmobilebrowser.com/)
     *
     * jQuery.browser.mobile will be true if the browser is a mobile device
     *
     **/
    (function(a) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    })(navigator.userAgent || navigator.vendor || window.opera);
}


FLIPBOOK.getFlipbookSrc = function() {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
        var src = String(scripts[i].src)
        if (src.match("flipbook.js") || src.match("flipbook.min.js"))
            return src
    }
}

FLIPBOOK.flipbookSrc = FLIPBOOK.getFlipbookSrc()

FLIPBOOK.threejsSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/three66.');
FLIPBOOK.flipbookWebGlSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/flipbook.webgl.');
FLIPBOOK.pdfjsSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/pdf.');
FLIPBOOK.compatibilityjsSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/compatibility.');
FLIPBOOK.pdfjsworkerSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/pdf.worker.');
FLIPBOOK.touchSwipeSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/jquery.touchSwipe.');
FLIPBOOK.shareSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/share.');

FLIPBOOK.scriptsLoaded = {};


/**
 * Code extracted from pdf.js' viewer.js file. This contains code that is relevant to building the text overlays. I
 * have removed dependencies on viewer.js and viewer.html.
 *
 *   -- Vivin Suresh Paliath (http://vivin.net)
 */

var CustomStyle = (function CustomStyleClosure() {

    // As noted on: http://www.zachstronaut.com/posts/2009/02/17/
    //              animate-css-transforms-firefox-webkit.html
    // in some versions of IE9 it is critical that ms appear in this list
    // before Moz
    var prefixes = ['ms', 'Moz', 'Webkit', 'O'];
    var _cache = {};

    function CustomStyle() {}

    CustomStyle.getProp = function get(propName, element) {
        // check cache only when no element is given
        if (arguments.length == 1 && typeof _cache[propName] == 'string') {
            return _cache[propName];
        }

        element = element || document.documentElement;
        var style = element.style,
            prefixed, uPropName;

        // test standard property first
        if (typeof style[propName] == 'string') {
            return (_cache[propName] = propName);
        }

        // capitalize
        uPropName = propName.charAt(0).toUpperCase() + propName.slice(1);

        // test vendor specific properties
        for (var i = 0, l = prefixes.length; i < l; i++) {
            prefixed = prefixes[i] + uPropName;
            if (typeof style[prefixed] == 'string') {
                return (_cache[propName] = prefixed);
            }
        }

        //if all fails then set to undefined
        return (_cache[propName] = 'undefined');
    };

    CustomStyle.setProp = function set(propName, element, str) {
        var prop = this.getProp(propName);
        if (prop != 'undefined')
            element.style[prop] = str;
    };

    return CustomStyle;
})();



var TEXT_LAYER_RENDER_DELAY = 200; // ms

var MAX_TEXT_DIVS_TO_RENDER = 100000;

var NonWhitespaceRegexp = /\S/;

function isAllWhitespace(str) {
    return !NonWhitespaceRegexp.test(str);
}


/**
 * @typedef {Object} TextLayerBuilderOptions
 * @property {HTMLDivElement} textLayerDiv - The text layer container.
 * @property {number} pageIndex - The page index.
 * @property {PageViewport} viewport - The viewport of the text layer.
 * @property {PDFFindController} findController
 */

/**
 * TextLayerBuilder provides text-selection functionality for the PDF.
 * It does this by creating overlay divs over the PDF text. These divs
 * contain text that matches the PDF text they are overlaying. This object
 * also provides a way to highlight text that is being searched for.
 * @class
 */
var TextLayerBuilder = (function TextLayerBuilderClosure() {
    function TextLayerBuilder(options) {
        this.textLayerDiv = options.textLayerDiv;
        this.renderingDone = false;
        this.divContentDone = false;
        this.pageIdx = options.pageIndex;
        this.pageNumber = this.pageIdx + 1;
        this.matches = [];
        this.viewport = options.viewport;
        this.textDivs = [];
        this.findController = options.findController || null;
    }

    TextLayerBuilder.prototype = {
        _finishRendering: function TextLayerBuilder_finishRendering() {
            this.renderingDone = true;

            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('textlayerrendered', true, true, {
                pageNumber: this.pageNumber
            });
            this.textLayerDiv.dispatchEvent(event);
        },

        renderLayer: function TextLayerBuilder_renderLayer() {
            var textLayerFrag = document.createDocumentFragment();
            var textDivs = this.textDivs;
            var textDivsLength = textDivs.length;
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');

            // No point in rendering many divs as it would make the browser
            // unusable even after the divs are rendered.
            if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
                this._finishRendering();
                return;
            }

            var lastFontSize;
            var lastFontFamily;
            for (var i = 0; i < textDivsLength; i++) {
                var textDiv = textDivs[i];
                if (textDiv.dataset.isWhitespace !== undefined) {
                    continue;
                }

                var fontSize = textDiv.style.fontSize;
                var fontFamily = textDiv.style.fontFamily;

                // Only build font string and set to context if different from last.
                if (fontSize !== lastFontSize || fontFamily !== lastFontFamily) {
                    ctx.font = fontSize + ' ' + fontFamily;
                    lastFontSize = fontSize;
                    lastFontFamily = fontFamily;
                }

                var width = ctx.measureText(textDiv.textContent).width;
                if (width > 0) {
                    textLayerFrag.appendChild(textDiv);
                    var transform;
                    if (textDiv.dataset.canvasWidth !== undefined) {
                        // Dataset values come of type string.
                        var textScale = textDiv.dataset.canvasWidth / width;
                        transform = 'scaleX(' + textScale + ')';
                    } else {
                        transform = '';
                    }
                    var rotation = textDiv.dataset.angle;
                    if (rotation) {
                        transform = 'rotate(' + rotation + 'deg) ' + transform;
                    }
                    if (transform) {
                        CustomStyle.setProp('transform', textDiv, transform);
                    }
                }
            }

            this.textLayerDiv.appendChild(textLayerFrag);
            this._finishRendering();
            this.updateMatches();
        },

        /**
         * Renders the text layer.
         * @param {number} timeout (optional) if specified, the rendering waits
         *   for specified amount of ms.
         */
        render: function TextLayerBuilder_render(timeout) {
            if (!this.divContentDone || this.renderingDone) {
                return;
            }

            if (this.renderTimer) {
                clearTimeout(this.renderTimer);
                this.renderTimer = null;
            }

            if (!timeout) { // Render right away
                this.renderLayer();
            } else { // Schedule
                var self = this;
                this.renderTimer = setTimeout(function() {
                    self.renderLayer();
                    self.renderTimer = null;
                }, timeout);
            }
        },

        appendText: function TextLayerBuilder_appendText(geom, styles) {
            var style = styles[geom.fontName];
            var textDiv = document.createElement('div');
            this.textDivs.push(textDiv);
            if (isAllWhitespace(geom.str)) {
                textDiv.dataset.isWhitespace = true;
                return;
            }
            var tx = PDFJS.Util.transform(this.viewport.transform, geom.transform);
            var angle = Math.atan2(tx[1], tx[0]);
            if (style.vertical) {
                angle += Math.PI / 2;
            }
            var fontHeight = Math.sqrt((tx[2] * tx[2]) + (tx[3] * tx[3]));
            var fontAscent = fontHeight;
            if (style.ascent) {
                fontAscent = style.ascent * fontAscent;
            } else if (style.descent) {
                fontAscent = (1 + style.descent) * fontAscent;
            }

            var left;
            var top;
            if (angle === 0) {
                left = tx[4];
                top = tx[5] - fontAscent;
            } else {
                left = tx[4] + (fontAscent * Math.sin(angle));
                top = tx[5] - (fontAscent * Math.cos(angle));
            }
            textDiv.style.left = left + 'px';
            textDiv.style.top = top + 'px';
            textDiv.style.fontSize = fontHeight + 'px';
            textDiv.style.fontFamily = style.fontFamily;

            textDiv.textContent = geom.str;
            // |fontName| is only used by the Font Inspector. This test will succeed
            // when e.g. the Font Inspector is off but the Stepper is on, but it's
            // not worth the effort to do a more accurate test.
            if (PDFJS.pdfBug) {
                textDiv.dataset.fontName = geom.fontName;
            }
            // Storing into dataset will convert number into string.
            if (angle !== 0) {
                textDiv.dataset.angle = angle * (180 / Math.PI);
            }
            // We don't bother scaling single-char text divs, because it has very
            // little effect on text highlighting. This makes scrolling on docs with
            // lots of such divs a lot faster.
            if (geom.str.length > 1) {
                if (style.vertical) {
                    textDiv.dataset.canvasWidth = geom.height * this.viewport.scale;
                } else {
                    textDiv.dataset.canvasWidth = geom.width * this.viewport.scale;
                }
            }
        },

        setTextContent: function TextLayerBuilder_setTextContent(textContent) {
            this.textContent = textContent;

            var textItems = textContent.items;
            for (var i = 0, len = textItems.length; i < len; i++) {
                this.appendText(textItems[i], textContent.styles);
            }
            this.divContentDone = true;
        },

        convertMatches: function TextLayerBuilder_convertMatches(matches) {
            var i = 0;
            var iIndex = 0;
            var bidiTexts = this.textContent.items;
            var end = bidiTexts.length - 1;
            var queryLen = (this.findController === null ?
                0 : this.findController.state.query.length);
            var ret = [];

            for (var m = 0, len = matches.length; m < len; m++) {
                // Calculate the start position.
                var matchIdx = matches[m];

                // Loop over the divIdxs.
                while (i !== end && matchIdx >= (iIndex + bidiTexts[i].str.length)) {
                    iIndex += bidiTexts[i].str.length;
                    i++;
                }

                if (i === bidiTexts.length) {
                    console.error('Could not find a matching mapping');
                }

                var match = {
                    begin: {
                        divIdx: i,
                        offset: matchIdx - iIndex
                    }
                };

                // Calculate the end position.
                matchIdx += queryLen;

                // Somewhat the same array as above, but use > instead of >= to get
                // the end position right.
                while (i !== end && matchIdx > (iIndex + bidiTexts[i].str.length)) {
                    iIndex += bidiTexts[i].str.length;
                    i++;
                }

                match.end = {
                    divIdx: i,
                    offset: matchIdx - iIndex
                };
                ret.push(match);
            }

            return ret;
        },

        renderMatches: function TextLayerBuilder_renderMatches(matches) {
            // Early exit if there is nothing to render.
            if (matches.length === 0) {
                return;
            }

            var bidiTexts = this.textContent.items;
            var textDivs = this.textDivs;
            var prevEnd = null;
            var pageIdx = this.pageIdx;
            var isSelectedPage = (this.findController === null ?
                false : (pageIdx === this.findController.selected.pageIdx));
            var selectedMatchIdx = (this.findController === null ?
                -1 : this.findController.selected.matchIdx);
            var highlightAll = (this.findController === null ?
                false : this.findController.state.highlightAll);
            var infinity = {
                divIdx: -1,
                offset: undefined
            };

            function beginText(begin, className) {
                var divIdx = begin.divIdx;
                textDivs[divIdx].textContent = '';
                appendTextToDiv(divIdx, 0, begin.offset, className);
            }

            function appendTextToDiv(divIdx, fromOffset, toOffset, className) {
                var div = textDivs[divIdx];
                var content = bidiTexts[divIdx].str.substring(fromOffset, toOffset);
                var node = document.createTextNode(content);
                if (className) {
                    var span = document.createElement('span');
                    span.className = className;
                    span.appendChild(node);
                    div.appendChild(span);
                    return;
                }
                div.appendChild(node);
            }

            var i0 = selectedMatchIdx,
                i1 = i0 + 1;
            if (highlightAll) {
                i0 = 0;
                i1 = matches.length;
            } else if (!isSelectedPage) {
                // Not highlighting all and this isn't the selected page, so do nothing.
                return;
            }

            for (var i = i0; i < i1; i++) {
                var match = matches[i];
                var begin = match.begin;
                var end = match.end;
                var isSelected = (isSelectedPage && i === selectedMatchIdx);
                var highlightSuffix = (isSelected ? ' selected' : '');

                if (this.findController) {
                    this.findController.updateMatchPosition(pageIdx, i, textDivs,
                        begin.divIdx, end.divIdx);
                }

                // Match inside new div.
                if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
                    // If there was a previous div, then add the text at the end.
                    if (prevEnd !== null) {
                        appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
                    }
                    // Clear the divs and set the content until the starting point.
                    beginText(begin);
                } else {
                    appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
                }

                if (begin.divIdx === end.divIdx) {
                    appendTextToDiv(begin.divIdx, begin.offset, end.offset,
                        'highlight' + highlightSuffix);
                } else {
                    appendTextToDiv(begin.divIdx, begin.offset, infinity.offset,
                        'highlight begin' + highlightSuffix);
                    for (var n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
                        textDivs[n0].className = 'highlight middle' + highlightSuffix;
                    }
                    beginText(end, 'highlight end' + highlightSuffix);
                }
                prevEnd = end;
            }

            if (prevEnd) {
                appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
            }
        },

        updateMatches: function TextLayerBuilder_updateMatches() {
            // Only show matches when all rendering is done.
            if (!this.renderingDone) {
                return;
            }

            // Clear all matches.
            var matches = this.matches;
            var textDivs = this.textDivs;
            var bidiTexts = this.textContent.items;
            var clearedUntilDivIdx = -1;

            // Clear all current matches.
            for (var i = 0, len = matches.length; i < len; i++) {
                var match = matches[i];
                var begin = Math.max(clearedUntilDivIdx, match.begin.divIdx);
                for (var n = begin, end = match.end.divIdx; n <= end; n++) {
                    var div = textDivs[n];
                    div.textContent = bidiTexts[n].str;
                    div.className = '';
                }
                clearedUntilDivIdx = match.end.divIdx + 1;
            }

            if (this.findController === null || !this.findController.active) {
                return;
            }

            // Convert the matches on the page controller into the match format
            // used for the textLayer.
            this.matches = this.convertMatches(this.findController === null ?
                [] : (this.findController.pageMatches[this.pageIdx] || []));
            this.renderMatches(this.matches);
        }
    };
    return TextLayerBuilder;
})();

/**
 * Returns scale factor for the canvas. It makes sense for the HiDPI displays.
 * @return {Object} The object with horizontal (sx) and vertical (sy)
 scales. The scaled property is set to false if scaling is
 not required, true otherwise.
 */
function getOutputScale() {
    var pixelRatio = 'devicePixelRatio' in window ? window.devicePixelRatio : 1;
    return {
        sx: pixelRatio,
        sy: pixelRatio,
        scaled: pixelRatio != 1
    };
}



/**
 * @typedef {Object} AnnotationsLayerBuilderOptions
 * @property {HTMLDivElement} pageDiv
 * @property {PDFPage} pdfPage
 * @property {IPDFLinkService} linkService
 */

/**
 * @class
 */
var AnnotationsLayerBuilder = (function AnnotationsLayerBuilderClosure() {
    /**
     * @param {AnnotationsLayerBuilderOptions} options
     * @constructs AnnotationsLayerBuilder
     */
    function AnnotationsLayerBuilder(options) {
        this.pageDiv = options.pageDiv;
        this.pdfPage = options.pdfPage;
        this.linkService = options.linkService;

        this.div = null;
    }
    AnnotationsLayerBuilder.prototype =
    /** @lends AnnotationsLayerBuilder.prototype */
    {

        /**
         * @param {PageViewport} viewport
         */
        setupAnnotations: function AnnotationsLayerBuilder_setupAnnotations(viewport) {
            function bindLink(link, dest) {
                link.href = linkService.getDestinationHash(dest);
                link.onclick = function annotationsLayerBuilderLinksOnclick() {
                    if (dest) {
                        linkService.navigateTo(dest);
                    }
                    return false;
                };
                if (dest) {
                    link.className = 'internalLink';
                }
            }

            function bindNamedAction(link, action) {
                link.href = linkService.getAnchorUrl('');
                link.onclick = function annotationsLayerBuilderNamedActionOnClick() {
                    linkService.executeNamedAction(action);
                    return false;
                };
                link.className = 'internalLink';
            }

            var linkService = this.linkService;
            var pdfPage = this.pdfPage;
            var self = this;

            pdfPage.getAnnotations().then(function(annotationsData) {
                viewport = viewport.clone({
                    dontFlip: true
                });
                var transform = viewport.transform;
                var transformStr = 'matrix(' + transform.join(',') + ')';
                var data, element, i, ii;

                if (self.div) {
                    // If an annotationLayer already exists, refresh its children's
                    // transformation matrices
                    for (i = 0, ii = annotationsData.length; i < ii; i++) {
                        data = annotationsData[i];
                        element = self.div.querySelector(
                            '[data-annotation-id="' + data.id + '"]');
                        if (element) {
                            CustomStyle.setProp('transform', element, transformStr);
                        }
                    }
                    // See PDFPageView.reset()
                    self.div.removeAttribute('hidden');
                } else {
                    for (i = 0, ii = annotationsData.length; i < ii; i++) {
                        data = annotationsData[i];
                        if (!data || !data.hasHtml) {
                            continue;
                        }

                        element = PDFJS.AnnotationUtils.getHtmlElement(data,
                            pdfPage.commonObjs);
                        element.setAttribute('data-annotation-id', data.id);
                        if (typeof mozL10n !== 'undefined') {
                            mozL10n.translate(element);
                        }

                        var rect = data.rect;
                        var view = pdfPage.view;
                        rect = PDFJS.Util.normalizeRect([
                            rect[0],
                            view[3] - rect[1] + view[1],
                            rect[2],
                            view[3] - rect[3] + view[1]
                        ]);
                        element.style.left = rect[0] + 'px';
                        element.style.top = rect[1] + 'px';
                        element.style.position = 'absolute';

                        CustomStyle.setProp('transform', element, transformStr);
                        var transformOriginStr = -rect[0] + 'px ' + -rect[1] + 'px';
                        CustomStyle.setProp('transformOrigin', element, transformOriginStr);

                        if (data.subtype === 'Link' && !data.url) {
                            var link = element.getElementsByTagName('a')[0];
                            if (link) {
                                if (data.action) {
                                    bindNamedAction(link, data.action);
                                } else {
                                    bindLink(link, ('dest' in data) ? data.dest : null);
                                }
                            }
                        }

                        if (!self.div) {
                            var annotationLayerDiv = document.createElement('div');
                            annotationLayerDiv.className = 'annotationLayer';
                            self.pageDiv.appendChild(annotationLayerDiv);
                            self.div = annotationLayerDiv;
                        }

                        self.div.appendChild(element);
                    }
                }
            });
        },

        hide: function() {
            if (!this.div) {
                return;
            }
            this.div.setAttribute('hidden', 'true');
        }
    };
    return AnnotationsLayerBuilder;
})();

/**
 * @constructor
 * @implements IPDFAnnotationsLayerFactory
 */
function DefaultAnnotationsLayerFactory() {}
DefaultAnnotationsLayerFactory.prototype = {
    /**
     * @param {HTMLDivElement} pageDiv
     * @param {PDFPage} pdfPage
     * @returns {AnnotationsLayerBuilder}
     */
    createAnnotationsLayerBuilder: function(pageDiv, pdfPage) {
        return new AnnotationsLayerBuilder({
            pageDiv: pageDiv,
            pdfPage: pdfPage,
            linkService: new SimpleLinkService(),
        });
    }
};



var SimpleLinkService = (function SimpleLinkServiceClosure() {
    function SimpleLinkService() {}

    SimpleLinkService.prototype = {
        /**
         * @returns {number}
         */
        get page() {
            return 0;
        },
        /**
         * @param {number} value
         */
        set page(value) {},
        /**
         * @param dest - The PDF destination object.
         */
        navigateTo: function(dest) {},
        /**
         * @param dest - The PDF destination object.
         * @returns {string} The hyperlink to the PDF object.
         */
        getDestinationHash: function(dest) {
            return '#';
        },
        /**
         * @param hash - The PDF parameters/hash.
         * @returns {string} The hyperlink to the PDF object.
         */
        getAnchorUrl: function(hash) {
            return '#';
        },
        /**
         * @param {string} hash
         */
        setHash: function(hash) {},
        /**
         * @param {string} action
         */
        executeNamedAction: function(action) {},
        /**
         * @param {number} pageNum - page number.
         * @param {Object} pageRef - reference to the page.
         */
        cachePageRef: function(pageNum, pageRef) {}
    };
    return SimpleLinkService;
})();