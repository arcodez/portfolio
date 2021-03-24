
!(function () {
  let e = !1;
  function n() {
    if (!e) {
      const n = document.createElement("meta");
      (n.name = "dapp-detected"), document.head.appendChild(n), (e = !0);
    }
  }
  if (window.hasOwnProperty("ethereum")) {
    if (
      ((window.__disableDappDetectionInsertion = !0),
      void 0 === window.ethereum)
    )
      return;
    n();
  } else {
    var t = window.ethereum;
    Object.defineProperty(window, "ethereum", {
      configurable: !0,
      enumerable: !1,
      set: function (e) {
        window.__disableDappDetectionInsertion || n(), (t = e);
      },
      get: function () {
        if (!window.__disableDappDetectionInsertion) {
          const e = arguments.callee;
          (e &&
            e.caller &&
            e.caller.toString &&
            -1 !== e.caller.toString().indexOf("getOwnPropertyNames")) ||
            n();
        }
        return t;
      },
    });
  }
})();



document.documentElement.className = "js";

  
  var et_site_url = "https://demos.ovdivi.com";
  var et_post_id = "2134";
  function et_core_page_resource_fallback(a, b) {
    "undefined" === typeof b &&
      (b = a.sheet.cssRules && 0 === a.sheet.cssRules.length);
    b &&
      ((a.onerror = null),
      (a.onload = null),
      a.href
        ? (a.href =
            et_site_url + "/?et_core_page_resource=" + a.id + et_post_id)
        : a.src &&
          (a.src =
            et_site_url + "/?et_core_page_resource=" + a.id + et_post_id));
  }


<script id="diviarea-loader">
      window.DiviPopupData = window.DiviAreaConfig = {
        zIndex: 1000000,
        animateSpeed: 400,
        triggerClassPrefix: "show-popup-",
        idAttrib: "data-popup",
        modalIndicatorClass: "is-modal",
        blockingIndicatorClass: "is-blocking",
        defaultShowCloseButton: true,
        withCloseClass: "with-close",
        noCloseClass: "no-close",
        triggerCloseClass: "close",
        singletonClass: "single",
        darkModeClass: "dark",
        noShadowClass: "no-shadow",
        altCloseClass: "close-alt",
        popupSelector: ".et_pb_section.popup",
        initializeOnEvent: "et_pb_after_init_modules",
        popupWrapperClass: "area-outer-wrap",
        fullHeightClass: "full-height",
        openPopupClass: "da-overlay-visible",
        overlayClass: "da-overlay",
        exitIndicatorClass: "on-exit",
        hoverTriggerClass: "on-hover",
        clickTriggerClass: "on-click",
        onExitDelay: 2000,
        notMobileClass: "not-mobile",
        notTabletClass: "not-tablet",
        notDesktopClass: "not-desktop",
        baseContext: "body",
        activePopupClass: "is-open",
        closeButtonClass: "da-close",
        withLoaderClass: "with-loader",
        debug: false,
        ajaxUrl: "https:\/\/demos.ovdivi.com\/wp-admin\/admin-ajax.php",
        sys: [],
      };
      var loader = (function () {
        "use strict";
        !(function (t) {
          t.DiviArea = t.DiviPopup = { loaded: !1 };
          var n = t.DiviArea,
            i = (n.Hooks = {}),
            r = {};
          function e(t, n, i) {
            var e, o, c;
            if ("string" == typeof t)
              if (r[t]) {
                if (n)
                  if ((e = r[t]) && i)
                    for (c = e.length; c--; )
                      (o = e[c]).callback === n &&
                        o.context === i &&
                        (e[c] = !1);
                  else
                    for (c = e.length; c--; )
                      e[c].callback === n && (e[c] = !1);
              } else r[t] = [];
          }
          function o(t, n, i, e) {
            if ("string" == typeof t) {
              var o = { callback: n, priority: i, context: e },
                c = r[t];
              c
                ? (c.push(o),
                  (c = (function (t) {
                    var n,
                      i,
                      r,
                      e,
                      o = t.length;
                    for (e = 1; e < o; e++)
                      for (n = t[e], i = e; i > 0; i--)
                        (r = t[i - 1]).priority > n.priority &&
                          ((t[i] = r), (t[i - 1] = n));
                    return t;
                  })(c)))
                : (c = [o]),
                (r[t] = c);
            }
          }
          function c(t, n, i) {
            var e, o;
            for ("string" == typeof n && (n = [n]), e = 0; e < n.length; e++) {
              var c = r[n[e]],
                f = !1,
                a = void 0;
              if (c) {
                var l = c.length;
                for (o = 0; o < l; o++)
                  if (c[o])
                    if ("filter" === t)
                      void 0 !== (a = c[o].callback.apply(c[o].context, i)) &&
                        (i[0] = a);
                    else {
                      if (!c[o] || "function" != typeof c[o].callback)
                        return !1;
                      c[o].callback.apply(c[o].context, i);
                    }
                  else f = !0;
                if (f) for (o = l; o--; ) c[o] || c.splice(o, 1);
              }
            }
            if ("filter" === t) return i[0];
          }
          (i.silent = function () {
            return i;
          }),
            (n.removeFilter = i.removeFilter = function (t, n) {
              e(t, n);
            }),
            (n.removeAction = i.removeAction = function (t, n) {
              e(t, n);
            }),
            (n.applyFilters = i.applyFilters = function (t) {
              for (var n = [], i = arguments.length - 1; i-- > 0; )
                n[i] = arguments[i + 1];
              return c("filter", t, n);
            }),
            (n.doAction = i.doAction = function (t) {
              for (var n = [], i = arguments.length - 1; i-- > 0; )
                n[i] = arguments[i + 1];
              c("action", t, n);
            }),
            (n.addFilter = i.addFilter = function (n, i, r, e) {
              o(n, i, parseInt(r || 10, 10), e || t);
            }),
            (n.addAction = i.addAction = function (n, i, r, e) {
              o(n, i, parseInt(r || 10, 10), e || t);
            }),
            (n.addActionOnce = i.addActionOnce = function (n, i, r, c) {
              o(n, i, parseInt(r || 10, 10), c || t),
                o(
                  n,
                  function () {
                    e(n, i);
                  },
                  1 + parseInt(r || 10, 10),
                  c || t
                );
            });
        })(window);
        return {};
      })();
    
     
     window._wpemojiSettings = {
       baseUrl: "https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/72x72\/",
       ext: ".png",
       svgUrl: "https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/svg\/",
       svgExt: ".svg",
       source: {
         concatemoji:
           "https:\/\/demos.ovdivi.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.7",
       },
     };
     !(function (e, a, t) {
       var n,
         r,
         o,
         i = a.createElement("canvas"),
         p = i.getContext && i.getContext("2d");
       function s(e, t) {
         var a = String.fromCharCode;
         p.clearRect(0, 0, i.width, i.height),
           p.fillText(a.apply(this, e), 0, 0);
         e = i.toDataURL();
         return (
           p.clearRect(0, 0, i.width, i.height),
           p.fillText(a.apply(this, t), 0, 0),
           e === i.toDataURL()
         );
       }
       function c(e) {
         var t = a.createElement("script");
         (t.src = e),
           (t.defer = t.type = "text/javascript"),
           a.getElementsByTagName("head")[0].appendChild(t);
       }
       for (
         o = Array("flag", "emoji"),
           t.supports = { everything: !0, everythingExceptFlag: !0 },
           r = 0;
         r < o.length;
         r++
       )
         (t.supports[o[r]] = (function (e) {
           if (!p || !p.fillText) return !1;
           switch (
             ((p.textBaseline = "top"), (p.font = "600 32px Arial"), e)
           ) {
             case "flag":
               return s(
                 [127987, 65039, 8205, 9895, 65039],
                 [127987, 65039, 8203, 9895, 65039]
               )
                 ? !1
                 : !s(
                     [55356, 56826, 55356, 56819],
                     [55356, 56826, 8203, 55356, 56819]
                   ) &&
                     !s(
                       [
                         55356,
                         57332,
                         56128,
                         56423,
                         56128,
                         56418,
                         56128,
                         56421,
                         56128,
                         56430,
                         56128,
                         56423,
                         56128,
                         56447,
                       ],
                       [
                         55356,
                         57332,
                         8203,
                         56128,
                         56423,
                         8203,
                         56128,
                         56418,
                         8203,
                         56128,
                         56421,
                         8203,
                         56128,
                         56430,
                         8203,
                         56128,
                         56423,
                         8203,
                         56128,
                         56447,
                       ]
                     );
             case "emoji":
               return !s(
                 [55357, 56424, 8205, 55356, 57212],
                 [55357, 56424, 8203, 55356, 57212]
               );
           }
           return !1;
         })(o[r])),
           (t.supports.everything = t.supports.everything && t.supports[o[r]]),
           "flag" !== o[r] &&
             (t.supports.everythingExceptFlag =
               t.supports.everythingExceptFlag && t.supports[o[r]]);
       (t.supports.everythingExceptFlag =
         t.supports.everythingExceptFlag && !t.supports.flag),
         (t.DOMReady = !1),
         (t.readyCallback = function () {
           t.DOMReady = !0;
         }),
         t.supports.everything ||
           ((n = function () {
             t.readyCallback();
           }),
           a.addEventListener
             ? (a.addEventListener("DOMContentLoaded", n, !1),
               e.addEventListener("load", n, !1))
             : (e.attachEvent("onload", n),
               a.attachEvent("onreadystatechange", function () {
                 "complete" === a.readyState && t.readyCallback();
               })),
           (n = t.source || {}).concatemoji
             ? c(n.concatemoji)
             : n.wpemoji && n.twemoji && (c(n.twemoji), c(n.wpemoji)));
     })(window, document, window._wpemojiSettings);
   

<script
src="https://demos.ovdivi.com/wp-includes/js/wp-emoji-release.min.js?ver=5.7"
type="text/javascript"
defer=""
>

<script
data-optimized="1"
type="text/javascript"
src="https://demos.ovdivi.com/wp-content/litespeed/cssjs/b1f70.js?42931"
id="dap-ie-js"
>

<script
type="text/javascript"
src="https://demos.ovdivi.com/wp-includes/js/jquery/jquery.min.js?ver=3.5.1"
id="jquery-core-js"
>

<script
data-optimized="1"
type="text/javascript"
src="https://demos.ovdivi.com/wp-content/litespeed/cssjs/99892.js?fddf5"
id="jquery-migrate-js"
>

<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js">
 <script src="https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js">
 
 jQuery(document).ready(function ($) {
   $(".efecto-tilt").tilt({
     maxTilt: 25,
     perspective: 500,
     scale: 1,
     speed: 300,
     glare: true,
     maxGlare: 0.7,
   });
 });



var et_link_options_data = [
  { class: "et_pb_blurb_0", url: "#", target: "_self" },
  { class: "et_pb_blurb_1", url: "#", target: "_self" },
  { class: "et_pb_blurb_2", url: "#", target: "_self" },
];



(function () {
  var c = document.body.className;
  c = c.replace(/woocommerce-no-js/, "woocommerce-js");
  document.body.className = c;
})();

 <script
 data-optimized="1"
 type="text/javascript"
 src="https://demos.ovdivi.com/wp-content/litespeed/cssjs/02c6c.js?9871f"
 id="jquery-blockui-js"
>

<script type="text/javascript" id="wc-add-to-cart-js-extra">
      /*  */
      var wc_add_to_cart_params = {
        ajax_url: "\/wp-admin\/admin-ajax.php",
        wc_ajax_url: "\/?wc-ajax=%%endpoint%%",
        i18n_view_cart: "Ver carrito",
        cart_url: "https:\/\/demos.ovdivi.com\/carrito\/",
        is_cart: "",
        cart_redirect_after_add: "no",
      };
      /*  */
    

<script
data-optimized="1"
type="text/javascript"
src="https://demos.ovdivi.com/wp-content/litespeed/cssjs/d6d31.js?a680b"
id="wc-add-to-cart-js"
>
<script
data-optimized="1"
type="text/javascript"
src="https://demos.ovdivi.com/wp-content/litespeed/cssjs/bc907.js?6657b"
id="js-cookie-js"
>
<script type="text/javascript" id="woocommerce-js-extra">
/*  */
var woocommerce_params = {
  ajax_url: "\/wp-admin\/admin-ajax.php",
  wc_ajax_url: "\/?wc-ajax=%%endpoint%%",
};
/*  */

 <script
 data-optimized="1"
 type="text/javascript"
 src="https://demos.ovdivi.com/wp-content/litespeed/cssjs/0d5cd.js?c4b40"
 id="woocommerce-js"
>
<script type="text/javascript" id="wc-cart-fragments-js-extra">
 /*  */
 var wc_cart_fragments_params = {
   ajax_url: "\/wp-admin\/admin-ajax.php",
   wc_ajax_url: "\/?wc-ajax=%%endpoint%%",
   cart_hash_key: "wc_cart_hash_6c7b90d9c79f205c54879b7a86d9130a",
   fragment_name: "wc_fragments_6c7b90d9c79f205c54879b7a86d9130a",
   request_timeout: "5000",
 };
 /*  */

<script
 data-optimized="1"
 type="text/javascript"
 src="https://demos.ovdivi.com/wp-content/litespeed/cssjs/c83ce.js?e3af8"
 id="wc-cart-fragments-js"
>
<script
 data-optimized="1"
 type="text/javascript"
 src="https://demos.ovdivi.com/wp-content/litespeed/cssjs/30c21.js?33c90"
 id="js-divi-area-js"
>
<script type="text/javascript" id="divi-custom-script-js-extra">
 /*  */
 var DIVI = { item_count: "%d Item", items_count: "%d Items" };
 var et_shortcodes_strings = { previous: "Anterior", next: "Siguiente" };
 var et_pb_custom = {
   ajaxurl: "https:\/\/demos.ovdivi.com\/wp-admin\/admin-ajax.php",
   images_uri:
     "https:\/\/demos.ovdivi.com\/wp-content\/themes\/Divi\/images",
   builder_images_uri:
     "https:\/\/demos.ovdivi.com\/wp-content\/themes\/Divi\/includes\/builder\/images",
   et_frontend_nonce: "825196345c",
   subscription_failed:
     "Por favor, revise los campos a continuaci\u00f3n para asegurarse de que la informaci\u00f3n introducida es correcta.",
   et_ab_log_nonce: "486f2d0d54",
   fill_message: "Por favor, rellene los siguientes campos:",
   contact_error_message: "Por favor, arregle los siguientes errores:",
   invalid: "De correo electr\u00f3nico no v\u00e1lida",
   captcha: "Captcha",
   prev: "Anterior",
   previous: "Anterior",
   next: "Siguiente",
   wrong_captcha: "Ha introducido un n\u00famero equivocado de captcha.",
   wrong_checkbox: "Checkbox",
   ignore_waypoints: "no",
   is_divi_theme_used: "1",
   widget_search_selector: ".widget_search",
   ab_tests: [],
   is_ab_testing_active: "",
   page_id: "2134",
   unique_test_id: "",
   ab_bounce_rate: "5",
   is_cache_plugin_active: "no",
   is_shortcode_tracking: "",
   tinymce_uri: "",
 };
 var et_builder_utils_params = {
   condition: { diviTheme: true, extraTheme: false },
   scrollLocations: ["app", "top"],
   builderScrollLocations: { desktop: "app", tablet: "app", phone: "app" },
   onloadScrollLocation: "app",
   builderType: "fe",
 };
 var et_frontend_scripts = {
   builderCssContainerPrefix: "#et-boc",
   builderCssLayoutPrefix: "#et-boc .et-l",
 };
 var et_pb_box_shadow_elements = [];
 var et_pb_motion_elements = { desktop: [], tablet: [], phone: [] };
 var et_pb_sticky_elements = [];
 /*  */

<script
 data-optimized="1"
 type="text/javascript"
 src="https://demos.ovdivi.com/wp-content/litespeed/cssjs/b16fe.js?c1f8c"
 id="divi-custom-script-js"
>
<script
 data-optimized="1"
 type="text/javascript"
 src="https://demos.ovdivi.com/wp-content/litespeed/cssjs/7f657.js?f941b"
 id="et-core-common-js"
>

<script
      data-optimized="1"
      type="text/javascript"
      src="https://demos.ovdivi.com/wp-content/litespeed/cssjs/3ecb3.js?d3ad0"
      id="wp-embed-js"
    >