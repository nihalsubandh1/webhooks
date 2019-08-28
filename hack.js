/**
 * DTS configuration for forums.leagueunlimited.com
 * @name forums.leagueunlimited.com
 * @memberof DesktopTruSkin
 * @property {number}  topOffset=87px,41PX Top Offset
 * @property {number}  publisherContentWidth=1116 Publisher Site Width
 *
 * **Known Issue**
 *
 *
 */
var pubWindow = window.top || window;
var pubDoc = pubWindow.document;
var pubBody = pubDoc.body;
var siteWidth = 1200;


var header = pubDoc.querySelector('#globehead-container');


var siteOffset = header ? header.offsetHeight : 0;

 window.BONZAI_DTS_CONFIGURATION = {
   publisherContentWidth: siteWidth,
   topOffset: siteOffset,
   scrollValue: 0,
   scrollTopOffset: 0,

   notPublisherContainers: ["body > img","body > script","body > iframe","body > noscript"],
   adContainer: { selector: "", closestAncestor: 2, hide: true },
   addFillArea: {
       color: "#fff"
   },
   customStyle: [
          //  {
          //  selector: ".container" ,
          //  css: "padding:10px 35px !important;"
          //  },
          //  {
          //   selector: "#subscription_head_banner" ,
          //   css: "padding:0px 35px !important;"
          //   },


       ],

}
