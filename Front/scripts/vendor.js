! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(E, e) { "use strict"; var t = [],
        i = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) { return t.flat.call(e) } : function(e) { return t.concat.apply([], e) },
        l = t.push,
        r = t.indexOf,
        n = {},
        o = n.toString,
        m = n.hasOwnProperty,
        a = m.toString,
        u = a.call(Object),
        v = {},
        y = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        _ = function(e) { return null != e && e === e.window },
        x = E.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) { var i, r, o = (n = n || x).createElement("script"); if (o.text = e, t)
            for (i in c)(r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o) }

    function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e } var f = "3.5.1",
        C = function(e, t) { return new C.fn.init(e, t) };

    function d(e) { var t = !!e && "length" in e && e.length,
            n = w(e); return !y(e) && !_(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) }
    C.fn = C.prototype = { jquery: f, constructor: C, length: 0, toArray: function() { return s.call(this) }, get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) { var t = C.merge(this.constructor(), e); return t.prevObject = this, t }, each: function(e) { return C.each(this, e) }, map: function(n) { return this.pushStack(C.map(this, function(e, t) { return n.call(e, t, e) })) }, slice: function() { return this.pushStack(s.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, even: function() { return this.pushStack(C.grep(this, function(e, t) { return (t + 1) % 2 })) }, odd: function() { return this.pushStack(C.grep(this, function(e, t) { return t % 2 })) }, eq: function(e) { var t = this.length,
                n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: l, sort: t.sort, splice: t.splice }, C.extend = C.fn.extend = function() { var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1; for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) i = e[t], "__proto__" !== t && a !== i && (u && i && (C.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[t], o = r && !Array.isArray(n) ? [] : r || C.isPlainObject(n) ? n : {}, r = !1, a[t] = C.extend(u, o, i)) : void 0 !== i && (a[t] = i));
        return a }, C.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e) || (t = i(e)) && ("function" != typeof(n = m.call(t, "constructor") && t.constructor) || a.call(n) !== u)) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, globalEval: function(e, t, n) { b(e, { nonce: t && t.nonce }, n) }, each: function(e, t) { var n, i = 0; if (d(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e }, makeArray: function(e, t) { var n = t || []; return null != e && (d(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n }, inArray: function(e, t, n) { return null == t ? -1 : r.call(t, e, n) }, merge: function(e, t) { for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i]; return e.length = r, e }, grep: function(e, t, n) { for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]); return i }, map: function(e, t, n) { var i, r, o = 0,
                a = []; if (d(e))
                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && a.push(r); return g(a) }, guid: 1, support: v }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var h = function(n) { var e, h, b, o, r, p, f, g, w, l, u, T, E, a, x, m, s, c, v, C = "sizzle" + 1 * new Date,
            d = n.document,
            S = 0,
            i = 0,
            y = le(),
            _ = le(),
            k = le(),
            A = le(),
            N = function(e, t) { return e === t && (u = !0), 0 },
            D = {}.hasOwnProperty,
            t = [],
            j = t.pop,
            I = t.push,
            L = t.push,
            O = t.slice,
            q = function(e, t) { for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1 },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            F = "\\[" + R + "*(" + H + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + R + "*\\]",
            M = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
            B = new RegExp(R + "+", "g"),
            W = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            U = new RegExp("^" + R + "*," + R + "*"),
            Q = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            $ = new RegExp(R + "|>"),
            z = new RegExp(M),
            X = new RegExp("^" + H + "$"),
            V = { ID: new RegExp("^#(" + H + ")"), CLASS: new RegExp("^\\.(" + H + ")"), TAG: new RegExp("^(" + H + "|[*])"), ATTR: new RegExp("^" + F), PSEUDO: new RegExp("^" + M), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i") },
            Y = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            oe = function() { T() },
            ae = be(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { L.apply(t = O.call(d.childNodes), d.childNodes), t[d.childNodes.length].nodeType } catch (e) { L = { apply: t.length ? function(e, t) { I.apply(e, O.call(t)) } : function(e, t) { for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1 } } }

        function se(e, t, n, i) { var r, o, a, s, l, u, c, f = t && t.ownerDocument,
                d = t ? t.nodeType : 9; if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n; if (!i && (T(t), t = t || E, x)) { if (11 !== d && (l = Z.exec(e)))
                    if (r = l[1]) { if (9 === d) { if (!(a = t.getElementById(r))) return n; if (a.id === r) return n.push(a), n } else if (f && (a = f.getElementById(r)) && v(t, a) && a.id === r) return n.push(a), n } else { if (l[2]) return L.apply(n, t.getElementsByTagName(e)), n; if ((r = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(r)), n }
                if (h.qsa && !A[e + " "] && (!m || !m.test(e)) && (1 !== d || "object" !== t.nodeName.toLowerCase())) { if (c = e, f = t, 1 === d && ($.test(e) || Q.test(e))) { for ((f = ee.test(e) && ve(t.parentNode) || t) === t && h.scope || ((s = t.getAttribute("id")) ? s = s.replace(ie, re) : t.setAttribute("id", s = C)), o = (u = p(e)).length; o--;) u[o] = (s ? "#" + s : ":scope") + " " + _e(u[o]);
                        c = u.join(",") } try { return L.apply(n, f.querySelectorAll(c)), n } catch (t) { A(e, !0) } finally { s === C && t.removeAttribute("id") } } } return g(e.replace(W, "$1"), t, n, i) }

        function le() { var i = []; return function e(t, n) { return i.push(t + " ") > b.cacheLength && delete e[i.shift()], e[t + " "] = n } }

        function ue(e) { return e[C] = !0, e }

        function ce(e) { var t = E.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function fe(e, t) { for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t }

        function de(e, t) { var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (i) return i; if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1 }

        function he(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function pe(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function ge(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function me(a) { return ue(function(o) { return o = +o, ue(function(e, t) { for (var n, i = a([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n])) }) }) }

        function ve(e) { return e && void 0 !== e.getElementsByTagName && e } for (e in h = se.support = {}, r = se.isXML = function(e) { var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement; return !Y.test(t || n && n.nodeName || "HTML") }, T = se.setDocument = function(e) { var t, n, i = e ? e.ownerDocument || e : d; return i != E && 9 === i.nodeType && i.documentElement && (a = (E = i).documentElement, x = !r(E), d != E && (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), h.scope = ce(function(e) { return a.appendChild(e).appendChild(E.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), h.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), h.getElementsByTagName = ce(function(e) { return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length }), h.getElementsByClassName = J.test(E.getElementsByClassName), h.getById = ce(function(e) { return a.appendChild(e).id = C, !E.getElementsByName || !E.getElementsByName(C).length }), h.getById ? (b.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, b.find.ID = function(e, t) { if (void 0 !== t.getElementById && x) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function(e) { var n = e.replace(te, ne); return function(e) { var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function(e, t) { if (void 0 !== t.getElementById && x) { var n, i, r, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = h.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) { var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e); if ("*" !== e) return o; for (; n = o[r++];) 1 === n.nodeType && i.push(n); return i }, b.find.CLASS = h.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && x) return t.getElementsByClassName(e) }, s = [], m = [], (h.qsa = J.test(E.querySelectorAll)) && (ce(function(e) { var t;
                    a.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + C + "-]").length || m.push("~="), (t = E.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]") }), ce(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = E.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:") })), (h.matchesSelector = J.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) { h.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", M) }), m = m.length && new RegExp(m.join("|")), s = s.length && new RegExp(s.join("|")), t = J.test(a.compareDocumentPosition), v = t || J.test(a.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode; return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))) } : function(e, t) { if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1 }, N = t ? function(e, t) { if (e === t) return u = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e == E || e.ownerDocument == d && v(d, e) ? -1 : t == E || t.ownerDocument == d && v(d, t) ? 1 : l ? q(l, e) - q(l, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) { if (e === t) return u = !0, 0; var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t]; if (!r || !o) return e == E ? -1 : t == E ? 1 : r ? -1 : o ? 1 : l ? q(l, e) - q(l, t) : 0; if (r === o) return de(e, t); for (n = e; n = n.parentNode;) a.unshift(n); for (n = t; n = n.parentNode;) s.unshift(n); for (; a[i] === s[i];) i++; return i ? de(a[i], s[i]) : a[i] == d ? -1 : s[i] == d ? 1 : 0 }), E }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) { if (T(e), h.matchesSelector && x && !A[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) try { var n = c.call(e, t); if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { A(t, !0) }
                return 0 < se(t, E, null, [e]).length }, se.contains = function(e, t) { return (e.ownerDocument || e) != E && T(e), v(e, t) }, se.attr = function(e, t) {
                (e.ownerDocument || e) != E && T(e); var n = b.attrHandle[t.toLowerCase()],
                    i = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !x) : void 0; return void 0 !== i ? i : h.attributes || !x ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }, se.escape = function(e) { return (e + "").replace(ie, re) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) { var t, n = [],
                    i = 0,
                    r = 0; if (u = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(N), u) { for (; t = e[r++];) t === e[r] && (i = n.push(r)); for (; i--;) e.splice(n[i], 1) } return l = null, e }, o = se.getText = function(e) { var t, n = "",
                    i = 0,
                    r = e.nodeType; if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                    for (; t = e[i++];) n += o(t); return n }, (b = se.selectors = { cacheLength: 50, createPseudo: ue, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = y[e + " "]; return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && y(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(n, i, r) { return function(e) { var t = se.attr(e, n); return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(B, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-")) } }, CHILD: function(p, e, t, g, m) { var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            _ = "of-type" === e; return 1 === g && 0 === m ? function(e) { return !!e.parentNode } : function(e, t, n) { var i, r, o, a, s, l, u = v !== y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = _ && e.nodeName.toLowerCase(),
                                d = !n && !_,
                                h = !1; if (c) { if (v) { for (; u;) { for (a = e; a = a[u];)
                                            if (_ ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        l = u = "only" === p && !l && "nextSibling" } return !0 } if (l = [y ? c.firstChild : c.lastChild], y && d) { for (h = (s = (i = (r = (o = (a = c)[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === S && i[1]) && i[2], a = s && c.childNodes[s]; a = ++s && a && a[u] || (h = s = 0) || l.pop();)
                                        if (1 === a.nodeType && ++h && a === e) { r[p] = [S, s, h]; break } } else if (d && (h = s = (i = (r = (o = (a = e)[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === S && i[1]), !1 === h)
                                    for (;
                                        (a = ++s && a && a[u] || (h = s = 0) || l.pop()) && ((_ ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++h || (d && ((r = (o = a[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] = [S, h]), a !== e));); return (h -= m) === g || h % g == 0 && 0 <= h / g } } }, PSEUDO: function(e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return a[C] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, t) { for (var n, i = a(e, o), r = i.length; r--;) e[n = q(e, i[r])] = !(t[n] = i[r]) }) : function(e) { return a(e, 0, t) }) : a } }, pseudos: { not: ue(function(e) { var i = [],
                            r = [],
                            s = f(e.replace(W, "$1")); return s[C] ? ue(function(e, t, n, i) { for (var r, o = s(e, null, i, []), a = e.length; a--;)(r = o[a]) && (e[a] = !(t[a] = r)) }) : function(e, t, n) { return i[0] = e, s(i, null, n, r), i[0] = null, !r.pop() } }), has: ue(function(t) { return function(e) { return 0 < se(t, e).length } }), contains: ue(function(t) { return t = t.replace(te, ne),
                            function(e) { return -1 < (e.textContent || o(e)).indexOf(t) } }), lang: ue(function(n) { return X.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) { var t;
                                do { if (t = x ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id }, root: function(e) { return e === a }, focus: function(e) { return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: ge(!1), disabled: ge(!0), checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0 }, parent: function(e) { return !b.pseudos.empty(e) }, header: function(e) { return G.test(e.nodeName) }, input: function(e) { return K.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: me(function() { return [0] }), last: me(function(e, t) { return [t - 1] }), eq: me(function(e, t, n) { return [n < 0 ? n + t : n] }), even: me(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: me(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: me(function(e, t, n) { for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i); return e }), gt: me(function(e, t, n) { for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = he(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = pe(e);

        function ye() {}

        function _e(e) { for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value; return i }

        function be(s, e, t) { var l = e.dir,
                u = e.next,
                c = u || l,
                f = t && "parentNode" === c,
                d = i++; return e.first ? function(e, t, n) { for (; e = e[l];)
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1 } : function(e, t, n) { var i, r, o, a = [S, d]; if (n) { for (; e = e[l];)
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0 } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || f)
                            if (r = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[l] || e;
                            else { if ((i = r[c]) && i[0] === S && i[1] === d) return a[2] = i[2]; if ((r[c] = a)[2] = s(e, t, n)) return !0 } return !1 } }

        function we(r) { return 1 < r.length ? function(e, t, n) { for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0 } : r[0] }

        function Te(e, t, n, i, r) { for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), u && t.push(s))); return a }

        function Ee(h, p, g, m, v, e) { return m && !m[C] && (m = Ee(m)), v && !v[C] && (v = Ee(v, e)), ue(function(e, t, n, i) { var r, o, a, s = [],
                    l = [],
                    u = t.length,
                    c = e || function(e, t, n) { for (var i = 0, r = t.length; i < r; i++) se(e, t[i], n); return n }(p || "*", n.nodeType ? [n] : n, []),
                    f = !h || !e && p ? c : Te(c, s, h, n, i),
                    d = g ? v || (e ? h : u || m) ? [] : t : f; if (g && g(f, d, n, i), m)
                    for (r = Te(d, l), m(r, [], n, i), o = r.length; o--;)(a = r[o]) && (d[l[o]] = !(f[l[o]] = a)); if (e) { if (v || h) { if (v) { for (r = [], o = d.length; o--;)(a = d[o]) && r.push(f[o] = a);
                            v(null, d = [], r, i) } for (o = d.length; o--;)(a = d[o]) && -1 < (r = v ? q(e, a) : s[o]) && (e[r] = !(t[r] = a)) } } else d = Te(d === t ? d.splice(u, d.length) : d), v ? v(null, t, d, i) : L.apply(t, d) }) }

        function xe(e) { for (var r, t, n, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, l = be(function(e) { return e === r }, a, !0), u = be(function(e) { return -1 < q(r, e) }, a, !0), c = [function(e, t, n) { var i = !o && (n || t !== w) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n)); return r = null, i }]; s < i; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[C]) { for (n = ++s; n < i && !b.relative[e[n].type]; n++); return Ee(1 < s && we(c), 1 < s && _e(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(W, "$1"), t, s < n && xe(e.slice(s, n)), n < i && xe(e = e.slice(n)), n < i && _e(e)) }
                    c.push(t) }
            return we(c) } return ye.prototype = b.filters = b.pseudos, b.setFilters = new ye, p = se.tokenize = function(e, t) { var n, i, r, o, a, s, l, u = _[e + " "]; if (u) return t ? 0 : u.slice(0); for (a = e, s = [], l = b.preFilter; a;) { for (o in n && !(i = U.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = Q.exec(a)) && (n = i.shift(), r.push({ value: n, type: i[0].replace(W, " ") }), a = a.slice(n.length)), b.filter) !(i = V[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({ value: n, type: o, matches: i }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? se.error(e) : _(e, s).slice(0) }, f = se.compile = function(e, t) { var n, m, v, y, _, i, r = [],
                o = [],
                a = k[e + " "]; if (!a) { for (t || (t = p(e)), n = t.length; n--;)(a = xe(t[n]))[C] ? r.push(a) : o.push(a);
                (a = k(e, (m = o, y = 0 < (v = r).length, _ = 0 < m.length, i = function(e, t, n, i, r) { var o, a, s, l = 0,
                        u = "0",
                        c = e && [],
                        f = [],
                        d = w,
                        h = e || _ && b.find.TAG("*", r),
                        p = S += null == d ? 1 : Math.random() || .1,
                        g = h.length; for (r && (w = t == E || t || r); u !== g && null != (o = h[u]); u++) { if (_ && o) { for (a = 0, t || o.ownerDocument == E || (T(o), n = !x); s = m[a++];)
                                if (s(o, t || E, n)) { i.push(o); break }
                            r && (S = p) }
                        y && ((o = !s && o) && l--, e && c.push(o)) } if (l += u, y && u !== l) { for (a = 0; s = v[a++];) s(c, f, t, n); if (e) { if (0 < l)
                                for (; u--;) c[u] || f[u] || (f[u] = j.call(i));
                            f = Te(f) }
                        L.apply(i, f), r && !e && 0 < f.length && 1 < l + v.length && se.uniqueSort(i) } return r && (S = p, w = d), c }, y ? ue(i) : i))).selector = e } return a }, g = se.select = function(e, t, n, i) { var r, o, a, s, l, u = "function" == typeof e && e,
                c = !i && p(e = u.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && x && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length) } for (r = V.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !b.relative[s = a.type]);)
                    if ((l = b.find[s]) && (i = l(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) { if (o.splice(r, 1), !(e = i.length && _e(o))) return L.apply(n, i), n; break } } return (u || f(e, c))(i, t, !x, n, !t || ee.test(e) && ve(t.parentNode) || t), n }, h.sortStable = C.split("").sort(N).join("") === C, h.detectDuplicates = !!u, T(), h.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(E.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), h.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(P, function(e, t, n) { var i; if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), se }(E);
    C.find = h, C.expr = h.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = h.uniqueSort, C.text = h.getText, C.isXMLDoc = h.isXML, C.contains = h.contains, C.escapeSelector = h.escape; var p = function(e, t, n) { for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) { if (r && C(e).is(n)) break;
                    i.push(e) }
            return i },
        T = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        S = C.expr.match.needsContext;

    function k(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function N(e, n, i) { return y(n) ? C.grep(e, function(e, t) { return !!n.call(e, t, e) !== i }) : n.nodeType ? C.grep(e, function(e) { return e === n !== i }) : "string" != typeof n ? C.grep(e, function(e) { return -1 < r.call(n, e) !== i }) : C.filter(n, e, i) }
    C.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function(e) { return 1 === e.nodeType })) }, C.fn.extend({ find: function(e) { var t, n, i = this.length,
                r = this; if ("string" != typeof e) return this.pushStack(C(e).filter(function() { for (t = 0; t < i; t++)
                    if (C.contains(r[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n); return 1 < i ? C.uniqueSort(n) : n }, filter: function(e) { return this.pushStack(N(this, e || [], !1)) }, not: function(e) { return this.pushStack(N(this, e || [], !0)) }, is: function(e) { return !!N(this, "string" == typeof e && S.test(e) ? C(e) : e || [], !1).length } }); var D, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function(e, t, n) { var i, r; if (!e) return this; if (n = n || D, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this); if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (i[1]) { if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : x, !0)), A.test(i[1]) && C.isPlainObject(t))
                for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]); return this } return (r = x.getElementById(i[2])) && (this[0] = r, this.length = 1), this }).prototype = C.fn, D = C(x); var I = /^(?:parents|prev(?:Until|All))/,
        L = { children: !0, contents: !0, next: !0, prev: !0 };

    function O(e, t) { for (;
            (e = e[t]) && 1 !== e.nodeType;); return e }
    C.fn.extend({ has: function(e) { var t = C(e, this),
                n = t.length; return this.filter(function() { for (var e = 0; e < n; e++)
                    if (C.contains(this, t[e])) return !0 }) }, closest: function(e, t) { var n, i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && C(e); if (!S.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? C.uniqueSort(o) : o) }, index: function(e) { return e ? "string" == typeof e ? r.call(C(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), C.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return p(e, "parentNode") }, parentsUntil: function(e, t, n) { return p(e, "parentNode", n) }, next: function(e) { return O(e, "nextSibling") }, prev: function(e) { return O(e, "previousSibling") }, nextAll: function(e) { return p(e, "nextSibling") }, prevAll: function(e) { return p(e, "previousSibling") }, nextUntil: function(e, t, n) { return p(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return p(e, "previousSibling", n) }, siblings: function(e) { return T((e.parentNode || {}).firstChild, e) }, children: function(e) { return T(e.firstChild) }, contents: function(e) { return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), C.merge([], e.childNodes)) } }, function(i, r) { C.fn[i] = function(e, t) { var n = C.map(this, r, e); return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (L[i] || C.uniqueSort(n), I.test(i) && n.reverse()), this.pushStack(n) } }); var q = /[^\x20\t\r\n\f]+/g;

    function P(e) { return e }

    function R(e) { throw e }

    function H(e, t, n, i) { var r; try { e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i)) } catch (e) { n.apply(void 0, [e]) } }
    C.Callbacks = function(i) { var e, n;
        i = "string" == typeof i ? (e = i, n = {}, C.each(e.match(q) || [], function(e, t) { n[t] = !0 }), n) : C.extend({}, i); var r, t, o, a, s = [],
            l = [],
            u = -1,
            c = function() { for (a = a || i.once, o = r = !0; l.length; u = -1)
                    for (t = l.shift(); ++u < s.length;) !1 === s[u].apply(t[0], t[1]) && i.stopOnFalse && (u = s.length, t = !1);
                i.memory || (t = !1), r = !1, a && (s = t ? [] : "") },
            f = { add: function() { return s && (t && !r && (u = s.length - 1, l.push(t)), function n(e) { C.each(e, function(e, t) { y(t) ? i.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !r && c()), this }, remove: function() { return C.each(arguments, function(e, t) { for (var n; - 1 < (n = C.inArray(t, s, n));) s.splice(n, 1), n <= u && u-- }), this }, has: function(e) { return e ? -1 < C.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = l = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = l = [], t || r || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } }; return f }, C.extend({ Deferred: function(e) { var o = [
                    ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                    ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                a = { state: function() { return r }, always: function() { return s.done(arguments).fail(arguments), this }, catch: function(e) { return a.then(null, e) }, pipe: function() { var r = arguments; return C.Deferred(function(i) { C.each(o, function(e, t) { var n = y(r[t[4]]) && r[t[4]];
                                s[t[1]](function() { var e = n && n.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments) }) }), r = null }).promise() }, then: function(t, n, i) { var l = 0;

                        function u(r, o, a, s) { return function() { var n = this,
                                    i = arguments,
                                    e = function() { var e, t; if (!(r < l)) { if ((e = a.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? s ? t.call(e, u(l, o, P, s), u(l, o, R, s)) : (l++, t.call(e, u(l, o, P, s), u(l, o, R, s), u(l, o, P, o.notifyWith))) : (a !== P && (n = void 0, i = [e]), (s || o.resolveWith)(n, i)) } },
                                    t = s ? e : function() { try { e() } catch (e) { C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (a !== R && (n = void 0, i = [e]), o.rejectWith(n, i)) } };
                                r ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), E.setTimeout(t)) } } return C.Deferred(function(e) { o[0][3].add(u(0, e, y(i) ? i : P, e.notifyWith)), o[1][3].add(u(0, e, y(t) ? t : P)), o[2][3].add(u(0, e, y(n) ? n : R)) }).promise() }, promise: function(e) { return null != e ? C.extend(e, a) : a } },
                s = {}; return C.each(o, function(e, t) { var n = t[2],
                    i = t[5];
                a[t[1]] = n.add, i && n.add(function() { r = i }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function(e) { var n = arguments.length,
                t = n,
                i = Array(t),
                r = s.call(arguments),
                o = C.Deferred(),
                a = function(t) { return function(e) { i[t] = this, r[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(i, r) } }; if (n <= 1 && (H(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || y(r[t] && r[t].then))) return o.then(); for (; t--;) H(r[t], a(t), o.reject); return o.promise() } }); var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function(e, t) { E.console && E.console.warn && e && F.test(e.name) && E.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, C.readyException = function(e) { E.setTimeout(function() { throw e }) }; var M = C.Deferred();

    function B() { x.removeEventListener("DOMContentLoaded", B), E.removeEventListener("load", B), C.ready() }
    C.fn.ready = function(e) { return M.then(e).catch(function(e) { C.readyException(e) }), this }, C.extend({ isReady: !1, readyWait: 1, ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || M.resolveWith(x, [C]) } }), C.ready.then = M.then, "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? E.setTimeout(C.ready) : (x.addEventListener("DOMContentLoaded", B), E.addEventListener("load", B)); var W = function(e, t, n, i, r, o, a) { var s = 0,
                l = e.length,
                u = null == n; if ("object" === w(n))
                for (s in r = !0, n) W(e, t, s, n[s], !0, o, a);
            else if (void 0 !== i && (r = !0, y(i) || (a = !0), u && (t = a ? (t.call(e, i), null) : (u = t, function(e, t, n) { return u.call(C(e), n) })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n))); return r ? e : u ? t.call(e) : l ? t(e[0], n) : o },
        U = /^-ms-/,
        Q = /-([a-z])/g;

    function $(e, t) { return t.toUpperCase() }

    function z(e) { return e.replace(U, "ms-").replace(Q, $) } var X = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function V() { this.expando = C.expando + V.uid++ }
    V.uid = 1, V.prototype = { cache: function(e) { var t = e[this.expando]; return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) { var i, r = this.cache(e); if ("string" == typeof t) r[z(t)] = n;
            else
                for (i in t) r[z(i)] = t[i]; return r }, get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)] }, access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, t) { var n, i = e[this.expando]; if (void 0 !== i) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in i ? [t] : t.match(q) || []).length; for (; n--;) delete i[t[n]] }(void 0 === t || C.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !C.isEmptyObject(t) } }; var Y = new V,
        K = new V,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, n) { var i, r; if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) { try { n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : G.test(r) ? JSON.parse(r) : r) } catch (e) {}
                K.set(e, t, n) } else n = void 0;
        return n }
    C.extend({ hasData: function(e) { return K.hasData(e) || Y.hasData(e) }, data: function(e, t, n) { return K.access(e, t, n) }, removeData: function(e, t) { K.remove(e, t) }, _data: function(e, t, n) { return Y.access(e, t, n) }, _removeData: function(e, t) { Y.remove(e, t) } }), C.fn.extend({ data: function(n, e) { var t, i, r, o = this[0],
                a = o && o.attributes; if (void 0 !== n) return "object" == typeof n ? this.each(function() { K.set(this, n) }) : W(this, function(e) { var t; if (o && void 0 === e) return void 0 !== (t = K.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() { K.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0); if (this.length && (r = K.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) { for (t = a.length; t--;) a[t] && 0 === (i = a[t].name).indexOf("data-") && (i = z(i.slice(5)), Z(o, i, r[i]));
                Y.set(o, "hasDataAttrs", !0) } return r }, removeData: function(e) { return this.each(function() { K.remove(this, e) }) } }), C.extend({ queue: function(e, t, n) { var i; if (e) return t = (t || "fx") + "queue", i = Y.get(e, t), n && (!i || Array.isArray(n) ? i = Y.access(e, t, C.makeArray(n)) : i.push(n)), i || [] }, dequeue: function(e, t) { t = t || "fx"; var n = C.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = C._queueHooks(e, t); "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() { C.dequeue(e, t) }, o)), !i && o && o.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return Y.get(e, n) || Y.access(e, n, { empty: C.Callbacks("once memory").add(function() { Y.remove(e, [t + "queue", n]) }) }) } }), C.fn.extend({ queue: function(t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() { var e = C.queue(this, t, n);
                C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t) }) }, dequeue: function(e) { return this.each(function() { C.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) { var n, i = 1,
                r = C.Deferred(),
                o = this,
                a = this.length,
                s = function() {--i || r.resolveWith(o, [o]) }; for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s)); return s(), r.promise(t) } }); var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = x.documentElement,
        re = function(e) { return C.contains(e.ownerDocument, e) },
        oe = { composed: !0 };
    ie.getRootNode && (re = function(e) { return C.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument }); var ae = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === C.css(e, "display") };

    function se(e, t, n, i) { var r, o, a = 20,
            s = i ? function() { return i.cur() } : function() { return C.css(e, t, "") },
            l = s(),
            u = n && n[3] || (C.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (C.cssNumber[t] || "px" !== u && +l) && te.exec(C.css(e, t)); if (c && c[3] !== u) { for (l /= 2, u = u || c[3], c = +l || 1; a--;) C.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, C.style(e, t, c + u), n = n || [] } return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r } var le = {};

    function ue(e, t) { for (var n, i, r, o, a, s, l, u = [], c = 0, f = e.length; c < f; c++)(i = e[c]).style && (n = i.style.display, t ? ("none" === n && (u[c] = Y.get(i, "display") || null, u[c] || (i.style.display = "")), "" === i.style.display && ae(i) && (u[c] = (l = a = o = void 0, a = (r = i).ownerDocument, s = r.nodeName, (l = le[s]) || (o = a.body.appendChild(a.createElement(s)), l = C.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), le[s] = l)))) : "none" !== n && (u[c] = "none", Y.set(i, "display", n))); for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]); return e }
    C.fn.extend({ show: function() { return ue(this, !0) }, hide: function() { return ue(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ae(this) ? C(this).show() : C(this).hide() }) } }); var ce, fe, de = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i;
    ce = x.createDocumentFragment().appendChild(x.createElement("div")), (fe = x.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", v.option = !!ce.lastChild; var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function me(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? C.merge([e], n) : n }

    function ve(e, t) { for (var n = 0, i = e.length; n < i; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval")) }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]); var ye = /<|&#?\w+;/;

    function _e(e, t, n, i, r) { for (var o, a, s, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === w(o)) C.merge(d, o.nodeType ? [o] : o);
                else if (ye.test(o)) { for (a = a || f.appendChild(t.createElement("div")), s = (he.exec(o) || ["", ""])[1].toLowerCase(), l = ge[s] || ge._default, a.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
            C.merge(d, a.childNodes), (a = f.firstChild).textContent = "" } else d.push(t.createTextNode(o)); for (f.textContent = "", h = 0; o = d[h++];)
            if (i && -1 < C.inArray(o, i)) r && r.push(o);
            else if (u = re(o), a = me(f.appendChild(o), "script"), u && ve(a), n)
            for (c = 0; o = a[c++];) pe.test(o.type || "") && n.push(o); return f } var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ee() { return !0 }

    function xe() { return !1 }

    function Ce(e, t) { return e === function() { try { return x.activeElement } catch (e) {} }() == ("focus" === t) }

    function Se(e, t, n, i, r, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (i = i || n, n = void 0), t) Se(e, s, n, i, t[s], o); return e } if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = xe;
        else if (!r) return e; return 1 === o && (a = r, (r = function(e) { return C().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = C.guid++)), e.each(function() { C.event.add(this, t, r, i, n) }) }

    function ke(e, r, o) { o ? (Y.set(e, r, !1), C.event.add(e, r, { namespace: !1, handler: function(e) { var t, n, i = Y.get(this, r); if (1 & e.isTrigger && this[r]) { if (i.length)(C.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (i = s.call(arguments), Y.set(this, r, i), t = o(this, r), this[r](), i !== (n = Y.get(this, r)) || t ? Y.set(this, r, !1) : n = {}, i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value } else i.length && (Y.set(this, r, { value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === Y.get(e, r) && C.event.add(e, r, Ee) }
    C.event = { global: {}, add: function(t, e, n, i, r) { var o, a, s, l, u, c, f, d, h, p, g, m = Y.get(t); if (X(t))
                for (n.handler && (n = (o = n).handler, r = o.selector), r && C.find.matchesSelector(ie, r), n.guid || (n.guid = C.guid++), (l = m.events) || (l = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function(e) { return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0 }), u = (e = (e || "").match(q) || [""]).length; u--;) h = g = (s = Te.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), h && (f = C.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = C.event.special[h] || {}, c = C.extend({ type: h, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && C.expr.match.needsContext.test(r), namespace: p.join(".") }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(h, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), C.event.global[h] = !0) }, remove: function(e, t, n, i, r) { var o, a, s, l, u, c, f, d, h, p, g, m = Y.hasData(e) && Y.get(e); if (m && (l = m.events)) { for (u = (t = (t || "").match(q) || [""]).length; u--;)
                    if (h = g = (s = Te.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h) { for (f = C.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || C.removeEvent(e, h, m.handle), delete l[h]) } else
                        for (h in l) C.event.remove(e, h + t[u], n, i, !0);
                C.isEmptyObject(l) && Y.remove(e, "handle events") } }, dispatch: function(e) { var t, n, i, r, o, a, s = new Array(arguments.length),
                l = C.event.fix(e),
                u = (Y.get(this, "events") || Object.create(null))[l.type] || [],
                c = C.event.special[l.type] || {}; for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t]; if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) { for (a = C.event.handlers.call(this, l, u), t = 0;
                    (r = a[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((C.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation())); return c.postDispatch && c.postDispatch.call(this, l), l.result } }, handlers: function(e, t) { var n, i, r, o, a, s = [],
                l = t.delegateCount,
                u = e.target; if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) { for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? -1 < C(r, this).index(u) : C.find(r, this, null, [u]).length), a[r] && o.push(i);
                        o.length && s.push({ elem: u, handlers: o }) }
            return u = this, l < t.length && s.push({ elem: u, handlers: t.slice(l) }), s }, addProp: function(t, e) { Object.defineProperty(C.Event.prototype, t, { enumerable: !0, configurable: !0, get: y(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function(e) { return e[C.expando] ? e : new C.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return de.test(t.type) && t.click && k(t, "input") && ke(t, "click", Ee), !1 }, trigger: function(e) { var t = this || e; return de.test(t.type) && t.click && k(t, "input") && ke(t, "click"), !0 }, _default: function(e) { var t = e.target; return de.test(t.type) && t.click && k(t, "input") && Y.get(t, "click") || k(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, C.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, C.Event = function(e, t) { if (!(this instanceof C.Event)) return new C.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0 }, C.Event.prototype = { constructor: C.Event, isDefaultPrevented: xe, isPropagationStopped: xe, isImmediatePropagationStopped: xe, isSimulated: !1, preventDefault: function() { var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() { var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() { var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, C.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, C.event.addProp), C.each({ focus: "focusin", blur: "focusout" }, function(e, t) { C.event.special[e] = { setup: function() { return ke(this, e, Ce), !1 }, trigger: function() { return ke(this, e), !0 }, delegateType: t } }), C.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, r) { C.event.special[e] = { delegateType: r, bindType: r, handle: function(e) { var t, n = e.relatedTarget,
                    i = e.handleObj; return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t } } }), C.fn.extend({ on: function(e, t, n, i) { return Se(this, e, t, n, i) }, one: function(e, t, n, i) { return Se(this, e, t, n, i, 1) }, off: function(e, t, n) { var i, r; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function() { C.event.remove(this, e, n, t) }); for (r in e) this.off(r, t, e[r]); return this } }); var Ae = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) { return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e }

    function Ie(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function Le(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Oe(e, t) { var n, i, r, o, a, s; if (1 === t.nodeType) { if (Y.hasData(e) && (s = Y.get(e).events))
                for (r in Y.remove(t, "handle events"), s)
                    for (n = 0, i = s[r].length; n < i; n++) C.event.add(t, r, s[r][n]);
            K.hasData(e) && (o = K.access(e), a = C.extend({}, o), K.set(t, a)) } }

    function qe(n, i, r, o) { i = g(i); var e, t, a, s, l, u, c = 0,
            f = n.length,
            d = f - 1,
            h = i[0],
            p = y(h); if (p || 1 < f && "string" == typeof h && !v.checkClone && Ne.test(h)) return n.each(function(e) { var t = n.eq(e);
            p && (i[0] = h.call(this, e, t.html())), qe(t, i, r, o) }); if (f && (t = (e = _e(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = C.map(me(e, "script"), Ie)).length; c < f; c++) l = e, c !== d && (l = C.clone(l, !0, !0), s && C.merge(a, me(l, "script"))), r.call(n[c], l, c); if (s)
                for (u = a[a.length - 1].ownerDocument, C.map(a, Le), c = 0; c < s; c++) l = a[c], pe.test(l.type || "") && !Y.access(l, "globalEval") && C.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, u) : b(l.textContent.replace(De, ""), l, u)) } return n }

    function Pe(e, t, n) { for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || C.cleanData(me(i)), i.parentNode && (n && re(i) && ve(me(i, "script")), i.parentNode.removeChild(i)); return e }
    C.extend({ htmlPrefilter: function(e) { return e }, clone: function(e, t, n) { var i, r, o, a, s, l, u, c = e.cloneNode(!0),
                f = re(e); if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (a = me(c), i = 0, r = (o = me(e)).length; i < r; i++) s = o[i], "input" === (u = (l = a[i]).nodeName.toLowerCase()) && de.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue); if (t)
                if (n)
                    for (o = o || me(e), a = a || me(c), i = 0, r = o.length; i < r; i++) Oe(o[i], a[i]);
                else Oe(e, c);
            return 0 < (a = me(c, "script")).length && ve(a, !f && me(e, "script")), c }, cleanData: function(e) { for (var t, n, i, r = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (X(n)) { if (t = n[Y.expando]) { if (t.events)
                            for (i in t.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                        n[Y.expando] = void 0 }
                    n[K.expando] && (n[K.expando] = void 0) } } }), C.fn.extend({ detach: function(e) { return Pe(this, e, !0) }, remove: function(e) { return Pe(this, e) }, text: function(e) { return W(this, function(e) { return void 0 === e ? C.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() { return qe(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e) }) }, prepend: function() { return qe(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = je(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() { return qe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return qe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(me(e, !1)), e.textContent = ""); return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return C.clone(this, e, t) }) }, html: function(e) { return W(this, function(e) { var t = this[0] || {},
                    n = 0,
                    i = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !Ae.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) { e = C.htmlPrefilter(e); try { for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0 } catch (e) {} }
                t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var n = []; return qe(this, arguments, function(e) { var t = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(me(this)), t && t.replaceChild(e, this)) }, n) } }), C.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { C.fn[e] = function(e) { for (var t, n = [], i = C(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), C(i[o])[a](t), l.apply(n, t.get()); return this.pushStack(n) } }); var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        He = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = E), t.getComputedStyle(e) },
        Fe = function(e, t, n) { var i, r, o = {}; for (r in t) o[r] = e.style[r], e.style[r] = t[r]; for (r in i = n.call(e), t) e.style[r] = o[r]; return i },
        Me = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) { var i, r, o, a, s = e.style; return (n = n || He(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || re(e) || (a = C.style(e, t)), !v.pixelBoxStyles() && Re.test(a) && Me.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function We(e, t) { return { get: function() { if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get } } }! function() {
        function e() { if (u) { l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(l).appendChild(u); var e = E.getComputedStyle(u);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), i = 36 === t(e.width), u.style.position = "absolute", r = 12 === t(u.offsetWidth / 3), ie.removeChild(l), u = null } }

        function t(e) { return Math.round(parseFloat(e)) } var n, i, r, o, a, s, l = x.createElement("div"),
            u = x.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, C.extend(v, { boxSizingReliable: function() { return e(), i }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), s }, scrollboxSize: function() { return e(), r }, reliableTrDimensions: function() { var e, t, n, i; return null == a && (e = x.createElement("table"), t = x.createElement("tr"), n = x.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", ie.appendChild(e).appendChild(t).appendChild(n), i = E.getComputedStyle(t), a = 3 < parseInt(i.height), ie.removeChild(e)), a } })) }(); var Ue = ["Webkit", "Moz", "ms"],
        Qe = x.createElement("div").style,
        $e = {};

    function ze(e) { return C.cssProps[e] || $e[e] || (e in Qe ? e : $e[e] = function(e) { for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;)
                if ((e = Ue[n] + t) in Qe) return e }(e) || e) } var Xe = /^(none|table(?!-c[ea]).+)/,
        Ve = /^--/,
        Ye = { position: "absolute", visibility: "hidden", display: "block" },
        Ke = { letterSpacing: "0", fontWeight: "400" };

    function Ge(e, t, n) { var i = te.exec(t); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t }

    function Je(e, t, n, i, r, o) { var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0; if (n === (i ? "border" : "content")) return 0; for (; a < 4; a += 2) "margin" === n && (l += C.css(e, n + ne[a], !0, r)), i ? ("content" === n && (l -= C.css(e, "padding" + ne[a], !0, r)), "margin" !== n && (l -= C.css(e, "border" + ne[a] + "Width", !0, r))) : (l += C.css(e, "padding" + ne[a], !0, r), "padding" !== n ? l += C.css(e, "border" + ne[a] + "Width", !0, r) : s += C.css(e, "border" + ne[a] + "Width", !0, r)); return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l }

    function Ze(e, t, n) { var i = He(e),
            r = (!v.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i),
            o = r,
            a = Be(e, t, i),
            s = "offset" + t[0].toUpperCase() + t.slice(1); if (Re.test(a)) { if (!n) return a;
            a = "auto" } return (!v.boxSizingReliable() && r || !v.reliableTrDimensions() && k(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === C.css(e, "boxSizing", !1, i), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Je(e, t, n || (r ? "border" : "content"), o, i, a) + "px" }

    function et(e, t, n, i, r) { return new et.prototype.init(e, t, n, i, r) }
    C.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Be(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function(e, t, n, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var r, o, a, s = z(t),
                    l = Ve.test(t),
                    u = e.style; if (l || (t = ze(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t]; "string" == (o = typeof n) && (r = te.exec(n)) && r[1] && (n = se(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (C.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n)) } }, css: function(e, t, n, i) { var r, o, a, s = z(t); return Ve.test(t) || (t = ze(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = Be(e, t, i)), "normal" === r && t in Ke && (r = Ke[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r } }), C.each(["height", "width"], function(e, l) { C.cssHooks[l] = { get: function(e, t, n) { if (t) return !Xe.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, l, n) : Fe(e, Ye, function() { return Ze(e, l, n) }) }, set: function(e, t, n) { var i, r = He(e),
                    o = !v.scrollboxSize() && "absolute" === r.position,
                    a = (o || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                    s = n ? Je(e, l, n, a, r) : 0; return a && o && (s -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(r[l]) - Je(e, l, "border", !1, r) - .5)), s && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[l] = t, t = C.css(e, l)), Ge(0, t, s) } } }), C.cssHooks.marginLeft = We(v.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), C.each({ margin: "", padding: "", border: "Width" }, function(r, o) { C.cssHooks[r + o] = { expand: function(e) { for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ne[t] + o] = i[t] || i[t - 2] || i[0]; return n } }, "margin" !== r && (C.cssHooks[r + o].set = Ge) }), C.fn.extend({ css: function(e, t) { return W(this, function(e, t, n) { var i, r, o = {},
                    a = 0; if (Array.isArray(t)) { for (i = He(e), r = t.length; a < r; a++) o[t[a]] = C.css(e, t[a], !1, i); return o } return void 0 !== n ? C.style(e, t, n) : C.css(e, t) }, e, t, 1 < arguments.length) } }), ((C.Tween = et).prototype = { constructor: et, init: function(e, t, n, i, r, o) { this.elem = e, this.prop = n, this.easing = r || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (C.cssNumber[n] ? "" : "px") }, cur: function() { var e = et.propHooks[this.prop]; return e && e.get ? e.get(this) : et.propHooks._default.get(this) }, run: function(e) { var t, n = et.propHooks[this.prop]; return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this } }).init.prototype = et.prototype, (et.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = et.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, C.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, C.fx = et.prototype.init, C.fx.step = {}; var tt, nt, it, rt, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() { nt && (!1 === x.hidden && E.requestAnimationFrame ? E.requestAnimationFrame(st) : E.setTimeout(st, C.fx.interval), C.fx.tick()) }

    function lt() { return E.setTimeout(function() { tt = void 0 }), tt = Date.now() }

    function ut(e, t) { var n, i = 0,
            r = { height: e }; for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r }

    function ct(e, t, n) { for (var i, r = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i }

    function ft(o, e, t) { var n, a, i = 0,
            r = ft.prefilters.length,
            s = C.Deferred().always(function() { delete l.elem }),
            l = function() { if (a) return !1; for (var e = tt || lt(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n); return s.notifyWith(o, [u, n, t]), n < 1 && r ? t : (r || s.notifyWith(o, [u, 1, 0]), s.resolveWith(o, [u]), !1) },
            u = s.promise({ elem: o, props: C.extend({}, e), opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, t), originalProperties: e, originalOptions: t, startTime: tt || lt(), duration: t.duration, tweens: [], createTween: function(e, t) { var n = C.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing); return u.tweens.push(n), n }, stop: function(e) { var t = 0,
                        n = e ? u.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++) u.tweens[t].run(1); return e ? (s.notifyWith(o, [u, 1, 0]), s.resolveWith(o, [u, e])) : s.rejectWith(o, [u, e]), this } }),
            c = u.props; for (function(e, t) { var n, i, r, o, a; for (n in e)
                    if (r = t[i = z(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = C.cssHooks[i]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r }(c, u.opts.specialEasing); i < r; i++)
            if (n = ft.prefilters[i].call(u, o, c, u.opts)) return y(n.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
        return C.map(c, ct, u), y(u.opts.start) && u.opts.start.call(o, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), C.fx.timer(C.extend(l, { elem: o, anim: u, queue: u.opts.queue })), u }
    C.Animation = C.extend(ft, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return se(n.elem, e, te.exec(t), n), n }] }, tweener: function(e, t) { for (var n, i = 0, r = (e = y(e) ? (t = e, ["*"]) : e.match(q)).length; i < r; i++) n = e[i], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t) }, prefilters: [function(e, t, n) { var i, r, o, a, s, l, u, c, f = "width" in t || "height" in t,
                d = this,
                h = {},
                p = e.style,
                g = e.nodeType && ae(e),
                m = Y.get(e, "fxshow"); for (i in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, d.always(function() { d.always(function() { a.unqueued--, C.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (r = t[i], ot.test(r)) { if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) { if ("show" !== r || !m || void 0 === m[i]) continue;
                        g = !0 }
                    h[i] = m && m[i] || C.style(e, i) }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
                for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = Y.get(e, "display")), "none" === (c = C.css(e, "display")) && (u ? c = u : (ue([e], !0), u = e.style.display || u, c = C.css(e, "display"), ue([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(e, "float") && (l || (d.done(function() { p.display = u }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = Y.access(e, "fxshow", { display: u }), o && (m.hidden = !g), g && ue([e], !0), d.done(function() { for (i in g || ue([e]), Y.remove(e, "fxshow"), h) C.style(e, i, h[i]) })), l = ct(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0)) }], prefilter: function(e, t) { t ? ft.prefilters.unshift(e) : ft.prefilters.push(e) } }), C.speed = function(e, t, n) { var i = e && "object" == typeof e ? C.extend({}, e) : { complete: n || !n && t || y(e) && e, duration: e, easing: n && t || t && !y(t) && t }; return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() { y(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue) }, i }, C.fn.extend({ fadeTo: function(e, t, n, i) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) }, animate: function(t, e, n, i) { var r = C.isEmptyObject(t),
                o = C.speed(e, n, i),
                a = function() { var e = ft(this, C.extend({}, t), o);
                    (r || Y.get(this, "finish")) && e.stop(!0) }; return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function(r, e, o) { var a = function(e) { var t = e.stop;
                delete e.stop, t(o) }; return "string" != typeof r && (o = e, e = r, r = void 0), e && this.queue(r || "fx", []), this.each(function() { var e = !0,
                    t = null != r && r + "queueHooks",
                    n = C.timers,
                    i = Y.get(this); if (t) i[t] && i[t].stop && a(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && at.test(t) && a(i[t]); for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));!e && o || C.dequeue(this, r) }) }, finish: function(a) { return !1 !== a && (a = a || "fx"), this.each(function() { var e, t = Y.get(this),
                    n = t[a + "queue"],
                    i = t[a + "queueHooks"],
                    r = C.timers,
                    o = n ? n.length : 0; for (t.finish = !0, C.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1)); for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish }) } }), C.each(["toggle", "show", "hide"], function(e, i) { var r = C.fn[i];
        C.fn[i] = function(e, t, n) { return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(ut(i, !0), e, t, n) } }), C.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, i) { C.fn[e] = function(e, t, n) { return this.animate(i, e, t, n) } }), C.timers = [], C.fx.tick = function() { var e, t = 0,
            n = C.timers; for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(), tt = void 0 }, C.fx.timer = function(e) { C.timers.push(e), C.fx.start() }, C.fx.interval = 13, C.fx.start = function() { nt || (nt = !0, st()) }, C.fx.stop = function() { nt = null }, C.fx.speeds = { slow: 600, fast: 200, _default: 400 }, C.fn.delay = function(i, e) { return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) { var n = E.setTimeout(e, i);
            t.stop = function() { E.clearTimeout(n) } }) }, it = x.createElement("input"), rt = x.createElement("select").appendChild(x.createElement("option")), it.type = "checkbox", v.checkOn = "" !== it.value, v.optSelected = rt.selected, (it = x.createElement("input")).value = "t", it.type = "radio", v.radioValue = "t" === it.value; var dt, ht = C.expr.attrHandle;
    C.fn.extend({ attr: function(e, t) { return W(this, C.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { C.removeAttr(this, e) }) } }), C.extend({ attr: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (r = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i) }, attrHooks: { type: { set: function(e, t) { if (!v.radioValue && "radio" === t && k(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) { var n, i = 0,
                r = t && t.match(q); if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n) } }), dt = { set: function(e, t, n) { return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n } }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) { var a = ht[t] || C.find.attr;
        ht[t] = function(e, t, n) { var i, r, o = t.toLowerCase(); return n || (r = ht[o], ht[o] = i, i = null != a(e, t, n) ? o : null, ht[o] = r), i } }); var pt = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function mt(e) { return (e.match(q) || []).join(" ") }

    function vt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function yt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || [] }
    C.fn.extend({ prop: function(e, t) { return W(this, C.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[C.propFix[e] || e] }) } }), C.extend({ prop: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, r = C.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = C.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : pt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), v.optSelected || (C.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) { var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { C.propFix[this.toLowerCase()] = this }), C.fn.extend({ addClass: function(t) { var e, n, i, r, o, a, s, l = 0; if (y(t)) return this.each(function(e) { C(this).addClass(t.call(this, e, vt(this))) }); if ((e = yt(t)).length)
                for (; n = this[l++];)
                    if (r = vt(n), i = 1 === n.nodeType && " " + mt(r) + " ") { for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (s = mt(i)) && n.setAttribute("class", s) }
            return this }, removeClass: function(t) { var e, n, i, r, o, a, s, l = 0; if (y(t)) return this.each(function(e) { C(this).removeClass(t.call(this, e, vt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((e = yt(t)).length)
                for (; n = this[l++];)
                    if (r = vt(n), i = 1 === n.nodeType && " " + mt(r) + " ") { for (a = 0; o = e[a++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (s = mt(i)) && n.setAttribute("class", s) }
            return this }, toggleClass: function(r, t) { var o = typeof r,
                a = "string" === o || Array.isArray(r); return "boolean" == typeof t && a ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function(e) { C(this).toggleClass(r.call(this, e, vt(this), t), t) }) : this.each(function() { var e, t, n, i; if (a)
                    for (t = 0, n = C(this), i = yt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== r && "boolean" !== o || ((e = vt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : Y.get(this, "__className__") || "")) }) }, hasClass: function(e) { var t, n, i = 0; for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + mt(vt(n)) + " ").indexOf(t)) return !0;
            return !1 } }); var _t = /\r/g;
    C.fn.extend({ val: function(n) { var i, e, r, t = this[0]; return arguments.length ? (r = y(n), this.each(function(e) { var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(e) { return null == e ? "" : e + "" })), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t)) })) : t ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(_t, "") : null == e ? "" : e : void 0 } }), C.extend({ valHooks: { option: { get: function(e) { var t = C.find.attr(e, "value"); return null != t ? t : mt(C.text(e)) } }, select: { get: function(e) { var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? o + 1 : r.length; for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) { if (t = C(n).val(), a) return t;
                            s.push(t) }
                    return s }, set: function(e, t) { for (var n, i, r = e.options, o = C.makeArray(t), a = r.length; a--;)((i = r[a]).selected = -1 < C.inArray(C.valHooks.option.get(i), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), C.each(["radio", "checkbox"], function() { C.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t) } }, v.checkOn || (C.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), v.focusin = "onfocusin" in E; var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) { e.stopPropagation() };
    C.extend(C.event, { trigger: function(e, t, n, i) { var r, o, a, s, l, u, c, f, d = [n || x],
                h = m.call(e, "type") ? e.type : e,
                p = m.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || x, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(h + C.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[C.expando] ? e : new C.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), c = C.event.special[h] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!i && !c.noBubble && !_(n)) { for (s = c.delegateType || h, bt.test(s + h) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
                    a === (n.ownerDocument || x) && d.push(a.defaultView || a.parentWindow || E) } for (r = 0;
                    (o = d[r++]) && !e.isPropagationStopped();) f = o, e.type = 1 < r ? s : c.bindType || h, (u = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && u.apply(o, t), (u = l && o[l]) && u.apply && X(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = h, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !X(n) || l && y(n[h]) && !_(n) && ((a = n[l]) && (n[l] = null), C.event.triggered = h, e.isPropagationStopped() && f.addEventListener(h, wt), n[h](), e.isPropagationStopped() && f.removeEventListener(h, wt), C.event.triggered = void 0, a && (n[l] = a)), e.result } }, simulate: function(e, t, n) { var i = C.extend(new C.Event, n, { type: e, isSimulated: !0 });
            C.event.trigger(i, null, t) } }), C.fn.extend({ trigger: function(e, t) { return this.each(function() { C.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return C.event.trigger(e, t, n, !0) } }), v.focusin || C.each({ focus: "focusin", blur: "focusout" }, function(n, i) { var r = function(e) { C.event.simulate(i, e.target, C.event.fix(e)) };
        C.event.special[i] = { setup: function() { var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, i);
                t || e.addEventListener(n, r, !0), Y.access(e, i, (t || 0) + 1) }, teardown: function() { var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, i) - 1;
                t ? Y.access(e, i, t) : (e.removeEventListener(n, r, !0), Y.remove(e, i)) } } }); var Tt = E.location,
        Et = { guid: Date.now() },
        xt = /\?/;
    C.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new E.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t }; var Ct = /\[\]$/,
        St = /\r?\n/g,
        kt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function Nt(n, e, i, r) { var t; if (Array.isArray(e)) C.each(e, function(e, t) { i || Ct.test(n) ? r(n, t) : Nt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r) });
        else if (i || "object" !== w(e)) r(n, e);
        else
            for (t in e) Nt(n + "[" + t + "]", e[t], i, r) }
    C.param = function(e, t) { var n, i = [],
            r = function(e, t) { var n = y(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() { r(this.name, this.value) });
        else
            for (n in e) Nt(n, e[n], t, r); return i.join("&") }, C.fn.extend({ serialize: function() { return C.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = C.prop(this, "elements"); return e ? C.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !C(this).is(":disabled") && At.test(this.nodeName) && !kt.test(e) && (this.checked || !de.test(e)) }).map(function(e, t) { var n = C(this).val(); return null == n ? null : Array.isArray(n) ? C.map(n, function(e) { return { name: t.name, value: e.replace(St, "\r\n") } }) : { name: t.name, value: n.replace(St, "\r\n") } }).get() } }); var Dt = /%20/g,
        jt = /#.*$/,
        It = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        Pt = {},
        Rt = {},
        Ht = "*/".concat("*"),
        Ft = x.createElement("a");

    function Mt(o) { return function(e, t) { "string" != typeof e && (t = e, e = "*"); var n, i = 0,
                r = e.toLowerCase().match(q) || []; if (y(t))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } }

    function Bt(t, r, o, a) { var s = {},
            l = t === Rt;

        function u(e) { var i; return s[e] = !0, C.each(t[e] || [], function(e, t) { var n = t(r, o, a); return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), u(n), !1) }), i } return u(r.dataTypes[0]) || !s["*"] && u("*") }

    function Wt(e, t) { var n, i, r = C.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]); return i && C.extend(!0, e, i), e }
    Ft.href = Tt.href, C.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ht, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) { return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e) }, ajaxPrefilter: Mt(Pt), ajaxTransport: Mt(Rt), ajax: function(e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, d, n, h, i, p, g, r, o, m = C.ajaxSetup({}, t),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? C(v) : C.event,
                _ = C.Deferred(),
                b = C.Callbacks("once memory"),
                w = m.statusCode || {},
                a = {},
                s = {},
                l = "canceled",
                T = { readyState: 0, getResponseHeader: function(e) { var t; if (p) { if (!n)
                                for (n = {}; t = Lt.exec(d);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function() { return p ? d : null }, setRequestHeader: function(e, t) { return null == p && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function(e) { return null == p && (m.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                            if (p) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this }, abort: function(e) { var t = e || l; return c && c.abort(t), u(0, t), this } }; if (_.promise(T), m.url = ((e || m.url || Tt.href) + "").replace(qt, Tt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(q) || [""], null == m.crossDomain) { i = x.createElement("a"); try { i.href = m.url, i.href = i.href, m.crossDomain = Ft.protocol + "//" + Ft.host != i.protocol + "//" + i.host } catch (e) { m.crossDomain = !0 } } if (m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), Bt(Pt, m, t, T), p) return T; for (r in (g = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Ot.test(m.type), f = m.url.replace(jt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Dt, "+")) : (o = m.url.slice(f.length), m.data && (m.processData || "string" == typeof m.data) && (f += (xt.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (f = f.replace(It, "$1"), o = (xt.test(f) ? "&" : "?") + "_=" + Et.guid++ + o), m.url = f + o), m.ifModified && (C.lastModified[f] && T.setRequestHeader("If-Modified-Since", C.lastModified[f]), C.etag[f] && T.setRequestHeader("If-None-Match", C.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(r, m.headers[r]); if (m.beforeSend && (!1 === m.beforeSend.call(v, T, m) || p)) return T.abort(); if (l = "abort", b.add(m.complete), T.done(m.success), T.fail(m.error), c = Bt(Rt, m, t, T)) { if (T.readyState = 1, g && y.trigger("ajaxSend", [T, m]), p) return T;
                m.async && 0 < m.timeout && (h = E.setTimeout(function() { T.abort("timeout") }, m.timeout)); try { p = !1, c.send(a, u) } catch (e) { if (p) throw e;
                    u(-1, e) } } else u(-1, "No Transport");

            function u(e, t, n, i) { var r, o, a, s, l, u = t;
                p || (p = !0, h && E.clearTimeout(h), c = void 0, d = i || "", T.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) { for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type")); if (i)
                        for (r in s)
                            if (s[r] && s[r].test(i)) { l.unshift(r); break }
                    if (l[0] in n) o = l[0];
                    else { for (r in n) { if (!l[0] || e.converters[r + " " + l[0]]) { o = r; break }
                            a || (a = r) }
                        o = o || a } if (o) return o !== l[0] && l.unshift(o), n[o] }(m, T, n)), !r && -1 < C.inArray("script", m.dataTypes) && (m.converters["text script"] = function() {}), s = function(e, t, n, i) { var r, o, a, s, l, u = {},
                        c = e.dataTypes.slice(); if (c[1])
                        for (a in e.converters) u[a.toLowerCase()] = e.converters[a]; for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) { if (!(a = u[l + " " + o] || u["* " + o]))
                            for (r in u)
                                if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {!0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o } } } return { state: "success", data: t } }(m, s, T, r), r ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (C.lastModified[f] = l), (l = T.getResponseHeader("etag")) && (C.etag[f] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, o = s.data, r = !(a = s.error))) : (a = u, !e && u || (u = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || u) + "", r ? _.resolveWith(v, [o, u, T]) : _.rejectWith(v, [T, u, a]), T.statusCode(w), w = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [T, m, r ? o : a]), b.fireWith(v, [T, u]), g && (y.trigger("ajaxComplete", [T, m]), --C.active || C.event.trigger("ajaxStop"))) } return T }, getJSON: function(e, t, n) { return C.get(e, t, n, "json") }, getScript: function(e, t) { return C.get(e, void 0, t, "script") } }), C.each(["get", "post"], function(e, r) { C[r] = function(e, t, n, i) { return y(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({ url: e, type: r, dataType: i, data: t, success: n }, C.isPlainObject(e) && e)) } }), C.ajaxPrefilter(function(e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), C._evalUrl = function(e, t, n) { return C.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { C.globalEval(e, t, n) } }) }, C.fn.extend({ wrapAll: function(e) { var t; return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function(n) { return y(n) ? this.each(function(e) { C(this).wrapInner(n.call(this, e)) }) : this.each(function() { var e = C(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function(t) { var n = y(t); return this.each(function(e) { C(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function(e) { return this.parent(e).not("body").each(function() { C(this).replaceWith(this.childNodes) }), this } }), C.expr.pseudos.hidden = function(e) { return !C.expr.pseudos.visible(e) }, C.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, C.ajaxSettings.xhr = function() { try { return new E.XMLHttpRequest } catch (e) {} }; var Ut = { 0: 200, 1223: 204 },
        Qt = C.ajaxSettings.xhr();
    v.cors = !!Qt && "withCredentials" in Qt, v.ajax = Qt = !!Qt, C.ajaxTransport(function(r) { var o, a; if (v.cors || Qt && !r.crossDomain) return { send: function(e, t) { var n, i = r.xhr(); if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n]; for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Ut[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? { binary: i.response } : { text: i.responseText }, i.getAllResponseHeaders())) } }, i.onload = o(), a = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function() { 4 === i.readyState && E.setTimeout(function() { o && a() }) }, o = o("abort"); try { i.send(r.hasContent && r.data || null) } catch (e) { if (o) throw e } }, abort: function() { o && o() } } }), C.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), C.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return C.globalEval(e), e } } }), C.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), C.ajaxTransport("script", function(n) { var i, r; if (n.crossDomain || n.scriptAttrs) return { send: function(e, t) { i = C("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", r = function(e) { i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type) }), x.head.appendChild(i[0]) }, abort: function() { r && r() } } }); var $t, zt = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = zt.pop() || C.expando + "_" + Et.guid++; return this[e] = !0, e } }), C.ajaxPrefilter("json jsonp", function(e, t, n) { var i, r, o, a = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Xt, "$1" + i) : !1 !== e.jsonp && (e.url += (xt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() { return o || C.error(i + " was not called"), o[0] }, e.dataTypes[0] = "json", r = E[i], E[i] = function() { o = arguments }, n.always(function() { void 0 === r ? C(E).removeProp(i) : E[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, zt.push(i)), o && y(r) && r(o[0]), o = r = void 0 }), "script" }), v.createHTMLDocument = (($t = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === $t.childNodes.length), C.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href, t.head.appendChild(i)) : t = x), o = !n && [], (r = A.exec(e)) ? [t.createElement(r[1])] : (r = _e([e], t, o), o && o.length && C(o).remove(), C.merge([], r.childNodes))); var i, r, o }, C.fn.load = function(e, t, n) { var i, r, o, a = this,
            s = e.indexOf(" "); return -1 < s && (i = mt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < a.length && C.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this }, C.expr.pseudos.animated = function(t) { return C.grep(C.timers, function(e) { return t === e.elem }).length }, C.offset = { setOffset: function(e, t, n) { var i, r, o, a, s, l, u = C.css(e, "position"),
                c = C(e),
                f = {}; "static" === u && (e.style.position = "relative"), s = c.offset(), o = C.css(e, "top"), l = C.css(e, "left"), r = ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (a = (i = c.position()).top, i.left) : (a = parseFloat(o) || 0, parseFloat(l) || 0), y(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f)) } }, C.fn.extend({ offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { C.offset.setOffset(this, t, e) }); var e, n, i = this[0]; return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function() { if (this[0]) { var e, t, n, i = this[0],
                    r = { top: 0, left: 0 }; if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
                else { for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0), r.left += C.css(e, "borderLeftWidth", !0)) } return { top: t.top - r.top - C.css(i, "marginTop", !0), left: t.left - r.left - C.css(i, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent; return e || ie }) } }), C.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, r) { var o = "pageYOffset" === r;
        C.fn[t] = function(e) { return W(this, function(e, t, n) { var i; if (_(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), C.each(["top", "left"], function(e, n) { C.cssHooks[n] = We(v.pixelPosition, function(e, t) { if (t) return t = Be(e, n), Re.test(t) ? C(e).position()[n] + "px" : t }) }), C.each({ Height: "height", Width: "width" }, function(a, s) { C.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(i, o) { C.fn[o] = function(e, t) { var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border"); return W(this, function(e, t, n) { var i; return _(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? C.css(e, t, r) : C.style(e, t, n, r) }, s, n ? e : void 0, n) } }) }), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { C.fn[t] = function(e) { return this.on(t, e) } }), C.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { C.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }); var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    C.proxy = function(e, t) { var n, i, r; if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = s.call(arguments, 2), (r = function() { return e.apply(t || this, i.concat(s.call(arguments))) }).guid = e.guid = e.guid || C.guid++, r }, C.holdReady = function(e) { e ? C.readyWait++ : C.ready(!0) }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = k, C.isFunction = y, C.isWindow = _, C.camelCase = z, C.type = w, C.now = Date.now, C.isNumeric = function(e) { var t = C.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, C.trim = function(e) { return null == e ? "" : (e + "").replace(Vt, "") }, "function" == typeof define && define.amd && define("jquery", [], function() { return C }); var Yt = E.jQuery,
        Kt = E.$; return C.noConflict = function(e) { return E.$ === C && (E.$ = Kt), e && E.jQuery === C && (E.jQuery = Yt), C }, void 0 === e && (E.jQuery = E.$ = C), C }),
function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery, e.Popper) }(this, function(e, t, n) { "use strict";

    function i(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var p = i(t),
        f = i(n);

    function r(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

    function a(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }

    function l() { return (l = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e }).apply(this, arguments) } var g = { TRANSITION_END: "bsTransitionEnd", getUID: function(e) { for (; e += ~~(1e6 * Math.random()), document.getElementById(e);); return e }, getSelectorFromElement: function(e) { var t = e.getAttribute("data-target"); if (!t || "#" === t) { var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : "" } try { return document.querySelector(t) ? t : null } catch (e) { return null } }, getTransitionDurationFromElement: function(e) { if (!e) return 0; var t = p.default(e).css("transition-duration"),
                n = p.default(e).css("transition-delay"),
                i = parseFloat(t),
                r = parseFloat(n); return i || r ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0 }, reflow: function(e) { return e.offsetHeight }, triggerTransitionEnd: function(e) { p.default(e).trigger("transitionend") }, supportsTransitionEnd: function() { return Boolean("transitionend") }, isElement: function(e) { return (e[0] || e).nodeType }, typeCheckConfig: function(e, t, n) { for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) { var r = n[i],
                        o = t[i],
                        a = o && g.isElement(o) ? "element" : null === (s = o) || void 0 === s ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase(); if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".') }
            var s }, findShadowRoot: function(e) { if (!document.documentElement.attachShadow) return null; if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? g.findShadowRoot(e.parentNode) : null; var t = e.getRootNode(); return t instanceof ShadowRoot ? t : null }, jQueryDetection: function() { if (void 0 === p.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var e = p.default.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") } };
    g.jQueryDetection(), p.default.fn.emulateTransitionEnd = function(e) { var t = this,
            n = !1; return p.default(this).one(g.TRANSITION_END, function() { n = !0 }), setTimeout(function() { n || g.triggerTransitionEnd(t) }, e), this }, p.default.event.special[g.TRANSITION_END] = { bindType: "transitionend", delegateType: "transitionend", handle: function(e) { if (p.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }; var o = "alert",
        s = p.default.fn[o],
        u = function() {
            function i(e) { this._element = e } var e = i.prototype; return e.close = function(e) { var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t) }, e.dispose = function() { p.default.removeData(this._element, "bs.alert"), this._element = null }, e._getRootElement = function(e) { var t = g.getSelectorFromElement(e),
                    n = !1; return t && (n = document.querySelector(t)), n || (n = p.default(e).closest(".alert")[0]), n }, e._triggerCloseEvent = function(e) { var t = p.default.Event("close.bs.alert"); return p.default(e).trigger(t), t }, e._removeElement = function(t) { var n = this; if (p.default(t).removeClass("show"), p.default(t).hasClass("fade")) { var e = g.getTransitionDurationFromElement(t);
                    p.default(t).one(g.TRANSITION_END, function(e) { return n._destroyElement(t, e) }).emulateTransitionEnd(e) } else this._destroyElement(t) }, e._destroyElement = function(e) { p.default(e).detach().trigger("closed.bs.alert").remove() }, i._jQueryInterface = function(n) { return this.each(function() { var e = p.default(this),
                        t = e.data("bs.alert");
                    t || (t = new i(this), e.data("bs.alert", t)), "close" === n && t[n](this) }) }, i._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, a(i, null, [{ key: "VERSION", get: function() { return "4.5.3" } }]), i }();
    p.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', u._handleDismiss(new u)), p.default.fn[o] = u._jQueryInterface, p.default.fn[o].Constructor = u, p.default.fn[o].noConflict = function() { return p.default.fn[o] = s, u._jQueryInterface }; var c = p.default.fn.button,
        d = function() {
            function r(e) { this._element = e, this.shouldAvoidTriggerChange = !1 } var e = r.prototype; return e.toggle = function() { var e = !0,
                    t = !0,
                    n = p.default(this._element).closest('[data-toggle="buttons"]')[0]; if (n) { var i = this._element.querySelector('input:not([type="hidden"])'); if (i) { if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains("active")) e = !1;
                            else { var r = n.querySelector(".active");
                                r && p.default(r).removeClass("active") }
                        e && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || p.default(i).trigger("change")), i.focus(), t = !1 } }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && p.default(this._element).toggleClass("active")) }, e.dispose = function() { p.default.removeData(this._element, "bs.button"), this._element = null }, r._jQueryInterface = function(n, i) { return this.each(function() { var e = p.default(this),
                        t = e.data("bs.button");
                    t || (t = new r(this), e.data("bs.button", t)), t.shouldAvoidTriggerChange = i, "toggle" === n && t[n]() }) }, a(r, null, [{ key: "VERSION", get: function() { return "4.5.3" } }]), r }();
    p.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) { var t = e.target,
            n = t; if (p.default(t).hasClass("btn") || (t = p.default(t).closest(".btn")[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();
        else { var i = t.querySelector('input:not([type="hidden"])'); if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault(); "INPUT" !== n.tagName && "LABEL" === t.tagName || d._jQueryInterface.call(p.default(t), "toggle", "INPUT" === n.tagName) } }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) { var t = p.default(e.target).closest(".btn")[0];
        p.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type)) }), p.default(window).on("load.bs.button.data-api", function() { for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) { var i = e[t],
                r = i.querySelector('input:not([type="hidden"])');
            r.checked || r.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active") } for (var o = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < a; o++) { var s = e[o]; "true" === s.getAttribute("aria-pressed") ? s.classList.add("active") : s.classList.remove("active") } }), p.default.fn.button = d._jQueryInterface, p.default.fn.button.Constructor = d, p.default.fn.button.noConflict = function() { return p.default.fn.button = c, d._jQueryInterface }; var h = "carousel",
        m = p.default.fn[h],
        v = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        y = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        _ = { TOUCH: "touch", PEN: "pen" },
        b = function() {
            function o(e, t) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() } var e = o.prototype; return e.next = function() { this._isSliding || this._slide("next") }, e.nextWhenVisible = function() { var e = p.default(this._element);!document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next() }, e.prev = function() { this._isSliding || this._slide("prev") }, e.pause = function(e) { e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (g.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, e.cycle = function(e) { e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, e.to = function(e) { var t = this;
                this._activeElement = this._element.querySelector(".active.carousel-item"); var n = this._getItemIndex(this._activeElement); if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) p.default(this._element).one("slid.bs.carousel", function() { return t.to(e) });
                    else { if (n === e) return this.pause(), void this.cycle(); var i = n < e ? "next" : "prev";
                        this._slide(i, this._items[e]) } }, e.dispose = function() { p.default(this._element).off(".bs.carousel"), p.default.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, e._getConfig = function(e) { return e = l({}, v, e), g.typeCheckConfig(h, e, y), e }, e._handleSwipe = function() { var e = Math.abs(this.touchDeltaX); if (!(e <= 40)) { var t = e / this.touchDeltaX;
                    (this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next() } }, e._addEventListeners = function() { var t = this;
                this._config.keyboard && p.default(this._element).on("keydown.bs.carousel", function(e) { return t._keydown(e) }), "hover" === this._config.pause && p.default(this._element).on("mouseenter.bs.carousel", function(e) { return t.pause(e) }).on("mouseleave.bs.carousel", function(e) { return t.cycle(e) }), this._config.touch && this._addTouchEventListeners() }, e._addTouchEventListeners = function() { var n = this; if (this._touchSupported) { var t = function(e) { n._pointerEvent && _[e.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = e.originalEvent.clientX : n._pointerEvent || (n.touchStartX = e.originalEvent.touches[0].clientX) },
                        i = function(e) { n._pointerEvent && _[e.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(e) { return n.cycle(e) }, 500 + n._config.interval)) };
                    p.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(e) { return e.preventDefault() }), this._pointerEvent ? (p.default(this._element).on("pointerdown.bs.carousel", function(e) { return t(e) }), p.default(this._element).on("pointerup.bs.carousel", function(e) { return i(e) }), this._element.classList.add("pointer-event")) : (p.default(this._element).on("touchstart.bs.carousel", function(e) { return t(e) }), p.default(this._element).on("touchmove.bs.carousel", function(e) { var t;
                        (t = e).originalEvent.touches && 1 < t.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = t.originalEvent.touches[0].clientX - n.touchStartX }), p.default(this._element).on("touchend.bs.carousel", function(e) { return i(e) })) } }, e._keydown = function(e) { if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev(); break;
                    case 39:
                        e.preventDefault(), this.next() } }, e._getItemIndex = function(e) { return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e) }, e._getItemByDirection = function(e, t) { var n = "next" === e,
                    i = "prev" === e,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1; if ((i && 0 === r || n && r === o) && !this._config.wrap) return t; var a = (r + ("prev" === e ? -1 : 1)) % this._items.length; return -1 === a ? this._items[this._items.length - 1] : this._items[a] }, e._triggerSlideEvent = function(e, t) { var n = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                    r = p.default.Event("slide.bs.carousel", { relatedTarget: e, direction: t, from: i, to: n }); return p.default(this._element).trigger(r), r }, e._setActiveIndicatorElement = function(e) { if (this._indicatorsElement) { var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    p.default(t).removeClass("active"); var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && p.default(n).addClass("active") } }, e._slide = function(e, t) { var n, i, r, o = this,
                    a = this._element.querySelector(".active.carousel-item"),
                    s = this._getItemIndex(a),
                    l = t || a && this._getItemByDirection(e, a),
                    u = this._getItemIndex(l),
                    c = Boolean(this._interval); if (r = "next" === e ? (n = "carousel-item-left", i = "carousel-item-next", "left") : (n = "carousel-item-right", i = "carousel-item-prev", "right"), l && p.default(l).hasClass("active")) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && a && l) { this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l); var f = p.default.Event("slid.bs.carousel", { relatedTarget: l, direction: r, from: s, to: u }); if (p.default(this._element).hasClass("slide")) { p.default(l).addClass(i), g.reflow(l), p.default(a).addClass(n), p.default(l).addClass(n); var d = parseInt(l.getAttribute("data-interval"), 10);
                        d ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = d) : this._config.interval = this._config.defaultInterval || this._config.interval; var h = g.getTransitionDurationFromElement(a);
                        p.default(a).one(g.TRANSITION_END, function() { p.default(l).removeClass(n + " " + i).addClass("active"), p.default(a).removeClass("active " + i + " " + n), o._isSliding = !1, setTimeout(function() { return p.default(o._element).trigger(f) }, 0) }).emulateTransitionEnd(h) } else p.default(a).removeClass("active"), p.default(l).addClass("active"), this._isSliding = !1, p.default(this._element).trigger(f);
                    c && this.cycle() } }, o._jQueryInterface = function(i) { return this.each(function() { var e = p.default(this).data("bs.carousel"),
                        t = l({}, v, p.default(this).data()); "object" == typeof i && (t = l({}, t, i)); var n = "string" == typeof i ? i : t.slide; if (e || (e = new o(this, t), p.default(this).data("bs.carousel", e)), "number" == typeof i) e.to(i);
                    else if ("string" == typeof n) { if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]() } else t.interval && t.ride && (e.pause(), e.cycle()) }) }, o._dataApiClickHandler = function(e) { var t = g.getSelectorFromElement(this); if (t) { var n = p.default(t)[0]; if (n && p.default(n).hasClass("carousel")) { var i = l({}, p.default(n).data(), p.default(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), o._jQueryInterface.call(p.default(n), i), r && p.default(n).data("bs.carousel").to(r), e.preventDefault() } } }, a(o, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return v } }]), o }();
    p.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", b._dataApiClickHandler), p.default(window).on("load.bs.carousel.data-api", function() { for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) { var i = p.default(e[t]);
            b._jQueryInterface.call(i, i.data()) } }), p.default.fn[h] = b._jQueryInterface, p.default.fn[h].Constructor = b, p.default.fn[h].noConflict = function() { return p.default.fn[h] = m, b._jQueryInterface }; var w = "collapse",
        T = p.default.fn[w],
        E = { toggle: !0, parent: "" },
        x = { toggle: "boolean", parent: "(string|element)" },
        C = function() {
            function s(t, e) { this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')); for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, r = n.length; i < r; i++) { var o = n[i],
                        a = g.getSelectorFromElement(o),
                        s = [].slice.call(document.querySelectorAll(a)).filter(function(e) { return e === t });
                    null !== a && 0 < s.length && (this._selector = a, this._triggerArray.push(o)) }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var e = s.prototype; return e.toggle = function() { p.default(this._element).hasClass("show") ? this.hide() : this.show() }, e.show = function() { var e, t, n = this; if (!(this._isTransitioning || p.default(this._element).hasClass("show") || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) { return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains("collapse") })).length && (e = null), e && (t = p.default(e).not(this._selector).data("bs.collapse")) && t._isTransitioning))) { var i = p.default.Event("show.bs.collapse"); if (p.default(this._element).trigger(i), !i.isDefaultPrevented()) { e && (s._jQueryInterface.call(p.default(e).not(this._selector), "hide"), t || p.default(e).data("bs.collapse", null)); var r = this._getDimension();
                        p.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[r] = 0, this._triggerArray.length && p.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0); var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            a = g.getTransitionDurationFromElement(this._element);
                        p.default(this._element).one(g.TRANSITION_END, function() { p.default(n._element).removeClass("collapsing").addClass("collapse show"), n._element.style[r] = "", n.setTransitioning(!1), p.default(n._element).trigger("shown.bs.collapse") }).emulateTransitionEnd(a), this._element.style[r] = this._element[o] + "px" } } }, e.hide = function() { var e = this; if (!this._isTransitioning && p.default(this._element).hasClass("show")) { var t = p.default.Event("hide.bs.collapse"); if (p.default(this._element).trigger(t), !t.isDefaultPrevented()) { var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", g.reflow(this._element), p.default(this._element).addClass("collapsing").removeClass("collapse show"); var i = this._triggerArray.length; if (0 < i)
                            for (var r = 0; r < i; r++) { var o = this._triggerArray[r],
                                    a = g.getSelectorFromElement(o);
                                null !== a && (p.default([].slice.call(document.querySelectorAll(a))).hasClass("show") || p.default(o).addClass("collapsed").attr("aria-expanded", !1)) }
                        this.setTransitioning(!0), this._element.style[n] = ""; var s = g.getTransitionDurationFromElement(this._element);
                        p.default(this._element).one(g.TRANSITION_END, function() { e.setTransitioning(!1), p.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }).emulateTransitionEnd(s) } } }, e.setTransitioning = function(e) { this._isTransitioning = e }, e.dispose = function() { p.default.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, e._getConfig = function(e) { return (e = l({}, E, e)).toggle = Boolean(e.toggle), g.typeCheckConfig(w, e, x), e }, e._getDimension = function() { return p.default(this._element).hasClass("width") ? "width" : "height" }, e._getParent = function() { var e, n = this;
                g.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent); var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(e.querySelectorAll(t)); return p.default(i).each(function(e, t) { n._addAriaAndCollapsedClass(s._getTargetFromElement(t), [t]) }), e }, e._addAriaAndCollapsedClass = function(e, t) { var n = p.default(e).hasClass("show");
                t.length && p.default(t).toggleClass("collapsed", !n).attr("aria-expanded", n) }, s._getTargetFromElement = function(e) { var t = g.getSelectorFromElement(e); return t ? document.querySelector(t) : null }, s._jQueryInterface = function(i) { return this.each(function() { var e = p.default(this),
                        t = e.data("bs.collapse"),
                        n = l({}, E, e.data(), "object" == typeof i && i ? i : {}); if (!t && n.toggle && "string" == typeof i && /show|hide/.test(i) && (n.toggle = !1), t || (t = new s(this, n), e.data("bs.collapse", t)), "string" == typeof i) { if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]() } }) }, a(s, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return E } }]), s }();
    p.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) { "A" === e.currentTarget.tagName && e.preventDefault(); var n = p.default(this),
            t = g.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(t));
        p.default(i).each(function() { var e = p.default(this),
                t = e.data("bs.collapse") ? "toggle" : n.data();
            C._jQueryInterface.call(e, t) }) }), p.default.fn[w] = C._jQueryInterface, p.default.fn[w].Constructor = C, p.default.fn[w].noConflict = function() { return p.default.fn[w] = T, C._jQueryInterface }; var S = "dropdown",
        k = p.default.fn[S],
        A = new RegExp("38|40|27"),
        N = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
        D = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
        j = function() {
            function u(e, t) { this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var e = u.prototype; return e.toggle = function() { if (!this._element.disabled && !p.default(this._element).hasClass("disabled")) { var e = p.default(this._menu).hasClass("show");
                    u._clearMenus(), e || this.show(!0) } }, e.show = function(e) { if (void 0 === e && (e = !1), !(this._element.disabled || p.default(this._element).hasClass("disabled") || p.default(this._menu).hasClass("show"))) { var t = { relatedTarget: this._element },
                        n = p.default.Event("show.bs.dropdown", t),
                        i = u._getParentFromElement(this._element); if (p.default(i).trigger(n), !n.isDefaultPrevented()) { if (!this._inNavbar && e) { if (void 0 === f.default) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"); var r = this._element; "parent" === this._config.reference ? r = i : g.isElement(this._config.reference) && (r = this._config.reference, void 0 !== this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && p.default(i).addClass("position-static"), this._popper = new f.default(r, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === p.default(i).closest(".navbar-nav").length && p.default(document.body).children().on("mouseover", null, p.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), p.default(this._menu).toggleClass("show"), p.default(i).toggleClass("show").trigger(p.default.Event("shown.bs.dropdown", t)) } } }, e.hide = function() { if (!this._element.disabled && !p.default(this._element).hasClass("disabled") && p.default(this._menu).hasClass("show")) { var e = { relatedTarget: this._element },
                        t = p.default.Event("hide.bs.dropdown", e),
                        n = u._getParentFromElement(this._element);
                    p.default(n).trigger(t), t.isDefaultPrevented() || (this._popper && this._popper.destroy(), p.default(this._menu).toggleClass("show"), p.default(n).toggleClass("show").trigger(p.default.Event("hidden.bs.dropdown", e))) } }, e.dispose = function() { p.default.removeData(this._element, "bs.dropdown"), p.default(this._element).off(".bs.dropdown"), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, e.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, e._addEventListeners = function() { var t = this;
                p.default(this._element).on("click.bs.dropdown", function(e) { e.preventDefault(), e.stopPropagation(), t.toggle() }) }, e._getConfig = function(e) { return e = l({}, this.constructor.Default, p.default(this._element).data(), e), g.typeCheckConfig(S, e, this.constructor.DefaultType), e }, e._getMenuElement = function() { if (!this._menu) { var e = u._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(".dropdown-menu")) } return this._menu }, e._getPlacement = function() { var e = p.default(this._element.parentNode),
                    t = "bottom-start"; return e.hasClass("dropup") ? t = p.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : p.default(this._menu).hasClass("dropdown-menu-right") && (t = "bottom-end"), t }, e._detectNavbar = function() { return 0 < p.default(this._element).closest(".navbar").length }, e._getOffset = function() { var t = this,
                    e = {}; return "function" == typeof this._config.offset ? e.fn = function(e) { return e.offsets = l({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e } : e.offset = this._config.offset, e }, e._getPopperConfig = function() { var e = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), l({}, e, this._config.popperConfig) }, u._jQueryInterface = function(t) { return this.each(function() { var e = p.default(this).data("bs.dropdown"); if (e || (e = new u(this, "object" == typeof t ? t : null), p.default(this).data("bs.dropdown", e)), "string" == typeof t) { if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]() } }) }, u._clearMenus = function(e) { if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var t = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), n = 0, i = t.length; n < i; n++) { var r = u._getParentFromElement(t[n]),
                            o = p.default(t[n]).data("bs.dropdown"),
                            a = { relatedTarget: t[n] }; if (e && "click" === e.type && (a.clickEvent = e), o) { var s = o._menu; if (p.default(r).hasClass("show") && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && p.default.contains(r, e.target))) { var l = p.default.Event("hide.bs.dropdown", a);
                                p.default(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p.default(document.body).children().off("mouseover", null, p.default.noop), t[n].setAttribute("aria-expanded", "false"), o._popper && o._popper.destroy(), p.default(s).removeClass("show"), p.default(r).removeClass("show").trigger(p.default.Event("hidden.bs.dropdown", a))) } } } }, u._getParentFromElement = function(e) { var t, n = g.getSelectorFromElement(e); return n && (t = document.querySelector(n)), t || e.parentNode }, u._dataApiKeydownHandler = function(e) { if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || p.default(e.target).closest(".dropdown-menu").length) : !A.test(e.which)) && !this.disabled && !p.default(this).hasClass("disabled")) { var t = u._getParentFromElement(this),
                        n = p.default(t).hasClass("show"); if (n || 27 !== e.which) { if (e.preventDefault(), e.stopPropagation(), !n || 27 === e.which || 32 === e.which) return 27 === e.which && p.default(t.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void p.default(this).trigger("click"); var i = [].slice.call(t.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e) { return p.default(e).is(":visible") }); if (0 !== i.length) { var r = i.indexOf(e.target);
                            38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus() } } } }, a(u, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return N } }, { key: "DefaultType", get: function() { return D } }]), u }();
    p.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', j._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", j._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", j._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function(e) { e.preventDefault(), e.stopPropagation(), j._jQueryInterface.call(p.default(this), "toggle") }).on("click.bs.dropdown.data-api", ".dropdown form", function(e) { e.stopPropagation() }), p.default.fn[S] = j._jQueryInterface, p.default.fn[S].Constructor = j, p.default.fn[S].noConflict = function() { return p.default.fn[S] = k, j._jQueryInterface }; var I = p.default.fn.modal,
        L = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        O = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        q = function() {
            function r(e, t) { this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 } var e = r.prototype; return e.toggle = function(e) { return this._isShown ? this.hide() : this.show(e) }, e.show = function(e) { var t = this; if (!this._isShown && !this._isTransitioning) { p.default(this._element).hasClass("fade") && (this._isTransitioning = !0); var n = p.default.Event("show.bs.modal", { relatedTarget: e });
                    p.default(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function(e) { return t.hide(e) }), p.default(this._dialog).on("mousedown.dismiss.bs.modal", function() { p.default(t._element).one("mouseup.dismiss.bs.modal", function(e) { p.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return t._showElement(e) })) } }, e.hide = function(e) { var t = this; if (e && e.preventDefault(), this._isShown && !this._isTransitioning) { var n = p.default.Event("hide.bs.modal"); if (p.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) { this._isShown = !1; var i = p.default(this._element).hasClass("fade"); if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), p.default(document).off("focusin.bs.modal"), p.default(this._element).removeClass("show"), p.default(this._element).off("click.dismiss.bs.modal"), p.default(this._dialog).off("mousedown.dismiss.bs.modal"), i) { var r = g.getTransitionDurationFromElement(this._element);
                            p.default(this._element).one(g.TRANSITION_END, function(e) { return t._hideModal(e) }).emulateTransitionEnd(r) } else this._hideModal() } } }, e.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) { return p.default(e).off(".bs.modal") }), p.default(document).off("focusin.bs.modal"), p.default.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null }, e.handleUpdate = function() { this._adjustDialog() }, e._getConfig = function(e) { return e = l({}, L, e), g.typeCheckConfig("modal", e, O), e }, e._triggerBackdropTransition = function() { var e = this; if ("static" === this._config.backdrop) { var t = p.default.Event("hidePrevented.bs.modal"); if (p.default(this._element).trigger(t), t.isDefaultPrevented()) return; var n = this._element.scrollHeight > document.documentElement.clientHeight;
                    n || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static"); var i = g.getTransitionDurationFromElement(this._dialog);
                    p.default(this._element).off(g.TRANSITION_END), p.default(this._element).one(g.TRANSITION_END, function() { e._element.classList.remove("modal-static"), n || p.default(e._element).one(g.TRANSITION_END, function() { e._element.style.overflowY = "" }).emulateTransitionEnd(e._element, i) }).emulateTransitionEnd(i), this._element.focus() } else this.hide() }, e._showElement = function(e) { var t = this,
                    n = p.default(this._element).hasClass("fade"),
                    i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), p.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && g.reflow(this._element), p.default(this._element).addClass("show"), this._config.focus && this._enforceFocus(); var r = p.default.Event("shown.bs.modal", { relatedTarget: e }),
                    o = function() { t._config.focus && t._element.focus(), t._isTransitioning = !1, p.default(t._element).trigger(r) }; if (n) { var a = g.getTransitionDurationFromElement(this._dialog);
                    p.default(this._dialog).one(g.TRANSITION_END, o).emulateTransitionEnd(a) } else o() }, e._enforceFocus = function() { var t = this;
                p.default(document).off("focusin.bs.modal").on("focusin.bs.modal", function(e) { document !== e.target && t._element !== e.target && 0 === p.default(t._element).has(e.target).length && t._element.focus() }) }, e._setEscapeEvent = function() { var t = this;
                this._isShown ? p.default(this._element).on("keydown.dismiss.bs.modal", function(e) { t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition() }) : this._isShown || p.default(this._element).off("keydown.dismiss.bs.modal") }, e._setResizeEvent = function() { var t = this;
                this._isShown ? p.default(window).on("resize.bs.modal", function(e) { return t.handleUpdate(e) }) : p.default(window).off("resize.bs.modal") }, e._hideModal = function() { var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function() { p.default(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), p.default(e._element).trigger("hidden.bs.modal") }) }, e._removeBackdrop = function() { this._backdrop && (p.default(this._backdrop).remove(), this._backdrop = null) }, e._showBackdrop = function(e) { var t = this,
                    n = p.default(this._element).hasClass("fade") ? "fade" : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), p.default(this._backdrop).appendTo(document.body), p.default(this._element).on("click.dismiss.bs.modal", function(e) { t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && t._triggerBackdropTransition() }), n && g.reflow(this._backdrop), p.default(this._backdrop).addClass("show"), !e) return; if (!n) return void e(); var i = g.getTransitionDurationFromElement(this._backdrop);
                    p.default(this._backdrop).one(g.TRANSITION_END, e).emulateTransitionEnd(i) } else if (!this._isShown && this._backdrop) { p.default(this._backdrop).removeClass("show"); var r = function() { t._removeBackdrop(), e && e() }; if (p.default(this._element).hasClass("fade")) { var o = g.getTransitionDurationFromElement(this._backdrop);
                        p.default(this._backdrop).one(g.TRANSITION_END, r).emulateTransitionEnd(o) } else r() } else e && e() }, e._adjustDialog = function() { var e = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, e._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, e._checkScrollbar = function() { var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, e._setScrollbar = function() { var r = this; if (this._isBodyOverflowing) { var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                        t = [].slice.call(document.querySelectorAll(".sticky-top"));
                    p.default(e).each(function(e, t) { var n = t.style.paddingRight,
                            i = p.default(t).css("padding-right");
                        p.default(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px") }), p.default(t).each(function(e, t) { var n = t.style.marginRight,
                            i = p.default(t).css("margin-right");
                        p.default(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px") }); var n = document.body.style.paddingRight,
                        i = p.default(document.body).css("padding-right");
                    p.default(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px") }
                p.default(document.body).addClass("modal-open") }, e._resetScrollbar = function() { var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                p.default(e).each(function(e, t) { var n = p.default(t).data("padding-right");
                    p.default(t).removeData("padding-right"), t.style.paddingRight = n || "" }); var t = [].slice.call(document.querySelectorAll(".sticky-top"));
                p.default(t).each(function(e, t) { var n = p.default(t).data("margin-right");
                    void 0 !== n && p.default(t).css("margin-right", n).removeData("margin-right") }); var n = p.default(document.body).data("padding-right");
                p.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "" }, e._getScrollbarWidth = function() { var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e); var t = e.getBoundingClientRect().width - e.clientWidth; return document.body.removeChild(e), t }, r._jQueryInterface = function(n, i) { return this.each(function() { var e = p.default(this).data("bs.modal"),
                        t = l({}, L, p.default(this).data(), "object" == typeof n && n ? n : {}); if (e || (e = new r(this, t), p.default(this).data("bs.modal", e)), "string" == typeof n) { if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](i) } else t.show && e.show(i) }) }, a(r, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return L } }]), r }();
    p.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) { var t, n = this,
            i = g.getSelectorFromElement(this);
        i && (t = document.querySelector(i)); var r = p.default(t).data("bs.modal") ? "toggle" : l({}, p.default(t).data(), p.default(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault(); var o = p.default(t).one("show.bs.modal", function(e) { e.isDefaultPrevented() || o.one("hidden.bs.modal", function() { p.default(n).is(":visible") && n.focus() }) });
        q._jQueryInterface.call(p.default(t), r, this) }), p.default.fn.modal = q._jQueryInterface, p.default.fn.modal.Constructor = q, p.default.fn.modal.noConflict = function() { return p.default.fn.modal = I, q._jQueryInterface }; var P = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        R = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        H = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function F(e, a, t) { if (0 === e.length) return e; if (t && "function" == typeof t) return t(e); for (var n = (new window.DOMParser).parseFromString(e, "text/html"), s = Object.keys(a), l = [].slice.call(n.body.querySelectorAll("*")), i = function(e, t) { var n = l[e],
                    i = n.nodeName.toLowerCase(); if (-1 === s.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue"; var r = [].slice.call(n.attributes),
                    o = [].concat(a["*"] || [], a[i] || []);
                r.forEach(function(e) {
                    (function(e, t) { var n = e.nodeName.toLowerCase(); if (-1 !== t.indexOf(n)) return -1 === P.indexOf(n) || Boolean(e.nodeValue.match(R) || e.nodeValue.match(H)); for (var i = t.filter(function(e) { return e instanceof RegExp }), r = 0, o = i.length; r < o; r++)
                            if (n.match(i[r])) return !0;
                        return !1 })(e, o) || n.removeAttribute(e.nodeName) }) }, r = 0, o = l.length; r < o; r++) i(r); return n.body.innerHTML } var M = "tooltip",
        B = p.default.fn[M],
        W = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        U = ["sanitize", "whiteList", "sanitizeFn"],
        Q = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" },
        $ = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        z = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null },
        X = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" },
        V = function() {
            function r(e, t) { if (void 0 === f.default) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners() } var e = r.prototype; return e.enable = function() { this._isEnabled = !0 }, e.disable = function() { this._isEnabled = !1 }, e.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, e.toggle = function(e) { if (this._isEnabled)
                    if (e) { var t = this.constructor.DATA_KEY,
                            n = p.default(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), p.default(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (p.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                        this._enter(null, this) } }, e.dispose = function() { clearTimeout(this._timeout), p.default.removeData(this.element, this.constructor.DATA_KEY), p.default(this.element).off(this.constructor.EVENT_KEY), p.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && p.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, e.show = function() { var t = this; if ("none" === p.default(this.element).css("display")) throw new Error("Please use show on visible elements"); var e = p.default.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { p.default(this.element).trigger(e); var n = g.findShadowRoot(this.element),
                        i = p.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element); if (e.isDefaultPrevented() || !i) return; var r = this.getTipElement(),
                        o = g.getUID(this.constructor.NAME);
                    r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && p.default(r).addClass("fade"); var a = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        s = this._getAttachment(a);
                    this.addAttachmentClass(s); var l = this._getContainer();
                    p.default(r).data(this.constructor.DATA_KEY, this), p.default.contains(this.element.ownerDocument.documentElement, this.tip) || p.default(r).appendTo(l), p.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new f.default(this.element, r, this._getPopperConfig(s)), p.default(r).addClass("show"), "ontouchstart" in document.documentElement && p.default(document.body).children().on("mouseover", null, p.default.noop); var u = function() { t.config.animation && t._fixTransition(); var e = t._hoverState;
                        t._hoverState = null, p.default(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t) }; if (p.default(this.tip).hasClass("fade")) { var c = g.getTransitionDurationFromElement(this.tip);
                        p.default(this.tip).one(g.TRANSITION_END, u).emulateTransitionEnd(c) } else u() } }, e.hide = function(e) { var t = this,
                    n = this.getTipElement(),
                    i = p.default.Event(this.constructor.Event.HIDE),
                    r = function() { "show" !== t._hoverState && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), p.default(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e() }; if (p.default(this.element).trigger(i), !i.isDefaultPrevented()) { if (p.default(n).removeClass("show"), "ontouchstart" in document.documentElement && p.default(document.body).children().off("mouseover", null, p.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, p.default(this.tip).hasClass("fade")) { var o = g.getTransitionDurationFromElement(n);
                        p.default(n).one(g.TRANSITION_END, r).emulateTransitionEnd(o) } else r();
                    this._hoverState = "" } }, e.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, e.isWithContent = function() { return Boolean(this.getTitle()) }, e.addAttachmentClass = function(e) { p.default(this.getTipElement()).addClass("bs-tooltip-" + e) }, e.getTipElement = function() { return this.tip = this.tip || p.default(this.config.template)[0], this.tip }, e.setContent = function() { var e = this.getTipElement();
                this.setElementContent(p.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), p.default(e).removeClass("fade show") }, e.setElementContent = function(e, t) { "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = F(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? p.default(t).parent().is(e) || e.empty().append(t) : e.text(p.default(t).text()) }, e.getTitle = function() { var e = this.element.getAttribute("data-original-title"); return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e }, e._getPopperConfig = function(e) { var t = this; return l({}, { placement: e, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(e) { e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e) }, onUpdate: function(e) { return t._handlePopperPlacementChange(e) } }, this.config.popperConfig) }, e._getOffset = function() { var t = this,
                    e = {}; return "function" == typeof this.config.offset ? e.fn = function(e) { return e.offsets = l({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e } : e.offset = this.config.offset, e }, e._getContainer = function() { return !1 === this.config.container ? document.body : g.isElement(this.config.container) ? p.default(this.config.container) : p.default(document).find(this.config.container) }, e._getAttachment = function(e) { return $[e.toUpperCase()] }, e._setListeners = function() { var i = this;
                this.config.trigger.split(" ").forEach(function(e) { if ("click" === e) p.default(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) { return i.toggle(e) });
                    else if ("manual" !== e) { var t = "hover" === e ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = "hover" === e ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        p.default(i.element).on(t, i.config.selector, function(e) { return i._enter(e) }).on(n, i.config.selector, function(e) { return i._leave(e) }) } }), this._hideModalHandler = function() { i.element && i.hide() }, p.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, e._fixTitle = function() { var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, e._enter = function(e, t) { var n = this.constructor.DATA_KEY;
                (t = t || p.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), p.default(t.getTipElement()).hasClass("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() { "show" === t._hoverState && t.show() }, t.config.delay.show) : t.show()) }, e._leave = function(e, t) { var n = this.constructor.DATA_KEY;
                (t = t || p.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() { "out" === t._hoverState && t.hide() }, t.config.delay.hide) : t.hide()) }, e._isWithActiveTrigger = function() { for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1 }, e._getConfig = function(e) { var t = p.default(this.element).data(); return Object.keys(t).forEach(function(e) {-1 !== U.indexOf(e) && delete t[e] }), "number" == typeof(e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), g.typeCheckConfig(M, e, this.constructor.DefaultType), e.sanitize && (e.template = F(e.template, e.whiteList, e.sanitizeFn)), e }, e._getDelegateConfig = function() { var e = {}; if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]); return e }, e._cleanTipClass = function() { var e = p.default(this.getTipElement()),
                    t = e.attr("class").match(W);
                null !== t && t.length && e.removeClass(t.join("")) }, e._handlePopperPlacementChange = function(e) { this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement)) }, e._fixTransition = function() { var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (p.default(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t) }, r._jQueryInterface = function(i) { return this.each(function() { var e = p.default(this),
                        t = e.data("bs.tooltip"),
                        n = "object" == typeof i && i; if ((t || !/dispose|hide/.test(i)) && (t || (t = new r(this, n), e.data("bs.tooltip", t)), "string" == typeof i)) { if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]() } }) }, a(r, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return z } }, { key: "NAME", get: function() { return M } }, { key: "DATA_KEY", get: function() { return "bs.tooltip" } }, { key: "Event", get: function() { return X } }, { key: "EVENT_KEY", get: function() { return ".bs.tooltip" } }, { key: "DefaultType", get: function() { return Q } }]), r }();
    p.default.fn[M] = V._jQueryInterface, p.default.fn[M].Constructor = V, p.default.fn[M].noConflict = function() { return p.default.fn[M] = B, V._jQueryInterface }; var Y = "popover",
        K = p.default.fn[Y],
        G = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        J = l({}, V.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        Z = l({}, V.DefaultType, { content: "(string|element|function)" }),
        ee = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" },
        te = function(e) { var t, n;

            function i() { return e.apply(this, arguments) || this }
            n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n; var r = i.prototype; return r.isWithContent = function() { return this.getTitle() || this._getContent() }, r.addAttachmentClass = function(e) { p.default(this.getTipElement()).addClass("bs-popover-" + e) }, r.getTipElement = function() { return this.tip = this.tip || p.default(this.config.template)[0], this.tip }, r.setContent = function() { var e = p.default(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle()); var t = this._getContent(); "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show") }, r._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, r._cleanTipClass = function() { var e = p.default(this.getTipElement()),
                    t = e.attr("class").match(G);
                null !== t && 0 < t.length && e.removeClass(t.join("")) }, i._jQueryInterface = function(n) { return this.each(function() { var e = p.default(this).data("bs.popover"),
                        t = "object" == typeof n ? n : null; if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p.default(this).data("bs.popover", e)), "string" == typeof n)) { if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]() } }) }, a(i, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return J } }, { key: "NAME", get: function() { return Y } }, { key: "DATA_KEY", get: function() { return "bs.popover" } }, { key: "Event", get: function() { return ee } }, { key: "EVENT_KEY", get: function() { return ".bs.popover" } }, { key: "DefaultType", get: function() { return Z } }]), i }(V);
    p.default.fn[Y] = te._jQueryInterface, p.default.fn[Y].Constructor = te, p.default.fn[Y].noConflict = function() { return p.default.fn[Y] = K, te._jQueryInterface }; var ne = "scrollspy",
        ie = p.default.fn[ne],
        re = { offset: 10, method: "auto", target: "" },
        oe = { offset: "number", method: "string", target: "(string|element)" },
        ae = function() {
            function n(e, t) { var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p.default(this._scrollElement).on("scroll.bs.scrollspy", function(e) { return n._process(e) }), this.refresh(), this._process() } var e = n.prototype; return e.refresh = function() { var t = this,
                    e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    r = "auto" === this._config.method ? e : this._config.method,
                    o = "position" === r ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) { var t, n = g.getSelectorFromElement(e); if (n && (t = document.querySelector(n)), t) { var i = t.getBoundingClientRect(); if (i.width || i.height) return [p.default(t)[r]().top + o, n] } return null }).filter(function(e) { return e }).sort(function(e, t) { return e[0] - t[0] }).forEach(function(e) { t._offsets.push(e[0]), t._targets.push(e[1]) }) }, e.dispose = function() { p.default.removeData(this._element, "bs.scrollspy"), p.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, e._getConfig = function(e) { if ("string" != typeof(e = l({}, re, "object" == typeof e && e ? e : {})).target && g.isElement(e.target)) { var t = p.default(e.target).attr("id");
                    t || (t = g.getUID(ne), p.default(e.target).attr("id", t)), e.target = "#" + t } return g.typeCheckConfig(ne, e, oe), e }, e._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, e._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, e._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, e._process = function() { var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight(); if (this._scrollHeight !== t && this.refresh(), n <= e) { var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]) } }, e._activate = function(t) { this._activeTarget = t, this._clear(); var e = this._selector.split(",").map(function(e) { return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]' }),
                    n = p.default([].slice.call(document.querySelectorAll(e.join(","))));
                n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active")) : (n.addClass("active"), n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), p.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t }) }, e._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) { return e.classList.contains("active") }).forEach(function(e) { return e.classList.remove("active") }) }, n._jQueryInterface = function(t) { return this.each(function() { var e = p.default(this).data("bs.scrollspy"); if (e || (e = new n(this, "object" == typeof t && t), p.default(this).data("bs.scrollspy", e)), "string" == typeof t) { if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]() } }) }, a(n, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return re } }]), n }();
    p.default(window).on("load.bs.scrollspy.data-api", function() { for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) { var n = p.default(e[t]);
            ae._jQueryInterface.call(n, n.data()) } }), p.default.fn[ne] = ae._jQueryInterface, p.default.fn[ne].Constructor = ae, p.default.fn[ne].noConflict = function() { return p.default.fn[ne] = ie, ae._jQueryInterface }; var se = p.default.fn.tab,
        le = function() {
            function i(e) { this._element = e } var e = i.prototype; return e.show = function() { var n = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p.default(this._element).hasClass("active") || p.default(this._element).hasClass("disabled"))) { var e, i, t = p.default(this._element).closest(".nav, .list-group")[0],
                        r = g.getSelectorFromElement(this._element); if (t) { var o = "UL" === t.nodeName || "OL" === t.nodeName ? "> li > .active" : ".active";
                        i = (i = p.default.makeArray(p.default(t).find(o)))[i.length - 1] } var a = p.default.Event("hide.bs.tab", { relatedTarget: this._element }),
                        s = p.default.Event("show.bs.tab", { relatedTarget: i }); if (i && p.default(i).trigger(a), p.default(this._element).trigger(s), !s.isDefaultPrevented() && !a.isDefaultPrevented()) { r && (e = document.querySelector(r)), this._activate(this._element, t); var l = function() { var e = p.default.Event("hidden.bs.tab", { relatedTarget: n._element }),
                                t = p.default.Event("shown.bs.tab", { relatedTarget: i });
                            p.default(i).trigger(e), p.default(n._element).trigger(t) };
                        e ? this._activate(e, e.parentNode, l) : l() } } }, e.dispose = function() { p.default.removeData(this._element, "bs.tab"), this._element = null }, e._activate = function(e, t, n) { var i = this,
                    r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? p.default(t).children(".active") : p.default(t).find("> li > .active"))[0],
                    o = n && r && p.default(r).hasClass("fade"),
                    a = function() { return i._transitionComplete(e, r, n) }; if (r && o) { var s = g.getTransitionDurationFromElement(r);
                    p.default(r).removeClass("show").one(g.TRANSITION_END, a).emulateTransitionEnd(s) } else a() }, e._transitionComplete = function(e, t, n) { if (t) { p.default(t).removeClass("active"); var i = p.default(t.parentNode).find("> .dropdown-menu .active")[0];
                    i && p.default(i).removeClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1) } if (p.default(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), g.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && p.default(e.parentNode).hasClass("dropdown-menu")) { var r = p.default(e).closest(".dropdown")[0]; if (r) { var o = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                        p.default(o).addClass("active") }
                    e.setAttribute("aria-expanded", !0) }
                n && n() }, i._jQueryInterface = function(n) { return this.each(function() { var e = p.default(this),
                        t = e.data("bs.tab"); if (t || (t = new i(this), e.data("bs.tab", t)), "string" == typeof n) { if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]() } }) }, a(i, null, [{ key: "VERSION", get: function() { return "4.5.3" } }]), i }();
    p.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) { e.preventDefault(), le._jQueryInterface.call(p.default(this), "show") }), p.default.fn.tab = le._jQueryInterface, p.default.fn.tab.Constructor = le, p.default.fn.tab.noConflict = function() { return p.default.fn.tab = se, le._jQueryInterface }; var ue = p.default.fn.toast,
        ce = { animation: "boolean", autohide: "boolean", delay: "number" },
        fe = { animation: !0, autohide: !0, delay: 500 },
        de = function() {
            function i(e, t) { this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners() } var e = i.prototype; return e.show = function() { var e = this,
                    t = p.default.Event("show.bs.toast"); if (p.default(this._element).trigger(t), !t.isDefaultPrevented()) { this._clearTimeout(), this._config.animation && this._element.classList.add("fade"); var n = function() { e._element.classList.remove("showing"), e._element.classList.add("show"), p.default(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout(function() { e.hide() }, e._config.delay)) }; if (this._element.classList.remove("hide"), g.reflow(this._element), this._element.classList.add("showing"), this._config.animation) { var i = g.getTransitionDurationFromElement(this._element);
                        p.default(this._element).one(g.TRANSITION_END, n).emulateTransitionEnd(i) } else n() } }, e.hide = function() { if (this._element.classList.contains("show")) { var e = p.default.Event("hide.bs.toast");
                    p.default(this._element).trigger(e), e.isDefaultPrevented() || this._close() } }, e.dispose = function() { this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), p.default(this._element).off("click.dismiss.bs.toast"), p.default.removeData(this._element, "bs.toast"), this._element = null, this._config = null }, e._getConfig = function(e) { return e = l({}, fe, p.default(this._element).data(), "object" == typeof e && e ? e : {}), g.typeCheckConfig("toast", e, this.constructor.DefaultType), e }, e._setListeners = function() { var e = this;
                p.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function() { return e.hide() }) }, e._close = function() { var e = this,
                    t = function() { e._element.classList.add("hide"), p.default(e._element).trigger("hidden.bs.toast") }; if (this._element.classList.remove("show"), this._config.animation) { var n = g.getTransitionDurationFromElement(this._element);
                    p.default(this._element).one(g.TRANSITION_END, t).emulateTransitionEnd(n) } else t() }, e._clearTimeout = function() { clearTimeout(this._timeout), this._timeout = null }, i._jQueryInterface = function(n) { return this.each(function() { var e = p.default(this),
                        t = e.data("bs.toast"); if (t || (t = new i(this, "object" == typeof n && n), e.data("bs.toast", t)), "string" == typeof n) { if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](this) } }) }, a(i, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "DefaultType", get: function() { return ce } }, { key: "Default", get: function() { return fe } }]), i }();
    p.default.fn.toast = de._jQueryInterface, p.default.fn.toast.Constructor = de, p.default.fn.toast.noConflict = function() { return p.default.fn.toast = ue, de._jQueryInterface }, e.Alert = u, e.Button = d, e.Carousel = b, e.Collapse = C, e.Dropdown = j, e.Modal = q, e.Popover = te, e.Scrollspy = ae, e.Tab = le, e.Toast = de, e.Tooltip = V, e.Util = g, Object.defineProperty(e, "__esModule", { value: !0 }) });