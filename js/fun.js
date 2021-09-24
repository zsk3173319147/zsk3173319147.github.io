! function (e) {
    var t, n, o, i, c, a = '<svg><symbol id="icon-haowanjishi" viewBox="0 0 1060 1024"><path d="M530.285714 1024c-282.770286 0-512-229.229714-512-512s229.229714-512 512-512 512 229.229714 512 512-229.229714 512-512 512z m-158.134857-374.381714h316.269714c111.433143 0.109714 158.683429-65.828571 168.704-153.380572 1.426286-12.434286 2.084571-25.307429 2.084572-38.473143 0-105.984-52.150857-191.890286-170.788572-191.890285h-316.269714c-138.057143 0-170.788571 85.906286-170.788571 191.890285 0 11.556571 0.621714 22.893714 1.718857 33.938286 9.142857 90.368 56.832 161.024 169.069714 157.915429z m379.794286-220.416a25.526857 25.526857 0 1 1 0 51.017143 25.526857 25.526857 0 0 1 0-51.017143z m-70.180572-70.180572a25.526857 25.526857 0 1 1 0 51.053715 25.526857 25.526857 0 0 1 0-51.053715z m0 140.324572a25.526857 25.526857 0 1 1 0 51.053714 25.526857 25.526857 0 0 1 0-51.053714z m-70.144-70.144a25.526857 25.526857 0 1 1 0 51.017143 25.526857 25.526857 0 0 1 0-51.017143z m-311.954285 1.133714h41.764571v-41.764571c0-13.933714 10.934857-25.234286 24.393143-25.234286 13.458286 0 24.356571 11.300571 24.356571 25.234286v41.764571h35.657143c13.970286 0 25.234286 10.898286 25.234286 24.356571a24.795429 24.795429 0 0 1-25.234286 24.393143h-35.657143v35.657143c0 13.933714-10.898286 25.234286-24.356571 25.234286a24.832 24.832 0 0 1-24.393143-25.234286V479.085714H299.666286a24.832 24.832 0 0 1-25.234286-24.393143c0-13.458286 11.337143-24.356571 25.234286-24.356571zM688.64 686.811429h-316.489143a254.756571 254.756571 0 0 1-7.424 0.109714c-79.981714 0-135.68-36.754286-162.011428-105.106286 7.936 92.525714 55.332571 165.595429 169.435428 162.450286h316.269714c115.529143 0.109714 161.938286-70.838857 169.508572-163.181714-27.026286 68.608-85.321143 105.728-169.325714 105.728z"  ></path></symbol></svg>',
        d = (d = document.getElementsByTagName("script"))[d.length - 1].getAttribute("data-injectcss"),
        s = function (e, t) {
            t.parentNode.insertBefore(e, t)
        };
    if (d && !e.__iconfont__svg__cssinject__) {
        e.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }

    function l() {
        c || (c = !0, o())
    }

    function r() {
        try {
            i.documentElement.doScroll("left")
        } catch (e) {
            return void setTimeout(r, 50)
        }
        l()
    }
    t = function () {
        var e, t;
        (t = document.createElement("div")).innerHTML = a, a = null, (e = t.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", t = e, (e = document.body).firstChild ? s(t, e.firstChild) : e.appendChild(t))
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (n = function () {
        document.removeEventListener("DOMContentLoaded", n, !1), t()
    }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = t, i = e.document, c = !1, r(), i.onreadystatechange = function () {
        "complete" == i.readyState && (i.onreadystatechange = null, l())
    })
}(window);