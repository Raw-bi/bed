!function(n) {
    var i = {};
    function r(t) {
        var e;
        return (i[t] || (e = i[t] = {
            i: t,
            l: !1,
            exports: {}
        },
        n[t].call(e.exports, e, e.exports, r),
        e.l = !0,
        e)).exports
    }
    r.m = n,
    r.c = i,
    r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                r.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return r.d(e, "a", e),
        e
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    r.p = "/",
    r(r.s = 4)
}([function(t, m, g) {
    "use strict";
    g.r(m),
    function(t, e) {
        g.d(m, "_gsScope", function() {
            return n
        }),
        g.d(m, "TweenLite", function() {
            return i
        }),
        g.d(m, "globals", function() {
            return r
        }),
        g.d(m, "default", function() {
            return i
        }),
        g.d(m, "SimpleTimeline", function() {
            return o
        }),
        g.d(m, "Animation", function() {
            return s
        }),
        g.d(m, "Ease", function() {
            return a
        }),
        g.d(m, "Linear", function() {
            return l
        }),
        g.d(m, "Power0", function() {
            return u
        }),
        g.d(m, "Power1", function() {
            return c
        }),
        g.d(m, "Power2", function() {
            return f
        }),
        g.d(m, "Power3", function() {
            return p
        }),
        g.d(m, "Power4", function() {
            return h
        }),
        g.d(m, "TweenPlugin", function() {
            return d
        }),
        g.d(m, "EventDispatcher", function() {
            return _
        });
        var n = "undefined" != typeof window ? window : t.exports && void 0 !== e ? e : {}
          , i = function(_) {
            var j = {}
              , d = _.document
              , f = _.GreenSockGlobals = _.GreenSockGlobals || _;
            if (f.TweenLite)
                return f.TweenLite;
            function N(t) {
                for (var e = t.split("."), n = f, i = 0; i < e.length; i++)
                    n[e[i]] = n = n[e[i]] || {};
                return n
            }
            function B(t) {
                for (var e = [], n = t.length, i = 0; i !== n; e.push(t[i++]))
                    ;
                return e
            }
            function F() {}
            function z(s, a, l, u) {
                this.sc = h[s] ? h[s].sc : [],
                (h[s] = this).gsClass = null,
                this.func = l;
                var c = [];
                this.check = function(t) {
                    for (var e, n, i, r = a.length, o = r; -1 < --r; )
                        (e = h[a[r]] || new z(a[r],[])).gsClass ? (c[r] = e.gsClass,
                        o--) : t && e.sc.push(this);
                    if (0 === o && l)
                        for (n = (i = ("com.greensock." + s).split(".")).pop(),
                        i = N(i.join("."))[n] = this.gsClass = l.apply(l, c),
                        u && (f[n] = j[n] = i),
                        r = 0; r < this.sc.length; r++)
                            this.sc[r].check()
                }
                ,
                this.check(!0)
            }
            var m, e, H, p = N("com.greensock"), g = 1e-8, y = (e = Object.prototype.toString,
            H = e.call([]),
            function(t) {
                return null != t && (t instanceof Array || "object" == typeof t && !!t.push && e.call(t) === H)
            }
            ), h = {}, i = _._gsDefine = function(t, e, n, i) {
                return new z(t,e,n,i)
            }
            , v = p._class = function(t, e, n) {
                return e = e || function() {}
                ,
                i(t, [], function() {
                    return e
                }, n),
                e
            }
            , X = (i.globals = f,
            [0, 0, 1, 1]), b = v("easing.Ease", function(t, e, n, i) {
                this._func = t,
                this._type = n || 0,
                this._power = i || 0,
                this._params = e ? X.concat(e) : X
            }, !0), w = b.map = {}, t = b.register = function(t, e, n, i) {
                for (var r, o, s, a, l = e.split(","), u = l.length, c = (n || "easeIn,easeOut,easeInOut").split(","); -1 < --u; )
                    for (o = l[u],
                    r = i ? v("easing." + o, null, !0) : p.easing[o] || {},
                    s = c.length; -1 < --s; )
                        a = c[s],
                        w[o + "." + a] = w[a + o] = r[a] = t.getRatio ? t : t[a] || new t
            }
            , n = b.prototype;
            for (n._calcEnd = !1,
            n.getRatio = function(t) {
                var e, n, i;
                return this._func ? (this._params[0] = t,
                this._func.apply(null, this._params)) : (i = 1 === (e = this._type) ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t),
                1 === (n = this._power) ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i),
                1 === e ? 1 - i : 2 === e ? i : t < .5 ? i / 2 : 1 - i / 2)
            }
            ,
            o = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; -1 < --o; )
                n = r[o] + ",Power" + o,
                t(new b(null,null,1,o), n, "easeOut", !0),
                t(new b(null,null,2,o), n, "easeIn" + (0 === o ? ",easeNone" : "")),
                t(new b(null,null,3,o), n, "easeInOut");
            w.linear = p.easing.Linear.easeIn,
            w.swing = p.easing.Quad.easeInOut;
            for (var r, V = v("events.EventDispatcher", function(t) {
                this._listeners = {},
                this._eventTarget = t || this
            }), x = ((n = V.prototype).addEventListener = function(t, e, n, i, r) {
                r = r || 0;
                var o, s, a = this._listeners[t], l = 0;
                for (this !== C || m || C.wake(),
                null == a && (this._listeners[t] = a = []),
                s = a.length; -1 < --s; )
                    (o = a[s]).c === e && o.s === n ? a.splice(s, 1) : 0 === l && o.pr < r && (l = s + 1);
                a.splice(l, 0, {
                    c: e,
                    s: n,
                    up: i,
                    pr: r
                })
            }
            ,
            n.removeEventListener = function(t, e) {
                var n, i = this._listeners[t];
                if (i)
                    for (n = i.length; -1 < --n; )
                        if (i[n].c === e)
                            return void i.splice(n, 1)
            }
            ,
            n.dispatchEvent = function(t) {
                var e, n, i, r = this._listeners[t];
                if (r)
                    for (1 < (e = r.length) && (r = r.slice(0)),
                    n = this._eventTarget; -1 < --e; )
                        (i = r[e]) && (i.up ? i.c.call(i.s || n, {
                            type: t,
                            target: n
                        }) : i.c.call(i.s || n))
            }
            ,
            _.requestAnimationFrame), T = _.cancelAnimationFrame, O = Date.now || function() {
                return (new Date).getTime()
            }
            , P = O(), o = (r = ["ms", "moz", "webkit", "o"]).length; -1 < --o && !x; )
                x = _[r[o] + "RequestAnimationFrame"],
                T = _[r[o] + "CancelAnimationFrame"] || _[r[o] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, r, o, s, a, l = this, u = O(), n = !(!1 === e || !x) && "auto", c = 500, f = 33, p = "tick", h = function(t) {
                    var e, n = O() - P;
                    c < n && (u += n - f),
                    P += n,
                    l.time = (P - u) / 1e3,
                    n = l.time - a,
                    (!i || 0 < n || !0 === t) && (l.frame++,
                    a += n + (s <= n ? .004 : s - n),
                    e = !0),
                    !0 !== t && (o = r(h)),
                    e && l.dispatchEvent(p)
                };
                V.call(l),
                l.time = l.frame = 0,
                l.tick = function() {
                    h(!0)
                }
                ,
                l.lagSmoothing = function(t, e) {
                    if (!arguments.length)
                        return c < 1e8;
                    c = t || 1e8,
                    f = Math.min(e, c, 0)
                }
                ,
                l.sleep = function() {
                    null != o && ((n && T ? T : clearTimeout)(o),
                    r = F,
                    o = null,
                    l === C && (m = !1))
                }
                ,
                l.wake = function(t) {
                    null !== o ? l.sleep() : t ? u += -P + (P = O()) : 10 < l.frame && (P = O() - c + 5),
                    r = 0 === i ? F : n && x ? x : function(t) {
                        return setTimeout(t, 1e3 * (a - l.time) + 1 | 0)
                    }
                    ,
                    l === C && (m = !0),
                    h(2)
                }
                ,
                l.fps = function(t) {
                    if (!arguments.length)
                        return i;
                    s = 1 / ((i = t) || 60),
                    a = this.time + s,
                    l.wake()
                }
                ,
                l.useRAF = function(t) {
                    if (!arguments.length)
                        return n;
                    l.sleep(),
                    n = t,
                    l.fps(i)
                }
                ,
                l.fps(t),
                setTimeout(function() {
                    "auto" === n && l.frame < 5 && "hidden" !== (d || {}).visibilityState && l.useRAF(!1)
                }, 1500)
            }),
            (n = p.Ticker.prototype = new p.events.EventDispatcher).constructor = p.Ticker;
            function q() {
                m && 2e3 < O() - P && ("hidden" !== (d || {}).visibilityState || !C.lagSmoothing()) && C.wake();
                var t = setTimeout(q, 2e3);
                t.unref && t.unref()
            }
            function S(t) {
                return t && t.length && t !== _ && t[0] && (t[0] === _ || t[0].nodeType && t[0].style && !t.nodeType)
            }
            function U(t) {
                for (var e, n = this._firstPT; n; )
                    e = n.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : n.c * t + n.s,
                    n.m ? e = n.m.call(this._tween, e, this._target || n.t, this._tween) : e < 1e-6 && -1e-6 < e && !n.blob && (e = 0),
                    n.f ? n.fp ? n.t[n.p](n.fp, e) : n.t[n.p](e) : n.t[n.p] = e,
                    n = n._next
            }
            function W(t) {
                return (1e3 * t | 0) / 1e3 + ""
            }
            function Y(t, e, n, i) {
                var r, o, s, a, l, u, c = [], f = 0, p = "", h = 0;
                for (c.start = t,
                c.end = e,
                t = c[0] = t + "",
                e = c[1] = e + "",
                n && (n(c),
                t = c[0],
                e = c[1]),
                c.length = 0,
                r = t.match(K) || [],
                o = e.match(K) || [],
                i && (i._next = null,
                i.blob = 1,
                c._firstPT = c._applyPT = i),
                a = o.length,
                s = 0; s < a; s++)
                    u = o[s],
                    p += (l = e.substr(f, e.indexOf(u, f) - f)) || !s ? l : ",",
                    f += l.length,
                    h ? h = (h + 1) % 5 : "rgba(" === l.substr(-5) && (h = 1),
                    u === r[s] || r.length <= s ? p += u : (p && (c.push(p),
                    p = ""),
                    l = parseFloat(r[s]),
                    c.push(l),
                    c._firstPT = {
                        _next: c._firstPT,
                        t: c,
                        p: c.length - 1,
                        s: l,
                        c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - l) || 0,
                        f: 0,
                        m: h && h < 4 ? Math.round : W
                    }),
                    f += u.length;
                return (p += e.substr(f)) && c.push(p),
                c.setRatio = U,
                $.test(e) && (c.end = null),
                c
            }
            function G(t, e, n, i, r, o, s, a, l) {
                "function" == typeof i && (i = i(l || 0, t));
                var u = "function" != (l = typeof t[e]) ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3)
                  , n = "get" !== n ? n : u ? s ? t[u](s) : t[u]() : t[e]
                  , u = "string" == typeof i && "=" === i.charAt(1)
                  , t = {
                    t: t,
                    p: e,
                    s: n,
                    f: "function" == l,
                    pg: 0,
                    n: r || e,
                    m: o ? "function" == typeof o ? o : Math.round : 0,
                    pr: 0,
                    c: u ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - n || 0
                };
                if ("number" == typeof n && ("number" == typeof i || u) || (s || isNaN(n) || !u && isNaN(i) || "boolean" == typeof n || "boolean" == typeof i ? (t.fp = s,
                t = {
                    t: Y(n, u ? parseFloat(t.s) + t.c + (t.s + "").replace(/[0-9\-\.]/g, "") : i, a || E.defaultStringFilter, t),
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: r || e,
                    pr: 0,
                    m: 0
                }) : (t.s = parseFloat(n),
                u || (t.c = parseFloat(i) - t.s || 0))),
                t.c)
                    return (t._next = this._firstPT) && (t._next._prev = t),
                    this._firstPT = t
            }
            function Z(t, e, n, i) {
                var r, o, s = t.vars.onOverwrite;
                return s && (r = s(t, e, n, i)),
                (s = E.onOverwrite) && (o = s(t, e, n, i)),
                !1 !== r && !1 !== o
            }
            var a = v("core.Animation", function(t, e) {
                this.vars = e = e || {},
                this._duration = this._totalDuration = t || 0,
                this._delay = Number(e.delay) || 0,
                this._timeScale = 1,
                this._active = !!e.immediateRender,
                this.data = e.data,
                this._reversed = !!e.reversed,
                I && (m || C.wake(),
                (t = this.vars.useFrames ? c : I).add(this, t._time),
                this.vars.paused && this.paused(!0))
            })
              , C = a.ticker = new p.Ticker
              , s = ((n = a.prototype)._dirty = n._gc = n._initted = n._paused = !1,
            n._totalTime = n._time = 0,
            n._rawPrevTime = -1,
            n._next = n._last = n._onUpdate = n._timeline = n.timeline = null,
            n._paused = !1,
            q(),
            n.play = function(t, e) {
                return null != t && this.seek(t, e),
                this.reversed(!1).paused(!1)
            }
            ,
            n.pause = function(t, e) {
                return null != t && this.seek(t, e),
                this.paused(!0)
            }
            ,
            n.resume = function(t, e) {
                return null != t && this.seek(t, e),
                this.paused(!1)
            }
            ,
            n.seek = function(t, e) {
                return this.totalTime(Number(t), !1 !== e)
            }
            ,
            n.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }
            ,
            n.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
            }
            ,
            n.render = function(t, e, n) {}
            ,
            n.invalidate = function() {
                return this._time = this._totalTime = 0,
                this._initted = this._gc = !1,
                this._rawPrevTime = -1,
                !this._gc && this.timeline || this._enabled(!0),
                this
            }
            ,
            n.isActive = function() {
                var t = this._timeline
                  , e = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (t = t.rawTime(!0)) >= e && t < e + this.totalDuration() / this._timeScale - g
            }
            ,
            n._enabled = function(t, e) {
                return m || C.wake(),
                this._gc = !t,
                this._active = this.isActive(),
                !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                !1
            }
            ,
            n._kill = function(t, e) {
                return this._enabled(!1, !1)
            }
            ,
            n.kill = function(t, e) {
                return this._kill(t, e),
                this
            }
            ,
            n._uncache = function(t) {
                for (var e = t ? this : this.timeline; e; )
                    e._dirty = !0,
                    e = e.timeline;
                return this
            }
            ,
            n._swapSelfInParams = function(t) {
                for (var e = t.length, n = t.concat(); -1 < --e; )
                    "{self}" === t[e] && (n[e] = this);
                return n
            }
            ,
            n._callback = function(t) {
                var e = this.vars
                  , n = e[t]
                  , i = e[t + "Params"]
                  , r = e[t + "Scope"] || e.callbackScope || this;
                switch (i ? i.length : 0) {
                case 0:
                    n.call(r);
                    break;
                case 1:
                    n.call(r, i[0]);
                    break;
                case 2:
                    n.call(r, i[0], i[1]);
                    break;
                default:
                    n.apply(r, i)
                }
            }
            ,
            n.eventCallback = function(t, e, n, i) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length)
                        return r[t];
                    null == e ? delete r[t] : (r[t] = e,
                    r[t + "Params"] = y(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n,
                    r[t + "Scope"] = i),
                    "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }
            ,
            n.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
                this._delay = t,
                this) : this._delay
            }
            ,
            n.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t,
                this._uncache(!0),
                this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                this) : (this._dirty = !1,
                this._duration)
            }
            ,
            n.totalDuration = function(t) {
                return this._dirty = !1,
                arguments.length ? this.duration(t) : this._totalDuration
            }
            ,
            n.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(),
                this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }
            ,
            n.totalTime = function(t, e, n) {
                if (m || C.wake(),
                !arguments.length)
                    return this._totalTime;
                if (this._timeline) {
                    if (t < 0 && !n && (t += this.totalDuration()),
                    this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var i = this._totalDuration
                          , r = this._timeline;
                        if (i < t && !n && (t = i),
                        this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - t : t) / this._timeScale,
                        r._dirty || this._uncache(!1),
                        r._timeline)
                            for (; r._timeline; )
                                r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                                r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1),
                    this._totalTime === t && 0 !== this._duration || (k.length && L(),
                    this.render(t, e, !1),
                    k.length && L())
                }
                return this
            }
            ,
            n.progress = n.totalProgress = function(t, e) {
                var n = this.duration();
                return arguments.length ? this.totalTime(n * t, e) : n ? this._time / n : this.ratio
            }
            ,
            n.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t,
                this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
                this) : this._startTime
            }
            ,
            n.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }
            ,
            n.timeScale = function(t) {
                if (!arguments.length)
                    return this._timeScale;
                var e, n;
                for (t = t || g,
                this._timeline && this._timeline.smoothChildTiming && (n = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(),
                this._startTime = n - (n - this._startTime) * this._timeScale / t),
                this._timeScale = t,
                n = this.timeline; n && n.timeline; )
                    n._dirty = !0,
                    n.totalDuration(),
                    n = n.timeline;
                return this
            }
            ,
            n.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t,
                this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
                this) : this._reversed
            }
            ,
            n.paused = function(t) {
                var e, n, i;
                return arguments.length ? (e = this._timeline,
                t != this._paused && e && (m || t || C.wake(),
                i = (n = e.rawTime()) - this._pauseTime,
                !t && e.smoothChildTiming && (this._startTime += i,
                this._uncache(!1)),
                this._pauseTime = t ? n : null,
                this._paused = t,
                this._active = this.isActive(),
                !t && 0 != i && this._initted && this.duration() && (n = e.smoothChildTiming ? this._totalTime : (n - this._startTime) / this._timeScale,
                this.render(n, n === this._totalTime, !0))),
                this._gc && !t && this._enabled(!0, !1),
                this) : this._paused
            }
            ,
            v("core.SimpleTimeline", function(t) {
                a.call(this, 0, t),
                this.autoRemoveChildren = this.smoothChildTiming = !0
            }))
              , E = ((n = s.prototype = new a).constructor = s,
            n.kill()._gc = !1,
            n._first = n._last = n._recent = null,
            n._sortChildren = !1,
            n.add = n.insert = function(t, e, n, i) {
                var r, o;
                if (t._startTime = Number(e || 0) + t._delay,
                t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
                t.timeline && t.timeline._remove(t, !0),
                t.timeline = t._timeline = this,
                t._gc && t._enabled(!0, !0),
                r = this._last,
                this._sortChildren)
                    for (o = t._startTime; r && r._startTime > o; )
                        r = r._prev;
                return r ? (t._next = r._next,
                r._next = t) : (t._next = this._first,
                this._first = t),
                t._next ? t._next._prev = t : this._last = t,
                t._prev = r,
                this._recent = t,
                this._timeline && this._uncache(!0),
                this
            }
            ,
            n._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0),
                t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
                t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
                t._next = t._prev = t.timeline = null,
                t === this._recent && (this._recent = this._last),
                this._timeline && this._uncache(!0)),
                this
            }
            ,
            n.render = function(t, e, n) {
                var i, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                    i = r._next,
                    (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)),
                    r = i
            }
            ,
            n.rawTime = function() {
                return m || C.wake(),
                this._totalTime
            }
            ,
            v("TweenLite", function(t, e, n) {
                if (a.call(this, e, n),
                this.render = E.prototype.render,
                null == t)
                    throw "Cannot tween a null target.";
                this.target = t = "string" == typeof t && E.selector(t) || t;
                var i, r, o, n = t.jquery || t.length && t !== _ && t[0] && (t[0] === _ || t[0].nodeType && t[0].style && !t.nodeType), s = this.vars.overwrite;
                if (this._overwrite = s = null == s ? tt[E.defaultOverwrite] : "number" == typeof s ? s >> 0 : tt[s],
                (n || t instanceof Array || t.push && y(t)) && "number" != typeof t[0])
                    for (this._targets = o = B(t),
                    this._propLookup = [],
                    this._siblings = [],
                    i = 0; i < o.length; i++)
                        (r = o[i]) ? "string" == typeof r ? "string" == typeof (r = o[i--] = E.selector(r)) && o.splice(i + 1, 1) : r.length && r !== _ && r[0] && (r[0] === _ || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(i--, 1),
                        this._targets = o = o.concat(B(r))) : (this._siblings[i] = R(r, this, !1),
                        1 === s && 1 < this._siblings[i].length && nt(r, this, null, 1, this._siblings[i])) : o.splice(i--, 1);
                else
                    this._propLookup = {},
                    this._siblings = R(t, this, !1),
                    1 === s && 1 < this._siblings.length && nt(t, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -g,
                this.render(Math.min(0, -this._delay)))
            }, !0))
              , k = ((n = E.prototype = new a).constructor = E,
            n.kill()._gc = !1,
            n.ratio = 0,
            n._firstPT = n._targets = n._overwrittenProps = n._startAt = null,
            n._notifyPluginsOfEnabled = n._lazy = !1,
            E.version = "2.1.3",
            E.defaultEase = n._ease = new b(null,null,1,1),
            E.defaultOverwrite = "auto",
            E.ticker = C,
            E.autoSleep = 120,
            E.lagSmoothing = function(t, e) {
                C.lagSmoothing(t, e)
            }
            ,
            E.selector = _.$ || _.jQuery || function(t) {
                var e = _.$ || _.jQuery;
                return e ? (E.selector = e)(t) : (d = d || _.document) ? d.querySelectorAll ? d.querySelectorAll(t) : d.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
            }
            ,
            [])
              , A = {}
              , K = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
              , $ = /[\+-]=-?[\.\d]/
              , l = E._internals = {
                isArray: y,
                isSelector: S,
                lazyTweens: k,
                blobDif: Y
            }
              , M = E._plugins = {}
              , u = l.tweenLookup = {}
              , J = 0
              , Q = l.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1,
                stagger: 1
            }
              , tt = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            }
              , c = a._rootFramesTimeline = new s
              , I = a._rootTimeline = new s
              , et = 30
              , L = l.lazyRender = function() {
                var t, e, n = k.length;
                for (A = {},
                t = 0; t < n; t++)
                    (e = k[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0),
                    e._lazy = !1);
                k.length = 0
            }
              , R = (I._startTime = C.time,
            c._startTime = C.frame,
            I._active = c._active = !0,
            setTimeout(L, 1),
            a._updateRoot = E.render = function() {
                var t, e, n;
                if (k.length && L(),
                I.render((C.time - I._startTime) * I._timeScale, !1, !1),
                c.render((C.frame - c._startTime) * c._timeScale, !1, !1),
                k.length && L(),
                C.frame >= et) {
                    for (n in et = C.frame + (parseInt(E.autoSleep, 10) || 120),
                    u) {
                        for (t = (e = u[n].tweens).length; -1 < --t; )
                            e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete u[n]
                    }
                    if ((!(n = I._first) || n._paused) && E.autoSleep && !c._first && 1 === C._listeners.tick.length) {
                        for (; n && n._paused; )
                            n = n._next;
                        n || C.sleep()
                    }
                }
            }
            ,
            C.addEventListener("tick", a._updateRoot),
            function(t, e, n) {
                var i, r, o = t._gsTweenID;
                if (u[o || (t._gsTweenID = o = "t" + J++)] || (u[o] = {
                    target: t,
                    tweens: []
                }),
                e && ((i = u[o].tweens)[r = i.length] = e,
                n))
                    for (; -1 < --r; )
                        i[r] === e && i.splice(r, 1);
                return u[o].tweens
            }
            )
              , nt = function(t, e, n, i, r) {
                var o, s, a;
                if (1 === i || 4 <= i) {
                    for (a = r.length,
                    h = 0; h < a; h++)
                        if ((s = r[h]) !== e)
                            s._gc || s._kill(null, t, e) && (o = !0);
                        else if (5 === i)
                            break
                } else {
                    for (var l, u = e._startTime + g, c = [], f = 0, p = 0 === e._duration, h = r.length; -1 < --h; )
                        (s = r[h]) === e || s._gc || s._paused || (s._timeline !== e._timeline ? (l = l || it(e, 0, p),
                        0 === it(s, l, p) && (c[f++] = s)) : s._startTime <= u && s._startTime + s.totalDuration() / s._timeScale > u && ((p || !s._initted) && u - s._startTime <= 2 * g || (c[f++] = s)));
                    for (h = f; -1 < --h; )
                        a = (s = c[h])._firstPT,
                        2 === i && s._kill(n, t, e) && (o = !0),
                        (2 !== i || !s._firstPT && s._initted && a) && (2 === i || Z(s, e)) && s._enabled(!1, !1) && (o = !0)
                }
                return o
            }
              , it = function(t, e, n) {
                for (var i = t._timeline, r = i._timeScale, o = t._startTime; i._timeline; ) {
                    if (o += i._startTime,
                    r *= i._timeScale,
                    i._paused)
                        return -100;
                    i = i._timeline
                }
                return e < (o /= r) ? o - e : n && o === e || !t._initted && o - e < 2 * g ? g : (o += t.totalDuration() / t._timeScale / r) > e + g ? 0 : o - e - g
            }
              , D = (n._init = function() {
                var t, e, n, i, r, o, s = this.vars, a = this._overwrittenProps, l = this._duration, u = !!s.immediateRender, c = s.ease, f = this._startAt;
                if (s.startAt) {
                    for (i in f && (f.render(-1, !0),
                    f.kill()),
                    r = {},
                    s.startAt)
                        r[i] = s.startAt[i];
                    if (r.data = "isStart",
                    r.overwrite = !1,
                    r.immediateRender = !0,
                    r.lazy = u && !1 !== s.lazy,
                    r.startAt = r.delay = null,
                    r.onUpdate = s.onUpdate,
                    r.onUpdateParams = s.onUpdateParams,
                    r.onUpdateScope = s.onUpdateScope || s.callbackScope || this,
                    this._startAt = E.to(this.target || {}, 0, r),
                    u)
                        if (0 < this._time)
                            this._startAt = null;
                        else if (0 !== l)
                            return
                } else if (s.runBackwards && 0 !== l)
                    if (f)
                        f.render(-1, !0),
                        f.kill(),
                        this._startAt = null;
                    else {
                        for (i in 0 !== this._time && (u = !1),
                        n = {},
                        s)
                            Q[i] && "autoCSS" !== i || (n[i] = s[i]);
                        if (n.overwrite = 0,
                        n.data = "isFromStart",
                        n.lazy = u && !1 !== s.lazy,
                        n.immediateRender = u,
                        this._startAt = E.to(this.target, 0, n),
                        u) {
                            if (0 === this._time)
                                return
                        } else
                            this._startAt._init(),
                            this._startAt._enabled(!1),
                            this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = c = c ? c instanceof b ? c : "function" == typeof c ? new b(c,s.easeParams) : w[c] || E.defaultEase : E.defaultEase,
                s.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, s.easeParams)),
                this._easeType = this._ease._type,
                this._easePower = this._ease._power,
                this._firstPT = null,
                this._targets)
                    for (o = this._targets.length,
                    t = 0; t < o; t++)
                        this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                else
                    e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (e && E._onPluginEvent("_onInitAllProps", this),
                !a || this._firstPT || "function" != typeof this.target && this._enabled(!1, !1),
                s.runBackwards)
                    for (n = this._firstPT; n; )
                        n.s += n.c,
                        n.c = -n.c,
                        n = n._next;
                this._onUpdate = s.onUpdate,
                this._initted = !0
            }
            ,
            n._initProps = function(t, e, n, i, r) {
                var o, s, a, l, u, c;
                if (null == t)
                    return !1;
                if (A[t._gsTweenID] && L(),
                !this.vars.css && t.style && t !== _ && t.nodeType && M.css && !1 !== this.vars.autoCSS) {
                    var f, p = this.vars, h = t, d = {};
                    for (f in p)
                        Q[f] || f in h && "transform" !== f && "x" !== f && "y" !== f && "width" !== f && "height" !== f && "className" !== f && "border" !== f || !(!M[f] || M[f] && M[f]._autoCSS) || (d[f] = p[f],
                        delete p[f]);
                    p.css = d
                }
                for (o in this.vars)
                    if (c = this.vars[o],
                    Q[o])
                        c && (c instanceof Array || c.push && y(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
                    else if (M[o] && (l = new M[o])._onInitTween(t, this.vars[o], this, r)) {
                        for (this._firstPT = u = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: o,
                            pg: 1,
                            pr: l._priority,
                            m: 0
                        },
                        s = l._overwriteProps.length; -1 < --s; )
                            e[l._overwriteProps[s]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (a = !0),
                        (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0),
                        u._next && (u._next._prev = u)
                    } else
                        e[o] = G.call(this, t, o, "get", c, o, 0, null, this.vars.stringFilter, r);
                return i && this._kill(i, t) ? this._initProps(t, e, n, i, r) : 1 < this._overwrite && this._firstPT && 1 < n.length && nt(t, this, e, this._overwrite, n) ? (this._kill(e, t),
                this._initProps(t, e, n, i, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (A[t._gsTweenID] = !0),
                a)
            }
            ,
            n.render = function(t, e, n) {
                var i, r, o, s, a, l, u, c = this, f = c._time, p = c._duration, h = c._rawPrevTime;
                if (p - g <= t && 0 <= t ? (c._totalTime = c._time = p,
                c.ratio = c._ease._calcEnd ? c._ease.getRatio(1) : 1,
                c._reversed || (i = !0,
                r = "onComplete",
                n = n || c._timeline.autoRemoveChildren),
                0 !== p || !c._initted && c.vars.lazy && !n || (c._startTime === c._timeline._duration && (t = 0),
                (h < 0 || t <= 0 && -g <= t || h === g && "isPause" !== c.data) && h !== t && (n = !0,
                g < h && (r = "onReverseComplete")),
                c._rawPrevTime = s = !e || t || h === t ? t : g)) : t < g ? (c._totalTime = c._time = 0,
                c.ratio = c._ease._calcEnd ? c._ease.getRatio(0) : 0,
                (0 !== f || 0 === p && 0 < h) && (r = "onReverseComplete",
                i = c._reversed),
                -g < t ? t = 0 : t < 0 && (c._active = !1,
                0 !== p || !c._initted && c.vars.lazy && !n || (0 <= h && (h !== g || "isPause" !== c.data) && (n = !0),
                c._rawPrevTime = s = !e || t || h === t ? t : g)),
                (!c._initted || c._startAt && c._startAt.progress()) && (n = !0)) : (c._totalTime = c._time = t,
                c._easeType ? (a = t / p,
                (1 === (l = c._easeType) || 3 === l && .5 <= a) && (a = 1 - a),
                3 === l && (a *= 2),
                1 === (u = c._easePower) ? a *= a : 2 === u ? a *= a * a : 3 === u ? a *= a * a * a : 4 === u && (a *= a * a * a * a),
                c.ratio = 1 === l ? 1 - a : 2 === l ? a : t / p < .5 ? a / 2 : 1 - a / 2) : c.ratio = c._ease.getRatio(t / p)),
                c._time !== f || n) {
                    if (!c._initted) {
                        if (c._init(),
                        !c._initted || c._gc)
                            return;
                        if (!n && c._firstPT && (!1 !== c.vars.lazy && c._duration || c.vars.lazy && !c._duration))
                            return c._time = c._totalTime = f,
                            c._rawPrevTime = h,
                            k.push(c),
                            void (c._lazy = [t, e]);
                        c._time && !i ? c.ratio = c._ease.getRatio(c._time / p) : i && c._ease._calcEnd && (c.ratio = c._ease.getRatio(0 === c._time ? 0 : 1))
                    }
                    for (!1 !== c._lazy && (c._lazy = !1),
                    c._active || !c._paused && c._time !== f && 0 <= t && (c._active = !0),
                    0 === f && (c._startAt && (0 <= t ? c._startAt.render(t, !0, n) : r = r || "_dummyGS"),
                    !c.vars.onStart || 0 === c._time && 0 !== p || e || c._callback("onStart")),
                    o = c._firstPT; o; )
                        o.f ? o.t[o.p](o.c * c.ratio + o.s) : o.t[o.p] = o.c * c.ratio + o.s,
                        o = o._next;
                    c._onUpdate && (t < 0 && c._startAt && -1e-4 !== t && c._startAt.render(t, !0, n),
                    e || (c._time !== f || i || n) && c._callback("onUpdate")),
                    !r || c._gc && !n || (t < 0 && c._startAt && !c._onUpdate && -1e-4 !== t && c._startAt.render(t, !0, n),
                    i && (c._timeline.autoRemoveChildren && c._enabled(!1, !1),
                    c._active = !1),
                    !e && c.vars[r] && c._callback(r),
                    0 === p && c._rawPrevTime === g && s !== g && (c._rawPrevTime = 0))
                }
            }
            ,
            n._kill = function(t, e, n) {
                if (null == (t = "all" === t ? null : t) && (null == e || e === this.target))
                    return this._lazy = !1,
                    this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : E.selector(e) || e;
                var i, r, o, s, a, l, u, c, f, p = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline, h = this._firstPT;
                if ((y(e) || S(e)) && "number" != typeof e[0])
                    for (i = e.length; -1 < --i; )
                        this._kill(t, e[i], n) && (l = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; -1 < --i; )
                            if (e === this._targets[i]) {
                                a = this._propLookup[i] || {},
                                this._overwrittenProps = this._overwrittenProps || [],
                                r = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target)
                            return !1;
                        a = this._propLookup,
                        r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (u = t || a,
                        c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill),
                        n && (E.onOverwrite || this.vars.onOverwrite)) {
                            for (o in u)
                                a[o] && (f = f || []).push(o);
                            if ((f || !t) && !Z(this, n, e, f))
                                return !1
                        }
                        for (o in u)
                            (s = a[o]) && (p && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s,
                            l = !0),
                            s.pg && s.t._kill(u) && (l = !0),
                            s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next),
                            s._next && (s._next._prev = s._prev),
                            s._next = s._prev = null),
                            delete a[o]),
                            c && (r[o] = 1);
                        !this._firstPT && this._initted && h && this._enabled(!1, !1)
                    }
                }
                return l
            }
            ,
            n.invalidate = function() {
                this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this);
                var t = this._time;
                return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
                this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
                this._propLookup = this._targets ? {} : [],
                a.prototype.invalidate.call(this),
                this.vars.immediateRender && (this._time = -g,
                this.render(t, !1, !1 !== this.vars.lazy)),
                this
            }
            ,
            n._enabled = function(t, e) {
                if (m || C.wake(),
                t && this._gc) {
                    var n, i = this._targets;
                    if (i)
                        for (n = i.length; -1 < --n; )
                            this._siblings[n] = R(i[n], this, !0);
                    else
                        this._siblings = R(this.target, this, !0)
                }
                return a.prototype._enabled.call(this, t, e),
                !(!this._notifyPluginsOfEnabled || !this._firstPT) && E._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }
            ,
            E.to = function(t, e, n) {
                return new E(t,e,n)
            }
            ,
            E.from = function(t, e, n) {
                return n.runBackwards = !0,
                n.immediateRender = 0 != n.immediateRender,
                new E(t,e,n)
            }
            ,
            E.fromTo = function(t, e, n, i) {
                return i.startAt = n,
                i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender,
                new E(t,e,i)
            }
            ,
            E.delayedCall = function(t, e, n, i, r) {
                return new E(e,0,{
                    delay: t,
                    onComplete: e,
                    onCompleteParams: n,
                    callbackScope: i,
                    onReverseComplete: e,
                    onReverseCompleteParams: n,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }
            ,
            E.set = function(t, e) {
                return new E(t,0,e)
            }
            ,
            E.getTweensOf = function(t, e) {
                if (null == t)
                    return [];
                var n, i, r, o;
                if (t = "string" == typeof t && E.selector(t) || t,
                (y(t) || S(t)) && "number" != typeof t[0]) {
                    for (n = t.length,
                    i = []; -1 < --n; )
                        i = i.concat(E.getTweensOf(t[n], e));
                    for (n = i.length; -1 < --n; )
                        for (o = i[n],
                        r = n; -1 < --r; )
                            o === i[r] && i.splice(n, 1)
                } else if (t._gsTweenID)
                    for (n = (i = R(t).concat()).length; -1 < --n; )
                        (i[n]._gc || e && !i[n].isActive()) && i.splice(n, 1);
                return i || []
            }
            ,
            E.killTweensOf = E.killDelayedCallsTo = function(t, e, n) {
                "object" == typeof e && (n = e,
                e = !1);
                for (var i = E.getTweensOf(t, e), r = i.length; -1 < --r; )
                    i[r]._kill(n, t)
            }
            ,
            v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","),
                this._propName = this._overwriteProps[0],
                this._priority = e || 0,
                this._super = D.prototype
            }, !0));
            if (n = D.prototype,
            D.version = "1.19.0",
            D.API = 2,
            n._firstPT = null,
            n._addTween = G,
            n.setRatio = U,
            n._kill = function(t) {
                var e, n = this._overwriteProps, i = this._firstPT;
                if (null != t[this._propName])
                    this._overwriteProps = [];
                else
                    for (e = n.length; -1 < --e; )
                        null != t[n[e]] && n.splice(e, 1);
                for (; i; )
                    null != t[i.n] && (i._next && (i._next._prev = i._prev),
                    i._prev ? (i._prev._next = i._next,
                    i._prev = null) : this._firstPT === i && (this._firstPT = i._next)),
                    i = i._next;
                return !1
            }
            ,
            n._mod = n._roundProps = function(t) {
                for (var e, n = this._firstPT; n; )
                    (e = t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === n.f ? n.t._applyPT.m = e : n.m = e),
                    n = n._next
            }
            ,
            E._onPluginEvent = function(t, e) {
                var n, i, r, o, s, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a; ) {
                        for (s = a._next,
                        i = r; i && i.pr > a.pr; )
                            i = i._next;
                        (a._prev = i ? i._prev : o) ? a._prev._next = a : r = a,
                        (a._next = i) ? i._prev = a : o = a,
                        a = s
                    }
                    a = e._firstPT = r
                }
                for (; a; )
                    a.pg && "function" == typeof a.t[t] && a.t[t]() && (n = !0),
                    a = a._next;
                return n
            }
            ,
            D.activate = function(t) {
                for (var e = t.length; -1 < --e; )
                    t[e].API === D.API && (M[(new t[e])._propName] = t[e]);
                return !0
            }
            ,
            i.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API))
                    throw "illegal plugin definition.";
                var e, n = t.propName, i = t.priority || 0, r = t.overwriteProps, o = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_mod",
                    mod: "_mod",
                    initAll: "_onInitAllProps"
                }, s = v("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                    D.call(this, n, i),
                    this._overwriteProps = r || []
                }, !0 === t.global), a = s.prototype = new D(n);
                for (e in (a.constructor = s).API = t.API,
                o)
                    "function" == typeof t[e] && (a[o[e]] = t[e]);
                return s.version = t.version,
                D.activate([s]),
                s
            }
            ,
            r = _._gsQueue) {
                for (o = 0; o < r.length; o++)
                    r[o]();
                for (n in h)
                    h[n].func || _.console.log("GSAP encountered missing dependency: " + n)
            }
            return m = !1,
            E
        }(n)
          , r = n.GreenSockGlobals
          , t = r.com.greensock
          , o = t.core.SimpleTimeline
          , s = t.core.Animation
          , a = r.Ease
          , l = r.Linear
          , u = l
          , c = r.Power1
          , f = r.Power2
          , p = r.Power3
          , h = r.Power4
          , d = r.TweenPlugin
          , _ = t.events.EventDispatcher
    }
    .call(this, g(69)(t), g(12))
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(2))), l = s(n(61)), u = s(n(4)), c = s(n(16)), s = (r = a.default,
    o(f, r),
    f.prototype.__build = function() {
        this.viewInfo = new l.default(this),
        r.prototype.__build.call(this)
    }
    ,
    f.prototype.updateStaticClientRect = function() {
        var t;
        this.useStaticBounds && (t = this.getElement().getBoundingClientRect(),
        this._staticBoundsOffset = t.top + u.default.SCROLL.getCurrentScroll().y,
        this._staticBoundsRect = c.default.from(t),
        this.viewInfo && this.viewInfo.updateRect(this._staticBoundsRect))
    }
    ,
    f.prototype.getBoundingClientRect = function() {
        return this.useStaticBounds ? (this._staticBoundsRect || this.updateStaticClientRect(),
        this._staticBoundsRect.y = this._staticBoundsOffset - u.default.SCROLL.getCurrentScroll().y,
        this._staticBoundsRect) : r.prototype.getBoundingClientRect.call(this)
    }
    ,
    f);
    function f() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t._staticBoundsOffset = -1,
        t.useStaticBounds = !1,
        t
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
      , p = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(28))
      , r = n(3)
      , o = i(n(16))
      , h = i(n(21));
    function d(t, e, n) {
        var i = this;
        void 0 === e && (e = null),
        void 0 === n && (n = !1),
        this.__componentTypeGuard = "COMPONENT",
        this._onLoad = new r.SignalDispatcher,
        this._onBuild = new r.SignalDispatcher,
        this._onAwake = new r.SignalDispatcher,
        this._onUnload = new r.SignalDispatcher,
        this._onSleep = new r.SignalDispatcher,
        this._onDestroy = new r.SignalDispatcher,
        this._node = null,
        this._childComponentsLoaded = 0,
        this._isBuild = !1,
        this._isAwake = !1,
        this._isLoaded = !1,
        this._isCompLoading = !1,
        this._isDestroyed = !1,
        this.__autoAwake = !1,
        this.setup = function() {
            i.node.onInitialized.unsub(i.setup),
            i.node.onElementRemove.sub(i.__kill),
            i.node.onDestroy.sub(i.__kill),
            i.node.onChildAdded.sub(i.childComponentAdded),
            i.node.onSiblingAdded.sub(i.siblingAdded),
            i.node.getChildComponents().forEach(function(t) {
                i.childComponentAdded(t)
            }),
            i.node.getComponents().forEach(function(t) {
                i.siblingAdded(t)
            }),
            i.params = i.node.params
        }
        ,
        this.siblingAdded = function(t) {
            t !== i && i.childComponentAdded(t)
        }
        ,
        this.childComponentAdded = function(t) {
            t.onLoad.one(i.onChildComponentLoaded),
            t.onBuild.one(i.onChildCompBuild),
            i._isLoaded && t.__tryLoad()
        }
        ,
        this.onChildCompBuild = function() {
            i.__autoAwake && i.__tryAwake()
        }
        ,
        this.onChildComponentLoaded = function() {
            i._childComponentsLoaded++,
            i.__tryBuild()
        }
        ,
        this.__kill = function() {
            i.node.isDestroyed() && i.__tryUnload(),
            i.__trySleep(),
            i.node.isDestroyed() && i.__tryDestroy()
        }
        ,
        this._qsMap = {},
        this._qsMapAll = {},
        this._node = t,
        this._parentElement = e,
        this.__autoAwake = n
    }
    d.prototype.load = function(t) {
        t()
    }
    ,
    Object.defineProperty(d.prototype, "onLoad", {
        get: function() {
            return this._onLoad.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    d.prototype.build = function() {}
    ,
    Object.defineProperty(d.prototype, "onBuild", {
        get: function() {
            return this._onBuild.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    d.prototype.awake = function() {}
    ,
    Object.defineProperty(d.prototype, "onAwake", {
        get: function() {
            return this._onAwake.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    d.prototype.unload = function() {}
    ,
    Object.defineProperty(d.prototype, "onUnload", {
        get: function() {
            return this._onUnload.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    d.prototype.sleep = function() {}
    ,
    Object.defineProperty(d.prototype, "onSleep", {
        get: function() {
            return this._onSleep.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    d.prototype.destroy = function() {}
    ,
    Object.defineProperty(d.prototype, "onDestroy", {
        get: function() {
            return this._onDestroy.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    d.prototype.__init = function() {
        d.ALL_ACTIVE_COMPONENTS.push(this),
        this.node.isInitialized() ? this.setup() : this.node.onInitialized.sub(this.setup)
    }
    ,
    Object.defineProperty(d.prototype, "node", {
        get: function() {
            return this._node
        },
        enumerable: !1,
        configurable: !0
    }),
    d.prototype.removeThis = function(t) {
        this.node.removeThis(t = void 0 === t ? !0 : t)
    }
    ,
    d.prototype.killAllEvents = function() {
        this.onLoad.clear(),
        this.onBuild.clear(),
        this.onAwake.clear(),
        this.onUnload.clear(),
        this.onSleep.clear()
    }
    ,
    d.prototype.isAllChildrenAndSiblingsBuild = function() {
        for (var t = this.node.getChildComponents(!0), e = t.length, n = 0; n < e; n++)
            if (!t[n].isBuild())
                return !1;
        return !0
    }
    ,
    d.prototype.isAllChildrenAndSiblingsLoaded = function() {
        for (var t = this.node.getChildComponents(!0), e = t.length, n = 0; n < e; n++)
            if (!t[n].isLoaded())
                return !1;
        return !0
    }
    ,
    d.prototype.__tryLoad = function() {
        var t = this;
        this._isDestroyed || this._isLoaded || this._isCompLoading || (this._isCompLoading = !0,
        this.load.length,
        this.node.getChildComponents(!0).forEach(function(t) {
            return t.__tryLoad()
        }),
        this.load(function() {
            t._isLoaded = !0,
            t._isCompLoading = !1,
            t.__tryBuild(),
            t._onLoad.dispatch()
        }))
    }
    ,
    d.prototype.__tryBuild = function() {
        this._isBuild || this._isDestroyed || !this.isAllChildrenAndSiblingsLoaded() || this.__build()
    }
    ,
    d.prototype.__build = function() {
        var e;
        this._isBuild = !0,
        this.build(),
        this._onBuild.dispatch(),
        this.node.hasParentComponentNode() ? (e = !0,
        this.node.getParent().getComponents().forEach(function(t) {
            t.isAwake() || (e = !1)
        }),
        e && this.__tryAwake()) : (null !== this._parentElement && this._parentElement !== this.getElement().parentElement ? this._parentElement.appendChild(this.getElement()) : this._parentElement = this.getElement().parentElement,
        this.__autoAwake && this.__tryAwake())
    }
    ,
    d.prototype.__tryAwake = function() {
        this._isDestroyed || this._isAwake || !this.isAllChildrenAndSiblingsBuild() || (this.node.getChildComponents().forEach(function(t) {
            t.__tryAwake()
        }),
        this.__awake())
    }
    ,
    d.prototype.__awake = function() {
        this._isAwake = !0,
        this.awake(),
        this._onAwake.dispatch()
    }
    ,
    d.prototype.__tryUnload = function() {
        this._isLoaded && this.__unload()
    }
    ,
    d.prototype.__unload = function() {
        this.node.getChildComponents().forEach(function(t) {
            return t.__tryUnload()
        }),
        this.node.onChildAdded.unsub(this.childComponentAdded),
        this.node.onSiblingAdded.unsub(this.siblingAdded),
        this._isLoaded = !1,
        this.unload(),
        this._onUnload.dispatch()
    }
    ,
    d.prototype.__trySleep = function() {
        this._isAwake && this.__sleep()
    }
    ,
    d.prototype.__tryDestroy = function() {
        this._isBuild && this.__destroy()
    }
    ,
    d.prototype.__destroy = function() {
        this.node.getChildComponents().forEach(function(t) {
            return t.__tryDestroy()
        }),
        this._isDestroyed = !0,
        this.node.onElementRemove.unsub(this.__kill),
        this.node.onDestroy.unsub(this.__kill),
        this.destroy(),
        this._onDestroy.dispatch();
        var t = d.ALL_ACTIVE_COMPONENTS.indexOf(this);
        -1 !== t && d.ALL_ACTIVE_COMPONENTS.splice(t, 1)
    }
    ,
    d.prototype.__sleep = function() {
        this.node.getChildComponents().forEach(function(t) {
            return t.__trySleep()
        }),
        this._isAwake = !1,
        this.sleep(),
        this._onSleep.dispatch(),
        this.killAllEvents()
    }
    ,
    d.prototype.isLoaded = function() {
        return this._isLoaded
    }
    ,
    d.prototype.isBuild = function() {
        return this._isBuild
    }
    ,
    d.prototype.isAwake = function() {
        return this._isAwake
    }
    ,
    d.prototype.isDestroyed = function() {
        return this._isDestroyed
    }
    ,
    d.prototype.getElement = function() {
        return this.node.getElement()
    }
    ,
    d.prototype.getParent = function() {
        return this.node.getParent()
    }
    ,
    d.prototype.getRoot = function() {
        return h.default.searchRootComponentNode(this.node)
    }
    ,
    d.prototype.getComponents = function(t, e) {
        void 0 === e && (e = !1);
        var n = this.node.getChildComponents(t = void 0 === t ? !1 : t);
        if (!t || -1 !== (t = n.indexOf(this)) && n.splice(t, 1),
        e)
            for (var i = n.length, r = 0; r < i; r++)
                if (n[r] !== this)
                    for (var o = n[r].getComponents(!1, !0), s = o.length, a = 0; a < s; a++)
                        -1 === n.indexOf(o[a]) && n.push(o[a]);
        return n
    }
    ,
    d.prototype.getComponentByType = function(i, t, e, r) {
        void 0 === e && (e = !0),
        void 0 === r && (r = []);
        for (var o = this.node.getChildComponents(t = void 0 === t ? !0 : t), n = o.length, s = 0; s < n; s++) {
            var a = o[s];
            if (a !== this && a instanceof i)
                return a
        }
        if (e)
            for (var l = this, s = 0; s < n; s++) {
                var u = function(t) {
                    var e = o[t]
                      , n = !1;
                    if (r.forEach(function(t) {
                        e instanceof t && (n = !0)
                    }),
                    n)
                        return "continue";
                    if (e !== l) {
                        t = e.getComponentByType(i, !1, !0);
                        if (t)
                            return {
                                value: t
                            }
                    }
                }(s);
                if ("object" == typeof u)
                    return u.value
            }
        return null
    }
    ,
    d.prototype.getComponentsByType = function(a, t, e, l) {
        void 0 === e && (e = !0),
        void 0 === l && (l = []);
        for (var u = [], c = this.node.getChildComponents(t = void 0 === t ? !0 : t), n = c.length, i = 0; i < n; i++) {
            var r = c[i];
            r !== this && r instanceof a && u.push(r)
        }
        if (n = (c = this.node.getChildComponents(!1)).length,
        e)
            for (i = 0; i < n; i++)
                !function(t) {
                    var e = c[t]
                      , n = !1;
                    if (l.forEach(function(t) {
                        e instanceof t && (n = !0)
                    }),
                    n)
                        return;
                    for (var i = e.getComponentsByType(a, !0, !0), r = i.length, o = 0; o < r; o++) {
                        var s = i[o];
                        -1 === u.indexOf(s) && u.push(s)
                    }
                }(i);
        return u
    }
    ,
    d.prototype.toString = function() {
        return this.getElement().getAttribute(d.SEARCH_MODULE) || d.__tagComponents[this.getElement().tagName.toUpperCase()]
    }
    ,
    d.prototype.getBoundingClientRect = function() {
        return o.default.from(this.getElement().getBoundingClientRect())
    }
    ,
    d.prototype.qs = function(t, e) {
        return !(e = void 0 === e ? !1 : e) && this._qsMap[t] || (this._qsMap[t] = this.getElement().querySelector(t)),
        this._qsMap[t]
    }
    ,
    d.prototype.qsAll = function(t, e) {
        return !(e = void 0 === e ? !1 : e) && this._qsMapAll[t] || (this._qsMapAll[t] = this.getElement().querySelectorAll(t)),
        this._qsMapAll[t]
    }
    ,
    d.addComponent = function(t, e) {
        var n = t.getAttribute("data-module");
        t.setAttribute("data-module", n ? n + ", " + e : e);
        for (var i = d.create(t).getComponents(), r = 0; r < i.length; r++)
            if (i[r]instanceof p.Modules[e])
                return i[r];
        return null
    }
    ,
    d.create = function(t, e, n, i) {
        void 0 === e && (e = null),
        void 0 === n && (n = !0),
        void 0 === i && (i = []);
        var r = d.DOMComponents(t)
          , o = r.length;
        if (0 !== o) {
            for (var s = 0; s < o; s++) {
                var a = function(t) {
                    var e = r[t]
                      , n = !1;
                    if (i.forEach(function(t) {
                        p.Modules[e] == t && (n = !0)
                    }),
                    n)
                        return {
                            value: void 0
                        }
                }(s);
                if ("object" == typeof a)
                    return a.value
            }
            for (var l = h.default.searchActiveNodeFromElement(t), u = (l || (l = new h.default(t,e)).init(),
            []), s = 0; s < o; s++) {
                var c = r[s]
                  , f = d.getActiveComponentFrom(t, p.Modules[c]);
                if (f)
                    l.getComponents().indexOf(f);
                else {
                    f = void 0;
                    try {
                        f = new p.Modules[c](l)
                    } catch (t) {}
                    f && (f.__autoAwake = n,
                    l.__addSibling(f),
                    u.push(f))
                }
            }
            return u.forEach(function(t) {
                t.__init()
            }),
            u.forEach(function(t) {
                null !== e ? e.__addComponent(t) : t.__tryLoad()
            }),
            l
        }
        d.createSubComponents(t, e, n, i)
    }
    ,
    d.getActiveComponentsFrom = function(t) {
        for (var e = d.ALL_ACTIVE_COMPONENTS.length, n = [], i = 0; i < e; i++) {
            var r = d.ALL_ACTIVE_COMPONENTS[i];
            r.getElement() === t && n.push(r)
        }
        return n
    }
    ,
    d.getActiveComponentFrom = function(t, e) {
        for (var n = d.getActiveComponentsFrom(t), i = n.length, r = 0; r < i; r++) {
            var o = n[r];
            if (o.getElement() === t && o instanceof e)
                return o
        }
        return null
    }
    ,
    d.DOMComponents = function(t) {
        var e = t.getAttribute(d.SEARCH_MODULE)
          , n = [];
        return e && e.replace(/\s/g, ",").split(",").forEach(function(t) {
            0 < t.length && n.push(t)
        }),
        this.__tagComponents[t.tagName.toUpperCase()] && n.push(this.__tagComponents[t.tagName.toUpperCase()]),
        n
    }
    ,
    d.isComponent = function(t) {
        return void 0 !== t.__componentTypeGuard
    }
    ,
    d.createSubComponents = function(t, e, n, i) {
        void 0 === e && (e = null),
        void 0 === n && (n = !1),
        void 0 === i && (i = []);
        for (var r = [], o = d.getAllChildComponentDivs(t, !0), s = 0; s < o.length; s++)
            r.push(d.create(o[s], e, n, i));
        return r
    }
    ,
    d.getAllChildComponentDivs = function(t, e) {
        void 0 === e && (e = !0);
        var n = t.children;
        if (n) {
            for (var i = n.length, r = [], o = 0; o < i; o++) {
                var s = n[o];
                if (d.isElementOfComponentType(s))
                    r.push(s);
                else if (e) {
                    var a = this.getAllChildComponentDivs(s);
                    if (a)
                        for (var l = a.length, u = 0; u < l; u++)
                            null !== a[u] && r.push(a[u])
                }
            }
            return r
        }
    }
    ,
    d.isElementOfComponentType = function(t) {
        return t.hasAttribute(d.SEARCH_MODULE) || void 0 !== this.__tagComponents[t.tagName.toUpperCase()]
    }
    ,
    d.applyComponentToTag = function(t, e) {
        this.__tagComponents[t.toUpperCase()] = e
    }
    ,
    d.JSXCreate = function(t, e) {
        for (var n = [], i = 2; i < arguments.length; i++)
            n[i - 2] = arguments[i];
        var r = document.createElement(t);
        return Object.keys(this.nonNull(e, {})).forEach(function(t) {
            r.setAttribute(t, e[t])
        }),
        this.DOMparseChildren(n).forEach(function(t) {
            r.appendChild(t)
        }),
        r
    }
    ,
    d.nonNull = function(t, e) {
        return Boolean(t) ? t : e
    }
    ,
    d.DOMparseChildren = function(t) {
        return t.map(function(t) {
            return "object" == typeof t ? t : document.createTextNode(t.toString())
        })
    }
    ,
    d.ALL_ACTIVE_COMPONENTS = [],
    d.SEARCH_MODULE = "data-module",
    d.__tagComponents = {},
    e.default = d
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.SignalList = e.SignalHandlingBase = e.SignalDispatcher = e.NonUniformSimpleEventList = e.SimpleEventList = e.SimpleEventHandlingBase = e.SimpleEventDispatcher = e.NonUniformEventList = e.EventList = e.EventHandlingBase = e.EventDispatcher = e.Subscription = e.EventListBase = e.DispatcherWrapper = e.DispatcherBase = void 0;
    var i = n(15)
      , r = (Object.defineProperty(e, "DispatcherBase", {
        enumerable: !0,
        get: function() {
            return i.DispatcherBase
        }
    }),
    Object.defineProperty(e, "DispatcherWrapper", {
        enumerable: !0,
        get: function() {
            return i.DispatcherWrapper
        }
    }),
    Object.defineProperty(e, "EventListBase", {
        enumerable: !0,
        get: function() {
            return i.EventListBase
        }
    }),
    Object.defineProperty(e, "Subscription", {
        enumerable: !0,
        get: function() {
            return i.Subscription
        }
    }),
    n(54))
      , o = (Object.defineProperty(e, "EventDispatcher", {
        enumerable: !0,
        get: function() {
            return r.EventDispatcher
        }
    }),
    Object.defineProperty(e, "EventHandlingBase", {
        enumerable: !0,
        get: function() {
            return r.EventHandlingBase
        }
    }),
    Object.defineProperty(e, "EventList", {
        enumerable: !0,
        get: function() {
            return r.EventList
        }
    }),
    Object.defineProperty(e, "NonUniformEventList", {
        enumerable: !0,
        get: function() {
            return r.NonUniformEventList
        }
    }),
    n(56))
      , s = (Object.defineProperty(e, "SimpleEventDispatcher", {
        enumerable: !0,
        get: function() {
            return o.SimpleEventDispatcher
        }
    }),
    Object.defineProperty(e, "SimpleEventHandlingBase", {
        enumerable: !0,
        get: function() {
            return o.SimpleEventHandlingBase
        }
    }),
    Object.defineProperty(e, "SimpleEventList", {
        enumerable: !0,
        get: function() {
            return o.SimpleEventList
        }
    }),
    Object.defineProperty(e, "NonUniformSimpleEventList", {
        enumerable: !0,
        get: function() {
            return o.NonUniformSimpleEventList
        }
    }),
    n(58));
    Object.defineProperty(e, "SignalDispatcher", {
        enumerable: !0,
        get: function() {
            return s.SignalDispatcher
        }
    }),
    Object.defineProperty(e, "SignalHandlingBase", {
        enumerable: !0,
        get: function() {
            return s.SignalHandlingBase
        }
    }),
    Object.defineProperty(e, "SignalList", {
        enumerable: !0,
        get: function() {
            return s.SignalList
        }
    })
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
      , r = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(48),
    i(n(49)))
      , o = i(n(28))
      , s = i(n(2))
      , a = i(n(17))
      , l = n(173)
      , u = i(n(14))
      , c = i(n(47))
      , f = i(n(22))
      , p = (window.onload = function() {
        new p
    }
    ,
    h.prototype.addTemplateManager = function() {
        h.CONTENT = new a.default(document.getElementById("TemplateLayer"),new l.AnimateOnOut(!1)),
        h.CONTENT.onLoadingStart.subscribe(this.onLoadingNewPage),
        h.CONTENT.onLoadingDone.subscribe(this.onLoadingNewPageDone)
    }
    ,
    h.prototype.setupDefaultModules = function() {
        c.default.QUALITY = "80",
        s.default.applyComponentToTag("IMG", "ImgixImage"),
        s.default.applyComponentToTag("a", "CursorTargetLink")
    }
    ,
    h.prototype.setupScroll = function() {
        f.default.Instance
    }
    ,
    h.ENV = window.__SERVER,
    h);
    function h() {
        this.onLoadingNewPage = function() {}
        ,
        this.onLoadingNewPageDone = function() {}
        ,
        "prod" === h.ENV.env && (h.BUGSNAG = r.default(h.ENV.bugsnagKey)),
        new o.default,
        history.scrollRestoration = "manual",
        h.RESIZE = new u.default,
        this.setupDefaultModules(),
        this.addTemplateManager(),
        this.setupScroll(),
        s.default.create(document.body, null, !0, []),
        h.CONTENT.createBodyTemplate()
    }
    e.default = p
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "default", function() {
        return x
    }),
    n.d(e, "TweenLite", function() {
        return O.default
    }),
    n.d(e, "TweenMax", function() {
        return x
    }),
    n.d(e, "TimelineLite", function() {
        return i
    }),
    n.d(e, "TimelineMax", function() {
        return r
    }),
    n.d(e, "CSSPlugin", function() {
        return o.a
    }),
    n.d(e, "AttrPlugin", function() {
        return s
    }),
    n.d(e, "BezierPlugin", function() {
        return m
    }),
    n.d(e, "RoundPropsPlugin", function() {
        return a
    }),
    n.d(e, "DirectionalRotationPlugin", function() {
        return l
    }),
    n.d(e, "TweenPlugin", function() {
        return O.TweenPlugin
    }),
    n.d(e, "Ease", function() {
        return O.Ease
    }),
    n.d(e, "Power0", function() {
        return O.Power0
    }),
    n.d(e, "Power1", function() {
        return O.Power1
    }),
    n.d(e, "Power2", function() {
        return O.Power2
    }),
    n.d(e, "Power3", function() {
        return O.Power3
    }),
    n.d(e, "Power4", function() {
        return O.Power4
    }),
    n.d(e, "Linear", function() {
        return O.Linear
    }),
    n.d(e, "Back", function() {
        return c
    }),
    n.d(e, "Elastic", function() {
        return f
    }),
    n.d(e, "Bounce", function() {
        return h
    }),
    n.d(e, "RoughEase", function() {
        return d
    }),
    n.d(e, "SlowMo", function() {
        return _
    }),
    n.d(e, "SteppedEase", function() {
        return g
    }),
    n.d(e, "Circ", function() {
        return y
    }),
    n.d(e, "Expo", function() {
        return v
    }),
    n.d(e, "Sine", function() {
        return b
    }),
    n.d(e, "ExpoScaleEase", function() {
        return w
    }),
    n.d(e, "_gsScope", function() {
        return O._gsScope
    });
    function p(t, e, n, i, r, o) {
        var s, a, l, u, c, f, p, h, d = {}, _ = [], m = o || t[0];
        for (a in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        null == e && (e = 1),
        t[0])
            _.push(a);
        if (1 < t.length) {
            for (h = t[t.length - 1],
            p = !0,
            s = _.length; -1 < --s; )
                if (a = _[s],
                .05 < Math.abs(m[a] - h[a])) {
                    p = !1;
                    break
                }
            p && (t = t.concat(),
            o && t.unshift(o),
            t.push(t[1]),
            o = t[t.length - 3])
        }
        for (D.length = j.length = N.length = 0,
        s = _.length; -1 < --s; )
            a = _[s],
            B[a] = -1 !== r.indexOf("," + a + ","),
            d[a] = function(t, e, n, i) {
                var r, o, s, a, l, u, c = [];
                if (i)
                    for (o = (t = [i].concat(t)).length; -1 < --o; )
                        "string" == typeof (u = t[o][e]) && "=" === u.charAt(1) && (t[o][e] = i[e] + Number(u.charAt(0) + u.substr(2)));
                if ((r = t.length - 2) < 0)
                    c[0] = new F(t[0][e],0,0,t[0][e]);
                else {
                    for (o = 0; o < r; o++)
                        s = t[o][e],
                        a = t[o + 1][e],
                        c[o] = new F(s,0,0,a),
                        n && (l = t[o + 2][e],
                        D[o] = (D[o] || 0) + (a - s) * (a - s),
                        j[o] = (j[o] || 0) + (l - a) * (l - a));
                    c[o] = new F(t[o][e],0,0,t[o + 1][e])
                }
                return c
            }(t, a, B[a], o);
        for (s = D.length; -1 < --s; )
            D[s] = Math.sqrt(D[s]),
            j[s] = Math.sqrt(j[s]);
        if (!i) {
            for (s = _.length; -1 < --s; )
                if (B[a])
                    for (f = (l = d[_[s]]).length - 1,
                    u = 0; u < f; u++)
                        c = l[u + 1].da / j[u] + l[u].da / D[u] || 0,
                        N[u] = (N[u] || 0) + c * c;
            for (s = N.length; -1 < --s; )
                N[s] = Math.sqrt(N[s])
        }
        for (s = _.length,
        u = n ? 4 : 1; -1 < --s; ) {
            l = d[a = _[s]],
            P = O = T = x = O = T = P = w = b = v = y = g = R = L = I = M = void 0;
            for (var g, y, v, b, w, x, T, O, P, S = l, C = e, E = n, k = i, A = B[a], M = S.length - 1, I = 0, L = S[0].a, R = 0; R < M; R++)
                g = (b = S[I]).a,
                y = b.d,
                v = S[I + 1].d,
                T = A ? (T = D[R],
                P = ((O = j[R]) + T) * C * .25 / (!k && N[R] || .5),
                y - ((w = y - (y - g) * (k ? .5 * C : 0 !== T ? P / T : 0)) + (((P = y + (v - y) * (k ? .5 * C : 0 !== O ? P / O : 0)) - w) * (3 * T / (T + O) + .5) / 4 || 0))) : y - ((w = y - (y - g) * C * .5) + (P = y + (v - y) * C * .5)) / 2,
                P += T,
                b.c = O = w += T,
                b.b = 0 !== R ? L : L = b.a + .6 * (b.c - b.a),
                b.da = y - g,
                b.ca = O - g,
                b.ba = L - g,
                E ? (x = z(g, L, O, y),
                S.splice(I, 1, x[0], x[1], x[2], x[3]),
                I += 4) : I++,
                L = P;
            (b = S[I]).b = L,
            b.c = L + .4 * (b.d - L),
            b.da = b.d - b.a,
            b.ca = b.c - b.a,
            b.ba = L - b.a,
            E && (x = z(b.a, L, b.c, b.d),
            S.splice(I, 1, x[0], x[1], x[2], x[3])),
            p && (l.splice(0, u),
            l.splice(l.length - u, u))
        }
        return d
    }
    var O = n(0)
      , i = (O._gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
        function d(t) {
            O.SimpleTimeline.call(this, t);
            var e, n, i = this, r = i.vars;
            for (n in i._labels = {},
            i.autoRemoveChildren = !!r.autoRemoveChildren,
            i.smoothChildTiming = !!r.smoothChildTiming,
            i._sortChildren = !0,
            i._onUpdate = r.onUpdate,
            r)
                e = r[n],
                f(e) && -1 !== e.join("").indexOf("{self}") && (r[n] = i._swapSelfInParams(e));
            f(r.tweens) && i.add(r.tweens, 0, r.align, r.stagger)
        }
        function _(t) {
            var e, n = {};
            for (e in t)
                n[e] = t[e];
            return n
        }
        function m(t, e, n) {
            var i, r, o = t.cycle;
            for (i in o)
                r = o[i],
                t[i] = "function" == typeof r ? r(n, e[n], e) : r[n % r.length];
            delete t.cycle
        }
        function u(t, e, n, i) {
            var r = "immediateRender";
            return r in e || (e[r] = !(n && !1 === n[r] || i)),
            e
        }
        function g(t) {
            var h, d, _, m, g, y, v, b;
            return "function" == typeof t ? t : (d = (h = "object" == typeof t ? t : {
                each: t
            }).ease,
            _ = h.from || 0,
            m = h.base || 0,
            g = {},
            y = isNaN(_),
            v = h.axis,
            b = {
                center: .5,
                end: 1
            }[_] || 0,
            function(t, e, n) {
                var i, r, o, s, a, l, u, c, f = (n || h).length, p = g[f];
                if (!p) {
                    if (!(c = "auto" === h.grid ? 0 : (h.grid || [1 / 0])[0])) {
                        for (l = -1 / 0; l < (l = n[c++].getBoundingClientRect().left) && c < f; )
                            ;
                        c--
                    }
                    for (p = g[f] = [],
                    i = y ? Math.min(c, f) * b - .5 : _ % c,
                    r = y ? f * b / c - .5 : _ / c | 0,
                    u = 1 / (l = 0),
                    a = 0; a < f; a++)
                        s = a % c - i,
                        o = r - (a / c | 0),
                        p[a] = s = v ? Math.abs("y" === v ? o : s) : Math.sqrt(s * s + o * o),
                        l < s && (l = s),
                        s < u && (u = s);
                    p.max = l - u,
                    p.min = u,
                    p.v = f = h.amount || h.each * (f < c ? f - 1 : v ? "y" === v ? f / c : c : Math.max(c, f / c)) || 0,
                    p.b = f < 0 ? m - f : m
                }
                return f = (p[t] - p.min) / p.max,
                p.b + (d ? d.getRatio(f) : f) * p.v
            }
            )
        }
        var y = 1e-8
          , t = O.default._internals
          , e = d._internals = {}
          , v = t.isSelector
          , f = t.isArray
          , b = t.lazyTweens
          , w = t.lazyRender
          , s = O._gsScope._gsDefine.globals
          , r = e.pauseCallback = function() {}
          , t = d.prototype = new O.SimpleTimeline;
        return d.version = "2.1.3",
        d.distribute = g,
        t.constructor = d,
        t.kill()._gc = t._forcingPlayhead = t._hasPause = !1,
        t.to = function(t, e, n, i) {
            var r = n.repeat && s.TweenMax || O.default;
            return e ? this.add(new r(t,e,n), i) : this.set(t, n, i)
        }
        ,
        t.from = function(t, e, n, i) {
            return this.add((n.repeat && s.TweenMax || O.default).from(t, e, u(0, n)), i)
        }
        ,
        t.fromTo = function(t, e, n, i, r) {
            var o = i.repeat && s.TweenMax || O.default;
            return i = u(0, i, n),
            e ? this.add(o.fromTo(t, e, n, i), r) : this.set(t, i, r)
        }
        ,
        t.staggerTo = function(t, e, n, i, r, o, s, a) {
            var l, u, c = new d({
                onComplete: o,
                onCompleteParams: s,
                callbackScope: a,
                smoothChildTiming: this.smoothChildTiming
            }), f = g(n.stagger || i), p = n.startAt, h = n.cycle;
            for ("string" == typeof t && (t = O.default.selector(t) || t),
            v(t = t || []) && (t = function(t) {
                for (var e = [], n = t.length, i = 0; i !== n; e.push(t[i++]))
                    ;
                return e
            }(t)),
            u = 0; u < t.length; u++)
                l = _(n),
                p && (l.startAt = _(p),
                p.cycle && m(l.startAt, t, u)),
                h && (m(l, t, u),
                null != l.duration && (e = l.duration,
                delete l.duration)),
                c.to(t[u], e, l, f(u, t[u], t));
            return this.add(c, r)
        }
        ,
        t.staggerFrom = function(t, e, n, i, r, o, s, a) {
            return n.runBackwards = !0,
            this.staggerTo(t, e, u(0, n), i, r, o, s, a)
        }
        ,
        t.staggerFromTo = function(t, e, n, i, r, o, s, a, l) {
            return i.startAt = n,
            this.staggerTo(t, e, u(0, i, n), r, o, s, a, l)
        }
        ,
        t.call = function(t, e, n, i) {
            return this.add(O.default.delayedCall(0, t, e, n), i)
        }
        ,
        t.set = function(t, e, n) {
            return this.add(new O.default(t,0,u(0, e, null, !0)), n)
        }
        ,
        d.exportRoot = function(t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var n, i, r, o, s = new d(t), t = s._timeline;
            for (null == e && (e = !0),
            t._remove(s, !0),
            s._startTime = 0,
            s._rawPrevTime = s._time = s._totalTime = t._time,
            r = t._first; r; )
                o = r._next,
                e && r instanceof O.default && r.target === r.vars.onComplete || ((i = r._startTime - r._delay) < 0 && (n = 1),
                s.add(r, i)),
                r = o;
            return t.add(s, 0),
            n && s.totalDuration(),
            s
        }
        ,
        t.add = function(t, e, n, i) {
            var r, o, s, a, l, u, c = this;
            if ("number" != typeof e && (e = c._parseTimeOrLabel(e, 0, !0, t)),
            !(t instanceof O.Animation)) {
                if (t instanceof Array || t && t.push && f(t)) {
                    for (n = n || "normal",
                    i = i || 0,
                    r = e,
                    o = t.length,
                    s = 0; s < o; s++)
                        f(a = t[s]) && (a = new d({
                            tweens: a
                        })),
                        c.add(a, r),
                        "string" != typeof a && "function" != typeof a && ("sequence" === n ? r = a._startTime + a.totalDuration() / a._timeScale : "start" === n && (a._startTime -= a.delay())),
                        r += i;
                    return c._uncache(!0)
                }
                if ("string" == typeof t)
                    return c.addLabel(t, e);
                if ("function" != typeof t)
                    throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                t = O.default.delayedCall(0, t)
            }
            if (O.SimpleTimeline.prototype.add.call(c, t, e),
            (t._time || !t._duration && t._initted) && (r = (c.rawTime() - t._startTime) * t._timeScale,
            (!t._duration || 1e-5 < Math.abs(Math.max(0, Math.min(t.totalDuration(), r))) - t._totalTime) && t.render(r, !1, !1)),
            (c._gc || c._time === c._duration) && !c._paused && c._duration < c.duration())
                for (u = (l = c).rawTime() > t._startTime; l._timeline; )
                    u && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1),
                    l = l._timeline;
            return c
        }
        ,
        t.remove = function(t) {
            var e;
            if (t instanceof O.Animation)
                return this._remove(t, !1),
                e = t._timeline = t.vars.useFrames ? O.Animation._rootFramesTimeline : O.Animation._rootTimeline,
                t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale,
                this;
            if (t instanceof Array || t && t.push && f(t)) {
                for (var n = t.length; -1 < --n; )
                    this.remove(t[n]);
                return this
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
        }
        ,
        t._remove = function(t, e) {
            return O.SimpleTimeline.prototype._remove.call(this, t, e),
            this._last ? this._time > this.duration() && (this._time = this._duration,
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        t.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }
        ,
        t.insert = t.insertMultiple = function(t, e, n, i) {
            return this.add(t, e || 0, n, i)
        }
        ,
        t.appendMultiple = function(t, e, n, i) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), n, i)
        }
        ,
        t.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        }
        ,
        t.addPause = function(t, e, n, i) {
            n = O.default.delayedCall(0, r, n, i || this);
            return n.vars.onComplete = n.vars.onReverseComplete = e,
            n.data = "isPause",
            this._hasPause = !0,
            this.add(n, t)
        }
        ,
        t.removeLabel = function(t) {
            return delete this._labels[t],
            this
        }
        ,
        t.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }
        ,
        t._parseTimeOrLabel = function(t, e, n, i) {
            var r, o;
            if (i instanceof O.Animation && i.timeline === this)
                this.remove(i);
            else if (i && (i instanceof Array || i.push && f(i)))
                for (o = i.length; -1 < --o; )
                    i[o]instanceof O.Animation && i[o].timeline === this && this.remove(i[o]);
            if (r = "number" != typeof t || e ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0,
            "string" == typeof e)
                return this._parseTimeOrLabel(e, n && "number" == typeof t && null == this._labels[e] ? t - r : 0, n);
            if (e = e || 0,
            "string" != typeof t || !isNaN(t) && null == this._labels[t])
                null == t && (t = r);
            else {
                if (-1 === (o = t.indexOf("=")))
                    return null == this._labels[t] ? n ? this._labels[t] = r + e : e : this._labels[t] + e;
                e = parseInt(t.charAt(o - 1) + "1", 10) * Number(t.substr(o + 1)),
                t = 1 < o ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, n) : r
            }
            return Number(t) + e
        }
        ,
        t.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }
        ,
        t.stop = function() {
            return this.paused(!0)
        }
        ,
        t.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }
        ,
        t.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }
        ,
        t.render = function(t, e, n) {
            this._gc && this._enabled(!0, !1);
            var i, r, o, s, a, l, u, c, f = this, p = f._time, h = f._dirty ? f.totalDuration() : f._totalDuration, d = f._startTime, _ = f._timeScale, m = f._paused;
            if (p !== f._time && (t += f._time - p),
            f._hasPause && !f._forcingPlayhead && !e) {
                if (p < t)
                    for (i = f._first; i && i._startTime <= t && !l; )
                        i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === f._rawPrevTime || (l = i),
                        i = i._next;
                else
                    for (i = f._last; i && i._startTime >= t && !l; )
                        i._duration || "isPause" === i.data && 0 < i._rawPrevTime && (l = i),
                        i = i._prev;
                l && (f._time = f._totalTime = t = l._startTime,
                c = f._startTime + (f._reversed ? f._duration - t : t) / f._timeScale)
            }
            if (h - y <= t && 0 <= t)
                f._totalTime = f._time = h,
                f._reversed || f._hasPausedChild() || (r = !0,
                s = "onComplete",
                a = !!f._timeline.autoRemoveChildren,
                0 === f._duration && (t <= 0 && -y <= t || f._rawPrevTime < 0 || f._rawPrevTime === y) && f._rawPrevTime !== t && f._first && (a = !0,
                f._rawPrevTime > y && (s = "onReverseComplete"))),
                f._rawPrevTime = f._duration || !e || t || f._rawPrevTime === t ? t : y,
                t = h + 1e-4;
            else if (t < y)
                if (f._totalTime = f._time = 0,
                -y < t && (t = 0),
                (0 !== p || 0 === f._duration && f._rawPrevTime !== y && (0 < f._rawPrevTime || t < 0 && 0 <= f._rawPrevTime)) && (s = "onReverseComplete",
                r = f._reversed),
                t < 0)
                    f._active = !1,
                    f._timeline.autoRemoveChildren && f._reversed ? (a = r = !0,
                    s = "onReverseComplete") : 0 <= f._rawPrevTime && f._first && (a = !0),
                    f._rawPrevTime = t;
                else {
                    if (f._rawPrevTime = f._duration || !e || t || f._rawPrevTime === t ? t : y,
                    0 === t && r)
                        for (i = f._first; i && 0 === i._startTime; )
                            i._duration || (r = !1),
                            i = i._next;
                    t = 0,
                    f._initted || (a = !0)
                }
            else
                f._totalTime = f._time = f._rawPrevTime = t;
            if (f._time !== p && f._first || n || a || l) {
                if (f._initted || (f._initted = !0),
                f._active || !f._paused && f._time !== p && 0 < t && (f._active = !0),
                0 !== p || !f.vars.onStart || 0 === f._time && f._duration || e || f._callback("onStart"),
                p <= (u = f._time))
                    for (i = f._first; i && (o = i._next,
                    u === f._time && (!f._paused || m)); )
                        (i._active || i._startTime <= u && !i._paused && !i._gc) && (l === i && (f.pause(),
                        f._pauseTime = c),
                        i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)),
                        i = o;
                else
                    for (i = f._last; i && (o = i._prev,
                    u === f._time && (!f._paused || m)); ) {
                        if (i._active || i._startTime <= p && !i._paused && !i._gc) {
                            if (l === i) {
                                for (l = i._prev; l && l.endTime() > f._time; )
                                    l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, n),
                                    l = l._prev;
                                l = null,
                                f.pause(),
                                f._pauseTime = c
                            }
                            i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)
                        }
                        i = o
                    }
                !f._onUpdate || e || (b.length && w(),
                f._callback("onUpdate")),
                !s || f._gc || d !== f._startTime && _ === f._timeScale || (0 === f._time || h >= f.totalDuration()) && (r && (b.length && w(),
                f._timeline.autoRemoveChildren && f._enabled(!1, !1),
                f._active = !1),
                !e && f.vars[s] && f._callback(s))
            }
        }
        ,
        t._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof d && t._hasPausedChild())
                    return !0;
                t = t._next
            }
            return !1
        }
        ,
        t.getChildren = function(t, e, n, i) {
            i = i || -9999999999;
            for (var r = [], o = this._first, s = 0; o; )
                o._startTime < i || (o instanceof O.default ? !1 !== e && (r[s++] = o) : (!1 !== n && (r[s++] = o),
                !1 !== t && (s = (r = r.concat(o.getChildren(!0, e, n))).length))),
                o = o._next;
            return r
        }
        ,
        t.getTweensOf = function(t, e) {
            var n, i, r = this._gc, o = [], s = 0;
            for (r && this._enabled(!0, !0),
            i = (n = O.default.getTweensOf(t)).length; -1 < --i; )
                (n[i].timeline === this || e && this._contains(n[i])) && (o[s++] = n[i]);
            return r && this._enabled(!1, !0),
            o
        }
        ,
        t.recent = function() {
            return this._recent
        }
        ,
        t._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return !0;
                e = e.timeline
            }
            return !1
        }
        ,
        t.shiftChildren = function(t, e, n) {
            n = n || 0;
            for (var i, r = this._first, o = this._labels; r; )
                r._startTime >= n && (r._startTime += t),
                r = r._next;
            if (e)
                for (i in o)
                    o[i] >= n && (o[i] += t);
            return this._uncache(!0)
        }
        ,
        t._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var n = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), i = n.length, r = !1; -1 < --i; )
                n[i]._kill(t, e) && (r = !0);
            return r
        }
        ,
        t.clear = function(t) {
            var e = this.getChildren(!1, !0, !0)
              , n = e.length;
            for (this._time = this._totalTime = 0; -1 < --n; )
                e[n]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        t.invalidate = function() {
            for (var t = this._first; t; )
                t.invalidate(),
                t = t._next;
            return O.Animation.prototype.invalidate.call(this)
        }
        ,
        t._enabled = function(t, e) {
            if (t === this._gc)
                for (var n = this._first; n; )
                    n._enabled(t, !0),
                    n = n._next;
            return O.SimpleTimeline.prototype._enabled.call(this, t, e)
        }
        ,
        t.totalTime = function(t, e, n) {
            this._forcingPlayhead = !0;
            var i = O.Animation.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            i
        }
        ,
        t.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        t.totalDuration = function(t) {
            if (arguments.length)
                return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
            if (this._dirty) {
                for (var e, n, i = 0, r = this, o = r._last, s = 999999999999; o; )
                    e = o._prev,
                    o._dirty && o.totalDuration(),
                    o._startTime > s && r._sortChildren && !o._paused && !r._calculatingDuration ? (r._calculatingDuration = 1,
                    r.add(o, o._startTime - o._delay),
                    r._calculatingDuration = 0) : s = o._startTime,
                    o._startTime < 0 && !o._paused && (i -= o._startTime,
                    r._timeline.smoothChildTiming && (r._startTime += o._startTime / r._timeScale,
                    r._time -= o._startTime,
                    r._totalTime -= o._startTime,
                    r._rawPrevTime -= o._startTime),
                    r.shiftChildren(-o._startTime, !1, -9999999999),
                    s = 0),
                    i < (n = o._startTime + o._totalDuration / o._timeScale) && (i = n),
                    o = e;
                r._duration = r._totalDuration = i,
                r._dirty = !1
            }
            return this._totalDuration
        }
        ,
        t.paused = function(t) {
            if (!1 === t && this._paused)
                for (var e = this._first; e; )
                    e._startTime === this._time && "isPause" === e.data && (e._rawPrevTime = 0),
                    e = e._next;
            return O.Animation.prototype.paused.apply(this, arguments)
        }
        ,
        t.usesFrames = function() {
            for (var t = this._timeline; t._timeline; )
                t = t._timeline;
            return t === O.Animation._rootFramesTimeline
        }
        ,
        t.rawTime = function(t) {
            return t && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
        }
        ,
        d
    }, !0),
    O.globals.TimelineLite)
      , r = (O._gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function() {
        function t(t) {
            i.call(this, t),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = !!this.vars.yoyo,
            this._dirty = !0
        }
        var C = 1e-8
          , e = O.default._internals
          , E = e.lazyTweens
          , k = e.lazyRender
          , a = O._gsScope._gsDefine.globals
          , l = new O.Ease(null,null,1,0)
          , e = t.prototype = new i;
        return e.constructor = t,
        e.kill()._gc = !1,
        t.version = "2.1.3",
        e.invalidate = function() {
            return this._yoyo = !!this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        }
        ,
        e.addCallback = function(t, e, n, i) {
            return this.add(O.default.delayedCall(0, t, n, i), e)
        }
        ,
        e.removeCallback = function(t, e) {
            if (t)
                if (null == e)
                    this._kill(null, t);
                else
                    for (var n = this.getTweensOf(t, !1), i = n.length, r = this._parseTimeOrLabel(e); -1 < --i; )
                        n[i]._startTime === r && n[i]._enabled(!1, !1);
            return this
        }
        ,
        e.removePause = function(t) {
            return this.removeCallback(i._internals.pauseCallback, t)
        }
        ,
        e.tweenTo = function(t, e) {
            e = e || {};
            var n, i, r, o = {
                ease: l,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1
            }, s = e.repeat && a.TweenMax || O.default;
            for (i in e)
                o[i] = e[i];
            return o.time = this._parseTimeOrLabel(t),
            n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001,
            r = new s(this,n,o),
            o.onStart = function() {
                r.target.paused(!0),
                r.vars.time === r.target.time() || n !== r.duration() || r.isFromTo || r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale).render(r.time(), !0, !0),
                e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || r, e.onStartParams || [])
            }
            ,
            r
        }
        ,
        e.tweenFromTo = function(t, e, n) {
            n = n || {},
            t = this._parseTimeOrLabel(t),
            n.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            },
            n.immediateRender = !1 !== n.immediateRender;
            e = this.tweenTo(e, n);
            return e.isFromTo = 1,
            e.duration(Math.abs(e.vars.time - t) / this._timeScale || .001)
        }
        ,
        e.render = function(t, e, n) {
            this._gc && this._enabled(!0, !1);
            var i, r, o, s, a, l, u, c, f = this, p = f._time, h = f._dirty ? f.totalDuration() : f._totalDuration, d = f._duration, _ = f._totalTime, m = f._startTime, g = f._timeScale, y = f._rawPrevTime, v = f._paused, b = f._cycle;
            if (p !== f._time && (t += f._time - p),
            h - C <= t && 0 <= t)
                f._locked || (f._totalTime = h,
                f._cycle = f._repeat),
                f._reversed || f._hasPausedChild() || (r = !0,
                s = "onComplete",
                a = !!f._timeline.autoRemoveChildren,
                0 === f._duration && (t <= 0 && -C <= t || y < 0 || y === C) && y !== t && f._first && (a = !0,
                C < y && (s = "onReverseComplete"))),
                f._rawPrevTime = f._duration || !e || t || f._rawPrevTime === t ? t : C,
                f._yoyo && 1 & f._cycle ? f._time = t = 0 : t = (f._time = d) + 1e-4;
            else if (t < C)
                if (f._locked || (f._totalTime = f._cycle = 0),
                f._time = 0,
                -C < t && (t = 0),
                (0 !== p || 0 === d && y !== C && (0 < y || t < 0 && 0 <= y) && !f._locked) && (s = "onReverseComplete",
                r = f._reversed),
                t < 0)
                    f._active = !1,
                    f._timeline.autoRemoveChildren && f._reversed ? (a = r = !0,
                    s = "onReverseComplete") : 0 <= y && f._first && (a = !0),
                    f._rawPrevTime = t;
                else {
                    if (f._rawPrevTime = d || !e || t || f._rawPrevTime === t ? t : C,
                    0 === t && r)
                        for (i = f._first; i && 0 === i._startTime; )
                            i._duration || (r = !1),
                            i = i._next;
                    t = 0,
                    f._initted || (a = !0)
                }
            else
                0 === d && y < 0 && (a = !0),
                f._time = f._rawPrevTime = t,
                f._locked || (f._totalTime = t,
                0 !== f._repeat && (w = d + f._repeatDelay,
                f._cycle = f._totalTime / w >> 0,
                f._cycle && f._cycle === f._totalTime / w && _ <= t && f._cycle--,
                f._time = f._totalTime - f._cycle * w,
                f._yoyo && 1 & f._cycle && (f._time = d - f._time),
                f._time > d ? t = (f._time = d) + 1e-4 : f._time < 0 ? f._time = t = 0 : t = f._time));
            if (f._hasPause && !f._forcingPlayhead && !e) {
                if (p < (t = f._time) || f._repeat && b !== f._cycle)
                    for (i = f._first; i && i._startTime <= t && !l; )
                        i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === f._rawPrevTime || (l = i),
                        i = i._next;
                else
                    for (i = f._last; i && i._startTime >= t && !l; )
                        i._duration || "isPause" === i.data && 0 < i._rawPrevTime && (l = i),
                        i = i._prev;
                l && (c = f._startTime + (f._reversed ? f._duration - l._startTime : l._startTime) / f._timeScale,
                l._startTime < d && (f._time = f._rawPrevTime = t = l._startTime,
                f._totalTime = t + f._cycle * (f._totalDuration + f._repeatDelay)))
            }
            if (f._cycle !== b && !f._locked) {
                var w = f._yoyo && 0 != (1 & b)
                  , x = w === (f._yoyo && 0 != (1 & f._cycle))
                  , T = f._totalTime
                  , O = f._cycle
                  , P = f._rawPrevTime
                  , S = f._time;
                if (f._totalTime = b * d,
                f._cycle < b ? w = !w : f._totalTime += d,
                f._time = p,
                f._rawPrevTime = 0 === d ? y - 1e-4 : y,
                f._cycle = b,
                f._locked = !0,
                f.render(p = w ? 0 : d, e, 0 === d),
                e || f._gc || f.vars.onRepeat && (f._cycle = O,
                f._locked = !1,
                f._callback("onRepeat")),
                p !== f._time)
                    return;
                if (x && (f._cycle = b,
                f._locked = !0,
                f.render(p = w ? d + 1e-4 : -1e-4, !0, !1)),
                f._locked = !1,
                f._paused && !v)
                    return;
                f._time = S,
                f._totalTime = T,
                f._cycle = O,
                f._rawPrevTime = P
            }
            if (f._time !== p && f._first || n || a || l) {
                if (f._initted || (f._initted = !0),
                f._active || !f._paused && f._totalTime !== _ && 0 < t && (f._active = !0),
                0 !== _ || !f.vars.onStart || 0 === f._totalTime && f._totalDuration || e || f._callback("onStart"),
                p <= (u = f._time))
                    for (i = f._first; i && (o = i._next,
                    u === f._time && (!f._paused || v)); )
                        (i._active || i._startTime <= f._time && !i._paused && !i._gc) && (l === i && (f.pause(),
                        f._pauseTime = c),
                        i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)),
                        i = o;
                else
                    for (i = f._last; i && (o = i._prev,
                    u === f._time && (!f._paused || v)); ) {
                        if (i._active || i._startTime <= p && !i._paused && !i._gc) {
                            if (l === i) {
                                for (l = i._prev; l && l.endTime() > f._time; )
                                    l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, n),
                                    l = l._prev;
                                l = null,
                                f.pause(),
                                f._pauseTime = c
                            }
                            i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)
                        }
                        i = o
                    }
                !f._onUpdate || e || (E.length && k(),
                f._callback("onUpdate")),
                !s || f._locked || f._gc || m !== f._startTime && g === f._timeScale || (0 === f._time || h >= f.totalDuration()) && (r && (E.length && k(),
                f._timeline.autoRemoveChildren && f._enabled(!1, !1),
                f._active = !1),
                !e && f.vars[s] && f._callback(s))
            } else
                _ !== f._totalTime && f._onUpdate && !e && f._callback("onUpdate")
        }
        ,
        e.getActive = function(t, e, n) {
            for (var i, r = [], o = this.getChildren(t || null == t, e || null == t, !!n), s = 0, a = o.length, l = 0; l < a; l++)
                (i = o[l]).isActive() && (r[s++] = i);
            return r
        }
        ,
        e.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            for (var e = this.getLabelsArray(), n = e.length, i = 0; i < n; i++)
                if (e[i].time > t)
                    return e[i].name;
            return null
        }
        ,
        e.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), n = e.length; -1 < --n; )
                if (e[n].time < t)
                    return e[n].name;
            return null
        }
        ,
        e.getLabelsArray = function() {
            var t, e = [], n = 0;
            for (t in this._labels)
                e[n++] = {
                    time: this._labels[t],
                    name: t
                };
            return e.sort(function(t, e) {
                return t.time - e.time
            }),
            e
        }
        ,
        e.invalidate = function() {
            return this._locked = !1,
            i.prototype.invalidate.call(this)
        }
        ,
        e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
        }
        ,
        e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
        }
        ,
        e.totalDuration = function(t) {
            return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (i.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        e.time = function(t, e) {
            if (!arguments.length)
                return this._time;
            this._dirty && this.totalDuration();
            var n = this._duration
              , i = this._cycle
              , r = i * (n + this._repeatDelay);
            return n < t && (t = n),
            this.totalTime(this._yoyo && 1 & i ? n - t + r : this._repeat ? t + r : t, e)
        }
        ,
        e.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        e.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        e.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + C)
        }
        ,
        t
    }, !0),
    O.globals.TimelineMax)
      , e = (O._gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
        function _(t) {
            for (var e = [], n = t.length, i = 0; i !== n; e.push(t[i++]))
                ;
            return e
        }
        function m(t, e, n) {
            var i, r, o = t.cycle;
            for (i in o)
                r = o[i],
                t[i] = "function" == typeof r ? r(n, e[n], e) : r[n % r.length];
            delete t.cycle
        }
        function g(t) {
            var h, d, _, m, g, y, v, b;
            return "function" == typeof t ? t : (d = (h = "object" == typeof t ? t : {
                each: t
            }).ease,
            _ = h.from || 0,
            m = h.base || 0,
            g = {},
            y = isNaN(_),
            v = h.axis,
            b = {
                center: .5,
                end: 1
            }[_] || 0,
            function(t, e, n) {
                var i, r, o, s, a, l, u, c, f = (n || h).length, p = g[f];
                if (!p) {
                    if (!(c = "auto" === h.grid ? 0 : (h.grid || [1 / 0])[0])) {
                        for (l = -1 / 0; l < (l = n[c++].getBoundingClientRect().left) && c < f; )
                            ;
                        c--
                    }
                    for (p = g[f] = [],
                    i = y ? Math.min(c, f) * b - .5 : _ % c,
                    r = y ? f * b / c - .5 : _ / c | 0,
                    u = 1 / (l = 0),
                    a = 0; a < f; a++)
                        s = a % c - i,
                        o = r - (a / c | 0),
                        p[a] = s = v ? Math.abs("y" === v ? o : s) : Math.sqrt(s * s + o * o),
                        l < s && (l = s),
                        s < u && (u = s);
                    p.max = l - u,
                    p.min = u,
                    p.v = f = h.amount || h.each * (f < c ? f - 1 : v ? "y" === v ? f / c : c : Math.max(c, f / c)) || 0,
                    p.b = f < 0 ? m - f : m
                }
                return f = (p[t] - p.min) / p.max,
                p.b + (d ? d.getRatio(f) : f) * p.v
            }
            )
        }
        function y(t, e, n) {
            O.default.call(this, t, e, n),
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._repeat && this._uncache(!0),
            this.render = y.prototype.render
        }
        function o(t, e) {
            for (var n = [], i = 0, r = t._first; r; )
                r instanceof O.default ? n[i++] = r : (e && (n[i++] = r),
                i = (n = n.concat(o(r, e))).length),
                r = r._next;
            return n
        }
        function i(t, e, n, i) {
            e = !1 !== e,
            n = !1 !== n;
            for (var r, o, s = c(i = !1 !== i), a = e && n && i, l = s.length; -1 < --l; )
                o = s[l],
                (a || o instanceof O.SimpleTimeline || (r = o.target === o.vars.onComplete) && n || e && !r) && o.paused(t)
        }
        var v = 1e-8
          , b = O.default._internals
          , w = b.isSelector
          , x = b.isArray
          , t = y.prototype = O.default.to({}, .1, {})
          , T = []
          , c = (y.version = "2.1.3",
        t.constructor = y,
        t.kill()._gc = !1,
        y.killTweensOf = y.killDelayedCallsTo = O.default.killTweensOf,
        y.getTweensOf = O.default.getTweensOf,
        y.lagSmoothing = O.default.lagSmoothing,
        y.ticker = O.default.ticker,
        y.render = O.default.render,
        y.distribute = g,
        t.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._yoyoEase = null,
            this._uncache(!0),
            O.default.prototype.invalidate.call(this)
        }
        ,
        t.updateTo = function(t, e) {
            var n, i = this, r = i.ratio, o = i.vars.immediateRender || t.immediateRender;
            for (n in e && i._startTime < i._timeline._time && (i._startTime = i._timeline._time,
            i._uncache(!1),
            i._gc ? i._enabled(!0, !1) : i._timeline.insert(i, i._startTime - i._delay)),
            t)
                i.vars[n] = t[n];
            if (i._initted || o)
                if (e)
                    i._initted = !1,
                    o && i.render(0, !0, !0);
                else if (i._gc && i._enabled(!0, !1),
                i._notifyPluginsOfEnabled && i._firstPT && O.default._onPluginEvent("_onDisable", i),
                .998 < i._time / i._duration) {
                    e = i._totalTime;
                    i.render(0, !0, !1),
                    i._initted = !1,
                    i.render(e, !0, !1)
                } else if (i._initted = !1,
                i._init(),
                0 < i._time || o)
                    for (var s, a = 1 / (1 - r), l = i._firstPT; l; )
                        s = l.s + l.c,
                        l.c *= a,
                        l.s = s - l.c,
                        l = l._next;
            return i
        }
        ,
        t.render = function(t, e, n) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var i, r, o, s, a, l, u, c = this, f = c._dirty ? c.totalDuration() : c._totalDuration, p = c._time, h = c._totalTime, d = c._cycle, _ = c._duration, m = c._rawPrevTime;
            if (f - v <= t && 0 <= t ? (c._totalTime = f,
            c._cycle = c._repeat,
            c._yoyo && 0 != (1 & c._cycle) ? (c._time = 0,
            c.ratio = c._ease._calcEnd ? c._ease.getRatio(0) : 0) : (c._time = _,
            c.ratio = c._ease._calcEnd ? c._ease.getRatio(1) : 1),
            c._reversed || (i = !0,
            r = "onComplete",
            n = n || c._timeline.autoRemoveChildren),
            0 !== _ || !c._initted && c.vars.lazy && !n || (c._startTime === c._timeline._duration && (t = 0),
            (m < 0 || t <= 0 && -v <= t || m === v && "isPause" !== c.data) && m !== t && (n = !0,
            v < m && (r = "onReverseComplete")),
            c._rawPrevTime = l = !e || t || m === t ? t : v)) : t < v ? (c._totalTime = c._time = c._cycle = 0,
            c.ratio = c._ease._calcEnd ? c._ease.getRatio(0) : 0,
            (0 !== h || 0 === _ && 0 < m) && (r = "onReverseComplete",
            i = c._reversed),
            -v < t ? t = 0 : t < 0 && (c._active = !1,
            0 !== _ || !c._initted && c.vars.lazy && !n || (0 <= m && (n = !0),
            c._rawPrevTime = l = !e || t || m === t ? t : v)),
            c._initted || (n = !0)) : (c._totalTime = c._time = t,
            0 !== c._repeat && (f = _ + c._repeatDelay,
            c._cycle = c._totalTime / f >> 0,
            0 !== c._cycle && c._cycle === c._totalTime / f && h <= t && c._cycle--,
            c._time = c._totalTime - c._cycle * f,
            c._yoyo && 0 != (1 & c._cycle) && (c._time = _ - c._time,
            (u = c._yoyoEase || c.vars.yoyoEase) && (c._yoyoEase || (!0 !== u || c._initted ? c._yoyoEase = u = !0 === u ? c._ease : u instanceof O.Ease ? u : O.Ease.map[u] : (u = c.vars.ease,
            c._yoyoEase = u = u ? u instanceof O.Ease ? u : "function" == typeof u ? new O.Ease(u,c.vars.easeParams) : O.Ease.map[u] || O.default.defaultEase : O.default.defaultEase)),
            c.ratio = u ? 1 - u.getRatio((_ - c._time) / _) : 0)),
            c._time > _ ? c._time = _ : c._time < 0 && (c._time = 0)),
            c._easeType && !u ? (f = c._time / _,
            (1 === (s = c._easeType) || 3 === s && .5 <= f) && (f = 1 - f),
            3 === s && (f *= 2),
            1 === (a = c._easePower) ? f *= f : 2 === a ? f *= f * f : 3 === a ? f *= f * f * f : 4 === a && (f *= f * f * f * f),
            c.ratio = 1 === s ? 1 - f : 2 === s ? f : c._time / _ < .5 ? f / 2 : 1 - f / 2) : u || (c.ratio = c._ease.getRatio(c._time / _))),
            p !== c._time || n || d !== c._cycle) {
                if (!c._initted) {
                    if (c._init(),
                    !c._initted || c._gc)
                        return;
                    if (!n && c._firstPT && (!1 !== c.vars.lazy && c._duration || c.vars.lazy && !c._duration))
                        return c._time = p,
                        c._totalTime = h,
                        c._rawPrevTime = m,
                        c._cycle = d,
                        b.lazyTweens.push(c),
                        void (c._lazy = [t, e]);
                    !c._time || i || u ? i && this._ease._calcEnd && !u && (c.ratio = c._ease.getRatio(0 === c._time ? 0 : 1)) : c.ratio = c._ease.getRatio(c._time / _)
                }
                for (!1 !== c._lazy && (c._lazy = !1),
                c._active || !c._paused && c._time !== p && 0 <= t && (c._active = !0),
                0 === h && (2 === c._initted && 0 < t && c._init(),
                c._startAt && (0 <= t ? c._startAt.render(t, !0, n) : r = r || "_dummyGS"),
                !c.vars.onStart || 0 === c._totalTime && 0 !== _ || e || c._callback("onStart")),
                o = c._firstPT; o; )
                    o.f ? o.t[o.p](o.c * c.ratio + o.s) : o.t[o.p] = o.c * c.ratio + o.s,
                    o = o._next;
                c._onUpdate && (t < 0 && c._startAt && c._startTime && c._startAt.render(t, !0, n),
                e || c._totalTime === h && !r || c._callback("onUpdate")),
                c._cycle === d || e || c._gc || c.vars.onRepeat && c._callback("onRepeat"),
                !r || c._gc && !n || (t < 0 && c._startAt && !c._onUpdate && c._startTime && c._startAt.render(t, !0, n),
                i && (c._timeline.autoRemoveChildren && c._enabled(!1, !1),
                c._active = !1),
                !e && c.vars[r] && c._callback(r),
                0 === _ && c._rawPrevTime === v && l !== v && (c._rawPrevTime = 0))
            } else
                h !== c._totalTime && c._onUpdate && !e && c._callback("onUpdate")
        }
        ,
        y.to = function(t, e, n) {
            return new y(t,e,n)
        }
        ,
        y.from = function(t, e, n) {
            return n.runBackwards = !0,
            n.immediateRender = 0 != n.immediateRender,
            new y(t,e,n)
        }
        ,
        y.fromTo = function(t, e, n, i) {
            return i.startAt = n,
            i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender,
            new y(t,e,i)
        }
        ,
        y.staggerTo = y.allTo = function(t, e, n, i, r, o, s) {
            var a, l, u, c, f = [], p = g(n.stagger || i), h = n.cycle, d = (n.startAt || T).cycle;
            for (x(t) || ("string" == typeof t && (t = O.default.selector(t) || t),
            w(t) && (t = _(t))),
            a = (t = t || []).length - 1,
            u = 0; u <= a; u++) {
                for (c in l = {},
                n)
                    l[c] = n[c];
                if (h && (m(l, t, u),
                null != l.duration && (e = l.duration,
                delete l.duration)),
                d) {
                    for (c in d = l.startAt = {},
                    n.startAt)
                        d[c] = n.startAt[c];
                    m(l.startAt, t, u)
                }
                l.delay = p(u, t[u], t) + (l.delay || 0),
                u === a && r && (l.onComplete = function() {
                    n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments),
                    r.apply(s || n.callbackScope || this, o || T)
                }
                ),
                f[u] = new y(t[u],e,l)
            }
            return f
        }
        ,
        y.staggerFrom = y.allFrom = function(t, e, n, i, r, o, s) {
            return n.runBackwards = !0,
            n.immediateRender = 0 != n.immediateRender,
            y.staggerTo(t, e, n, i, r, o, s)
        }
        ,
        y.staggerFromTo = y.allFromTo = function(t, e, n, i, r, o, s, a) {
            return i.startAt = n,
            i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender,
            y.staggerTo(t, e, i, r, o, s, a)
        }
        ,
        y.delayedCall = function(t, e, n, i, r) {
            return new y(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: n,
                callbackScope: i,
                onReverseComplete: e,
                onReverseCompleteParams: n,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }
        ,
        y.set = function(t, e) {
            return new y(t,0,e)
        }
        ,
        y.isTweening = function(t) {
            return 0 < O.default.getTweensOf(t, !0).length
        }
        ,
        y.getAllTweens = function(t) {
            return o(O.Animation._rootTimeline, t).concat(o(O.Animation._rootFramesTimeline, t))
        }
        );
        y.killAll = function(t, e, n, i) {
            null == e && (e = !0),
            null == n && (n = !0);
            for (var r, o, s = c(0 != i), a = s.length, l = e && n && i, u = 0; u < a; u++)
                o = s[u],
                (l || o instanceof O.SimpleTimeline || (r = o.target === o.vars.onComplete) && n || e && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
        }
        ,
        y.killChildTweensOf = function(t, e) {
            if (null != t) {
                var n, i, r, o, s, a = b.tweenLookup;
                if ("string" == typeof t && (t = O.default.selector(t) || t),
                w(t) && (t = _(t)),
                x(t))
                    for (o = t.length; -1 < --o; )
                        y.killChildTweensOf(t[o], e);
                else {
                    for (r in n = [],
                    a)
                        for (i = a[r].target.parentNode; i; )
                            i === t && (n = n.concat(a[r].tweens)),
                            i = i.parentNode;
                    for (s = n.length,
                    o = 0; o < s; o++)
                        e && n[o].totalTime(n[o].totalDuration()),
                        n[o]._enabled(!1, !1)
                }
            }
        }
        ;
        return y.pauseAll = function(t, e, n) {
            i(!0, t, e, n)
        }
        ,
        y.resumeAll = function(t, e, n) {
            i(!1, t, e, n)
        }
        ,
        y.globalTimeScale = function(t) {
            var e = O.Animation._rootTimeline
              , n = O.default.ticker.time;
            return arguments.length ? (e._startTime = n - (n - e._startTime) * e._timeScale / (t = t || v),
            e = O.Animation._rootFramesTimeline,
            n = O.default.ticker.frame,
            e._startTime = n - (n - e._startTime) * e._timeScale / t,
            e._timeScale = O.Animation._rootTimeline._timeScale = t) : e._timeScale
        }
        ,
        t.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this.duration() ? this._time / this._duration : this.ratio
        }
        ,
        t.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }
        ,
        t.time = function(t, e) {
            if (!arguments.length)
                return this._time;
            this._dirty && this.totalDuration();
            var n = this._duration
              , i = this._cycle
              , r = i * (n + this._repeatDelay);
            return n < t && (t = n),
            this.totalTime(this._yoyo && 1 & i ? n - t + r : this._repeat ? t + r : t, e)
        }
        ,
        t.duration = function(t) {
            return arguments.length ? O.Animation.prototype.duration.call(this, t) : this._duration
        }
        ,
        t.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        t.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        t.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        t.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        y
    }, !0),
    O.globals.TweenMax)
      , o = n(9)
      , s = O._gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function(t, e, n, i) {
            var r, o;
            if ("function" != typeof t.setAttribute)
                return !1;
            for (r in e)
                "function" == typeof (o = e[r]) && (o = o(i, t)),
                this._addTween(t, "setAttribute", t.getAttribute(r) + "", o + "", r, !1, r),
                this._overwriteProps.push(r);
            return !0
        }
    })
      , a = O._gsScope._gsDefine.plugin({
        propName: "roundProps",
        version: "1.7.0",
        priority: -1,
        API: 2,
        init: function(t, e, n) {
            return this._tween = n,
            !0
        }
    })
      , n = a.prototype
      , l = (n._onInitAllProps = function() {
        var t, e, n, i, r = this._tween, o = r.vars.roundProps, s = {}, a = r._propLookup.roundProps;
        if ("object" != typeof o || o.push)
            for (n = (o = "string" == typeof o ? o.split(",") : o).length; -1 < --n; )
                s[o[n]] = Math.round;
        else
            for (i in o)
                s[i] = function(e) {
                    var n = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
                    return function(t) {
                        return (Math.round(t / e) * e * n | 0) / n
                    }
                }(o[i]);
        for (i in s)
            for (t = r._firstPT; t; ) {
                if (e = t._next,
                t.pg)
                    t.t._mod(s);
                else if (t.n === i)
                    if (2 === t.f && t.t)
                        for (var l = t.t._firstPT, u = s[i]; l; )
                            l.f || l.blob || (l.m = u || Math.round),
                            l = l._next;
                    else
                        this._add(t.t, i, t.s, t.c, s[i]),
                        e && (e._prev = t._prev),
                        t._prev ? t._prev._next = e : r._firstPT === t && (r._firstPT = e),
                        t._next = t._prev = null,
                        r._propLookup[i] = a;
                t = e
            }
        return !1
    }
    ,
    n._add = function(t, e, n, i, r) {
        this._addTween(t, e, n, n + i, e, r || Math.round),
        this._overwriteProps.push(e)
    }
    ,
    O._gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.1",
        API: 2,
        init: function(t, e, n, i) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var r, o, s, a, l, u = !0 === e.useRadians ? 2 * Math.PI : 360;
            for (r in e)
                "useRadians" !== r && (o = (l = ((a = "function" == typeof (a = e[r]) ? a(i, t) : a) + "").split("_"))[0],
                s = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()),
                a = (a = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0) - s,
                l.length && (-1 !== (o = l.join("_")).indexOf("short") && (a %= u) !== a % (u / 2) && (a = a < 0 ? a + u : a - u),
                -1 !== o.indexOf("_cw") && a < 0 ? a = (a + 9999999999 * u) % u - (a / u | 0) * u : -1 !== o.indexOf("ccw") && 0 < a && (a = (a - 9999999999 * u) % u - (a / u | 0) * u)),
                (1e-6 < a || a < -1e-6) && (this._addTween(t, r, s, s + a, r),
                this._overwriteProps.push(r)));
            return !0
        },
        set: function(t) {
            var e;
            if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e; )
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                    e = e._next
        }
    }))
      , P = (l._autoCSS = !0,
    180 / Math.PI)
      , D = []
      , j = []
      , N = []
      , B = {}
      , u = O._gsScope._gsDefine.globals
      , F = function(t, e, n, i) {
        n === i && (n = i - (i - e) / 1e6),
        t === e && (e = t + (n - t) / 1e6),
        this.a = t,
        this.b = e,
        this.c = n,
        this.d = i,
        this.da = i - t,
        this.ca = n - t,
        this.ba = e - t
    }
      , z = function(t, e, n, i) {
        var r = {
            a: t
        }
          , o = {}
          , s = {}
          , a = {
            c: i
        }
          , l = (t + e) / 2
          , e = (e + n) / 2
          , n = (n + i) / 2
          , u = (l + e) / 2
          , e = (e + n) / 2
          , c = (e - u) / 8;
        return r.b = l + (t - l) / 4,
        o.b = u + c,
        r.c = o.a = (r.b + o.b) / 2,
        o.c = s.a = (u + e) / 2,
        s.b = e - c,
        a.b = n + (i - n) / 4,
        s.c = a.a = (s.b + a.b) / 2,
        [r, o, s, a]
    }
      , m = O._gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.9",
        API: 2,
        global: !0,
        init: function(t, e, n) {
            this._target = t,
            e instanceof Array && (e = {
                values: e
            }),
            this._func = {},
            this._mod = {},
            this._props = [],
            this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
            var i, r, o, s, a, l = e.values || [], u = {}, c = l[0], f = e.autoRotate || n.vars.orientToBezier;
            for (i in this._autoRotate = f ? f instanceof Array ? f : [["x", "y", "rotation", !0 !== f && Number(f) || 0]] : null,
            c)
                this._props.push(i);
            for (o = this._props.length; -1 < --o; )
                i = this._props[o],
                this._overwriteProps.push(i),
                r = this._func[i] = "function" == typeof t[i],
                u[i] = r ? t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(t[i]),
                a || u[i] !== l[0][i] && (a = u);
            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? p(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : function(t, e, n) {
                var i, r, o, s, a, l, u, c, f, p, h, d = {}, _ = "cubic" === (e = e || "soft") ? 3 : 2, m = "soft" === e, g = [];
                if (null == (t = m && n ? [n].concat(t) : t) || t.length < 1 + _)
                    throw "invalid Bezier data";
                for (f in t[0])
                    g.push(f);
                for (l = g.length; -1 < --l; ) {
                    for (d[f = g[l]] = a = [],
                    c = t.length,
                    u = p = 0; u < c; u++)
                        i = null == n ? t[u][f] : "string" == typeof (h = t[u][f]) && "=" === h.charAt(1) ? n[f] + Number(h.charAt(0) + h.substr(2)) : Number(h),
                        m && 1 < u && u < c - 1 && (a[p++] = (i + a[p - 2]) / 2),
                        a[p++] = i;
                    for (c = p - _ + 1,
                    u = p = 0; u < c; u += _)
                        i = a[u],
                        r = a[u + 1],
                        o = a[u + 2],
                        s = 2 == _ ? 0 : a[u + 3],
                        a[p++] = h = 3 == _ ? new F(i,r,o,s) : new F(i,(2 * r + i) / 3,(2 * r + o) / 3,o);
                    a.length = p
                }
                return d
            }(l, e.type, u),
            this._segCount = this._beziers[i].length,
            this._timeRes && (c = function(t, e) {
                var n, i, r, o, s = [], a = [], l = 0, u = 0, c = (e = e >> 0 || 6) - 1, f = [], p = [];
                for (n in t) {
                    w = b = v = y = w = g = m = _ = d = h = v = S = P = void 0;
                    for (var h, d, _, m, g, y, v, b, w, x = t[n], T = s, O = e, P = 1 / O, S = x.length; -1 < --S; )
                        for (d = (b = x[S]).a,
                        _ = b.d - d,
                        m = b.c - d,
                        g = b.b - d,
                        h = 0,
                        y = 1; y <= O; y++)
                            v = h - (h = ((w = P * y) * w * _ + 3 * (v = 1 - w) * (w * m + v * g)) * w),
                            T[w = S * O + y - 1] = (T[w] || 0) + v * v
                }
                for (r = s.length,
                i = 0; i < r; i++)
                    l += Math.sqrt(s[i]),
                    p[o = i % e] = l,
                    o == c && (u += l,
                    f[o = i / e >> 0] = p,
                    a[o] = u,
                    l = 0,
                    p = []);
                return {
                    length: u,
                    lengths: a,
                    segments: f
                }
            }(this._beziers, this._timeRes),
            this._length = c.length,
            this._lengths = c.lengths,
            this._segments = c.segments,
            this._l1 = this._li = this._s1 = this._si = 0,
            this._l2 = this._lengths[0],
            this._curSeg = this._segments[0],
            this._s2 = this._curSeg[0],
            this._prec = 1 / this._curSeg.length),
            f = this._autoRotate)
                for (this._initialRotations = [],
                f[0]instanceof Array || (this._autoRotate = f = [f]),
                o = f.length; -1 < --o; ) {
                    for (s = 0; s < 3; s++)
                        i = f[o][s],
                        this._func[i] = "function" == typeof t[i] && t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)];
                    i = f[o][2],
                    this._initialRotations[o] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0,
                    this._overwriteProps.push(i)
                }
            return this._startRatio = n.vars.runBackwards ? 1 : 0,
            !0
        },
        set: function(t) {
            var e, n, i, r, o, s, a, l, u, c, f = this._segCount, p = this._func, h = this._target, d = t !== this._startRatio;
            if (this._timeRes) {
                if (l = this._lengths,
                u = this._curSeg,
                c = t * this._length,
                T = this._li,
                c > this._l2 && T < f - 1) {
                    for (a = f - 1; T < a && (this._l2 = l[++T]) <= c; )
                        ;
                    this._l1 = l[T - 1],
                    this._li = T,
                    this._curSeg = u = this._segments[T],
                    this._s2 = u[this._s1 = this._si = 0]
                } else if (c < this._l1 && 0 < T) {
                    for (; 0 < T && (this._l1 = l[--T]) >= c; )
                        ;
                    0 === T && c < this._l1 ? this._l1 = 0 : T++,
                    this._l2 = l[T],
                    this._li = T,
                    this._curSeg = u = this._segments[T],
                    this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                    this._s2 = u[this._si]
                }
                if (e = T,
                c -= this._l1,
                T = this._si,
                c > this._s2 && T < u.length - 1) {
                    for (a = u.length - 1; T < a && (this._s2 = u[++T]) <= c; )
                        ;
                    this._s1 = u[T - 1],
                    this._si = T
                } else if (c < this._s1 && 0 < T) {
                    for (; 0 < T && (this._s1 = u[--T]) >= c; )
                        ;
                    0 === T && c < this._s1 ? this._s1 = 0 : T++,
                    this._s2 = u[T],
                    this._si = T
                }
                o = 1 === t ? 1 : (T + (c - this._s1) / (this._s2 - this._s1)) * this._prec || 0
            } else
                o = (t - (e = t < 0 ? 0 : 1 <= t ? f - 1 : f * t >> 0) * (1 / f)) * f;
            for (n = 1 - o,
            T = this._props.length; -1 < --T; )
                i = this._props[T],
                s = (o * o * (r = this._beziers[i][e]).da + 3 * n * (o * r.ca + n * r.ba)) * o + r.a,
                this._mod[i] && (s = this._mod[i](s, h)),
                p[i] ? h[i](s) : h[i] = s;
            if (this._autoRotate)
                for (var _, m, g, y, v, b, w, x = this._autoRotate, T = x.length; -1 < --T; )
                    i = x[T][2],
                    b = x[T][3] || 0,
                    w = !0 === x[T][4] ? 1 : P,
                    r = this._beziers[x[T][0]],
                    _ = this._beziers[x[T][1]],
                    r && _ && (r = r[e],
                    _ = _[e],
                    m = r.a + (r.b - r.a) * o,
                    m += ((y = r.b + (r.c - r.b) * o) - m) * o,
                    y += (r.c + (r.d - r.c) * o - y) * o,
                    g = _.a + (_.b - _.a) * o,
                    g += ((v = _.b + (_.c - _.b) * o) - g) * o,
                    v += (_.c + (_.d - _.c) * o - v) * o,
                    s = d ? Math.atan2(v - g, y - m) * w + b : this._initialRotations[T],
                    this._mod[i] && (s = this._mod[i](s, h)),
                    p[i] ? h[i](s) : h[i] = s)
        }
    })
      , n = m.prototype
      , c = (m.bezierThrough = p,
    m.cubicToQuadratic = z,
    m._autoCSS = !0,
    m.quadraticToCubic = function(t, e, n) {
        return new F(t,(2 * e + t) / 3,(2 * e + n) / 3,n)
    }
    ,
    m._cssRegister = function() {
        var h, d, _, t = u.CSSPlugin;
        t && (t = t._internals,
        h = t._parseToProxy,
        d = t._setPluginRatio,
        _ = t.CSSPropTween,
        t._registerComplexSpecialProp("bezier", {
            parser: function(t, e, n, i, r, o) {
                e instanceof Array && (e = {
                    values: e
                }),
                o = new m;
                var s, a, l, u = e.values, c = u.length - 1, f = [], p = {};
                if (!(c < 0)) {
                    for (s = 0; s <= c; s++)
                        l = h(t, u[s], i, r, o, c !== s),
                        f[s] = l.end;
                    for (a in e)
                        p[a] = e[a];
                    p.values = f,
                    (r = new _(t,"bezier",0,0,l.pt,2)).data = l,
                    r.plugin = o,
                    r.setRatio = d,
                    0 === p.autoRotate && (p.autoRotate = !0),
                    !p.autoRotate || p.autoRotate instanceof Array || (s = !0 === p.autoRotate ? 0 : Number(p.autoRotate),
                    p.autoRotate = null != l.end.left ? [["left", "top", "rotation", s, !1]] : null != l.end.x && [["x", "y", "rotation", s, !1]]),
                    p.autoRotate && (i._transform || i._enableTransforms(!1),
                    l.autoRotate = i._target._gsTransform,
                    l.proxy.rotation = l.autoRotate.rotation || 0,
                    i._overwriteProps.push("rotation")),
                    o._onInitTween(l.proxy, p, i._tween)
                }
                return r
            }
        }))
    }
    ,
    n._mod = function(t) {
        for (var e, n = this._overwriteProps, i = n.length; -1 < --i; )
            (e = t[n[i]]) && "function" == typeof e && (this._mod[n[i]] = e)
    }
    ,
    n._kill = function(t) {
        var e, n, i = this._props;
        for (e in this._beziers)
            if (e in t)
                for (delete this._beziers[e],
                delete this._func[e],
                n = i.length; -1 < --n; )
                    i[n] === e && i.splice(n, 1);
        if (i = this._autoRotate)
            for (n = i.length; -1 < --n; )
                t[i[n][2]] && i.splice(n, 1);
        return this._super._kill.call(this, t)
    }
    ,
    O._gsScope._gsDefine("easing.Back", ["easing.Ease"], function() {
        function t(t, e) {
            var n = (t = c("easing." + t, function() {}, !0)).prototype = new O.Ease;
            return n.constructor = t,
            n.getRatio = e,
            t
        }
        function e(t, e, n, i, r) {
            return e = c("easing." + t, {
                easeOut: new e,
                easeIn: new n,
                easeInOut: new i
            }, !0),
            f(e, t),
            e
        }
        function m(t, e, n) {
            this.t = t,
            this.v = e,
            n && (((this.next = n).prev = this).c = n.v - e,
            this.gap = n.t - t)
        }
        function n(t, e) {
            var n = c("easing." + t, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0);
            return (t = n.prototype = new O.Ease).constructor = n,
            t.getRatio = e,
            t.config = function(t) {
                return new n(t)
            }
            ,
            n
        }
        var i, r, o, s = O._gsScope.GreenSockGlobals || O._gsScope, a = s.com.greensock, l = 2 * Math.PI, u = Math.PI / 2, c = a._class, f = O.Ease.register || function() {}
        , a = e("Back", n("BackOut", function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), n("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), n("BackInOut", function(t) {
            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), p = c("easing.SlowMo", function(t, e, n) {
            e = e || 0 === e ? e : .7,
            null == t ? t = .7 : 1 < t && (t = 1),
            this._p = 1 !== t ? e : 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = !0 === n
        }, !0), h = p.prototype = new O.Ease;
        return h.constructor = p,
        h.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }
        ,
        p.ease = new p(.7,.7),
        h.config = p.config = function(t, e, n) {
            return new p(t,e,n)
        }
        ,
        (h = (i = c("easing.SteppedEase", function(t, e) {
            this._p1 = 1 / (t = t || 1),
            this._p2 = t + (e ? 0 : 1),
            this._p3 = e ? 1 : 0
        }, !0)).prototype = new O.Ease).constructor = i,
        h.getRatio = function(t) {
            return t < 0 ? t = 0 : 1 <= t && (t = .999999999),
            ((this._p2 * t | 0) + this._p3) * this._p1
        }
        ,
        h.config = i.config = function(t, e) {
            return new i(t,e)
        }
        ,
        (h = (r = c("easing.ExpoScaleEase", function(t, e, n) {
            this._p1 = Math.log(e / t),
            this._p2 = e - t,
            this._p3 = t,
            this._ease = n
        }, !0)).prototype = new O.Ease).constructor = r,
        h.getRatio = function(t) {
            return this._ease && (t = this._ease.getRatio(t)),
            (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
        }
        ,
        h.config = r.config = function(t, e, n) {
            return new r(t,e,n)
        }
        ,
        (h = (o = c("easing.RoughEase", function(t) {
            for (var e, n, i, r, o, s, a = (t = t || {}).taper || "none", l = [], u = 0, c = 0 | (t.points || 20), f = c, p = !1 !== t.randomize, h = !0 === t.clamp, d = t.template instanceof O.Ease ? t.template : null, _ = "number" == typeof t.strength ? .4 * t.strength : .4; -1 < --f; )
                e = p ? Math.random() : 1 / c * f,
                n = d ? d.getRatio(e) : e,
                i = "none" === a ? _ : "out" === a ? (r = 1 - e) * r * _ : "in" === a ? e * e * _ : e < .5 ? (r = 2 * e) * r * .5 * _ : (r = 2 * (1 - e)) * r * .5 * _,
                p ? n += Math.random() * i - .5 * i : f % 2 ? n += .5 * i : n -= .5 * i,
                h && (1 < n ? n = 1 : n < 0 && (n = 0)),
                l[u++] = {
                    x: e,
                    y: n
                };
            for (l.sort(function(t, e) {
                return t.x - e.x
            }),
            s = new m(1,1,null),
            f = c; -1 < --f; )
                o = l[f],
                s = new m(o.x,o.y,s);
            this._prev = new m(0,0,0 !== s.t ? s : s.next)
        }, !0)).prototype = new O.Ease).constructor = o,
        h.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && t <= e.t; )
                    e = e.prev;
            return (this._prev = e).v + (t - e.t) / e.gap * e.c
        }
        ,
        h.config = function(t) {
            return new o(t)
        }
        ,
        o.ease = new o,
        e("Bounce", t("BounceOut", function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), t("BounceIn", function(t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), t("BounceInOut", function(t) {
            var e = t < .5;
            return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        e("Circ", t("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), t("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), t("CircInOut", function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        e("Elastic", (h = function(t, e, n) {
            var i = c("easing." + t, function(t, e) {
                this._p1 = 1 <= t ? t : 1,
                this._p2 = (e || n) / (t < 1 ? t : 1),
                this._p3 = this._p2 / l * (Math.asin(1 / this._p1) || 0),
                this._p2 = l / this._p2
            }, !0)
              , t = i.prototype = new O.Ease;
            return t.constructor = i,
            t.getRatio = e,
            t.config = function(t, e) {
                return new i(t,e)
            }
            ,
            i
        }
        )("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), h("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * --t) * Math.sin((t - this._p3) * this._p2))
        }, .3), h("ElasticInOut", function(t) {
            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * --t) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * --t) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }, .45)),
        e("Expo", t("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), t("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), t("ExpoInOut", function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        e("Sine", t("SineOut", function(t) {
            return Math.sin(t * u)
        }), t("SineIn", function(t) {
            return 1 - Math.cos(t * u)
        }), t("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })),
        c("easing.EaseLookup", {
            find: function(t) {
                return O.Ease.map[t]
            }
        }, !0),
        f(s.SlowMo, "SlowMo", "ease,"),
        f(o, "RoughEase", "ease,"),
        f(i, "SteppedEase", "ease,"),
        a
    }, !0),
    O.globals.Back)
      , f = O.globals.Elastic
      , h = O.globals.Bounce
      , d = O.globals.RoughEase
      , _ = O.globals.SlowMo
      , g = O.globals.SteppedEase
      , y = O.globals.Circ
      , v = O.globals.Expo
      , b = O.globals.Sine
      , w = O.globals.ExpoScaleEase
      , x = e;
    x._autoActivated = [i, r, o.a, s, m, a, l, c, f, h, d, _, g, y, v, b, w]
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(3);
    function r() {
        this._backgroundColor = "#ffffff",
        this._foregroundColor = "#1E1E1E",
        this._backgroundColorChange = new i.SignalDispatcher,
        this._foregroundColorChange = new i.SignalDispatcher
    }
    Object.defineProperty(r, "Instance", {
        get: function() {
            return null == this._instance && (this._instance = new r),
            this._instance
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "onBackgroundColorChange", {
        get: function() {
            return this._backgroundColorChange.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "backgroundColor", {
        get: function() {
            return this._backgroundColor
        },
        set: function(t) {
            t !== this._backgroundColor && (this._backgroundColor = t,
            this._backgroundColorChange.dispatch())
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "onForegroundColorChange", {
        get: function() {
            return this._foregroundColorChange.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "foregroundColor", {
        get: function() {
            return this._foregroundColor
        },
        set: function(t) {
            t !== this._foregroundColor && (this._foregroundColor = t,
            this._foregroundColorChange.dispatch())
        },
        enumerable: !1,
        configurable: !0
    }),
    e.default = r
}
, function(t, e, n) {
    "use strict";
    function i() {
        var s = this;
        this._lastRenderTime = 0,
        this._totalTime = 0,
        this._deltaTime = 0,
        this._renderItems = [],
        this._killItems = [],
        this.render = function() {
            for (var t, e = Date.now(), n = (e - s._lastRenderTime) / 1e3, i = (s._lastRenderTime = e,
            s._totalTime += n,
            s._deltaTime = n,
            s._renderItems.length), r = 0; r < i; r += 1)
                !0 !== (t = s._renderItems[r]).killed && t.render(s._deltaTime);
            for (; 0 < s._killItems.length; ) {
                var o = s._renderItems.indexOf(s._killItems[0]);
                -1 !== o && s._renderItems.splice(o, 1),
                s._killItems.shift()
            }
        }
        ,
        this._lastRenderTime = Date.now()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.RenderItem = void 0,
    Object.defineProperty(i, "Instance", {
        get: function() {
            var t = this;
            return null === this._instance && (this._instance = new i,
            setInterval(function() {
                t._instance.render()
            }, 1e3 / 60)),
            this._instance
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.add = function(t, e) {
        t = new r(t,e = void 0 === e ? 60 : e);
        return this._renderItems.push(t),
        t
    }
    ,
    i.prototype.remove = function(t) {
        t.killed = !0,
        this._killItems.push(t)
    }
    ,
    i._instance = null,
    e.default = i;
    o.prototype.render = function(t) {
        this.totalTime += t,
        this.deltaTime += t;
        t = 1 / this._fps;
        this.deltaTime < t || (this.renderFunction(this.deltaTime, this.totalTime),
        this.deltaTime = 0)
    }
    ;
    var r = o;
    function o(t, e) {
        this.totalTime = 0,
        this.deltaTime = 0,
        this.killed = !1,
        this.renderFunction = t,
        this._fps = e
    }
    e.RenderItem = r
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(2))), l = s(n(6)), u = s(n(148)), s = (r = a.default,
    o(c, r),
    c.prototype.awake = function() {
        l.default.Instance.onBackgroundColorChange.sub(this.onBackgroundChange),
        l.default.Instance.onForegroundColorChange.sub(this.onForegroundChange),
        this.backgroundChange(l.default.Instance.backgroundColor),
        this.foregroundChange(l.default.Instance.foregroundColor)
    }
    ,
    c.prototype.sleep = function() {
        l.default.Instance.onBackgroundColorChange.unsub(this.onBackgroundChange),
        l.default.Instance.onForegroundColorChange.unsub(this.onForegroundChange)
    }
    ,
    c.prototype.backgroundChange = function(t) {}
    ,
    c.prototype.foregroundChange = function(t) {}
    ,
    c.prototype.getOpacityFromBorderStyle = function(t) {
        return -1 === t.indexOf("rgba") ? 1 : (t = (t = t.split("rgba")[1].split(","))[t.length - 1],
        Number(u.default.getAlphaNumeric(t)))
    }
    ,
    c);
    function c() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t.onBackgroundChange = function() {
            t.backgroundChange(l.default.Instance.backgroundColor)
        }
        ,
        t.onForegroundChange = function() {
            t.foregroundChange(l.default.Instance.foregroundColor)
        }
        ,
        t
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var Qt = n(0)
      , i = (Qt._gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function() {
        function A() {
            Qt.TweenPlugin.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = A.prototype.setRatio
        }
        function s(t, e) {
            return e.toUpperCase()
        }
        function a(t, e) {
            return (e = R.createElementNS ? R.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : R.createElement(t)).style ? e : R.createElement(t)
        }
        function l(t) {
            return nt.test("string" == typeof t ? t : (t.currentStyle || t.style).filter || "") ? parseFloat(RegExp.$1) / 100 : 1
        }
        function m(t) {
            Qt._gsScope.console
        }
        function x(t, e) {
            var n, i, r = (e = e || j).style;
            if (void 0 !== r[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1),
            n = ["O", "Moz", "ms", "Ms", "Webkit"],
            i = 5; -1 < --i && void 0 === r[n[i] + t]; )
                ;
            return 0 <= i ? (mt = "-" + (gt = 3 === i ? "ms" : n[i]).toLowerCase() + "-",
            gt + t) : null
        }
        function d(t) {
            return yt.getComputedStyle(t)
        }
        function p(t, e) {
            var n, i, r = {};
            if (e = e || d(t))
                if (n = e.length)
                    for (; -1 < --n; )
                        -1 !== (i = e[n]).indexOf("-transform") && zt !== i || (r[i.replace(at, s)] = e.getPropertyValue(i));
                else
                    for (n in e)
                        -1 !== n.indexOf("Transform") && q !== n || (r[n] = e[n]);
            else if (e = t.currentStyle || t.style)
                for (n in e)
                    "string" == typeof n && void 0 === r[n] && (r[n.replace(at, s)] = e[n]);
            return N || (r.opacity = l(t)),
            t = Gt(t, e, !1),
            r.rotation = t.rotation,
            r.skewX = t.skewX,
            r.scaleX = t.scaleX,
            r.scaleY = t.scaleY,
            r.x = t.x,
            r.y = t.y,
            U && (r.z = t.z,
            r.rotationX = t.rotationX,
            r.rotationY = t.rotationY,
            r.scaleZ = t.scaleZ),
            r.filters && delete r.filters,
            r
        }
        function g(t, e, n, i, r) {
            var o, s, a, l = {}, u = t.style;
            for (s in n)
                "cssText" === s || "length" !== s && isNaN(s) && (e[s] !== (o = n[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(tt, "") ? o : 0 : vt(t, s),
                void 0 !== u[s] && (a = new St(u,s,u[s],a)));
            if (i)
                for (s in i)
                    "className" !== s && (l[s] = i[s]);
            return {
                difs: l,
                firstMPT: a
            }
        }
        function S(t, e) {
            return "string" == typeof (t = "function" == typeof t ? t(k, E) : t) && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
        }
        function O(t, e) {
            var n = "string" == typeof (t = "function" == typeof t ? t(k, E) : t) && "=" === t.charAt(1);
            return null == (t = "string" == typeof t && "v" === t.charAt(t.length - 2) ? (n ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(n ? t.substr(2) : t) / 100) : t) ? e : n ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
        }
        function P(t, e, n, i) {
            var r, o, s;
            return o = (o = null == (t = "function" == typeof t ? t(k, E) : t) ? e : "number" == typeof t ? t : (r = 360,
            o = t.split("_"),
            s = ((s = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : L) - (s ? 0 : e),
            o.length && (i && (i[n] = e + s),
            -1 !== t.indexOf("short") && (s %= r) !== s % 180 && (s = s < 0 ? s + r : s - r),
            -1 !== t.indexOf("_cw") && s < 0 ? s = (s + 3599999999640) % r - (s / r | 0) * r : -1 !== t.indexOf("ccw") && 0 < s && (s = (s - 3599999999640) % r - (s / r | 0) * r)),
            e + s)) < 1e-6 && -1e-6 < o ? 0 : o
        }
        function c(t, e, n) {
            return 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        }
        function u(t, e) {
            var n, i, r, o = t.match(z) || [], s = 0, a = "";
            if (!o.length)
                return t;
            for (n = 0; n < o.length; n++)
                i = o[n],
                s += (r = t.substr(s, t.indexOf(i, s) - s)).length + i.length,
                3 === (i = Tt(i, e)).length && i.push(1),
                a += r + (e ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
            return a + t.substr(s)
        }
        var h, W, C, y, Y, v, b, G, Z, w, E, k, K = Qt._gsScope._gsDefine.globals, _ = {}, t = A.prototype = new Qt.TweenPlugin("css"), M = ((t.constructor = A).version = "2.1.3",
        A.API = 2,
        A.defaultTransformPerspective = 0,
        A.defaultSkewType = "compensated",
        A.defaultSmoothOrigin = !0,
        A.suffixMap = {
            top: t = "px",
            right: t,
            bottom: t,
            left: t,
            width: t,
            height: t,
            fontSize: t,
            padding: t,
            margin: t,
            perspective: t,
            lineHeight: ""
        },
        /(?:\-|\.|\b)(\d|\.|e\-)+/g), $ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, J = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, Q = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi, tt = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, et = /(?:\d|\-|\+|=|#|\.)*/g, nt = /opacity *= *([^)]*)/i, it = /opacity:([^;]*)/i, rt = /alpha\(opacity *=.+?\)/i, ot = /^(rgb|hsl)/, st = /([A-Z])/g, at = /-([a-z])/gi, lt = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, ut = /(?:Left|Right|Width)/i, ct = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, ft = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, I = /,(?=[^\)]*(?:\(|$))/gi, pt = /[\s,\(]/i, D = Math.PI / 180, L = 180 / Math.PI, ht = {}, dt = {
            style: {}
        }, R = Qt._gsScope.document || {
            createElement: function() {
                return dt
            }
        }, j = a("div"), _t = a("img"), e = A._internals = {
            _specialProps: _
        }, n = (Qt._gsScope.navigator || {}).userAgent || "", N = (r = n.indexOf("Android"),
        i = a("a"),
        b = -1 !== n.indexOf("Safari") && -1 === n.indexOf("Chrome") && (-1 === r || 3 < parseFloat(n.substr(r + 8, 2))),
        Z = b && parseFloat(n.substr(n.indexOf("Version/") + 8, 2)) < 6,
        G = -1 !== n.indexOf("Firefox"),
        (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(n) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(n)) && (w = parseFloat(RegExp.$1)),
        !!i && (i.style.cssText = "top:1px;opacity:.55;",
        /^0.55/.test(i.style.opacity))), mt = "", gt = "", yt = "undefined" != typeof window ? window : R.defaultView || {
            getComputedStyle: function() {}
        }, B = A.getStyle = function(t, e, n, i, r) {
            var o;
            return N || "opacity" !== e ? (!i && t.style[e] ? o = t.style[e] : (n = n || d(t)) ? o = n[e] || n.getPropertyValue(e) || n.getPropertyValue(e.replace(st, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]),
            null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : l(t)
        }
        , T = e.convertToPixels = function(t, e, n, i, r) {
            if ("px" === i || !i && "lineHeight" !== e)
                return n;
            if ("auto" === i || !n)
                return 0;
            var o, s, a, l = ut.test(e), u = t, c = j.style, f = n < 0, p = 1 === n;
            if (f && (n = -n),
            p && (n *= 100),
            "lineHeight" !== e || i)
                if ("%" === i && -1 !== e.indexOf("border"))
                    o = n / 100 * (l ? t.clientWidth : t.clientHeight);
                else {
                    if (c.cssText = "border:0 solid red;position:" + B(t, "position") + ";line-height:0;",
                    "%" !== i && u.appendChild && "v" !== i.charAt(0) && "rem" !== i)
                        c[l ? "borderLeftWidth" : "borderTopWidth"] = n + i;
                    else {
                        if (u = t.parentNode || R.body,
                        -1 !== B(u, "display").indexOf("flex") && (c.position = "absolute"),
                        s = u._gsCache,
                        a = Qt.default.ticker.frame,
                        s && l && s.time === a)
                            return s.width * n / 100;
                        c[l ? "width" : "height"] = n + i
                    }
                    u.appendChild(j),
                    o = parseFloat(j[l ? "offsetWidth" : "offsetHeight"]),
                    u.removeChild(j),
                    l && "%" === i && !1 !== A.cacheWidths && ((s = u._gsCache = u._gsCache || {}).time = a,
                    s.width = o / n * 100),
                    0 !== o || r || (o = T(t, e, n, i, !0))
                }
            else
                s = d(t).lineHeight,
                t.style.lineHeight = n,
                o = parseFloat(d(t).lineHeight),
                t.style.lineHeight = s;
            return p && (o /= 100),
            f ? -o : o
        }
        , vt = e.calculateOffset = function(t, e, n) {
            var i;
            return "absolute" !== B(t, "position", n) ? 0 : (n = B(t, "margin" + (i = "left" === e ? "Left" : "Top"), n),
            t["offset" + i] - (T(t, e, parseFloat(n), n.replace(et, "")) || 0))
        }
        , bt = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, wt = ["marginLeft", "marginRight", "marginTop", "marginBottom"], F = function(t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
                return t + " ";
            var n, i = (t = null != t && "" !== t ? t : "0 0").split(" "), r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0], o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            if (3 < i.length && !e) {
                for (i = t.split(", ").join(",").split(","),
                t = [],
                n = 0; n < i.length; n++)
                    t.push(F(i[n]));
                return t.join(",")
            }
            return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"),
            t = (r = "center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=") ? "50%" : r) + " " + o + (2 < i.length ? " " + i[2] : ""),
            e && (e.oxp = -1 !== r.indexOf("%"),
            e.oyp = -1 !== o.indexOf("%"),
            e.oxr = "=" === r.charAt(1),
            e.oyr = "=" === o.charAt(1),
            e.ox = parseFloat(r.replace(tt, "")),
            e.oy = parseFloat(o.replace(tt, "")),
            e.v = t),
            e || t
        }, xt = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, Tt = A.parseColor = function(t, e) {
            var n, i, r, o, s, a, l, u;
            if (t)
                if ("number" == typeof t)
                    n = [t >> 16, t >> 8 & 255, 255 & t];
                else {
                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                    xt[t])
                        n = xt[t];
                    else if ("#" === t.charAt(0))
                        4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (r = t.charAt(2)) + r + (o = t.charAt(3)) + o),
                        n = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                    else if ("hsl" === t.substr(0, 3))
                        if (n = u = t.match(M),
                        e) {
                            if (-1 !== t.indexOf("="))
                                return t.match($)
                        } else
                            s = Number(n[0]) % 360 / 360,
                            a = Number(n[1]) / 100,
                            i = 2 * (l = Number(n[2]) / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a),
                            3 < n.length && (n[3] = Number(n[3])),
                            n[0] = c(s + 1 / 3, i, r),
                            n[1] = c(s, i, r),
                            n[2] = c(s - 1 / 3, i, r);
                    else
                        n = t.match(M) || xt.transparent;
                    n[0] = Number(n[0]),
                    n[1] = Number(n[1]),
                    n[2] = Number(n[2]),
                    3 < n.length && (n[3] = Number(n[3]))
                }
            else
                n = xt.black;
            return e && !u && (i = n[0] / 255,
            r = n[1] / 255,
            o = n[2] / 255,
            l = ((t = Math.max(i, r, o)) + (e = Math.min(i, r, o))) / 2,
            t === e ? s = a = 0 : (u = t - e,
            a = .5 < l ? u / (2 - t - e) : u / (t + e),
            s = t === i ? (r - o) / u + (r < o ? 6 : 0) : t === r ? (o - i) / u + 2 : (i - r) / u + 4,
            s *= 60),
            n[0] = s + .5 | 0,
            n[1] = 100 * a + .5 | 0,
            n[2] = 100 * l + .5 | 0),
            n
        }
        , z = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in xt)
            z += "|" + t + "\\b";
        z = new RegExp(z + ")","gi"),
        A.colorStringFilter = function(t) {
            var e = t[0] + " " + t[1];
            z.test(e) && (e = -1 !== e.indexOf("hsl(") || -1 !== e.indexOf("hsla("),
            t[0] = u(t[0], e),
            t[1] = u(t[1], e)),
            z.lastIndex = 0
        }
        ,
        Qt.default.defaultStringFilter || (Qt.default.defaultStringFilter = A.colorStringFilter);
        function Ot(t, e, o, s) {
            var a, l, u, c, f, p, h, d;
            return null == t ? function(t) {
                return t
            }
            : (a = e ? (t.match(z) || [""])[0] : "",
            l = t.split(a).join("").match(J) || [],
            u = t.substr(0, t.indexOf(l[0])),
            c = ")" === t.charAt(t.length - 1) ? ")" : "",
            f = -1 !== t.indexOf(" ") ? " " : ",",
            p = l.length,
            h = 0 < p ? l[0].replace(M, "") : "",
            p ? d = e ? function(t) {
                var e, n, i, r;
                if ("number" == typeof t)
                    t += h;
                else if (s && I.test(t)) {
                    for (r = t.replace(I, "|").split("|"),
                    i = 0; i < r.length; i++)
                        r[i] = d(r[i]);
                    return r.join(",")
                }
                if (e = (t.match(z) || [a])[0],
                i = (n = t.split(e).join("").match(J) || []).length,
                p > i--)
                    for (; ++i < p; )
                        n[i] = o ? n[(i - 1) / 2 | 0] : l[i];
                return u + n.join(f) + f + e + c + (-1 !== t.indexOf("inset") ? " inset" : "")
            }
            : function(t) {
                var e, n, i;
                if ("number" == typeof t)
                    t += h;
                else if (s && I.test(t)) {
                    for (n = t.replace(I, "|").split("|"),
                    i = 0; i < n.length; i++)
                        n[i] = d(n[i]);
                    return n.join(",")
                }
                if (i = (e = t.match("," == f ? J : Q) || []).length,
                p > i--)
                    for (; ++i < p; )
                        e[i] = o ? e[(i - 1) / 2 | 0] : l[i];
                return (u && "none" !== t && t.substr(0, t.indexOf(e[0])) || u) + e.join(f) + c
            }
            : function(t) {
                return t
            }
            )
        }
        function Pt(u) {
            return u = u.split(","),
            function(t, e, n, i, r, o, s) {
                var a, l = (e + "").split(" ");
                for (s = {},
                a = 0; a < 4; a++)
                    s[u[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0];
                return i.parse(t, s, r, o)
            }
        }
        function St(t, e, n, i, r) {
            this.t = t,
            this.p = e,
            this.v = n,
            this.r = r,
            i && ((i._prev = this)._next = i)
        }
        e._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, n, i, r, o, s = this.data, a = s.proxy, l = s.firstMPT; l; )
                e = a[l.v],
                l.r ? e = l.r(e) : e < 1e-6 && -1e-6 < e && (e = 0),
                l.t[l.p] = e,
                l = l._next;
            if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation),
            1 === t || 0 === t)
                for (l = s.firstMPT,
                o = 1 === t ? "e" : "b"; l; ) {
                    if ((n = l.t).type) {
                        if (1 === n.type) {
                            for (r = n.xs0 + n.s + n.xs1,
                            i = 1; i < n.l; i++)
                                r += n["xn" + i] + n["xs" + (i + 1)];
                            n[o] = r
                        }
                    } else
                        n[o] = n.s + n.xs0;
                    l = l._next
                }
        }
        ,
        e._parseToProxy = function(t, e, n, i, r, o) {
            var s, a, l, u, c = i, f = {}, p = {}, h = n._transform, d = ht;
            for (n._transform = null,
            ht = e,
            i = t = n.parse(t, e, i, r),
            ht = d,
            o && (n._transform = h,
            c && (c._prev = null,
            c._prev && (c._prev._next = null))); i && i !== c; ) {
                if (i.type <= 1 && (p[a = i.p] = i.s + i.c,
                f[a] = i.s,
                o || (u = new St(i,"s",a,u,i.r),
                i.c = 0),
                1 === i.type))
                    for (s = i.l; 0 < --s; )
                        p[a = i.p + "_" + (l = "xn" + s)] = i.data[l],
                        f[a] = i[l],
                        o || (u = new St(i,l,a,u,i.rxp[l]));
                i = i._next
            }
            return {
                proxy: f,
                end: p,
                firstMPT: u,
                pt: t
            }
        }
        ;
        function Ct(t, e, n, i, r, o) {
            return (t = new H(t,e,n,i - n,r,-1,o)).b = n,
            t.e = t.xs0 = i,
            t
        }
        var H = e.CSSPropTween = function(t, e, n, i, r, o, s, a, l, u, c) {
            this.t = t,
            this.p = e,
            this.s = n,
            this.c = i,
            this.n = s || e,
            t instanceof H || y.push(this.n),
            this.r = a && ("function" == typeof a ? a : Math.round),
            this.type = o || 0,
            l && (this.pr = l,
            h = !0),
            this.b = void 0 === u ? n : u,
            this.e = void 0 === c ? n + i : c,
            r && ((this._next = r)._prev = this)
        }
          , Et = A.parseComplex = function(t, e, n, i, r, o, s, a, l, u) {
            n = n || o || "",
            "function" == typeof i && (i = i(k, E)),
            s = new H(t,e,0,0,s,u ? 2 : 1,null,!1,a,n,i),
            i += "",
            r && z.test(i + n) && (A.colorStringFilter(i = [n, i]),
            n = i[0],
            i = i[1]);
            var c, f, p, h, d, _, m, g, y, v, b, w, x = n.split(", ").join(",").split(" "), T = i.split(", ").join(",").split(" "), O = x.length, P = !1 !== Y;
            for (-1 === i.indexOf(",") && -1 === n.indexOf(",") || (T = (-1 !== (i + n).indexOf("rgb") || -1 !== (i + n).indexOf("hsl") ? (x = x.join(" ").replace(I, ", ").split(" "),
            T.join(" ").replace(I, ", ")) : (x = x.join(" ").split(",").join(", ").split(" "),
            T.join(" ").split(",").join(", "))).split(" "),
            O = x.length),
            O !== T.length && (O = (x = (o || "").split(" ")).length),
            s.plugin = l,
            s.setRatio = u,
            c = z.lastIndex = 0; c < O; c++)
                if (h = x[c],
                d = T[c] + "",
                (w = parseFloat(h)) || 0 === w)
                    s.appendXtra("", w, S(d, w), d.replace($, ""), P && -1 !== d.indexOf("px") && Math.round, !0);
                else if (r && z.test(h))
                    b = ")" + ((b = d.indexOf(")") + 1) ? d.substr(b) : ""),
                    w = -1 !== d.indexOf("hsl") && N,
                    y = d,
                    h = Tt(h, w),
                    d = Tt(d, w),
                    (g = 6 < h.length + d.length) && !N && 0 === d[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent",
                    s.e = s.e.split(T[c]).join("transparent")) : (N || (g = !1),
                    w ? s.appendXtra(y.substr(0, y.indexOf("hsl")) + (g ? "hsla(" : "hsl("), h[0], S(d[0], h[0]), ",", !1, !0).appendXtra("", h[1], S(d[1], h[1]), "%,", !1).appendXtra("", h[2], S(d[2], h[2]), g ? "%," : "%" + b, !1) : s.appendXtra(y.substr(0, y.indexOf("rgb")) + (g ? "rgba(" : "rgb("), h[0], d[0] - h[0], ",", Math.round, !0).appendXtra("", h[1], d[1] - h[1], ",", Math.round).appendXtra("", h[2], d[2] - h[2], g ? "," : b, Math.round),
                    g && (h = h.length < 4 ? 1 : h[3],
                    s.appendXtra("", h, (d.length < 4 ? 1 : d[3]) - h, b, !1))),
                    z.lastIndex = 0;
                else if (_ = h.match(M)) {
                    if (!(m = d.match($)) || m.length !== _.length)
                        return s;
                    for (f = p = 0; f < _.length; f++)
                        v = _[f],
                        y = h.indexOf(v, p),
                        s.appendXtra(h.substr(p, y - p), Number(v), S(m[f], v), "", P && "px" === h.substr(y + v.length, 2) && Math.round, 0 === f),
                        p = y + v.length;
                    s["xs" + s.l] += h.substr(p)
                } else
                    s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + d : d;
            if (-1 !== i.indexOf("=") && s.data) {
                for (b = s.xs0 + s.data.s,
                c = 1; c < s.l; c++)
                    b += s["xs" + c] + s.data["xn" + c];
                s.e = b + s["xs" + c]
            }
            return s.l || (s.type = -1,
            s.xs0 = s.e),
            s.xfirst || s
        }
          , X = 9;
        for ((t = H.prototype).l = t.pr = 0; 0 < --X; )
            t["xn" + X] = 0,
            t["xs" + X] = "";
        t.xs0 = "",
        t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null,
        t.appendXtra = function(t, e, n, i, r, o) {
            var s = this
              , a = s.l;
            return s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || "",
            n || 0 === a || s.plugin ? (s.l++,
            s.type = s.setRatio ? 2 : 1,
            s["xs" + s.l] = i || "",
            0 < a ? (s.data["xn" + a] = e + n,
            s.rxp["xn" + a] = r,
            s["xn" + a] = e,
            s.plugin || (s.xfirst = new H(s,"xn" + a,e,n,s.xfirst || s,0,s.n,r,s.pr),
            s.xfirst.xs0 = 0)) : (s.data = {
                s: e + n
            },
            s.rxp = {},
            s.s = e,
            s.c = n,
            s.r = r)) : s["xs" + a] += e + (i || ""),
            s
        }
        ;
        function kt(t, e) {
            this.p = (e = e || {}).prefix && x(t) || t,
            (_[t] = _[this.p] = this).format = e.formatter || Ot(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.allowFunc = e.allowFunc,
            this.pr = e.priority || 0
        }
        function At(t, e, n) {
            var i, r = R.createElementNS("http://www.w3.org/2000/svg", t), o = /([a-z])([A-Z])/g;
            for (i in n)
                r.setAttributeNS(null, i.replace(o, "$1-$2").toLowerCase(), n[i]);
            return e.appendChild(r),
            r
        }
        function Mt(t, e, n, i, r, o) {
            var s, a, l, u, c, f, p, h, d, _, m, g, y = t._gsTransform, v = It(t, !0);
            y && (m = y.xOrigin,
            g = y.yOrigin),
            (!i || (s = i.split(" ")).length < 2) && (0 === (c = t.getBBox()).x && 0 === c.y && c.width + c.height === 0 && (c = {
                x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                width: 0,
                height: 0
            }),
            s = [(-1 !== (e = F(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]),
            n.xOrigin = e = parseFloat(s[0]),
            n.yOrigin = u = parseFloat(s[1]),
            i && v !== Yt && (i = v[0],
            c = v[1],
            f = v[2],
            p = v[3],
            h = v[4],
            d = v[5],
            (_ = i * p - c * f) && (l = e * (-c / _) + u * (i / _) - (i * d - c * h) / _,
            e = n.xOrigin = s[0] = a = e * (p / _) + u * (-f / _) + (f * d - p * h) / _,
            u = n.yOrigin = s[1] = l)),
            y && (o && (n.xOffset = y.xOffset,
            n.yOffset = y.yOffset,
            y = n),
            r || !1 !== r && !1 !== A.defaultSmoothOrigin ? (y.xOffset += (a = e - m) * v[0] + (l = u - g) * v[2] - a,
            y.yOffset += a * v[1] + l * v[3] - l) : y.xOffset = y.yOffset = 0),
            o || t.setAttribute("data-svg-origin", s.join(" "))
        }
        function It(t, e) {
            var n, i, r, o, s, a, l, u = t._gsTransform || new Xt, c = t.style;
            if (q ? i = B(t, zt, null, !0) : t.currentStyle && (i = (i = t.currentStyle.filter.match(ct)) && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), u.x || 0, u.y || 0].join(",") : ""),
            n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i,
            q && n && !t.offsetParent && t !== f && (o = c.display,
            c.display = "block",
            (l = t.parentNode) && t.offsetParent || (s = 1,
            a = t.nextSibling,
            f.appendChild(t)),
            n = !(i = B(t, zt, null, !0)) || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i,
            o ? c.display = o : Kt(c, "display"),
            s && (a ? l.insertBefore(t, a) : l ? l.appendChild(t) : f.removeChild(t))),
            (u.svg || t.getCTM && Wt(t)) && (n && -1 !== (c[q] + "").indexOf("matrix") && (i = c[q],
            n = 0),
            r = t.getAttribute("transform"),
            n && r && (i = "matrix(" + (r = t.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")",
            n = 0)),
            n)
                return Yt;
            for (r = (i || "").match(M) || [],
            X = r.length; -1 < --X; )
                o = Number(r[X]),
                r[X] = (s = o - (o |= 0)) ? (1e5 * s + (s < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
            return e && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
        }
        function Lt(t) {
            var e, n = this.data, i = (s = -n.rotation * D) + n.skewX * D, r = 1e5, o = (Math.cos(s) * n.scaleX * r | 0) / r, s = (Math.sin(s) * n.scaleX * r | 0) / r, a = (Math.sin(i) * -n.scaleY * r | 0) / r, i = (Math.cos(i) * n.scaleY * r | 0) / r, l = this.t.style, u = this.t.currentStyle;
            if (u) {
                e = s,
                s = -a,
                a = -e,
                r = u.filter,
                l.filter = "";
                var c = this.t.offsetWidth
                  , f = this.t.offsetHeight
                  , p = "absolute" !== u.position
                  , h = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + s + ", M21=" + a + ", M22=" + i
                  , d = n.x + c * n.xPercent / 100
                  , _ = n.y + f * n.yPercent / 100;
                if (null != n.ox && (d += (v = (n.oxp ? c * n.ox * .01 : n.ox) - c / 2) - (v * o + (b = (n.oyp ? f * n.oy * .01 : n.oy) - f / 2) * s),
                _ += b - (v * a + b * i)),
                h += p ? ", Dx=" + ((v = c / 2) - (v * o + (b = f / 2) * s) + d) + ", Dy=" + (b - (v * a + b * i) + _) + ")" : ", sizingMethod='auto expand')",
                -1 !== r.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = r.replace(ft, h) : l.filter = h + " " + r,
                0 !== t && 1 !== t || 1 != o || 0 != s || 0 != a || 1 != i || p && -1 === h.indexOf("Dx=0, Dy=0") || nt.test(r) && 100 !== parseFloat(RegExp.$1) || -1 === r.indexOf(r.indexOf("Alpha")) && l.removeAttribute("filter"),
                !p) {
                    var m, g, y = w < 8 ? 1 : -1, v = n.ieOffsetX || 0, b = n.ieOffsetY || 0;
                    for (n.ieOffsetX = Math.round((c - ((o < 0 ? -o : o) * c + (s < 0 ? -s : s) * f)) / 2 + d),
                    n.ieOffsetY = Math.round((f - ((i < 0 ? -i : i) * f + (a < 0 ? -a : a) * c)) / 2 + _),
                    X = 0; X < 4; X++)
                        g = (e = -1 !== (g = u[m = wt[X]]).indexOf("px") ? parseFloat(g) : T(this.t, m, parseFloat(g), g.replace(et, "")) || 0) !== n[m] ? X < 2 ? -n.ieOffsetX : -n.ieOffsetY : X < 2 ? v - n.ieOffsetX : b - n.ieOffsetY,
                        l[m] = (n[m] = Math.round(e - g * (0 === X || 2 === X ? 1 : y))) + "px"
                }
            }
        }
        function Rt(t) {
            var e, n = this.t, i = n.filter || B(this.data, "filter") || "", t = this.s + this.c * t | 0;
            (e = 100 == t ? -1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"),
            !B(this.data, "filter")) : (n.filter = i.replace(rt, ""),
            !0) : e) || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + t + ")"),
            -1 === i.indexOf("pacity") ? 0 == t && this.xn1 || (n.filter = i + " alpha(opacity=" + t + ")") : n.filter = i.replace(nt, "opacity=" + t))
        }
        function Dt(t) {
            if (this.t._gsClassPT = this,
            1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, n = this.t.style; e; )
                    e.v ? n[e.p] = e.v : Kt(n, e.p),
                    e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        }
        function jt(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, n, i, r, o = this.t.style, s = _.transform.parse;
                if ("all" === this.e)
                    r = !(o.cssText = "");
                else
                    for (i = (e = this.e.split(" ").join("").split(",")).length; -1 < --i; )
                        n = e[i],
                        _[n] && (_[n].parse === s ? r = !0 : n = "transformOrigin" === n ? Ht : _[n].p),
                        Kt(o, n);
                r && (Kt(o, q),
                (t = this.t._gsTransform) && (t.svg && (this.t.removeAttribute("data-svg-origin"),
                this.t.removeAttribute("transform")),
                delete this.t._gsTransform))
            }
        }
        var V, i, Nt, r, o = e._registerComplexSpecialProp = function(t, e, n) {
            "object" != typeof e && (e = {
                parser: n
            });
            var i, r = t.split(","), o = e.defaultValue;
            for (n = n || [o],
            i = 0; i < r.length; i++)
                e.prefix = 0 === i && e.prefix,
                e.defaultValue = n[i] || o,
                new kt(r[i],e)
        }
        , Bt = e._registerPluginProp = function(t) {
            var l;
            _[t] || (l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin",
            o(t, {
                parser: function(t, e, n, i, r, o, s) {
                    var a = K.com.greensock.plugins[l];
                    return a ? (a._cssRegister(),
                    _[n].parse(t, e, n, i, r, o, s)) : (m(),
                    r)
                }
            }))
        }
        , Ft = ((t = kt.prototype).parseComplex = function(t, e, n, i, r, o) {
            var s, a, l, u, c, f, p = this.keyword;
            if (this.multi && (I.test(n) || I.test(e) ? (a = e.replace(I, "|").split("|"),
            l = n.replace(I, "|").split("|")) : p && (a = [e],
            l = [n])),
            l) {
                for (u = (l.length > a.length ? l : a).length,
                s = 0; s < u; s++)
                    e = a[s] = a[s] || this.dflt,
                    n = l[s] = l[s] || this.dflt,
                    p && (c = e.indexOf(p)) !== (f = n.indexOf(p)) && (-1 === f ? a[s] = a[s].split(p).join("") : -1 === c && (a[s] += " " + p));
                e = a.join(", "),
                n = l.join(", ")
            }
            return Et(t, this.p, e, n, this.clrs, this.dflt, i, this.pr, r, o)
        }
        ,
        t.parse = function(t, e, n, i, r, o, s) {
            return this.parseComplex(t.style, this.format(B(t, this.p, C, !1, this.dflt)), this.format(e), r, o)
        }
        ,
        A.registerSpecialProp = function(t, a, l) {
            o(t, {
                parser: function(t, e, n, i, r, o, s) {
                    r = new H(t,n,0,0,r,2,n,!1,l);
                    return r.plugin = o,
                    r.setRatio = a(t, e, i._tween, n),
                    r
                },
                priority: l
            })
        }
        ,
        A.useSVGTransformAttr = !0,
        "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(",")), q = x("transform"), zt = mt + "transform", Ht = x("transformOrigin"), U = null !== x("perspective"), Xt = e.Transform = function() {
            this.perspective = parseFloat(A.defaultTransformPerspective) || 0,
            this.force3D = !1 !== A.defaultForce3D && U && (A.defaultForce3D || "auto")
        }
        , Vt = Qt._gsScope.SVGElement, f = R.documentElement || {}, qt = (r = w || /Android/i.test(n) && !Qt._gsScope.chrome,
        R.createElementNS && f.appendChild && !r && (i = At("svg", f),
        Nt = (n = At("rect", i, {
            width: 100,
            height: 50,
            x: 100
        })).getBoundingClientRect().width,
        n.style[Ht] = "50% 50%",
        n.style[q] = "scaleX(0.5)",
        r = Nt === n.getBoundingClientRect().width && !(G && U),
        f.removeChild(i)),
        r), Ut = function(t) {
            var e, n = a("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, r = this.nextSibling, o = this.style.cssText;
            if (f.appendChild(n),
            n.appendChild(this),
            this.style.display = "block",
            t)
                try {
                    e = this.getBBox(),
                    this._originalGetBBox = this.getBBox,
                    this.getBBox = Ut
                } catch (t) {}
            else
                this._originalGetBBox && (e = this._originalGetBBox());
            return r ? i.insertBefore(this, r) : i.appendChild(this),
            f.removeChild(n),
            this.style.cssText = o,
            e
        }, Wt = function(t) {
            return !(!Vt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !function(e) {
                try {
                    return e.getBBox()
                } catch (t) {
                    return Ut.call(e, !0)
                }
            }(t))
        }, Yt = [1, 0, 0, 1, 0, 0], Gt = e.getTransform = function(t, e, n, i) {
            if (t._gsTransform && n && !i)
                return t._gsTransform;
            var r, o, s, a, l, u, c, f, p, h, d, _, m, g, y, v, b, w, x, T, O, P, S = n && t._gsTransform || new Xt, C = S.scaleX < 0, E = U && (parseFloat(B(t, Ht, e, !1, "0 0 0").split(" ")[2]) || S.zOrigin) || 0, k = parseFloat(A.defaultTransformPerspective) || 0;
            if (S.svg = !(!t.getCTM || !Wt(t)),
            S.svg && (Mt(t, B(t, Ht, e, !1, "50% 50%") + "", S, t.getAttribute("data-svg-origin")),
            V = A.useSVGTransformAttr || qt),
            (e = It(t)) !== Yt)
                for (r in 16 === e.length ? (o = e[0],
                s = e[1],
                a = e[2],
                x = e[3],
                l = e[4],
                u = e[5],
                c = e[6],
                w = e[7],
                f = e[8],
                p = e[9],
                h = e[10],
                d = e[12],
                _ = e[13],
                m = e[14],
                g = e[11],
                y = Math.atan2(c, h),
                S.zOrigin && (d = f * (m = -S.zOrigin) - e[12],
                _ = p * m - e[13],
                m = h * m + S.zOrigin - e[14]),
                S.rotationX = y * L,
                y && (P = l * (T = Math.cos(-y)) + f * (O = Math.sin(-y)),
                v = u * T + p * O,
                b = c * T + h * O,
                f = l * -O + f * T,
                p = u * -O + p * T,
                h = c * -O + h * T,
                g = w * -O + g * T,
                l = P,
                u = v,
                c = b),
                y = Math.atan2(-a, h),
                S.rotationY = y * L,
                y && (v = s * (T = Math.cos(-y)) - p * (O = Math.sin(-y)),
                b = a * T - h * O,
                p = s * O + p * T,
                h = a * O + h * T,
                g = x * O + g * T,
                o = P = o * T - f * O,
                s = v,
                a = b),
                y = Math.atan2(s, o),
                S.rotation = y * L,
                y && (P = o * (T = Math.cos(y)) + s * (O = Math.sin(y)),
                v = l * T + u * O,
                b = f * T + p * O,
                s = s * T - o * O,
                u = u * T - l * O,
                p = p * T - f * O,
                o = P,
                l = v,
                f = b),
                S.rotationX && 359.9 < Math.abs(S.rotationX) + Math.abs(S.rotation) && (S.rotationX = S.rotation = 0,
                S.rotationY = 180 - S.rotationY),
                y = Math.atan2(l, u),
                S.scaleX = (1e5 * Math.sqrt(o * o + s * s + a * a) + .5 | 0) / 1e5,
                S.scaleY = (1e5 * Math.sqrt(u * u + c * c) + .5 | 0) / 1e5,
                S.scaleZ = (1e5 * Math.sqrt(f * f + p * p + h * h) + .5 | 0) / 1e5,
                o /= S.scaleX,
                l /= S.scaleY,
                s /= S.scaleX,
                u /= S.scaleY,
                2e-5 < Math.abs(y) ? (S.skewX = y * L,
                l = 0,
                "simple" !== S.skewType && (S.scaleY *= 1 / Math.cos(y))) : S.skewX = 0,
                S.perspective = g ? 1 / (g < 0 ? -g : g) : 0,
                S.x = d,
                S.y = _,
                S.z = m,
                S.svg && (S.x -= S.xOrigin - (S.xOrigin * o - S.yOrigin * l),
                S.y -= S.yOrigin - (S.yOrigin * s - S.xOrigin * u))) : U && !i && e.length && S.x === e[4] && S.y === e[5] && (S.rotationX || S.rotationY) || (x = (w = 6 <= e.length) ? e[0] : 1,
                T = e[1] || 0,
                O = e[2] || 0,
                P = w ? e[3] : 1,
                S.x = e[4] || 0,
                S.y = e[5] || 0,
                v = Math.sqrt(x * x + T * T),
                b = Math.sqrt(P * P + O * O),
                a = x || T ? Math.atan2(T, x) * L : S.rotation || 0,
                c = O || P ? Math.atan2(O, P) * L + a : S.skewX || 0,
                S.scaleX = v,
                S.scaleY = b,
                S.rotation = a,
                S.skewX = c,
                U && (S.rotationX = S.rotationY = S.z = 0,
                S.perspective = k,
                S.scaleZ = 1),
                S.svg && (S.x -= S.xOrigin - (S.xOrigin * x + S.yOrigin * O),
                S.y -= S.yOrigin - (S.xOrigin * T + S.yOrigin * P))),
                90 < Math.abs(S.skewX) && Math.abs(S.skewX) < 270 && (C ? (S.scaleX *= -1,
                S.skewX += S.rotation <= 0 ? 180 : -180,
                S.rotation += S.rotation <= 0 ? 180 : -180) : (S.scaleY *= -1,
                S.skewX += S.skewX <= 0 ? 180 : -180)),
                S.zOrigin = E,
                S)
                    S[r] < 2e-5 && -2e-5 < S[r] && (S[r] = 0);
            return n && (t._gsTransform = S).svg && (V && t.style[q] ? Qt.default.delayedCall(.001, function() {
                Kt(t.style, q)
            }) : !V && t.getAttribute("transform") && Qt.default.delayedCall(.001, function() {
                t.removeAttribute("transform")
            })),
            S
        }
        , Zt = e.set3DTransformRatio = e.setTransformRatio = function(t) {
            var e, n, i, r, o, s, a, l, u, c, f, p, h, d, _, m, g, y, v = this.data, b = this.t.style, w = v.rotation, x = v.rotationX, T = v.rotationY, O = v.scaleX, P = v.scaleY, S = v.scaleZ, C = v.x, E = v.y, k = v.z, A = v.svg, M = v.perspective, I = v.force3D, L = v.skewY, R = v.skewX;
            if (L && (R += L,
            w += L),
            ((1 !== t && 0 !== t || "auto" !== I || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && I || k || M || T || x || 1 !== S) && (!V || !A) && U) {
                if (G && (O < (h = 1e-4) && -h < O && (O = S = 2e-5),
                P < h && -h < P && (P = S = 2e-5),
                !M || v.z || v.rotationX || v.rotationY || (M = 0)),
                w || R)
                    w *= D,
                    g = n = Math.cos(w),
                    d = o = Math.sin(w),
                    R && (w -= R * D,
                    g = Math.cos(w),
                    d = Math.sin(w),
                    "simple" === v.skewType && (e = Math.tan((R - L) * D),
                    g *= e = Math.sqrt(1 + e * e),
                    d *= e,
                    v.skewY && (e = Math.tan(L * D),
                    n *= e = Math.sqrt(1 + e * e),
                    o *= e))),
                    i = -d,
                    s = g;
                else {
                    if (!(T || x || 1 !== S || M || A))
                        return void (b[q] = (v.xPercent || v.yPercent ? "translate(" + v.xPercent + "%," + v.yPercent + "%) translate3d(" : "translate3d(") + C + "px," + E + "px," + k + "px)" + (1 !== O || 1 !== P ? " scale(" + O + "," + P + ")" : ""));
                    n = s = 1,
                    i = o = 0
                }
                t = 1,
                r = a = l = u = c = I = 0,
                f = M ? -1 / M : 0,
                p = v.zOrigin,
                h = 1e-6,
                _ = ",",
                m = "0",
                (w = T * D) && (g = Math.cos(w),
                c = f * (l = -(d = Math.sin(w))),
                r = n * d,
                a = o * d,
                f *= t = g,
                n *= g,
                o *= g),
                (w = x * D) && (e = i * (g = Math.cos(w)) + r * (d = Math.sin(w)),
                y = s * g + a * d,
                u = t * d,
                I = f * d,
                r = i * -d + r * g,
                a = s * -d + a * g,
                t *= g,
                f *= g,
                i = e,
                s = y),
                1 !== S && (r *= S,
                a *= S,
                t *= S,
                f *= S),
                1 !== P && (i *= P,
                s *= P,
                u *= P,
                I *= P),
                1 !== O && (n *= O,
                o *= O,
                l *= O,
                c *= O),
                (p || A) && (p && (C += r * -p,
                E += a * -p,
                k += t * -p + p),
                A && (C += v.xOrigin - (v.xOrigin * n + v.yOrigin * i) + v.xOffset,
                E += v.yOrigin - (v.xOrigin * o + v.yOrigin * s) + v.yOffset),
                C < h && -h < C && (C = m),
                E < h && -h < E && (E = m),
                k < h && -h < k && (k = 0)),
                d = (d = v.xPercent || v.yPercent ? "translate(" + v.xPercent + "%," + v.yPercent + "%) matrix3d(" : "matrix3d(") + ((n < h && -h < n ? m : n) + _ + (o < h && -h < o ? m : o) + _ + (l < h && -h < l ? m : l)) + (_ + (c < h && -h < c ? m : c) + _ + (i < h && -h < i ? m : i) + _ + (s < h && -h < s ? m : s)),
                x || T || 1 !== S ? d = d + _ + (u < h && -h < u ? m : u) + _ + (I < h && -h < I ? m : I) + _ + (r < h && -h < r ? m : r) + _ + (a < h && -h < a ? m : a) + _ + (t < h && -h < t ? m : t) + _ + (f < h && -h < f ? m : f) + _ : d += ",0,0,0,0,1,0,",
                b[q] = d += C + _ + E + _ + k + _ + (M ? 1 + -k / M : 1) + ")"
            } else
                w || R || A ? (w *= D,
                g = R * D,
                y = 1e5,
                n = Math.cos(w) * O,
                o = Math.sin(w) * O,
                i = Math.sin(w - g) * -P,
                s = Math.cos(w - g) * P,
                g && "simple" === v.skewType && (e = Math.tan(g - L * D),
                i *= e = Math.sqrt(1 + e * e),
                s *= e,
                L && (e = Math.tan(L * D),
                n *= e = Math.sqrt(1 + e * e),
                o *= e)),
                A && (C += v.xOrigin - (v.xOrigin * n + v.yOrigin * i) + v.xOffset,
                E += v.yOrigin - (v.xOrigin * o + v.yOrigin * s) + v.yOffset,
                V && (v.xPercent || v.yPercent) && (h = this.t.getBBox(),
                C += .01 * v.xPercent * h.width,
                E += .01 * v.yPercent * h.height),
                C < (h = 1e-6) && -h < C && (C = 0),
                E < h && -h < E && (E = 0)),
                d = (n * y | 0) / y + "," + (o * y | 0) / y + "," + (i * y | 0) / y + "," + (s * y | 0) / y + "," + C + "," + E + ")",
                A && V ? this.t.setAttribute("transform", "matrix(" + d) : b[q] = (v.xPercent || v.yPercent ? "translate(" + v.xPercent + "%," + v.yPercent + "%) matrix(" : "matrix(") + d) : b[q] = (v.xPercent || v.yPercent ? "translate(" + v.xPercent + "%," + v.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + P + "," + C + "," + E + ")"
        }
        , Kt = ((t = Xt.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0,
        t.scaleX = t.scaleY = t.scaleZ = 1,
        o("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, n, i, r, o, s) {
                if (i._lastParsedTransform !== s) {
                    var a, l, u, c, f, p, h, d, _ = (i._lastParsedTransform = s).scale && "function" == typeof s.scale ? s.scale : 0, m = (_ && (s.scale = _(k, t)),
                    t._gsTransform), g = t.style, y = Ft.length, v = s, b = {}, w = "transformOrigin", x = Gt(t, C, !0, v.parseTransform), T = v.transform && ("function" == typeof v.transform ? v.transform(k, E) : v.transform);
                    if (x.skewType = v.skewType || x.skewType || A.defaultSkewType,
                    i._transform = x,
                    "rotationZ"in v && (v.rotation = v.rotationZ),
                    T && "string" == typeof T && q)
                        (l = j.style)[q] = T,
                        l.display = "block",
                        l.position = "absolute",
                        -1 !== T.indexOf("%") && (l.width = B(t, "width"),
                        l.height = B(t, "height")),
                        R.body.appendChild(j),
                        a = Gt(j, null, !1),
                        "simple" === x.skewType && (a.scaleY *= Math.cos(a.skewX * D)),
                        x.svg && (f = x.xOrigin,
                        p = x.yOrigin,
                        a.x -= x.xOffset,
                        a.y -= x.yOffset,
                        (v.transformOrigin || v.svgOrigin) && (T = {},
                        Mt(t, F(v.transformOrigin), T, v.svgOrigin, v.smoothOrigin, !0),
                        f = T.xOrigin,
                        p = T.yOrigin,
                        a.x -= T.xOffset - x.xOffset,
                        a.y -= T.yOffset - x.yOffset),
                        (f || p) && (h = It(j, !0),
                        a.x -= f - (f * h[0] + p * h[2]),
                        a.y -= p - (f * h[1] + p * h[3]))),
                        R.body.removeChild(j),
                        a.perspective || (a.perspective = x.perspective),
                        null != v.xPercent && (a.xPercent = O(v.xPercent, x.xPercent)),
                        null != v.yPercent && (a.yPercent = O(v.yPercent, x.yPercent));
                    else if ("object" == typeof v) {
                        if (a = {
                            scaleX: O(null != v.scaleX ? v.scaleX : v.scale, x.scaleX),
                            scaleY: O(null != v.scaleY ? v.scaleY : v.scale, x.scaleY),
                            scaleZ: O(v.scaleZ, x.scaleZ),
                            x: O(v.x, x.x),
                            y: O(v.y, x.y),
                            z: O(v.z, x.z),
                            xPercent: O(v.xPercent, x.xPercent),
                            yPercent: O(v.yPercent, x.yPercent),
                            perspective: O(v.transformPerspective, x.perspective)
                        },
                        null != (c = v.directionalRotation))
                            if ("object" == typeof c)
                                for (l in c)
                                    v[l] = c[l];
                            else
                                v.rotation = c;
                        "string" == typeof v.x && -1 !== v.x.indexOf("%") && (a.x = 0,
                        a.xPercent = O(v.x, x.xPercent)),
                        "string" == typeof v.y && -1 !== v.y.indexOf("%") && (a.y = 0,
                        a.yPercent = O(v.y, x.yPercent)),
                        a.rotation = P("rotation"in v ? v.rotation : "shortRotation"in v ? v.shortRotation + "_short" : x.rotation, x.rotation, "rotation", b),
                        U && (a.rotationX = P("rotationX"in v ? v.rotationX : "shortRotationX"in v ? v.shortRotationX + "_short" : x.rotationX || 0, x.rotationX, "rotationX", b),
                        a.rotationY = P("rotationY"in v ? v.rotationY : "shortRotationY"in v ? v.shortRotationY + "_short" : x.rotationY || 0, x.rotationY, "rotationY", b)),
                        a.skewX = P(v.skewX, x.skewX),
                        a.skewY = P(v.skewY, x.skewY)
                    }
                    for (U && null != v.force3D && (x.force3D = v.force3D,
                    u = !0),
                    (h = x.force3D || x.z || x.rotationX || x.rotationY || a.z || a.rotationX || a.rotationY || a.perspective) || null == v.scale || (a.scaleZ = 1); -1 < --y; )
                        (1e-6 < (T = a[d = Ft[y]] - x[d]) || T < -1e-6 || null != v[d] || null != ht[d]) && (u = !0,
                        r = new H(x,d,x[d],T,r),
                        d in b && (r.e = b[d]),
                        r.xs0 = 0,
                        r.plugin = o,
                        i._overwriteProps.push(r.n));
                    T = "function" == typeof v.transformOrigin ? v.transformOrigin(k, E) : v.transformOrigin,
                    x.svg && (T || v.svgOrigin) && (f = x.xOffset,
                    p = x.yOffset,
                    Mt(t, F(T), a, v.svgOrigin, v.smoothOrigin),
                    r = Ct(x, "xOrigin", (m ? x : a).xOrigin, a.xOrigin, r, w),
                    r = Ct(x, "yOrigin", (m ? x : a).yOrigin, a.yOrigin, r, w),
                    f === x.xOffset && p === x.yOffset || (r = Ct(x, "xOffset", m ? f : x.xOffset, x.xOffset, r, w),
                    r = Ct(x, "yOffset", m ? p : x.yOffset, x.yOffset, r, w)),
                    T = "0px 0px"),
                    (T || U && h && x.zOrigin) && (q ? (u = !0,
                    d = Ht,
                    T = T || (T = (B(t, d, C, !1, "50% 50%") + "").split(" "))[0] + " " + T[1] + " " + x.zOrigin + "px",
                    T += "",
                    (r = new H(g,d,0,0,r,-1,w)).b = g[d],
                    r.plugin = o,
                    U ? (l = x.zOrigin,
                    T = T.split(" "),
                    x.zOrigin = (2 < T.length ? parseFloat(T[2]) : l) || 0,
                    r.xs0 = r.e = T[0] + " " + (T[1] || "50%") + " 0px",
                    (r = new H(x,"zOrigin",0,0,r,-1,r.n)).b = l,
                    r.xs0 = r.e = x.zOrigin) : r.xs0 = r.e = T) : F(T + "", x)),
                    u && (i._transformType = x.svg && V || !h && 3 !== this._transformType ? 2 : 3),
                    _ && (s.scale = _)
                }
                return r
            },
            allowFunc: !0,
            prefix: !0
        }),
        o("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        o("clipPath", {
            defaultValue: "inset(0%)",
            prefix: !0,
            multi: !0,
            formatter: Ot("inset(0% 0% 0% 0%)", !1, !0)
        }),
        o("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, n, i, r, o) {
                e = this.format(e);
                for (var s, a, l, u, c, f, p, h, d, _, m = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], g = t.style, y = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), b = e.split(" "), w = 0; w < m.length; w++)
                    this.p.indexOf("border") && (m[w] = x(m[w])),
                    -1 !== (l = a = B(t, m[w], C, !1, "0px")).indexOf(" ") && (l = (a = l.split(" "))[0],
                    a = a[1]),
                    u = s = b[w],
                    d = parseFloat(l),
                    _ = l.substr((d + "").length),
                    (f = "" === (f = (p = "=" === u.charAt(1)) ? (c = parseInt(u.charAt(0) + "1", 10),
                    u = u.substr(2),
                    c *= parseFloat(u),
                    u.substr((c + "").length - (c < 0 ? 1 : 0)) || "") : (c = parseFloat(u),
                    u.substr((c + "").length))) ? W[n] || _ : f) !== _ && (h = T(t, "borderLeft", d, _),
                    d = T(t, "borderTop", d, _),
                    a = "%" === f ? (l = h / y * 100 + "%",
                    d / v * 100 + "%") : "em" === f ? (l = h / (_ = T(t, "borderLeft", 1, "em")) + "em",
                    d / _ + "em") : (l = h + "px",
                    d + "px"),
                    p && (u = parseFloat(l) + c + f,
                    s = parseFloat(a) + c + f)),
                    r = Et(g, m[w], l + " " + a, u + " " + s, !1, "0px", r);
                return r
            },
            prefix: !0,
            formatter: Ot("0px 0px 0px 0px", !1, !0)
        }),
        o("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(t, e, n, i, r, o) {
                return Et(t.style, n, this.format(B(t, n, C, !1, "0px 0px")), this.format(e), !1, "0px", r)
            },
            prefix: !0,
            formatter: Ot("0px 0px", !1, !0)
        }),
        o("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, n, i, r, o) {
                var s, a, l, u, c, f = "background-position", p = C || d(t), h = this.format((p ? w ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), p = this.format(e);
                if (-1 !== h.indexOf("%") != (-1 !== p.indexOf("%")) && p.split(",").length < 2 && (f = B(t, "backgroundImage").replace(lt, "")) && "none" !== f) {
                    for (s = h.split(" "),
                    a = p.split(" "),
                    _t.setAttribute("src", f),
                    l = 2; -1 < --l; )
                        (u = -1 !== (h = s[l]).indexOf("%")) != (-1 !== a[l].indexOf("%")) && (c = 0 === l ? t.offsetWidth - _t.width : t.offsetHeight - _t.height,
                        s[l] = u ? parseFloat(h) / 100 * c + "px" : parseFloat(h) / c * 100 + "%");
                    h = s.join(" ")
                }
                return this.parseComplex(t.style, h, p, r, o)
            },
            formatter: F
        }),
        o("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(t) {
                return "co" === (t += "").substr(0, 2) ? t : F(-1 === t.indexOf(" ") ? t + " " + t : t)
            }
        }),
        o("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        o("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        o("transformStyle", {
            prefix: !0
        }),
        o("backfaceVisibility", {
            prefix: !0
        }),
        o("userSelect", {
            prefix: !0
        }),
        o("margin", {
            parser: Pt("marginTop,marginRight,marginBottom,marginLeft")
        }),
        o("padding", {
            parser: Pt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        o("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, n, i, r, o) {
                var s, a;
                return e = w < 9 ? (s = t.currentStyle,
                a = w < 8 ? " " : ",",
                s = "rect(" + s.clipTop + a + s.clipRight + a + s.clipBottom + a + s.clipLeft + ")",
                this.format(e).split(",").join(a)) : (s = this.format(B(t, this.p, C, !1, this.dflt)),
                this.format(e)),
                this.parseComplex(t.style, s, e, r, o)
            }
        }),
        o("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        o("autoRound,strictUnits", {
            parser: function(t, e, n, i, r) {
                return r
            }
        }),
        o("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, n, i, r, o) {
                var s = B(t, "borderTopWidth", C, !1, "0px")
                  , e = this.format(e).split(" ")
                  , a = e[0].replace(et, "");
                return "px" !== a && (s = parseFloat(s) / T(t, "borderTopWidth", 1, a) + a),
                this.parseComplex(t.style, this.format(s + " " + B(t, "borderTopStyle", C, !1, "solid") + " " + B(t, "borderTopColor", C, !1, "#000")), e.join(" "), r, o)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(z) || ["#000"])[0]
            }
        }),
        o("borderWidth", {
            parser: Pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        o("float,cssFloat,styleFloat", {
            parser: function(t, e, n, i, r, o) {
                var t = t.style
                  , s = "cssFloat"in t ? "cssFloat" : "styleFloat";
                return new H(t,s,0,0,r,-1,n,!1,0,t[s],e)
            }
        }),
        o("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, n, i, r, o) {
                var s = parseFloat(B(t, "opacity", C, !1, "1"))
                  , a = t.style
                  , l = "autoAlpha" === n;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s),
                l && 1 === s && "hidden" === B(t, "visibility", C) && 0 !== e && (s = 0),
                N ? r = new H(a,"opacity",s,e - s,r) : ((r = new H(a,"opacity",100 * s,100 * (e - s),r)).xn1 = l ? 1 : 0,
                a.zoom = 1,
                r.type = 2,
                r.b = "alpha(opacity=" + r.s + ")",
                r.e = "alpha(opacity=" + (r.s + r.c) + ")",
                r.data = t,
                r.plugin = o,
                r.setRatio = Rt),
                l && ((r = new H(a,"visibility",0,0,r,-1,null,!1,0,0 !== s ? "inherit" : "hidden",0 === e ? "hidden" : "inherit")).xs0 = "inherit",
                i._overwriteProps.push(r.n),
                i._overwriteProps.push(n)),
                r
            }
        }),
        function(t, e) {
            e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
            t.removeProperty(e.replace(st, "-$1").toLowerCase())) : t.removeAttribute(e))
        }
        );
        o("className", {
            parser: function(t, e, n, i, r, o, s) {
                var a, l, u, c = t.getAttribute("class") || "", f = t.style.cssText;
                if ((r = i._classNamePT = new H(t,n,0,0,r,2)).setRatio = Dt,
                r.pr = -11,
                h = !0,
                r.b = c,
                n = p(t, C),
                a = t._gsClassPT) {
                    for (l = {},
                    u = a.data; u; )
                        l[u.p] = 1,
                        u = u._next;
                    a.setRatio(1)
                }
                return (t._gsClassPT = r).e = "=" !== e.charAt(1) ? e : c.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                t.setAttribute("class", r.e),
                a = g(t, n, p(t), s, l),
                t.setAttribute("class", c),
                r.data = a.firstMPT,
                t.style.cssText !== f && (t.style.cssText = f),
                r = r.xfirst = i.parse(t, a.difs, r, o)
            }
        });
        for (o("clearProps", {
            parser: function(t, e, n, i, r) {
                return (r = new H(t,n,0,0,r,2)).setRatio = jt,
                r.e = e,
                r.pr = -10,
                r.data = i._tween,
                h = !0,
                r
            }
        }),
        t = "bezier,throwProps,physicsProps,physics2D".split(","),
        X = t.length; X--; )
            Bt(t[X]);
        (t = A.prototype)._firstPT = t._lastParsedTransform = t._transform = null,
        t._onInitTween = function(t, e, n, i) {
            if (!t.nodeType)
                return !1;
            this._target = E = t,
            this._tween = n,
            this._vars = e,
            k = i,
            Y = e.autoRound,
            h = !1,
            W = e.suffixMap || A.suffixMap,
            C = d(t),
            y = this._overwriteProps;
            var r, o, s, a, l, u, i = t.style;
            if (!v || "" !== i.zIndex || "auto" !== (u = B(t, "zIndex", C)) && "" !== u || this._addLazySet(i, "zIndex", 0),
            "string" == typeof e && (s = i.cssText,
            u = p(t, C),
            i.cssText = s + ";" + e,
            u = g(t, u, p(t)).difs,
            !N && it.test(e) && (u.opacity = parseFloat(RegExp.$1)),
            e = u,
            i.cssText = s),
            e.className ? this._firstPT = r = _.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = r = this.parse(t, e, null),
            this._transformType) {
                for (u = 3 === this._transformType,
                q ? b && (v = !0,
                "" !== i.zIndex || "auto" !== (e = B(t, "zIndex", C)) && "" !== e || this._addLazySet(i, "zIndex", 0),
                Z && this._addLazySet(i, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (u ? "visible" : "hidden"))) : i.zoom = 1,
                o = r; o && o._next; )
                    o = o._next;
                e = new H(t,"transform",0,0,null,2),
                this._linkCSSP(e, null, o),
                e.setRatio = q ? Zt : Lt,
                e.data = this._transform || Gt(t, C, !0),
                e.tween = n,
                e.pr = -1,
                y.pop()
            }
            if (h) {
                for (; r; ) {
                    for (l = r._next,
                    o = s; o && o.pr > r.pr; )
                        o = o._next;
                    (r._prev = o ? o._prev : a) ? r._prev._next = r : s = r,
                    (r._next = o) ? o._prev = r : a = r,
                    r = l
                }
                this._firstPT = s
            }
            return !0
        }
        ,
        t.parse = function(t, e, n, i) {
            var r, o, s, a, l, u, c, f, p = t.style;
            for (r in e) {
                if (l = e[r],
                a = _[r],
                "function" != typeof l || a && a.allowFunc || (l = l(k, E)),
                a)
                    n = a.parse(t, l, r, this, n, i, e);
                else {
                    if ("--" === r.substr(0, 2)) {
                        this._tween._propLookup[r] = this._addTween.call(this._tween, t.style, "setProperty", d(t).getPropertyValue(r) + "", l + "", r, !1, r);
                        continue
                    }
                    a = B(t, r, C) + "",
                    c = "string" == typeof l,
                    "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || c && ot.test(l) ? (c || (l = (3 < (l = Tt(l)).length ? "rgba(" : "rgb(") + l.join(",") + ")"),
                    n = Et(p, r, a, l, !0, "transparent", n, 0, i)) : c && pt.test(l) ? n = Et(p, r, a, l, !0, null, n, 0, i) : (u = (o = parseFloat(a)) || 0 === o ? a.substr((o + "").length) : "",
                    "" !== a && "auto" !== a || (u = "width" === r || "height" === r ? (o = function(t, e, n) {
                        if ("svg" === (t.nodeName + "").toLowerCase())
                            return (n || d(t))[e] || 0;
                        if (t.getCTM && Wt(t))
                            return t.getBBox()[e] || 0;
                        var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
                          , r = bt[e]
                          , o = r.length;
                        for (n = n || d(t); -1 < --o; )
                            i = (i -= parseFloat(B(t, "padding" + r[o], n, !0)) || 0) - (parseFloat(B(t, "border" + r[o] + "Width", n, !0)) || 0);
                        return i
                    }(t, r, C),
                    "px") : "left" === r || "top" === r ? (o = vt(t, r, C),
                    "px") : (o = "opacity" !== r ? 0 : 1,
                    "")),
                    "" === (c = (f = c && "=" === l.charAt(1)) ? (s = parseInt(l.charAt(0) + "1", 10),
                    l = l.substr(2),
                    s *= parseFloat(l),
                    l.replace(et, "")) : (s = parseFloat(l),
                    c ? l.replace(et, "") : "")) && (c = r in W ? W[r] : u),
                    l = s || 0 === s ? (f ? s + o : s) + c : e[r],
                    u === c || "" === c && "lineHeight" !== r || (s || 0 === s) && o && (o = T(t, r, o, u),
                    "%" === c ? (o /= T(t, r, 100, "%") / 100,
                    !0 !== e.strictUnits && (a = o + "%")) : "em" === c || "rem" === c || "vw" === c || "vh" === c ? o /= T(t, r, 1, c) : "px" !== c && (s = T(t, r, s, c),
                    c = "px"),
                    f && (s || 0 === s) && (l = s + o + c)),
                    f && (s += o),
                    !o && 0 !== o || !s && 0 !== s ? void 0 !== p[r] && (l || l + "" != "NaN" && null != l) ? (n = new H(p,r,s || o || 0,0,n,-1,r,!1,0,a,l)).xs0 = "none" !== l || "display" !== r && -1 === r.indexOf("Style") ? l : a : m(e[r]) : (n = new H(p,r,o,s - o,n,0,r,!1 !== Y && ("px" === c || "zIndex" === r),0,a,l)).xs0 = c)
                }
                i && n && !n.plugin && (n.plugin = i)
            }
            return n
        }
        ,
        t.setRatio = function(t) {
            var e, n, i, r = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; r; ) {
                        if (e = r.c * t + r.s,
                        r.r ? e = r.r(e) : e < 1e-6 && -1e-6 < e && (e = 0),
                        r.type)
                            if (1 === r.type)
                                if (2 === (i = r.l))
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === i)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === i)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === i)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (n = r.xs0 + e + r.xs1,
                                    i = 1; i < r.l; i++)
                                        n += r["xn" + i] + r["xs" + (i + 1)];
                                    r.t[r.p] = n
                                }
                            else
                                -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else
                            r.t[r.p] = e + r.xs0;
                        r = r._next
                    }
                else
                    for (; r; )
                        2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t),
                        r = r._next;
            else
                for (; r; ) {
                    if (2 !== r.type)
                        if (r.r && -1 !== r.type)
                            if (e = r.r(r.s + r.c),
                            r.type) {
                                if (1 === r.type) {
                                    for (i = r.l,
                                    n = r.xs0 + e + r.xs1,
                                    i = 1; i < r.l; i++)
                                        n += r["xn" + i] + r["xs" + (i + 1)];
                                    r.t[r.p] = n
                                }
                            } else
                                r.t[r.p] = e + r.xs0;
                        else
                            r.t[r.p] = r.e;
                    else
                        r.setRatio(t);
                    r = r._next
                }
        }
        ,
        t._enableTransforms = function(t) {
            this._transform = this._transform || Gt(this._target, C, !0),
            this._transformType = this._transform.svg && V || !t && 3 !== this._transformType ? 2 : 3
        }
        ;
        function $t(t) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        }
        function Jt(t, e, n) {
            var i, r, o, s;
            if (t.slice)
                for (r = t.length; -1 < --r; )
                    Jt(t[r], e, n);
            else
                for (r = (i = t.childNodes).length; -1 < --r; )
                    s = (o = i[r]).type,
                    o.style && (e.push(p(o)),
                    n && n.push(o)),
                    1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Jt(o, e, n)
        }
        t._addLazySet = function(t, e, n) {
            t = this._firstPT = new H(t,e,0,0,this._firstPT,2);
            t.e = n,
            t.setRatio = $t,
            t.data = this
        }
        ,
        t._linkCSSP = function(t, e, n, i) {
            return t && (e && (e._prev = t),
            t._next && (t._next._prev = t._prev),
            t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
            i = !0),
            n ? n._next = t : i || null !== this._firstPT || (this._firstPT = t),
            t._next = e,
            t._prev = n),
            t
        }
        ,
        t._mod = function(t) {
            for (var e = this._firstPT; e; )
                "function" == typeof t[e.p] && (e.r = t[e.p]),
                e = e._next
        }
        ,
        t._kill = function(t) {
            var e, n, i, r = t;
            if (t.autoAlpha || t.alpha) {
                for (n in r = {},
                t)
                    r[n] = t[n];
                r.opacity = 1,
                r.autoAlpha && (r.visibility = 1)
            }
            for (t.className && (e = this._classNamePT) && ((i = e.xfirst) && i._prev ? this._linkCSSP(i._prev, e._next, i._prev._prev) : i === this._firstPT && (this._firstPT = e._next),
            e._next && this._linkCSSP(e._next, e._next._next, i._prev),
            this._classNamePT = null),
            e = this._firstPT; e; )
                e.plugin && e.plugin !== n && e.plugin._kill && (e.plugin._kill(t),
                n = e.plugin),
                e = e._next;
            return Qt.TweenPlugin.prototype._kill.call(this, r)
        }
        ;
        return A.cascadeTo = function(t, e, n) {
            var i, r, o, s, a = Qt.default.to(t, e, n), l = [a], u = [], c = [], f = [], p = Qt.default._internals.reservedProps;
            for (t = a._targets || a.target,
            Jt(t, u, f),
            a.render(e, !0, !0),
            Jt(t, c),
            a.render(0, !0, !0),
            a._enabled(!0),
            i = f.length; -1 < --i; )
                if ((r = g(f[i], u[i], c[i])).firstMPT) {
                    for (o in r = r.difs,
                    n)
                        p[o] && (r[o] = n[o]);
                    for (o in s = {},
                    r)
                        s[o] = u[i][o];
                    l.push(Qt.default.fromTo(f[i], e, s, r))
                }
            return l
        }
        ,
        Qt.TweenPlugin.activate([A]),
        A
    }, !0),
    Qt.globals.CSSPlugin)
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
      , r = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    i(n(7)))
      , o = i(n(6));
    function s(t) {
        var n = this;
        this._renderItem = null,
        this.onForegroundColorChange = function() {
            n.render(0, 0)
        }
        ,
        this.renderCallback = function(t, e) {
            n.render(t, e)
        }
        ,
        this.cursorName = t,
        o.default.Instance.onForegroundColorChange.sub(this.onForegroundColorChange)
    }
    s.prototype.activate = function(t) {}
    ,
    s.prototype.deactivate = function() {
        this.stopRender()
    }
    ,
    s.prototype.getElement = function() {
        return null
    }
    ,
    s.prototype.startRender = function() {
        this.render(0, 0),
        null === this._renderItem && (this._renderItem = r.default.Instance.add(this.renderCallback, 60))
    }
    ,
    s.prototype.stopRender = function() {
        null !== this._renderItem && (r.default.Instance.remove(this._renderItem),
        this._renderItem = null)
    }
    ,
    s.prototype.render = function(t, e) {}
    ,
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
      , r = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(3))
      , o = i(n(17))
      , s = i(n(19));
    function a() {
        var e = this;
        this._links = [],
        this._activeKeyCodes = [],
        this.onFocus = function(t) {
            e._activeKeyCodes = []
        }
        ,
        this.onKeyDown = function(t) {
            -1 === e._activeKeyCodes.indexOf(t.keyCode) && e._activeKeyCodes.push(t.keyCode)
        }
        ,
        this.onKeyUp = function(t) {
            t = e._activeKeyCodes.indexOf(t.keyCode);
            -1 !== t && e._activeKeyCodes.splice(t, 1)
        }
        ,
        this.onLinkClick = function(t) {
            e.handleLinkClick(t.link, t.getTarget())
        }
        ,
        window.addEventListener("keydown", this.onKeyDown),
        window.addEventListener("keyup", this.onKeyUp),
        window.addEventListener("focus", this.onFocus)
    }
    Object.defineProperty(a, "Instance", {
        get: function() {
            return null == this._instance && (this._instance = new a),
            this._instance
        },
        enumerable: !1,
        configurable: !0
    }),
    a.prototype.add = function(t) {
        t = new l(t);
        t.onClick.subscribe(this.onLinkClick),
        this._links.push(t)
    }
    ,
    a.prototype.addAllAtags = function(t) {
        var e = this;
        t.querySelectorAll("a").forEach(function(t) {
            return e.add(t)
        })
    }
    ,
    a.prototype.remove = function(t) {
        for (var e = this._links.length, n = 0; n < e; n++)
            if (this._links[n].target === t)
                return this._links[n].dispose(),
                void this._links.splice(n, 1)
    }
    ,
    a.prototype.removeAllAtags = function(t) {
        var e = this;
        t.querySelectorAll("a").forEach(function(t) {
            return e.remove(t)
        })
    }
    ,
    a.prototype.handleLinkClick = function(t, e) {
        void 0 === e && (e = null);
        var n = s.default.getBaseUrl();
        this.useTemplate(t) ? (n = t.replace(n, ""),
        -1 === this._activeKeyCodes.indexOf(91) ? o.default.Instance.goto(n) : window.open(n, "_blank")) : -1 !== t.indexOf("mailto:") ? window.location.href = t : (n = -1 !== this._activeKeyCodes.indexOf(91) ? "_blank" : null === e ? "_self" : e,
        window.open(t, n))
    }
    ,
    a.prototype.useTemplate = function(t) {
        return s.default.isInternal(t) && !s.default.isSubdomain(t) && !s.default.isEmail(t) && !s.default.isFile(t)
    }
    ,
    e.default = a;
    Object.defineProperty(u.prototype, "onClick", {
        get: function() {
            return this._onClick.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    u.prototype.getTarget = function() {
        return this.target instanceof HTMLAnchorElement ? this.target.target : null
    }
    ,
    u.prototype.dispose = function() {
        this.onClick.clear(),
        this.target.removeEventListener("click", this.handleClickEvent)
    }
    ;
    var l = u;
    function u(t) {
        var e = this;
        this._onClick = new r.SimpleEventDispatcher,
        this.link = "",
        this.handleClickEvent = function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            e._onClick.dispatch(e)
        }
        ,
        this.target = t,
        this.link = this.target.toString(),
        this.target.addEventListener("click", this.handleClickEvent)
    }
}
, function(t, e) {
    var n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    function i() {}
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    i.getRandomHex = function(t) {
        return ((t = void 0 === t ? !0 : t) ? "#" : "") + Math.floor(16777215 * Math.random()).toString(16)
    }
    ,
    i.hexToRGB = function(t, e) {
        var n = parseInt(t.slice(1, 3), 16)
          , i = parseInt(t.slice(3, 5), 16)
          , t = parseInt(t.slice(5, 7), 16);
        return e ? "rgba(" + n + ", " + i + ", " + t + ", " + e + ")" : "rgb(" + n + ", " + i + ", " + t + ")"
    }
    ,
    i.rgbToHex = function(t, e, n) {
        return "#" + ((1 << 24) + (t << 16) + (e << 8) + n).toString(16).slice(1)
    }
    ,
    e.default = i
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(3);
    function r() {
        var t = this;
        this._windowHeight = 0,
        this._windowWidth = 0,
        this._bodyHeight = 0,
        this._bodyWidth = 0,
        this._triggerResize = new i.SignalDispatcher,
        this._triggerBeforeResize = new i.SignalDispatcher,
        this._triggerAfterResize = new i.SignalDispatcher,
        this.internalResize = function() {
            t._triggerBeforeResize.dispatch(),
            t._windowWidth = window.innerWidth,
            t._windowHeight = window.innerHeight,
            t._windowHeight = t._heightCalc.offsetHeight,
            t._bodyWidth = document.body.offsetWidth,
            t._bodyHeight = document.body.offsetHeight,
            t._triggerResize.dispatch(),
            t._triggerAfterResize.dispatch()
        }
        ,
        (r._instance = this)._heightCalc = document.createElement("div"),
        this._heightCalc.style.position = "absolute",
        this._heightCalc.style.height = "100vh",
        document.body.appendChild(this._heightCalc),
        this._windowHeight = this._heightCalc.offsetHeight,
        window.addEventListener("resize", this.internalResize),
        this.internalResize()
    }
    Object.defineProperty(r, "Instance", {
        get: function() {
            return this._instance
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "windowHeight", {
        get: function() {
            return this._windowHeight
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "windowWidth", {
        get: function() {
            return this._windowWidth
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "bodyHeight", {
        get: function() {
            return this._bodyHeight
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "bodyWidth", {
        get: function() {
            return this._bodyWidth
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "onResize", {
        get: function() {
            return this._triggerResize.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "onBeforeResize", {
        get: function() {
            return this._triggerBeforeResize.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "onAfterResize", {
        get: function() {
            return this._triggerAfterResize.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    e.default = r
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Subscription = e.EventListBase = e.DispatcherWrapper = e.DispatcherBase = void 0;
    var i = n(52)
      , r = (Object.defineProperty(e, "DispatcherBase", {
        enumerable: !0,
        get: function() {
            return i.DispatcherBase
        }
    }),
    Object.defineProperty(e, "DispatcherWrapper", {
        enumerable: !0,
        get: function() {
            return i.DispatcherWrapper
        }
    }),
    Object.defineProperty(e, "EventListBase", {
        enumerable: !0,
        get: function() {
            return i.EventListBase
        }
    }),
    n(29));
    Object.defineProperty(e, "Subscription", {
        enumerable: !0,
        get: function() {
            return r.Subscription
        }
    })
}
, function(t, e, n) {
    "use strict";
    function i(t, e, n, i) {
        void 0 === t && (t = 0),
        void 0 === e && (e = 0),
        void 0 === n && (n = 0),
        void 0 === i && (i = 0),
        this.x = 0,
        this.y = 0,
        this.width = 0,
        this.height = 0,
        this.x = t,
        this.y = e,
        this.width = n,
        this.height = i
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    i.prototype.apply = function(t) {
        this.x += t.x,
        this.y += t.y,
        this.width += t.width,
        this.height += t.height
    }
    ,
    i.prototype.convertFrom = function(t) {
        this.x = t.left,
        this.y = t.top,
        this.width = t.width,
        this.height = t.height
    }
    ,
    i.from = function(t) {
        return new i(t.left,t.top,t.width,t.height)
    }
    ,
    e.default = i
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
      , r = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Route = void 0,
    i(n(18)))
      , o = i(n(36))
      , s = n(3)
      , a = i(n(2))
      , l = i(n(21))
      , u = i(n(19));
    function c(t, e) {
        var n = this;
        this._onNewTemplate = new s.SimpleEventDispatcher,
        this._onLoadingStart = new s.SignalDispatcher,
        this._onLoadingDone = new s.SignalDispatcher,
        this._onNewPath = new s.SignalDispatcher,
        this._pageLoader = new XMLHttpRequest,
        this._isLoading = !1,
        this._queuedLoadLinks = [],
        this._urlChangeMode = "",
        this._routes = [],
        this.overrideQueuedTemplate = !0,
        this.onHashChanged = function() {
            n.goto(window.location.href, "replace")
        }
        ,
        this.onPageLoaded = function() {
            var t;
            4 === n._pageLoader.readyState && 200 === n._pageLoader.status && ((t = document.createElement("html")).innerHTML = n._pageLoader.responseText,
            n.saveLocally(n._pageLoader.responseURL, n._pageLoader.responseText),
            n.createNewTemplate(t, u.default.getWellFormatedPath(n._pageLoader.responseURL)))
        }
        ,
        this.onNewTemplateReady = function() {
            n._switcher.addNewTemplate(n._latestLoadedTemplate),
            n.isLoadingTemplate() && n._queuedLoadLinks.length <= 0 && (n._onLoadingDone.dispatch(),
            n._isLoading = !1),
            n.loadNextQueued()
        }
        ,
        this.onOutAnimationDone = function(t) {
            t.rootModule.removeThis()
        }
        ,
        this.setSwitcher(e),
        this._currentUrl = window.location.href,
        (c._instance = this)._pageLoader = new XMLHttpRequest,
        window.onpopstate = this.onHashChanged,
        this._templateLayer = t
    }
    Object.defineProperty(c, "Instance", {
        get: function() {
            return this._instance
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(c.prototype, "onNewTemplate", {
        get: function() {
            return this._onNewTemplate.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(c.prototype, "onLoadingStart", {
        get: function() {
            return this._onLoadingStart.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(c.prototype, "onLoadingDone", {
        get: function() {
            return this._onLoadingDone.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(c.prototype, "onNewPath", {
        get: function() {
            return this._onNewPath.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    c.prototype.createBodyTemplate = function() {
        var t, e = this.getRoute(window.location.href.replace(u.default.getBaseUrl(), ""));
        e ? ((t = document.body.querySelector(".template")).parentElement.removeChild(t),
        this.goto(e.url, "replace")) : this.createNewTemplate(document.body, u.default.getWellFormatedPath(window.location.href), !1)
    }
    ,
    c.prototype.addRoute = function(t) {
        this._routes.push(t)
    }
    ,
    c.prototype.getCurrentTemplate = function() {
        return this._currentTemplate
    }
    ,
    c.prototype.setSwitcher = function(t) {
        this._switcher && this._switcher.kill(),
        this._switcher = t,
        this._switcher.setManager(this)
    }
    ,
    c.prototype.goto = function(t, e) {
        this._urlChangeMode = e = void 0 === e ? "push" : e;
        e = this.getRoute(t);
        e && e.hardRedirect && (t = e.pointer),
        this._currentUrl !== t && (this._currentUrl = t,
        "push" === this._urlChangeMode ? history.pushState(t, t, t) : "replace" === this._urlChangeMode && history.replaceState(t, t, t),
        e && (t = e.pointer),
        this._onNewPath.dispatch(),
        this._switcher.urlChange(),
        this._isLoading ? this.queueUrl(t, this.overrideQueuedTemplate) : this.loadPage(t))
    }
    ,
    c.prototype.getRoute = function(t) {
        for (var e = this._routes.length, n = 0; n < e; n++)
            if (this._routes[n].url.replace("/", "") === t.replace("/", ""))
                return this._routes[n];
        return null
    }
    ,
    c.prototype.loadNextQueued = function() {
        0 < this._queuedLoadLinks.length && this.loadPage(this._queuedLoadLinks.shift())
    }
    ,
    c.prototype.queueUrl = function(t, e) {
        (e = void 0 === e ? !0 : e) && (this._queuedLoadLinks = []),
        this._queuedLoadLinks.push(t)
    }
    ,
    c.prototype.getUrlChangeMode = function() {
        return this._urlChangeMode
    }
    ,
    c.prototype.loadPage = function(t) {
        this.isLoadingTemplate() || this._onLoadingStart.dispatch(),
        this._isLoading = !0;
        var e, n = this.getLocally(t);
        n ? ((e = document.createElement("html")).innerHTML = n,
        this.createNewTemplate(e, u.default.getWellFormatedPath(t))) : (this._pageLoader.onreadystatechange = this.onPageLoaded,
        this._pageLoader.open("POST", t, !0),
        this._pageLoader.setRequestHeader("Content-type", "text/html"),
        this._pageLoader.send())
    }
    ,
    c.prototype.createNewTemplate = function(t, e, n) {
        void 0 === n && (n = !0);
        t = t.querySelector(".template");
        if (n)
            try {
                t = t.cloneNode(!0)
            } catch (t) {
                return
            }
        this.isLoadingTemplate() || this._onLoadingStart.dispatch(),
        this._isLoading = !0,
        this._latestLoadedNode = a.default.create(t, null, !1),
        this._latestLoadedTemplate = this._latestLoadedNode.getComponentByType(r.default),
        this._latestLoadedTemplate.path = e,
        this._latestLoadedTemplate.isBuild() ? this.onNewTemplateReady() : this._latestLoadedTemplate.onBuild.one(this.onNewTemplateReady)
    }
    ,
    c.prototype.saveLocally = function(t, e) {
        c.localCacheHash && (t = c.localCacheHash + "_" + u.default.getWellFormatedPath(t),
        localStorage.setItem(t, e))
    }
    ,
    c.prototype.getLocally = function(t) {
        return c.localCacheHash ? (t = c.localCacheHash + "_" + u.default.getWellFormatedPath(t),
        localStorage.getItem(t)) : null
    }
    ,
    c.prototype.isLoadingTemplate = function() {
        return this._isLoading
    }
    ,
    c.prototype.setTemplate = function(t) {
        var e = new o.default(t);
        return this._currentTemplate = t,
        this._onNewTemplate.dispatch(t),
        this._templateLayer.style.visibility = "visible",
        document.body.style.visibility = "visible",
        l.default.addChild(this._currentTemplate, this._templateLayer, !1),
        this._latestLoadedNode.getComponents().forEach(function(t) {
            t.__tryAwake()
        }),
        e
    }
    ,
    c.prototype.removeTemplate = function(t) {
        t.__tryUnload();
        t = new o.default(t);
        return t.onAllComplete.one(this.onOutAnimationDone),
        t
    }
    ,
    c.localCacheHash = null,
    e.default = c,
    e.Route = function(t, e, n) {
        void 0 === n && (n = !1),
        this.hardRedirect = !1,
        this.url = t,
        this.pointer = e,
        this.hardRedirect = n
    }
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(2))), l = n(5), u = n(3), c = s(n(17)), f = s(n(22)), s = (r = a.default,
    o(p, r),
    Object.defineProperty(p.prototype, "onPageHeightChange", {
        get: function() {
            return this._onPageHeightChange.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    p.prototype.__init = function() {
        r.prototype.__init.call(this),
        this.scrollContent = this.getElement()
    }
    ,
    p.prototype.__awake = function() {
        var t = this;
        r.prototype.__awake.call(this),
        this._savedPageHeight = this.getPageHeight(),
        this.dispatchNewPageHeight(),
        this.autoUpdatePageHeight && (this._interval = setInterval(function() {
            t._savedPageHeight !== t.getPageHeight() && t.dispatchNewPageHeight()
        }, 200)),
        this._marginTop = Number.parseFloat(window.getComputedStyle(this.getElement()).marginTop)
    }
    ,
    p.prototype.__sleep = function() {
        r.prototype.__sleep.call(this),
        clearInterval(this._interval)
    }
    ,
    p.prototype.transitionIn = function(t) {
        t.done(),
        "replace" === c.default.Instance.getUrlChangeMode() && f.default.Instance.restoreScroll()
    }
    ,
    p.prototype.transitionOut = function(t) {
        t.done()
    }
    ,
    p.prototype.startScrollAt = function() {
        return 0
    }
    ,
    p.prototype.scrollTo = function(t) {
        l.TweenLite.set(this.scrollContent, {
            y: t
        })
    }
    ,
    p.prototype.getPageHeight = function() {
        return this.getElement().offsetHeight + this._marginTop
    }
    ,
    p);
    function p() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t._onPageHeightChange = new u.SignalDispatcher,
        t._savedPageHeight = -1,
        t.autoUpdatePageHeight = !0,
        t._marginTop = 0,
        t.path = "",
        t.dispatchNewPageHeight = function() {
            t._savedPageHeight = t.getPageHeight(),
            t._onPageHeightChange.dispatch()
        }
        ,
        t
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    function r() {}
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    r.getBaseUrl = function() {
        return document.location.protocol + "//" + window.location.host
    }
    ,
    r.genFullUrl = function(t) {
        return 0 === t.length ? window.location.href : "/" === t.substring(0, 1) ? this.getBaseUrl() + t : t
    }
    ,
    r.isSubdomain = function(t) {
        for (var e = r.IGNORE_DOMAINS.length, n = 0; n < e; n++) {
            var i = t.indexOf(r.IGNORE_DOMAINS[n].replace("www.", ""));
            if (-1 !== i && 1 <= i && "." === t.substr(i - 1, 1)) {
                if (i < 4)
                    return !0;
                if (4 <= i && "www." !== t.substr(i - 4, 4))
                    return !0
            }
        }
        return !1
    }
    ,
    r.isLocal = function(t) {
        for (var e = r.LOCAL_DOMAINS.length, n = 0; n < e; n++)
            if (-1 !== t.indexOf(r.LOCAL_DOMAINS[n]))
                return !0;
        return !1
    }
    ,
    r.isInternal = function(t) {
        for (var e = r.IGNORE_DOMAINS.length, n = 0; n < e; n++)
            if (-1 !== t.indexOf(r.IGNORE_DOMAINS[n].replace("www.", "")))
                return !0;
        return !1
    }
    ,
    r.isFile = function(t) {
        return 1 < t.split("/").pop().split(".").length
    }
    ,
    r.isEmail = function(t) {
        t = t.replace("mailto:", "");
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.toLowerCase())
    }
    ,
    r.getCurrentInternalPathFull = function() {
        return this.getWellFormatedPath(window.location.pathname)
    }
    ,
    r.getWellFormatedPath = function(t) {
        for (var e = (t = t.replace(r.getBaseUrl(), "")).split("/"), n = e.length, i = 0; i < n; i += 1)
            "" === e[0] && (e.splice(i, 1),
            --n,
            --i);
        return e.join("/")
    }
    ,
    r.getCurrentInternalPathAtLevel = function(t) {
        var e = this.getCurrentInternalPathFull().split("/");
        return t > e.length ? null : e[t]
    }
    ,
    r.IGNORE_DOMAINS = [window.location.hostname],
    r.LOCAL_DOMAINS = ["snailtemplate:3000"],
    e.default = r
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(2))), n = (r = s.default,
    o(a, r),
    a.prototype.SetSlideshow = function(t) {
        this.slideshow = t
    }
    ,
    a.prototype.awake = function() {
        this.slideshow.onUpdateEvent.sub(this.onSlideshowUpdate),
        r.prototype.awake.call(this)
    }
    ,
    a.prototype.sleep = function() {
        this.slideshow.onUpdateEvent.unsub(this.onSlideshowUpdate),
        r.prototype.sleep.call(this)
    }
    ,
    a.prototype.updateToPage = function() {}
    ,
    a);
    function a() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t.onSlideshowUpdate = function() {
            t.updateToPage()
        }
        ,
        t
    }
    e.default = n
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
      , l = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    i(n(2)))
      , r = n(3)
      , o = n(60);
    function u(t, e) {
        var n = this;
        void 0 === e && (e = null),
        this.__componentNodeTypeGuard = "COMPONENT_NODE",
        this._onChildAdded = new r.SimpleEventDispatcher,
        this._onChildRemove = new r.SimpleEventDispatcher,
        this._onSiblingAdded = new r.SimpleEventDispatcher,
        this._onInitialized = new r.SignalDispatcher,
        this._isInitialized = !1,
        this._onElementRemove = new r.SignalDispatcher,
        this._onElementRemoved = new r.SignalDispatcher,
        this._onDestroy = new r.SignalDispatcher,
        this._onAnyChildAdded = new r.SimpleEventDispatcher,
        this._onAnyChildRemoved = new r.SimpleEventDispatcher,
        this._childComponents = [],
        this._siblingComponents = [],
        this._isDestroyed = !1,
        this._parentNode = null,
        this.dispatchChildRemoved = function(t) {
            n._onChildRemove.dispatch(t),
            n._onAnyChildRemoved.dispatch(t)
        }
        ,
        this.dispatchChildAdded = function(t) {
            n._onChildAdded.dispatch(t),
            n._onAnyChildAdded.dispatch(t)
        }
        ,
        this._content = t,
        this._parentNode = e
    }
    Object.defineProperty(u.prototype, "onInitialized", {
        get: function() {
            return this._onInitialized.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    u.prototype.isInitialized = function() {
        return this._isInitialized
    }
    ,
    Object.defineProperty(u.prototype, "onElementRemove", {
        get: function() {
            return this._onElementRemove.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(u.prototype, "onElementRemoved", {
        get: function() {
            return this._onElementRemoved.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(u.prototype, "onChildAdded", {
        get: function() {
            return this._onChildAdded.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(u.prototype, "onSiblingAdded", {
        get: function() {
            return this._onSiblingAdded.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(u.prototype, "onChildRemoved", {
        get: function() {
            return this._onChildRemove.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(u.prototype, "onDestroy", {
        get: function() {
            return this._onDestroy.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(u.prototype, "onAnyChildAdded", {
        get: function() {
            return this._onAnyChildAdded.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(u.prototype, "onAnyChildRemoved", {
        get: function() {
            return this._onAnyChildRemoved.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    u.prototype.init = function() {
        this.__activateNode(),
        this.params = new o.DOMParameters(this._content),
        l.default.createSubComponents(this.getElement(), this),
        this._isInitialized = !0,
        this._onInitialized.dispatch()
    }
    ,
    u.prototype.__setParentNode = function(e) {
        var n = this;
        this._parentNode !== e && (null !== this._parentNode && this.getComponents().forEach(function(t) {
            n._parentNode.removeComponent(t)
        }),
        null !== (this._parentNode = e) && this.getComponents().forEach(function(t) {
            e.__addComponent(t)
        }))
    }
    ,
    u.prototype.hasParentComponentNode = function() {
        return null !== this._parentNode
    }
    ,
    u.prototype.getElement = function() {
        return this._content
    }
    ,
    u.prototype.__activateNode = function() {
        -1 === u.ALL_ACTIVE_NODES.indexOf(this) && u.ALL_ACTIVE_NODES.push(this)
    }
    ,
    u.prototype.__deactivateNode = function() {
        var t = u.ALL_ACTIVE_NODES.indexOf(this);
        -1 !== t && u.ALL_ACTIVE_NODES.splice(t, 1)
    }
    ,
    u.prototype.removeThis = function(t) {
        u.removeChild(this, t = void 0 === t ? !0 : t)
    }
    ,
    u.prototype.__removeFromDOM = function(t) {
        void 0 === t && (t = !0),
        this.__setParentNode(null),
        this.__dispatchElementRemove(),
        this.getElement().parentElement && this.getElement().parentElement.removeChild(this.getElement()),
        this.__dispatchElementRemoved(),
        t && this.__destroy()
    }
    ,
    u.prototype.isDestroyed = function() {
        return this._isDestroyed
    }
    ,
    u.prototype.__destroy = function() {
        this.hasParentComponentNode() ? this.__removeFromDOM(!0) : (this.__deactivateNode(),
        this.getChildComponentNodes().forEach(function(t) {
            t.__destroy()
        }),
        this._isDestroyed = !0,
        this._onDestroy.dispatch())
    }
    ,
    u.prototype.__dispatchElementRemove = function() {
        this.getChildComponentNodes().forEach(function(t) {
            t.__dispatchElementRemove()
        }),
        this._onElementRemove.dispatch()
    }
    ,
    u.prototype.__dispatchElementRemoved = function() {
        this.getChildComponentNodes().forEach(function(t) {
            t.__dispatchElementRemoved()
        }),
        this._onElementRemoved.dispatch()
    }
    ,
    u.prototype.__addComponent = function(t) {
        -1 === this._childComponents.indexOf(t) && (this._childComponents.push(t),
        t.node.onChildRemoved.sub(this.dispatchChildRemoved),
        t.node.onChildAdded.sub(this.dispatchChildAdded),
        this.dispatchChildAdded(t))
    }
    ,
    u.prototype.removeComponent = function(t) {
        var e = this._childComponents.indexOf(t);
        -1 !== e && (this._childComponents.splice(e, 1),
        t.node.onChildRemoved.unsub(this.dispatchChildRemoved),
        t.node.onChildAdded.unsub(this.dispatchChildAdded),
        this.dispatchChildRemoved(t))
    }
    ,
    u.prototype.__addSibling = function(t) {
        this._siblingComponents.push(t),
        this._onSiblingAdded.dispatch(t)
    }
    ,
    u.prototype.getComponents = function() {
        return this._siblingComponents
    }
    ,
    u.prototype.getComponentByType = function(e) {
        var n = null;
        return this.getComponents().forEach(function(t) {
            t instanceof e && (n = t)
        }),
        n
    }
    ,
    u.prototype.getParent = function() {
        return this._parentNode
    }
    ,
    u.prototype.getChildComponents = function(t) {
        var e = [];
        return (t = void 0 === t ? !1 : t) && this._siblingComponents.forEach(function(t) {
            e.push(t)
        }),
        this._childComponents.forEach(function(t) {
            e.push(t)
        }),
        e
    }
    ,
    u.prototype.getChildComponentNodes = function() {
        for (var t = this.getChildComponents(), e = [], n = t.length, i = 0; i < n; i++)
            -1 === e.indexOf(t[i].node) && e.push(t[i].node);
        return e
    }
    ,
    u.addChild = function(t, e, n) {
        void 0 === n && (n = !0);
        var i = u.searchFirstActiveParentNodeFromElement(e)
          , e = u.getElement(e)
          , r = u.getElement(t);
        l.default.isComponent(t) && t.isDestroyed(),
        r.parentElement !== e && (u.searchFirstActiveNestedNodesFromElement(r).forEach(function(t) {
            t.__activateNode()
        }),
        e.appendChild(r),
        u.searchFirstActiveNestedNodesFromElement(r).forEach(function(t) {
            t.__setParentNode(i)
        }),
        l.default.isElementOfComponentType(r) ? (t = u.searchActiveNodeFromElement(r)) ? n && t.getComponents().forEach(function(t) {
            t.__tryAwake()
        }) : l.default.create(r, i, n) : (e = u.searchFirstActiveNestedNodesFromElement(r),
        n && 0 < e.length ? e.forEach(function(t) {
            t.getComponents().forEach(function(t) {
                t.__tryAwake()
            })
        }) : l.default.createSubComponents(r, i, !1)))
    }
    ,
    u.removeChild = function(t, e) {
        void 0 === e && (e = !0),
        t && (t = u.getElement(t),
        u.searchFirstActiveNestedNodesFromElement(t).forEach(function(t) {
            t.__removeFromDOM(e)
        }))
    }
    ,
    u.replaceChild = function(t, e, n, i) {
        void 0 === n && (n = !0),
        void 0 === i && (i = !0);
        var r = u.getElement(e);
        r.parentElement && (u.addChild(t, r.parentElement, n),
        r.parentElement.replaceChild(u.getElement(t), r),
        u.removeChild(e, i))
    }
    ,
    u.isComponentNode = function(t) {
        return void 0 !== t.__componentNodeTypeGuard
    }
    ,
    u.getElement = function(t) {
        return l.default.isComponent(t) || u.isComponentNode(t) ? t.getElement() : t
    }
    ,
    u.searchFirstActiveParentNodeFromElement = function(t) {
        if (l.default.isComponent(t))
            return t.node;
        if (u.isComponentNode(t))
            return t;
        for (var e = t; e && !e.getAttribute(l.default.SEARCH_MODULE); )
            e = e.parentElement;
        return e ? u.searchActiveNodeFromElement(e) : null
    }
    ,
    u.searchActiveNodeFromElement = function(t) {
        for (var e = u.ALL_ACTIVE_NODES.length, n = 0; n < e; n++) {
            var i = u.ALL_ACTIVE_NODES[n];
            if (i.getElement() === t)
                return i
        }
        return null
    }
    ,
    u.searchFirstActiveNestedNodesFromElement = function(t) {
        var e, n = u.searchActiveNodeFromElement(t);
        return n ? [n] : (n = l.default.getAllChildComponentDivs(t, !0),
        e = [],
        n.forEach(function(t) {
            t = u.searchActiveNodeFromElement(t);
            t && e.push(t)
        }),
        e)
    }
    ,
    u.searchForParentComponentNode = function(t, e) {
        for (var n = 0, i = e; !l.default.isElementOfComponentType(i) && (n++,
        (i = i.parentElement).parentElement && n < 200); )
            ;
        if (t.getElement() === i)
            return t;
        for (var r = t.getChildComponentNodes(), o = r.length, s = null, a = 0; a < o && !(s = u.searchForParentComponentNode(r[a], i)); a++)
            ;
        return s
    }
    ,
    u.searchRootComponentNode = function(t) {
        for (var e = t; e.getParent(); )
            e = e.getParent();
        return e
    }
    ,
    u.ALL_ACTIVE_NODES = [],
    e.default = u
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
      , r = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(5))
      , o = i(n(17));
    function s() {
        var t = this;
        this._currentScroll = {
            x: 0,
            y: 0
        },
        this._scrollData = [],
        this._pageHeight = -1,
        this._template = null,
        this.onScrollWheel = function() {
            r.TweenLite.killTweensOf(t._currentScroll),
            t._currentScroll.y = window.scrollY,
            t.saveScroll()
        }
        ,
        this.updateWindowScroll = function() {
            window.scrollTo(0, t._currentScroll.y),
            t.saveScroll()
        }
        ,
        history.scrollRestoration = "manual",
        window.addEventListener("wheel", this.onScrollWheel)
    }
    Object.defineProperty(s, "Instance", {
        get: function() {
            return null == this._instance && (this._instance = new s),
            this._instance
        },
        enumerable: !1,
        configurable: !0
    }),
    s.prototype.scrollTo = function(t, e, n, i) {
        void 0 === n && (n = -1),
        void 0 === i && (i = r.Expo.easeOut),
        r.TweenLite.killTweensOf(this._currentScroll),
        this._currentScroll.x = window.scrollX,
        this._currentScroll.y = window.scrollY,
        n <= 0 ? (this._currentScroll.x = t,
        this._currentScroll.y = e,
        this.updateWindowScroll()) : r.TweenLite.to(this._currentScroll, 1, {
            x: t,
            y: e,
            roundProps: ["x", "y"],
            ease: i,
            onUpdate: this.updateWindowScroll
        })
    }
    ,
    s.prototype.getCurrentY = function() {
        return this._currentScroll.y
    }
    ,
    s.prototype.saveScroll = function() {
        var t = o.default.Instance.getCurrentTemplate();
        this._scrollData[t.path] = this._currentScroll.y
    }
    ,
    s.prototype.restoreScroll = function() {
        var t = o.default.Instance.getCurrentTemplate()
          , t = this._scrollData[t.path];
        this.scrollTo(0, t)
    }
    ,
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(1))), l = n(5), u = n(80), c = (n(81),
    s(n(4))), f = n(3), p = s(n(20)), h = n(24), d = s(n(7)), s = (r = a.default,
    o(_, r),
    Object.defineProperty(_.prototype, "onUpdateEvent", {
        get: function() {
            return this._onUpdate.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    _.prototype.build = function() {
        var e = this;
        this.getComponentsByType(p.default, !1).forEach(function(t) {
            t.SetSlideshow(e)
        }),
        this._slidesClass = this.params.plain.slideclass ? "." + this.params.plain.slideclass : ".Module",
        this._autoTime = this.params.plain.autotime ? Number.parseFloat(this.params.plain.autotime) : -1,
        this._slideContainer = this.qs(".container"),
        this._slideTrigger = this.qs(".trigger"),
        this._slides = this.getSlides(),
        this._numOfSlides = this._slides.length,
        this._staticWrapper = new h.StaticWrapper(this)
    }
    ,
    _.prototype.getSlides = function() {
        for (var t = new Array, e = this._slideContainer.querySelectorAll(this._slidesClass), n = e.length, i = 0; i < n; i += 1) {
            var r = e[i];
            r.parentNode === this._slideContainer && t.push(r)
        }
        return t
    }
    ,
    _.prototype.awake = function() {
        c.default.RESIZE.onResize.sub(this.updateDragger),
        this.updateDragger();
        for (var t = 0; t < this._numOfSlides; t++)
            this._slides[t].addEventListener("click", this.onSlideClick);
        r.prototype.awake.call(this),
        this._renderItem = d.default.Instance.add(this.render, 2)
    }
    ,
    _.prototype.becameVisible = function() {
        !0 !== this._isInView && !(this._isInView = !0) === this._hasInteracted && -1 != this._autoTime && (this._autoTimeInterval = setInterval(this.gotoNext, this._autoTime))
    }
    ,
    _.prototype.becameNotVisible = function() {
        !1 !== this._isInView && (this._isInView = !1,
        this.stopAutoPaganation())
    }
    ,
    _.prototype.sleep = function() {
        for (var t = 0; t < this._numOfSlides; t++)
            this._slides[t].removeEventListener("click", this.onSlideClick);
        null !== this._renderItem && (d.default.Instance.remove(this._renderItem),
        this._renderItem = null),
        c.default.RESIZE.onResize.unsub(this.updateDragger),
        r.prototype.sleep.call(this)
    }
    ,
    _.prototype.getCurrentSlide = function() {
        return this._slides[this.getCurrentIndex()]
    }
    ,
    _.prototype.getNumOfSlides = function() {
        return this._numOfSlides
    }
    ,
    _.prototype.getRatio = function() {
        var t = -this.getX() / -this._totalWidth;
        return 1 < t ? t = 1 : t < 0 && (t = 0),
        t
    }
    ,
    _.prototype.offsetItems = function(t) {
        for (var e = 0; e < this._numOfSlides; e++)
            l.TweenLite.set(this._slides[e], {
                x: t * e
            }),
            this.offsetItem = t * e;
        this.updateDragger()
    }
    ,
    _.prototype.onUpdate = function() {
        this._onUpdate.dispatch()
    }
    ,
    _.prototype.onDragStart = function() {
        this._hasInteracted = !0,
        this.stopAutoPaganation()
    }
    ,
    _.prototype.stopAutoPaganation = function() {
        null !== this._autoTimeInterval && (clearInterval(this._autoTimeInterval),
        this._autoTimeInterval = null)
    }
    ,
    _.prototype.getX = function() {
        return this._slideContainer && this._slideContainer._gsTransform ? this._slideContainer._gsTransform.x : 0
    }
    ,
    _.prototype.gotoItem = function(t) {
        for (var e = this, n = (parseInt(window.getComputedStyle(this._slides[0]).marginRight),
        this._itemWidth * -this._slides.indexOf(t)), i = 0; i < this._numOfSlides && this._slides[i] !== t; i++)
            n += -this.offsetItem / (this._numOfSlides - 1);
        l.TweenLite.to(this._slideContainer, .8, {
            x: n,
            onUpdate: function() {
                e.onUpdate()
            },
            ease: l.Expo.easeOut
        })
    }
    ,
    _);
    function _() {
        var n = null !== r && r.apply(this, arguments) || this;
        return n.offsetItem = 0,
        n._onUpdate = new f.SignalDispatcher,
        n._autoTimeInterval = null,
        n._renderItem = null,
        n._isInView = !1,
        n._hasInteracted = !1,
        n.render = function(t, e) {
            n.viewInfo.updateRect(),
            !0 === n.viewInfo.isInView() ? n.becameVisible() : n.becameNotVisible()
        }
        ,
        n.onSlideClick = function(t) {
            n.gotoItem(t.currentTarget)
        }
        ,
        n.getCurrentIndex = function() {
            var t = n._itemWidth * (n._numOfSlides - 1)
              , t = Math.round(-n.getX() / t * (n._numOfSlides - 1));
            return t > n._numOfSlides - 1 ? t = n._numOfSlides - 1 : t < 0 && (t = 0),
            t = isNaN(t) ? 0 : t
        }
        ,
        n.gotoNext = function() {
            var t = n.getCurrentIndex() + 1;
            t > n._numOfSlides - 1 && (t = 0),
            n.gotoItem(n._slides[t])
        }
        ,
        n.gotoPrev = function() {
            var t = n.getCurrentIndex() - 1;
            t < 0 && (t = n.getNumOfSlides() - 1),
            n.gotoItem(n._slides[t])
        }
        ,
        n.updateDragger = function() {
            var t, e;
            n._numOfSlides <= 1 || (n._staticWrapper.requestRender(function() {
                n._itemWidth = n._slides[0].offsetWidth + parseInt(window.getComputedStyle(n._slides[0]).marginRight)
            }),
            n.offsetSize = .5 * parseInt(window.getComputedStyle(n._slides[0]).marginRight),
            t = -n.offsetItem - .5 * parseInt(window.getComputedStyle(n._slides[0]).marginRight),
            e = -n._itemWidth * (n._numOfSlides - 1) + n.offsetSize + t,
            n._totalWidth = -n._itemWidth * (n._numOfSlides - 1) + n.offsetSize + t,
            l.TweenLite.set(n._slideContainer, {
                x: -n._itemWidth * n.getCurrentIndex()
            }),
            n._dragger = u.Draggable.create(n._slideContainer, {
                type: "x",
                edgeResistance: .85,
                bounds: {
                    minX: e,
                    maxX: 0
                },
                trigger: n._slideTrigger,
                minDuration: .2,
                maxDuration: .5,
                zIndexBoost: !1,
                onDragStart: function() {
                    n.onDragStart()
                },
                onDrag: function() {
                    n.onUpdate()
                },
                onThrowUpdate: function() {
                    n.onUpdate()
                },
                snap: function(t) {
                    return e / (n._numOfSlides - 1) * Math.round(t / e * (n._numOfSlides - 1))
                },
                cursor: "inherit",
                lockAxis: !0,
                throwProps: !0
            }),
            n.onUpdate())
        }
        ,
        n
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
      , r = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.StaticWrapper = void 0,
    i(n(4)))
      , o = i(n(25));
    function s(t, e) {
        void 0 === e && (e = !0),
        this.cacheRoot = !1,
        this.cacheRoot = e,
        this._comp = t,
        this._cachedRoot = this._comp.getRoot().getComponentByType(o.default)
    }
    Object.defineProperty(s.prototype, "template", {
        get: function() {
            return this.cacheRoot ? this._cachedRoot : this._comp.getRoot().getComponentByType(o.default)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "onPageRecalculate", {
        get: function() {
            return this.template ? this.template.onPageRecalculate : r.default.RESIZE.onResize
        },
        enumerable: !1,
        configurable: !0
    }),
    s.prototype.requestRender = function(t) {
        this.template ? this.template.requestRender(t) : t()
    }
    ,
    s.prototype.calculatePageHeight = function() {
        this.template && this.template.calculatePageHeight()
    }
    ,
    e.StaticWrapper = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(18))), l = s(n(4)), u = s(n(82)), c = s(n(37)), f = s(n(16)), p = n(3), s = (r = a.default,
    o(h, r),
    Object.defineProperty(h.prototype, "onPageRecalculate", {
        get: function() {
            return this._onPageRecalculate.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    h.prototype.__build = function() {
        this.autoUpdatePageHeight = !1,
        r.prototype.__build.call(this)
    }
    ,
    h.prototype.__init = function() {
        this._boundingBox = new f.default,
        this._staticFilter = new c.default(this,u.default),
        this._staticFilter.onRemoved.sub(this.onStaticRemoved),
        r.prototype.__init.call(this)
    }
    ,
    h.prototype.__awake = function() {
        l.default.RESIZE.onBeforeResize.sub(this.enterAllElements),
        l.default.RESIZE.onResize.sub(this.calculatePageHeight),
        l.default.RESIZE.onAfterResize.sub(this.exitAllElements),
        r.prototype.__awake.call(this),
        this.node.onAnyChildAdded.sub(this.onAnyChildAdded),
        this.node.onAnyChildRemoved.sub(this.onAnyChildRemoved),
        this.calculatePageHeight(),
        this.updateScroll(),
        l.default.SCROLL || window.addEventListener("scroll", this.updateScroll)
    }
    ,
    h.prototype.__sleep = function() {
        l.default.RESIZE.onBeforeResize.unsub(this.enterAllElements),
        l.default.RESIZE.onResize.unsub(this.calculatePageHeight),
        l.default.RESIZE.onAfterResize.unsub(this.exitAllElements),
        this.node.onAnyChildAdded.unsub(this.onAnyChildAdded),
        this.node.onAnyChildRemoved.unsub(this.onAnyChildRemoved),
        l.default.SCROLL || window.removeEventListener("scroll", this.updateScroll),
        r.prototype.__sleep.call(this)
    }
    ,
    h.prototype.scrollTo = function(t) {
        l.default.SCROLL && r.prototype.scrollTo.call(this, t),
        this._boundingBox.y = -1 * t,
        this._boundingBox.height = l.default.RESIZE.windowHeight;
        for (var e = this._staticFilter.children.length, n = 0; n < e; n++)
            this._staticFilter.children[n].updateViewBounds(this._boundingBox)
    }
    ,
    h.prototype.getPageHeight = function() {
        return this.getElement().offsetHeight
    }
    ,
    h.prototype.requestRender = function(t) {
        this._isRenderReady ? t() : (this.enterAllElements(),
        t(),
        this.exitAllElements())
    }
    ,
    h);
    function h() {
        var n = null !== r && r.apply(this, arguments) || this;
        return n._onPageRecalculate = new p.SignalDispatcher,
        n._pageHeight = 0,
        n._isRenderReady = !1,
        n._isRecalculating = !1,
        n.onAnyChildAdded = function(t) {
            n.calculatePageHeight()
        }
        ,
        n.onAnyChildRemoved = function(t) {
            n.calculatePageHeight()
        }
        ,
        n.onStaticRemoved = function(t) {
            t.node.onElementRemoved.one(n.calculatePageHeight)
        }
        ,
        n.updateScroll = function() {
            l.default.SCROLL ? n.scrollTo(-l.default.SCROLL.getCurrentScroll().y) : n.scrollTo(-window.pageYOffset)
        }
        ,
        n.enterAllElements = function() {
            n._isRenderReady || (n._staticFilter.children.forEach(function(t) {
                t.isEntered() || t.showElementContainer()
            }),
            n._isRenderReady = !0)
        }
        ,
        n.exitAllElements = function() {
            n._isRenderReady && (n._staticFilter.children.forEach(function(t) {
                t.isEntered() || t.hideElementContainer()
            }),
            n._isRenderReady = !1)
        }
        ,
        n.calculatePageHeight = function() {
            !n.isAwake() || n._isRecalculating || (n._isRecalculating = !0,
            n.requestRender(function() {
                n._boundingBox.width = l.default.RESIZE.windowWidth,
                n._boundingBox.x = 0;
                for (var t = n._staticFilter.children.length, e = n._pageHeight = 0; e < t; e++)
                    n._staticFilter.children[e].__updateStaticSize();
                n._onPageRecalculate.dispatch();
                for (e = 0; e < t; e++)
                    n._staticFilter.children[e].__updateStaticPageY()
            }),
            n.dispatchNewPageHeight(),
            n.updateScroll(),
            n._isRecalculating = !1)
        }
        ,
        n
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
      , r = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    i(n(27)))
      , o = i(n(2));
    function s(t, e, n) {
        var i = this;
        this._warnings = [],
        this.hover = function(t) {
            t.stopPropagation(),
            i._button.classList.add("hovered")
        }
        ,
        this.hide = function(t) {
            i._button.classList.remove("hovered")
        }
        ,
        this.copy = function(t) {
            t.stopImmediatePropagation(),
            t.stopPropagation(),
            i.copyToClipboard(i.path)
        }
        ,
        this._container = o.default.JSXCreate("div", {
            class: "item"
        }),
        this._name = t,
        this._path = e,
        this._parentArray = n,
        this._container.addEventListener("mouseover", this.hover),
        this._container.addEventListener("mouseout", this.hide),
        this._button = o.default.JSXCreate("button", {
            class: "copy-btn"
        }),
        this._container.appendChild(this._button),
        this._button.addEventListener("mouseup", this.copy)
    }
    Object.defineProperty(s.prototype, "name", {
        get: function() {
            return this._name
        },
        enumerable: !1,
        configurable: !0
    }),
    s.prototype.getContainer = function() {
        return this._container
    }
    ,
    s.prototype.addWarning = function(t, e) {
        this._warnings.push(new r.default(t,e))
    }
    ,
    s.prototype.findLength = function(t) {
        return null == t ? 0 : "number" == typeof t ? t : "string" == typeof t ? t.length : "object" == typeof t ? Object.keys(t).length : void 0
    }
    ,
    s.prototype.copyToClipboard = function(t) {
        t = t.substring(1, t.length);
        var e = document.createElement("textarea");
        e.value = t,
        this.getContainer().appendChild(e),
        e.focus(),
        e.select();
        try {
            document.execCommand("copy")
        } catch (t) {}
        this.getContainer().removeChild(e)
    }
    ,
    Object.defineProperty(s.prototype, "pathAddition", {
        get: function() {
            return this._parentArray && this._parentArray.isNumericArray ? "[" + this.name + "]" : "." + this.name
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "path", {
        get: function() {
            return this._path + this.pathAddition
        },
        enumerable: !1,
        configurable: !0
    }),
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
      , r = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Severity = void 0,
    i(n(2)))
      , n = ((i = e.Severity || (e.Severity = {}))[i.trivial = 0] = "trivial",
    i[i.severe = 1] = "severe",
    o.prototype.getElement = function() {
        var t = r.default.JSXCreate("p", {
            class: "dump-warning"
        }, this._message);
        return t.classList.add(this._severity.toString()),
        t
    }
    ,
    o);
    function o(t, e) {
        this._message = t,
        this._severity = e
    }
    e.default = n
}
, function(j, t, e) {
    "use strict";
    function n() {}
    var i = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
      , r = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Modules = void 0,
    i(e(51)))
      , o = i(e(62))
      , s = i(e(64))
      , a = i(e(66))
      , l = i(e(68))
      , u = i(e(72))
      , c = i(e(74))
      , f = i(e(76))
      , p = i(e(78))
      , h = i(e(83))
      , d = i(e(85))
      , _ = i(e(87))
      , m = i(e(89))
      , g = i(e(91))
      , y = i(e(38))
      , v = i(e(94))
      , b = i(e(96))
      , w = i(e(98))
      , x = i(e(100))
      , T = i(e(102))
      , O = i(e(104))
      , P = i(e(106))
      , S = i(e(108))
      , C = i(e(110))
      , E = i(e(112))
      , k = i(e(114))
      , A = i(e(116))
      , M = i(e(118))
      , I = i(e(120))
      , L = i(e(23))
      , R = i(e(123))
      , D = i(e(125))
      , N = i(e(127))
      , B = i(e(42))
      , F = i(e(130))
      , z = i(e(131))
      , H = i(e(133))
      , X = i(e(134))
      , V = i(e(136))
      , q = i(e(138))
      , U = i(e(43))
      , W = i(e(45))
      , Y = i(e(143))
      , G = i(e(145))
      , Z = i(e(147))
      , K = i(e(20))
      , $ = i(e(8))
      , J = i(e(149))
      , Q = i(e(150))
      , tt = i(e(151))
      , et = i(e(152))
      , nt = i(e(153))
      , it = i(e(154))
      , rt = i(e(155))
      , ot = i(e(156))
      , st = i(e(39))
      , at = i(e(157))
      , lt = i(e(158))
      , ut = i(e(159))
      , ct = i(e(160))
      , ft = i(e(161))
      , pt = i(e(46))
      , ht = i(e(163))
      , dt = i(e(165))
      , _t = i(e(47))
      , mt = i(e(41))
      , gt = i(e(166))
      , yt = i(e(10))
      , vt = i(e(167))
      , i = i(e(168));
    t.Modules = {
        RemoveIfEmpty: r.default,
        LineModule: o.default,
        HideWhenNotInView: s.default,
        ErrorModule: a.default,
        DefaultSlideshowModule: ht.default,
        Preloader: l.default,
        PreloaderIcon: ct.default,
        FormingEssentialsModule: u.default,
        FeaturedSlideshowImage: c.default,
        MainMenuButton: f.default,
        FeaturedSlideshowModule: p.default,
        ManifestModule: h.default,
        TextLayout5Module: d.default,
        FoundedByModule: _.default,
        Contact1Module: g.default,
        Contact2Module: m.default,
        CoreCollapseModule: y.default,
        RecognitionModule: v.default,
        ClientListModule: b.default,
        TextLayout4Module: w.default,
        TextLayout3Module: x.default,
        TextWithImageLayout1Module: T.default,
        DefaultHeaderModule: O.default,
        NewsModule: P.default,
        MenuModule: S.default,
        FooterModule: C.default,
        HighlightedWorkModule: E.default,
        ImageModule: k.default,
        ImageWithTextRightModule: A.default,
        TextLayout2Module: M.default,
        DoubleImageModule: I.default,
        CoreSlideshowModule: L.default,
        SlideshowComponent: K.default,
        SlideshowPageInfo: Z.default,
        CopySlideInfo: lt.default,
        VideoModule: R.default,
        CoreVideoModule: mt.default,
        ImageWithTextLeftModule: D.default,
        TextLayout1Module: N.default,
        CaseHeroModule: B.default,
        RootModule: F.default,
        CursorTarget: pt.default,
        DebugGridModule: Y.default,
        DebugOverlayModule: G.default,
        LazyLoadImage: W.default,
        Pixelate: dt.default,
        ScaleFontToParentWidth: ft.default,
        LinkHit: ot.default,
        ColorItem: $.default,
        ColorItemBackgroundBackground: J.default,
        ColorItemBackgroundToForeground: et.default,
        ColorItemTextToForeground: Q.default,
        ColorItemBorderTopToForeground: nt.default,
        ColorItemBorderBottomToForeground: tt.default,
        ColorItemFillToForeground: it.default,
        ColorItemStrokeToForeground: rt.default,
        ColorItemCanvasStrokeToForeground: ut.default,
        ImageLoadingModule: z.default,
        ChildTransition: H.default,
        PageTransitionModule: X.default,
        MissingModule: V.default,
        CrazyLines: st.default,
        ErrorTemplate: at.default,
        VarDump: q.default,
        DefaultTemplate: U.default,
        ImgixImage: _t.default,
        WindowInnerHeight: gt.default,
        Cursor: yt.default,
        CursorTargetLink: vt.default,
        VimeoComponent: i.default
    };
    t.default = n
}
, function(t, e, n) {
    "use strict";
    function i(t, e) {
        this.handler = t,
        this.isOnce = e,
        this.isExecuted = !1
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Subscription = void 0,
    i.prototype.execute = function(t, e, n) {
        var i;
        this.isOnce && this.isExecuted || (this.isExecuted = !0,
        i = this.handler,
        t ? setTimeout(function() {
            i.apply(e, n)
        }, 1) : i.apply(e, n))
    }
    ,
    e.Subscription = i
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
      , r = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(5))
      , o = i(n(32))
      , s = i(n(33))
      , a = i(n(70))
      , l = i(n(34))
      , u = i(n(71))
      , c = i(n(35));
    function f() {
        var n = this;
        this._xPos = 0,
        this._yPos = 0,
        this._cursors = [new l.default("default"), new s.default("arrow"), new a.default("link"), new u.default("slideshow"), new c.default("preloader")],
        this._defaultCursor = "default",
        this._activeCursor = null,
        this._activeCursorName = null,
        this._forceCursor = null,
        this.onMouseMove = function(t) {
            n._xPos = t.clientX,
            n._yPos = t.clientY,
            r.TweenLite.set(n._container, {
                left: n._xPos,
                top: n._yPos
            })
        }
        ,
        this.render = function(t, e) {
            n._container.style.left = n._xPos + "px",
            n._container.style.top = n._yPos + "px"
        }
        ,
        this.isSupported() && (window.addEventListener("mousemove", this.onMouseMove),
        document.addEventListener("mouseenter", this.onMouseMove),
        this._container = document.createElement("div"),
        this._container.classList.add("cursor-container"),
        this._container.style.pointerEvents = "none",
        document.body.appendChild(this._container),
        this._container.style.position = "fixed",
        this.setDefaultCursor(),
        document.body.style.cursor = "none")
    }
    Object.defineProperty(f, "Instance", {
        get: function() {
            return null == this._instance && (this._instance = new f),
            this._instance
        },
        enumerable: !1,
        configurable: !0
    }),
    f.prototype.setCursor = function(t) {
        this.isSupported() && (this._activeCursorName = t,
        null === this._forceCursor && this.updateCursor())
    }
    ,
    f.prototype.setDefaultCursor = function() {
        this.isSupported() && this.setCursor(this._defaultCursor)
    }
    ,
    f.prototype.setForcedCursor = function(t) {
        this.isSupported() && (this._forceCursor = t,
        this.updateCursor())
    }
    ,
    f.prototype.updateCursor = function() {
        var t, e = null !== this._forceCursor ? this._forceCursor : this._activeCursorName;
        null !== this._activeCursor && this._activeCursor.cursorName === e || (t = this._activeCursor,
        null !== this._activeCursor && (this._activeCursor.deactivate(),
        null !== this._activeCursor.getElement() && this._container.removeChild(this._activeCursor.getElement()),
        this._activeCursor = null),
        null !== (e = this.getCursorByName(e)).getElement() && this._container.appendChild(e.getElement()),
        e.activate(t),
        this._activeCursor = e)
    }
    ,
    f.prototype.getCursorByName = function(t) {
        for (var e = this._cursors.length, n = 0; n < e; n += 1) {
            var i = this._cursors[n];
            if (i.cursorName === t)
                return i
        }
        return null
    }
    ,
    f.prototype.xPos = function() {
        return this._xPos
    }
    ,
    f.prototype.yPos = function() {
        return this._yPos
    }
    ,
    f.prototype.isSupported = function() {
        return !(o.default.isMobile() && o.default.isTablet())
    }
    ,
    e.default = f
}
, function(t, e, n) {
    "use strict";
    function i() {}
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    i.isTranslite3DSupported = function() {
        return "WebKitCSSMatrix"in window && "m11"in new WebKitCSSMatrix
    }
    ,
    i.isMobile = function() {
        return /iphone|ipod|kindle|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase())
    }
    ,
    i.isTablet = function() {
        return /ipad|sch-i800|playbook|xoom|gt-p1000|gt-p7510|sgh-t849|nexus 7|nexus 10|shw-m180s|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase())
    }
    ,
    e.default = i
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(10))), l = n(5), u = s(n(34)), c = s(n(6)), s = (r = a.default,
    o(f, r),
    f.prototype.getElement = function() {
        return this._element.style.position = "absolute",
        this._element.style.left = "-50px",
        this._element.style.top = "-50px",
        this._element.classList.add("cursor"),
        this._element
    }
    ,
    f.prototype.activate = function(t) {
        void 0 === t && (t = null),
        l.TweenLite.killTweensOf([this.pt1, this.pt2, this.pt3, this.pt4, this.pt5, this.pt6]);
        this.pt1.x = 50,
        this.pt1.y = 50,
        this.pt2.x = 50,
        this.pt2.y = 50,
        this.pt3.x = 50.5,
        this.pt3.y = 67,
        this.pt4.x = 50.5,
        this.pt4.y = 51,
        this.pt5.x = 49.5,
        this.pt5.y = 67,
        this.pt6.x = 49.5,
        this.pt6.y = 51,
        null !== t && t instanceof u.default && (this.pt1.y = t.pt1.y,
        this.pt2.y = t.pt2.y),
        l.TweenLite.to(this.pt1, .4, {
            y: 34,
            ease: l.Expo.easeOut
        }),
        l.TweenLite.to(this.pt2, .4, {
            y: 66,
            ease: l.Expo.easeOut
        }),
        l.TweenLite.to(this.pt4, .4, {
            x: 37.5,
            y: 54,
            ease: l.Expo.easeOut,
            delay: .1
        }),
        l.TweenLite.to(this.pt6, .4, {
            x: 62.5,
            y: 54,
            ease: l.Expo.easeOut,
            delay: .1,
            onComplete: this.animationDone
        }),
        this.startRender()
    }
    ,
    f.prototype.render = function(t, e) {
        r.prototype.render.call(this, t, e);
        t = '<svg height="100" width="100">\' +\n\t\t\t\'<line x1="' + this.pt1.x + '" y1="' + this.pt1.y + '" x2="' + this.pt2.x + '" y2="' + this.pt2.y + '" style="stroke:' + c.default.Instance.foregroundColor + ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" + this.pt3.x + '" y1="' + this.pt3.y + '" x2="' + this.pt4.x + '" y2="' + this.pt4.y + '" style="stroke:' + c.default.Instance.foregroundColor + ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" + this.pt5.x + '" y1="' + this.pt5.y + '" x2="' + this.pt6.x + '" y2="' + this.pt6.y + '" style="stroke:' + c.default.Instance.foregroundColor + ";stroke-width:2\" />' +\n\t\t'</svg>";
        this._element.innerHTML = t
    }
    ,
    f);
    function f() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t.pt1 = {
            x: 50,
            y: 50
        },
        t.pt2 = {
            x: 50,
            y: 50
        },
        t.pt3 = {
            x: 50,
            y: 50
        },
        t.pt4 = {
            x: 50,
            y: 50
        },
        t.pt5 = {
            x: 50,
            y: 50
        },
        t.pt6 = {
            x: 50,
            y: 50
        },
        t._element = document.createElement("div"),
        t.animationDone = function() {
            r.prototype.stopRender.call(t)
        }
        ,
        t
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(10))), l = n(5), u = s(n(33)), c = s(n(6)), s = (r = a.default,
    o(f, r),
    f.prototype.getElement = function() {
        return this._element.style.position = "absolute",
        this._element.style.left = "-50px",
        this._element.style.top = "-50px",
        this._element.classList.add("cursor"),
        this._element
    }
    ,
    f.prototype.activate = function(t) {
        void 0 === t && (t = null),
        l.TweenLite.killTweensOf([this.pt1, this.pt2, this.pt3, this.pt4, this.pt5, this.pt6]);
        this.pt1.x = 50,
        this.pt1.y = 50,
        this.pt2.x = 50,
        this.pt2.y = 50,
        this.pt3.x = 50.5,
        this.pt3.y = 67,
        this.pt4.x = 50.5,
        this.pt4.y = 67,
        this.pt5.x = 49.5,
        this.pt5.y = 67,
        this.pt6.x = 49.5,
        this.pt6.y = 67,
        null !== t && t instanceof u.default && (this.pt1.y = t.pt1.y,
        this.pt2.y = t.pt2.y,
        this.pt4.x = t.pt4.x,
        this.pt4.y = t.pt4.y,
        this.pt6.x = t.pt6.x,
        this.pt6.y = t.pt6.y),
        l.TweenLite.to(this.pt1, .4, {
            y: 34,
            ease: l.Expo.easeOut
        }),
        l.TweenLite.to(this.pt2, .4, {
            y: 66,
            ease: l.Expo.easeOut
        }),
        l.TweenLite.to(this.pt4, .4, {
            x: 50.5,
            y: 67,
            ease: l.Expo.easeOut,
            delay: .1
        }),
        l.TweenLite.to(this.pt6, .4, {
            x: 49.5,
            y: 67,
            ease: l.Expo.easeOut,
            delay: .1,
            onComplete: this.animationDone
        }),
        this.startRender()
    }
    ,
    f.prototype.render = function(t, e) {
        r.prototype.render.call(this, t, e);
        t = '<svg height="100" width="100">\' +\n\t\t\t\'<line x1="' + this.pt1.x + '" y1="' + this.pt1.y + '" x2="' + this.pt2.x + '" y2="' + this.pt2.y + '" style="stroke:' + c.default.Instance.foregroundColor + ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" + this.pt3.x + '" y1="' + this.pt3.y + '" x2="' + this.pt4.x + '" y2="' + this.pt4.y + '" style="stroke:' + c.default.Instance.foregroundColor + ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" + this.pt5.x + '" y1="' + this.pt5.y + '" x2="' + this.pt6.x + '" y2="' + this.pt6.y + '" style="stroke:' + c.default.Instance.foregroundColor + ";stroke-width:2\" />' +\n\t\t'</svg>";
        this._element.innerHTML = t
    }
    ,
    f);
    function f() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t.pt1 = {
            x: 50,
            y: 50
        },
        t.pt2 = {
            x: 50,
            y: 50
        },
        t.pt3 = {
            x: 50,
            y: 50
        },
        t.pt4 = {
            x: 50,
            y: 50
        },
        t.pt5 = {
            x: 50,
            y: 50
        },
        t.pt6 = {
            x: 50,
            y: 50
        },
        t._element = document.createElement("div"),
        t.animationDone = function() {
            r.prototype.stopRender.call(t)
        }
        ,
        t
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, u, r = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    o(n(10))), a = n(5), l = o(n(13)), c = o(n(6)), o = (u = s.default,
    r(f, u),
    f.prototype.getElement = function() {
        return this._element.style.position = "absolute",
        this._element.style.left = "-50px",
        this._element.style.top = "-50px",
        this._element.classList.add("cursor"),
        this._element
    }
    ,
    f.prototype.setColor = function(t) {
        this._color = l.default.hexToRGB(t, 1),
        this.render(0, 0)
    }
    ,
    f.prototype.activate = function(t) {
        void 0 === t && (t = null),
        a.TweenLite.killTweensOf(this.points),
        null !== this._timeout1 && clearTimeout(this._timeout1),
        null !== this._timeout2 && clearTimeout(this._timeout2);
        for (var e = 0; e < this._numberOfLines; e += 1)
            this.points[e].size = 0;
        this.startRender(),
        this.firstStep()
    }
    ,
    f.prototype.deactivate = function() {
        u.prototype.stopRender.call(this),
        u.prototype.deactivate.call(this)
    }
    ,
    f.prototype.render = function(t, e) {
        u.prototype.render.call(this, t, e);
        for (var n = '<svg height="100" width="100">', i = 0; i < this._numberOfLines; i += 1)
            for (var r = this.points[i], o = 360 / this._numberOfLines * i, s = 50 + Math.cos(o * (Math.PI / 180)) * r.size, a = 50 + Math.sin(o * (Math.PI / 180)) * r.size, l = 0; l < this._numberOfLines / 2; l += 1)
                n += '<line x1="50" y1="50" x2="' + s + '" y2="' + a + '" style="stroke:' + c.default.Instance.foregroundColor + ';stroke-width:2" />';
        this._element.innerHTML = n += "</svg>"
    }
    ,
    f);
    function f(t) {
        var e = u.call(this, t) || this;
        e.points = new Array,
        e._numberOfLines = 12,
        e._halfSize = 16,
        e._timeout1 = null,
        e._timeout2 = null,
        e._step = null,
        e._element = document.createElement("div"),
        e._color = "rgb(255,255,255)",
        e.firstStep = function() {
            e._step = "firstStep";
            for (var t = 0; t < e._numberOfLines / 2; t += 1)
                a.TweenLite.to(e.points[t], 0, {
                    size: e._halfSize,
                    ease: a.Expo.easeOut,
                    delay: .05 * t
                }),
                a.TweenLite.to(e.points[t + 6], 0, {
                    size: e._halfSize,
                    ease: a.Expo.easeOut,
                    delay: .05 * t
                });
            e._timeout1 = setTimeout(e.secondStep, 1e3)
        }
        ,
        e.secondStep = function() {
            e._step = "secondStep";
            for (var t = 0; t < e._numberOfLines / 2; t += 1)
                a.TweenLite.to(e.points[t], 0, {
                    size: 0,
                    ease: a.Expo.easeOut,
                    delay: .05 * t
                }),
                a.TweenLite.to(e.points[t + 6], 0, {
                    size: 0,
                    ease: a.Expo.easeOut,
                    delay: .05 * t
                });
            e._timeout2 = setTimeout(e.firstStep, 1e3)
        }
        ;
        for (var n = 0; n < e._numberOfLines; n += 1)
            e.points.push({
                size: 0
            });
        return e
    }
    e.default = o
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.RecursiveAnimations = e.Transition = e.MODE = void 0;
    var i, r = n(3), n = ((n = i = e.MODE || (e.MODE = {}))[n.IN = 0] = "IN",
    n[n.OUT = 1] = "OUT",
    Object.defineProperty(o.prototype, "onAllComplete", {
        get: function() {
            return this._onAllComplete.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(o.prototype, "rootModule", {
        get: function() {
            return this._rootModule
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(o.prototype, "mode", {
        get: function() {
            return this._mode
        },
        enumerable: !1,
        configurable: !0
    }),
    o.prototype.start = function(t, e) {
        void 0 === e && (e = t === i.OUT),
        this._startedAt = Date.now(),
        this._isAnimating = !0,
        this._mode = t,
        this._reverseAnimation = e,
        this._useTree = !0,
        !this._reverseAnimation && this._recursiveInInstant && this._mode === i.IN && (this._useTree = !1),
        this._useTree && 0 < this._aniTree.deepestDepth() ? (this._reverseAnimation ? this._nextDepth = this._aniTree.deepestDepth() - 1 : this._nextDepth = -1,
        this._queuedAnimations = 0,
        this._animationsInProgress = 0,
        this.animateNewTree()) : this.animateElement(this.rootModule)
    }
    ,
    Object.defineProperty(o.prototype, "numOfAnimationLevels", {
        get: function() {
            return this._aniTree.deepestDepth()
        },
        enumerable: !1,
        configurable: !0
    }),
    o.prototype.isDone = function() {
        return this._isDone
    }
    ,
    o.prototype.isAnimating = function() {
        return 0 < this._animationsInProgress
    }
    ,
    Object.defineProperty(o.prototype, "timeElapsed", {
        get: function() {
            return Date.now() - this._startedAt
        },
        enumerable: !1,
        configurable: !0
    }),
    o.prototype.dispatchIfDone = function() {
        var t, e = this;
        this.isAnimating() || (t = this.timeElapsed,
        this.waitAtLeast - t < 0 ? (this._isDone = !0,
        this._onAllComplete.dispatch(this)) : setTimeout(function() {
            e._isDone = !0,
            e._onAllComplete.dispatch(e)
        }, this.waitAtLeast - t))
    }
    ,
    o.prototype.animateNewTree = function() {
        for (var t = this._aniTree.getAtDepth(this._nextDepth), e = (this._reverseAnimation ? this._nextDepth-- : this._nextDepth++,
        t.length), n = 0; n < e; n++)
            this._queuedAnimations++,
            this.animateElement(t[n].module)
    }
    ,
    o.prototype.animateRecursive = function(t) {
        for (var e = t.getComponents(!1, !1), n = e.length, i = 0; i < n; i++)
            "transitionIn"in e[i] && "transitionOut"in e[i] ? (this._queuedAnimations++,
            this.animateElement(e[i])) : this.animateRecursive(e[i])
    }
    ,
    o.prototype.animateElement = function(t) {
        var e = new s(t,this,this._nextDepth);
        e.onComplete.one(this.done),
        e.onContinue.one(this.continue),
        this._animationsInProgress++,
        this._mode === i.IN ? t.transitionIn(e) : t.transitionOut(e)
    }
    ,
    o);
    function o(t, e) {
        var n = this;
        void 0 === e && (e = !1),
        this._onAllComplete = new r.SimpleEventDispatcher,
        this.waitAtLeast = 0,
        this.queuedAnimations = 0,
        this._nextDepth = 0,
        this._queuedAnimations = 1,
        this._animationsInProgress = 0,
        this._isAnimating = !1,
        this._isDone = !1,
        this._mode = i.IN,
        this._useTree = !0,
        this.done = function(t) {
            n._animationsInProgress--,
            0 === n._animationsInProgress && (n._isAnimating = !1,
            n.dispatchIfDone())
        }
        ,
        this.continue = function(t) {
            n._useTree ? (n._queuedAnimations--,
            0 === n._queuedAnimations && n.animateNewTree()) : (n.animateRecursive(t),
            n._queuedAnimations--)
        }
        ,
        this._queuedAnimations = 1,
        this._rootModule = t,
        this._recursiveInInstant = e,
        this._aniTree = new l(t)
    }
    e.default = n;
    Object.defineProperty(a.prototype, "onComplete", {
        get: function() {
            return this._onComplete.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(a.prototype, "onContinue", {
        get: function() {
            return this._onContinue.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(a.prototype, "numOfAnimationLevels", {
        get: function() {
            return this._controller.numOfAnimationLevels
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(a.prototype, "animationLevel", {
        get: function() {
            return this._animationLevel
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(a.prototype, "totalTimeElapsed", {
        get: function() {
            return this._controller.timeElapsed
        },
        enumerable: !1,
        configurable: !0
    }),
    a.prototype.continue = function() {
        this._isContinued = !0,
        this._onContinue.dispatch(this._module)
    }
    ,
    a.prototype.done = function() {
        this._isContinued || this.continue(),
        this._onComplete.dispatch(this._module)
    }
    ;
    var s = a;
    function a(t, e, n) {
        this._onComplete = new r.SimpleEventDispatcher,
        this._onContinue = new r.SimpleEventDispatcher,
        this._isContinued = !1,
        this._animationLevel = n,
        this._module = t,
        this._controller = e
    }
    e.Transition = s;
    u.prototype.searchForNestedAnimations = function(t) {
        for (var e = t.getComponents(!1, !1), n = e.length, i = 0; i < n; i++) {
            var r = e[i];
            "transitionIn"in r && "transitionOut"in r ? this._tree.push(new u(r,this._depth + 1)) : this.searchForNestedAnimations(r)
        }
    }
    ,
    u.prototype.depth = function() {
        return this._depth
    }
    ,
    u.prototype.deepestDepth = function() {
        if (0 !== this._depth && 0 === this._tree.length)
            return this.depth();
        for (var t = this.depth(), e = this._tree.length, n = 0; n < e; n++) {
            var i = this._tree[n].deepestDepth();
            t < i && (t = i)
        }
        return t
    }
    ,
    u.prototype.getAtDepth = function(e) {
        var n = [];
        return -1 === e ? [this] : e < this._depth ? [] : this._depth === e ? this._tree : (this._tree.forEach(function(t) {
            n = n.concat(t.getAtDepth(e))
        }),
        n)
    }
    ;
    var l = u;
    function u(t, e) {
        void 0 === e && (e = 0),
        this._tree = [],
        this._depth = 0,
        this.module = t,
        this._depth = e,
        this.searchForNestedAnimations(t)
    }
    e.RecursiveAnimations = l
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(3);
    function r(t, e) {
        var n = this;
        this._onAdded = new i.SimpleEventDispatcher,
        this._onRemoved = new i.SimpleEventDispatcher,
        this.children = [],
        this.onChildAdded = function(t) {
            t instanceof n._filterClass && n.isParentThis(t) && (n.children.push(t),
            n._onAdded.dispatch(t))
        }
        ,
        this.onChildRemoved = function(t) {
            var e;
            t instanceof n._filterClass && (-1 !== (e = n.children.indexOf(t)) && (n.children.splice(e, 1),
            n._onRemoved.dispatch(t)))
        }
        ,
        this._comp = t,
        this._filterClass = e,
        this._comp.getComponents(!1, !0).forEach(function(t) {
            n.onChildAdded(t)
        }),
        this._comp.node.onAnyChildAdded.sub(this.onChildAdded),
        this._comp.node.onAnyChildRemoved.sub(this.onChildRemoved)
    }
    Object.defineProperty(r.prototype, "onAdded", {
        get: function() {
            return this._onAdded.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "onRemoved", {
        get: function() {
            return this._onRemoved.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.kill = function() {
        this._onRemoved.clear(),
        this._onAdded.clear(),
        this._comp.node.onAnyChildAdded.unsub(this.onChildAdded),
        this._comp.node.onAnyChildRemoved.unsub(this.onChildRemoved)
    }
    ,
    r.prototype.isParentThis = function(t) {
        if (null !== t.getParent()) {
            for (var e = t.getParent().getComponents(), n = e.length, i = 0; i < n; i++)
                if (e[i] === this._comp)
                    return !0;
            for (i = 0; i < n; i++)
                if (e[i]instanceof this._filterClass)
                    return !1;
            for (i = 0; i < n; i++)
                if (this.isParentThis(e[i]))
                    return !0
        }
        return !1
    }
    ,
    e.default = r
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(93),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a.prototype.build = function() {
        this._collapseButton = this.qs(".collapse-button"),
        this._collapseItems = this.qsAll(".collapse-item"),
        this._collapseIcon = this.qs(".collapse-icon"),
        this._expandIcon = this.qs(".expand-icon"),
        this._collapseText = this.qs(".collapse-text"),
        this._expandText = this.qs(".expand-text"),
        this.showOrHide(!1)
    }
    ,
    a.prototype.awake = function() {
        this._collapseButton.addEventListener("click", this.onCollapse)
    }
    ,
    a.prototype.sleep = function() {
        this._collapseButton.removeEventListener("click", this.onCollapse)
    }
    ,
    a.prototype.showOrHide = function(e) {
        this._collapseItems.forEach(function(t) {
            t instanceof HTMLElement && (!0 === e ? t.classList.add("open") : t.classList.remove("open"))
        })
    }
    ,
    a);
    function a() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t._isOpen = !1,
        t.onCollapse = function() {
            t._isOpen = !t._isOpen,
            t.showOrHide(t._isOpen),
            !0 === t._isOpen ? (t._collapseIcon.style.display = "block",
            t._expandIcon.style.display = "none",
            t._collapseText && (t._collapseText.style.display = "block"),
            t._expandText && (t._expandText.style.display = "none")) : (t._collapseIcon.style.display = "none",
            t._expandIcon.style.display = "block",
            t._collapseText && (t._collapseText.style.display = "none"),
            t._expandText && (t._expandText.style.display = "block"))
        }
        ,
        t
    }
    e.default = n
}
, function(t, e, n) {
    "use strict";
    var i, o, r = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(2))), l = s(n(14)), u = n(24), c = s(n(6)), f = s(n(7)), s = (o = a.default,
    r(p, o),
    p.prototype.build = function() {
        this.getElement()instanceof HTMLCanvasElement ? this._canvas = this.getElement() : (this._canvas = this.getElement().querySelector("canvas"),
        this._canvas || (this._canvas = document.createElement("canvas"),
        this.getElement().appendChild(this._canvas))),
        this._ctx = this._canvas.getContext("2d"),
        this._ctx.imageSmoothingQuality = "low",
        this._ctx.imageSmoothingEnabled = !1,
        this._staticWrapper = new u.StaticWrapper(this)
    }
    ,
    p.prototype.awake = function() {
        l.default.Instance.onResize.sub(this.onResize),
        this.onResize()
    }
    ,
    p.prototype.sleep = function() {
        l.default.Instance.onResize.unsub(this.onResize),
        this.stopRender()
    }
    ,
    p.prototype.resetLinePositions = function() {
        for (var t = 0; t < this._numOfLines; t++)
            this._lines[t].x = t % 2 ? 7 : 1,
            this._lines[t].velocityX = 0;
        this.render(0, 0)
    }
    ,
    p.prototype.updateLineCount = function() {
        this._numOfLines = Math.ceil(this._height / 90);
        var t = this._numOfLines;
        for (this._numOfLines < 5 ? this._numOfLines = 5 : 16 < this._numOfLines && (this._numOfLines = 16); this._lines.length > this._numOfLines; )
            this._lines.pop();
        for (; this._lines.length < this._numOfLines; ) {
            t++;
            var e = new h(this._ctx);
            e.x = t % 2 ? 8 : 0,
            e.setSize(this._width, this._height / this._numOfLines),
            this._lines.push(e)
        }
        this.render(0, 0)
    }
    ,
    p);
    function p() {
        var r = null !== o && o.apply(this, arguments) || this;
        return r._lines = [],
        r._width = 0,
        r._height = 0,
        r._numOfLines = 0,
        r._lastMouseX = Number.MAX_VALUE,
        r._renderItem = null,
        r._sampleAmount = 1,
        r.startRender = function() {
            null === r._renderItem && (r._renderItem = f.default.Instance.add(r.render, 60),
            r.getElement().addEventListener("mousemove", r.onMouseMove),
            r.render(0, 0))
        }
        ,
        r.stopRender = function() {
            null !== r._renderItem && (f.default.Instance.remove(r._renderItem),
            r._renderItem = null),
            r.getElement().removeEventListener("mousemove", r.onMouseMove)
        }
        ,
        r.onResize = function() {
            var t = Number.parseFloat(window.getComputedStyle(r.getElement()).paddingTop);
            r._staticWrapper.requestRender(function() {
                r._width = r.getElement().offsetWidth,
                r._height = r.getElement().offsetHeight - t
            }),
            r._canvas.width = r._width * r._sampleAmount,
            r._canvas.height = r._height * r._sampleAmount,
            r._canvas.style.width = r._width + "px",
            r._canvas.style.height = r._height + "px",
            r.updateLineCount()
        }
        ,
        r.onMouseMove = function(t) {
            var e, n = t.offsetX, t = t.offsetY, i = 0, t = (r._lastMouseX != Number.MAX_VALUE && (i = n - r._lastMouseX),
            t / r._height), t = Math.floor(r._numOfLines * t), t = (t < 0 ? t = 0 : t > r._numOfLines - 1 && (t = r._numOfLines - 1),
            r._lines[t]);
            i < 0 ? (e = .1 * i) < t.velocityX && (t.velocityX = e) : 0 < i && (e = .1 * i) > t.velocityX && (t.velocityX = e),
            r._lastMouseX = n
        }
        ,
        r.render = function(t, e) {
            r._ctx.clearRect(0, 0, r._canvas.width, r._canvas.height),
            r._ctx.strokeStyle = c.default.Instance.foregroundColor;
            for (var n = r._height / r._numOfLines * r._sampleAmount, i = 0; i < r._numOfLines; i++)
                r._lines[i].y = n * i,
                r._lines[i].thickness = 2 + i / r._numOfLines * 10,
                r._lines[i].setSize(r._width * r._sampleAmount, n),
                r._lines[i].render()
        }
        ,
        r
    }
    e.default = s;
    d.prototype.setSize = function(t, e) {
        this._width = t,
        this._height = e
    }
    ,
    d.prototype.render = function() {
        var t = this.spacing
          , e = Math.ceil(this._width / t) + 1;
        for (this.x += this.velocityX,
        this.velocityX = this.velocityX * this.drag; this.x < 0; )
            this.x += this._width;
        for (var n = this.x, i = 0; i < e; i++) {
            var r = n % (t * e) - .5 * this.thickness;
            this._context.lineWidth = this.thickness,
            this._context.beginPath(),
            this._context.moveTo(r, this.y),
            this._context.lineTo(r, this.y + this._height),
            this._context.closePath(),
            this._context.stroke(),
            n += t
        }
    }
    ;
    var h = d;
    function d(t) {
        this.spacing = 17,
        this.thickness = 2,
        this.x = 0,
        this.y = 0,
        this.drag = .98,
        this.velocityX = 0,
        this._width = 0,
        this._height = 0,
        this._context = t
    }
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
      , r = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(3))
      , o = i(n(14))
      , s = i(n(4))
      , a = i(n(122));
    function l() {
        var e = this;
        this.mobile = new a.default("mobile",0),
        this.desktop = new a.default("desktop",850),
        this._breakpoints = new Array(this.mobile,this.desktop),
        this._currentBreakpointIndex = 0,
        this._currentBreakpointItem = null,
        this._onNewBreakpoint = new r.SignalDispatcher,
        this.onResize = function() {
            var t = e.getBreakPointIndexByWidth(s.default.RESIZE.windowWidth);
            t !== e._currentBreakpointIndex && (e._currentBreakpointIndex = t,
            e._currentBreakpointItem = e._breakpoints[e._currentBreakpointIndex],
            e._onNewBreakpoint.dispatch())
        }
        ,
        this._currentBreakpointIndex = this.getBreakPointIndexByWidth(s.default.RESIZE.windowWidth),
        this._currentBreakpointItem = this._breakpoints[this._currentBreakpointIndex],
        o.default.Instance.onResize.sub(this.onResize),
        this.onResize()
    }
    Object.defineProperty(l, "Instance", {
        get: function() {
            return null == this._instance && (this._instance = new l),
            this._instance
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(l.prototype, "onNewBreakpoint", {
        get: function() {
            return this._onNewBreakpoint.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    l.prototype.getBreakPointIndexByWidth = function(t) {
        if (t <= -1)
            return 0;
        for (var e = this._breakpoints.length, n = 0; n < e; n++)
            if (t < this._breakpoints[n].getWidth())
                return n - 1;
        return e - 1
    }
    ,
    l.prototype.getBreakPointIndex = function() {
        return this._currentBreakpointIndex
    }
    ,
    l.prototype.getBreakpointName = function() {
        return this._breakpoints[this.getBreakPointIndex()].getName()
    }
    ,
    e.default = l
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(1))), l = s(n(7)), u = n(5), s = (r = a.default,
    o(c, r),
    c.prototype.build = function() {
        this._playButton = this.qs(".play-button"),
        this._playIcon = this.qs(".play-icon"),
        this._pauseIcon = this.qs(".pause-icon"),
        this._placeholder = this.qs(".placeholder"),
        this._playbackTime = this.qs(".playback-time"),
        this._video = this.qs("video"),
        this._videoUI = this.params.plain.videoui,
        this._videoUI || (this._videoUI = "default")
    }
    ,
    c.prototype.awake = function() {
        this._video.autoplay && (this._autoPlay = !0,
        this._video.autoplay = !1),
        this._videoReadyForPlay = !1,
        this._videoContainer = this._video.parentElement,
        this._videoContainer.removeChild(this._video),
        this.hideAllUI(),
        this._renderItem = l.default.Instance.add(this.render, 5)
    }
    ,
    c.prototype.videoReadyForPlay = function() {
        this._videoReadyForPlay = !0,
        "none" !== this._videoUI && this._playButton.addEventListener("click", this.onPlay),
        this.updateUIToState()
    }
    ,
    c.prototype.sleep = function() {
        null !== this._renderItem && (l.default.Instance.remove(this._renderItem),
        this._renderItem = null),
        null !== this._video && (this.unloadVideo(!0),
        this._video = null)
    }
    ,
    c.prototype.isReadyForPlay = function() {
        return !0
    }
    ,
    c.prototype.Play = function() {
        var t, e = this;
        4 === this._video.readyState && !0 !== this._isPlaying && (this._isPlaying = !0,
        t = this._video.play(),
        0 !== this._restoreTime && (this._video.currentTime = this._restoreTime,
        this._restoreTime = 0),
        void 0 !== t && t.then(function(t) {
            u.TweenLite.to(e._video, 0, {
                opacity: 1,
                ease: u.Linear.easeOut
            })
        }).catch(function(t) {}),
        this.updateUIToState())
    }
    ,
    c.prototype.Pause = function() {
        !1 !== this._isPlaying && (this._isPlaying = !1,
        this._video.pause(),
        this.updateUIToState())
    }
    ,
    c.prototype.loadVideo = function() {
        !0 !== this._isVideoLoaded && (this._isVideoLoaded = !0,
        this._video.setAttribute("src", this._video.getAttribute("data-src")),
        this._video.load())
    }
    ,
    c.prototype.unloadVideo = function(t) {
        !0 !== (t = void 0 === t ? !1 : t) && !1 === this._isVideoLoaded || (!0 === this._isPlaying && (this._restoreTime = this._video.currentTime),
        this._isVideoLoaded = !1,
        this._isPlaying = !1,
        this._video.pause(),
        this._video.removeAttribute("src"),
        this._video.load(),
        this._videoContainer.contains(this._video) && this._videoContainer.removeChild(this._video),
        "none" !== this._videoUI && this._playButton.removeEventListener("click", this.onPlay),
        this.updateUIToState())
    }
    ,
    c.prototype.updateUIToState = function() {
        !0 === this._isPlaying ? "default" === this._videoUI ? (this._pauseIcon.style.display = "block",
        this._playIcon.style.display = "none",
        this._playbackTime.style.display = "block") : "default" === this._videoUI && this.hideAllUI() : (u.TweenLite.killTweensOf(this._video),
        u.TweenLite.set(this._video, {
            opacity: 0
        }),
        "default" === this._videoUI ? (this._pauseIcon.style.display = "none",
        this._playIcon.style.display = "block",
        this._playbackTime.style.display = "block") : "default" === this._videoUI && this.hideAllUI())
    }
    ,
    c.prototype.hideAllUI = function() {
        this._pauseIcon.style.display = "none",
        this._playIcon.style.display = "none",
        this._playbackTime.style.display = "none",
        u.TweenLite.killTweensOf(this._video),
        u.TweenLite.set(this._video, {
            opacity: 0
        })
    }
    ,
    c);
    function c() {
        var i = null !== r && r.apply(this, arguments) || this;
        return i._isPlaying = !1,
        i._wasInteractedWith = !1,
        i._renderItem = null,
        i._videoReadyForPlay = !1,
        i._autoPlay = !1,
        i._isVideoLoaded = !1,
        i._restoreTime = 0,
        i._timeInView = 0,
        i.render = function(t, e) {
            var n;
            i.viewInfo.updateRect(),
            null != i._video && (!0 === i.viewInfo.isInView() && null !== i.getElement().offsetParent ? (i._timeInView += t,
            1 < i._timeInView && (i.loadVideo(),
            i._videoContainer.contains(i._video) || i._videoContainer.appendChild(i._video),
            !1 === i._videoReadyForPlay && 4 === i._video.readyState && i.isReadyForPlay() && i.videoReadyForPlay(),
            !0 === i._videoReadyForPlay && !1 === i._wasInteractedWith && !0 === i._autoPlay && i.Play())) : (i._timeInView = 0,
            i.unloadVideo()),
            t = i._video.duration - i._video.currentTime,
            isNaN(t) && (t = 0),
            (n = new Date(null)).setSeconds(t),
            i._playbackTime.innerText = n.toISOString().substr(14, 5))
        }
        ,
        i.onPlay = function() {
            i._wasInteractedWith = !0,
            i._isPlaying ? i.Pause() : i.Play()
        }
        ,
        i
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(129),
    s(n(1))), l = s(n(11)), s = (r = a.default,
    o(u, r),
    u.prototype.build = function() {
        r.prototype.build.call(this);
        var t = this.qs(".case-header");
        t.innerHTML = t.innerHTML.replace("®", '<span class="super">®</span>')
    }
    ,
    u.prototype.awake = function() {
        l.default.Instance.addAllAtags(this.getElement())
    }
    ,
    u.prototype.sleep = function() {
        l.default.Instance.removeAllAtags(this.getElement())
    }
    ,
    u);
    function u() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(18))), l = s(n(6)), s = (r = a.default,
    o(u, r),
    u.prototype.awake = function() {
        window.scrollTo(0, 0),
        l.default.Instance.backgroundColor = this.params.plain.backgroundcolor,
        l.default.Instance.foregroundColor = this.params.plain.foregroundcolor
    }
    ,
    u.prototype.showTestMargin = function() {
        for (var t = this.getElement().childNodes.length, e = 0; e < t; e += 1) {
            var n, i = this.getElement().childNodes[e];
            "SECTION" === i.tagName && ((n = document.createElement("div")).classList.add("test"),
            i.prepend(n))
        }
    }
    ,
    u.prototype.getRandomColor = function() {
        for (var t = "", e = 0; e < 3; e++) {
            var n = Math.floor(256 * Math.random()).toString(16);
            t += 1 == n.length ? "0" + n : n
        }
        return "#" + t
    }
    ,
    u.prototype.scrollTo = function(t) {
        this._isAnimatingOut || r.prototype.scrollTo.call(this, t)
    }
    ,
    u);
    function u() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t._isAnimatingOut = !1,
        t
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(26))), l = s(n(2)), s = (r = a.default,
    o(u, r),
    Object.defineProperty(u.prototype, "length", {
        get: function() {
            return this._length
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(u.prototype, "type", {
        get: function() {
            return this._type
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(u.prototype, "value", {
        get: function() {
            return this._value
        },
        enumerable: !1,
        configurable: !0
    }),
    u.decodeHTML = function(t) {
        return t = (t = (t = t.replace(/&gt;/g, ">")).replace(/&lt;/g, "<")).replace(/&amp;/g, "&")
    }
    ,
    u.prototype.createElement = function() {
        this.getContainer().classList.add("dump-variable-element");
        var t = l.default.JSXCreate("div", {
            class: "dump-item"
        }, l.default.JSXCreate("div", {
            class: "value"
        }, l.default.JSXCreate("p", null, u.decodeHTML(this._value.toString()))), l.default.JSXCreate("div", {
            class: "name"
        }, this.name), l.default.JSXCreate("div", {
            class: "type"
        }, l.default.JSXCreate("p", null, this.type), l.default.JSXCreate("div", {
            class: "length"
        }, this.length.toString())));
        return this.getContainer().appendChild(t),
        t.classList.add("dump-" + this.type),
        this.getContainer()
    }
    ,
    u);
    function u(t, e, n, i) {
        e = r.call(this, e, n, i) || this;
        return e._type = typeof t,
        e._length = e.findLength(t),
        e._value = t,
        e
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(3)), l = s(n(2)), u = n(24), c = s(n(14)), s = (r = l.default,
    o(f, r),
    Object.defineProperty(f.prototype, "onImgLoaded", {
        get: function() {
            return this._onImgLoaded.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(f.prototype, "origWidth", {
        get: function() {
            return this._origWidth
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(f.prototype, "origHeight", {
        get: function() {
            return this._origHeight
        },
        enumerable: !1,
        configurable: !0
    }),
    f.prototype.load = function(t) {
        this._static = new u.StaticWrapper(this),
        this.params.plain.loadbeforeshow ? (this.onImgLoaded.one(function() {
            t()
        }),
        this.loadAppropriateImage()) : t()
    }
    ,
    f.prototype.awake = function() {
        this.loadAppropriateImage(),
        this.getElement().style.opacity = "0",
        c.default.Instance.onResize.sub(this.onResize),
        this.onResize()
    }
    ,
    f.prototype.sleep = function() {
        c.default.Instance.onResize.unsub(this.onResize),
        this._fakeLoader.removeEventListener("load", this.onImageDataLoaded, !0),
        this.getElement().removeEventListener("load", this.onImageLoadedAndAdded)
    }
    ,
    f.prototype.getWidthToLoad = function() {
        return this.roundToLoadSize(this.getElement().offsetWidth) * this.getDevicePixelRatio()
    }
    ,
    f.prototype.getHeightToLoad = function() {
        return Math.round(this.getWidthToLoad() * this.getAspectRatio())
    }
    ,
    f.prototype.getAspectRatio = function() {
        var t = (this.params.plain.aspectratio || "1x1").split("x");
        return parseFloat(t[1]) / parseFloat(t[0])
    }
    ,
    f.prototype.roundToLoadSize = function(t) {
        for (var e = f.BASIC_LOAD_SIZES.length, n = 0; n < e; n++) {
            var i = f.BASIC_LOAD_SIZES[n];
            if (t < i && i >= this._lastLoadedSize) {
                this._lastLoadedSize = i;
                break
            }
        }
        return 0 === this._lastLoadedSize && (this._lastLoadedSize = f.BASIC_LOAD_SIZES[e - 1]),
        this._lastLoadedSize
    }
    ,
    f.prototype.getDevicePixelRatio = function() {
        var t = 1;
        return t = window.devicePixelRatio ? window.devicePixelRatio : t
    }
    ,
    f.prototype.isImgLoaded = function() {
        return !this._isLoading && this._isImgLoaded
    }
    ,
    f.prototype.getLoadUrl = function() {
        return this.params.plain.src
    }
    ,
    f.BASIC_LOAD_SIZES = [1, 25, 50, 100, 200, 400, 600, 800, 1200, 1500, 1800, 2600, 3600],
    f);
    function f() {
        var e = null !== r && r.apply(this, arguments) || this;
        return e._onImgLoaded = new a.SignalDispatcher,
        e._origWidth = 0,
        e._origHeight = 0,
        e._isImgLoaded = !1,
        e._isLoading = !1,
        e._currentUrl = "",
        e._fakeLoader = new Image,
        e._lastLoadedSize = 0,
        e.onResize = function() {
            e.getElement().style.height = e.getElement().parentElement.offsetWidth * e.getAspectRatio() + "px",
            e.loadAppropriateImage()
        }
        ,
        e.loadAppropriateImage = function() {
            var t;
            e._isLoading || (t = e.getLoadUrl(),
            e._currentUrl !== t && (e._currentUrl = t,
            e._isLoading = !0,
            e._fakeLoader.addEventListener("load", e.onImageDataLoaded, !0),
            e._fakeLoader.src = e._currentUrl))
        }
        ,
        e.onImageDataLoaded = function() {
            e._fakeLoader.removeEventListener("load", e.onImageDataLoaded, !0),
            e.getElement().addEventListener("load", e.onImageLoadedAndAdded),
            e.getElement().setAttribute("src", e._currentUrl)
        }
        ,
        e.onImageLoadedAndAdded = function() {
            e.getElement().removeEventListener("load", e.onImageLoadedAndAdded),
            e._origWidth = e._fakeLoader.naturalWidth,
            e._origHeight = e._fakeLoader.naturalHeight,
            e.getElement().parentNode.insertBefore(e.getElement(), e.getElement()),
            e.getElement().style.opacity = "inherit",
            e._isLoading = !1,
            e._isImgLoaded = !0,
            e._onImgLoaded.dispatch(),
            e._static.calculatePageHeight(),
            e.onResize()
        }
        ,
        e
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(2))), l = s(n(31)), u = s(n(162)), s = (r = a.default,
    o(c, r),
    c.prototype.awake = function() {
        r.prototype.awake.call(this),
        u.default.Instance.add(this.getElement(), this.onMouseOver, this.onMouseOut, this.getSortIndex())
    }
    ,
    c.prototype.sleep = function() {
        r.prototype.sleep.call(this),
        u.default.Instance.remove(this.getElement())
    }
    ,
    c.prototype.getSortIndex = function() {
        return this.params.plain.sortindex ? parseInt(this.params.plain.sortindex) : 0
    }
    ,
    c.prototype.getCursorName = function() {
        return this.params.plain.cursorname
    }
    ,
    c);
    function c() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t.onMouseOver = function() {
            l.default.Instance.setCursor(t.getCursorName())
        }
        ,
        t.onMouseOut = function() {
            l.default.Instance.setDefaultCursor()
        }
        ,
        t
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(45))), l = s(n(19)), s = (r = a.default,
    o(u, r),
    u.prototype.getLoadUrl = function() {
        var t, e = l.default.genFullUrl(this.params.plain.src);
        return l.default.isLocal(e) ? this.params.plain.src : (t = "",
        t = e.endsWith(".gif") ? "" : "w=" + this.getWidthToLoad() + "&h=" + this.getHeightToLoad() + "&q=" + u.QUALITY,
        e + ("" !== t ? "?" + t : ""))
    }
    ,
    u.QUALITY = "75",
    u);
    function u() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = s
}
, function(t, e, n) {}
, function(t, e, n) {
    t.exports = n(50)
}
, function(t, e, n) {
    t.exports = function() {
        var n, j, N, e = function(t, e, n) {
            var i = n;
            for (var r = 0, o = t.length; r < o; r++)
                i = e(i, t[r], r, t);
            return i
        }, B = function(t, r) {
            return e(t, function(t, e, n, i) {
                return !r(e, n, i) ? t : t.concat(e)
            }, [])
        }, F = function(t, r) {
            return e(t, function(t, e, n, i) {
                return t.concat(r(e, n, i))
            }, [])
        }, z = function(t, r) {
            return e(t, function(t, e, n, i) {
                return t === true || e === r
            }, false)
        }, H = !{
            toString: null
        }.propertyIsEnumerable("toString"), o = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], X, V, i = function(t) {
            return t < 10 ? "0" + t : t
        }, q, t = {
            map: F,
            reduce: e,
            filter: B,
            includes: z,
            keys: function(t) {
                var e = [];
                var n;
                for (n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n))
                        e.push(n);
                if (!H)
                    return e;
                for (var i = 0, r = o.length; i < r; i++)
                    if (Object.prototype.hasOwnProperty.call(t, o[i]))
                        e.push(o[i]);
                return e
            },
            isArray: function(t) {
                return Object.prototype.toString.call(t) === "[object Array]"
            },
            isoDate: function() {
                var t = new Date;
                return t.getUTCFullYear() + "-" + i(t.getUTCMonth() + 1) + "-" + i(t.getUTCDate()) + "T" + i(t.getUTCHours()) + ":" + i(t.getUTCMinutes()) + ":" + i(t.getUTCSeconds()) + "." + (t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
            }
        }, r = {
            intRange: function(e, n) {
                if (e === void 0)
                    e = 1;
                if (n === void 0)
                    n = Infinity;
                return function(t) {
                    return typeof t === "number" && parseInt("" + t, 10) === t && t >= e && t <= n
                }
            },
            stringWithLength: function(t) {
                return typeof t === "string" && !!t.length
            }
        }, s = {}, a = t.filter, l = t.reduce, u = t.keys, c = t.isArray, U = t.includes, W = r.intRange, f = r.stringWithLength;
        function p() {
            p = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i))
                            t[i] = n[i]
                }
                return t
            }
            ;
            return p.apply(this, arguments)
        }
        s.schema = {
            apiKey: {
                defaultValue: function() {
                    return null
                },
                message: "is required",
                validate: f
            },
            appVersion: {
                defaultValue: function() {
                    return null
                },
                message: "should be a string",
                validate: function(t) {
                    return t === null || f(t)
                }
            },
            appType: {
                defaultValue: function() {
                    return null
                },
                message: "should be a string",
                validate: function(t) {
                    return t === null || f(t)
                }
            },
            autoNotify: {
                defaultValue: function() {
                    return true
                },
                message: "should be true|false",
                validate: function(t) {
                    return t === true || t === false
                }
            },
            beforeSend: {
                defaultValue: function() {
                    return []
                },
                message: "should be a function or array of functions",
                validate: function(t) {
                    return typeof t === "function" || c(t) && a(t, function(t) {
                        return typeof t === "function"
                    }).length === t.length
                }
            },
            endpoints: {
                defaultValue: function() {
                    return {
                        notify: "https://notify.bugsnag.com",
                        sessions: "https://sessions.bugsnag.com"
                    }
                },
                message: "should be an object containing endpoint URLs { notify, sessions }. sessions is optional if autoCaptureSessions=false",
                validate: function(t, e) {
                    return t && typeof t === "object" && f(t.notify) && (e.autoCaptureSessions === false || f(t.sessions)) && a(u(t), function(t) {
                        return !U(["notify", "sessions"], t)
                    }).length === 0
                }
            },
            autoCaptureSessions: {
                defaultValue: function(t, e) {
                    return e.endpoints === undefined || !!e.endpoints && !!e.endpoints.sessions
                },
                message: "should be true|false",
                validate: function(t) {
                    return t === true || t === false
                }
            },
            notifyReleaseStages: {
                defaultValue: function() {
                    return null
                },
                message: "should be an array of strings",
                validate: function(t) {
                    return t === null || c(t) && a(t, function(t) {
                        return typeof t === "string"
                    }).length === t.length
                }
            },
            releaseStage: {
                defaultValue: function() {
                    return "production"
                },
                message: "should be a string",
                validate: function(t) {
                    return typeof t === "string" && t.length
                }
            },
            maxBreadcrumbs: {
                defaultValue: function() {
                    return 20
                },
                message: "should be a number ≤40",
                validate: function(t) {
                    return W(0, 40)(t)
                }
            },
            autoBreadcrumbs: {
                defaultValue: function() {
                    return true
                },
                message: "should be true|false",
                validate: function(t) {
                    return typeof t === "boolean"
                }
            },
            user: {
                defaultValue: function() {
                    return null
                },
                message: "(object) user should be an object",
                validate: function(t) {
                    return typeof t === "object"
                }
            },
            metaData: {
                defaultValue: function() {
                    return null
                },
                message: "should be an object",
                validate: function(t) {
                    return typeof t === "object"
                }
            },
            logger: {
                defaultValue: function() {
                    return undefined
                },
                message: "should be null or an object with methods { debug, info, warn, error }",
                validate: function(n) {
                    return !n || n && l(["debug", "info", "warn", "error"], function(t, e) {
                        return t && typeof n[e] === "function"
                    }, true)
                }
            },
            filters: {
                defaultValue: function() {
                    return ["password"]
                },
                message: "should be an array of strings|regexes",
                validate: function(t) {
                    return c(t) && t.length === a(t, function(t) {
                        return typeof t === "string" || t && typeof t.test === "function"
                    }).length
                }
            }
        },
        s.mergeDefaults = function(n, i) {
            if (!n || !i)
                throw new Error("opts and schema objects are required");
            return l(u(i), function(t, e) {
                t[e] = n[e] !== undefined ? n[e] : i[e].defaultValue(n[e], n);
                return t
            }, {})
        }
        ,
        s.validate = function(n, i) {
            if (!n || !i)
                throw new Error("opts and schema objects are required");
            var t = l(u(i), function(t, e) {
                if (i[e].validate(n[e], n))
                    return t;
                return t.concat({
                    key: e,
                    message: i[e].message,
                    value: n[e]
                })
            }, []);
            return {
                valid: !t.length,
                errors: t
            }
        }
        ;
        var Y = s.schema, G = t.map, Z, K = {
            releaseStage: {
                defaultValue: function() {
                    if (/^localhost(:\d+)?$/.test(window.location.host))
                        return "development";
                    return "production"
                },
                message: "should be set",
                validate: r.stringWithLength
            },
            logger: p({}, Y.logger, {
                defaultValue: function() {
                    return typeof console !== "undefined" && typeof console.debug === "function" ? $() : undefined
                }
            })
        }, $ = function() {
            var n = {};
            var i = console["log"];
            G(["debug", "info", "warn", "error"], function(t) {
                var e = console[t];
                n[t] = typeof e === "function" ? e.bind(console, "[bugsnag]") : i.bind(console, "[bugsnag]")
            });
            return n
        }, J = t.isoDate, Q, h = function() {
            function t(t, e, n, i) {
                if (t === void 0)
                    t = "[anonymous]";
                if (e === void 0)
                    e = {};
                if (n === void 0)
                    n = "manual";
                if (i === void 0)
                    i = J();
                this.type = n;
                this.name = t;
                this.metaData = e;
                this.timestamp = i
            }
            var e = t.prototype;
            e.toJSON = function t() {
                return {
                    type: this.type,
                    name: this.name,
                    timestamp: this.timestamp,
                    metaData: this.metaData
                }
            }
            ;
            return t
        }(), tt = function(t, e, n) {
            var i = t.length;
            var r = 0;
            var o = function() {
                if (r >= i)
                    return n(null, false);
                e(t[r], function(t, e) {
                    if (t)
                        return n(t, false);
                    if (e === true)
                        return n(null, true);
                    r++;
                    o()
                })
            };
            o()
        }, et = function(t) {
            return t.app && typeof t.app.releaseStage === "string" ? t.app.releaseStage : t.config.releaseStage
        }, nt;
        function it(t) {
            switch (Object.prototype.toString.call(t)) {
            case "[object Error]":
                return true;
            case "[object Exception]":
                return true;
            case "[object DOMException]":
                return true;
            default:
                return t instanceof Error
            }
        }
        var rt = it
          , ot = function(i, r) {
            return function(t, n) {
                if (typeof t !== "function")
                    return n(null, false);
                try {
                    if (t.length !== 2) {
                        var e = t(i);
                        if (e && typeof e.then === "function")
                            return e.then(function(t) {
                                return setTimeout(function() {
                                    return n(null, d(i, t))
                                }, 0)
                            }, function(t) {
                                setTimeout(function() {
                                    r(t);
                                    return n(null, false)
                                })
                            });
                        return n(null, d(i, e))
                    }
                    t(i, function(t, e) {
                        if (t) {
                            r(t);
                            return n(null, false)
                        }
                        n(null, d(i, e))
                    })
                } catch (t) {
                    r(t);
                    n(null, false)
                }
            }
        }
          , d = function(t, e) {
            return t.isIgnored() || e === false
        }
          , _ = {}
          , m = (function(t, e) {
            "use strict";
            if (typeof n === "function" && n.amd)
                n("stackframe", [], e);
            else if (typeof _ === "object")
                _ = e();
            else
                t.StackFrame = e()
        }(this, function() {
            "use strict";
            function o(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }
            function n(t) {
                return t.charAt(0).toUpperCase() + t.substring(1)
            }
            function t(t) {
                return function() {
                    return this[t]
                }
            }
            var e = ["isConstructor", "isEval", "isNative", "isToplevel"];
            var i = ["columnNumber", "lineNumber"];
            var r = ["fileName", "functionName", "source"];
            var s = ["args"];
            var a = e.concat(i, r, s);
            function l(t) {
                if (t instanceof Object)
                    for (var e = 0; e < a.length; e++)
                        if (t.hasOwnProperty(a[e]) && t[a[e]] !== undefined)
                            this["set" + n(a[e])](t[a[e]])
            }
            l.prototype = {
                getArgs: function() {
                    return this.args
                },
                setArgs: function(t) {
                    if (Object.prototype.toString.call(t) !== "[object Array]")
                        throw new TypeError("Args must be an Array");
                    this.args = t
                },
                getEvalOrigin: function() {
                    return this.evalOrigin
                },
                setEvalOrigin: function(t) {
                    if (t instanceof l)
                        this.evalOrigin = t;
                    else if (t instanceof Object)
                        this.evalOrigin = new l(t);
                    else
                        throw new TypeError("Eval Origin must be an Object or StackFrame")
                },
                toString: function() {
                    var t = this.getFunctionName() || "{anonymous}";
                    var e = "(" + (this.getArgs() || []).join(",") + ")";
                    var n = this.getFileName() ? "@" + this.getFileName() : "";
                    var i = o(this.getLineNumber()) ? ":" + this.getLineNumber() : "";
                    var r = o(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "";
                    return t + e + n + i + r
                }
            };
            for (var u = 0; u < e.length; u++) {
                l.prototype["get" + n(e[u])] = t(e[u]);
                l.prototype["set" + n(e[u])] = function(e) {
                    return function(t) {
                        this[e] = Boolean(t)
                    }
                }(e[u])
            }
            for (var c = 0; c < i.length; c++) {
                l.prototype["get" + n(i[c])] = t(i[c]);
                l.prototype["set" + n(i[c])] = function(e) {
                    return function(t) {
                        if (!o(t))
                            throw new TypeError(e + " must be a Number");
                        this[e] = Number(t)
                    }
                }(i[c])
            }
            for (var f = 0; f < r.length; f++) {
                l.prototype["get" + n(r[f])] = t(r[f]);
                l.prototype["set" + n(r[f])] = function(e) {
                    return function(t) {
                        this[e] = String(t)
                    }
                }(r[f])
            }
            return l
        }),
        {})
          , g = (function(t, e) {
            "use strict";
            if (typeof n === "function" && n.amd)
                n("error-stack-parser", ["stackframe"], e);
            else if (typeof m === "object")
                m = e(_);
            else
                t.ErrorStackParser = e(t.StackFrame)
        }(this, function t(l) {
            "use strict";
            var i = /(^|@)\S+\:\d+/;
            var r = /^\s*at .*(\S+\:\d+|\(native\))/m;
            var o = /^(eval@)?(\[native code\])?$/;
            return {
                parse: function t(e) {
                    if (typeof e.stacktrace !== "undefined" || typeof e["opera#sourceloc"] !== "undefined")
                        return this.parseOpera(e);
                    else if (e.stack && e.stack.match(r))
                        return this.parseV8OrIE(e);
                    else if (e.stack)
                        return this.parseFFOrSafari(e);
                    else
                        throw new Error("Cannot parse given Error object")
                },
                extractLocation: function t(e) {
                    if (e.indexOf(":") === -1)
                        return [e];
                    var n = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
                    var i = n.exec(e.replace(/[\(\)]/g, ""));
                    return [i[1], i[2] || undefined, i[3] || undefined]
                },
                parseV8OrIE: function t(e) {
                    var n = e.stack.split("\n").filter(function(t) {
                        return !!t.match(r)
                    }, this);
                    return n.map(function(t) {
                        if (t.indexOf("(eval ") > -1)
                            t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, "");
                        var e = t.replace(/^\s+/, "").replace(/\(eval code/g, "(");
                        var n = e.match(/ (\((.+):(\d+):(\d+)\)$)/);
                        e = n ? e.replace(n[0], "") : e;
                        var i = e.split(/\s+/).slice(1);
                        var r = this.extractLocation(n ? n[1] : i.pop());
                        var o = i.join(" ") || undefined;
                        var s = ["eval", "<anonymous>"].indexOf(r[0]) > -1 ? undefined : r[0];
                        return new l({
                            functionName: o,
                            fileName: s,
                            lineNumber: r[1],
                            columnNumber: r[2],
                            source: t
                        })
                    }, this)
                },
                parseFFOrSafari: function t(e) {
                    var n = e.stack.split("\n").filter(function(t) {
                        return !t.match(o)
                    }, this);
                    return n.map(function(t) {
                        if (t.indexOf(" > eval") > -1)
                            t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1");
                        if (t.indexOf("@") === -1 && t.indexOf(":") === -1)
                            return new l({
                                functionName: t
                            });
                        else {
                            var e = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                            var n = t.match(e);
                            var i = n && n[1] ? n[1] : undefined;
                            var r = this.extractLocation(t.replace(e, ""));
                            return new l({
                                functionName: i,
                                fileName: r[0],
                                lineNumber: r[1],
                                columnNumber: r[2],
                                source: t
                            })
                        }
                    }, this)
                },
                parseOpera: function t(e) {
                    if (!e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length)
                        return this.parseOpera9(e);
                    else if (!e.stack)
                        return this.parseOpera10(e);
                    else
                        return this.parseOpera11(e)
                },
                parseOpera9: function t(e) {
                    var n = /Line (\d+).*script (?:in )?(\S+)/i;
                    var i = e.message.split("\n");
                    var r = [];
                    for (var o = 2, s = i.length; o < s; o += 2) {
                        var a = n.exec(i[o]);
                        if (a)
                            r.push(new l({
                                fileName: a[2],
                                lineNumber: a[1],
                                source: i[o]
                            }))
                    }
                    return r
                },
                parseOpera10: function t(e) {
                    var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
                    var i = e.stacktrace.split("\n");
                    var r = [];
                    for (var o = 0, s = i.length; o < s; o += 2) {
                        var a = n.exec(i[o]);
                        if (a)
                            r.push(new l({
                                functionName: a[3] || undefined,
                                fileName: a[2],
                                lineNumber: a[1],
                                source: i[o]
                            }))
                    }
                    return r
                },
                parseOpera11: function t(e) {
                    var n = e.stack.split("\n").filter(function(t) {
                        return !!t.match(i) && !t.match(/^Error created at/)
                    }, this);
                    return n.map(function(t) {
                        var e = t.split("@");
                        var n = this.extractLocation(e.pop());
                        var i = e.shift() || "";
                        var r = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || undefined;
                        var o;
                        if (i.match(/\(([^\)]*)\)/))
                            o = i.replace(/^[^\(]+\(([^\)]*)\)$/, "$1");
                        var s = o === undefined || o === "[arguments not available]" ? undefined : o.split(",");
                        return new l({
                            functionName: r,
                            args: s,
                            fileName: n[0],
                            lineNumber: n[1],
                            columnNumber: n[2],
                            source: t
                        })
                    }, this)
                }
            }
        }),
        m)
          , y = function(t) {
            return !!t && (!!t.stack || !!t.stacktrace || !!t["opera#sourceloc"]) && typeof (t.stack || t.stacktrace || t["opera#sourceloc"]) === "string" && t.stack !== t.name + ": " + t.message
        }
          , st = "yes" ? "browserjs" : undefined
          , v = {};
        function b() {
            b = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i))
                            t[i] = n[i]
                }
                return t
            }
            ;
            return b.apply(this, arguments)
        }
        (function(t, e) {
            "use strict";
            if (typeof n === "function" && n.amd)
                n("stack-generator", ["stackframe"], e);
            else if (typeof v === "object")
                v = e(_);
            else
                t.StackGenerator = e(t.StackFrame)
        }
        )(this, function(a) {
            return {
                backtrace: function t(e) {
                    var n = [];
                    var i = 10;
                    if (typeof e === "object" && typeof e.maxStackSize === "number")
                        i = e.maxStackSize;
                    var r = arguments.callee;
                    while (r && n.length < i && r["arguments"]) {
                        var o = new Array(r["arguments"].length);
                        for (var s = 0; s < o.length; ++s)
                            o[s] = r["arguments"][s];
                        if (/function(?:\s+([\w$]+))+\s*\(/.test(r.toString()))
                            n.push(new a({
                                functionName: RegExp.$1 || undefined,
                                args: o
                            }));
                        else
                            n.push(new a({
                                args: o
                            }));
                        try {
                            r = r.caller
                        } catch (t) {
                            break
                        }
                    }
                    return n
                }
            }
        });
        var at = t.reduce, lt = t.filter, w = function() {
            function t(t, e, n, i, r) {
                if (n === void 0)
                    n = [];
                if (i === void 0)
                    i = ft();
                this.__isBugsnagReport = true;
                this._ignored = false;
                this._handledState = i;
                this.app = undefined;
                this.apiKey = undefined;
                this.breadcrumbs = [];
                this.context = undefined;
                this.device = undefined;
                this.errorClass = pt(t, "[no error class]");
                this.errorMessage = pt(e, "[no error message]");
                this.groupingHash = undefined;
                this.metaData = {};
                this.request = undefined;
                this.severity = this._handledState.severity;
                this.stacktrace = at(n, function(e, t) {
                    var n = ut(t);
                    try {
                        if (JSON.stringify(n) === "{}")
                            return e;
                        return e.concat(n)
                    } catch (t) {
                        return e
                    }
                }, []);
                this.user = undefined;
                this.session = undefined;
                this.originalError = r
            }
            var e = t.prototype;
            e.ignore = function t() {
                this._ignored = true
            }
            ;
            e.isIgnored = function t() {
                return this._ignored
            }
            ;
            e.updateMetaData = function t(e) {
                var n;
                if (!e)
                    return this;
                var i;
                if ((arguments.length <= 1 ? undefined : arguments[1]) === null)
                    return this.removeMetaData(e);
                if ((arguments.length <= 2 ? undefined : arguments[2]) === null)
                    return this.removeMetaData(e, arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
                if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === "object")
                    i = arguments.length <= 1 ? undefined : arguments[1];
                if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === "string")
                    i = (n = {},
                    n[arguments.length <= 1 ? undefined : arguments[1]] = arguments.length <= 2 ? undefined : arguments[2],
                    n);
                if (!i)
                    return this;
                if (!this.metaData[e])
                    this.metaData[e] = {};
                this.metaData[e] = b({}, this.metaData[e], i);
                return this
            }
            ;
            e.removeMetaData = function t(e, n) {
                if (typeof e !== "string")
                    return this;
                if (!n) {
                    delete this.metaData[e];
                    return this
                }
                if (this.metaData[e]) {
                    delete this.metaData[e][n];
                    return this
                }
                return this
            }
            ;
            e.toJSON = function t() {
                return {
                    payloadVersion: "4",
                    exceptions: [{
                        errorClass: this.errorClass,
                        message: this.errorMessage,
                        stacktrace: this.stacktrace,
                        type: st
                    }],
                    severity: this.severity,
                    unhandled: this._handledState.unhandled,
                    severityReason: this._handledState.severityReason,
                    app: this.app,
                    device: this.device,
                    breadcrumbs: this.breadcrumbs,
                    context: this.context,
                    user: this.user,
                    metaData: this.metaData,
                    groupingHash: this.groupingHash,
                    request: this.request,
                    session: this.session
                }
            }
            ;
            return t
        }(), ut = function(t) {
            var e = {
                file: t.fileName,
                method: ct(t.functionName),
                lineNumber: t.lineNumber,
                columnNumber: t.columnNumber,
                code: undefined,
                inProject: undefined
            };
            if (e.lineNumber > -1 && !e.file && !e.method)
                e.file = "global code";
            return e
        }, ct = function(t) {
            return /^global code$/i.test(t) ? "global code" : t
        }, ft = function() {
            return {
                unhandled: false,
                severity: "warning",
                severityReason: {
                    type: "handledException"
                }
            }
        }, pt = function(t, e) {
            return typeof t === "string" && t ? t : e
        }, x = (w.getStacktrace = function(e, t, n) {
            if (t === void 0)
                t = 0;
            if (n === void 0)
                n = 0;
            if (y(e))
                return g.parse(e).slice(t);
            try {
                throw e
            } catch (t) {
                if (y(t))
                    return g.parse(e).slice(1 + n);
                try {
                    return lt(v.backtrace(), function(t) {
                        return (t.functionName || "").indexOf("StackGenerator$$") === -1
                    }).slice(1 + n)
                } catch (t) {
                    return []
                }
            }
        }
        ,
        w.ensureReport = function(e, t, n) {
            if (t === void 0)
                t = 0;
            if (n === void 0)
                n = 0;
            if (e.__isBugsnagReport)
                return e;
            try {
                var i = w.getStacktrace(e, t, 1 + n);
                return new w(e.name,e.message,i,undefined,e)
            } catch (t) {
                return new w(e.name,e.message,[],undefined,e)
            }
        }
        ,
        w), ht = function t(e, n) {
            var i = "000000000" + e;
            return i.substr(i.length - n)
        }, dt = typeof window === "object" ? window : self, _t = 0, mt;
        for (mt in dt)
            if (Object.hasOwnProperty.call(dt, mt))
                _t++;
        var gt = navigator.mimeTypes ? navigator.mimeTypes.length : 0
          , yt = ht((gt + navigator.userAgent.length).toString(36) + _t.toString(36), 4)
          , vt = function t() {
            return yt
        }
          , T = 0
          , bt = 4
          , O = 36
          , wt = Math.pow(O, bt);
        function xt() {
            return ht((Math.random() * wt << 0).toString(O), bt)
        }
        function Tt() {
            T = T < wt ? T : 0;
            T++;
            return T - 1
        }
        function Ot() {
            var t = "c"
              , e = (new Date).getTime().toString(O)
              , n = ht(Tt().toString(O), bt)
              , i = vt()
              , r = xt() + xt();
            return t + e + n + i + r
        }
        Ot.fingerprint = vt;
        var Pt = Ot, St = t.isoDate, Ct, Et = function() {
            function t() {
                this.id = Pt();
                this.startedAt = St();
                this._handled = 0;
                this._unhandled = 0
            }
            var e = t.prototype;
            e.toJSON = function t() {
                return {
                    id: this.id,
                    startedAt: this.startedAt,
                    events: {
                        handled: this._handled,
                        unhandled: this._unhandled
                    }
                }
            }
            ;
            e.trackError = function t(e) {
                this[e._handledState.unhandled ? "_unhandled" : "_handled"] += 1
            }
            ;
            return t
        }();
        function P() {
            P = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i))
                            t[i] = n[i]
                }
                return t
            }
            ;
            return P.apply(this, arguments)
        }
        var kt = t.map
          , At = t.includes
          , Mt = t.isArray
          , It = "Usage error."
          , Lt = "Bugsnag usage error."
          , Rt = function() {
            function i(t) {
                if (!t || !t.name || !t.version || !t.url)
                    throw new Error("`notifier` argument is required");
                this.notifier = t;
                this._configured = false;
                this._opts = {};
                this.config = {};
                this._delivery = {
                    sendSession: function() {},
                    sendReport: function() {}
                };
                this._logger = {
                    debug: function() {},
                    info: function() {},
                    warn: function() {},
                    error: function() {}
                };
                this._plugins = {};
                this._session = null;
                this.breadcrumbs = [];
                this.app = {};
                this.context = undefined;
                this.device = undefined;
                this.metaData = undefined;
                this.request = undefined;
                this.user = {};
                this.BugsnagClient = i;
                this.BugsnagReport = x;
                this.BugsnagBreadcrumb = h;
                this.BugsnagSession = Et;
                var e = this;
                var n = this.notify;
                this.notify = function() {
                    return n.apply(e, arguments)
                }
            }
            var t = i.prototype;
            t.setOptions = function t(e) {
                this._opts = P({}, this._opts, e)
            }
            ;
            t.configure = function t(e) {
                if (e === void 0)
                    e = s.schema;
                var n = s.mergeDefaults(this._opts, e);
                var i = s.validate(n, e);
                if (!i.valid === true)
                    throw new Error(Nt(i.errors));
                if (typeof n.beforeSend === "function")
                    n.beforeSend = [n.beforeSend];
                if (n.appVersion)
                    this.app.version = n.appVersion;
                if (n.appType)
                    this.app.type = n.appType;
                if (n.metaData)
                    this.metaData = n.metaData;
                if (n.user)
                    this.user = n.user;
                if (n.logger)
                    this.logger(n.logger);
                this.config = P({}, this.config, n);
                this._configured = true;
                return this
            }
            ;
            t.use = function t(e) {
                if (!this._configured)
                    throw new Error("client not configured");
                if (e.configSchema)
                    this.configure(e.configSchema);
                for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                    i[r - 1] = arguments[r];
                var o = e.init.apply(e, [this].concat(i));
                if (e.name)
                    this._plugins["~" + e.name + "~"] = o;
                return this
            }
            ;
            t.getPlugin = function t(e) {
                return this._plugins["~" + e + "~"]
            }
            ;
            t.delivery = function t(e) {
                this._delivery = e(this);
                return this
            }
            ;
            t.logger = function t(e, n) {
                this._logger = e;
                return this
            }
            ;
            t.sessionDelegate = function t(e) {
                this._sessionDelegate = e;
                return this
            }
            ;
            t.startSession = function t() {
                if (!this._sessionDelegate) {
                    this._logger.warn("No session implementation is installed");
                    return this
                }
                return this._sessionDelegate.startSession(this)
            }
            ;
            t.leaveBreadcrumb = function t(e, n, i, r) {
                if (!this._configured)
                    throw new Error("client not configured");
                e = e || undefined;
                i = typeof i === "string" ? i : undefined;
                r = typeof r === "string" ? r : undefined;
                n = typeof n === "object" && n !== null ? n : undefined;
                if (typeof e !== "string" && !n)
                    return;
                var o = new h(e,n,i,r);
                this.breadcrumbs.push(o);
                if (this.breadcrumbs.length > this.config.maxBreadcrumbs)
                    this.breadcrumbs = this.breadcrumbs.slice(this.breadcrumbs.length - this.config.maxBreadcrumbs);
                return this
            }
            ;
            t.notify = function t(e, n, i) {
                var r = this;
                if (n === void 0)
                    n = {};
                if (i === void 0)
                    i = function() {}
                    ;
                if (!this._configured)
                    throw new Error("client not configured");
                var o = et(this);
                var s = Dt(e, n, this._logger)
                  , a = s.err
                  , l = s.errorFramesToSkip
                  , u = s._opts;
                if (u)
                    n = u;
                if (typeof n !== "object" || n === null)
                    n = {};
                var c = x.ensureReport(a, l, 2);
                c.app = P({}, {
                    releaseStage: o
                }, c.app, this.app);
                c.context = c.context || n.context || this.context || undefined;
                c.device = P({}, c.device, this.device, n.device);
                c.request = P({}, c.request, this.request, n.request);
                c.user = P({}, c.user, this.user, n.user);
                c.metaData = P({}, c.metaData, this.metaData, n.metaData);
                c.breadcrumbs = this.breadcrumbs.slice(0);
                if (this._session) {
                    this._session.trackError(c);
                    c.session = this._session
                }
                if (n.severity !== undefined) {
                    c.severity = n.severity;
                    c._handledState.severityReason = {
                        type: "userSpecifiedSeverity"
                    }
                }
                if (Mt(this.config.notifyReleaseStages) && !At(this.config.notifyReleaseStages, o)) {
                    this._logger.warn("Report not sent due to releaseStage/notifyReleaseStages configuration");
                    return i(null, c)
                }
                var f = c.severity;
                var p = [].concat(n.beforeSend).concat(this.config.beforeSend);
                var h = function(t) {
                    r._logger.error("Error occurred in beforeSend callback, continuing anyway…");
                    r._logger.error(t)
                };
                tt(p, ot(c, h), function(t, e) {
                    if (t)
                        h(t);
                    if (e) {
                        r._logger.debug("Report not sent due to beforeSend callback");
                        return i(null, c)
                    }
                    if (r.config.autoBreadcrumbs)
                        r.leaveBreadcrumb(c.errorClass, {
                            errorClass: c.errorClass,
                            errorMessage: c.errorMessage,
                            severity: c.severity
                        }, "error");
                    if (f !== c.severity)
                        c._handledState.severityReason = {
                            type: "userCallbackSetSeverity"
                        };
                    r._delivery.sendReport({
                        apiKey: c.apiKey || r.config.apiKey,
                        notifier: r.notifier,
                        events: [c]
                    }, function(t) {
                        return i(t, c)
                    })
                })
            }
            ;
            return i
        }()
          , Dt = function(t, e, n) {
            var i = 3;
            var r = function(t) {
                var e = Bt(t);
                n.warn(It + " " + e);
                return new Error(Lt + " " + e)
            };
            var o;
            var s = 0;
            var a;
            switch (typeof t) {
            case "string":
                if (typeof e === "string") {
                    o = r("string/string");
                    a = {
                        metaData: {
                            notifier: {
                                notifyArgs: [t, e]
                            }
                        }
                    }
                } else {
                    o = new Error(String(t));
                    s = i
                }
                break;
            case "number":
            case "boolean":
                o = new Error(String(t));
                break;
            case "function":
                o = r("function");
                break;
            case "object":
                if (t !== null && (rt(t) || t.__isBugsnagReport))
                    o = t;
                else if (t !== null && jt(t)) {
                    o = new Error(t.message || t.errorMessage);
                    o.name = t.name || t.errorClass;
                    s = i
                } else
                    o = r(t === null ? "null" : "unsupported object");
                break;
            default:
                o = r("nothing")
            }
            return {
                err: o,
                errorFramesToSkip: s,
                _opts: a
            }
        }
          , jt = function(t) {
            return (typeof t.name === "string" || typeof t.errorClass === "string") && (typeof t.message === "string" || typeof t.errorMessage === "string")
        }
          , Nt = function(t) {
            return "Bugsnag configuration error\n" + kt(t, function(t) {
                return '"' + t.key + '" ' + t.message + " \n    got " + Ft(t.value)
            }).join("\n\n")
        }
          , Bt = function(t) {
            return "notify() expected error/opts parameters, got " + t
        }
          , Ft = function(t) {
            return typeof t === "object" ? JSON.stringify(t) : String(t)
        }
          , zt = Rt
          , Ht = function(t, e, n, i) {
            var r = i && i.filterKeys ? i.filterKeys : [];
            var o = i && i.filterPaths ? i.filterPaths : [];
            return JSON.stringify(Jt(t, r, o), e, n)
        }
          , Xt = 20
          , Vt = 25e3
          , qt = 8
          , S = "...";
        function Ut(t) {
            return t instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(t))
        }
        function Wt(t) {
            return "[Throws: " + (t ? t.message : "?") + "]"
        }
        function Yt(t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e)
                    return true;
            return false
        }
        function Gt(t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                if (e.indexOf(t[n]) === 0)
                    return true;
            return false
        }
        function Zt(t, e) {
            for (var n = 0, i = t.length; n < i; n++) {
                if (typeof t[n] === "string" && t[n] === e)
                    return true;
                if (t[n] && typeof t[n].test === "function" && t[n].test(e))
                    return true
            }
            return false
        }
        function Kt(t) {
            return Object.prototype.toString.call(t) === "[object Array]"
        }
        function $t(t, e) {
            try {
                return t[e]
            } catch (t) {
                return Wt(t)
            }
        }
        function Jt(t, f, p) {
            var h = [];
            var d = 0;
            function _(t, e) {
                function n() {
                    return e.length > qt && d > Vt
                }
                d++;
                if (e.length > Xt)
                    return S;
                if (n())
                    return S;
                if (t === null || typeof t !== "object")
                    return t;
                if (Yt(h, t))
                    return "[Circular]";
                h.push(t);
                if (typeof t.toJSON === "function")
                    try {
                        d--;
                        var i = _(t.toJSON(), e);
                        h.pop();
                        return i
                    } catch (t) {
                        return Wt(t)
                    }
                var r = Ut(t);
                if (r) {
                    d--;
                    var o = _({
                        name: t.name,
                        message: t.message
                    }, e);
                    h.pop();
                    return o
                }
                if (Kt(t)) {
                    var s = [];
                    for (var a = 0, l = t.length; a < l; a++) {
                        if (n()) {
                            s.push(S);
                            break
                        }
                        s.push(_(t[a], e.concat("[]")))
                    }
                    h.pop();
                    return s
                }
                var u = {};
                try {
                    for (var c in t) {
                        if (!Object.prototype.hasOwnProperty.call(t, c))
                            continue;
                        if (Gt(p, e.join(".")) && Zt(f, c)) {
                            u[c] = "[Filtered]";
                            continue
                        }
                        if (n()) {
                            u[c] = S;
                            break
                        }
                        u[c] = _($t(t, c), e.concat(c))
                    }
                } catch (t) {}
                h.pop();
                return u
            }
            return _(t, [])
        }
        var C = {}, Qt = ["events.[].app", "events.[].metaData", "events.[].user", "events.[].breadcrumbs", "events.[].request", "events.[].device"], te = ["device", "app", "user"], ee = (C.report = function(t, e) {
            var n = Ht(t, null, null, {
                filterPaths: Qt,
                filterKeys: e
            });
            if (n.length > 1e6) {
                delete t.events[0].metaData;
                t.events[0].metaData = {
                    notifier: "WARNING!\nSerialized payload was " + n.length / 1e6 + "MB (limit = 1MB)\nmetaData was removed"
                };
                n = Ht(t, null, null, {
                    filterPaths: Qt,
                    filterKeys: e
                });
                if (n.length > 1e6)
                    throw new Error("payload exceeded 1MB limit")
            }
            return n
        }
        ,
        C.session = function(t, e) {
            var n = Ht(t, null, null, {
                filterPaths: te,
                filterKeys: e
            });
            if (n.length > 1e6)
                throw new Error("payload exceeded 1MB limit");
            return n
        }
        ,
        {}), ne = t.isoDate, ee, ie = function(t, e, n, i) {
            return re(t.endpoints[e], i.location.protocol) + "?apiKey=" + encodeURIComponent(t.apiKey) + "&payloadVersion=" + n + "&sentAt=" + encodeURIComponent(ne())
        }, re = (ee = function(r, o) {
            if (o === void 0)
                o = window;
            return {
                sendReport: function(t, e) {
                    if (e === void 0)
                        e = function() {}
                        ;
                    var n = ie(r.config, "notify", "4", o);
                    var i = new o.XDomainRequest;
                    i.onload = function() {
                        e(null)
                    }
                    ;
                    i.open("POST", n);
                    setTimeout(function() {
                        try {
                            i.send(C.report(t, r.config.filters))
                        } catch (t) {
                            r._logger.error(t);
                            e(t)
                        }
                    }, 0)
                },
                sendSession: function(t, e) {
                    if (e === void 0)
                        e = function() {}
                        ;
                    var n = ie(r.config, "sessions", "1", o);
                    var i = new o.XDomainRequest;
                    i.onload = function() {
                        e(null)
                    }
                    ;
                    i.open("POST", n);
                    setTimeout(function() {
                        try {
                            i.send(C.session(t, r.config.filters))
                        } catch (t) {
                            r._logger.error(t);
                            e(t)
                        }
                    }, 0)
                }
            }
        }
        )._matchPageProtocol = function(t, e) {
            return e === "http:" ? t.replace(/^https:/, "http:") : t
        }
        , oe = t.isoDate, se = function(r, o) {
            if (o === void 0)
                o = window;
            return {
                sendReport: function(t, e) {
                    if (e === void 0)
                        e = function() {}
                        ;
                    try {
                        var n = r.config.endpoints.notify;
                        var i = new o.XMLHttpRequest;
                        i.onreadystatechange = function() {
                            if (i.readyState === o.XMLHttpRequest.DONE)
                                e(null)
                        }
                        ;
                        i.open("POST", n);
                        i.setRequestHeader("Content-Type", "application/json");
                        i.setRequestHeader("Bugsnag-Api-Key", t.apiKey || r.config.apiKey);
                        i.setRequestHeader("Bugsnag-Payload-Version", "4");
                        i.setRequestHeader("Bugsnag-Sent-At", oe());
                        i.send(C.report(t, r.config.filters))
                    } catch (t) {
                        r._logger.error(t)
                    }
                },
                sendSession: function(t, e) {
                    if (e === void 0)
                        e = function() {}
                        ;
                    try {
                        var n = r.config.endpoints.sessions;
                        var i = new o.XMLHttpRequest;
                        i.onreadystatechange = function() {
                            if (i.readyState === o.XMLHttpRequest.DONE)
                                e(null)
                        }
                        ;
                        i.open("POST", n);
                        i.setRequestHeader("Content-Type", "application/json");
                        i.setRequestHeader("Bugsnag-Api-Key", r.config.apiKey);
                        i.setRequestHeader("Bugsnag-Payload-Version", "1");
                        i.setRequestHeader("Bugsnag-Sent-At", oe());
                        i.send(C.session(t, r.config.filters))
                    } catch (t) {
                        r._logger.error(t)
                    }
                }
            }
        }, ae = {
            init: function(t, e) {
                if (e === void 0)
                    e = window;
                t.config.beforeSend.unshift(function(t) {
                    if (t.context)
                        return;
                    t.context = e.location.pathname
                })
            }
        };
        function E() {
            E = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i))
                            t[i] = n[i]
                }
                return t
            }
            ;
            return E.apply(this, arguments)
        }
        var le = t.isoDate
          , ue = {
            init: function(t, e) {
                if (e === void 0)
                    e = navigator;
                var n = {
                    locale: e.browserLanguage || e.systemLanguage || e.userLanguage || e.language,
                    userAgent: e.userAgent
                };
                t.device = E({}, n, t.device);
                t.config.beforeSend.unshift(function(t) {
                    t.device = E({}, t.device, {
                        time: le()
                    })
                })
            }
        };
        function ce() {
            ce = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i))
                            t[i] = n[i]
                }
                return t
            }
            ;
            return ce.apply(this, arguments)
        }
        var fe = {
            init: function(t, e) {
                if (e === void 0)
                    e = window;
                t.config.beforeSend.unshift(function(t) {
                    if (t.request && t.request.url)
                        return;
                    t.request = ce({}, t.request, {
                        url: e.location.href
                    })
                })
            }
        };
        function pe() {
            pe = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i))
                            t[i] = n[i]
                }
                return t
            }
            ;
            return pe.apply(this, arguments)
        }
        var he = t.isArray
          , de = t.includes
          , _e = {
            init: function(t) {
                return t.sessionDelegate(me)
            }
        }
          , me = {
            startSession: function(t) {
                var e = t;
                e._session = new t.BugsnagSession;
                var n = et(e);
                if (he(e.config.notifyReleaseStages) && !de(e.config.notifyReleaseStages, n)) {
                    e._logger.warn("Session not sent due to releaseStage/notifyReleaseStages configuration");
                    return e
                }
                if (!e.config.endpoints.sessions) {
                    e._logger.warn("Session not sent due to missing endpoints.sessions configuration");
                    return e
                }
                e._delivery.sendSession({
                    notifier: e.notifier,
                    device: e.device,
                    app: pe({}, {
                        releaseStage: n
                    }, e.app),
                    sessions: [{
                        id: e._session.id,
                        startedAt: e._session.startedAt,
                        user: e.user
                    }]
                });
                return e
            }
        };
        function k() {
            k = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i))
                            t[i] = n[i]
                }
                return t
            }
            ;
            return k.apply(this, arguments)
        }
        var ge = {
            init: function(t) {
                if (t.config.collectUserIp)
                    return;
                t.config.beforeSend.push(function(t) {
                    if (t.user && typeof t.user.id === "undefined")
                        delete t.user.id;
                    t.user = k({
                        id: "[NOT COLLECTED]"
                    }, t.user);
                    t.request = k({
                        clientIp: "[NOT COLLECTED]"
                    }, t.request)
                })
            },
            configSchema: {
                collectUserIp: {
                    defaultValue: function() {
                        return true
                    },
                    message: "should be true|false",
                    validate: function(t) {
                        return t === true || t === false
                    }
                }
            }
        }
          , ye = {}
          , ve = t.map
          , be = t.reduce
          , we = t.filter;
        if (ye.init = function(o) {
            var t = /^dev(elopment)?$/.test(o.config.releaseStage);
            var e = o.config.consoleBreadcrumbsEnabled === false;
            var n = (o.config.autoBreadcrumbs === false || t) && o.config.consoleBreadcrumbsEnabled !== true;
            if (e || n)
                return;
            ve(xe, function(i) {
                var r = console[i];
                console[i] = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    o.leaveBreadcrumb("Console output", be(e, function(t, e, n) {
                        var i = "[Unknown value]";
                        try {
                            i = String(e)
                        } catch (t) {}
                        if (i === "[object Object]")
                            try {
                                i = JSON.stringify(e)
                            } catch (t) {}
                        t["[" + n + "]"] = i;
                        return t
                    }, {
                        severity: i.indexOf("group") === 0 ? "log" : i
                    }), "log");
                    r.apply(console, e)
                }
                ;
                console[i]._restore = function() {
                    console[i] = r
                }
            })
        }
        ,
        ye.configSchema = {
            consoleBreadcrumbsEnabled: {
                defaultValue: function() {
                    return undefined
                },
                validate: function(t) {
                    return t === true || t === false || t === undefined
                },
                message: "should be true|false"
            }
        },
        false)
            ;var xe = we(["log", "debug", "info", "warn", "error"], function(t) {
            return typeof console !== "undefined" && typeof console[t] === "function"
        })
          , Te = t.map
          , Oe = t.reduce
          , Pe = t.filter
          , Se = 200
          , Ce = 5e5
          , Ee = {
            init: function(t, n, e) {
                if (n === void 0)
                    n = document;
                if (e === void 0)
                    e = window;
                if (!t.config.trackInlineScripts)
                    return;
                var r = e.location.href;
                var o = "";
                var s = false;
                var a = function() {
                    return n.documentElement.outerHTML
                };
                o = a();
                var i = n.onreadystatechange;
                n.onreadystatechange = function() {
                    if (n.readyState === "interactive") {
                        o = a();
                        s = true
                    }
                    try {
                        i.apply(this, arguments)
                    } catch (t) {}
                }
                ;
                var l = null;
                var u = function(t) {
                    l = t
                };
                var c = function() {
                    var t = n.currentScript || l;
                    if (!t && !s) {
                        var e = n.scripts || n.getElementsByTagName("script");
                        t = e[e.length - 1]
                    }
                    return t
                };
                var f = function(t) {
                    if (!s || !o)
                        o = a();
                    var e = ["\x3c!-- DOC START --\x3e"].concat(o.split("\n"));
                    var n = t - 1;
                    var i = Math.max(n - 3, 0);
                    var r = Math.min(n + 3, e.length);
                    return Oe(e.slice(i, r), function(t, e, n) {
                        t[i + 1 + n] = e.length <= Se ? e : e.substr(0, Se);
                        return t
                    }, {})
                };
                t.config.beforeSend.unshift(function(t) {
                    t.stacktrace = Pe(t.stacktrace, function(t) {
                        return !/__trace__$/.test(t.method)
                    });
                    var e = t.stacktrace[0];
                    if (e && e.file && e.file.replace(/#.*$/, "") !== r.replace(/#.*$/, ""))
                        return;
                    var n = c();
                    if (n) {
                        var i = n.innerHTML;
                        t.updateMetaData("script", "content", i.length <= Ce ? i : i.substr(0, Ce))
                    }
                    if (!e || !e.lineNumber)
                        return;
                    e.code = f(e.lineNumber)
                });
                var p = Te(["setTimeout", "setInterval", "setImmediate", "requestAnimationFrame"], function(t) {
                    return ke(e, t, function(t) {
                        return d(t, function(e) {
                            return {
                                get: function() {
                                    return e[0]
                                },
                                replace: function(t) {
                                    e[0] = t
                                }
                            }
                        })
                    })
                })
                  , h = p[0];
                Te(["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], function(t) {
                    if (!e[t] || !e[t].prototype || !e[t].prototype.hasOwnProperty || !e[t].prototype.hasOwnProperty("addEventListener"))
                        return;
                    ke(e[t].prototype, "addEventListener", function(t) {
                        return d(t, Ae)
                    });
                    ke(e[t].prototype, "removeEventListener", function(t) {
                        return d(t, Ae, true)
                    })
                });
                function d(r, o, s) {
                    if (s === void 0)
                        s = false;
                    return function() {
                        var t = Array.prototype.slice.call(arguments);
                        try {
                            var e = o(t);
                            var n = e.get();
                            if (s)
                                r.apply(this, t);
                            if (typeof n !== "function")
                                return r.apply(this, t);
                            if (n.__trace__)
                                e.replace(n.__trace__);
                            else {
                                var i = c();
                                n.__trace__ = function t() {
                                    u(i);
                                    h(function() {
                                        u(null)
                                    }, 0);
                                    var e = n.apply(this, arguments);
                                    u(null);
                                    return e
                                }
                                ;
                                n.__trace__.__trace__ = n.__trace__;
                                e.replace(n.__trace__)
                            }
                        } catch (t) {}
                        if (r.apply)
                            return r.apply(this, t);
                        switch (t.length) {
                        case 1:
                            return r(t[0]);
                        case 2:
                            return r(t[0], t[1]);
                        default:
                            return r()
                        }
                    }
                }
            },
            configSchema: {
                trackInlineScripts: {
                    validate: function(t) {
                        return t === true || t === false
                    },
                    defaultValue: function() {
                        return true
                    },
                    message: "should be true|false"
                }
            }
        };
        function ke(t, e, n) {
            var i = t[e];
            if (!i)
                return i;
            var r = n(i);
            t[e] = r;
            return i
        }
        function Ae(e) {
            var n = !!e[1] && typeof e[1].handleEvent === "function";
            return {
                get: function() {
                    return n ? e[1].handleEvent : e[1]
                },
                replace: function(t) {
                    if (n)
                        e[1].handleEvent = t;
                    else
                        e[1] = t
                }
            }
        }
        var Me = {
            init: function(i, r) {
                if (r === void 0)
                    r = window;
                if (!("addEventListener"in r))
                    return;
                var t = i.config.interactionBreadcrumbsEnabled === false;
                var e = i.config.autoBreadcrumbs === false && i.config.interactionBreadcrumbsEnabled !== true;
                if (t || e)
                    return;
                r.addEventListener("click", function(t) {
                    var e, n;
                    try {
                        e = Ie(t.target);
                        n = Le(t.target, r)
                    } catch (t) {
                        e = "[hidden]";
                        n = "[hidden]";
                        i._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z")
                    }
                    i.leaveBreadcrumb("UI click", {
                        targetText: e,
                        targetSelector: n
                    }, "user")
                }, true)
            },
            configSchema: {
                interactionBreadcrumbsEnabled: {
                    defaultValue: function() {
                        return undefined
                    },
                    validate: function(t) {
                        return t === true || t === false || t === undefined
                    },
                    message: "should be true|false"
                }
            }
        }
          , Ie = function(t) {
            var e = t.textContent || t.innerText || "";
            if (!e && (t.type === "submit" || t.type === "button"))
                e = t.value;
            e = e.replace(/^\s+|\s+$/g, "");
            return Re(e, 140)
        };
        function Le(t, e) {
            var n = [t.tagName];
            if (t.id)
                n.push("#" + t.id);
            if (t.className && t.className.length)
                n.push("." + t.className.split(" ").join("."));
            if (!e.document.querySelectorAll || !Array.prototype.indexOf)
                return n.join("");
            try {
                if (e.document.querySelectorAll(n.join("")).length === 1)
                    return n.join("")
            } catch (t) {
                return n.join("")
            }
            if (t.parentNode.childNodes.length > 1) {
                var i = Array.prototype.indexOf.call(t.parentNode.childNodes, t) + 1;
                n.push(":nth-child(" + i + ")")
            }
            if (e.document.querySelectorAll(n.join("")).length === 1)
                return n.join("");
            if (t.parentNode)
                return Le(t.parentNode, e) + " > " + n.join("");
            return n.join("")
        }
        function Re(t, e) {
            var n = "(...)";
            if (t && t.length <= e)
                return t;
            return t.slice(0, e - n.length) + n
        }
        var De = {
            init: function(n, i) {
                if (i === void 0)
                    i = window;
                if (!("addEventListener"in i))
                    return;
                var t = n.config.navigationBreadcrumbsEnabled === false;
                var e = n.config.autoBreadcrumbs === false && n.config.navigationBreadcrumbsEnabled !== true;
                if (t || e)
                    return;
                var r = function(t) {
                    return function() {
                        return n.leaveBreadcrumb(t, {}, "navigation")
                    }
                };
                i.addEventListener("pagehide", r("Page hidden"), true);
                i.addEventListener("pageshow", r("Page shown"), true);
                i.addEventListener("load", r("Page loaded"), true);
                i.document.addEventListener("DOMContentLoaded", r("DOMContentLoaded"), true);
                i.addEventListener("load", function() {
                    return i.addEventListener("popstate", r("Navigated back"), true)
                });
                i.addEventListener("hashchange", function(t) {
                    var e = t.oldURL ? {
                        from: A(t.oldURL, i),
                        to: A(t.newURL, i),
                        state: Be(i)
                    } : {
                        to: A(i.location.href, i)
                    };
                    n.leaveBreadcrumb("Hash changed", e, "navigation")
                }, true);
                if (i.history.replaceState)
                    Ne(n, i.history, "replaceState", i);
                if (i.history.pushState)
                    Ne(n, i.history, "pushState", i);
                n.leaveBreadcrumb("Bugsnag loaded", {}, "navigation")
            },
            configSchema: {
                navigationBreadcrumbsEnabled: {
                    defaultValue: function() {
                        return undefined
                    },
                    validate: function(t) {
                        return t === true || t === false || t === undefined
                    },
                    message: "should be true|false"
                }
            }
        };
        if (false)
            ;var A = function(t, e) {
            var n = e.document.createElement("A");
            n.href = t;
            return "" + n.pathname + n.search + n.hash
        }, je = function(t, e, n, i) {
            var r = A(t.location.href, t);
            return {
                title: n,
                state: e,
                prevState: Be(t),
                to: i || r,
                from: r
            }
        }, Ne = function(i, r, o, s) {
            var a = r[o];
            r[o] = function(t, e, n) {
                i.leaveBreadcrumb("History " + o, je(s, t, e, n), "navigation");
                if (typeof i.refresh === "function")
                    i.refresh();
                if (i.config.autoCaptureSessions)
                    i.startSession();
                a.apply(r, [t, e].concat(n !== undefined ? n : []))
            }
            ;
            if (false)
                ;
        }, Be = function(t) {
            try {
                return t.history.state
            } catch (t) {}
        }, M = {}, I = "request", Fe = "BS~~S", L = "BS~~U", ze = "BS~~M", He = t.includes, Xe = [], R, D, Ve, qe = function() {
            return [R.config.endpoints.notify, R.config.endpoints.sessions]
        };
        if (M.name = "networkBreadcrumbs",
        M.init = function(t, e, n) {
            if (e === void 0)
                e = qe;
            if (n === void 0)
                n = window;
            var i = t.config.networkBreadcrumbsEnabled === false;
            var r = t.config.autoBreadcrumbs === false && t.config.networkBreadcrumbsEnabled !== true;
            if (i || r)
                return;
            R = t;
            D = n;
            Ve = e;
            Ue();
            Ge()
        }
        ,
        M.configSchema = {
            networkBreadcrumbsEnabled: {
                defaultValue: function() {
                    return undefined
                },
                validate: function(t) {
                    return t === true || t === false || t === undefined
                },
                message: "should be true|false"
            }
        },
        false)
            ;var Ue = function() {
            if (!("addEventListener"in D.XMLHttpRequest.prototype))
                return;
            var i = D.XMLHttpRequest.prototype.open;
            D.XMLHttpRequest.prototype.open = function t(e, n) {
                this[L] = n;
                this[ze] = e;
                if (this[Fe]) {
                    this.removeEventListener("load", We);
                    this.removeEventListener("error", Ye)
                }
                this.addEventListener("load", We);
                this.addEventListener("error", Ye);
                this[Fe] = true;
                i.apply(this, arguments)
            }
            ;
            if (false)
                ;
        };
        function We() {
            if (He(Ve(), this[L]))
                return;
            var t = {
                status: this.status,
                request: this[ze] + " " + this[L]
            };
            if (this.status >= 400)
                R.leaveBreadcrumb("XMLHttpRequest failed", t, I);
            else
                R.leaveBreadcrumb("XMLHttpRequest succeeded", t, I)
        }
        function Ye() {
            if (He(Ve, this[L]))
                return;
            R.leaveBreadcrumb("XMLHttpRequest error", {
                request: this[ze] + " " + this[L]
            }, I)
        }
        var Ge = function() {
            if (!("fetch"in D) || D.fetch.polyfill)
                return;
            var s = D.fetch;
            D.fetch = function t() {
                var i = arguments;
                var e = arguments[0];
                var n = arguments[1];
                var r;
                var o = null;
                if (e && typeof e === "object") {
                    o = e.url;
                    if (n && "method"in n)
                        r = n.method;
                    else if (e && "method"in e)
                        r = e.method
                } else {
                    o = e;
                    if (n && "method"in n)
                        r = n.method
                }
                if (r === undefined)
                    r = "GET";
                return new Promise(function(e, n) {
                    s.apply(void 0, i).then(function(t) {
                        Ze(t, r, o);
                        e(t)
                    })["catch"](function(t) {
                        Ke(r, o);
                        n(t)
                    })
                }
                )
            }
            ;
            if (false)
                ;
        }
          , Ze = function(t, e, n) {
            var i = {
                status: t.status,
                request: e + " " + n
            };
            if (t.status >= 400)
                R.leaveBreadcrumb("fetch() failed", i, I);
            else
                R.leaveBreadcrumb("fetch() succeeded", i, I)
        }
          , Ke = function(t, e) {
            R.leaveBreadcrumb("fetch() error", {
                request: t + " " + e
            }, I)
        }
          , $e = r.intRange
          , Je = {
            init: function(e) {
                var n = 0;
                e.config.beforeSend.push(function(t) {
                    if (n >= e.config.maxEvents)
                        return t.ignore();
                    n++
                });
                e.refresh = function() {
                    n = 0
                }
            },
            configSchema: {
                maxEvents: {
                    defaultValue: function() {
                        return 10
                    },
                    message: "should be a positive integer ≤100",
                    validate: function(t) {
                        return $e(1, 100)(t)
                    }
                }
            }
        }
          , Qe = {};
        function tn() {
            tn = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i))
                            t[i] = n[i]
                }
                return t
            }
            ;
            return tn.apply(this, arguments)
        }
        var en = t.map, Qe, nn = (Qe = {
            init: function(t) {
                t.config.beforeSend.push(function(t) {
                    t.stacktrace = en(t.stacktrace, function(t) {
                        return tn({}, t, {
                            file: nn(t.file)
                        })
                    })
                })
            }
        })._strip = function(t) {
            return typeof t === "string" ? t.replace(/\?.*$/, "").replace(/#.*$/, "") : t
        }
        , rn = {
            init: function(u, t) {
                if (t === void 0)
                    t = window;
                function e(t, e, n, i, r) {
                    if (n === 0 && /Script error\.?/.test(t))
                        u._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z");
                    else {
                        var o = {
                            severity: "error",
                            unhandled: true,
                            severityReason: {
                                type: "unhandledException"
                            }
                        };
                        var s;
                        if (r)
                            if (r.name && r.message)
                                s = new u.BugsnagReport(r.name,r.message,on(u.BugsnagReport.getStacktrace(r), e, n, i),o,r);
                            else {
                                s = new u.BugsnagReport("window.onerror",String(r),on(u.BugsnagReport.getStacktrace(r, 1), e, n, i),o,r);
                                s.updateMetaData("window onerror", {
                                    error: r
                                })
                            }
                        else if (typeof t === "object" && t !== null && (!e || typeof e !== "string") && !n && !i && !r) {
                            var a = t.type ? "Event: " + t.type : "window.onerror";
                            var l = t.message || t.detail || "";
                            s = new u.BugsnagReport(a,l,u.BugsnagReport.getStacktrace(new Error, 1).slice(1),o,t);
                            s.updateMetaData("window onerror", {
                                event: t,
                                extraParameters: e
                            })
                        } else {
                            s = new u.BugsnagReport("window.onerror",String(t),on(u.BugsnagReport.getStacktrace(r, 1), e, n, i),o,t);
                            s.updateMetaData("window onerror", {
                                event: t
                            })
                        }
                        u.notify(s)
                    }
                    if (typeof c === "function")
                        c.apply(this, arguments)
                }
                var c = t.onerror;
                t.onerror = e
            }
        }, on = function(t, e, n, i) {
            var r = t[0];
            if (!r)
                return t;
            if (!r.fileName && typeof e === "string")
                r.setFileName(e);
            if (!r.lineNumber && sn(n))
                r.setLineNumber(n);
            if (!r.columnNumber)
                if (sn(i))
                    r.setColumnNumber(i);
                else if (window.event && sn(window.event.errorCharacter))
                    r.setColumnNumber(window.event.errorCharacter);
            return t
        }, sn = function(t) {
            return typeof t === "number" && String.call(t) !== "NaN"
        }, an = {}, ln = t.reduce, un;
        if (an.init = function(s, t) {
            if (t === void 0)
                t = window;
            var n = function(t) {
                var e = t.reason;
                var n = false;
                try {
                    if (t.detail && t.detail.reason) {
                        e = t.detail.reason;
                        n = true
                    }
                } catch (t) {}
                var i = {
                    severity: "error",
                    unhandled: true,
                    severityReason: {
                        type: "unhandledPromiseRejection"
                    }
                };
                var r;
                if (e && y(e)) {
                    r = new s.BugsnagReport(e.name,e.message,g.parse(e),i,e);
                    if (n)
                        r.stacktrace = ln(r.stacktrace, fn(e), [])
                } else {
                    var o = 'Rejection reason was not an Error. See "Promise" tab for more detail.';
                    r = new s.BugsnagReport(e && e.name ? e.name : "UnhandledRejection",e && e.message ? e.message : o,[],i,e);
                    r.updateMetaData("promise", "rejection reason", cn(e))
                }
                s.notify(r)
            };
            if ("addEventListener"in t)
                t.addEventListener("unhandledrejection", n);
            else
                t.onunhandledrejection = function(t, e) {
                    n({
                        detail: {
                            reason: t,
                            promise: e
                        }
                    })
                }
                ;
            un = n
        }
        ,
        false)
            ;var cn = function(t) {
            if (t === null || t === undefined)
                return "undefined (or null)";
            else if (rt(t)) {
                var e;
                return e = {},
                e[Object.prototype.toString.call(t)] = {
                    name: t.name,
                    message: t.message,
                    code: t.code,
                    stack: t.stack
                },
                e
            } else
                return t
        }
          , fn = function(n) {
            return function(t, e) {
                if (e.file === n.toString())
                    return t;
                if (e.method)
                    e.method = e.method.replace(/^\s+/, "");
                return t.concat(e)
            }
        }
          , pn = {};
        function hn() {
            hn = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i))
                            t[i] = n[i]
                }
                return t
            }
            ;
            return hn.apply(this, arguments)
        }
        var dn = "Bugsnag JavaScript", _n = "6.5.2", mn = "https://github.com/bugsnag/bugsnag-js", gn = hn({}, s.schema, K), pn;
        return (pn = function(t) {
            if (typeof t === "string")
                t = {
                    apiKey: t
                };
            var e = "";
            if (t.endpoints && t.endpoints.notify && !t.endpoints.sessions)
                e += "notify endpoint is set but sessions endpoint is not. No sessions will be sent.";
            var n = new zt({
                name: dn,
                version: _n,
                url: mn
            });
            n.setOptions(t);
            n.delivery(window.XDomainRequest ? ee : se);
            n.configure(gn);
            if (e)
                n._logger.warn(e);
            n.use(ue);
            n.use(ae);
            n.use(fe);
            n.use(Je);
            n.use(_e);
            n.use(ge);
            n.use(Qe);
            if (n.config.autoNotify !== false) {
                n.use(rn);
                n.use(an)
            }
            n.use(De);
            n.use(Me);
            n.use(M);
            n.use(ye);
            n.use(Ee);
            n._logger.debug("Loaded!");
            return n.config.autoCaptureSessions ? n.startSession() : n
        }
        ).Bugsnag = {
            Client: zt,
            Report: x,
            Session: Et,
            Breadcrumb: h
        },
        pn["default"] = pn
    }()
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a.prototype.build = function() {
        r.prototype.build.call(this),
        "" === this.getElement().innerHTML && (this.getElement().style.display = "none")
    }
    ,
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {
    "use strict";
    var l = this && this.__spreadArrays || function() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
            t += arguments[e].length;
        for (var i = Array(t), r = 0, e = 0; e < n; e++)
            for (var o = arguments[e], s = 0, a = o.length; s < a; s++,
            r++)
                i[r] = o[s];
        return i
    }
      , u = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.DispatcherWrapper = e.EventListBase = e.DispatcherBase = void 0,
    n(53))
      , i = n(29);
    function r() {
        this._wrap = new s(this),
        this._subscriptions = new Array
    }
    function o() {
        this._events = {}
    }
    Object.defineProperty(r.prototype, "count", {
        get: function() {
            return this._subscriptions.length
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.subscribe = function(t) {
        var e = this;
        return t && this._subscriptions.push(new i.Subscription(t,!1)),
        function() {
            e.unsubscribe(t)
        }
    }
    ,
    r.prototype.sub = function(t) {
        return this.subscribe(t)
    }
    ,
    r.prototype.one = function(t) {
        var e = this;
        return t && this._subscriptions.push(new i.Subscription(t,!0)),
        function() {
            e.unsubscribe(t)
        }
    }
    ,
    r.prototype.has = function(e) {
        return !!e && this._subscriptions.some(function(t) {
            return t.handler == e
        })
    }
    ,
    r.prototype.unsubscribe = function(t) {
        if (t)
            for (var e = 0; e < this._subscriptions.length; e++)
                if (this._subscriptions[e].handler == t) {
                    this._subscriptions.splice(e, 1);
                    break
                }
    }
    ,
    r.prototype.unsub = function(t) {
        this.unsubscribe(t)
    }
    ,
    r.prototype._dispatch = function(i, r, o) {
        for (var s = this, a = this, t = 0, e = l(this._subscriptions); t < e.length && "break" !== function(t) {
            var e = new u.EventManagement(function() {
                return s.unsub(t.handler)
            }
            )
              , n = Array.prototype.slice.call(o);
            if (n.push(e),
            t.execute(i, r, n),
            a.cleanup(t),
            !i && e.propagationStopped)
                return "break"
        }(e[t]); t++)
            ;
    }
    ,
    r.prototype.cleanup = function(t) {
        t.isOnce && t.isExecuted && (-1 < (t = this._subscriptions.indexOf(t)) && this._subscriptions.splice(t, 1))
    }
    ,
    r.prototype.asEvent = function() {
        return this._wrap
    }
    ,
    r.prototype.clear = function() {
        this._subscriptions.splice(0, this._subscriptions.length)
    }
    ,
    e.DispatcherBase = r,
    o.prototype.get = function(t) {
        var e = this._events[t];
        return e || (e = this.createDispatcher(),
        this._events[t] = e),
        e
    }
    ,
    o.prototype.remove = function(t) {
        delete this._events[t]
    }
    ,
    e.EventListBase = o;
    Object.defineProperty(a.prototype, "count", {
        get: function() {
            return this._count()
        },
        enumerable: !1,
        configurable: !0
    }),
    a.prototype.subscribe = function(t) {
        return this._subscribe(t)
    }
    ,
    a.prototype.sub = function(t) {
        return this.subscribe(t)
    }
    ,
    a.prototype.unsubscribe = function(t) {
        this._unsubscribe(t)
    }
    ,
    a.prototype.unsub = function(t) {
        this.unsubscribe(t)
    }
    ,
    a.prototype.one = function(t) {
        return this._one(t)
    }
    ,
    a.prototype.has = function(t) {
        return this._has(t)
    }
    ,
    a.prototype.clear = function() {
        this._clear()
    }
    ;
    var s = a;
    function a(e) {
        this._subscribe = function(t) {
            return e.subscribe(t)
        }
        ,
        this._unsubscribe = function(t) {
            return e.unsubscribe(t)
        }
        ,
        this._one = function(t) {
            return e.one(t)
        }
        ,
        this._has = function(t) {
            return e.has(t)
        }
        ,
        this._clear = function() {
            return e.clear()
        }
        ,
        this._count = function() {
            return e.count
        }
    }
    e.DispatcherWrapper = s
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        this.unsub = t,
        this.propagationStopped = !1
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.EventManagement = void 0,
    i.prototype.stopPropagation = function() {
        this.propagationStopped = !0
    }
    ,
    e.EventManagement = i
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.NonUniformEventList = e.EventList = e.EventHandlingBase = e.EventDispatcher = void 0;
    var i = n(55);
    Object.defineProperty(e, "EventDispatcher", {
        enumerable: !0,
        get: function() {
            return i.EventDispatcher
        }
    }),
    Object.defineProperty(e, "EventHandlingBase", {
        enumerable: !0,
        get: function() {
            return i.EventHandlingBase
        }
    }),
    Object.defineProperty(e, "EventList", {
        enumerable: !0,
        get: function() {
            return i.EventList
        }
    }),
    Object.defineProperty(e, "NonUniformEventList", {
        enumerable: !0,
        get: function() {
            return i.NonUniformEventList
        }
    })
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), n = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.EventHandlingBase = e.EventList = e.NonUniformEventList = e.EventDispatcher = void 0,
    n(15)), s = (r = n.DispatcherBase,
    o(a, r),
    a.prototype.dispatch = function(t, e) {
        this._dispatch(!1, this, arguments)
    }
    ,
    a.prototype.dispatchAsync = function(t, e) {
        this._dispatch(!0, this, arguments)
    }
    ,
    a.prototype.asEvent = function() {
        return r.prototype.asEvent.call(this)
    }
    ,
    a);
    function a() {
        return r.call(this) || this
    }
    function l() {
        this._events = {}
    }
    e.EventDispatcher = s,
    l.prototype.get = function(t) {
        var e;
        return this._events[t] || (e = this.createDispatcher(),
        this._events[t] = e)
    }
    ,
    l.prototype.remove = function(t) {
        delete this._events[t]
    }
    ,
    l.prototype.createDispatcher = function() {
        return new s
    }
    ,
    e.NonUniformEventList = l;
    u = n.EventListBase,
    o(f, u),
    f.prototype.createDispatcher = function() {
        return new s
    }
    ;
    var u, c = f;
    function f() {
        return u.call(this) || this
    }
    function p() {
        this._events = new c
    }
    e.EventList = c,
    Object.defineProperty(p.prototype, "events", {
        get: function() {
            return this._events
        },
        enumerable: !1,
        configurable: !0
    }),
    p.prototype.subscribe = function(t, e) {
        this._events.get(t).subscribe(e)
    }
    ,
    p.prototype.sub = function(t, e) {
        this.subscribe(t, e)
    }
    ,
    p.prototype.unsubscribe = function(t, e) {
        this._events.get(t).unsubscribe(e)
    }
    ,
    p.prototype.unsub = function(t, e) {
        this.unsubscribe(t, e)
    }
    ,
    p.prototype.one = function(t, e) {
        this._events.get(t).one(e)
    }
    ,
    p.prototype.has = function(t, e) {
        return this._events.get(t).has(e)
    }
    ,
    e.EventHandlingBase = p
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.NonUniformSimpleEventList = e.SimpleEventList = e.SimpleEventHandlingBase = e.SimpleEventDispatcher = void 0;
    var i = n(57);
    Object.defineProperty(e, "SimpleEventDispatcher", {
        enumerable: !0,
        get: function() {
            return i.SimpleEventDispatcher
        }
    }),
    Object.defineProperty(e, "SimpleEventHandlingBase", {
        enumerable: !0,
        get: function() {
            return i.SimpleEventHandlingBase
        }
    }),
    Object.defineProperty(e, "SimpleEventList", {
        enumerable: !0,
        get: function() {
            return i.SimpleEventList
        }
    }),
    Object.defineProperty(e, "NonUniformSimpleEventList", {
        enumerable: !0,
        get: function() {
            return i.NonUniformSimpleEventList
        }
    })
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), n = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.SimpleEventHandlingBase = e.SimpleEventList = e.NonUniformSimpleEventList = e.SimpleEventDispatcher = void 0,
    n(15)), s = (r = n.DispatcherBase,
    o(a, r),
    a.prototype.dispatch = function(t) {
        this._dispatch(!1, this, arguments)
    }
    ,
    a.prototype.dispatchAsync = function(t) {
        this._dispatch(!0, this, arguments)
    }
    ,
    a.prototype.asEvent = function() {
        return r.prototype.asEvent.call(this)
    }
    ,
    a);
    function a() {
        return r.call(this) || this
    }
    function l() {
        this._events = {}
    }
    e.SimpleEventDispatcher = s,
    l.prototype.get = function(t) {
        var e;
        return this._events[t] || (e = this.createDispatcher(),
        this._events[t] = e)
    }
    ,
    l.prototype.remove = function(t) {
        delete this._events[t]
    }
    ,
    l.prototype.createDispatcher = function() {
        return new s
    }
    ,
    e.NonUniformSimpleEventList = l;
    u = n.EventListBase,
    o(f, u),
    f.prototype.createDispatcher = function() {
        return new s
    }
    ;
    var u, c = f;
    function f() {
        return u.call(this) || this
    }
    function p() {
        this._events = new c
    }
    e.SimpleEventList = c,
    Object.defineProperty(p.prototype, "events", {
        get: function() {
            return this._events
        },
        enumerable: !1,
        configurable: !0
    }),
    p.prototype.subscribe = function(t, e) {
        this._events.get(t).subscribe(e)
    }
    ,
    p.prototype.sub = function(t, e) {
        this.subscribe(t, e)
    }
    ,
    p.prototype.one = function(t, e) {
        this._events.get(t).one(e)
    }
    ,
    p.prototype.has = function(t, e) {
        return this._events.get(t).has(e)
    }
    ,
    p.prototype.unsubscribe = function(t, e) {
        this._events.get(t).unsubscribe(e)
    }
    ,
    p.prototype.unsub = function(t, e) {
        this.unsubscribe(t, e)
    }
    ,
    e.SimpleEventHandlingBase = p
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.SignalList = e.SignalHandlingBase = e.SignalDispatcher = void 0;
    var i = n(59);
    Object.defineProperty(e, "SignalDispatcher", {
        enumerable: !0,
        get: function() {
            return i.SignalDispatcher
        }
    }),
    Object.defineProperty(e, "SignalHandlingBase", {
        enumerable: !0,
        get: function() {
            return i.SignalHandlingBase
        }
    }),
    Object.defineProperty(e, "SignalList", {
        enumerable: !0,
        get: function() {
            return i.SignalList
        }
    })
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), n = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.SignalHandlingBase = e.SignalList = e.SignalDispatcher = void 0,
    n(15)), s = (r = n.DispatcherBase,
    o(a, r),
    a.prototype.dispatch = function() {
        this._dispatch(!1, this, arguments)
    }
    ,
    a.prototype.dispatchAsync = function() {
        this._dispatch(!0, this, arguments)
    }
    ,
    a.prototype.asEvent = function() {
        return r.prototype.asEvent.call(this)
    }
    ,
    a);
    function a() {
        return r.call(this) || this
    }
    e.SignalDispatcher = s;
    l = n.EventListBase,
    o(c, l),
    c.prototype.createDispatcher = function() {
        return new s
    }
    ;
    var l, u = c;
    function c() {
        return l.call(this) || this
    }
    function f() {
        this._events = new u
    }
    e.SignalList = u,
    Object.defineProperty(f.prototype, "events", {
        get: function() {
            return this._events
        },
        enumerable: !1,
        configurable: !0
    }),
    f.prototype.one = function(t, e) {
        this._events.get(t).one(e)
    }
    ,
    f.prototype.has = function(t, e) {
        return this._events.get(t).has(e)
    }
    ,
    f.prototype.subscribe = function(t, e) {
        this._events.get(t).subscribe(e)
    }
    ,
    f.prototype.sub = function(t, e) {
        this.subscribe(t, e)
    }
    ,
    f.prototype.unsubscribe = function(t, e) {
        this._events.get(t).unsubscribe(e)
    }
    ,
    f.prototype.unsub = function(t, e) {
        this.unsubscribe(t, e)
    }
    ,
    e.SignalHandlingBase = f
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        this.plain = i.getParsedPlain(t),
        this.arr = i.getParsedArr(t),
        this.refs = i.getParsedRefs(t),
        this.ref = i.getParsedRef(t)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.DOMParameters = void 0,
    i.getParsedPlain = function(t) {
        var n = {};
        return this.loopParams(t, function(t, e) {
            "@" === t[0] || "[" === t[0] && "]" === t[1] || (n[t] = "" === e ? "true" : e)
        }),
        n
    }
    ,
    i.getParsedArr = function(t) {
        var n = {};
        return this.loopParams(t, function(t, e) {
            "[" !== t[0] && "]" !== t[1] || (t = t.substring(2, t.length),
            n[t] = e.replace(" ", "").split(","))
        }),
        n
    }
    ,
    i.getParsedRefs = function(r) {
        var o = {};
        return this.loopParams(r, function(t, e) {
            if ("@" === t[0] && ("[" === t[1] || "]" === t[2])) {
                t = t.substring(3, t.length);
                for (var n = e, i = r; 0 < n.length && "<" === n.substring(0, 1); )
                    r.parentElement && (i = r.parentElement),
                    n = n.substring(1, e.length);
                o[t] = i.querySelectorAll(n)
            }
        }),
        o
    }
    ,
    i.getParsedRef = function(r) {
        var o = {};
        return this.loopParams(r, function(t, e) {
            if ("@" === t[0] && ("[" !== t[1] || "]" !== t[2])) {
                t = t.substring(1, t.length);
                for (var n = e, i = r; 0 < n.length && "<" === n.substring(0, 1); )
                    r.parentElement && (i = r.parentElement),
                    n = n.substring(1, e.length);
                o[t] = i.querySelector(n)
            }
        }),
        o
    }
    ,
    i.loopParams = function(t, e) {
        for (var n, i, r = [], o = t.attributes, s = o.length, a = 0; a < s; a++)
            -1 !== o.item(a).name.indexOf("data-") && (n = o.item(a).name.replace("data-", "").toLowerCase(),
            i = t.getAttribute(o.item(a).name),
            -1 === r.indexOf(n) && (e(n, i),
            r.push(n)))
    }
    ,
    e.DOMParameters = i
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
      , r = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    i(n(4)))
      , o = i(n(16));
    function s(t) {
        void 0 === t && (t = null),
        this.offsetRect = new o.default,
        this._element = t,
        this.updateRect()
    }
    Object.defineProperty(s.prototype, "rect", {
        get: function() {
            return this._rect
        },
        enumerable: !1,
        configurable: !0
    }),
    s.prototype.updateRect = function(t) {
        this._rect = (t = void 0 === t ? null : t) || this._element.getBoundingClientRect(),
        this._rect.apply(this.offsetRect)
    }
    ,
    Object.defineProperty(s.prototype, "screenX", {
        get: function() {
            return 1 / this._rect.width * (-1 * this._rect.x + .5 * r.default.RESIZE.windowWidth + .5 * this._rect.width) - 1
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "screenY", {
        get: function() {
            return 1 / this._rect.height * (-1 * this._rect.y + .5 * r.default.RESIZE.windowHeight + .5 * this._rect.height) - 1
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "contentX", {
        get: function() {
            var t = 1 / this._rect.width * this._rect.x * -1
              , e = 1 / this._rect.width * (-1 * this._rect.x + r.default.RESIZE.windowWidth) - 1;
            return e < 0 ? e < -1 ? -1 : e : 0 < t ? 1 < t ? 1 : t : 0
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "contentY", {
        get: function() {
            var t = 1 / this._rect.height * this._rect.y * -1
              , e = 1 / this._rect.height * (-1 * this._rect.y + r.default.RESIZE.windowHeight) - 1;
            return e < 0 ? e < -1 ? -1 : e : 0 < t ? 1 < t ? 1 : t : 0
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "visualX", {
        get: function() {
            var t = 1 - 1 / this._rect.width * this._rect.x * -1
              , e = 1 / this._rect.width * (-1 * this._rect.x + r.default.RESIZE.windowWidth);
            return e < 1 ? e < 0 ? 0 : e : t < 1 ? t < 0 ? 0 : t : 1
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "visualY", {
        get: function() {
            var t = 1 - 1 / this._rect.height * this._rect.y * -1
              , e = 1 / this._rect.height * (-1 * this._rect.y + r.default.RESIZE.windowHeight);
            return e < 1 ? e < 0 ? 0 : e : t < 1 ? t < 0 ? 0 : t : 1
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "scrollInsideY", {
        get: function() {
            var t = r.default.RESIZE.windowHeight - this._rect.height
              , t = this._rect.y / t;
            return 1 < t ? 1 : t < 0 ? 0 : t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "scrollOutsideY", {
        get: function() {
            var t = r.default.RESIZE.windowHeight + this._rect.height
              , t = (this._rect.y + this._rect.height) / t;
            return 1 < t ? 1 : t < 0 ? 0 : t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "amountInside", {
        get: function() {
            return r.default.RESIZE.windowHeight - this._rect.height
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "scrollOffset", {
        get: function() {
            var t = (r.default.RESIZE.windowHeight - this._rect.height) * this.scrollInsideY;
            return t < 0 ? t : 0
        },
        enumerable: !1,
        configurable: !0
    }),
    s.prototype.isAllInView = function() {
        return 1 <= this.visual
    }
    ,
    s.prototype.isAllInViewY = function() {
        return 1 <= this.visualY
    }
    ,
    s.prototype.isAllInViewX = function() {
        return 1 <= this.visualX
    }
    ,
    s.prototype.isInView = function() {
        return 0 < this.visual
    }
    ,
    Object.defineProperty(s.prototype, "visual", {
        get: function() {
            return this.visualY * this.visualX
        },
        enumerable: !1,
        configurable: !0
    }),
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(63),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(65),
    s(n(1))), l = s(n(7)), s = (r = a.default,
    o(u, r),
    u.prototype.awake = function() {
        this._renderItem = l.default.Instance.add(this.checkinView, 5)
    }
    ,
    u.prototype.sleep = function() {
        null !== this._renderItem && (l.default.Instance.remove(this._renderItem),
        this._renderItem = null)
    }
    ,
    u);
    function u() {
        var n = null !== r && r.apply(this, arguments) || this;
        return n._renderItem = null,
        n.checkinView = function(t, e) {
            n.viewInfo.updateRect(),
            n.viewInfo.isInView() ? n.getElement().style.display = "block" : n.getElement().style.display = "none"
        }
        ,
        n
    }
    e.default = s
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(67),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(30),
    s(n(4))), l = s(n(2)), u = s(n(31)), s = (r = l.default,
    o(c, r),
    c.prototype.build = function() {
        this._preloaderMobileGfx = this.qs(".preloader-mobile"),
        this._preloaderMobileGfx.style.display = "none",
        a.default.CONTENT.onLoadingStart.sub(this.onLoadStart),
        a.default.CONTENT.onLoadingDone.sub(this.onLoadDone)
    }
    ,
    c.prototype.awake = function() {
        r.prototype.awake.call(this)
    }
    ,
    c.prototype.show = function() {
        null !== this._showTimeout && (clearTimeout(this._showTimeout),
        this._showTimeout = null),
        this._showTimeout = setTimeout(this.showDelayed, 200)
    }
    ,
    c.prototype.hide = function() {
        null !== this._showTimeout && (clearTimeout(this._showTimeout),
        this._showTimeout = null),
        this.hideDelayed()
    }
    ,
    c);
    function c() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t._isLoading = !1,
        t._showTimeout = null,
        t.onLoadStart = function() {
            t._isLoading = !0,
            t.show()
        }
        ,
        t.onLoadDone = function() {
            t._isLoading = !1,
            t.hide()
        }
        ,
        t.showDelayed = function() {
            u.default.Instance.setForcedCursor("preloader"),
            t._preloaderMobileGfx.style.display = "block"
        }
        ,
        t.hideDelayed = function() {
            u.default.Instance.setForcedCursor(null),
            t._preloaderMobileGfx.style.display = "none"
        }
        ,
        t
    }
    e.default = s
}
, function(t, e) {
    t.exports = function(t) {
        var e;
        return t.webpackPolyfill || ((e = Object.create(t)).children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        Object.defineProperty(e, "exports", {
            enumerable: !0
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(10))), l = n(5), u = s(n(6)), s = (r = a.default,
    o(c, r),
    c.prototype.getElement = function() {
        return this._element.style.position = "absolute",
        this._element.style.left = "-50px",
        this._element.style.top = "-50px",
        this._element
    }
    ,
    c.prototype.activate = function(t) {
        void 0 === t && (t = null),
        l.TweenLite.killTweensOf([this.pt1, this.pt2]),
        this.pt1.x = 50,
        this.pt1.y = 50,
        this.pt2.x = 50,
        this.pt2.y = 50;
        l.TweenLite.to(this.pt1, .4, {
            x: 34,
            ease: l.Expo.easeOut
        }),
        l.TweenLite.to(this.pt2, .4, {
            x: 66,
            ease: l.Expo.easeOut,
            onComplete: this.animationDone
        }),
        this.startRender()
    }
    ,
    c.prototype.render = function(t, e) {
        r.prototype.render.call(this, t, e);
        t = '<svg height="100" width="100">\' +\n\t\t\t\'<line x1="' + this.pt1.x + '" y1="' + this.pt1.y + '" x2="' + this.pt2.x + '" y2="' + this.pt2.y + '" style="stroke:' + u.default.Instance.foregroundColor + ";stroke-width:2\" />' +\n\t\t'</svg>";
        this._element.innerHTML = t
    }
    ,
    c);
    function c() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t.pt1 = {
            x: 50,
            y: 50
        },
        t.pt2 = {
            x: 50,
            y: 50
        },
        t._element = document.createElement("div"),
        t.animationDone = function() {
            r.prototype.stopRender.call(t)
        }
        ,
        t
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(10))), l = n(5), u = s(n(6)), s = (r = a.default,
    o(c, r),
    c.prototype.getElement = function() {
        return this._element.style.position = "absolute",
        this._element.style.left = "-50px",
        this._element.style.top = "-50px",
        this._element.classList.add("cursor"),
        this._element
    }
    ,
    c.prototype.activate = function(t) {
        void 0 === t && (t = null),
        l.TweenLite.killTweensOf([this.pt1, this.pt2, this.pt3, this.pt4, this.pt5, this.pt6, this.pt7, this.pt8, this.pt9, this.pt10]),
        this.pt1.x = 50,
        this.pt1.y = 50,
        this.pt2.x = 50,
        this.pt2.y = 50;
        this.pt3.x = 24,
        this.pt3.y = 50.5,
        this.pt4.x = 50,
        this.pt4.y = 50.5,
        this.pt5.x = 24,
        this.pt5.y = 49.5,
        this.pt6.x = 50,
        this.pt6.y = 49.5,
        this.pt7.x = 76,
        this.pt7.y = 50.5,
        this.pt8.x = 50,
        this.pt8.y = 50.5,
        this.pt9.x = 76,
        this.pt9.y = 49.5,
        this.pt10.x = 50,
        this.pt10.y = 49.5,
        l.TweenLite.to(this.pt1, .4, {
            x: 24,
            ease: l.Expo.easeOut
        }),
        l.TweenLite.to(this.pt2, .4, {
            x: 76,
            ease: l.Expo.easeOut
        }),
        l.TweenLite.to(this.pt4, .4, {
            x: 36,
            y: 38.5,
            ease: l.Expo.easeOut,
            delay: .1
        }),
        l.TweenLite.to(this.pt6, .4, {
            x: 36,
            y: 61.5,
            ease: l.Expo.easeOut,
            delay: .1
        }),
        l.TweenLite.to(this.pt8, .4, {
            x: 64,
            y: 38.5,
            ease: l.Expo.easeOut,
            delay: .1
        }),
        l.TweenLite.to(this.pt10, .4, {
            x: 64,
            y: 61.5,
            ease: l.Expo.easeOut,
            delay: .1,
            onComplete: this.animationDone
        }),
        this.startRender()
    }
    ,
    c.prototype.render = function(t, e) {
        r.prototype.render.call(this, t, e);
        t = '<svg height="100" width="100">\' +\n\t\t\t\'<line x1="' + this.pt1.x + '" y1="' + this.pt1.y + '" x2="' + this.pt2.x + '" y2="' + this.pt2.y + '" style="stroke:' + u.default.Instance.foregroundColor + ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" + this.pt3.x + '" y1="' + this.pt3.y + '" x2="' + this.pt4.x + '" y2="' + this.pt4.y + '" style="stroke:' + u.default.Instance.foregroundColor + ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" + this.pt5.x + '" y1="' + this.pt5.y + '" x2="' + this.pt6.x + '" y2="' + this.pt6.y + '" style="stroke:' + u.default.Instance.foregroundColor + ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" + this.pt7.x + '" y1="' + this.pt7.y + '" x2="' + this.pt8.x + '" y2="' + this.pt8.y + '" style="stroke:' + u.default.Instance.foregroundColor + ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" + this.pt9.x + '" y1="' + this.pt9.y + '" x2="' + this.pt10.x + '" y2="' + this.pt10.y + '" style="stroke:' + u.default.Instance.foregroundColor + ";stroke-width:2\" />' +\n\t\t'</svg>";
        this._element.innerHTML = t
    }
    ,
    c);
    function c() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t.pt1 = {
            x: 50,
            y: 50
        },
        t.pt2 = {
            x: 50,
            y: 50
        },
        t.pt3 = {
            x: 50,
            y: 50
        },
        t.pt4 = {
            x: 50,
            y: 50
        },
        t.pt5 = {
            x: 50,
            y: 50
        },
        t.pt6 = {
            x: 50,
            y: 50
        },
        t.pt7 = {
            x: 50,
            y: 50
        },
        t.pt8 = {
            x: 50,
            y: 50
        },
        t.pt9 = {
            x: 50,
            y: 50
        },
        t.pt10 = {
            x: 50,
            y: 50
        },
        t._element = document.createElement("div"),
        t.animationDone = function() {
            r.prototype.stopRender.call(t)
        }
        ,
        t
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(73),
    s(n(1))), l = s(n(11)), u = s(n(2)), c = s(n(22)), s = (r = a.default,
    o(f, r),
    f.prototype.awake = function() {
        l.default.Instance.addAllAtags(this.getElement());
        var t = this.qs(".header-container").querySelector("svg");
        u.default.addComponent(t.querySelector("path"), "ColorItemFillToForeground"),
        this.getElement().addEventListener("click", this.onClick)
    }
    ,
    f.prototype.sleep = function() {
        l.default.Instance.removeAllAtags(this.getElement()),
        this.getElement().removeEventListener("click", this.onClick)
    }
    ,
    f.prototype.transitionIn = function(t) {
        this.timesSeen += 1,
        2 < this.timesSeen && window.scrollTo(0, window.innerHeight),
        t.done()
    }
    ,
    f.prototype.transitionOut = function(t) {
        t.done()
    }
    ,
    Object.defineProperty(f.prototype, "timesSeen", {
        get: function() {
            var t = window.localStorage.getItem("times_seen")
              , t = Number.parseInt(t);
            return t = isNaN(t) ? 0 : t
        },
        set: function(t) {
            window.localStorage.setItem("times_seen", t.toString())
        },
        enumerable: !1,
        configurable: !0
    }),
    f);
    function f() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t.onClick = function() {
            c.default.Instance.scrollTo(0, window.innerHeight, 1)
        }
        ,
        t
    }
    e.default = s
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(75),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(77),
    s(n(2))), l = s(n(4)), u = s(n(19)), s = (r = a.default,
    o(c, r),
    c.prototype.build = function() {
        this.getElement().style.textDecoration = "none",
        this._thisPath = u.default.getWellFormatedPath(this.getElement().getAttribute("href")),
        this.onNewTemplate()
    }
    ,
    c.prototype.awake = function() {
        l.default.CONTENT.onNewPath.sub(this.onNewTemplate)
    }
    ,
    c.prototype.sleep = function() {
        l.default.CONTENT.onNewPath.unsub(this.onNewTemplate)
    }
    ,
    c);
    function c() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t._isSelected = !1,
        t.onNewTemplate = function() {
            u.default.getCurrentInternalPathAtLevel(0) === t._thisPath ? (t._isSelected = !0,
            t.onMouseOver()) : (t._isSelected = !1,
            t.onMouseOut())
        }
        ,
        t.onMouseOver = function() {
            t.getElement().style.textDecoration = "underline"
        }
        ,
        t.onMouseOut = function() {
            t._isSelected || (t.getElement().style.textDecoration = "none")
        }
        ,
        t
    }
    e.default = s
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(79),
    s(n(23))), n = (r = s.default,
    o(a, r),
    a.prototype.awake = function() {
        r.prototype.awake.call(this)
    }
    ,
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "Draggable", function() {
        return i
    }),
    n.d(e, "default", function() {
        return i
    });
    var _e = n(0)
      , me = n(9)
      , i = (_e._gsScope._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function() {
        function a(t) {
            return xt.createElementNS ? xt.createElementNS("http://www.w3.org/1999/xhtml", t) : xt.createElement(t)
        }
        function Vt(t) {
            for (var e = Et.length; -1 < --e; )
                Et[e] === t && Et.splice(e, 1);
            _e.default.to(C, 0, {
                overwrite: "all",
                delay: 15,
                onComplete: C,
                data: "_draggable"
            })
        }
        function m() {
            return null != window.pageYOffset ? window.pageYOffset : null != xt.scrollTop ? xt.scrollTop : Tt.scrollTop || xt.body.scrollTop || 0
        }
        function g() {
            return null != window.pageXOffset ? window.pageXOffset : null != xt.scrollLeft ? xt.scrollLeft : Tt.scrollLeft || xt.body.scrollLeft || 0
        }
        function qt(t, e) {
            return t = t || window.event,
            l.pageX = t.clientX + xt.body.scrollLeft + Tt.scrollLeft,
            l.pageY = t.clientY + xt.body.scrollTop + Tt.scrollTop,
            e && (t.returnValue = !1),
            l
        }
        function f(t, e, n, i, r) {
            var o, s, a, l, u;
            return "px" !== i && i ? "auto" !== i && n ? (o = M.test(e),
            s = t,
            a = c.style,
            (l = n < 0) && (n = -n),
            "%" === i && -1 !== e.indexOf("border") ? u = n / 100 * (o ? t.clientWidth : t.clientHeight) : (a.cssText = "border:0 solid red;position:" + Nt(t, "position", !0) + ";line-height:0;",
            "%" !== i && s.appendChild ? a[o ? "borderLeftWidth" : "borderTopWidth"] = n + i : (s = t.parentNode || xt.body,
            a[o ? "width" : "height"] = n + i),
            s.appendChild(c),
            u = parseFloat(c[o ? "offsetWidth" : "offsetHeight"]),
            s.removeChild(c),
            0 !== u || r || (u = f(t, e, n, i, !0))),
            l ? -u : u) : 0 : n
        }
        function vt(t, e, n) {
            var i = t.vars
              , r = i[n]
              , o = t._listeners[e];
            "function" == typeof r && r.apply(i[n + "Scope"] || i.callbackScope || t, i[n + "Params"] || [t.pointerEvent]),
            o && t.dispatchEvent(e)
        }
        function Ut(t, e) {
            var n = Dt(t);
            return n ? q(n, e) : void 0 !== t.left ? (n = Bt(e),
            {
                left: t.left - n.x,
                top: t.top - n.y,
                width: t.width,
                height: t.height
            }) : {
                left: e = t.min || t.minX || t.minRotation || 0,
                top: n = t.min || t.minY || 0,
                width: (t.max || t.maxX || t.maxRotation || 0) - e,
                height: (t.max || t.maxY || 0) - n
            }
        }
        function T() {
            var t, e, n, i, r, o, s;
            xt.createElementNS ? (t = a("div"),
            e = xt.createElementNS("http://www.w3.org/2000/svg", "svg"),
            o = a("div"),
            n = t.style,
            i = xt.body || Tt,
            r = "flex" === Nt(i, "display", !0),
            xt.body && x && (n.position = "absolute",
            i.appendChild(o),
            o.appendChild(t),
            s = t.offsetParent,
            o.style[x] = "rotate(1deg)",
            S = t.offsetParent === s,
            o.style.position = "absolute",
            n.height = "10px",
            s = t.offsetTop,
            o.style.border = "5px solid red",
            P = s !== t.offsetTop,
            i.removeChild(o)),
            n = e.style,
            e.setAttributeNS(null, "width", "400px"),
            e.setAttributeNS(null, "height", "400px"),
            e.setAttributeNS(null, "viewBox", "0 0 400 400"),
            n.display = "block",
            n.boxSizing = "border-box",
            n.border = "0px solid red",
            n.transform = "none",
            t.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;",
            i.appendChild(t),
            t.appendChild(e),
            o = (s = e.createSVGPoint().matrixTransform(e.getScreenCTM())).y,
            t.scrollTop = 100,
            s.x = s.y = 0,
            s = s.matrixTransform(e.getScreenCTM()),
            d = o - s.y < 100.1 ? 0 : o - s.y - 150,
            t.removeChild(e),
            i.removeChild(t),
            i.appendChild(e),
            r && (i.style.display = "block"),
            o = e.getScreenCTM().e,
            n.border = "50px solid red",
            s = e.getScreenCTM(),
            h = 0 === o && 0 === s.e && 0 === s.f && 1 === s.a ? (b = 1,
            !0) : (b = o !== s.e ? 1 : 0,
            1 !== s.a),
            r && (i.style.display = "flex"),
            i.removeChild(e)) : (b = 0,
            h = !1)
        }
        function y(t) {
            if (!t.getBoundingClientRect || !t.parentNode || !x)
                return {
                    offsetTop: 0,
                    offsetLeft: 0,
                    scaleX: 1,
                    scaleY: 1,
                    offsetParent: Tt
                };
            if (!1 !== Ht.cacheSVGData && t._dCache && t._dCache.lastUpdate === _e.default.ticker.frame)
                return t._dCache;
            var e, n, i, r, o, s, a, l, u, c, f = t, p = O(t);
            if (p.lastUpdate = _e.default.ticker.frame,
            t.getBBox && !p.isSVGRoot) {
                for (f = t.parentNode,
                e = t.getBBox(); f && "svg" !== (f.nodeName + "").toLowerCase(); )
                    f = f.parentNode;
                c = y(f),
                p.offsetTop = e.y * c.scaleY,
                p.offsetLeft = e.x * c.scaleX,
                p.scaleX = c.scaleX,
                p.scaleY = c.scaleY,
                p.offsetParent = f || Tt
            } else {
                for ((i = p.offsetParent) === xt.body && (i = Tt),
                X.length = H.length = 0; f && f.parentNode; )
                    "matrix(1, 0, 0, 1, 0, 0)" !== (r = Nt(f, x, !0)) && "none" !== r && "translate3d(0px, 0px, 0px)" !== r && (X.push(f),
                    H.push(f.style[x]),
                    f.style[x] = "none"),
                    f = f.parentNode;
                for (n = i.getBoundingClientRect(),
                r = t.getScreenCTM(),
                s = t.createSVGPoint().matrixTransform(r),
                p.scaleX = Math.sqrt(r.a * r.a + r.b * r.b),
                p.scaleY = Math.sqrt(r.d * r.d + r.c * r.c),
                void 0 === b && T(),
                p.borderBox && !h && t.getAttribute("width") && (c = w(t) || {},
                a = parseFloat(c.borderLeftWidth) + parseFloat(c.borderRightWidth) || 0,
                l = parseFloat(c.borderTopWidth) + parseFloat(c.borderBottomWidth) || 0,
                u = parseFloat(c.width) || 0,
                c = parseFloat(c.height) || 0,
                p.scaleX *= (u - a) / u,
                p.scaleY *= (c - l) / c),
                d ? (e = t.getBoundingClientRect(),
                p.offsetLeft = e.left - n.left,
                p.offsetTop = e.top - n.top) : (p.offsetLeft = s.x - n.left,
                p.offsetTop = s.y - n.top),
                p.offsetParent = i,
                o = X.length; -1 < --o; )
                    X[o].style[x] = H[o]
            }
            return p
        }
        function O(t) {
            if (!1 !== Ht.cacheSVGData && t._dCache && t._dCache.lastUpdate === _e.default.ticker.frame)
                return t._dCache;
            var e, n = t._dCache = t._dCache || {}, i = w(t), r = t.getBBox && ce(t), o = "svg" === (t.nodeName + "").toLowerCase();
            if (n.isSVG = r,
            n.isSVGRoot = o,
            n.borderBox = "border-box" === i.boxSizing,
            n.computedStyle = i,
            o)
                (e = t.parentNode || Tt).insertBefore(c, t),
                n.offsetParent = c.offsetParent || Tt,
                e.removeChild(c);
            else if (r) {
                for (e = t.parentNode; e && "svg" !== (e.nodeName + "").toLowerCase(); )
                    e = e.parentNode;
                n.offsetParent = e
            } else
                n.offsetParent = t.offsetParent;
            return n
        }
        function v(t, e, n) {
            var i = t.x * e[0] + t.y * e[2] + e[4]
              , e = t.x * e[1] + t.y * e[3] + e[5];
            return t.x = i * n[0] + e * n[2] + n[4],
            t.y = i * n[1] + e * n[3] + n[5],
            t
        }
        function s(t) {
            return !!(t && t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
        }
        function Wt(t) {
            Zt = t.touches && At < t.touches.length,
            Ft(t.target, "touchend", U)
        }
        function Yt(r, o, t, e, s, n) {
            var i, a, l, u = {};
            if (o)
                if (1 !== s && o instanceof Array) {
                    if (u.end = i = [],
                    l = o.length,
                    "object" == typeof o[0])
                        for (a = 0; a < l; a++)
                            i[a] = oe(o[a], s);
                    else
                        for (a = 0; a < l; a++)
                            i[a] = o[a] * s;
                    t += 1.1,
                    e -= 1.1
                } else
                    u.end = "function" == typeof o ? function(t) {
                        var e, n, i = o.call(r, t);
                        if (1 !== s)
                            if ("object" == typeof i) {
                                for (n in e = {},
                                i)
                                    e[n] = i[n] * s;
                                i = e
                            } else
                                i *= s;
                        return i
                    }
                    : o;
            return !t && 0 !== t || (u.max = t),
            !e && 0 !== e || (u.min = e),
            n && (u.velocity = 0),
            u
        }
        function bt(t, e) {
            for (var n, i = t.length; -1 < --i; )
                (n = t[i]).ondragstart = n.onselectstart = e ? null : u,
                jt(n, "userSelect", e ? "text" : "none")
        }
        function Gt(r, o) {
            r = Dt(r),
            o = o || {};
            var s, a, l, t, u, c, f = xt.createElement("div"), p = f.style, e = r.firstChild, h = 0, d = 0, _ = r.scrollTop, m = r.scrollLeft, g = r.scrollWidth, y = r.scrollHeight, v = 0, b = 0, w = 0;
            R && !1 !== o.force3D ? (u = "translate3d(",
            c = "px,0px)") : x && (u = "translate(",
            c = "px)"),
            this.scrollTop = function(t, e) {
                if (!arguments.length)
                    return -this.top();
                this.top(-t, e)
            }
            ,
            this.scrollLeft = function(t, e) {
                if (!arguments.length)
                    return -this.left();
                this.left(-t, e)
            }
            ,
            this.left = function(t, e) {
                if (!arguments.length)
                    return -(r.scrollLeft + d);
                var n = r.scrollLeft - m
                  , i = d;
                (2 < n || n < -2) && !e ? (m = r.scrollLeft,
                _e.default.killTweensOf(this, !0, {
                    left: 1,
                    scrollLeft: 1
                }),
                this.left(-m),
                o.onKill && o.onKill()) : ((t = -t) < 0 ? (d = t - .5 | 0,
                t = 0) : b < t ? (d = t - b | 0,
                t = b) : d = 0,
                (d || i) && (u ? this._suspendTransforms || (p[x] = u + -d + "px," + -h + c) : p.left = -d + "px",
                0 <= d + v && (p.paddingRight = d + v + "px")),
                r.scrollLeft = 0 | t,
                m = r.scrollLeft)
            }
            ,
            this.top = function(t, e) {
                if (!arguments.length)
                    return -(r.scrollTop + h);
                var n = r.scrollTop - _
                  , i = h;
                (2 < n || n < -2) && !e ? (_ = r.scrollTop,
                _e.default.killTweensOf(this, !0, {
                    top: 1,
                    scrollTop: 1
                }),
                this.top(-_),
                o.onKill && o.onKill()) : ((t = -t) < 0 ? (h = t - .5 | 0,
                t = 0) : w < t ? (h = t - w | 0,
                t = w) : h = 0,
                (h || i) && (u ? this._suspendTransforms || (p[x] = u + -d + "px," + -h + c) : p.top = -h + "px"),
                r.scrollTop = 0 | t,
                _ = r.scrollTop)
            }
            ,
            this.maxScrollTop = function() {
                return w
            }
            ,
            this.maxScrollLeft = function() {
                return b
            }
            ,
            this.disable = function() {
                for (e = f.firstChild; e; )
                    t = e.nextSibling,
                    r.appendChild(e),
                    e = t;
                r === f.parentNode && r.removeChild(f)
            }
            ,
            this.enable = function() {
                if ((e = r.firstChild) !== f) {
                    for (; e; )
                        t = e.nextSibling,
                        f.appendChild(e),
                        e = t;
                    r.appendChild(f),
                    this.calibrate()
                }
            }
            ,
            this.calibrate = function(t) {
                var e, n, i = r.clientWidth === s;
                _ = r.scrollTop,
                m = r.scrollLeft,
                i && r.clientHeight === a && f.offsetHeight === l && g === r.scrollWidth && y === r.scrollHeight && !t || ((h || d) && (e = this.left(),
                n = this.top(),
                this.left(-r.scrollLeft),
                this.top(-r.scrollTop)),
                i && !t || (p.display = "block",
                p.width = "auto",
                p.paddingRight = "0px",
                (v = Math.max(0, r.scrollWidth - r.clientWidth)) && (v += Nt(r, "paddingLeft") + (W ? Nt(r, "paddingRight") : 0))),
                p.display = "inline-block",
                p.position = "relative",
                p.overflow = "visible",
                p.verticalAlign = "top",
                p.width = "100%",
                p.paddingRight = v + "px",
                W && (p.paddingBottom = Nt(r, "paddingBottom", !0)),
                St && (p.zoom = "1"),
                s = r.clientWidth,
                a = r.clientHeight,
                g = r.scrollWidth,
                y = r.scrollHeight,
                b = r.scrollWidth - s,
                w = r.scrollHeight - a,
                l = f.offsetHeight,
                p.display = "block",
                (e || n) && (this.left(e),
                this.top(n)))
            }
            ,
            this.content = f,
            this.element = r,
            this._suspendTransforms = !1,
            this.enable()
        }
        var Zt, o, wt, b, h, d, P, S, t, e, r, Kt = {
            css: {},
            data: "_draggable"
        }, $t = {
            css: {},
            data: "_draggable"
        }, Jt = {
            css: {},
            data: "_draggable"
        }, Qt = {
            css: {}
        }, te = _e._gsScope._gsDefine.globals, l = {}, u = function() {
            return !1
        }, p = {
            style: {},
            appendChild: u,
            removeChild: u
        }, xt = _e._gsScope.document || {
            createElement: function() {
                return p
            }
        }, Tt = xt.documentElement || {}, c = a("div"), ee = [], ne = 180 / Math.PI, Ot = 999999999999999, Pt = Date.now || function() {
            return (new Date).getTime()
        }
        , St = !(xt.addEventListener || !xt.all), Ct = xt.createElement("div"), Et = [], kt = {}, ie = 0, _ = /^(?:a|input|textarea|button|select)$/i, At = 0, Mt = _e._gsScope.navigator && -1 !== _e._gsScope.navigator.userAgent.toLowerCase().indexOf("android"), re = 0, It = {}, Lt = {}, oe = function(t, e) {
            var n, i = {};
            if (e)
                for (n in t)
                    i[n] = t[n] * e;
            else
                for (n in t)
                    i[n] = t[n];
            return i
        }, se = function() {
            for (var t = Et.length; -1 < --t; )
                Et[t]()
        }, C = function() {
            Et.length || _e.default.ticker.removeEventListener("tick", se)
        }, ae = function(t, e) {
            Ft(t, "scroll", e),
            Rt(t.parentNode) || ae(t.parentNode, e)
        }, le = function(t, e) {
            zt(t, "scroll", e),
            Rt(t.parentNode) || le(t.parentNode, e)
        }, Rt = function(t) {
            return !(t && t !== Tt && t !== xt && t !== xt.body && t !== window && t.nodeType && t.parentNode)
        }, E = function(t, e) {
            var e = "x" === e ? "Width" : "Height"
              , n = "scroll" + e
              , i = "client" + e
              , r = xt.body;
            return Math.max(0, Rt(t) ? Math.max(Tt[n], r[n]) - (window["inner" + e] || Tt[i] || r[i]) : t[n] - t[i])
        }, ue = function(t) {
            var e = Rt(t)
              , n = E(t, "x")
              , i = E(t, "y");
            e ? t = Lt : ue(t.parentNode),
            t._gsMaxScrollX = n,
            t._gsMaxScrollY = i,
            t._gsScrollX = t.scrollLeft || 0,
            t._gsScrollY = t.scrollTop || 0
        }, Dt = function(t) {
            return t && ((t = (t = "string" == typeof t ? _e.default.selector(t) : t).length && t !== window && t[0] && t[0].style && !t.nodeType ? t[0] : t) === window || t.nodeType && t.style ? t : null)
        }, k = function(t, e) {
            var n, i, r, o = t.style;
            if (void 0 === o[e]) {
                for (r = ["O", "Moz", "ms", "Ms", "Webkit"],
                i = 5,
                n = e.charAt(0).toUpperCase() + e.substr(1); -1 < --i && void 0 === o[r[i] + n]; )
                    ;
                if (i < 0)
                    return "";
                e = (3 === i ? "ms" : r[i]) + n
            }
            return e
        }, jt = function(t, e, n) {
            var i = t.style;
            i && (void 0 === i[e] && (e = k(t, e)),
            null == n ? i.removeProperty ? i.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : i.removeAttribute(e) : void 0 !== i[e] && (i[e] = n))
        }, A = "undefined" != typeof window ? window : xt.defaultView || {
            getComputedStyle: function() {}
        }, w = function(t, e) {
            return A.getComputedStyle(!(t instanceof Element) && (t.host || (t.parentNode || {}).host) || t, e)
        }, M = /(?:Left|Right|Width)/i, I = /(?:\d|\-|\+|=|#|\.)*/g, L = function(t, e) {
            var n, i;
            return "absolute" !== Nt(t, "position", !0) ? 0 : (i = Nt(t, "margin" + (n = "left" === e ? "Left" : "Top"), !0),
            t["offset" + n] - (f(t, e, parseFloat(i), (i + "").replace(I, "")) || 0))
        }, Nt = function(t, e, n) {
            var i, r = (t._gsTransform || {})[e];
            return r || 0 === r || (t.style && t.style[e] ? r = t.style[e] : (i = w(t)) ? r = (r = i.getPropertyValue(e.replace(/([A-Z])/g, "-$1").toLowerCase())) || i.length ? r : i[e] : t.currentStyle && (r = t.currentStyle[e]),
            "auto" !== r || "top" !== e && "left" !== e || (r = L(t, e)),
            n) ? r : parseFloat(r) || 0
        }, R = "" !== k(c, "perspective"), D = k(c, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(), x = k(c, "transform"), j = x.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(), N = {}, B = {}, F = _e._gsScope.SVGElement, ce = function(t) {
            return !!(F && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
        }, z = _e._gsScope.navigator && (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(_e._gsScope.navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(_e._gsScope.navigator.userAgent)) && parseFloat(RegExp.$1) < 11, H = [], X = [], Bt = function(t, e) {
            var n, i, r;
            return e = e || {},
            t && t !== Tt && t.parentNode && t !== window ? (n = w(t),
            r = (n = D && n ? n.getPropertyValue(D) : "50% 50%").split(" "),
            i = -1 !== n.indexOf("left") ? "0%" : -1 !== n.indexOf("right") ? "100%" : r[0],
            "center" !== (r = -1 !== n.indexOf("top") ? "0%" : -1 !== n.indexOf("bottom") ? "100%" : r[1]) && null != r || (r = "50%"),
            "center" !== i && !isNaN(parseFloat(i)) || (i = "50%"),
            t.getBBox && ce(t) ? (t._gsTransform || (_e.default.set(t, {
                x: "+=0",
                overwrite: !1
            }),
            t._gsTransform.xOrigin),
            n = t.getBBox(),
            e.x = t._gsTransform.xOrigin - n.x,
            e.y = t._gsTransform.yOrigin - n.y) : (t.getBBox && -1 !== (i + r).indexOf("%") && (t = {
                offsetWidth: (t = t.getBBox()).width,
                offsetHeight: t.height
            }),
            e.x = -1 !== i.indexOf("%") ? t.offsetWidth * parseFloat(i) / 100 : parseFloat(i),
            e.y = -1 !== r.indexOf("%") ? t.offsetHeight * parseFloat(r) / 100 : parseFloat(r)),
            e) : {
                x: 0,
                y: 0
            }
        }, V = function(t, e, n, i, r) {
            if (t === window || !t || !t.style || !t.parentNode)
                return [1, 0, 0, 1, 0, 0];
            var o, s, a, l, u, c = t._dCache || O(t), f = t.parentNode, p = f._dCache || O(f), h = c.computedStyle, d = (c.isSVG ? p : f).offsetParent, _ = c.isSVG && -1 !== (t.style[x] + "").indexOf("matrix") ? t.style[x] : h ? h.getPropertyValue(j) : t.currentStyle ? t.currentStyle[x] : "1,0,0,1,0,0";
            if (6 < (_ = ((_ = t.getBBox && -1 !== (t.getAttribute("transform") + "").indexOf("matrix") ? t.getAttribute("transform") : _) + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0]).length && (_ = [_[0], _[1], _[4], _[5], _[12], _[13]]),
            i ? _[4] = _[5] = 0 : c.isSVG && (i = t._gsTransform) && (i.xOrigin || i.yOrigin) && (_[0] = parseFloat(_[0]),
            _[1] = parseFloat(_[1]),
            _[2] = parseFloat(_[2]),
            _[3] = parseFloat(_[3]),
            _[4] = parseFloat(_[4]) - (i.xOrigin - (i.xOrigin * _[0] + i.yOrigin * _[2])),
            _[5] = parseFloat(_[5]) - (i.yOrigin - (i.xOrigin * _[1] + i.yOrigin * _[3]))),
            e)
                if (void 0 === b && T(),
                i = c.isSVG || c.isSVGRoot ? y(t) : t,
                c.isSVG ? (l = t.getBBox(),
                u = p.isSVGRoot ? {
                    x: 0,
                    y: 0
                } : f.getBBox(),
                i = {
                    offsetLeft: l.x - u.x,
                    offsetTop: l.y - u.y,
                    offsetParent: c.offsetParent
                }) : c.isSVGRoot ? (l = parseInt(h.borderTopWidth, 10) || 0,
                u = parseInt(h.borderLeftWidth, 10) || 0,
                h = (_[0] - b) * u + _[2] * l,
                u = _[1] * u + (_[3] - b) * l,
                l = e.x,
                o = e.y,
                s = l - (l * _[0] + o * _[2]),
                a = o - (l * _[1] + o * _[3]),
                _[4] = parseFloat(_[4]) + s,
                _[5] = parseFloat(_[5]) + a,
                e.x -= s,
                e.y -= a,
                l = i.scaleX,
                o = i.scaleY,
                r || (e.x *= l,
                e.y *= o),
                _[0] *= l,
                _[1] *= o,
                _[2] *= l,
                _[3] *= o,
                z || (e.x += h,
                e.y += u),
                d === xt.body && i.offsetParent === Tt && (d = Tt)) : !P && t.offsetParent && (e.x += parseInt(Nt(t.offsetParent, "borderLeftWidth"), 10) || 0,
                e.y += parseInt(Nt(t.offsetParent, "borderTopWidth"), 10) || 0),
                s = f === Tt || f === xt.body,
                _[4] = Number(_[4]) + e.x + (i.offsetLeft || 0) - n.x - (!s && f.scrollLeft || 0),
                _[5] = Number(_[5]) + e.y + (i.offsetTop || 0) - n.y - (!s && f.scrollTop || 0),
                f && "fixed" === Nt(t, "position", !0))
                    for (_[4] += g(),
                    _[5] += m(),
                    f = f.offsetParent; f; )
                        _[4] -= f.offsetLeft,
                        _[5] -= f.offsetTop,
                        f = f.offsetParent;
                else
                    !f || f === Tt || d !== i.offsetParent || p.isSVG || S && "100100" !== V(f).join("") || (i = p.isSVGRoot ? y(f) : f,
                    _[4] -= i.offsetLeft || 0,
                    _[5] -= i.offsetTop || 0,
                    P || !p.offsetParent || c.isSVG || c.isSVGRoot || (_[4] -= parseInt(Nt(p.offsetParent, "borderLeftWidth"), 10) || 0,
                    _[5] -= parseInt(Nt(p.offsetParent, "borderTopWidth"), 10) || 0));
            return _
        }, fe = function(t, e) {
            if (!t || t === window || !t.parentNode)
                return [1, 0, 0, 1, 0, 0];
            for (var n, i, r, o, s, a, l, u = Bt(t, N), c = Bt(t.parentNode, B), f = V(t, u, c, !1, !e); (t = t.parentNode) && t.parentNode && t !== Tt; )
                u = c,
                c = Bt(t.parentNode, u === N ? B : N),
                l = V(t, u, c),
                n = f[0],
                i = f[1],
                r = f[2],
                o = f[3],
                s = f[4],
                a = f[5],
                f[0] = n * l[0] + i * l[2],
                f[1] = n * l[1] + i * l[3],
                f[2] = r * l[0] + o * l[2],
                f[3] = r * l[1] + o * l[3],
                f[4] = s * l[0] + a * l[2] + l[4],
                f[5] = s * l[1] + a * l[3] + l[5];
            return e && (n = f[0],
            i = f[1],
            r = f[2],
            o = f[3],
            s = f[4],
            a = f[5],
            f[0] = o / (e = n * o - i * r),
            f[1] = -i / e,
            f[2] = -r / e,
            f[3] = n / e,
            f[4] = (r * a - o * s) / e,
            f[5] = -(n * a - i * s) / e),
            f
        }, q = function(t, e, n) {
            if (!(t = Dt(t)))
                return null;
            e = Dt(e);
            var i, r, o, s, a, l, u, c, f, p, h, d, _ = t.getBBox && ce(t);
            if (t === window)
                o = m(),
                r = (i = g()) + (Tt.clientWidth || t.innerWidth || xt.body.clientWidth || 0),
                s = o + ((t.innerHeight || 0) - 20 < Tt.clientHeight ? Tt.clientHeight : t.innerHeight || xt.body.clientHeight || 0);
            else {
                if (void 0 === e || e === window)
                    return t.getBoundingClientRect();
                i = -(l = Bt(t)).x,
                o = -l.y,
                _ = _ ? (a = (l = t.getBBox()).width,
                l.height) : "svg" !== (t.nodeName + "").toLowerCase() && t.offsetWidth ? (a = t.offsetWidth,
                t.offsetHeight) : (h = w(t),
                a = parseFloat(h.width),
                parseFloat(h.height)),
                r = i + a,
                s = o + _,
                "svg" !== t.nodeName.toLowerCase() || St || (d = (l = y(t)).computedStyle || {},
                p = (t.getAttribute("viewBox") || "0 0").split(" "),
                f = parseFloat(p[0]),
                p = parseFloat(p[1]),
                u = parseFloat(d.borderLeftWidth) || 0,
                c = parseFloat(d.borderTopWidth) || 0,
                i /= l.scaleX,
                o /= l.scaleY,
                r = i + a - (a - (a - u) / l.scaleX - f),
                s = o + _ - (_ - (_ - c) / l.scaleY - p),
                i -= u / l.scaleX - f,
                o -= c / l.scaleY - p,
                h && (r += (parseFloat(d.borderRightWidth) + u) / l.scaleX,
                s += (c + parseFloat(d.borderBottomWidth)) / l.scaleY))
            }
            return t === e ? {
                left: i,
                top: o,
                width: r - i,
                height: s - o
            } : (a = fe(t),
            _ = fe(e, !0),
            f = v({
                x: i,
                y: o
            }, a, _),
            p = v({
                x: r,
                y: o
            }, a, _),
            h = v({
                x: r,
                y: s
            }, a, _),
            u = v({
                x: i,
                y: s
            }, a, _),
            i = Math.min(f.x, p.x, h.x, u.x),
            o = Math.min(f.y, p.y, h.y, u.y),
            It.x = It.y = 0,
            n && Bt(e, It),
            {
                left: i + It.x,
                top: o + It.y,
                width: Math.max(f.x, p.x, h.x, u.x) - i,
                height: Math.max(f.y, p.y, h.y, u.y) - o
            })
        }, pe = "undefined" != typeof window && "ontouchstart"in Tt && "orientation"in window, he = function(t) {
            for (var e = t.split(","), n = (void 0 !== c.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== c.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(","), i = {}, r = 4; -1 < --r; )
                i[e[r]] = n[r],
                i[n[r]] = e[r];
            try {
                Tt.addEventListener("test", null, Object.defineProperty({}, "passive", {
                    get: function() {
                        o = 1
                    }
                }))
            } catch (t) {}
            return i
        }("touchstart,touchmove,touchend,touchcancel"), Ft = function(t, e, n, i) {
            var r;
            t.addEventListener ? (r = he[e],
            i = i || (o ? {
                passive: !1
            } : null),
            t.addEventListener(r || e, n, i),
            r && e !== r && t.addEventListener(e, n, i)) : t.attachEvent && t.attachEvent("on" + e, n)
        }, zt = function(t, e, n) {
            var i;
            t.removeEventListener ? (i = he[e],
            t.removeEventListener(i || e, n),
            i && e !== i && t.removeEventListener(e, n)) : t.detachEvent && t.detachEvent("on" + e, n)
        }, U = function(t) {
            Zt = t.touches && At < t.touches.length,
            zt(t.target, "touchend", U)
        }, de = function(t) {
            var e;
            return !(!t || !t.getAttribute || "BODY" === t.nodeName) && (!("true" !== (e = t.getAttribute("data-clickable")) && ("false" === e || !t.onclick && !_.test(t.nodeName + "") && "true" !== t.getAttribute("contentEditable"))) || de(t.parentNode))
        }, W = (t = xt.createElement("div"),
        n = xt.createElement("div"),
        e = n.style,
        r = xt.body || c,
        e.display = "inline-block",
        e.position = "relative",
        t.style.cssText = n.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",
        t.appendChild(n),
        r.appendChild(t),
        e = n.offsetHeight + 18 > t.scrollHeight,
        r.removeChild(t),
        e), Ht = function(h, u) {
            _e.EventDispatcher.call(this, h),
            h = Dt(h),
            wt = wt || te.com.greensock.plugins.ThrowPropsPlugin,
            this.vars = u = oe(u || {}),
            this.target = h,
            this.x = this.y = this.rotation = 0,
            this.dragResistance = parseFloat(u.dragResistance) || 0,
            this.edgeResistance = isNaN(u.edgeResistance) ? 1 : parseFloat(u.edgeResistance) || 0,
            this.lockAxis = u.lockAxis,
            this.autoScroll = u.autoScroll || 0,
            this.lockedAxis = null,
            this.allowEventDefault = !!u.allowEventDefault;
            function r(t) {
                if (!(R.isPressed && t.which < 2))
                    return t.preventDefault(),
                    t.stopPropagation(),
                    !1;
                R.endDrag()
            }
            function o(t, e) {
                var n;
                if (V && !R.isPressed && t && ("mousedown" !== t.type && "pointerdown" !== t.type || e || !(Pt() - N < 30) || !he[R.pointerEvent.type]))
                    if (Z = dt(),
                    R.pointerEvent = t,
                    he[t.type] ? (O = -1 !== t.type.indexOf("touch") ? t.currentTarget || t.target : xt,
                    Ft(O, "touchend", H),
                    Ft(O, "touchmove", z),
                    Ft(O, "touchcancel", H),
                    Ft(xt, "touchstart", Wt)) : (O = null,
                    Ft(xt, "mousemove", z)),
                    E = null,
                    Ft(xt, "mouseup", H),
                    t && t.target && Ft(t.target, "mouseup", H),
                    G = at.call(R, t.target) && !1 === u.dragClickables && !e)
                        Ft(t.target, "change", H),
                        vt(R, "pressInit", "onPressInit"),
                        vt(R, "press", "onPress"),
                        bt(D, !0);
                    else {
                        if (C = !(!O || M === I || !1 === R.vars.allowNativeTouchScrolling || R.vars.allowContextMenu && t && (t.ctrlKey || 2 < t.which)) && (M ? "y" : "x"),
                        St ? t = qt(t, !0) : C || R.allowEventDefault || (t.preventDefault(),
                        t.preventManipulation && t.preventManipulation()),
                        t.changedTouches ? (t = W = t.changedTouches[0],
                        b = t.identifier) : t.pointerId ? b = t.pointerId : W = b = null,
                        At++,
                        !function(t) {
                            Et.push(t),
                            1 === Et.length && _e.default.ticker.addEventListener("tick", se, this, !1, 1)
                        }(B),
                        c = R.pointerY = t.pageY,
                        l = R.pointerX = t.pageX,
                        vt(R, "pressInit", "onPressInit"),
                        (C || R.autoScroll) && ue(h.parentNode),
                        !h.parentNode || !R.autoScroll || d || A || !h.parentNode._gsMaxScrollX || Ct.parentNode || h.getBBox || (Ct.style.width = h.parentNode.scrollWidth + "px",
                        h.parentNode.appendChild(Ct)),
                        ht(),
                        R.tween && R.tween.kill(),
                        R.isThrowing = !1,
                        _e.default.killTweensOf(d || h, !0, et),
                        d && _e.default.killTweensOf(h, !0, {
                            scrollTo: 1
                        }),
                        R.tween = R.lockedAxis = null,
                        !u.zIndexBoost && (A || d || !1 === u.zIndexBoost) || (h.style.zIndex = Ht.zIndex++),
                        R.isPressed = !0,
                        q = !(!u.onDrag && !R._listeners.drag),
                        !A && (!1 !== u.cursor || u.activeCursor))
                            for (n = D.length; -1 < --n; )
                                jt(D[n], "cursor", u.activeCursor || u.cursor || "move");
                        vt(R, "press", "onPress")
                    }
            }
            function s(t) {
                var e, n;
                t && R.isDragging && !d && (e = (t = t.target || t.srcElement || h.parentNode).scrollLeft - t._gsScrollX,
                n = t.scrollTop - t._gsScrollY,
                (e || n) && (P ? (l -= e * P[0] + n * P[2],
                c -= n * P[3] + e * P[1]) : (l -= e,
                c -= n),
                t._gsScrollX += e,
                t._gsScrollY += n,
                yt(R.pointerX, R.pointerY)))
            }
            function X(t) {
                var e = (n = Pt()) - N < 40
                  , n = n - nt < 40
                  , i = e && $ === N
                  , r = !!t.preventDefault
                  , o = R.pointerEvent && R.pointerEvent.defaultPrevented
                  , s = e && J === N
                  , a = t.isTrusted || null == t.isTrusted && e && i;
                r && (i || n && !1 !== R.vars.suppressClickOnDrag) && t.stopImmediatePropagation(),
                !e || R.pointerEvent && R.pointerEvent.defaultPrevented || i && a === s ? (R.isPressed || n || e) && (r ? a && t.detail && e && !o || (t.preventDefault(),
                t.preventManipulation && t.preventManipulation()) : t.returnValue = !1) : (a && i && (J = N),
                $ = N)
            }
            function n(t) {
                return P ? {
                    x: t.x * P[0] + t.y * P[2] + P[4],
                    y: t.x * P[1] + t.y * P[3] + P[5]
                } : {
                    x: t.x,
                    y: t.y
                }
            }
            var V, d, l, c, f, p, _, q, m, g, y, v, i, U, W, b, Y, w, a, x, T, G, O, P, Z, S, C, E, K, $, J, t = (u.type || (St ? "top,left" : "x,y")).toLowerCase(), k = -1 !== t.indexOf("x") || -1 !== t.indexOf("y"), A = -1 !== t.indexOf("rotation"), Q = A ? "rotation" : k ? "x" : "left", tt = k ? "y" : "top", M = -1 !== t.indexOf("x") || -1 !== t.indexOf("left") || "scroll" === t, I = -1 !== t.indexOf("y") || -1 !== t.indexOf("top") || "scroll" === t, L = u.minimumMovement || 2, R = this, D = function(t) {
                if (!(t = "string" == typeof t ? _e.default.selector(t) : t) || t.nodeType)
                    return [t];
                for (var e = [], n = t.length, i = 0; i !== n; e.push(t[i++]))
                    ;
                return e
            }(u.trigger || u.handle || h), et = {}, nt = 0, j = !1, it = u.autoScrollMarginTop || 40, rt = u.autoScrollMarginRight || 40, ot = u.autoScrollMarginBottom || 40, st = u.autoScrollMarginLeft || 40, at = u.clickableTest || de, N = 0, B = function(t) {
                if (R.autoScroll && R.isDragging && (j || w)) {
                    var e, n, i, r, o, s, a, l, u = h, c = 15 * R.autoScroll;
                    for (j = !1,
                    Lt.scrollTop = null != window.pageYOffset ? window.pageYOffset : (null != Tt.scrollTop ? Tt : xt.body).scrollTop,
                    Lt.scrollLeft = null != window.pageXOffset ? window.pageXOffset : (null != Tt.scrollLeft ? Tt : xt.body).scrollLeft,
                    r = R.pointerX - Lt.scrollLeft,
                    o = R.pointerY - Lt.scrollTop; u && !n; )
                        e = (n = Rt(u.parentNode)) ? Lt : u.parentNode,
                        i = n ? {
                            bottom: Math.max(Tt.clientHeight, window.innerHeight || 0),
                            right: Math.max(Tt.clientWidth, window.innerWidth || 0),
                            left: 0,
                            top: 0
                        } : e.getBoundingClientRect(),
                        s = a = 0,
                        I && ((l = e._gsMaxScrollY - e.scrollTop) < 0 ? a = l : o > i.bottom - ot && l ? (j = !0,
                        a = Math.min(l, c * (1 - Math.max(0, i.bottom - o) / ot) | 0)) : o < i.top + it && e.scrollTop && (j = !0,
                        a = -Math.min(e.scrollTop, c * (1 - Math.max(0, o - i.top) / it) | 0)),
                        a && (e.scrollTop += a)),
                        M && ((l = e._gsMaxScrollX - e.scrollLeft) < 0 ? s = l : r > i.right - rt && l ? (j = !0,
                        s = Math.min(l, c * (1 - Math.max(0, i.right - r) / rt) | 0)) : r < i.left + st && e.scrollLeft && (j = !0,
                        s = -Math.min(e.scrollLeft, c * (1 - Math.max(0, r - i.left) / st) | 0)),
                        s && (e.scrollLeft += s)),
                        n && (s || a) && (window.scrollTo(e.scrollLeft, e.scrollTop),
                        yt(R.pointerX + s, R.pointerY + a)),
                        u = e
                }
                var f, p;
                w && ((f = R.x) < 1e-6 && -1e-6 < f && (f = 0),
                (p = R.y) < 1e-6 && -1e-6 < p && (p = 0),
                A ? (R.deltaX = f - S.data.rotation,
                S.data.rotation = R.rotation = f,
                S.setRatio(1)) : d ? (I && (R.deltaY = p - d.top(),
                d.top(p)),
                M && (R.deltaX = f - d.left(),
                d.left(f))) : k ? (I && (R.deltaY = p - S.data.y,
                S.data.y = p),
                M && (R.deltaX = f - S.data.x,
                S.data.x = f),
                S.setRatio(1)) : (I && (R.deltaY = p - parseFloat(h.style.top || 0),
                h.style.top = p + "px"),
                M && (R.deltaY = f - parseFloat(h.style.left || 0),
                h.style.left = f + "px")),
                !q || t || K || (K = !0,
                vt(R, "drag", "onDrag"),
                K = !1)),
                w = !1
            }, F = function(t, e) {
                var n, i = R.x, r = R.y;
                h._gsTransform || !k && !A || _e.default.set(h, {
                    x: "+=0",
                    overwrite: !1,
                    data: "_draggable"
                }),
                k ? (R.y = h._gsTransform.y,
                R.x = h._gsTransform.x) : A ? R.x = R.rotation = h._gsTransform.rotation : d ? (R.y = d.top(),
                R.x = d.left()) : (R.y = parseInt(h.style.top, 10) || 0,
                R.x = parseInt(h.style.left, 10) || 0),
                (a || x || T) && !e && (R.isDragging || R.isThrowing) && (T && (It.x = R.x,
                It.y = R.y,
                (n = T(It)).x !== R.x && (R.x = n.x,
                w = !0),
                n.y !== R.y && (R.y = n.y,
                w = !0)),
                a && (n = a(R.x)) !== R.x && (R.x = n,
                A && (R.rotation = n),
                w = !0),
                x && ((n = x(R.y)) !== R.y && (R.y = n),
                w = !0)),
                w && B(!0),
                t || (R.deltaX = R.x - i,
                R.deltaY = R.y - r,
                vt(R, "throwupdate", "onThrowUpdate"))
            }, lt = function() {
                var t, e;
                _ = !1,
                d ? (d.calibrate(),
                R.minX = g = -d.maxScrollLeft(),
                R.minY = v = -d.maxScrollTop(),
                R.maxX = m = R.maxY = y = 0,
                _ = !0) : u.bounds && (t = Ut(u.bounds, h.parentNode),
                A ? (R.minX = g = t.left,
                R.maxX = m = t.left + t.width,
                R.minY = v = R.maxY = y = 0) : void 0 !== u.bounds.maxX || void 0 !== u.bounds.maxY ? (t = u.bounds,
                R.minX = g = t.minX,
                R.minY = v = t.minY,
                R.maxX = m = t.maxX,
                R.maxY = y = t.maxY) : (e = Ut(h, h.parentNode),
                R.minX = g = Nt(h, Q) + t.left - e.left,
                R.minY = v = Nt(h, tt) + t.top - e.top,
                R.maxX = m = g + (t.width - e.width),
                R.maxY = y = v + (t.height - e.height)),
                m < g && (R.minX = m,
                R.maxX = m = g,
                g = R.minX),
                y < v && (R.minY = y,
                R.maxY = y = v,
                v = R.minY),
                A && (R.minRotation = g,
                R.maxRotation = m),
                _ = !0),
                u.liveSnap && (e = (t = !0 === u.liveSnap ? u.snap || {} : u.liveSnap)instanceof Array || "function" == typeof t,
                A ? (a = mt(e ? t : t.rotation, g, m, 1),
                x = null) : t.points ? T = gt(e ? t : t.points, g, m, v, y, t.radius, d ? -1 : 1) : (M && (a = mt(e ? t : t.x || t.left || t.scrollLeft, g, m, d ? -1 : 1)),
                I && (x = mt(e ? t : t.y || t.top || t.scrollTop, v, y, d ? -1 : 1))))
            }, ut = function() {
                R.isThrowing = !1,
                vt(R, "throwcomplete", "onThrowComplete")
            }, ct = function() {
                R.isThrowing = !1
            }, ft = function(t, e) {
                var n, i;
                t && wt ? (!0 === t && (i = (n = u.snap || u.liveSnap || {})instanceof Array || "function" == typeof n,
                t = {
                    resistance: (u.throwResistance || u.resistance || 1e3) / (A ? 10 : 1)
                },
                A ? t.rotation = Yt(R, i ? n : n.rotation, m, g, 1, e) : (M && (t[Q] = Yt(R, i ? n : n.points || n.x || n.left || n.scrollLeft, m, g, d ? -1 : 1, e || "x" === R.lockedAxis)),
                I && (t[tt] = Yt(R, i ? n : n.points || n.y || n.top || n.scrollTop, y, v, d ? -1 : 1, e || "y" === R.lockedAxis)),
                (n.points || n instanceof Array && "object" == typeof n[0]) && (t.linkedProps = Q + "," + tt,
                t.radius = n.radius))),
                R.isThrowing = !0,
                i = isNaN(u.overshootTolerance) ? 1 === u.edgeResistance ? 0 : 1 - R.edgeResistance + .2 : u.overshootTolerance,
                R.tween = e = wt.to(d || h, {
                    throwProps: t,
                    data: "_draggable",
                    ease: u.ease || te.Power3.easeOut,
                    onComplete: ut,
                    onOverwrite: ct,
                    onUpdate: u.fastMode ? vt : F,
                    onUpdateParams: u.fastMode ? [R, "onthrowupdate", "onThrowUpdate"] : n && n.radius ? [!1, !0] : ee
                }, Math.max(u.minDuration || 0, u.maxDuration || 0) || 2, isNaN(u.minDuration) ? 0 === i || "object" == typeof t && 1e3 < t.resistance ? 0 : .5 : u.minDuration, i),
                u.fastMode || (d && (d._suspendTransforms = !0),
                e.render(e.duration(), !0, !0),
                F(!0, !0),
                R.endX = R.x,
                R.endY = R.y,
                A && (R.endRotation = R.x),
                e.play(0),
                F(!0, !0),
                d && (d._suspendTransforms = !1))) : _ && R.applyBounds()
            }, pt = function(t) {
                var e, n, i, r, o, s = P || [1, 0, 0, 1, 0, 0];
                P = fe(h.parentNode, !0),
                t && R.isPressed && s.join(",") !== P.join(",") && (t = s[0],
                o = s[1],
                e = s[2],
                n = s[3],
                i = s[4],
                s = s[5],
                t = l * (-o / (r = t * n - o * e)) + c * (t / r) + -(t * s - o * i) / r,
                c = (o = l * (n / r) + c * (-e / r) + (e * s - n * i) / r) * P[1] + t * P[3] + P[5],
                l = o * P[0] + t * P[2] + P[4]),
                P[1] || P[2] || 1 != P[0] || 1 != P[3] || 0 != P[4] || 0 != P[5] || (P = null)
            }, ht = function() {
                var t, e, n, i, r, o, s, a = 1 - R.edgeResistance;
                pt(!1),
                P && (l = R.pointerX * P[0] + R.pointerY * P[2] + P[4],
                c = R.pointerX * P[1] + R.pointerY * P[3] + P[5]),
                w && (yt(R.pointerX, R.pointerY),
                B(!0)),
                d ? (lt(),
                p = d.top(),
                f = d.left()) : (dt() ? (F(!0, !0),
                lt()) : R.applyBounds(),
                A ? (Y = R.rotationOrigin = (e = {
                    x: 0,
                    y: 0
                },
                t = Dt(t = h),
                r = fe(t, !1),
                o = e.x,
                s = e.y,
                n && (Bt(t, e),
                o -= e.x,
                s -= e.y),
                (i = !0 === i ? e : i || {}).x = o * r[0] + s * r[2] + r[4],
                i.y = o * r[1] + s * r[3] + r[5],
                i),
                F(!0, !0),
                f = R.x,
                p = R.y = Math.atan2(Y.y - R.pointerY, R.pointerX - Y.x) * ne) : (h.parentNode && h.parentNode.scrollTop,
                h.parentNode && h.parentNode.scrollLeft,
                p = Nt(h, tt),
                f = Nt(h, Q))),
                _ && a && (m < f ? f = m + (f - m) / a : f < g && (f = g - (g - f) / a),
                A || (y < p ? p = y + (p - y) / a : p < v && (p = v - (v - p) / a))),
                R.startX = f,
                R.startY = p
            }, dt = function() {
                return R.tween && R.tween.isActive()
            }, _t = function() {
                !Ct.parentNode || dt() || R.isDragging || Ct.parentNode.removeChild(Ct)
            }, mt = function(s, a, l, n) {
                return null == a && (a = -Ot),
                null == l && (l = Ot),
                "function" == typeof s ? function(t) {
                    var e = R.isPressed ? 1 - R.edgeResistance : 1;
                    return s.call(R, l < t ? l + (t - l) * e : t < a ? a + (t - a) * e : t) * n
                }
                : s instanceof Array ? function(t) {
                    for (var e, n, i = s.length, r = 0, o = Ot; -1 < --i; )
                        (n = (n = (e = s[i]) - t) < 0 ? -n : n) < o && a <= e && e <= l && (r = i,
                        o = n);
                    return s[r]
                }
                : isNaN(s) ? function(t) {
                    return t
                }
                : function() {
                    return s * n
                }
            }, gt = function(s, o, a, l, u, c, f) {
                return c = c && c < Ot ? c * c : Ot,
                "function" == typeof s ? function(t) {
                    var e, n = R.isPressed ? 1 - R.edgeResistance : 1, i = t.x, r = t.y;
                    return t.x = i = a < i ? a + (i - a) * n : i < o ? o + (i - o) * n : i,
                    t.y = r = u < r ? u + (r - u) * n : r < l ? l + (r - l) * n : r,
                    (n = s.call(R, t)) !== t && (t.x = n.x,
                    t.y = n.y),
                    1 !== f && (t.x *= f,
                    t.y *= f),
                    c < Ot && (n = t.x - i,
                    e = t.y - r,
                    c < n * n + e * e && (t.x = i,
                    t.y = r)),
                    t
                }
                : s instanceof Array ? function(t) {
                    for (var e, n, i = s.length, r = 0, o = Ot; -1 < --i; )
                        (n = (e = (n = s[i]).x - t.x) * e + (e = n.y - t.y) * e) < o && (r = i,
                        o = n);
                    return o <= c ? s[r] : t
                }
                : function(t) {
                    return t
                }
            }, z = function(t) {
                var e, n, i, r, o = t;
                if (V && !Zt && R.isPressed && t) {
                    if (e = (R.pointerEvent = t).changedTouches) {
                        if ((t = e[0]) !== W && t.identifier !== b) {
                            for (n = e.length; -1 < --n && (t = e[n]).identifier !== b; )
                                ;
                            if (n < 0)
                                return
                        }
                    } else if (t.pointerId && b && t.pointerId !== b)
                        return;
                    if (St)
                        t = qt(t, !0);
                    else {
                        if (O && C && !E && (i = t.pageX,
                        r = t.pageY,
                        P && (n = i * P[0] + r * P[2] + P[4],
                        r = i * P[1] + r * P[3] + P[5],
                        i = n),
                        ((i = Math.abs(i - l)) !== (r = Math.abs(r - c)) && (L < i || L < r) || Mt && C === E) && (E = r < i && M ? "x" : "y",
                        !1 !== R.vars.lockAxisOnTouchScroll && (R.lockedAxis = "x" === E ? "y" : "x",
                        "function" == typeof R.vars.onLockAxis && R.vars.onLockAxis.call(R, o)),
                        Mt && C === E)))
                            return void H(o);
                        R.allowEventDefault || C && (!E || C === E) || !1 === o.cancelable || (o.preventDefault(),
                        o.preventManipulation && o.preventManipulation())
                    }
                    R.autoScroll && (j = !0),
                    yt(t.pageX, t.pageY)
                }
            }, yt = function(t, e) {
                var n, i, r, o = 1 - R.dragResistance, s = 1 - R.edgeResistance;
                R.pointerX = t,
                R.pointerY = e,
                A ? (n = Math.atan2(Y.y - e, t - Y.x) * ne,
                180 < (i = R.y - n) ? (p -= 360,
                R.y = n) : i < -180 && (p += 360,
                R.y = n),
                i = R.x !== f || Math.abs(p - n) > L ? (R.y = n,
                f + (p - n) * o) : f) : (P && (r = t * P[0] + e * P[2] + P[4],
                e = t * P[1] + e * P[3] + P[5],
                t = r),
                (e = e - c) < L && -L < e && (e = 0),
                (t = t - l) < L && -L < t && (t = 0),
                (R.lockAxis || R.lockedAxis) && (t || e) && ((r = R.lockedAxis) || (R.lockedAxis = r = M && Math.abs(t) > Math.abs(e) ? "y" : I ? "x" : null,
                r && "function" == typeof R.vars.onLockAxis && R.vars.onLockAxis.call(R, R.pointerEvent)),
                "y" === r ? e = 0 : "x" === r && (t = 0)),
                i = f + t * o,
                n = p + e * o),
                (a || x || T) && (R.x !== i || R.y !== n && !A) ? (T && (It.x = i,
                It.y = n,
                i = (r = T(It)).x,
                n = r.y),
                a && (i = a(i)),
                x && (n = x(n))) : _ && (m < i ? i = m + (i - m) * s : i < g && (i = g + (i - g) * s),
                A || (y < n ? n = y + (n - y) * s : n < v && (n = v + (n - v) * s))),
                A || P || (i = Math.round(i),
                n = Math.round(n)),
                R.x === i && (R.y === n || A) || (A ? (R.endRotation = R.x = R.endX = i,
                w = !0) : (I && (R.y = R.endY = n,
                w = !0),
                M && (R.x = R.endX = i,
                w = !0)),
                !R.isDragging && R.isPressed && (R.isDragging = !0,
                vt(R, "dragstart", "onDragStart")))
            }, H = function(t, e) {
                if (V && R.isPressed && (!t || null == b || e || !(t.pointerId && t.pointerId !== b || t.changedTouches && !function(t, e) {
                    for (var n = t.length; -1 < --n; )
                        if (t[n].identifier === e)
                            return !0;
                    return !1
                }(t.changedTouches, b)))) {
                    R.isPressed = !1;
                    var n, i, r, o, e = t, s = R.isDragging, a = R.vars.allowContextMenu && t && (t.ctrlKey || 2 < t.which), l = _e.default.delayedCall(.001, _t);
                    if (O ? (zt(O, "touchend", H),
                    zt(O, "touchmove", z),
                    zt(O, "touchcancel", H),
                    zt(xt, "touchstart", Wt)) : zt(xt, "mousemove", z),
                    zt(xt, "mouseup", H),
                    t && t.target && zt(t.target, "mouseup", H),
                    w = !1,
                    !G || a) {
                        if (Vt(B),
                        !A)
                            for (i = D.length; -1 < --i; )
                                jt(D[i], "cursor", u.cursor || (!1 !== u.cursor ? "move" : null));
                        if (s && (nt = re = Pt(),
                        R.isDragging = !1),
                        At--,
                        t) {
                            if ((n = (t = St ? qt(t, !1) : t).changedTouches) && (t = n[0]) !== W && t.identifier !== b) {
                                for (i = n.length; -1 < --i && (t = n[i]).identifier !== b; )
                                    ;
                                if (i < 0)
                                    return
                            }
                            R.pointerEvent = e,
                            R.pointerX = t.pageX,
                            R.pointerY = t.pageY
                        }
                        return a && e ? (e.preventDefault(),
                        e.preventManipulation && e.preventManipulation(),
                        vt(R, "release", "onRelease")) : e && !s ? (Z && (u.snap || u.bounds) && ft(u.throwProps),
                        vt(R, "release", "onRelease"),
                        Mt && "touchmove" === e.type || -1 !== e.type.indexOf("cancel") || (vt(R, "click", "onClick"),
                        Pt() - N < 300 && vt(R, "doubleclick", "onDoubleClick"),
                        o = e.target || e.srcElement || h,
                        N = Pt(),
                        Mt || e.defaultPrevented || _e.default.delayedCall(1e-5, function() {
                            N !== $ && R.enabled() && !R.isPressed && (o.click ? o.click() : xt.createEvent && ((r = xt.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, R.pointerEvent.screenX, R.pointerEvent.screenY, R.pointerX, R.pointerY, !1, !1, !1, !1, 0, null),
                            o.dispatchEvent(r)))
                        }))) : (ft(u.throwProps),
                        St || R.allowEventDefault || !e || !1 === u.dragClickables && at.call(R, e.target) || !s || C && (!E || C !== E) || !1 === e.cancelable || (e.preventDefault(),
                        e.preventManipulation && e.preventManipulation()),
                        vt(R, "release", "onRelease")),
                        dt() && l.duration(R.tween.duration()),
                        s && vt(R, "dragend", "onDragEnd"),
                        !0
                    }
                    t && (zt(t.target, "change", H),
                    R.pointerEvent = e),
                    bt(D, !1),
                    vt(R, "release", "onRelease"),
                    vt(R, "click", "onClick"),
                    G = !1
                }
            }, e = Ht.get(this.target);
            e && e.kill(),
            this.startDrag = function(t, e) {
                o(t || R.pointerEvent, !0),
                e && !R.hitTest(t || R.pointerEvent) && (e = Xt(t || R.pointerEvent),
                t = Xt(h),
                e = n({
                    x: e.left + e.width / 2,
                    y: e.top + e.height / 2
                }),
                t = n({
                    x: t.left + t.width / 2,
                    y: t.top + t.height / 2
                }),
                l -= e.x - t.x,
                c -= e.y - t.y),
                R.isDragging || (R.isDragging = !0,
                vt(R, "dragstart", "onDragStart"))
            }
            ,
            this.drag = z,
            this.endDrag = function(t) {
                H(t || R.pointerEvent, !0)
            }
            ,
            this.timeSinceDrag = function() {
                return R.isDragging ? 0 : (Pt() - nt) / 1e3
            }
            ,
            this.timeSinceClick = function() {
                return (Pt() - N) / 1e3
            }
            ,
            this.hitTest = function(t, e) {
                return Ht.hitTest(R.target, t, e)
            }
            ,
            this.getDirection = function(t, e) {
                var n, i, r = "velocity" === t && wt ? t : "object" != typeof t || A ? "start" : "element";
                return "element" === r && (n = Xt(R.target),
                i = Xt(t)),
                t = "start" === r ? R.x - f : "velocity" === r ? wt.getVelocity(this.target, Q) : n.left + n.width / 2 - (i.left + i.width / 2),
                A ? t < 0 ? "counter-clockwise" : "clockwise" : (e = e || 2,
                r = "start" === r ? R.y - p : "velocity" === r ? wt.getVelocity(this.target, tt) : n.top + n.height / 2 - (i.top + i.height / 2),
                i = (n = Math.abs(t / r)) < 1 / e ? "" : t < 0 ? "left" : "right",
                n < e && ("" !== i && (i += "-"),
                i += r < 0 ? "up" : "down"),
                i)
            }
            ,
            this.applyBounds = function(t) {
                var e, n, i, r, o;
                if (t && u.bounds !== t)
                    return u.bounds = t,
                    R.update(!0);
                if (F(!0),
                lt(),
                _) {
                    if (t = R.x,
                    e = R.y,
                    m < t ? t = m : t < g && (t = g),
                    y < e ? e = y : e < v && (e = v),
                    (R.x !== t || R.y !== e) && (n = !0,
                    R.x = R.endX = t,
                    A ? R.endRotation = t : R.y = R.endY = e,
                    B(w = !0),
                    R.autoScroll && !R.isDragging))
                        for (ue(h.parentNode),
                        i = h,
                        Lt.scrollTop = null != window.pageYOffset ? window.pageYOffset : (null != Tt.scrollTop ? Tt : xt.body).scrollTop,
                        Lt.scrollLeft = null != window.pageXOffset ? window.pageXOffset : (null != Tt.scrollLeft ? Tt : xt.body).scrollLeft; i && !o; )
                            r = (o = Rt(i.parentNode)) ? Lt : i.parentNode,
                            I && r.scrollTop > r._gsMaxScrollY && (r.scrollTop = r._gsMaxScrollY),
                            M && r.scrollLeft > r._gsMaxScrollX && (r.scrollLeft = r._gsMaxScrollX),
                            i = r;
                    R.isThrowing && (n || R.endX > m || R.endX < g || R.endY > y || R.endY < v) && ft(u.throwProps, n)
                }
                return R
            }
            ,
            this.update = function(t, e, n) {
                var i = R.x
                  , r = R.y;
                return pt(!e),
                t ? R.applyBounds() : (w && n && B(!0),
                F(!0)),
                e && (yt(R.pointerX, R.pointerY),
                w && B(!0)),
                R.isPressed && !e && (M && .01 < Math.abs(i - R.x) || I && .01 < Math.abs(r - R.y) && !A) && ht(),
                R.autoScroll && (ue(h.parentNode),
                j = R.isDragging,
                B(!0)),
                R.autoScroll && (le(h, s),
                ae(h, s)),
                R
            }
            ,
            this.enable = function(t) {
                var e, n;
                if ("soft" !== t) {
                    for (e = D.length; -1 < --e; )
                        n = D[e],
                        Ft(n, "mousedown", o),
                        Ft(n, "touchstart", o),
                        Ft(n, "click", X, !0),
                        A || !1 === u.cursor || jt(n, "cursor", u.cursor || "move"),
                        jt(n, "touchCallout", "none"),
                        jt(n, "touchAction", M === I ? "none" : M ? "pan-y" : "pan-x"),
                        ce(n) && jt(n.ownerSVGElement || n, "touchAction", M === I ? "none" : M ? "pan-y" : "pan-x"),
                        this.vars.allowContextMenu || Ft(n, "contextmenu", r);
                    bt(D, !1)
                }
                return ae(h, s),
                V = !0,
                wt && "soft" !== t && wt.track(d || h, k ? "x,y" : A ? "rotation" : "top,left"),
                d && d.enable(),
                h._gsDragID = t = "d" + ie++,
                kt[t] = this,
                d && (d.element._gsDragID = t),
                _e.default.set(h, {
                    x: "+=0",
                    overwrite: !1,
                    data: "_draggable"
                }),
                S = {
                    t: h,
                    data: St ? U : h._gsTransform,
                    tween: {},
                    setRatio: St ? function() {
                        _e.default.set(h, i)
                    }
                    : me.a._internals.setTransformRatio || me.a._internals.set3DTransformRatio
                },
                ht(),
                R.update(!0),
                R
            }
            ,
            this.disable = function(t) {
                var e, n, i = R.isDragging;
                if (!A)
                    for (e = D.length; -1 < --e; )
                        jt(D[e], "cursor", null);
                if ("soft" !== t) {
                    for (e = D.length; -1 < --e; )
                        n = D[e],
                        jt(n, "touchCallout", null),
                        jt(n, "touchAction", null),
                        zt(n, "mousedown", o),
                        zt(n, "touchstart", o),
                        zt(n, "click", X),
                        zt(n, "contextmenu", r);
                    bt(D, !0),
                    O && (zt(O, "touchcancel", H),
                    zt(O, "touchend", H),
                    zt(O, "touchmove", z)),
                    zt(xt, "mouseup", H),
                    zt(xt, "mousemove", z)
                }
                return le(h, s),
                V = !1,
                wt && "soft" !== t && wt.untrack(d || h, k ? "x,y" : A ? "rotation" : "top,left"),
                d && d.disable(),
                Vt(B),
                R.isDragging = R.isPressed = G = !1,
                i && vt(R, "dragend", "onDragEnd"),
                R
            }
            ,
            this.enabled = function(t, e) {
                return arguments.length ? t ? R.enable(e) : R.disable(e) : V
            }
            ,
            this.kill = function() {
                return R.isThrowing = !1,
                _e.default.killTweensOf(d || h, !0, et),
                R.disable(),
                _e.default.set(D, {
                    clearProps: "userSelect"
                }),
                delete kt[h._gsDragID],
                R
            }
            ,
            -1 !== t.indexOf("scroll") && (d = this.scrollProxy = new Gt(h,function(t, e) {
                for (var n in e)
                    void 0 === t[n] && (t[n] = e[n]);
                return t
            }({
                onKill: function() {
                    R.isPressed && H(null)
                }
            }, u)),
            h.style.overflowY = I && !pe ? "auto" : "hidden",
            h.style.overflowX = M && !pe ? "auto" : "hidden",
            h = d.content),
            !1 !== u.force3D && _e.default.set(h, {
                force3D: !0
            }),
            A ? et.rotation = 1 : (M && (et[Q] = 1),
            I && (et[tt] = 1)),
            A ? (U = (i = Qt).css,
            i.overwrite = !1) : k && (U = (i = M && I ? Kt : M ? $t : Jt).css,
            i.overwrite = !1),
            this.enable()
        }, n = Ht.prototype = new _e.EventDispatcher, i = (n.constructor = Ht,
        n.pointerX = n.pointerY = n.startX = n.startY = n.deltaX = n.deltaY = 0,
        n.isDragging = n.isPressed = !1,
        Ht.version = "0.17.1",
        Ht.zIndex = 1e3,
        Ft(xt, "touchcancel", function() {}),
        Ft(xt, "contextmenu", function(t) {
            for (var e in kt)
                kt[e].isPressed && kt[e].endDrag()
        }),
        Ht.create = function(t, e) {
            for (var n = (t = "string" == typeof t ? _e.default.selector(t) : t) && 0 !== t.length ? s(t) ? function(t) {
                for (var e, n, i = [], r = t.length, o = 0; o < r; o++)
                    if (e = t[o],
                    s(e))
                        for (n = e.length,
                        n = 0; n < e.length; n++)
                            i.push(e[n]);
                    else
                        e && 0 !== e.length && i.push(e);
                return i
            }(t) : [t] : [], i = n.length; -1 < --i; )
                n[i] = new Ht(n[i],e);
            return n
        }
        ,
        Ht.get = function(t) {
            return kt[(Dt(t) || {})._gsDragID]
        }
        ,
        Ht.timeSinceDrag = function() {
            return (Pt() - re) / 1e3
        }
        ,
        {}), Xt = function(t, e) {
            return t === window ? (i.left = i.top = 0,
            i.width = i.right = Tt.clientWidth || t.innerWidth || xt.body.clientWidth || 0,
            i.height = i.bottom = (t.innerHeight || 0) - 20 < Tt.clientHeight ? Tt.clientHeight : t.innerHeight || xt.body.clientHeight || 0,
            i) : ((t = t.pageX !== e ? {
                left: t.pageX - g(),
                top: t.pageY - m(),
                right: t.pageX - g() + 1,
                bottom: t.pageY - m() + 1
            } : t.nodeType || t.left === e || t.top === e ? St ? function(t) {
                for (var e = 0, n = 0, i = (t = Dt(t)).offsetWidth, r = t.offsetHeight; t; )
                    e += t.offsetTop,
                    n += t.offsetLeft,
                    t = t.offsetParent;
                return {
                    top: e,
                    left: n,
                    width: i,
                    height: r
                }
            }(t) : Dt(t).getBoundingClientRect() : t).right === e && t.width !== e ? (t.right = t.left + t.width,
            t.bottom = t.top + t.height) : t.width === e && (t = {
                width: t.right - t.left,
                height: t.bottom - t.top,
                right: t.right,
                left: t.left,
                bottom: t.bottom,
                top: t.top
            }),
            t)
        };
        return Ht.hitTest = function(t, e, n) {
            var i, r;
            return t !== e && (t = Xt(t),
            (r = (e = Xt(e)).left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top) || !n ? !r : (r = -1 !== (n + "").indexOf("%"),
            n = parseFloat(n) || 0,
            (i = {
                left: Math.max(t.left, e.left),
                top: Math.max(t.top, e.top)
            }).width = Math.min(t.right, e.right) - i.left,
            i.height = Math.min(t.bottom, e.bottom) - i.top,
            !(i.width < 0 || i.height < 0) && (r ? (r = i.width * i.height) >= t.width * t.height * (n *= .01) || r >= e.width * e.height * n : i.width > n && i.height > n)))
        }
        ,
        Ct.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;",
        Ht
    }, !0),
    _e.globals.Draggable)
}
, function(r, o, s) {
    !function(t) {
        var e, n, i = r.exports && void 0 !== t ? t : this || window;
        (i._gsQueue || (i._gsQueue = [])).push(function() {
            "use strict";
            i._gsDefine("plugins.ThrowPropsPlugin", ["plugins.TweenPlugin", "TweenLite", "easing.Ease", "utils.VelocityTracker"], function(n, P, S, C) {
                function E(t, e) {
                    n.call(this, "throwProps"),
                    this._overwriteProps.length = 0
                }
                function u(t, e, n, i, r) {
                    var o, s, a, l, u = e.length, c = 0, f = p;
                    if ("object" == typeof t) {
                        for (; -1 < --u; ) {
                            for (a in o = e[u],
                            s = 0,
                            t)
                                s += (l = o[a] - t[a]) * l;
                            s < f && (c = u,
                            f = s)
                        }
                        if ((r || p) < p && r < Math.sqrt(f))
                            return t
                    } else
                        for (; -1 < --u; )
                            (s = (s = (o = e[u]) - t) < 0 ? -s : s) < f && i <= o && o <= n && (c = u,
                            f = s);
                    return e[c]
                }
                function k(t, e, n, i, r, o) {
                    if ("auto" === t.end)
                        return t;
                    var s, a, l = t.end;
                    if (n = isNaN(n) ? p : n,
                    i = isNaN(i) ? -p : i,
                    "object" == typeof e) {
                        if (s = !e.calculated && ("function" == typeof l ? l(e) : u(e, l, n, i, o)) || e,
                        !e.calculated) {
                            for (a in s)
                                e[a] = s[a];
                            e.calculated = !0
                        }
                        s = s[r]
                    } else
                        s = "function" == typeof l ? l(e) : l instanceof Array ? u(e, l, n, i, o) : Number(l);
                    return n < s ? s = n : s < i && (s = i),
                    {
                        max: s,
                        min: s,
                        unitFactor: t.unitFactor
                    }
                }
                function A(t, e, n) {
                    for (var i in e)
                        void 0 === t[i] && i !== n && (t[i] = e[i]);
                    return t
                }
                var v, b, w, x, p = 999999999999999, e = i._gsDefine.globals, M = !1, T = {
                    x: 1,
                    y: 1,
                    z: 2,
                    scale: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 1,
                    rotationZ: 1,
                    rotationX: 2,
                    rotationY: 2,
                    skewX: 1,
                    skewY: 1,
                    xPercent: 1,
                    yPercent: 1
                }, I = E.calculateChange = function(t, e, n, i) {
                    return n * (i = null == i ? .05 : i) * t / (e instanceof S ? e : e ? new S(e) : P.defaultEase).getRatio(i)
                }
                , L = E.calculateDuration = function(t, e, n, i, r) {
                    r = r || .05;
                    i = i instanceof S ? i : i ? new S(i) : P.defaultEase;
                    return Math.abs((e - t) * i.getRatio(r) / n / r)
                }
                , s = E.calculateTweenDuration = function(t, e, n, i, r, o) {
                    if (!(t = "string" == typeof t ? P.selector(t) : t))
                        return 0;
                    null == n && (n = 10),
                    null == i && (i = .2),
                    null == r && (r = 1),
                    t.length && (t = t[0] || t);
                    var s, a, l, u, c, f, p, h, d, _, m, g, y, v = 0, b = 9999999999, w = e.throwProps || e, x = e.ease instanceof S ? e.ease : e.ease ? new S(e.ease) : P.defaultEase, T = isNaN(w.checkpoint) ? .05 : Number(w.checkpoint), O = isNaN(w.resistance) ? E.defaultResistance : Number(w.resistance);
                    if (w.linkedProps)
                        for (g = w.linkedProps.split(","),
                        m = {},
                        y = 0; y < g.length; y++)
                            (a = w[s = g[y]]) && (l = 0 < (u = void 0 !== a.velocity && "number" == typeof a.velocity ? Number(a.velocity) || 0 : (d = d || C.getByTarget(t)) && d.isTrackingProp(s) ? d.getVelocity(s) : 0) * (c = isNaN(a.resistance) ? O : Number(a.resistance)) ? u / c : u / -c,
                            f = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : t[s] || 0,
                            m[s] = f + I(u, x, l, T));
                    for (s in w)
                        "resistance" !== s && "checkpoint" !== s && "preventOvershoot" !== s && "linkedProps" !== s && "radius" !== s && ("object" != typeof (a = w[s]) && ((d = d || C.getByTarget(t)) && d.isTrackingProp(s) ? a = "number" == typeof a ? {
                            velocity: a
                        } : {
                            velocity: d.getVelocity(s)
                        } : l = 0 < (u = Number(a) || 0) * O ? u / O : u / -O),
                        "object" == typeof a && (l = 0 < (u = void 0 !== a.velocity && "number" == typeof a.velocity ? Number(a.velocity) || 0 : (d = d || C.getByTarget(t)) && d.isTrackingProp(s) ? d.getVelocity(s) : 0) * (c = isNaN(a.resistance) ? O : Number(a.resistance)) ? u / c : u / -c,
                        p = (f = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : t[s] || 0) + I(u, x, l, T),
                        void 0 !== a.end && (a = k(a, m && s in m ? m : p, a.max, a.min, s, w.radius),
                        (o || M) && (w[s] = A(a, w[s], "end"))),
                        void 0 !== a.max && p > Number(a.max) + 1e-10 ? (_ = a.unitFactor || E.defaultUnitFactors[s] || 1,
                        (h = f > a.max && a.min !== a.max || -15 < u * _ && u * _ < 45 ? i + .1 * (n - i) : L(f, a.max, u, x, T)) + r < b && (b = h + r)) : void 0 !== a.min && p < Number(a.min) - 1e-10 && (_ = a.unitFactor || E.defaultUnitFactors[s] || 1,
                        (h = f < a.min && a.min !== a.max || -45 < u * _ && u * _ < 15 ? i + .1 * (n - i) : L(f, a.min, u, x, T)) + r < b && (b = h + r)),
                        v < h && (v = h)),
                        v < l && (v = l));
                    return n < (v = b < v ? b : v) ? n : v < i ? i : v
                }
                , t = E.prototype = new n("throwProps");
                return (t.constructor = E).version = "0.11.1",
                E.API = 2,
                E._autoCSS = !0,
                E.defaultResistance = 100,
                E.defaultUnitFactors = {
                    time: 1e3,
                    totalTime: 1e3
                },
                E.track = function(t, e, n) {
                    return C.track(t, e, n)
                }
                ,
                E.untrack = function(t, e) {
                    C.untrack(t, e)
                }
                ,
                E.isTracking = function(t, e) {
                    return C.isTracking(t, e)
                }
                ,
                E.getVelocity = function(t, e) {
                    t = C.getByTarget(t);
                    return t ? t.getVelocity(e) : NaN
                }
                ,
                E._cssRegister = function() {
                    var m, g, y, t = e.com.greensock.plugins.CSSPlugin;
                    t && (t = t._internals,
                    m = t._parseToProxy,
                    g = t._setPluginRatio,
                    y = t.CSSPropTween,
                    t._registerComplexSpecialProp("throwProps", {
                        parser: function(t, e, n, i, r, o) {
                            o = new E;
                            var s, a, l, u, c = {}, f = {}, p = {}, h = {}, d = {}, _ = {};
                            for (a in b = {},
                            e)
                                "resistance" !== a && "preventOvershoot" !== a && "linkedProps" !== a && "radius" !== a && ("object" == typeof (s = e[a]) ? (void 0 !== s.velocity && "number" == typeof s.velocity ? c[a] = Number(s.velocity) || 0 : (u = u || C.getByTarget(t),
                                c[a] = u && u.isTrackingProp(a) ? u.getVelocity(a) : 0),
                                void 0 !== s.end && (h[a] = s.end),
                                void 0 !== s.min && (f[a] = s.min),
                                void 0 !== s.max && (p[a] = s.max),
                                s.preventOvershoot && (_[a] = !0),
                                void 0 !== s.resistance && (d[a] = s.resistance)) : "number" == typeof s ? c[a] = s : (u = u || C.getByTarget(t)) && u.isTrackingProp(a) ? c[a] = u.getVelocity(a) : c[a] = s || 0,
                                T[a] && i._enableTransforms(2 === T[a]));
                            for (a in l = m(t, c, i, r, o),
                            v = l.proxy,
                            c = l.end,
                            v)
                                b[a] = {
                                    velocity: c[a],
                                    min: f[a],
                                    max: p[a],
                                    end: h[a],
                                    resistance: d[a],
                                    preventOvershoot: _[a]
                                };
                            return null != e.resistance && (b.resistance = e.resistance),
                            null != e.linkedProps && (b.linkedProps = e.linkedProps),
                            null != e.radius && (b.radius = e.radius),
                            e.preventOvershoot && (b.preventOvershoot = !0),
                            r = new y(t,"throwProps",0,0,l.pt,2),
                            i._overwriteProps.pop(),
                            r.plugin = o,
                            r.setRatio = g,
                            r.data = l,
                            o._onInitTween(v, b, i._tween),
                            r
                        }
                    }))
                }
                ,
                E.to = function(t, e, n, i, r) {
                    e.throwProps || (e = {
                        throwProps: e
                    }),
                    0 === r && (e.throwProps.preventOvershoot = !0),
                    M = !0;
                    var o = new P(t,i || 1,e);
                    return o.render(0, !0, !0),
                    M = (o.vars.css ? (o.duration(s(v, {
                        throwProps: b,
                        ease: e.ease
                    }, n, i, r)),
                    o._delay && !o.vars.immediateRender ? o.invalidate() : w._onInitTween(v, x, o)) : (o.kill(),
                    o = new P(t,s(t, e, n, i, r),e)),
                    !1),
                    o
                }
                ,
                t._onInitTween = function(t, e, n, i) {
                    this.target = t,
                    this._props = [],
                    w = this,
                    x = e;
                    var r, o, s, a, l, u, c, f, p, h, d, _, m = n._ease, g = isNaN(e.checkpoint) ? .05 : Number(e.checkpoint), y = n._duration, v = e.preventOvershoot, b = 0;
                    if (e.linkedProps)
                        for (d = e.linkedProps.split(","),
                        h = {},
                        _ = 0; _ < d.length; _++)
                            (o = e[r = d[_]]) && (l = void 0 !== o.velocity && "number" == typeof o.velocity ? Number(o.velocity) || 0 : (p = p || C.getByTarget(t)) && p.isTrackingProp(r) ? p.getVelocity(r) : 0,
                            s = "function" == typeof t[r] ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : t[r] || 0,
                            h[r] = s + I(l, m, y, g));
                    for (r in e)
                        if ("resistance" !== r && "checkpoint" !== r && "preventOvershoot" !== r && "linkedProps" !== r && "radius" !== r) {
                            if ("number" == typeof (o = "function" == typeof (o = e[r]) ? o(i, t) : o))
                                l = Number(o) || 0;
                            else if ("object" != typeof o || isNaN(o.velocity)) {
                                if (!(p = p || C.getByTarget(t)) || !p.isTrackingProp(r))
                                    throw "ERROR: No velocity was defined in the throwProps tween of " + t + " property: " + r;
                                l = p.getVelocity(r)
                            } else
                                l = Number(o.velocity);
                            u = I(l, m, y, g),
                            f = 0,
                            s = (a = "function" == typeof t[r]) ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : t[r],
                            "object" == typeof o && (c = s + u,
                            void 0 !== o.end && (o = k(o, h && r in h ? h : c, o.max, o.min, r, e.radius),
                            M && (e[r] = A(o, e[r], "end"))),
                            void 0 !== o.max && Number(o.max) < c ? v || o.preventOvershoot ? u = o.max - s : f = o.max - s - u : void 0 !== o.min && Number(o.min) > c && (v || o.preventOvershoot ? u = o.min - s : f = o.min - s - u)),
                            this._overwriteProps[b] = r,
                            this._props[b++] = {
                                p: r,
                                s: s,
                                c1: u,
                                c2: f,
                                f: a,
                                r: !1
                            }
                        }
                    return !0
                }
                ,
                t._kill = function(t) {
                    for (var e = this._props.length; -1 < --e; )
                        null != t[this._props[e].p] && this._props.splice(e, 1);
                    return n.prototype._kill.call(this, t)
                }
                ,
                t._mod = function(t) {
                    for (var e, n = this._props, i = n.length; -1 < --i; )
                        "function" == typeof (e = t[n[i].p] || t.throwProps) && (n[i].m = e)
                }
                ,
                t.setRatio = function(t) {
                    for (var e, n, i = this._props.length; -1 < --i; )
                        n = (e = this._props[i]).s + e.c1 * t + e.c2 * t * t,
                        e.m ? n = e.m(n, this.target) : 1 === t && (n = (1e4 * n + (n < 0 ? -.5 : .5) | 0) / 1e4),
                        e.f ? this.target[e.p](n) : this.target[e.p] = n
                }
                ,
                n.activate([E]),
                E
            }, !0),
            i._gsDefine("utils.VelocityTracker", ["TweenLite"], function(s) {
                function a(t, e, n) {
                    this.p = t,
                    this.f = e,
                    this.v1 = this.v2 = 0,
                    this.t1 = this.t2 = d.time,
                    this.css = !1,
                    this.type = "",
                    this._prev = null,
                    n && ((this._next = n)._prev = this)
                }
                function e() {
                    var t, e, n = o, i = d.time;
                    if (.03 <= i - r)
                        for (r = i; n; ) {
                            for (e = n._firstVP; e; )
                                ((t = e.css ? h(n.target, e.p) : e.f ? n.target[e.p]() : n.target[e.p]) !== e.v1 || .15 < i - e.t1) && (e.v2 = e.v1,
                                e.v1 = t,
                                e.t2 = e.t1,
                                e.t1 = i),
                                e = e._next;
                            n = n._next
                        }
                }
                function l(t) {
                    this._lookup = {},
                    this.target = t,
                    this.elem = !(!t.style || !t.nodeType),
                    n || (d.addEventListener("tick", e, null, !1, -100),
                    r = d.time,
                    n = !0),
                    o && ((this._next = o)._prev = this),
                    o = this
                }
                var o, n, r, u = /([A-Z])/g, c = {}, t = i.document, f = {
                    x: 1,
                    y: 1,
                    z: 2,
                    scale: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 1,
                    rotationZ: 1,
                    rotationX: 2,
                    rotationY: 2,
                    skewX: 1,
                    skewY: 1,
                    xPercent: 1,
                    yPercent: 1
                }, p = t.defaultView ? t.defaultView.getComputedStyle : function() {}
                , h = function(t, e, n) {
                    var i = (t._gsTransform || c)[e];
                    return i || 0 === i ? i : (t.style[e] ? i = t.style[e] : (n = n || p(t, null)) ? i = n[e] || n.getPropertyValue(e) || n.getPropertyValue(e.replace(u, "-$1").toLowerCase()) : t.currentStyle && (i = t.currentStyle[e]),
                    parseFloat(i) || 0)
                }, d = s.ticker, _ = l.getByTarget = function(t) {
                    for (var e = o; e; ) {
                        if (e.target === t)
                            return e;
                        e = e._next
                    }
                }
                , t = l.prototype;
                return t.addProp = function(t, e) {
                    var n, i, r, o;
                    this._lookup[t] || (r = (i = "function" == typeof (n = this.target)[t]) ? this._altProp(t) : t,
                    o = this._firstVP,
                    this._firstVP = this._lookup[t] = this._lookup[r] = o = new a(r !== t && 0 === t.indexOf("set") ? r : t,i,o),
                    o.css = this.elem && (void 0 !== this.target.style[o.p] || f[o.p]),
                    o.css && f[o.p] && !n._gsTransform && s.set(n, {
                        x: "+=0",
                        overwrite: !1
                    }),
                    o.type = e || o.css && 0 === t.indexOf("rotation") ? "deg" : "",
                    o.v1 = o.v2 = o.css ? h(n, o.p) : i ? n[o.p]() : n[o.p])
                }
                ,
                t.removeProp = function(t) {
                    var e = this._lookup[t];
                    e && (e._prev ? e._prev._next = e._next : e === this._firstVP && (this._firstVP = e._next),
                    e._next && (e._next._prev = e._prev),
                    this._lookup[t] = 0,
                    e.f && (this._lookup[this._altProp(t)] = 0))
                }
                ,
                t.isTrackingProp = function(t) {
                    return this._lookup[t]instanceof a
                }
                ,
                t.getVelocity = function(t) {
                    var e, n = this._lookup[t], i = this.target;
                    if (n)
                        return i = (n.css ? h(i, n.p) : n.f ? i[n.p]() : i[n.p]) - n.v2,
                        "rad" !== n.type && "deg" !== n.type || (i %= e = "rad" === n.type ? 2 * Math.PI : 360) !== i % (e / 2) && (i = i < 0 ? i + e : i - e),
                        i / (d.time - n.t2);
                    throw "The velocity of " + t + " is not being tracked."
                }
                ,
                t._altProp = function(t) {
                    var e = t.substr(0, 3)
                      , e = ("get" === e ? "set" : "set" === e ? "get" : e) + t.substr(3);
                    return "function" == typeof this.target[e] ? e : t
                }
                ,
                l.getByTarget = function(t) {
                    var e = o;
                    for ((t = "string" == typeof t ? s.selector(t) : t).length && t !== window && t[0] && t[0].style && !t.nodeType && (t = t[0]); e; ) {
                        if (e.target === t)
                            return e;
                        e = e._next
                    }
                }
                ,
                l.track = function(t, e, n) {
                    var i = _(t)
                      , r = e.split(",")
                      , o = r.length;
                    for (n = (n || "").split(","),
                    i = i || new l(t); -1 < --o; )
                        i.addProp(r[o], n[o] || n[0]);
                    return i
                }
                ,
                l.untrack = function(t, e) {
                    var n = _(t)
                      , i = (e || "").split(",")
                      , r = i.length;
                    if (n) {
                        for (; -1 < --r; )
                            n.removeProp(i[r]);
                        n._firstVP && e || (n._prev ? n._prev._next = n._next : n === o && (o = n._next),
                        n._next && (n._next._prev = n._prev))
                    }
                }
                ,
                l.isTracking = function(t, e) {
                    t = _(t);
                    return !!t && (!(e || !t._firstVP) || t.isTrackingProp(e))
                }
                ,
                l
            }, !0)
        }),
        i._gsDefine && i._gsQueue.pop()(),
        function() {
            "use strict";
            function t() {
                return (i.GreenSockGlobals || i).ThrowPropsPlugin
            }
            r.exports ? (s(0),
            r.exports = t()) : (n = [s(0)],
            void 0 !== (n = "function" == typeof (e = t) ? e.apply(o, n) : e) && (r.exports = n))
        }()
    }
    .call(this, s(12))
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(2))), l = n(5), u = s(n(37)), c = s(n(25)), f = n(3), s = (r = a.default,
    o(p, r),
    Object.defineProperty(p.prototype, "onEnter", {
        get: function() {
            return this._onEnter.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(p.prototype, "onExit", {
        get: function() {
            return this._onExit.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    p.prototype.__init = function() {
        this._isInitiating = !0,
        this._filterNodes = new u.default(this,p),
        this._filterNodes.onAdded.sub(this.onNewAdded),
        this._filterNodes.onRemoved.sub(this.onRemoved),
        this.setupContainer(),
        r.prototype.__init.call(this),
        this._isInitiating = !1
    }
    ,
    p.prototype.setupContainer = function() {
        this._fakeHeight = document.createElement("div"),
        this._fakeHeight.classList.add("static-fake-height"),
        this._container = document.createElement("div"),
        this._container.classList.add("static-module"),
        this._fakeHeight.style.position = "relative",
        this._fakeHeight.style.pointerEvents = "none",
        this._container.style.position = "absolute",
        this._container.style.width = "100%",
        this._container.style.height = "auto",
        l.TweenLite.set(this._fakeHeight, {
            height: this.getElement().offsetHeight
        }),
        this.getElement().parentElement.insertBefore(this._container, this.getElement()),
        this.getElement().parentElement.insertBefore(this._fakeHeight, this.getElement()),
        this._container.appendChild(this.getElement())
    }
    ,
    p.prototype.__updateStaticPageY = function() {
        this.updateStaticPageY(),
        this._filterNodes.children.forEach(function(t) {
            t.__updateStaticPageY()
        })
    }
    ,
    p.prototype.updateViewBounds = function(e) {
        this.staticPageY < e.y + e.height && this.staticPageY + this.getHeight() > e.y ? (this.isEntered() || this.__enter(),
        this._filterNodes.children.forEach(function(t) {
            t.updateViewBounds(e)
        })) : this.isEntered() && (this.__exit(),
        this._filterNodes.children.forEach(function(t) {
            t.__exit()
        }))
    }
    ,
    p.prototype.updateStaticPageY = function() {
        this.staticPageY = 0;
        for (var t = this.getElement(); t; )
            this.staticPageY += t.offsetTop,
            t = t.parentElement
    }
    ,
    p.prototype.getHeight = function() {
        return this._height
    }
    ,
    p.prototype.getWidth = function() {
        return this._width
    }
    ,
    p.prototype.isEntered = function() {
        return this._isEntered
    }
    ,
    p.prototype.__enter = function() {
        this._isEntered = !0,
        this.showElementContainer(!1),
        this.enter(),
        this._onEnter.dispatch()
    }
    ,
    p.prototype.__exit = function() {
        this._isEntered = !1,
        this.hideElementContainer(!1),
        this.exit(),
        this._onExit.dispatch()
    }
    ,
    p.prototype.enter = function() {}
    ,
    p.prototype.exit = function() {}
    ,
    p.prototype.__updateStaticSize = function() {
        this._filterNodes.children.forEach(function(t) {
            t.__updateStaticSize()
        }),
        this.updateStaticSize()
    }
    ,
    p.prototype.updateStaticSize = function() {
        var t = window.getComputedStyle(this.getElement());
        this._height = this.getElement().offsetHeight + parseInt(t.marginTop) + parseInt(t.marginBottom),
        this._width = this.getElement().offsetWidth + parseInt(t.marginLeft) + parseInt(t.marginRight),
        l.TweenLite.set(this._fakeHeight, {
            height: this._height,
            width: this._width
        })
    }
    ,
    p.prototype.__sleep = function() {
        this._container.parentElement.appendChild(this._container.children[0]),
        this._container.parentElement.removeChild(this._container),
        this._fakeHeight.parentElement && this._fakeHeight.parentElement.removeChild(this._fakeHeight),
        r.prototype.__sleep.call(this),
        this._filterNodes.kill()
    }
    ,
    p.prototype.showElementContainer = function(t) {
        void 0 === t && (t = !0),
        this._container && (this._container.style.display = null,
        t && this._filterNodes.children.forEach(function(t) {
            t.showElementContainer()
        }))
    }
    ,
    p.prototype.hideElementContainer = function(t) {
        void 0 === t && (t = !0),
        this._container && (this._container.style.display = "none",
        t && this._filterNodes.children.forEach(function(t) {
            t.hideElementContainer()
        }))
    }
    ,
    p);
    function p() {
        var n = null !== r && r.apply(this, arguments) || this;
        return n._onEnter = new f.SignalDispatcher,
        n._onExit = new f.SignalDispatcher,
        n._isInitiating = !1,
        n.staticPageY = 0,
        n._isEntered = !1,
        n._height = -1,
        n._width = -1,
        n.onNewAdded = function(t) {
            var e = n.getRoot().getComponentByType(c.default);
            e && e.calculatePageHeight()
        }
        ,
        n.onRemoved = function(t) {
            var e = n.getRoot().getComponentByType(c.default);
            e && e.calculatePageHeight()
        }
        ,
        n
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(84),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(86),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(88),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(90),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(92),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(95),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(97),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(99),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(101),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(103),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(105),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a.prototype.build = function() {
        r.prototype.build.call(this);
        var t = this.qs(".case-header");
        t.innerHTML = t.innerHTML.replace("®", '<span class="super">®</span>')
    }
    ,
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(107),
    s(n(1))), l = s(n(11)), s = (r = a.default,
    o(u, r),
    u.prototype.awake = function() {
        r.prototype.awake.call(this),
        l.default.Instance.addAllAtags(this.getElement());
        var t = this.qs(".view-all")
          , e = this.qs(".total-cases");
        null !== t && e.classList.add("hide-on-mobile")
    }
    ,
    u.prototype.sleep = function() {
        l.default.Instance.removeAllAtags(this.getElement())
    }
    ,
    u);
    function u() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = s
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(109),
    s(n(1))), l = s(n(11)), u = s(n(4)), s = (r = a.default,
    o(c, r),
    c.prototype.build = function() {
        this._toogleButton = this.qs(".open-menu-button"),
        this._content = this.qs(".content"),
        this._openIcon = this.qs(".open-icon"),
        this._closeIcon = this.qs(".close-icon"),
        this._logoOpen = this.qs(".logo-open"),
        this._logoClosed = this.qs(".logo-closed"),
        this._content.style.pointerEvents = "none"
    }
    ,
    c.prototype.awake = function() {
        this._toogleButton.addEventListener("click", this.onToggleMenu),
        l.default.Instance.addAllAtags(this.getElement()),
        u.default.CONTENT.onNewPath.sub(this.onNewPath)
    }
    ,
    c.prototype.sleep = function() {
        this._toogleButton.removeEventListener("click", this.onToggleMenu),
        l.default.Instance.removeAllAtags(this.getElement()),
        u.default.CONTENT.onNewPath.unsub(this.onNewPath)
    }
    ,
    c.prototype.showMenu = function() {
        this._content.style.display = "block",
        this._openIcon.style.display = "none",
        this._closeIcon.style.display = "block",
        this._content.style.pointerEvents = "auto",
        this._logoClosed.style.display = "none",
        this._logoOpen.style.display = "block"
    }
    ,
    c.prototype.hideMenu = function() {
        this._content.style.display = "none",
        this._openIcon.style.display = "block",
        this._closeIcon.style.display = "none",
        this._content.style.pointerEvents = "none",
        this._logoClosed.style.display = "block",
        this._logoOpen.style.display = "none"
    }
    ,
    c);
    function c() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t.onNewPath = function() {
            t.hideMenu()
        }
        ,
        t.onToggleMenu = function() {
            "none" == window.getComputedStyle(t._content).display ? t.showMenu() : t.hideMenu()
        }
        ,
        t
    }
    e.default = s
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(111),
    s(n(1))), l = s(n(39)), u = s(n(7)), s = (r = a.default,
    o(c, r),
    c.prototype.build = function() {
        this._crazyLines = this.getComponentByType(l.default)
    }
    ,
    c.prototype.awake = function() {
        this._renderItem = u.default.Instance.add(this.checkinView, 5)
    }
    ,
    c.prototype.sleep = function() {
        null !== this._renderItem && (u.default.Instance.remove(this._renderItem),
        this._renderItem = null),
        this._crazyLines.stopRender()
    }
    ,
    c);
    function c() {
        var n = null !== r && r.apply(this, arguments) || this;
        return n._renderItem = null,
        n.checkinView = function(t, e) {
            n.viewInfo.updateRect(),
            n.viewInfo.isInView() ? n._crazyLines.startRender() : n._crazyLines.stopRender()
        }
        ,
        n
    }
    e.default = s
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(113),
    s(n(1))), l = s(n(11)), s = (r = a.default,
    o(u, r),
    u.prototype.awake = function() {
        r.prototype.awake.call(this),
        l.default.Instance.addAllAtags(this.getElement());
        var t = this.qs(".view-all")
          , e = this.qs(".total-cases");
        null !== t && e.classList.add("hide-on-mobile")
    }
    ,
    u.prototype.sleep = function() {
        l.default.Instance.removeAllAtags(this.getElement())
    }
    ,
    u);
    function u() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = s
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(115),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(117),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(119),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(121),
    s(n(1))), l = s(n(40)), s = (r = a.default,
    o(u, r),
    u.prototype.build = function() {
        r.prototype.build.call(this),
        this._container1 = this.qs(".container-1"),
        this._container2 = this.qs(".container-2"),
        this.onNewBreakpoint()
    }
    ,
    u.prototype.awake = function() {
        r.prototype.awake.call(this),
        l.default.Instance.onNewBreakpoint.sub(this.onNewBreakpoint)
    }
    ,
    u.prototype.sleep = function() {
        l.default.Instance.onNewBreakpoint.unsub(this.onNewBreakpoint)
    }
    ,
    u);
    function u() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t._container1 = null,
        t._container2 = null,
        t.onNewBreakpoint = function() {
            l.default.Instance.getBreakpointName() === l.default.Instance.mobile.getName() ? ("" === t._container1.innerHTML && (t._container2.style.marginTop = "0px"),
            "" === t._container2.innerHTML && (t._container1.style.marginTop = "0px"),
            "" === t._container1.innerHTML && (t._container1.style.display = "none"),
            "" === t._container2.innerHTML && (t._container2.style.display = "none")) : (t._container1.style.marginTop = null,
            t._container2.style.marginTop = null,
            t._container1.style.display = "block",
            t._container2.style.display = "block")
        }
        ,
        t
    }
    e.default = s
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    function i(t, e) {
        this._name = t,
        this._width = e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    i.prototype.getName = function() {
        return this._name
    }
    ,
    i.prototype.getWidth = function() {
        return this._width
    }
    ,
    e.default = i
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(124),
    s(n(41))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(126),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(128),
    s(n(42))), l = s(n(43)), u = s(n(21)), s = s(n(38)), n = (r = s.default,
    o(c, r),
    c.prototype.build = function() {
        this.moveCaseInfo(),
        r.prototype.build.call(this)
    }
    ,
    c.prototype.moveCaseInfo = function() {
        var t, e = this.getParent().getComponentByType(l.default);
        null != e && null != (e = e.getComponentByType(a.default)) && (t = this.qs(".info"),
        e = e.getElement().querySelector(".info").cloneNode(!0),
        u.default.replaceChild(e, t))
    }
    ,
    c);
    function c() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(132),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a.prototype.load = function() {}
    ,
    a.prototype.build = function() {}
    ,
    a.prototype.awake = function() {}
    ,
    a);
    function a() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t.awakeCount = 0,
        t
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(2))), l = n(5), u = s(n(13)), c = s(n(4)), s = (r = a.default,
    o(f, r),
    f.prototype.awake = function() {
        l.TweenMax.set(this.getElement(), {
            width: 0,
            backgroundColor: u.default.getRandomHex(!0)
        })
    }
    ,
    f.prototype.transitionIn = function(t) {
        l.TweenMax.to(this.getElement(), .5 + Math.random(), {
            width: .5 * c.default.RESIZE.windowWidth,
            ease: l.Expo.easeInOut,
            onComplete: function() {
                t.done()
            }
        })
    }
    ,
    f.prototype.transitionOut = function(t) {
        t.done()
    }
    ,
    f);
    function f() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(135),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(137),
    s(n(1))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(139),
    s(n(140))), l = s(n(2)), u = s(n(25)), s = (r = l.default,
    o(c, r),
    c.prototype.awake = function() {
        this.getElement().classList.add("ready"),
        this._rawText = this.getElement().innerHTML,
        this._json = JSON.parse(this._rawText),
        this.createSegments(),
        this.draw(),
        this.dispatchSizeUpdate()
    }
    ,
    c.prototype.sleep = function() {
        this._mainSegment.onToggle.unsub(this.dispatchSizeUpdate)
    }
    ,
    c.prototype.createSegments = function() {
        this._mainSegment = new a.default(this._json,"data",0,""),
        this._mainSegment.onToggle.sub(this.dispatchSizeUpdate)
    }
    ,
    c.prototype.draw = function() {
        this.getElement().innerHTML = "",
        this.getElement().appendChild(this._mainSegment.createElement())
    }
    ,
    c);
    function c() {
        var e = null !== r && r.apply(this, arguments) || this;
        return e.dispatchSizeUpdate = function() {
            var t = e.getRoot().getComponentByType(u.default);
            t && t.calculatePageHeight()
        }
        ,
        e
    }
    e.default = s
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, s, r = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    o(n(26))), l = o(n(44)), u = o(n(141)), c = o(n(2)), f = n(3), p = o(n(142)), o = (s = a.default,
    r(h, s),
    Object.defineProperty(h.prototype, "onToggle", {
        get: function() {
            return this._onToggle.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(h.prototype, "isNumericArray", {
        get: function() {
            return this._numericArray
        },
        enumerable: !1,
        configurable: !0
    }),
    h.checkIfNumericArray = function(t) {
        return Array.isArray(t)
    }
    ,
    Object.defineProperty(h.prototype, "length", {
        get: function() {
            return this._length
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(h.prototype, "type", {
        get: function() {
            return this._numericArray ? "array" : "object"
        },
        enumerable: !1,
        configurable: !0
    }),
    h.prototype.loopThroughObject = function(t) {
        for (var e in t) {
            var n;
            t.hasOwnProperty(e) && (null == (n = t[e = e]) ? this._children.push(new p.default(e,this.path,this)) : "object" == typeof n ? this._children.push(new h(n,e,this._indentationLevel + 1,this.path,this)) : "string" == typeof n ? this._children.push(new u.default(n,e,this.path,this)) : this._children.push(new l.default(n,e,this.path,this)))
        }
    }
    ,
    h.prototype.createElement = function() {
        var e = this
          , t = this.getContainer()
          , n = (t.classList.add("dump-array-element"),
        c.default.JSXCreate("div", {
            class: "dump-item dump-array"
        }, c.default.JSXCreate("div", {
            class: "name"
        }, this.name), c.default.JSXCreate("div", {
            class: "type"
        }, c.default.JSXCreate("p", null, this.type), c.default.JSXCreate("div", {
            class: "length"
        }, this.length.toString()))))
          , n = (n.addEventListener("mouseup", this.toggleFold),
        t.appendChild(n),
        this._childContainer = c.default.JSXCreate("div", {
            class: "children-container"
        }),
        this._childContainer.style.marginLeft = this._indentationLevel + 10 + "px",
        t.appendChild(this._childContainer),
        c.default.JSXCreate("div", {
            class: "array-indent-line"
        }));
        return this._childContainer.appendChild(n),
        this._children.forEach(function(t) {
            e._childContainer.appendChild(t.createElement())
        }),
        t
    }
    ,
    h);
    function h(t, e, n, i, r) {
        void 0 === n && (n = 0);
        var o = s.call(this, e, i, r) || this;
        return o._onToggle = new f.SignalDispatcher,
        o._children = Array(),
        o._indentationLevel = 0,
        o._open = !0,
        o._numericArray = !0,
        o.toggleFold = function() {
            o._open = !o._open,
            o.copyToClipboard(o.path),
            o._open ? o._childContainer.classList.remove("closed") : o._childContainer.classList.add("closed"),
            o._onToggle.dispatch()
        }
        ,
        o._length = o.findLength(t),
        o._indentationLevel = n,
        o._numericArray = h.checkIfNumericArray(t),
        o.loopThroughObject(t),
        o
    }
    e.default = o
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(44))), a = n(27), n = (r = s.default,
    o(l, r),
    l.prototype.checkIfHasTrailingWhitespace = function(t) {
        return null !== t.match(/\s+$/)
    }
    ,
    l.prototype.createElement = function() {
        return this.checkIfHasTrailingWhitespace(this.value) && this.addWarning("Trailing whitespace", a.Severity.severe),
        r.prototype.createElement.call(this)
    }
    ,
    l);
    function l() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(26))), l = n(27), u = s(n(2)), s = (r = a.default,
    o(c, r),
    c.prototype.createElement = function() {
        this.getContainer().classList.add("dump-variable-element");
        var t = u.default.JSXCreate("div", {
            class: "dump-item dump-item--null"
        }, u.default.JSXCreate("div", {
            class: "name"
        }, this.name), u.default.JSXCreate("div", {
            class: "type"
        }, u.default.JSXCreate("p", null, "null")));
        return this.getContainer().appendChild(t),
        t.classList.add("dump-" + this.type),
        this.addWarning("null", l.Severity.severe),
        this.getContainer()
    }
    ,
    c);
    function c(t, e, n) {
        t = r.call(this, t, e, n) || this;
        return t.length = 0,
        t.type = "null",
        t
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(144),
    s(n(2))), l = s(n(4)), s = (r = a.default,
    o(u, r),
    u.prototype.awake = function() {
        document.addEventListener("keyup", this.onKeyUp),
        document.addEventListener("keydown", this.onKeyDown),
        this._columns = [].slice.call(this.getElement().querySelectorAll(".columns")),
        "true" == window.localStorage.getItem("DebugGridModule_visible") && (this._visible = !0,
        this.updateVisibility())
    }
    ,
    u.sortBreakpoints = function(t, e) {
        return parseInt(t.dataset.size) < parseInt(e.dataset.size) ? 1 : parseInt(t.dataset.size) > parseInt(e.dataset.size) ? -1 : 0
    }
    ,
    u.prototype.updateVisibility = function() {
        this._visible ? (this.getElement().classList.add("DebugGridModule--visible"),
        this.onResize(),
        document.addEventListener("mousemove", this.mouseMove),
        l.default.RESIZE.onResize.sub(this.onResize)) : (this.getElement().classList.remove("DebugGridModule--visible"),
        this.contract(),
        document.removeEventListener("mousemove", this.mouseMove),
        l.default.RESIZE.onResize.unsub(this.onResize))
    }
    ,
    u.prototype.expand = function() {}
    ,
    u.prototype.contract = function() {}
    ,
    u.prototype.sleep = function() {
        document.removeEventListener("keyup", this.onKeyUp),
        document.removeEventListener("keydown", this.onKeyDown),
        document.removeEventListener("mousemove", this.mouseMove),
        l.default.RESIZE.onResize.unsub(this.onResize)
    }
    ,
    u);
    function u() {
        var n = null !== r && r.apply(this, arguments) || this;
        return n._visible = !1,
        n._mousePos = {
            x: 0,
            y: 0
        },
        n.onResize = function() {
            n._columns.forEach(function(t) {
                t.classList.add("columns--hidden")
            });
            for (var t = (t = n._columns.filter(function(t) {
                return parseInt(t.dataset.size) <= l.default.RESIZE.windowWidth
            })).sort(u.sortBreakpoints), e = 0; e < t.length; e++)
                0 === e ? t[e].classList.remove("columns--hidden") : t[e].classList.add("columns--hidden");
            n._activeLayout = t[0]
        }
        ,
        n.onKeyDown = function(t) {
            "f" === t.key && n._visible && n.expand()
        }
        ,
        n.onKeyUp = function(t) {
            "g" === t.key ? (n._visible = !n._visible,
            window.localStorage.setItem("DebugGridModule_visible", 1 == n._visible ? "true" : "false"),
            n.updateVisibility()) : "f" === t.key && n._visible && n.contract()
        }
        ,
        n.mouseMove = function(t) {
            n._mousePos.x = t.screenX,
            n._mousePos.y = t.screenY
        }
        ,
        n
    }
    e.default = s
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(146),
    s(n(2))), l = s(n(4)), u = s(n(1)), s = (r = a.default,
    o(c, r),
    c.prototype.awake = function() {
        document.addEventListener("keydown", this.onKeyDown),
        l.default.RESIZE.onResize.sub(this.onResize),
        this._currentTemplate = l.default.CONTENT.getCurrentTemplate(),
        l.default.CONTENT.onNewTemplate.sub(this.onNewTemplate),
        "true" == window.localStorage.getItem("DebugOverlayModule_visible") && this.showPreviews()
    }
    ,
    c.prototype.sleep = function() {
        document.removeEventListener("keydown", this.onKeyDown),
        l.default.RESIZE.onResize.unsub(this.onResize),
        l.default.CONTENT.onNewTemplate.unsub(this.onNewTemplate)
    }
    ,
    c.prototype.getActiveBreakpoint = function() {
        var e = 0
          , t = (this._layouts.forEach(function(t) {
            l.default.RESIZE.windowWidth - 100 >= t && (e += 1)
        }),
        this._layouts.length - 1);
        return t < e && (e = t),
        this._layouts[e]
    }
    ,
    c.prototype.showPreviews = function() {
        if (this._currentTemplate) {
            this._visible = !0;
            var t = this.getActiveBreakpoint();
            if (t != this._activeBreakpoint) {
                this._activeBreakpoint = t,
                this.revertToOriginalSize(),
                this.removePreviews(),
                this._images = [],
                this._htmlElements = [],
                this._components = [];
                for (var e = this._currentTemplate.getComponentsByType(u.default, !1), n = e.length, i = 0; i < n; i += 1) {
                    var r = e[i]
                      , o = (this._components.push(r),
                    document.createElement("img"));
                    o.src = "core/modules/DebugOverlayModule/Previews/" + r.toString().split(", ")[0] + "_" + this._activeBreakpoint + "px.png?u=" + Math.random(),
                    o.style.zIndex = "999999",
                    o.style.position = "absolute",
                    o.style.top = "0px",
                    o.style.pointerEvents = "none",
                    o.width = this._activeBreakpoint,
                    o.style.left = "0px",
                    o.style.opacity = ".5",
                    o.style.borderBottom = "1px dashed red",
                    o.onerror = this.onError,
                    r.getElement().appendChild(o),
                    this._images.push(o),
                    this._htmlElements.push(r.getElement()),
                    r.getElement().style.maxHeight = "none",
                    r.getElement().querySelectorAll("*").forEach(function(t) {
                        t instanceof HTMLElement && (t.style.maxHeight = "none")
                    })
                }
                this._resizeItems = [];
                for (var s = this._currentTemplate.getElement().children, a = s.length, i = 0; i < a; i += 1) {
                    var l = s[i];
                    this._resizeItems.push(l),
                    l.style.width = this._activeBreakpoint + "px"
                }
                t = document.body.querySelector(".DebugGridModule");
                t && (t.style.width = this._activeBreakpoint + "px")
            }
        }
    }
    ,
    c.prototype.hidePreviews = function() {
        this._visible = !1,
        this.revertToOriginalSize(),
        this.removePreviews(),
        this._activeBreakpoint = -1
    }
    ,
    c.prototype.revertToOriginalSize = function() {
        if (null != this._resizeItems) {
            for (var t = this._resizeItems.length, e = 0; e < t; e += 1)
                (n = this._resizeItems[e]).style.width = null;
            this._resizeItems = null;
            for (var n, i = this._htmlElements.length, e = 0; e < i; e += 1)
                (n = this._htmlElements[e]).style.maxHeight = null,
                n.querySelectorAll("*").forEach(function(t) {
                    t instanceof HTMLElement && (t.style.maxHeight = null)
                });
            var r = document.body.querySelector(".DebugGridModule");
            r && (r.style.width = null),
            this._htmlElements = null
        }
    }
    ,
    c.prototype.removePreviews = function() {
        if (null != this._images) {
            for (var t = this._images.length, e = 0; e < t; e += 1) {
                var n = this._images[e];
                n.parentNode.removeChild(n)
            }
            this._images = null
        }
    }
    ,
    c);
    function c() {
        var n = null !== r && r.apply(this, arguments) || this;
        return n._visible = !1,
        n._images = null,
        n._layouts = [375, 1600],
        n.onResize = function() {
            n._visible && n.showPreviews()
        }
        ,
        n.onKeyDown = function(t) {
            "p" === t.key && (n._visible ? n.hidePreviews() : n.showPreviews(),
            window.localStorage.setItem("DebugOverlayModule_visible", 1 == n._visible ? "true" : "false"))
        }
        ,
        n.onNewTemplate = function(t) {
            var e = !1;
            n._currentTemplate || (e = !0),
            n._currentTemplate = t,
            e && "true" == window.localStorage.getItem("DebugOverlayModule_visible") && n.showPreviews()
        }
        ,
        n.onError = function(t) {
            t.currentTarget
        }
        ,
        n
    }
    e.default = s
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(20))), n = (r = s.default,
    o(a, r),
    a.prototype.build = function() {
        this._format = this.params.plain.format,
        null != this._format && "" != this._format || (this._format = "[CURRENT]/[TOTAL]"),
        r.prototype.build.call(this)
    }
    ,
    a.prototype.updateToPage = function() {
        r.prototype.updateToPage.call(this);
        var t = (t = this._format.replace("[CURRENT]", (this.slideshow.getCurrentIndex() + 1).toString())).replace("[TOTAL]", this.slideshow.getNumOfSlides().toString());
        this.getElement().innerText = t
    }
    ,
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {
    "use strict";
    function i() {}
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    i.isEmail = function(t) {
        return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(t)
    }
    ,
    i.URLDecode = function(t) {
        for (var e = t.split("&"), n = e.length, i = 0; i < n; i += 1) {
            var r = e[i].split("=");
            (void 0)[r[0]] = r[1]
        }
    }
    ,
    i.URLEncode = function(t) {
        var e, n = [];
        for (e in t)
            n.push(e + "=" + t[e]);
        return n.join("&")
    }
    ,
    i.getAlphaNumeric = function(t) {
        return t.replace(/[^0-9A-Z,.]+/gi, "")
    }
    ,
    e.default = i
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(8))), n = (r = s.default,
    o(a, r),
    a.prototype.backgroundChange = function(t) {
        this.getElement().style.backgroundColor = t
    }
    ,
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(8))), n = (r = s.default,
    o(a, r),
    a.prototype.foregroundChange = function(t) {
        this.getElement().style.color = t
    }
    ,
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(8))), l = s(n(13)), s = (r = a.default,
    o(u, r),
    u.prototype.foregroundChange = function(t) {
        var e = window.getComputedStyle(this.getElement());
        this.getElement().style.borderBottom = "1px solid " + l.default.hexToRGB(t, this.getOpacityFromBorderStyle(e.borderBottom))
    }
    ,
    u);
    function u() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(8))), l = s(n(13)), s = (r = a.default,
    o(u, r),
    u.prototype.foregroundChange = function(t) {
        var e = window.getComputedStyle(this.getElement());
        this.getElement().style.backgroundColor = l.default.hexToRGB(t, this.getOpacityFromBorderStyle(e.backgroundColor))
    }
    ,
    u);
    function u() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(8))), l = s(n(13)), s = (r = a.default,
    o(u, r),
    u.prototype.foregroundChange = function(t) {
        var e = window.getComputedStyle(this.getElement());
        this.getElement().style.borderTop = "1px solid " + l.default.hexToRGB(t, this.getOpacityFromBorderStyle(e.borderTop))
    }
    ,
    u);
    function u() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(8))), n = (r = s.default,
    o(a, r),
    a.prototype.foregroundChange = function(t) {
        this.getElement().style.fill = t
    }
    ,
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(8))), n = (r = s.default,
    o(a, r),
    a.prototype.foregroundChange = function(t) {
        this.getElement().style.stroke = t
    }
    ,
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(2))), l = s(n(11)), s = (r = a.default,
    o(u, r),
    u.prototype.awake = function() {
        r.prototype.awake.call(this),
        this.findTarget(),
        null !== this._linkTarget && this.getElement().addEventListener("click", this.onClick)
    }
    ,
    u.prototype.findTarget = function() {
        for (var t = this.getElement(), e = "a", n = (e = this.params.plain.linkpath ? this.params.plain.linkpath : e).split("/"); 0 < n.length; )
            t = ".." === n[0] ? t.parentElement : t.querySelector(n[0]),
            n.splice(0, 1);
        this._linkTarget = t
    }
    ,
    u.prototype.getHref = function() {
        return this._linkTarget instanceof HTMLAnchorElement ? this._linkTarget.href : this._linkTarget instanceof HTMLElement ? this._linkTarget.innerText : null
    }
    ,
    u.prototype.sleep = function() {
        r.prototype.sleep.call(this),
        this.getElement().removeEventListener("click", this.onClick)
    }
    ,
    u);
    function u() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t._linkTarget = null,
        t._href = null,
        t.onClick = function() {
            l.default.Instance.handleLinkClick(t.getHref())
        }
        ,
        t
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(18))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(20))), n = (r = s.default,
    o(a, r),
    a.prototype.build = function() {
        r.prototype.build.call(this)
    }
    ,
    a.prototype.updateToPage = function() {
        r.prototype.updateToPage.call(this);
        var t = this.slideshow.getCurrentSlide().querySelector("." + this.params.plain.copytargetclass);
        this.params.plain.copytargetattribute ? "href" === this.params.plain.copytargetattribute ? this.getElement().innerText = t.href : this.getElement().innerText = t.getAttribute(this.params.plain.copytargetattribute) : this.getElement().innerText = t.innerText
    }
    ,
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(8))), n = (r = s.default,
    o(a, r),
    a.prototype.foregroundChange = function(t) {
        this.getElement().getContext("2d").strokeStyle = t
    }
    ,
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(2))), l = s(n(6)), u = s(n(35)), s = (r = a.default,
    o(c, r),
    c.prototype.build = function() {
        r.prototype.build.call(this),
        this._animation = new u.default("preloader"),
        this.getElement().appendChild(this._animation.getElement())
    }
    ,
    c.prototype.awake = function() {
        r.prototype.awake.call(this),
        l.default.Instance.onForegroundColorChange.sub(this.onForegroundChange),
        this.onForegroundChange(),
        this._animation.activate(null)
    }
    ,
    c.prototype.sleep = function() {
        l.default.Instance.onForegroundColorChange.unsub(this.onForegroundChange),
        this._animation.deactivate(),
        r.prototype.sleep.call(this)
    }
    ,
    c);
    function c() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t.onForegroundChange = function() {
            t._animation.setColor(l.default.Instance.foregroundColor)
        }
        ,
        t
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(2))), l = s(n(4)), s = (r = a.default,
    o(u, r),
    u.prototype.awake = function() {
        r.prototype.awake.call(this),
        this.getElement().style.width = "100%",
        this.resizeText(),
        l.default.RESIZE.onResize.sub(this.onResize)
    }
    ,
    u.prototype.sleep = function() {
        r.prototype.sleep.call(this),
        l.default.RESIZE.onResize.unsub(this.onResize)
    }
    ,
    u.prototype.resizeText = function() {
        this.getElement().style.fontSize = "0px";
        for (var t = 1; t < 500; )
            if (t += 1,
            this.getElement().style.fontSize = t + "px",
            1 < this.getNumberOfLines(this.getElement())) {
                --t,
                this.getElement().style.fontSize = t + "px";
                break
            }
    }
    ,
    u.prototype.getNumberOfLines = function(t) {
        var e = t.offsetHeight
          , t = Number.parseFloat(window.getComputedStyle(t).lineHeight);
        return Math.round(e / t)
    }
    ,
    u);
    function u() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t.onResize = function() {
            t.resizeText()
        }
        ,
        t
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
      , r = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    i(n(32)))
      , o = i(n(7));
    function s() {
        var p = this;
        this._xPos = 0,
        this._yPos = 0,
        this._targets = [],
        this._targetsRaw = [],
        this._target = null,
        this._renderItem = null,
        this.onMouseMove = function(t) {
            p._xPos = t.clientX,
            p._yPos = t.clientY
        }
        ,
        this.render = function(t, e) {
            for (var n = [], i = p._targets.length, r = null, o = p._target, s = 0; s < i; s += 1) {
                var a, l, u, c = p._targets[s], f = c.target;
                f && (a = f.getBoundingClientRect(),
                l = p._xPos - a.left,
                u = p._yPos - a.top,
                0 < l && 0 < u && l < a.width && u < a.height && window.getComputedStyle(f).display && n.push(c))
            }
            0 < (i = n.length) && (r = (n = 1 < i ? n.sort(function(t, e) {
                return e.customSortIndex - t.customSortIndex
            }) : n)[0]),
            p._target = r,
            p._target !== o && (null !== o && o.mouseOutCallback(),
            null !== p._target && p._target.mouseOverCallback())
        }
        ,
        r.default.isMobile() || r.default.isTablet() || (document.addEventListener("mousemove", this.onMouseMove),
        document.addEventListener("mouseenter", this.onMouseMove),
        this._renderItem = o.default.Instance.add(this.render, 10),
        this.render(0, 0))
    }
    Object.defineProperty(s, "Instance", {
        get: function() {
            return null == this._instance && (this._instance = new s),
            this._instance
        },
        enumerable: !1,
        configurable: !0
    }),
    s.prototype.add = function(t, e, n, i) {
        this._targetsRaw.push(t),
        this._targets.push(new a(t,e,n,i))
    }
    ,
    s.prototype.remove = function(t) {
        t = this._targetsRaw.indexOf(t);
        -1 !== t && (this._targetsRaw.splice(t, 1),
        this._targets.splice(t, 1))
    }
    ,
    e.default = s;
    var a = function(t, e, n, i) {
        this.target = t,
        this.mouseOverCallback = e,
        this.mouseOutCallback = n,
        this.customSortIndex = i
    }
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(164),
    s(n(23))), n = (r = s.default,
    o(a, r),
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    var i, o, r = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(30),
    s(n(7))), s = s(n(1)), l = n(3), n = (o = s.default,
    r(u, o),
    Object.defineProperty(u.prototype, "onEffectDone", {
        get: function() {
            return this._onEffectDone.asEvent()
        },
        enumerable: !1,
        configurable: !0
    }),
    u.prototype.build = function() {
        this._img = this.getElement(),
        this._container = document.createElement("div"),
        this._container.style.position = "absolute",
        this._container.style.top = "0px",
        this._img.parentNode.appendChild(this._container)
    }
    ,
    u.prototype.awake = function() {
        o.prototype.awake.call(this),
        this._img.addEventListener("load", this.onImageLoaded)
    }
    ,
    u.prototype.sleep = function() {
        this._img.removeEventListener("load", this.onImageLoaded),
        null !== this._animateInDelay && (clearTimeout(this._animateInDelay),
        this._animateInDelay = null),
        null !== this._renderItem && (a.default.Instance.remove(this._renderItem),
        this._renderItem = null),
        null !== this._renderItemCheckInView && (a.default.Instance.remove(this._renderItemCheckInView),
        this._renderItemCheckInView = null)
    }
    ,
    Object.defineProperty(u.prototype, "blockSizeX", {
        get: function() {
            return this._blockSizeX
        },
        set: function(t) {
            this._blockSizeX = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(u.prototype, "blockSizeY", {
        get: function() {
            return this._blockSizeY
        },
        set: function(t) {
            this._blockSizeY = t
        },
        enumerable: !1,
        configurable: !0
    }),
    u.prototype.pixelate = function() {
        var t = Math.round(this._canvas.width / this.blockSizeX)
          , e = Math.round(this._canvas.height / this.blockSizeY);
        this._ctx.drawImage(this._img, 0, 0, t, e),
        this._ctx.drawImage(this._canvas, 0, 0, t, e, 0, 0, this._canvas.width, this._canvas.height)
    }
    ,
    u.prototype.isEffectDone = function() {
        return this._effectDone
    }
    ,
    u);
    function u() {
        var r = null !== o && o.apply(this, arguments) || this;
        return r._blockSizeX = 1,
        r._blockSizeY = 1,
        r._renderItem = null,
        r._renderItemCheckInView = null,
        r._animateInDelay = null,
        r._effectDone = !1,
        r._onEffectDone = new l.SignalDispatcher,
        r.onImageLoaded = function() {
            r._img.removeEventListener("load", r.onImageLoaded),
            r._img.style.opacity = "1"
        }
        ,
        r.shouldAnimateIn = function(t, e) {
            r.viewInfo.updateRect(),
            r.viewInfo.isInView() && (r._img.style.opacity = "1",
            a.default.Instance.remove(r._renderItemCheckInView),
            r._renderItemCheckInView = null,
            r._animateInDelay = setTimeout(r.startAnimation, 50 * Math.random()))
        }
        ,
        r.startAnimation = function() {
            r._renderItem = a.default.Instance.add(r.render, 8)
        }
        ,
        r.render = function(t, e) {
            var n, i;
            r._canvas.width = r._img.width,
            r._canvas.height = r._img.height,
            r._ctx.imageSmoothingEnabled = !1,
            1 < r.blockSizeX || 1 < r.blockSizeY ? (n = .5 * r.blockSizeX,
            r.blockSizeX = n = n < 1 ? 1 : n,
            (i = .5 * r.blockSizeY) < 1 && (i = 1),
            r.blockSizeX = n,
            r.blockSizeY = i,
            r.pixelate()) : (a.default.Instance.remove(r._renderItem),
            r._canvas.style.display = "none",
            r._onEffectDone.dispatch(),
            r._effectDone = !0)
        }
        ,
        r.onComplete = function() {
            r._canvas.style.display = "none"
        }
        ,
        r
    }
    e.default = n
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(2))), l = s(n(40)), u = s(n(14)), s = (r = a.default,
    o(c, r),
    c.prototype.awake = function() {
        r.prototype.awake.call(this),
        u.default.Instance.onResize.sub(this.onResize),
        l.default.Instance.onNewBreakpoint.sub(this.onResize);
        var t = l.default.Instance.getBreakPointIndex()
          , t = this.getOffset(t);
        this.resize(t)
    }
    ,
    c.prototype.sleep = function() {
        r.prototype.sleep.call(this),
        u.default.Instance.onResize.unsub(this.onResize),
        l.default.Instance.onNewBreakpoint.unsub(this.onResize)
    }
    ,
    c.prototype.resize = function(t) {
        this.getElement().style.height = window.innerHeight - t + "px"
    }
    ,
    c.prototype.shouldResize = function(t) {
        if (null === this._parsedShouldResize) {
            this._parsedShouldResize = new Array;
            var e = this.params.plain.shouldresize;
            if (e)
                for (var n = e.split(","), i = n.length, r = 0; r < i; r += 1)
                    this._parsedShouldResize[r] = "true" === n[r]
        }
        e = this._parsedShouldResize.length;
        return 0 === e || (1 === e ? this._parsedShouldResize[0] : !(t < e) || this._parsedShouldResize[t])
    }
    ,
    c.prototype.getOffset = function(t) {
        if (null === this._parsedInnerHeightOffset) {
            this._parsedInnerHeightOffset = new Array;
            var e = this.params.plain.innerheightoffset;
            if (e)
                for (var n = e.split(","), i = n.length, r = 0; r < i; r += 1)
                    this._parsedInnerHeightOffset[r] = parseFloat(n[r])
        }
        e = this._parsedInnerHeightOffset.length;
        return 0 === e ? 0 : 1 === e ? this._parsedInnerHeightOffset[0] : t < e ? this._parsedInnerHeightOffset[t] : 0
    }
    ,
    c);
    function c() {
        var e = null !== r && r.apply(this, arguments) || this;
        return e._parsedInnerHeightOffset = null,
        e._parsedShouldResize = null,
        e.onResize = function() {
            var t = l.default.Instance.getBreakPointIndex();
            e.shouldResize(t) && (t = e.getOffset(t),
            e.resize(t))
        }
        ,
        e
    }
    e.default = s
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , s = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(46))), n = (r = s.default,
    o(a, r),
    a.prototype.getCursorName = function() {
        return "link"
    }
    ,
    a.prototype.getSortIndex = function() {
        return 1
    }
    ,
    a);
    function a() {
        return null !== r && r.apply(this, arguments) || this
    }
    e.default = n
}
, function(t, e, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    , a = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    s(n(1))), l = s(n(7)), u = s(n(169)), s = (r = a.default,
    o(c, r),
    c.prototype.build = function() {
        this._playButton = this.qs(".play-button"),
        this._playIcon = this.qs(".play-icon"),
        this._pauseIcon = this.qs(".pause-icon"),
        this._placeholder = this.qs(".placeholder"),
        this._playbackTime = this.qs(".playback-time"),
        this._videoContainer = this.qs(".container"),
        this._videoUI = this.params.plain.videoui,
        this._videoUI || (this._videoUI = "default"),
        this._autoPlay = "true" === this.params.plain.autoplay,
        this._id = this.params.plain.id
    }
    ,
    c.prototype.awake = function() {
        this._videoReadyForPlay = !1,
        this.hideAllUI(),
        this._renderItem = l.default.Instance.add(this.render, 5)
    }
    ,
    c.prototype.videoReadyForPlay = function() {
        this._videoReadyForPlay = !0,
        0 !== this._restoreTime && (this._video.setCurrentTime(this._restoreTime),
        this._restoreTime = 0),
        "none" !== this._videoUI && this._playButton.addEventListener("click", this.onPlay),
        this.updateUIToState()
    }
    ,
    c.prototype.sleep = function() {
        null !== this._renderItem && (l.default.Instance.remove(this._renderItem),
        this._renderItem = null),
        null !== this._video && (this.unloadVideo(!0),
        this._video = null)
    }
    ,
    c.prototype.isReadyForPlay = function() {
        return !0
    }
    ,
    c.prototype.Play = function() {
        var e = this;
        !0 !== this._isPlaying && (this._isPlaying = !0,
        0 !== this._restoreTime && (this._video.setCurrentTime(this._restoreTime),
        this._restoreTime = 0),
        this._video.play().then(function(t) {
            e.updateUIToState()
        }).catch(function(t) {}))
    }
    ,
    c.prototype.Pause = function() {
        !1 !== this._isPlaying && (this._isPlaying = !1,
        this._video.pause(),
        this.updateUIToState())
    }
    ,
    c.prototype.loadVideo = function() {
        var e = this;
        !0 !== this._isVideoLoaded && (this._isVideoLoaded = !0,
        this._video = new u.default(this._videoContainer,{
            autoplay: this._autoPlay,
            url: "https://vimeo.com/video/" + this._id,
            controls: !1,
            width: 200,
            height: 200,
            background: this._autoPlay,
            autopause: !1,
            dnt: !0,
            title: !1
        }),
        this._video.getDuration().then(function(t) {
            e._duration = t
        }).catch(function(t) {}),
        this._video.ready().then(function(t) {
            e._isPlaying = e._autoPlay,
            e.videoReadyForPlay()
        }).catch(function(t) {}))
    }
    ,
    c.prototype.unloadVideo = function(t) {
        !0 !== (t = void 0 === t ? !1 : t) && !1 === this._isVideoLoaded || (!0 === this._isPlaying && (this._restoreTime = this._currentTime),
        null != (t = this._video) && t.destroy().catch(function(t) {}),
        this._isVideoLoaded = !1,
        this._isPlaying = !1,
        this._videoReadyForPlay = !1,
        "none" !== this._videoUI && this._playButton.removeEventListener("click", this.onPlay),
        this.hideAllUI())
    }
    ,
    c.prototype.updateUIToState = function() {
        var t;
        null !== this._hideTimeout && (clearTimeout(this._hideTimeout),
        this._hideTimeout = null),
        !0 === this._isPlaying ? (null !== this._placeholder && (this._hideTimeout = setTimeout(this.hidePlaceholder, 400)),
        null !== (t = this._videoContainer.querySelector("iframe")) && (t.style.visibility = "visible"),
        "default" === this._videoUI ? (this._pauseIcon.style.display = "block",
        this._playIcon.style.display = "none",
        this._playbackTime.style.display = "block") : "default" === this._videoUI && this.hideAllUI()) : (null !== this._placeholder && (this._placeholder.style.visibility = "visible"),
        null !== (t = this._videoContainer.querySelector("iframe")) && (t.style.visibility = "hidden"),
        "default" === this._videoUI ? (this._pauseIcon.style.display = "none",
        this._playIcon.style.display = "block",
        this._playbackTime.style.display = "block") : "default" === this._videoUI && this.hideAllUI())
    }
    ,
    c.prototype.hideAllUI = function() {
        this._pauseIcon.style.display = "none",
        this._playIcon.style.display = "none",
        this._playbackTime.style.display = "none",
        null !== this._placeholder && (this._placeholder.style.visibility = "visible")
    }
    ,
    c);
    function c() {
        var n = null !== r && r.apply(this, arguments) || this;
        return n._video = null,
        n._isPlaying = !1,
        n._wasInteractedWith = !1,
        n._renderItem = null,
        n._videoReadyForPlay = !1,
        n._autoPlay = !0,
        n._isVideoLoaded = !1,
        n._restoreTime = 0,
        n._timeInView = 0,
        n._currentTime = 0,
        n._duration = 0,
        n._hideTimeout = null,
        n.render = function(t, e) {
            n.viewInfo.updateRect(),
            !0 === n.viewInfo.isInView() && null !== n.getElement().offsetParent ? (n._timeInView += t,
            .1 < n._timeInView && n.loadVideo()) : (n._timeInView = 0,
            n.unloadVideo()),
            n._video && (n._video.getCurrentTime().then(function(t) {
                n._currentTime = t;
                var t = n._duration - n._currentTime
                  , e = (isNaN(t) && (t = 0),
                new Date(null));
                e.setSeconds(t),
                n._playbackTime.innerText = e.toISOString().substr(14, 5)
            }).catch(function(t) {}),
            n._video.getEnded().then(function(t) {
                !0 === t && (n._isPlaying = !1,
                n.updateUIToState())
            }).catch(function(t) {}))
        }
        ,
        n.onPlay = function() {
            n._wasInteractedWith = !0,
            n._isPlaying ? n.Pause() : n.Play()
        }
        ,
        n.hidePlaceholder = function() {
            n._placeholder.style.visibility = "hidden"
        }
        ,
        n
    }
    e.default = s
}
, function(t, N, e) {
    "use strict";
    e.r(N),
    function(t, v) {
        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        var e = void 0 !== t && "[object global]" === {}.toString.call(t);
        function o(t, e) {
            return 0 === t.indexOf(e.toLowerCase()) ? t : "".concat(e.toLowerCase()).concat(t.substr(0, 1).toUpperCase()).concat(t.substr(1))
        }
        function l(t) {
            return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(t)
        }
        function a(t) {
            var e, t = 0 < arguments.length && void 0 !== t ? t : {}, n = t.id, t = t.url, t = n || t;
            if (!t)
                throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
            if (e = t,
            !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e)
                return "https://vimeo.com/".concat(t);
            if (l(t))
                return t.replace("http:", "https:");
            if (n)
                throw new TypeError("“".concat(n, "” is not a valid video id."));
            throw new TypeError("“".concat(t, "” is not a vimeo.com url."))
        }
        var n = void 0 !== Array.prototype.indexOf
          , r = "undefined" != typeof window && void 0 !== window.postMessage;
        if (!(e || n && r))
            throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
        var s, u, c, f = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
        function p() {
            if (void 0 === this)
                throw new TypeError("Constructor WeakMap requires 'new'");
            if (c(this, "_id", "_WeakMap_" + d() + "." + d()),
            0 < arguments.length)
                throw new TypeError("WeakMap iterable is not supported")
        }
        function h(t, e) {
            if (!_(t) || !s.call(t, "_id"))
                throw new TypeError(e + " method called on incompatible receiver " + typeof t)
        }
        function d() {
            return Math.random().toString().substring(2)
        }
        function _(t) {
            return Object(t) === t
        }
        (n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : f).WeakMap || (s = Object.prototype.hasOwnProperty,
        u = Object.defineProperty && function() {
            try {
                return 1 === Object.defineProperty({}, "x", {
                    value: 1
                }).x
            } catch (t) {}
        }(),
        n.WeakMap = ((c = function(t, e, n) {
            u ? Object.defineProperty(t, e, {
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
        }
        )(p.prototype, "delete", function(t) {
            var e;
            return h(this, "delete"),
            !!_(t) && (!(!(e = t[this._id]) || e[0] !== t) && (delete t[this._id],
            !0))
        }),
        c(p.prototype, "get", function(t) {
            var e;
            return h(this, "get"),
            _(t) && (e = t[this._id]) && e[0] === t ? e[1] : void 0
        }),
        c(p.prototype, "has", function(t) {
            var e;
            return h(this, "has"),
            !!_(t) && !(!(e = t[this._id]) || e[0] !== t)
        }),
        c(p.prototype, "set", function(t, e) {
            var n;
            if (h(this, "set"),
            _(t))
                return (n = t[this._id]) && n[0] === t ? n[1] = e : c(t, this._id, [t, e]),
                this;
            throw new TypeError("Invalid value used as weak map key")
        }),
        c(p, "_polyfill", !0),
        p));
        (function(t) {
            var e, n, i;
            i = function() {
                var e, n, i, r, o, t = Object.prototype.toString, s = void 0 !== v ? function(t) {
                    return v(t)
                }
                : setTimeout;
                try {
                    Object.defineProperty({}, "x", {}),
                    e = function(t, e, n, i) {
                        return Object.defineProperty(t, e, {
                            value: n,
                            writable: !0,
                            configurable: !1 !== i
                        })
                    }
                } catch (t) {
                    e = function(t, e, n) {
                        return t[e] = n,
                        t
                    }
                }
                function a(t, e) {
                    this.fn = t,
                    this.self = e,
                    this.next = void 0
                }
                function l(t, e) {
                    g.add(t, e),
                    n = n || s(g.drain)
                }
                function u(t) {
                    var e, n = typeof t;
                    return "function" == typeof (e = null == t || "object" != n && "function" != n ? e : t.then) && e
                }
                function c() {
                    for (var t = 0; t < this.chain.length; t++) {
                        n = e = o = r = i = void 0;
                        var e, n, i = this, r = 1 === this.state ? this.chain[t].success : this.chain[t].failure, o = this.chain[t];
                        try {
                            !1 === r ? o.reject(i.msg) : (e = !0 === r ? i.msg : r.call(void 0, i.msg)) === o.promise ? o.reject(TypeError("Promise-chain cycle")) : (n = u(e)) ? n.call(e, o.resolve, o.reject) : o.resolve(e)
                        } catch (t) {
                            o.reject(t)
                        }
                    }
                    this.chain.length = 0
                }
                function f(t) {
                    var n, i = this;
                    if (!i.triggered) {
                        i.triggered = !0,
                        i.def && (i = i.def);
                        try {
                            (n = u(t)) ? l(function() {
                                var e = new d(i);
                                try {
                                    n.call(t, function() {
                                        f.apply(e, arguments)
                                    }, function() {
                                        p.apply(e, arguments)
                                    })
                                } catch (t) {
                                    p.call(e, t)
                                }
                            }) : (i.msg = t,
                            i.state = 1,
                            0 < i.chain.length && l(c, i))
                        } catch (t) {
                            p.call(new d(i), t)
                        }
                    }
                }
                function p(t) {
                    var e = this;
                    e.triggered || (e.triggered = !0,
                    (e = e.def ? e.def : e).msg = t,
                    e.state = 2,
                    0 < e.chain.length && l(c, e))
                }
                function h(t, n, i, r) {
                    for (var e = 0; e < n.length; e++)
                        !function(e) {
                            t.resolve(n[e]).then(function(t) {
                                i(e, t)
                            }, r)
                        }(e)
                }
                function d(t) {
                    this.def = t,
                    this.triggered = !1
                }
                function _(t) {
                    this.promise = t,
                    this.state = 0,
                    this.triggered = !1,
                    this.chain = [],
                    this.msg = void 0
                }
                function m(t) {
                    if ("function" != typeof t)
                        throw TypeError("Not a function");
                    if (0 !== this.__NPO__)
                        throw TypeError("Not a promise");
                    this.__NPO__ = 1;
                    var i = new _(this);
                    this.then = function(t, e) {
                        var n = {
                            success: "function" != typeof t || t,
                            failure: "function" == typeof e && e
                        };
                        return n.promise = new this.constructor(function(t, e) {
                            if ("function" != typeof t || "function" != typeof e)
                                throw TypeError("Not a function");
                            n.resolve = t,
                            n.reject = e
                        }
                        ),
                        i.chain.push(n),
                        0 !== i.state && l(c, i),
                        n.promise
                    }
                    ,
                    this.catch = function(t) {
                        return this.then(void 0, t)
                    }
                    ;
                    try {
                        t.call(void 0, function(t) {
                            f.call(i, t)
                        }, function(t) {
                            p.call(i, t)
                        })
                    } catch (t) {
                        p.call(i, t)
                    }
                }
                var g = {
                    add: function(t, e) {
                        o = new a(t,e),
                        r ? r.next = o : i = o,
                        r = o,
                        o = void 0
                    },
                    drain: function() {
                        var t = i;
                        for (i = r = n = void 0; t; )
                            t.fn.call(t.self),
                            t = t.next
                    }
                }
                  , y = e({}, "constructor", m, !1);
                return e(m.prototype = y, "__NPO__", 0, !1),
                e(m, "resolve", function(n) {
                    return n && "object" == typeof n && 1 === n.__NPO__ ? n : new this(function(t, e) {
                        if ("function" != typeof t || "function" != typeof e)
                            throw TypeError("Not a function");
                        t(n)
                    }
                    )
                }),
                e(m, "reject", function(n) {
                    return new this(function(t, e) {
                        if ("function" != typeof t || "function" != typeof e)
                            throw TypeError("Not a function");
                        e(n)
                    }
                    )
                }),
                e(m, "all", function(e) {
                    var s = this;
                    return "[object Array]" != t.call(e) ? s.reject(TypeError("Not an array")) : 0 === e.length ? s.resolve([]) : new s(function(n, t) {
                        if ("function" != typeof n || "function" != typeof t)
                            throw TypeError("Not a function");
                        var i = e.length
                          , r = Array(i)
                          , o = 0;
                        h(s, e, function(t, e) {
                            r[t] = e,
                            ++o === i && n(r)
                        }, t)
                    }
                    )
                }),
                e(m, "race", function(e) {
                    var i = this;
                    return "[object Array]" != t.call(e) ? i.reject(TypeError("Not an array")) : new i(function(n, t) {
                        if ("function" != typeof n || "function" != typeof t)
                            throw TypeError("Not a function");
                        h(i, e, function(t, e) {
                            n(e)
                        }, t)
                    }
                    )
                }),
                m
            }
            ,
            (n = f)[e = "Promise"] = n[e] || i(),
            t.exports && (t.exports = n[e])
        }
        )(r = {
            exports: {}
        });
        var m = r.exports
          , g = new WeakMap;
        function y(t, e, n) {
            var i = g.get(t.element) || {};
            e in i || (i[e] = []),
            i[e].push(n),
            g.set(t.element, i)
        }
        function b(t, e) {
            return (g.get(t.element) || {})[e] || []
        }
        function w(t, e, n) {
            var i = g.get(t.element) || {};
            return !i[e] || (n ? (-1 !== (n = i[e].indexOf(n)) && i[e].splice(n, 1),
            g.set(t.element, i),
            i[e] && 0 === i[e].length) : (i[e] = [],
            g.set(t.element, i),
            !0))
        }
        function x(t) {
            if ("string" == typeof t)
                try {
                    t = JSON.parse(t)
                } catch (t) {
                    return {}
                }
            return t
        }
        function T(t, e, n) {
            t.element.contentWindow && t.element.contentWindow.postMessage && (e = {
                method: e
            },
            void 0 !== n && (e.value = n),
            8 <= (n = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"))) && n < 10 && (e = JSON.stringify(e)),
            t.element.contentWindow.postMessage(e, t.origin))
        }
        function O(n, i) {
            var e, t, r, o, s = [];
            (i = x(i)).event ? ("error" === i.event && b(n, i.data.method).forEach(function(t) {
                var e = new Error(i.data.message);
                e.name = i.data.name,
                t.reject(e),
                w(n, i.data.method, t)
            }),
            s = b(n, "event:".concat(i.event)),
            e = i.data) : i.method && (t = n,
            r = i.method,
            (r = !((o = b(t, r)).length < 1) && (w(t, r, t = o.shift()),
            t)) && (s.push(r),
            e = i.value)),
            s.forEach(function(t) {
                try {
                    "function" == typeof t ? t.call(n, e) : t.resolve(e)
                } catch (t) {}
            })
        }
        var P = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "interactive_params", "keyboard", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];
        function S(i, t) {
            return P.reduce(function(t, e) {
                var n = i.getAttribute("data-vimeo-".concat(e));
                return !n && "" !== n || (t[e] = "" === n ? 1 : n),
                t
            }, 1 < arguments.length && void 0 !== t ? t : {})
        }
        function C(t, e) {
            var n, t = t.html;
            if (e)
                return null === e.getAttribute("data-vimeo-initialized") && ((n = document.createElement("div")).innerHTML = t,
                e.appendChild(n.firstChild),
                e.setAttribute("data-vimeo-initialized", "true")),
                e.querySelector("iframe");
            throw new TypeError("An element must be provided")
        }
        function E(o, t, e) {
            var s = 1 < arguments.length && void 0 !== t ? t : {}
              , a = 2 < arguments.length ? e : void 0;
            return new Promise(function(e, n) {
                if (!l(o))
                    throw new TypeError("“".concat(o, "” is not a vimeo.com url."));
                var t, i = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(o));
                for (t in s)
                    s.hasOwnProperty(t) && (i += "&".concat(t, "=").concat(encodeURIComponent(s[t])));
                var r = new ("XDomainRequest"in window ? XDomainRequest : XMLHttpRequest);
                r.open("GET", i, !0),
                r.onload = function() {
                    if (404 === r.status)
                        n(new Error("“".concat(o, "” was not found.")));
                    else if (403 === r.status)
                        n(new Error("“".concat(o, "” is not embeddable.")));
                    else
                        try {
                            var t = JSON.parse(r.responseText);
                            403 === t.domain_status_code ? (C(t, a),
                            n(new Error("“".concat(o, "” is not embeddable.")))) : e(t)
                        } catch (t) {
                            n(t)
                        }
                }
                ,
                r.onerror = function() {
                    var t = r.status ? " (".concat(r.status, ")") : "";
                    n(new Error("There was an error fetching the embed code from Vimeo".concat(t, ".")))
                }
                ,
                r.send()
            }
            )
        }
        function j(t) {
            var a = 0 < arguments.length && void 0 !== t ? t : document;
            window.VimeoSeoMetadataAppended || (window.VimeoSeoMetadataAppended = !0,
            window.addEventListener("message", function(t) {
                if (l(t.origin)) {
                    var e = x(t.data);
                    if (e && "ready" === e.event)
                        for (var n, i = a.querySelectorAll("iframe"), r = 0; r < i.length; r++) {
                            var o = i[r]
                              , s = o.contentWindow === t.source;
                            n = o.src,
                            /^https:\/\/player\.vimeo\.com\/video\/\d+/.test(n) && s && new D(o).callMethod("appendVideoMetadata", window.location.href)
                        }
                }
            }))
        }
        var k, A, M, I = new WeakMap, L = new WeakMap, R = {}, D = function() {
            function r(o) {
                var s = this
                  , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                  , t = this
                  , n = r;
                if (!(t instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                if (window.jQuery && o instanceof jQuery && (1 < o.length && window.console && console.warn,
                o = o[0]),
                "undefined" != typeof document && "string" == typeof o && (o = document.getElementById(o)),
                t = o,
                !Boolean(t && 1 === t.nodeType && "nodeName"in t && t.ownerDocument && t.ownerDocument.defaultView))
                    throw new TypeError("You must pass either a valid element or a valid id.");
                if ("IFRAME" === o.nodeName || (n = o.querySelector("iframe")) && (o = n),
                "IFRAME" === o.nodeName && !l(o.getAttribute("src") || ""))
                    throw new Error("The player element passed isn’t a Vimeo embed.");
                if (I.has(o))
                    return I.get(o);
                this._window = o.ownerDocument.defaultView,
                this.element = o,
                this.origin = "*";
                var i, t = new m(function(i, r) {
                    var t;
                    s._onMessage = function(t) {
                        var e, n;
                        l(t.origin) && s.element.contentWindow === t.source && ("*" === s.origin && (s.origin = t.origin),
                        (t = x(t.data)) && "error" === t.event && t.data && "ready" === t.data.method ? ((e = new Error(t.data.message)).name = t.data.name,
                        r(e)) : (e = t && "ready" === t.event,
                        n = t && "ping" === t.method,
                        e || n ? (s.element.setAttribute("data-ready", "true"),
                        i()) : O(s, t)))
                    }
                    ,
                    s._window.addEventListener("message", s._onMessage),
                    "IFRAME" !== s.element.nodeName && E(a(t = S(o, e)), t, o).then(function(t) {
                        var e, n, i = C(t, o);
                        return s.element = i,
                        s._originalElement = o,
                        e = o,
                        i = i,
                        n = g.get(e),
                        g.set(i, n),
                        g.delete(e),
                        I.set(s.element, s),
                        t
                    }).catch(r)
                }
                );
                return L.set(this, t),
                I.set(this.element, this),
                "IFRAME" === this.element.nodeName && T(this, "ping"),
                R.isEnabled && (i = function() {
                    return R.exit()
                }
                ,
                this.fullscreenchangeHandler = function() {
                    (R.isFullscreen ? y : w)(s, "event:exitFullscreen", i),
                    s.ready().then(function() {
                        T(s, "fullscreenchange", R.isFullscreen)
                    })
                }
                ,
                R.on("fullscreenchange", this.fullscreenchangeHandler)),
                this
            }
            var t, e, n;
            return t = r,
            (e = [{
                key: "callMethod",
                value: function(n) {
                    var i = this
                      , r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    return new m(function(t, e) {
                        return i.ready().then(function() {
                            y(i, n, {
                                resolve: t,
                                reject: e
                            }),
                            T(i, n, r)
                        }).catch(e)
                    }
                    )
                }
            }, {
                key: "get",
                value: function(n) {
                    var i = this;
                    return new m(function(t, e) {
                        return n = o(n, "get"),
                        i.ready().then(function() {
                            y(i, n, {
                                resolve: t,
                                reject: e
                            }),
                            T(i, n)
                        }).catch(e)
                    }
                    )
                }
            }, {
                key: "set",
                value: function(n, i) {
                    var r = this;
                    return new m(function(t, e) {
                        if (n = o(n, "set"),
                        null == i)
                            throw new TypeError("There must be a value to set.");
                        return r.ready().then(function() {
                            y(r, n, {
                                resolve: t,
                                reject: e
                            }),
                            T(r, n, i)
                        }).catch(e)
                    }
                    )
                }
            }, {
                key: "on",
                value: function(t, e) {
                    if (!t)
                        throw new TypeError("You must pass an event name.");
                    if (!e)
                        throw new TypeError("You must pass a callback function.");
                    if ("function" != typeof e)
                        throw new TypeError("The callback must be a function.");
                    0 === b(this, "event:".concat(t)).length && this.callMethod("addEventListener", t).catch(function() {}),
                    y(this, "event:".concat(t), e)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    if (!t)
                        throw new TypeError("You must pass an event name.");
                    if (e && "function" != typeof e)
                        throw new TypeError("The callback must be a function.");
                    w(this, "event:".concat(t), e) && this.callMethod("removeEventListener", t).catch(function(t) {})
                }
            }, {
                key: "loadVideo",
                value: function(t) {
                    return this.callMethod("loadVideo", t)
                }
            }, {
                key: "ready",
                value: function() {
                    var t = L.get(this) || new m(function(t, e) {
                        e(new Error("Unknown player. Probably unloaded."))
                    }
                    );
                    return m.resolve(t)
                }
            }, {
                key: "addCuePoint",
                value: function(t) {
                    return this.callMethod("addCuePoint", {
                        time: t,
                        data: 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                    })
                }
            }, {
                key: "removeCuePoint",
                value: function(t) {
                    return this.callMethod("removeCuePoint", t)
                }
            }, {
                key: "enableTextTrack",
                value: function(t, e) {
                    if (t)
                        return this.callMethod("enableTextTrack", {
                            language: t,
                            kind: e
                        });
                    throw new TypeError("You must pass a language.")
                }
            }, {
                key: "disableTextTrack",
                value: function() {
                    return this.callMethod("disableTextTrack")
                }
            }, {
                key: "pause",
                value: function() {
                    return this.callMethod("pause")
                }
            }, {
                key: "play",
                value: function() {
                    return this.callMethod("play")
                }
            }, {
                key: "requestFullscreen",
                value: function() {
                    return R.isEnabled ? R.request(this.element) : this.callMethod("requestFullscreen")
                }
            }, {
                key: "exitFullscreen",
                value: function() {
                    return R.isEnabled ? R.exit() : this.callMethod("exitFullscreen")
                }
            }, {
                key: "getFullscreen",
                value: function() {
                    return R.isEnabled ? m.resolve(R.isFullscreen) : this.get("fullscreen")
                }
            }, {
                key: "requestPictureInPicture",
                value: function() {
                    return this.callMethod("requestPictureInPicture")
                }
            }, {
                key: "exitPictureInPicture",
                value: function() {
                    return this.callMethod("exitPictureInPicture")
                }
            }, {
                key: "getPictureInPicture",
                value: function() {
                    return this.get("pictureInPicture")
                }
            }, {
                key: "unload",
                value: function() {
                    return this.callMethod("unload")
                }
            }, {
                key: "destroy",
                value: function() {
                    var n = this;
                    return new m(function(t) {
                        var e;
                        L.delete(n),
                        I.delete(n.element),
                        n._originalElement && (I.delete(n._originalElement),
                        n._originalElement.removeAttribute("data-vimeo-initialized")),
                        n.element && "IFRAME" === n.element.nodeName && n.element.parentNode && (n.element.parentNode.parentNode && n._originalElement && n._originalElement !== n.element.parentNode ? n.element.parentNode.parentNode.removeChild(n.element.parentNode) : n.element.parentNode.removeChild(n.element)),
                        n.element && "DIV" === n.element.nodeName && n.element.parentNode && (n.element.removeAttribute("data-vimeo-initialized"),
                        (e = n.element.querySelector("iframe")) && e.parentNode && (e.parentNode.parentNode && n._originalElement && n._originalElement !== e.parentNode ? e.parentNode.parentNode.removeChild(e.parentNode) : e.parentNode.removeChild(e))),
                        n._window.removeEventListener("message", n._onMessage),
                        R.isEnabled && R.off("fullscreenchange", n.fullscreenchangeHandler),
                        t()
                    }
                    )
                }
            }, {
                key: "getAutopause",
                value: function() {
                    return this.get("autopause")
                }
            }, {
                key: "setAutopause",
                value: function(t) {
                    return this.set("autopause", t)
                }
            }, {
                key: "getBuffered",
                value: function() {
                    return this.get("buffered")
                }
            }, {
                key: "getCameraProps",
                value: function() {
                    return this.get("cameraProps")
                }
            }, {
                key: "setCameraProps",
                value: function(t) {
                    return this.set("cameraProps", t)
                }
            }, {
                key: "getChapters",
                value: function() {
                    return this.get("chapters")
                }
            }, {
                key: "getCurrentChapter",
                value: function() {
                    return this.get("currentChapter")
                }
            }, {
                key: "getColor",
                value: function() {
                    return this.get("color")
                }
            }, {
                key: "setColor",
                value: function(t) {
                    return this.set("color", t)
                }
            }, {
                key: "getCuePoints",
                value: function() {
                    return this.get("cuePoints")
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.get("currentTime")
                }
            }, {
                key: "setCurrentTime",
                value: function(t) {
                    return this.set("currentTime", t)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.get("duration")
                }
            }, {
                key: "getEnded",
                value: function() {
                    return this.get("ended")
                }
            }, {
                key: "getLoop",
                value: function() {
                    return this.get("loop")
                }
            }, {
                key: "setLoop",
                value: function(t) {
                    return this.set("loop", t)
                }
            }, {
                key: "setMuted",
                value: function(t) {
                    return this.set("muted", t)
                }
            }, {
                key: "getMuted",
                value: function() {
                    return this.get("muted")
                }
            }, {
                key: "getPaused",
                value: function() {
                    return this.get("paused")
                }
            }, {
                key: "getPlaybackRate",
                value: function() {
                    return this.get("playbackRate")
                }
            }, {
                key: "setPlaybackRate",
                value: function(t) {
                    return this.set("playbackRate", t)
                }
            }, {
                key: "getPlayed",
                value: function() {
                    return this.get("played")
                }
            }, {
                key: "getQualities",
                value: function() {
                    return this.get("qualities")
                }
            }, {
                key: "getQuality",
                value: function() {
                    return this.get("quality")
                }
            }, {
                key: "setQuality",
                value: function(t) {
                    return this.set("quality", t)
                }
            }, {
                key: "getSeekable",
                value: function() {
                    return this.get("seekable")
                }
            }, {
                key: "getSeeking",
                value: function() {
                    return this.get("seeking")
                }
            }, {
                key: "getTextTracks",
                value: function() {
                    return this.get("textTracks")
                }
            }, {
                key: "getVideoEmbedCode",
                value: function() {
                    return this.get("videoEmbedCode")
                }
            }, {
                key: "getVideoId",
                value: function() {
                    return this.get("videoId")
                }
            }, {
                key: "getVideoTitle",
                value: function() {
                    return this.get("videoTitle")
                }
            }, {
                key: "getVideoWidth",
                value: function() {
                    return this.get("videoWidth")
                }
            }, {
                key: "getVideoHeight",
                value: function() {
                    return this.get("videoHeight")
                }
            }, {
                key: "getVideoUrl",
                value: function() {
                    return this.get("videoUrl")
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.get("volume")
                }
            }, {
                key: "setVolume",
                value: function(t) {
                    return this.set("volume", t)
                }
            }]) && i(t.prototype, e),
            n && i(t, n),
            r
        }();
        e || (k = function() {
            for (var t, e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = 0, i = e.length, r = {}; n < i; n++)
                if ((t = e[n]) && t[1]in document) {
                    for (n = 0; n < t.length; n++)
                        r[e[0][n]] = t[n];
                    return r
                }
            return !1
        }(),
        A = {
            fullscreenchange: k.fullscreenchange,
            fullscreenerror: k.fullscreenerror
        },
        M = {
            request: function(r) {
                return new Promise(function(t, e) {
                    function n() {
                        M.off("fullscreenchange", n),
                        t()
                    }
                    M.on("fullscreenchange", n);
                    var i = (r = r || document.documentElement)[k.requestFullscreen]();
                    i instanceof Promise && i.then(n).catch(e)
                }
                )
            },
            exit: function() {
                return new Promise(function(e, t) {
                    var n, i;
                    M.isFullscreen ? (M.on("fullscreenchange", n = function t() {
                        M.off("fullscreenchange", t),
                        e()
                    }
                    ),
                    (i = document[k.exitFullscreen]())instanceof Promise && i.then(n).catch(t)) : e()
                }
                )
            },
            on: function(t, e) {
                t = A[t];
                t && document.addEventListener(t, e)
            },
            off: function(t, e) {
                t = A[t];
                t && document.removeEventListener(t, e)
            }
        },
        Object.defineProperties(M, {
            isFullscreen: {
                get: function() {
                    return Boolean(document[k.fullscreenElement])
                }
            },
            element: {
                enumerable: !0,
                get: function() {
                    return document[k.fullscreenElement]
                }
            },
            isEnabled: {
                enumerable: !0,
                get: function() {
                    return Boolean(document[k.fullscreenEnabled])
                }
            }
        }),
        R = M,
        function(t) {
            function n(t) {
                "console"in window && console.error
            }
            t = 0 < arguments.length && void 0 !== t ? t : document,
            (t = [].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"))).forEach(function(e) {
                try {
                    var t;
                    null === e.getAttribute("data-vimeo-defer") && E(a(t = S(e)), t, e).then(function(t) {
                        return C(t, e)
                    }).catch(n)
                } catch (t) {
                    n()
                }
            })
        }(),
        function(t) {
            var i = 0 < arguments.length && void 0 !== t ? t : document;
            window.VimeoPlayerResizeEmbeds_ || (window.VimeoPlayerResizeEmbeds_ = !0,
            window.addEventListener("message", function(t) {
                if (l(t.origin) && t.data && "spacechange" === t.data.event)
                    for (var e = i.querySelectorAll("iframe"), n = 0; n < e.length; n++)
                        if (e[n].contentWindow === t.source) {
                            e[n].parentElement.style.paddingBottom = "".concat(t.data.data[0].bottom, "px");
                            break
                        }
            }))
        }(),
        j()),
        N.default = D
    }
    .call(this, e(12), e(170).setImmediate)
}
, function(t, r, o) {
    !function(t) {
        var e = void 0 !== t && t || "undefined" != typeof self && self || window
          , n = Function.prototype.apply;
        function i(t, e) {
            this._id = t,
            this._clearFn = e
        }
        r.setTimeout = function() {
            return new i(n.call(setTimeout, e, arguments),clearTimeout)
        }
        ,
        r.setInterval = function() {
            return new i(n.call(setInterval, e, arguments),clearInterval)
        }
        ,
        r.clearTimeout = r.clearInterval = function(t) {
            t && t.close()
        }
        ,
        i.prototype.unref = i.prototype.ref = function() {}
        ,
        i.prototype.close = function() {
            this._clearFn.call(e, this._id)
        }
        ,
        r.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId),
            t._idleTimeout = e
        }
        ,
        r.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId),
            t._idleTimeout = -1
        }
        ,
        r._unrefActive = r.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            0 <= e && (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout()
            }, e))
        }
        ,
        o(171),
        r.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate,
        r.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }
    .call(this, o(12))
}
, function(t, e, n) {
    !function(t, h) {
        !function(n, o) {
            "use strict";
            var i, s, a, r, l, u, e, t;
            function c(t) {
                delete s[t]
            }
            function f(t) {
                if (a)
                    setTimeout(f, 0, t);
                else {
                    var e = s[t];
                    if (e) {
                        a = !0;
                        try {
                            var n = e
                              , i = n.callback
                              , r = n.args;
                            switch (r.length) {
                            case 0:
                                i();
                                break;
                            case 1:
                                i(r[0]);
                                break;
                            case 2:
                                i(r[0], r[1]);
                                break;
                            case 3:
                                i(r[0], r[1], r[2]);
                                break;
                            default:
                                i.apply(o, r)
                            }
                        } finally {
                            c(t),
                            a = !1
                        }
                    }
                }
            }
            function p() {
                function t(t) {
                    t.source === n && "string" == typeof t.data && 0 === t.data.indexOf(e) && f(+t.data.slice(e.length))
                }
                var e = "setImmediate$" + Math.random() + "$";
                n.addEventListener ? n.addEventListener("message", t, !1) : n.attachEvent("onmessage", t),
                l = function(t) {
                    n.postMessage(e + t, "*")
                }
            }
            n.setImmediate || (i = 1,
            a = !(s = {}),
            r = n.document,
            t = (t = Object.getPrototypeOf && Object.getPrototypeOf(n)) && t.setTimeout ? t : n,
            "[object process]" === {}.toString.call(n.process) ? l = function(t) {
                h.nextTick(function() {
                    f(t)
                })
            }
            : !function() {
                var t, e;
                if (n.postMessage && !n.importScripts)
                    return t = !0,
                    e = n.onmessage,
                    n.onmessage = function() {
                        t = !1
                    }
                    ,
                    n.postMessage("", "*"),
                    n.onmessage = e,
                    t
            }() ? l = n.MessageChannel ? ((e = new MessageChannel).port1.onmessage = function(t) {
                f(t.data)
            }
            ,
            function(t) {
                e.port2.postMessage(t)
            }
            ) : r && "onreadystatechange"in r.createElement("script") ? (u = r.documentElement,
            function(t) {
                var e = r.createElement("script");
                e.onreadystatechange = function() {
                    f(t),
                    e.onreadystatechange = null,
                    u.removeChild(e),
                    e = null
                }
                ,
                u.appendChild(e)
            }
            ) : function(t) {
                setTimeout(f, 0, t)
            }
            : p(),
            t.setImmediate = function(t) {
                "function" != typeof t && (t = new Function("" + t));
                for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++)
                    e[n] = arguments[n + 1];
                return s[i] = {
                    callback: t,
                    args: e
                },
                l(i),
                i++
            }
            ,
            t.clearImmediate = c)
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }
    .call(this, n(12), n(172))
}
, function(t, e) {
    var n, i, t = t.exports = {};
    function r() {
        throw new Error("setTimeout has not been defined")
    }
    function o() {
        throw new Error("clearTimeout has not been defined")
    }
    try {
        n = "function" == typeof setTimeout ? setTimeout : r
    } catch (t) {
        n = r
    }
    try {
        i = "function" == typeof clearTimeout ? clearTimeout : o
    } catch (t) {
        i = o
    }
    function s(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === r || !n) && setTimeout)
            return (n = setTimeout)(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    var a, l = [], u = !1, c = -1;
    function f() {
        u && a && (u = !1,
        a.length ? l = a.concat(l) : c = -1,
        l.length && p())
    }
    function p() {
        if (!u) {
            for (var t = s(f), e = (u = !0,
            l.length); e; ) {
                for (a = l,
                l = []; ++c < e; )
                    a && a[c].run();
                c = -1,
                e = l.length
            }
            a = null,
            u = !1,
            !function(e) {
                if (i === clearTimeout)
                    return clearTimeout(e);
                if ((i === o || !i) && clearTimeout)
                    return (i = clearTimeout)(e);
                try {
                    i(e)
                } catch (t) {
                    try {
                        return i.call(null, e)
                    } catch (t) {
                        return i.call(this, e)
                    }
                }
            }(t)
        }
    }
    function h(t, e) {
        this.fun = t,
        this.array = e
    }
    function d() {}
    t.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (1 < arguments.length)
            for (var n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
        l.push(new h(t,e)),
        1 !== l.length || u || s(p)
    }
    ,
    h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    t.title = "browser",
    t.browser = !0,
    t.env = {},
    t.argv = [],
    t.version = "",
    t.versions = {},
    t.on = d,
    t.addListener = d,
    t.once = d,
    t.off = d,
    t.removeListener = d,
    t.removeAllListeners = d,
    t.emit = d,
    t.prependListener = d,
    t.prependOnceListener = d,
    t.listeners = function(t) {
        return []
    }
    ,
    t.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    t.cwd = function() {
        return "/"
    }
    ,
    t.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    t.umask = function() {
        return 0
    }
}
, function(t, e, n) {
    "use strict";
    var i, r = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), o = (Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.AnimateOnOut = e.AnimateInstant = e.AnimateOnLoad = e.TemplateSwitcher = void 0,
    n(36)), n = (s.prototype.addNewTemplate = function(t) {
        if (!this._queueTemplates)
            for (; 0 < this._activeTemplates.length; )
                this._activeTemplates.pop().__kill();
        this._activeTemplates.push(t)
    }
    ,
    s.prototype.shiftNewTemplate = function() {
        return this.queuedAnimations <= 0 ? null : (this._preTemplate = this._currentTemplate,
        this._currentTemplate = this._activeTemplates.shift(),
        this._currentTemplate)
    }
    ,
    s.prototype.animateIn = function(t) {
        var e = this
          , t = (this._isAnimatingIn = !0,
        this.manager.setTemplate(t));
        return t.preTemplate = this._preTemplate,
        t.queuedAnimations = this.queuedAnimations,
        t.onAllComplete.one(function(t) {
            e.onInComplete(t)
        }),
        t.start(o.MODE.IN),
        t
    }
    ,
    s.prototype.animateOut = function(t) {
        var e = this
          , t = (this._isAnimatingOut = !0,
        this.manager.removeTemplate(t));
        return t.queuedAnimations = this.queuedAnimations,
        t.nextTemplate = this._currentTemplate,
        t.onAllComplete.one(function(t) {
            e.onOutComplete(t)
        }),
        t.start(o.MODE.OUT),
        t
    }
    ,
    s.prototype.onInComplete = function(t) {
        this._isAnimatingIn = !1
    }
    ,
    s.prototype.onOutComplete = function(t) {
        this._isAnimatingOut = !1
    }
    ,
    Object.defineProperty(s.prototype, "queuedAnimations", {
        get: function() {
            return this._activeTemplates.length
        },
        enumerable: !1,
        configurable: !0
    }),
    s.prototype.setManager = function(t) {
        this.manager = t
    }
    ,
    s.prototype.urlChange = function() {}
    ,
    s.prototype.kill = function() {}
    ,
    s);
    function s(t) {
        void 0 === t && (t = !0),
        this._activeTemplates = [],
        this._queueTemplates = !0,
        this._isAnimatingIn = !1,
        this._isAnimatingOut = !1,
        this._queueTemplates = t
    }
    e.TemplateSwitcher = n;
    r(u, a = n),
    u.prototype.addNewTemplate = function(t) {
        a.prototype.addNewTemplate.call(this, t),
        this.startAnimationSequence()
    }
    ,
    u.prototype.startAnimationSequence = function() {
        !this._isAnimatingIn && !this._isAnimatingOut && 0 < this.queuedAnimations && (this.templateIn = this.shiftNewTemplate(),
        this._currentInController && (this.templateOut = this._currentInController.rootModule,
        this.animateOut(this.templateOut)),
        this._currentInController = this.animateIn(this.templateIn))
    }
    ,
    u.prototype.onInComplete = function(t) {
        a.prototype.onInComplete.call(this, t),
        this.startAnimationSequence()
    }
    ,
    u.prototype.onOutComplete = function(t) {
        a.prototype.onOutComplete.call(this, t),
        this.startAnimationSequence()
    }
    ;
    var a, l = u;
    function u() {
        return null !== a && a.apply(this, arguments) || this
    }
    e.AnimateOnLoad = l;
    r(f, c = n),
    f.prototype.urlChange = function() {
        c.prototype.urlChange.call(this),
        this._outOnUrlChange && this.startAnimationSequence()
    }
    ,
    f.prototype.addNewTemplate = function(t) {
        c.prototype.addNewTemplate.call(this, t),
        this.startAnimationSequence()
    }
    ,
    f.prototype.startAnimationSequence = function() {
        this._currentInController && this._currentInController.isDone() && this.animateOut(this._currentInController.rootModule),
        0 < this.queuedAnimations && (this._currentInController = this.animateIn(this.shiftNewTemplate()))
    }
    ,
    f.prototype.onInComplete = function(t) {
        c.prototype.onInComplete.call(this, t),
        this._currentInController === t && !this.manager.isLoadingTemplate() || this.animateOut(t.rootModule)
    }
    ;
    var c, l = f;
    function f(t, e) {
        void 0 === t && (t = !0);
        e = c.call(this, e = void 0 === e ? !1 : e) || this;
        return e._outOnUrlChange = !1,
        e._outOnUrlChange = t,
        e
    }
    e.AnimateInstant = l;
    r(h, p = n),
    h.prototype.addNewTemplate = function(t) {
        p.prototype.addNewTemplate.call(this, t),
        this.startAnimationSequence()
    }
    ,
    h.prototype.startAnimationSequence = function() {
        !this._isAnimatingIn && !this._isAnimatingOut && 0 < this.queuedAnimations && (this.templateIn = this.shiftNewTemplate(),
        this._currentInController ? (this.templateOut = this._currentInController.rootModule,
        this.animateOut(this.templateOut)) : this._currentInController = this.animateIn(this.templateIn))
    }
    ,
    h.prototype.onInComplete = function(t) {
        p.prototype.onInComplete.call(this, t),
        this.startAnimationSequence()
    }
    ,
    h.prototype.onOutComplete = function(t) {
        p.prototype.onOutComplete.call(this, t),
        this._currentInController = this.animateIn(this.templateIn)
    }
    ;
    var p, l = h;
    function h() {
        return null !== p && p.apply(this, arguments) || this
    }
    e.AnimateOnOut = l
}
]);
