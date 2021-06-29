(this["webpackJsonpair-conditioner"] = this["webpackJsonpair-conditioner"] || []).push([
    [0], { 103: function(e, t, r) {}, 104: function(e, t, r) {}, 110: function(e, t, r) {}, 113: function(e, t, r) { "use strict";
            r.r(t); var n = r(0),
                a = r.n(n),
                o = r(34),
                c = r.n(o),
                i = (r(103), r(104), r(135)),
                s = r(115),
                l = r(92),
                u = r(2);

            function d(e) { var t = e.children,
                    r = Object(i.a)("(prefers-color-scheme: dark)") ? "dark" : "light",
                    a = Object(n.useMemo)((function() { return Object(l.a)({ palette: { mode: r } }) }), [r]); return Object(u.jsx)(s.a, { theme: a, children: t }) } var j = r(147),
                b = r(91),
                h = r(14),
                m = r(149),
                g = r(148),
                f = r(139),
                x = r(142),
                p = r(85),
                O = r.n(p),
                v = Object(x.a)((function(e) { return { root: { margin: e.spacing(3, 0), display: "flex", justifyContent: "center", alignItems: "center" } } }));

            function w() { var e = v(); return Object(u.jsxs)(g.a, { align: "center", className: e.root, color: "textSecondary", children: [Object(u.jsx)(O.a, {}), "Tip: \u4e3a\u4f60\u7684\u590f\u65e5\u5e26\u53bb\u6e05\u51c9\uff01"] }) } var y = r(33),
                k = r(140),
                C = r(150),
                S = r(89),
                N = r.n(S),
                I = r(90),
                B = r.n(I),
                L = r(87),
                T = r.n(L),
                R = r(86),
                E = r.n(R),
                W = r(88),
                Y = r.n(W),
                A = r(62),
                F = r(53),
                J = function() { return Object(F.b)() },
                M = F.c,
                D = r(46),
                P = Object(D.b)({ name: "toast", initialState: { open: !1, message: "" }, reducers: { setMessage: function(e, t) { e.message = t.payload }, setOpen: function(e, t) { e.open = t.payload } } }),
                U = P.actions,
                V = U.setMessage,
                _ = U.setOpen,
                G = P.reducer,
                H = { status: "ac-status", mode: "ac-mode", temperature: "ac-temperature" },
                $ = { status: !1, mode: localStorage.getItem(H.mode) || "cold", temperature: parseInt(localStorage.getItem(H.temperature) || "") || 20 },
                q = Object(D.b)({ name: "ac", initialState: $, reducers: { setStatus: function(e, t) { e.status = t.payload }, setTemperature: function(e, t) { e.temperature = t.payload }, increment: function(e) { e.temperature += 1, localStorage.setItem(H.temperature, e.temperature.toString()) }, decrement: function(e) { e.temperature -= 1, localStorage.setItem(H.temperature, e.temperature.toString()) }, setMode: function(e, t) { e.mode = t.payload, localStorage.setItem(H.mode, e.mode) }, toggleStatus: function(e) { e.status = !e.status, localStorage.setItem(H.status, e.status.toString()) } } }),
                z = function(e) { return e.ac.temperature },
                K = q.actions,
                Q = K.setTemperature,
                X = K.increment,
                Z = K.decrement,
                ee = K.setMode,
                te = K.toggleStatus,
                re = K.setStatus,
                ne = q.reducer;

            function ae(e) { return "https://cdn.jsdelivr.net/gh/YunYouJun/air-conditioner/public" + e } var oe, ce, ie = Object(x.a)((function(e) { return { margin: { margin: e.spacing(1) }, extendedIcon: { marginRight: e.spacing(1) } } }));

            function se(e) { return Object(u.jsx)(C.a, Object(y.a)(Object(y.a)({}, e), {}, { onClick: function() {! function() { var e = document.getElementById("di");
                            e && e.play() }(), e.onClick() } })) }

            function le() { var e = document.getElementById("ac-work");
                e.load(), e.play(), setTimeout((function() {! function() { var e = document.getElementById("air-extractor-fan");
                        e.load(), e.play(), oe = setTimeout((function() { ce = setInterval((function() { e.currentTime = 2 }), 56e3) }), 2e3) }() }), 8e3) } var ue = Object(l.a)({ palette: { primary: A.a } }),
                de = ae("/assets/audio/di.mp3"),
                je = ae("/assets/audio/ac-work.mp3"),
                be = ae("/assets/audio/air-extractor-fan.mp3");

            function he() { var e = ie(),
                    t = M((function(e) { return e.ac })),
                    r = J(); return Object(u.jsxs)(f.a, { my: 4, display: "flex", flexDirection: "column", alignItems: "center", children: [Object(u.jsx)("audio", { id: "di", src: de, preload: "auto" }), Object(u.jsx)("audio", { id: "ac-work", src: je, preload: "auto" }), Object(u.jsx)("audio", { id: "air-extractor-fan", src: be, preload: "auto" }), Object(u.jsxs)("div", { children: [" ", Object(u.jsx)(se, { color: "primary", "aria-label": "cold", className: e.margin, onClick: function() { r(ee("cold")) }, children: Object(u.jsx)(E.a, {}) }), Object(u.jsx)(k.a, { theme: ue, children: Object(u.jsx)(se, { color: t.status ? "secondary" : "primary", "aria-label": "add", className: e.margin, onClick: function() {! function(e, t) { if (e) { document.getElementById("ac-work").load(); var r = document.getElementById("air-extractor-fan");
                                            oe && clearTimeout(oe), ce && clearInterval(ce), r.currentTime = 58 } else le();
                                        t(te()) }(t.status, r) }, style: { color: "white" }, children: Object(u.jsx)(T.a, {}) }) }), Object(u.jsx)(se, { "aria-label": "hot", className: e.margin, style: { backgroundColor: "orange", color: "white" }, onClick: function() { r(ee("hot")) }, children: Object(u.jsx)(Y.a, {}) })] }), Object(u.jsx)(se, { "aria-label": "add", className: e.margin, onClick: function() { r((function(e, t) { z(t()) < 31 ? e(X()) : (e(V("\u5df2\u7ecf\u662f\u6700\u5927\u6e29\u5ea6\u5566\uff01")), e(_(!0))) })) }, children: Object(u.jsx)(N.a, {}) }), Object(u.jsx)(se, { "aria-label": "reduce", className: e.margin, onClick: function() { r((function(e, t) { z(t()) > 16 ? e(Z()) : (e(V("\u5df2\u7ecf\u662f\u6700\u5c0f\u6e29\u5ea6\u5566\uff01")), e(_(!0))) })) }, children: Object(u.jsx)(B.a, {}) })] }) } var me = r(15),
                ge = r(146),
                fe = r(141),
                xe = r.p + "static/media/logo.5fb28574.svg",
                pe = r(38),
                Oe = (r(110), "#e0e0e0"),
                ve = "#cccccc",
                we = "#bbbbbb",
                ye = Object(x.a)((function(e) { return { acBorder: { borderRadius: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }, acDisplay: { textShadow: "0px 0px 2px rgba(0, 0, 0, 0.3)" }, acLogo: { width: 12 }, acStatus: { backgroundColor: function(e) { return e.backgroundColor || "transparent" } }, energyLabel: { backgroundColor: "#4ea5f5" } } }));

            function ke(e) { return Object(u.jsx)(f.a, Object(y.a)({ bgcolor: "background.paper", height: 150, border: 1, borderColor: Oe, borderRadius: 10, boxShadow: 3, position: "relative" }, e)) }

            function Ce() { var e = M(z); return Object(u.jsxs)(g.a, { variant: "h4", align: "center", children: [Object(u.jsx)("span", { className: "font-digit ac-temperature", children: e }), Object(u.jsx)("small", { className: "font-digit", children: "\xb0C" })] }) } var Se = a.a.forwardRef((function(e, t) { return Object(u.jsxs)(f.a, Object(y.a)(Object(y.a)({}, e), {}, { ref: t, position: "absolute", top: 25, right: 30, color: ve, children: [Object(u.jsxs)(g.a, { align: "left", variant: "subtitle2", children: [Object(u.jsx)("span", { children: "cold" === e.mode ? "\u2744" : "\u2600\ufe0f" }), "\ufe0f\ufe0f"] }), Object(u.jsx)(Ce, {})] })) }));

            function Ne(e) { return Object(u.jsx)(f.a, { textAlign: "center", mt: 12, children: Object(u.jsx)("a", { href: pe.c.url, title: pe.b, target: "_blank", rel: "noreferrer noopener", children: Object(u.jsx)("img", { className: e.className, src: xe, alt: "logo" }) }) }) }

            function Ie() { return Object(u.jsx)(f.a, { mt: 1, border: 1, borderColor: Oe }) }

            function Be(e) { var t = { backgroundColor: e.status ? "#38F709" : Oe },
                    r = ye(t); return Object(u.jsx)(f.a, { className: r.acStatus, position: "absolute", height: 4, width: 4, borderRadius: "50%", top: 130, right: 10 }) }

            function Le(e, t, r, n) { var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    o = Object(me.a)(new Array(e).keys()),
                    c = o.map((function(e) { return Object(u.jsx)(f.a, { mx: n, my: a, width: r, height: r, borderRadius: "50%", bgcolor: t }, e) })); return Object(u.jsx)(f.a, { display: "flex", justifyContent: "center", children: c }) }

            function Te(e) { return Object(u.jsxs)(f.a, { className: e.className, position: "absolute", top: 10, left: 10, height: 70, width: 50, borderRadius: 2, p: .5, children: [Le(6, "white", 4, .25), Object(u.jsxs)(f.a, { my: .5, px: 1, py: .25, height: 28, width: "100%", bgcolor: "background.paper", children: [Object(u.jsxs)(ge.a, { container: !0, children: [Object(u.jsx)(f.a, { bgcolor: "green", height: 3, width: "40%" }), Object(u.jsx)(f.a, { height: 3, marginLeft: "40%", style: { borderTop: 1.5, borderRight: 2, borderBottom: 1.5, borderLeft: 0, borderTopColor: "transparent", borderRightColor: "green", borderBottomColor: "transparent", borderLeftColor: "transparent", borderStyle: "solid" } }), Object(u.jsx)(f.a, { bgcolor: "green", height: 3, width: "10%" })] }), Object(u.jsx)(f.a, { mt: .25, bgcolor: "lightGreen", height: 3, width: "50%" }), Object(u.jsx)(f.a, { mt: .25, bgcolor: "#ffc107", height: 3, width: "60%" }), Object(u.jsx)(f.a, { mt: .25, bgcolor: "orange", height: 3, width: "70%" }), Object(u.jsx)(f.a, { mt: .25, bgcolor: "red", height: 3, width: "80%" })] }), Object(u.jsxs)(f.a, { mb: .25, pt: .1, height: 20, width: "100%", bgcolor: "background.paper", children: [Le(11, "black", 2, .1, .25), Object(u.jsx)(f.a, { my: .1, borderTop: 1, height: 0, width: "100%" }), Le(9, "black", 1.5, .1, .25), Le(10, "black", 1.2, .1, 0)] }), Le(8, "white", 2, .1)] }) } var Re = a.a.forwardRef((function(e, t) { return Object(u.jsxs)(f.a, Object(y.a)(Object(y.a)({}, e), {}, { ref: t, mt: 3, display: "flex", justifyContent: "center", children: [Object(u.jsx)(f.a, { style: { transform: "rotate(10deg)" }, bgcolor: we, width: 5, height: 40 }), Object(u.jsx)(f.a, { mx: 10, bgcolor: we, width: 5, height: 40 }), Object(u.jsx)(f.a, { style: { transform: "rotate(-10deg)" }, bgcolor: we, width: 5, height: 40 })] })) }));

            function Ee(e) { var t = ye(e); return Object(u.jsxs)(f.a, { children: [Object(u.jsxs)(ke, { className: t.acBorder, children: [Object(u.jsx)(fe.a, { in: e.status, children: Object(u.jsx)(Se, { mode: e.mode }) }), Object(u.jsx)(Ne, { className: t.acLogo }), Object(u.jsx)(Ie, {}), Object(u.jsx)(Be, { status: e.status }), Object(u.jsx)(Te, { className: t.energyLabel, titleLength: 6 })] }), Object(u.jsx)(fe.a, { in: e.status, timeout: { enter: 2500, exit: 1500 }, children: Object(u.jsx)(Re, {}) })] }) } var We = r(145),
                Ye = r(143);

            function Ae() { var e = M((function(e) { return e.toast })),
                    t = J(),
                    r = function(e, r) { t(_(!1)) }; return Object(u.jsx)(We.a, { open: e.open, autoHideDuration: 5e3, onClose: r, children: Object(u.jsx)(Ye.a, { onClose: r, severity: "error", style: { width: "100%" }, children: e.message }) }) } var Fe = r(152); var Je = function() { return Object(u.jsxs)("div", { children: [Object(u.jsx)(f.a, { children: Object(u.jsxs)(g.a, { variant: "body2", color: "textSecondary", align: "center", children: ["\xa9 ", Object(u.jsx)(Fe.a, { color: "inherit", href: pe.c.url, children: "Yun Air Conditioner" }), " - ", Object(u.jsx)(Fe.a, { color: "inherit", href: pe.a.url, children: pe.a.name })] }) }), Object(u.jsx)(g.a, { variant: "body2", color: "textSecondary", align: "center", children: " 2019 - " + (new Date).getFullYear() })] }) }; var Me = function() { var e = M((function(e) { return e.ac })),
                    t = J(); return Object(n.useEffect)((function() {
                    function e(e) { switch (e.key) {
                            case H.status:
                                t(re("true" === e.newValue)); break;
                            case H.temperature:
                                t(Q(parseInt(e.newValue || "20"))); break;
                            case H.mode:
                                t(ee(e.newValue || "cold")) } } return window.addEventListener("storage", e),
                        function() { window.removeEventListener("storage", e) } }), [t]), Object(u.jsx)(d, { children: Object(u.jsxs)(j.a, { maxWidth: "sm", className: e.status ? "hot" === e.mode ? "hot-color" : "cold-color" : "", children: [Object(u.jsxs)(f.a, { sx: { pt: 4 }, bgcolor: "transparent", children: [Object(u.jsx)(g.a, { color: "textPrimary", align: "center", variant: "h4", component: "h1", gutterBottom: !0, children: "\u4fbf\u643a\u5c0f\u7a7a\u8c03" }), Object(u.jsx)(w, {}), Object(u.jsx)(Ee, { status: e.status, temperature: e.temperature, mode: e.mode }), Object(u.jsx)("div", { className: "text-center", children: Object(u.jsx)(f.a, { sx: { mt: 2 }, children: Object(u.jsx)(m.a, { variant: "outlined", onClick: function() { window.open("/rc", "_blank", "width=300, height=400") }, children: "\u72ec\u7acb\u9065\u63a7\u5668" }) }) }), Object(u.jsx)(he, {}), Object(u.jsx)(Je, {})] }), Object(u.jsx)(Ae, {})] }) }) };

            function De() { return Object(u.jsx)(he, {}) } var Pe = function() { return Object(u.jsx)(d, { children: Object(u.jsx)(j.a, { maxWidth: "sm", children: Object(u.jsx)(b.a, { children: Object(u.jsxs)(h.c, { children: [Object(u.jsx)(h.a, { path: "/rc", children: Object(u.jsx)(De, {}) }), Object(u.jsx)(h.a, { path: "/", children: Object(u.jsx)(Me, {}) })] }) }) }) }) },
                Ue = Object(D.a)({ reducer: { ac: ne, toast: G } }),
                Ve = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function _e(e, t) { navigator.serviceWorker.register(e).then((function(e) { e.onupdatefound = function() { var r = e.installing;
                        null != r && (r.onstatechange = function() { "installed" === r.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e))) }) } })).catch((function(e) { console.error("Error during service worker registration:", e) })) } var Ge = function(e) { e && e instanceof Function && r.e(3).then(r.bind(null, 153)).then((function(t) { var r = t.getCLS,
                        n = t.getFID,
                        a = t.getFCP,
                        o = t.getLCP,
                        c = t.getTTFB;
                    r(e), n(e), a(e), o(e), c(e) })) };
            c.a.render(Object(u.jsx)(a.a.StrictMode, { children: Object(u.jsx)(F.a, { store: Ue, children: Object(u.jsx)(Pe, {}) }) }), document.getElementById("root")),
                function(e) { if ("serviceWorker" in navigator) { if (new URL("", window.location.href).origin !== window.location.origin) return;
                        window.addEventListener("load", (function() { var t = "".concat("", "/service-worker.js");
                            Ve ? (! function(e, t) { fetch(e, { headers: { "Service-Worker": "script" } }).then((function(r) { var n = r.headers.get("content-type");
                                    404 === r.status || null != n && -1 === n.indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) { e.unregister().then((function() { window.location.reload() })) })) : _e(e, t) })).catch((function() { console.log("No internet connection found. App is running in offline mode.") })) }(t, e), navigator.serviceWorker.ready.then((function() { console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA") }))) : _e(t, e) })) } }(), Ge() }, 38: function(e) { e.exports = JSON.parse('{"b":"\u4e91\u7a7a\u8c03\uff0c\u4fbf\u643a\u5c0f\u7a7a\u8c03","a":{"url":"https://www.yunyoujun.cn","email":"me@yunyoujun.cn","name":"YunYouJun"},"c":{"type":"git","url":"https://github.com/YunYouJun/air-conditioner"}}') } },
    [
        [113, 1, 2]
    ]
]);
//# sourceMappingURL=main.93a87c03.chunk.js.map