/* flatpickr v4.4.3,, @license MIT */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.flatpickr = t()
}(this, function () {
    "use strict";
    var $ = function (e) {
        return ("0" + e).slice(-2)
    }, q = function (e) {
        return !0 === e ? 1 : 0
    };

    function z(n, a, i) {
        var o;
        return void 0 === i && (i = !1), function () {
            var e = this, t = arguments;
            null !== o && clearTimeout(o), o = window.setTimeout(function () {
                o = null, i || n.apply(e, t)
            }, a), i && !o && n.apply(e, t)
        }
    }

    var G = function (e) {
        return e instanceof Array ? e : [e]
    }, e = function () {
    }, V = function (e, t, n) {
        return n.months[t ? "shorthand" : "longhand"][e]
    }, D = {
        D: e, F: function (e, t, n) {
            e.setMonth(n.months.longhand.indexOf(t))
        }, G: function (e, t) {
            e.setHours(parseFloat(t))
        }, H: function (e, t) {
            e.setHours(parseFloat(t))
        }, J: function (e, t) {
            e.setDate(parseFloat(t))
        }, K: function (e, t, n) {
            e.setHours(e.getHours() % 12 + 12 * q(new RegExp(n.amPM[1], "i").test(t)))
        }, M: function (e, t, n) {
            e.setMonth(n.months.shorthand.indexOf(t))
        }, S: function (e, t) {
            e.setSeconds(parseFloat(t))
        }, U: function (e, t) {
            return new Date(1e3 * parseFloat(t))
        }, W: function (e, t) {
            var n = parseInt(t);
            return new Date(e.getFullYear(), 0, 2 + 7 * (n - 1), 0, 0, 0, 0)
        }, Y: function (e, t) {
            e.setFullYear(parseFloat(t))
        }, Z: function (e, t) {
            return new Date(t)
        }, d: function (e, t) {
            e.setDate(parseFloat(t))
        }, h: function (e, t) {
            e.setHours(parseFloat(t))
        }, i: function (e, t) {
            e.setMinutes(parseFloat(t))
        }, j: function (e, t) {
            e.setDate(parseFloat(t))
        }, l: e, m: function (e, t) {
            e.setMonth(parseFloat(t) - 1)
        }, n: function (e, t) {
            e.setMonth(parseFloat(t) - 1)
        }, s: function (e, t) {
            e.setSeconds(parseFloat(t))
        }, w: e, y: function (e, t) {
            e.setFullYear(2e3 + parseFloat(t))
        }
    }, Z = {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
    }, l = {
        Z: function (e) {
            return e.toISOString()
        }, D: function (e, t, n) {
            return t.weekdays.shorthand[l.w(e, t, n)]
        }, F: function (e, t, n) {
            return V(l.n(e, t, n) - 1, !1, t)
        }, G: function (e, t, n) {
            return $(l.h(e, t, n))
        }, H: function (e) {
            return $(e.getHours())
        }, J: function (e, t) {
            return void 0 !== t.ordinal ? e.getDate() + t.ordinal(e.getDate()) : e.getDate()
        }, K: function (e, t) {
            return t.amPM[q(11 < e.getHours())]
        }, M: function (e, t) {
            return V(e.getMonth(), !0, t)
        }, S: function (e) {
            return $(e.getSeconds())
        }, U: function (e) {
            return e.getTime() / 1e3
        }, W: function (e, t, n) {
            return n.getWeek(e)
        }, Y: function (e) {
            return e.getFullYear()
        }, d: function (e) {
            return $(e.getDate())
        }, h: function (e) {
            return e.getHours() % 12 ? e.getHours() % 12 : 12
        }, i: function (e) {
            return $(e.getMinutes())
        }, j: function (e) {
            return e.getDate()
        }, l: function (e, t) {
            return t.weekdays.longhand[e.getDay()]
        }, m: function (e) {
            return $(e.getMonth() + 1)
        }, n: function (e) {
            return e.getMonth() + 1
        }, s: function (e) {
            return e.getSeconds()
        }, w: function (e) {
            return e.getDay()
        }, y: function (e) {
            return String(e.getFullYear()).substring(2)
        }
    }, Q = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function (e) {
            var t = e % 100;
            if (3 < t && t < 21) return "th";
            switch (t % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th"
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year"
    }, t = function (e) {
        var t = e.config, o = void 0 === t ? b : t, n = e.l10n, r = void 0 === n ? Q : n;
        return function (a, e, t) {
            if (void 0 !== o.formatDate) return o.formatDate(a, e);
            var i = t || r;
            return e.split("").map(function (e, t, n) {
                return l[e] && "\\" !== n[t - 1] ? l[e](a, i, o) : "\\" !== e ? e : ""
            }).join("")
        }
    }, X = function (e) {
        var t = e.config, h = void 0 === t ? b : t, n = e.l10n, v = void 0 === n ? Q : n;
        return function (e, t, n) {
            if (0 === e || e) {
                var a, i = e;
                if (e instanceof Date) a = new Date(e.getTime()); else if ("string" != typeof e && void 0 !== e.toFixed) a = new Date(e); else if ("string" == typeof e) {
                    var o = t || (h || b).dateFormat, r = String(e).trim();
                    if ("today" === r) a = new Date, n = !0; else if (/Z$/.test(r) || /GMT$/.test(r)) a = new Date(e); else if (h && h.parseDate) a = h.parseDate(e, o); else {
                        a = h && h.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0);
                        for (var l, c = [], d = 0, s = 0, u = ""; d < o.length; d++) {
                            var f = o[d], m = "\\" === f, g = "\\" === o[d - 1] || m;
                            if (Z[f] && !g) {
                                u += Z[f];
                                var p = new RegExp(u).exec(e);
                                p && (l = !0) && c["Y" !== f ? "push" : "unshift"]({fn: D[f], val: p[++s]})
                            } else m || (u += ".");
                            c.forEach(function (e) {
                                var t = e.fn, n = e.val;
                                return a = t(a, n, v) || a
                            })
                        }
                        a = l ? a : void 0
                    }
                }
                if (a instanceof Date) return !0 === n && a.setHours(0, 0, 0, 0), a;
                h.errorHandler(new Error("Invalid date provided: " + i))
            }
        }
    };

    function ee(e, t, n) {
        return void 0 === n && (n = !0), !1 !== n ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime()
    }

    var te = function (e, t, n) {
        return e > Math.min(t, n) && e < Math.max(t, n)
    }, ne = {DAY: 864e5}, b = {
        _disable: [],
        _enable: [],
        allowInput: !1,
        altFormat: "F j, Y",
        altInput: !1,
        altInputClass: "form-control input",
        animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
        ariaDateFormat: "F j, Y",
        clickOpens: !0,
        closeOnSelect: !0,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: !1,
        enable: [],
        enableSeconds: !1,
        enableTime: !1,
        errorHandler: console.warn,
        getWeek: function (e) {
            var t = new Date(e.getTime());
            t.setHours(0, 0, 0, 0), t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
            var n = new Date(t.getFullYear(), 0, 4);
            return 1 + Math.round(((t.getTime() - n.getTime()) / 864e5 - 3 + (n.getDay() + 6) % 7) / 7)
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: !1,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: !1,
        now: new Date,
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: void 0,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: !1,
        showMonths: 1,
        static: !1,
        time_24hr: !1,
        weekNumbers: !1,
        wrap: !1
    };

    function ae(e, t, n) {
        if (!0 === n) return e.classList.add(t);
        e.classList.remove(t)
    }

    function ie(e, t, n) {
        var a = window.document.createElement(e);
        return t = t || "", n = n || "", a.className = t, void 0 !== n && (a.textContent = n), a
    }

    function oe(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function re(e, t) {
        var n = ie("div", "numInputWrapper"), a = ie("input", "numInput " + e), i = ie("span", "arrowUp"),
            o = ie("span", "arrowDown");
        if (a.type = "text", a.pattern = "\\d*", void 0 !== t) for (var r in t) a.setAttribute(r, t[r]);
        return n.appendChild(a), n.appendChild(i), n.appendChild(o), n
    }

    "function" != typeof Object.assign && (Object.assign = function (n) {
        if (!n) throw TypeError("Cannot convert undefined or null to object");
        for (var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), a = 1; a < e; a++) t[a - 1] = arguments[a];
        for (var i = function (t) {
            t && Object.keys(t).forEach(function (e) {
                return n[e] = t[e]
            })
        }, o = 0; o < t.length; o++) {
            i(t[o])
        }
        return n
    });
    var le = 300;

    function r(s, u) {
        var D = {config: Object.assign({}, ce.defaultConfig), l10n: Q};

        function f(e) {
            return e.bind(D)
        }

        function d(e) {
            0 !== D.selectedDates.length && (!function (e) {
                e.preventDefault();
                var t = "keydown" === e.type, n = e.target;
                void 0 !== D.amPM && e.target === D.amPM && (D.amPM.textContent = D.l10n.amPM[q(D.amPM.textContent === D.l10n.amPM[0])]);
                var a = parseFloat(n.getAttribute("data-min")), i = parseFloat(n.getAttribute("data-max")),
                    o = parseFloat(n.getAttribute("data-step")), r = parseInt(n.value, 10),
                    l = e.delta || (t ? 38 === e.which ? 1 : -1 : 0), c = r + o * l;
                if (void 0 !== n.value && 2 === n.value.length) {
                    var d = n === D.hourElement, s = n === D.minuteElement;
                    c < a ? (c = i + c + q(!d) + (q(d) && q(!D.amPM)), s && h(void 0, -1, D.hourElement)) : i < c && (c = n === D.hourElement ? c - i - q(!D.amPM) : a, s && h(void 0, 1, D.hourElement)), D.amPM && d && (1 === o ? c + r === 23 : Math.abs(c - r) > o) && (D.amPM.textContent = D.l10n.amPM[q(D.amPM.textContent === D.l10n.amPM[0])]), n.value = $(c)
                }
            }(e), "input" !== e.type ? (m(), B()) : setTimeout(function () {
                m(), B()
            }, le))
        }

        function m() {
            if (void 0 !== D.hourElement && void 0 !== D.minuteElement) {
                var e, t, n = (parseInt(D.hourElement.value.slice(-2), 10) || 0) % 24,
                    a = (parseInt(D.minuteElement.value, 10) || 0) % 60,
                    i = void 0 !== D.secondElement ? (parseInt(D.secondElement.value, 10) || 0) % 60 : 0;
                void 0 !== D.amPM && (e = n, t = D.amPM.textContent, n = e % 12 + 12 * q(t === D.l10n.amPM[1]));
                var o = void 0 !== D.config.minTime || D.config.minDate && D.minDateHasTime && D.latestSelectedDateObj && 0 === ee(D.latestSelectedDateObj, D.config.minDate, !0);
                if (void 0 !== D.config.maxTime || D.config.maxDate && D.maxDateHasTime && D.latestSelectedDateObj && 0 === ee(D.latestSelectedDateObj, D.config.maxDate, !0)) {
                    var r = void 0 !== D.config.maxTime ? D.config.maxTime : D.config.maxDate;
                    (n = Math.min(n, r.getHours())) === r.getHours() && (a = Math.min(a, r.getMinutes())), a === r.getMinutes() && (i = Math.min(i, r.getSeconds()))
                }
                if (o) {
                    var l = void 0 !== D.config.minTime ? D.config.minTime : D.config.minDate;
                    (n = Math.max(n, l.getHours())) === l.getHours() && (a = Math.max(a, l.getMinutes())), a === l.getMinutes() && (i = Math.max(i, l.getSeconds()))
                }
                c(n, a, i)
            }
        }

        function g(e) {
            var t = e || D.latestSelectedDateObj;
            t && c(t.getHours(), t.getMinutes(), t.getSeconds())
        }

        function c(e, t, n) {
            void 0 !== D.latestSelectedDateObj && D.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0), D.hourElement && D.minuteElement && !D.isMobile && (D.hourElement.value = $(D.config.time_24hr ? e : (12 + e) % 12 + 12 * q(e % 12 == 0)), D.minuteElement.value = $(t), void 0 !== D.amPM && (D.amPM.textContent = D.l10n.amPM[q(12 <= e)]), void 0 !== D.secondElement && (D.secondElement.value = $(n)))
        }

        function n(e) {
            var t = parseInt(e.target.value) + (e.delta || 0);
            4 !== t.toString().length && "Enter" !== e.key || (e.target.blur(), /[^\d]/.test(t.toString()) || E(t))
        }

        function o(t, n, a, i) {
            return n instanceof Array ? n.forEach(function (e) {
                return o(t, e, a, i)
            }) : t instanceof Array ? t.forEach(function (e) {
                return o(e, n, a, i)
            }) : (t.addEventListener(n, a, i), void D._handlers.push({element: t, event: n, handler: a}))
        }

        function a(t) {
            return function (e) {
                1 === e.which && t(e)
            }
        }

        function p() {
            W("onChange")
        }

        function i(e) {
            var t = void 0 !== e ? D.parseDate(e) : D.latestSelectedDateObj || (D.config.minDate && D.config.minDate > D.now ? D.config.minDate : D.config.maxDate && D.config.maxDate < D.now ? D.config.maxDate : D.now);
            try {
                void 0 !== t && (D.currentYear = t.getFullYear(), D.currentMonth = t.getMonth())
            } catch (e) {
                e.message = "Invalid date supplied: " + t, D.config.errorHandler(e)
            }
            D.redraw()
        }

        function r(e) {
            ~e.target.className.indexOf("arrow") && h(e, e.target.classList.contains("arrowUp") ? 1 : -1)
        }

        function h(e, t, n) {
            var a = e && e.target, i = n || a && a.parentNode && a.parentNode.firstChild, o = R("increment");
            o.delta = t, i && i.dispatchEvent(o)
        }

        function v(e, t, n, a) {
            var i, o = k(t, !0), r = ie("span", "flatpickr-day " + e, t.getDate().toString());
            return r.dateObj = t, r.$i = a, r.setAttribute("aria-label", D.formatDate(t, D.config.ariaDateFormat)), 0 === ee(t, D.now) && (D.todayDateElem = r).classList.add("today"), o ? (r.tabIndex = -1, J(t) && (r.classList.add("selected"), D.selectedDateElem = r, "range" === D.config.mode && (ae(r, "startRange", D.selectedDates[0] && 0 === ee(t, D.selectedDates[0], !0)), ae(r, "endRange", D.selectedDates[1] && 0 === ee(t, D.selectedDates[1], !0)), "nextMonthDay" === e && r.classList.add("inRange")))) : r.classList.add("disabled"), "range" === D.config.mode && (i = t, !("range" !== D.config.mode || D.selectedDates.length < 2) && 0 <= ee(i, D.selectedDates[0]) && ee(i, D.selectedDates[1]) <= 0 && !J(t) && r.classList.add("inRange")), D.weekNumbers && 1 === D.config.showMonths && "prevMonthDay" !== e && n % 7 == 1 && D.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + D.config.getWeek(t) + "</span>"), W("onDayCreate", r), r
        }

        function b(e, t) {
            var n = ((void 0 !== e ? e : document.activeElement.$i) || 0) + t || 0,
                a = Array.prototype.find.call(D.days.children, function (e, t) {
                    return n <= t && -1 === e.className.indexOf("MonthDay") && k(e.dateObj)
                });
            void 0 !== a && (a.focus(), "range" === D.config.mode && S(a))
        }

        function l(e, t) {
            for (var n = (new Date(e, t, 1).getDay() - D.l10n.firstDayOfWeek + 7) % 7, a = D.utils.getDaysInMonth((t - 1 + 12) % 12), i = D.utils.getDaysInMonth(t), o = window.document.createDocumentFragment(), r = a + 1 - n, l = 0; r <= a; r++, l++) o.appendChild(v("prevMonthDay", new Date(e, t - 1, r), r, l));
            for (r = 1; r <= i; r++, l++) o.appendChild(v("", new Date(e, t, r), r, l));
            for (var c = i + 1; c <= 42 - n && (1 === D.config.showMonths || l % 7 != 0); c++, l++) o.appendChild(v("nextMonthDay", new Date(e, t + 1, c % i), c, l));
            var d = ie("div", "dayContainer");
            return d.appendChild(o), d
        }

        function w() {
            if (void 0 !== D.daysContainer) {
                oe(D.daysContainer), D.weekNumbers && oe(D.weekNumbers);
                for (var e = document.createDocumentFragment(), t = 0; t < D.config.showMonths; t++) {
                    var n = new Date(D.currentYear, D.currentMonth, 1);
                    n.setMonth(D.currentMonth + t), e.appendChild(l(n.getFullYear(), n.getMonth()))
                }
                D.daysContainer.appendChild(e), D.days = D.daysContainer.firstChild
            }
        }

        function C() {
            var e = ie("div", "flatpickr-month"), t = window.document.createDocumentFragment(),
                n = ie("span", "cur-month");
            n.title = D.l10n.scrollTitle;
            var a = re("cur-year", {tabindex: "-1"}), i = a.childNodes[0];
            i.title = D.l10n.scrollTitle, i.setAttribute("aria-label", D.l10n.yearAriaLabel), D.config.minDate && i.setAttribute("data-min", D.config.minDate.getFullYear().toString()), D.config.maxDate && (i.setAttribute("data-max", D.config.maxDate.getFullYear().toString()), i.disabled = !!D.config.minDate && D.config.minDate.getFullYear() === D.config.maxDate.getFullYear());
            var o = ie("div", "flatpickr-current-month");
            return o.appendChild(n), o.appendChild(a), t.appendChild(o), e.appendChild(t), {
                container: e,
                yearElement: i,
                monthElement: n
            }
        }

        function M() {
            var e = D.l10n.firstDayOfWeek, t = D.l10n.weekdays.shorthand.concat();
            0 < e && e < t.length && (t = t.splice(e, t.length).concat(t.splice(0, e)));
            for (var n = D.config.showMonths; n--;) D.weekdayContainer.children[n].innerHTML = "\n      <span class=flatpickr-weekday>\n        " + t.join("</span><span class=flatpickr-weekday>") + "\n      </span>\n      "
        }

        function y(e, t, n) {
            void 0 === t && (t = !0), void 0 === n && (n = !1);
            var a = t ? e : e - D.currentMonth;
            a < 0 && !0 === D._hidePrevMonthArrow || 0 < a && !0 === D._hideNextMonthArrow || (D.currentMonth += a, (D.currentMonth < 0 || 11 < D.currentMonth) && (D.currentYear += 11 < D.currentMonth ? 1 : -1, D.currentMonth = (D.currentMonth + 12) % 12, W("onYearChange")), w(), W("onMonthChange"), K(), !0 === n && b(void 0, 0))
        }

        function x(e) {
            return !(!D.config.appendTo || !D.config.appendTo.contains(e)) || D.calendarContainer.contains(e)
        }

        function T(t) {
            if (D.isOpen && !D.config.inline) {
                var e = x(t.target),
                    n = t.target === D.input || t.target === D.altInput || D.element.contains(t.target) || t.path && t.path.indexOf && (~t.path.indexOf(D.input) || ~t.path.indexOf(D.altInput)),
                    a = "blur" === t.type ? n && t.relatedTarget && !x(t.relatedTarget) : !n && !e,
                    i = !D.config.ignoredFocusElements.some(function (e) {
                        return e.contains(t.target)
                    });
                a && i && (D.close(), "range" === D.config.mode && 1 === D.selectedDates.length && (D.clear(!1), D.redraw()))
            }
        }

        function E(e) {
            if (!(!e || D.config.minDate && e < D.config.minDate.getFullYear() || D.config.maxDate && e > D.config.maxDate.getFullYear())) {
                var t = e, n = D.currentYear !== t;
                D.currentYear = t || D.currentYear, D.config.maxDate && D.currentYear === D.config.maxDate.getFullYear() ? D.currentMonth = Math.min(D.config.maxDate.getMonth(), D.currentMonth) : D.config.minDate && D.currentYear === D.config.minDate.getFullYear() && (D.currentMonth = Math.max(D.config.minDate.getMonth(), D.currentMonth)), n && (D.redraw(), W("onYearChange"))
            }
        }

        function k(e, t) {
            void 0 === t && (t = !0);
            var n = D.parseDate(e, void 0, t);
            if (D.config.minDate && n && ee(n, D.config.minDate, void 0 !== t ? t : !D.minDateHasTime) < 0 || D.config.maxDate && n && 0 < ee(n, D.config.maxDate, void 0 !== t ? t : !D.maxDateHasTime)) return !1;
            if (0 === D.config.enable.length && 0 === D.config.disable.length) return !0;
            if (void 0 === n) return !1;
            for (var a, i = 0 < D.config.enable.length, o = i ? D.config.enable : D.config.disable, r = 0; r < o.length; r++) {
                if ("function" == typeof(a = o[r]) && a(n)) return i;
                if (a instanceof Date && void 0 !== n && a.getTime() === n.getTime()) return i;
                if ("string" == typeof a && void 0 !== n) {
                    var l = D.parseDate(a, void 0, !0);
                    return l && l.getTime() === n.getTime() ? i : !i
                }
                if ("object" == typeof a && void 0 !== n && a.from && a.to && n.getTime() >= a.from.getTime() && n.getTime() <= a.to.getTime()) return i
            }
            return !i
        }

        function I(e) {
            var t = e.target === D._input, n = x(e.target), a = D.config.allowInput, i = D.isOpen && (!a || !t),
                o = D.config.inline && t && !a;
            if (13 === e.keyCode && t) {
                if (a) return D.setDate(D._input.value, !0, e.target === D.altInput ? D.config.altFormat : D.config.dateFormat), e.target.blur();
                D.open()
            } else if (n || i || o) {
                var r = !!D.timeContainer && D.timeContainer.contains(e.target);
                switch (e.keyCode) {
                    case 13:
                        r ? B() : j(e);
                        break;
                    case 27:
                        e.preventDefault(), Y();
                        break;
                    case 8:
                    case 46:
                        t && !D.config.allowInput && (e.preventDefault(), D.clear());
                        break;
                    case 37:
                    case 39:
                        if (r) D.hourElement && D.hourElement.focus(); else if (e.preventDefault(), D.daysContainer) {
                            var l = t ? 0 : 39 === e.keyCode ? 1 : -1;
                            e.ctrlKey ? y(l, !0, !0) : b(void 0, l)
                        }
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var c = 40 === e.keyCode ? 1 : -1;
                        D.daysContainer && void 0 !== e.target.$i ? e.ctrlKey ? (E(D.currentYear - c), b(e.target.$i, 0)) : r || b(e.target.$i, 7 * c) : D.config.enableTime && (!r && D.hourElement && D.hourElement.focus(), d(e), D._debouncedChange());
                        break;
                    case 9:
                        e.target === D.hourElement ? (e.preventDefault(), D.minuteElement.select()) : e.target === D.minuteElement && (D.secondElement || D.amPM) ? (e.preventDefault(), void 0 !== D.secondElement ? D.secondElement.focus() : void 0 !== D.amPM && D.amPM.focus()) : e.target === D.secondElement && D.amPM && (e.preventDefault(), D.amPM.focus())
                }
                switch (e.key) {
                    case D.l10n.amPM[0].charAt(0):
                    case D.l10n.amPM[0].charAt(0).toLowerCase():
                        void 0 !== D.amPM && e.target === D.amPM && (D.amPM.textContent = D.l10n.amPM[0], m(), B());
                        break;
                    case D.l10n.amPM[1].charAt(0):
                    case D.l10n.amPM[1].charAt(0).toLowerCase():
                        void 0 !== D.amPM && e.target === D.amPM && (D.amPM.textContent = D.l10n.amPM[1], m(), B())
                }
                W("onKeyDown", e)
            }
        }

        function S(o) {
            if (1 === D.selectedDates.length && o.classList.contains("flatpickr-day") && !o.classList.contains("disabled")) {
                for (var r = o.dateObj.getTime(), l = D.parseDate(D.selectedDates[0], void 0, !0).getTime(), e = Math.min(r, D.selectedDates[0].getTime()), t = Math.max(r, D.selectedDates[0].getTime()), n = D.daysContainer.children, a = n[0].children[0].dateObj.getTime(), i = n[n.length - 1].lastChild.dateObj.getTime(), c = !1, d = 0, s = 0, u = a; u < i; u += ne.DAY) k(new Date(u), !0) || (c = c || e < u && u < t, u < l && (!d || d < u) ? d = u : l < u && (!s || u < s) && (s = u));
                for (var f = 0; f < D.config.showMonths; f++) for (var m = D.daysContainer.children[f], g = D.daysContainer.children[f - 1], p = function (e, t) {
                    var n = m.children[e], a = n.dateObj.getTime(), i = 0 < d && a < d || 0 < s && s < a;
                    return i ? (n.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(function (e) {
                        n.classList.remove(e)
                    }), "continue") : c && !i ? "continue" : (["startRange", "inRange", "endRange", "notAllowed"].forEach(function (e) {
                        n.classList.remove(e)
                    }), o.classList.add(r < D.selectedDates[0].getTime() ? "startRange" : "endRange"), void(!m.contains(o) && 0 < f && g && g.lastChild.dateObj.getTime() >= a || (l < r && a === l ? n.classList.add("startRange") : r < l && a === l && n.classList.add("endRange"), d <= a && (0 === s || a <= s) && te(a, l, r) && n.classList.add("inRange"))))
                }, h = 0, v = m.children.length; h < v; h++) p(h)
            }
        }

        function O() {
            !D.isOpen || D.config.static || D.config.inline || P()
        }

        function _(a) {
            return function (e) {
                var t = D.config["_" + a + "Date"] = D.parseDate(e, D.config.dateFormat),
                    n = D.config["_" + ("min" === a ? "max" : "min") + "Date"];
                void 0 !== t && (D["min" === a ? "minDateHasTime" : "maxDateHasTime"] = 0 < t.getHours() || 0 < t.getMinutes() || 0 < t.getSeconds()), D.selectedDates && (D.selectedDates = D.selectedDates.filter(function (e) {
                    return k(e)
                }), D.selectedDates.length || "min" !== a || g(t), B()), D.daysContainer && (A(), void 0 !== t ? D.currentYearElement[a] = t.getFullYear().toString() : D.currentYearElement.removeAttribute(a), D.currentYearElement.disabled = !!n && void 0 !== t && n.getFullYear() === t.getFullYear())
            }
        }

        function F() {
            "object" != typeof D.config.locale && void 0 === ce.l10ns[D.config.locale] && D.config.errorHandler(new Error("flatpickr: invalid locale " + D.config.locale)), D.l10n = Object.assign({}, ce.l10ns.default, "object" == typeof D.config.locale ? D.config.locale : "default" !== D.config.locale ? ce.l10ns[D.config.locale] : void 0), Z.K = "(" + D.l10n.amPM[0] + "|" + D.l10n.amPM[1] + "|" + D.l10n.amPM[0].toLowerCase() + "|" + D.l10n.amPM[1].toLowerCase() + ")", D.formatDate = t(D)
        }

        function P(e) {
            if (void 0 !== D.calendarContainer) {
                W("onPreCalendarPosition");
                var t = e || D._positionElement,
                    n = Array.prototype.reduce.call(D.calendarContainer.children, function (e, t) {
                        return e + t.offsetHeight
                    }, 0), a = D.calendarContainer.offsetWidth, i = D.config.position, o = t.getBoundingClientRect(),
                    r = window.innerHeight - o.bottom, l = "above" === i || "below" !== i && r < n && o.top > n,
                    c = window.pageYOffset + o.top + (l ? -n - 2 : t.offsetHeight + 2);
                if (ae(D.calendarContainer, "arrowTop", !l), ae(D.calendarContainer, "arrowBottom", l), !D.config.inline) {
                    var d = window.pageXOffset + o.left, s = window.document.body.offsetWidth - o.right,
                        u = d + a > window.document.body.offsetWidth;
                    ae(D.calendarContainer, "rightMost", u), D.config.static || (D.calendarContainer.style.top = c + "px", u ? (D.calendarContainer.style.left = "auto", D.calendarContainer.style.right = s + "px") : (D.calendarContainer.style.left = d + "px", D.calendarContainer.style.right = "auto"))
                }
            }
        }

        function A() {
            D.config.noCalendar || D.isMobile || (M(), K(), w())
        }

        function Y() {
            D._input.focus(), -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(D.close, 0) : D.close()
        }

        function j(e) {
            e.preventDefault(), e.stopPropagation();
            var t = function e(t, n) {
                return n(t) ? t : t.parentNode ? e(t.parentNode, n) : void 0
            }(e.target, function (e) {
                return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("disabled") && !e.classList.contains("notAllowed")
            });
            if (void 0 !== t) {
                var n = t, a = D.latestSelectedDateObj = new Date(n.dateObj.getTime()),
                    i = (a.getMonth() < D.currentMonth || a.getMonth() > D.currentMonth + D.config.showMonths - 1) && "range" !== D.config.mode;
                if (D.selectedDateElem = n, "single" === D.config.mode) D.selectedDates = [a]; else if ("multiple" === D.config.mode) {
                    var o = J(a);
                    o ? D.selectedDates.splice(parseInt(o), 1) : D.selectedDates.push(a)
                } else "range" === D.config.mode && (2 === D.selectedDates.length && D.clear(!1), D.selectedDates.push(a), 0 !== ee(a, D.selectedDates[0], !0) && D.selectedDates.sort(function (e, t) {
                    return e.getTime() - t.getTime()
                }));
                if (m(), i) {
                    var r = D.currentYear !== a.getFullYear();
                    D.currentYear = a.getFullYear(), D.currentMonth = a.getMonth(), r && W("onYearChange"), W("onMonthChange")
                }
                if (K(), w(), D.config.minDate && D.minDateHasTime && D.config.enableTime && 0 === ee(a, D.config.minDate) && g(D.config.minDate), B(), D.config.enableTime && setTimeout(function () {
                    return D.showTimeInput = !0
                }, 50), "range" === D.config.mode && (1 === D.selectedDates.length ? S(n) : K()), i || "range" === D.config.mode || 1 !== D.config.showMonths ? D.selectedDateElem && D.selectedDateElem.focus() : b(n.$i, 0), void 0 !== D.hourElement && setTimeout(function () {
                    return void 0 !== D.hourElement && D.hourElement.select()
                }, 451), D.config.closeOnSelect) {
                    var l = "single" === D.config.mode && !D.config.enableTime,
                        c = "range" === D.config.mode && 2 === D.selectedDates.length && !D.config.enableTime;
                    (l || c) && Y()
                }
                p()
            }
        }

        D.parseDate = X({
            config: D.config,
            l10n: D.l10n
        }), D._handlers = [], D._bind = o, D._setHoursFromDate = g, D.changeMonth = y, D.changeYear = E, D.clear = function (e) {
            void 0 === e && (e = !0);
            D.input.value = "", void 0 !== D.altInput && (D.altInput.value = "");
            void 0 !== D.mobileInput && (D.mobileInput.value = "");
            D.selectedDates = [], D.latestSelectedDateObj = void 0, !(D.showTimeInput = !1) === D.config.enableTime && (void 0 !== D.config.minDate ? g(D.config.minDate) : c(D.config.defaultHour, D.config.defaultMinute, D.config.defaultSeconds));
            D.redraw(), e && W("onChange")
        }, D.close = function () {
            D.isOpen = !1, D.isMobile || (D.calendarContainer.classList.remove("open"), D._input.classList.remove("active"));
            W("onClose")
        }, D._createElement = ie, D.destroy = function () {
            void 0 !== D.config && W("onDestroy");
            for (var e = D._handlers.length; e--;) {
                var t = D._handlers[e];
                t.element.removeEventListener(t.event, t.handler)
            }
            D._handlers = [], D.mobileInput ? (D.mobileInput.parentNode && D.mobileInput.parentNode.removeChild(D.mobileInput), D.mobileInput = void 0) : D.calendarContainer && D.calendarContainer.parentNode && D.calendarContainer.parentNode.removeChild(D.calendarContainer);
            D.altInput && (D.input.type = "text", D.altInput.parentNode && D.altInput.parentNode.removeChild(D.altInput), delete D.altInput);
            D.input && (D.input.type = D.input._type, D.input.classList.remove("flatpickr-input"), D.input.removeAttribute("readonly"), D.input.value = "");
            ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (e) {
                try {
                    delete D[e]
                } catch (e) {
                }
            })
        }, D.isEnabled = k, D.jumpToDate = i, D.open = function (e, t) {
            void 0 === t && (t = D._input);
            if (!0 === D.isMobile) return e && (e.preventDefault(), e.target && e.target.blur()), setTimeout(function () {
                void 0 !== D.mobileInput && D.mobileInput.click()
            }, 0), void W("onOpen");
            if (D._input.disabled || D.config.inline) return;
            var n = D.isOpen;
            D.isOpen = !0, n || (D.calendarContainer.classList.add("open"), D._input.classList.add("active"), W("onOpen"), P(t));
            !0 === D.config.enableTime && !0 === D.config.noCalendar && (0 === D.selectedDates.length && (D.setDate(void 0 !== D.config.minDate ? new Date(D.config.minDate.getTime()) : (new Date).setHours(D.config.defaultHour, D.config.defaultMinute, D.config.defaultSeconds, 0), !1), m(), B()), setTimeout(function () {
                return D.hourElement.select()
            }, 50))
        }, D.redraw = A, D.set = function (e, t) {
            null !== e && "object" == typeof e ? Object.assign(D.config, e) : (D.config[e] = t, void 0 !== N[e] && N[e].forEach(function (e) {
                return e()
            }));
            D.redraw(), i()
        }, D.setDate = function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = D.config.dateFormat);
            if (0 !== e && !e) return D.clear(t);
            H(e, n), D.showTimeInput = 0 < D.selectedDates.length, D.latestSelectedDateObj = D.selectedDates[0], D.redraw(), i(), g(), B(t), t && W("onChange")
        }, D.toggle = function () {
            if (D.isOpen) return D.close();
            D.open()
        };
        var N = {locale: [F]};

        function H(e, t) {
            var n = [];
            if (e instanceof Array) n = e.map(function (e) {
                return D.parseDate(e, t)
            }); else if (e instanceof Date || "number" == typeof e) n = [D.parseDate(e, t)]; else if ("string" == typeof e) switch (D.config.mode) {
                case"single":
                    n = [D.parseDate(e, t)];
                    break;
                case"multiple":
                    n = e.split(D.config.conjunction).map(function (e) {
                        return D.parseDate(e, t)
                    });
                    break;
                case"range":
                    n = e.split(D.l10n.rangeSeparator).map(function (e) {
                        return D.parseDate(e, t)
                    })
            } else D.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(e)));
            D.selectedDates = n.filter(function (e) {
                return e instanceof Date && k(e, !1)
            }), "range" === D.config.mode && D.selectedDates.sort(function (e, t) {
                return e.getTime() - t.getTime()
            })
        }

        function L(e) {
            return e.map(function (e) {
                return "string" == typeof e || "number" == typeof e || e instanceof Date ? D.parseDate(e, void 0, !0) : e && "object" == typeof e && e.from && e.to ? {
                    from: D.parseDate(e.from, void 0),
                    to: D.parseDate(e.to, void 0)
                } : e
            }).filter(function (e) {
                return e
            })
        }

        function W(e, t) {
            var n = D.config[e];
            if (void 0 !== n && 0 < n.length) for (var a = 0; n[a] && a < n.length; a++) n[a](D.selectedDates, D.input.value, D, t);
            "onChange" === e && (D.input.dispatchEvent(R("change")), D.input.dispatchEvent(R("input")))
        }

        function R(e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !0), t
        }

        function J(e) {
            for (var t = 0; t < D.selectedDates.length; t++) if (0 === ee(D.selectedDates[t], e)) return "" + t;
            return !1
        }

        function K() {
            D.config.noCalendar || D.isMobile || !D.monthNav || (D.yearElements.forEach(function (e, t) {
                var n = new Date(D.currentYear, D.currentMonth, 1);
                n.setMonth(D.currentMonth + t), D.monthElements[t].textContent = V(n.getMonth(), D.config.shorthandCurrentMonth, D.l10n) + " ", e.value = n.getFullYear().toString()
            }), D._hidePrevMonthArrow = void 0 !== D.config.minDate && (D.currentYear === D.config.minDate.getFullYear() ? D.currentMonth <= D.config.minDate.getMonth() : D.currentYear < D.config.minDate.getFullYear()), D._hideNextMonthArrow = void 0 !== D.config.maxDate && (D.currentYear === D.config.maxDate.getFullYear() ? D.currentMonth + 1 > D.config.maxDate.getMonth() : D.currentYear > D.config.maxDate.getFullYear()))
        }

        function B(e) {
            if (void 0 === e && (e = !0), 0 === D.selectedDates.length) return D.clear(e);
            void 0 !== D.mobileInput && D.mobileFormatStr && (D.mobileInput.value = void 0 !== D.latestSelectedDateObj ? D.formatDate(D.latestSelectedDateObj, D.mobileFormatStr) : "");
            var t = "range" !== D.config.mode ? D.config.conjunction : D.l10n.rangeSeparator;
            D.input.value = D.selectedDates.map(function (e) {
                return D.formatDate(e, D.config.dateFormat)
            }).join(t), void 0 !== D.altInput && (D.altInput.value = D.selectedDates.map(function (e) {
                return D.formatDate(e, D.config.altFormat)
            }).join(t)), !1 !== e && W("onValueUpdate")
        }

        function U(e) {
            var t = D.prevMonthNav.contains(e.target), n = D.nextMonthNav.contains(e.target);
            t || n ? y(t ? -1 : 1) : 0 <= D.yearElements.indexOf(e.target) ? (e.preventDefault(), e.target.select()) : e.target.classList.contains("arrowUp") ? D.changeYear(D.currentYear + 1) : e.target.classList.contains("arrowDown") && D.changeYear(D.currentYear - 1)
        }

        return function () {
            if (D.element = D.input = s, D.isOpen = !1, function () {
                var e = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
                    t = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
                    n = Object.assign({}, u, JSON.parse(JSON.stringify(s.dataset || {}))), a = {};
                D.config.parseDate = n.parseDate, D.config.formatDate = n.formatDate, Object.defineProperty(D.config, "enable", {
                    get: function () {
                        return D.config._enable
                    }, set: function (e) {
                        D.config._enable = L(e)
                    }
                }), Object.defineProperty(D.config, "disable", {
                    get: function () {
                        return D.config._disable
                    }, set: function (e) {
                        D.config._disable = L(e)
                    }
                }), !n.dateFormat && n.enableTime && (a.dateFormat = n.noCalendar ? "H:i" + (n.enableSeconds ? ":S" : "") : ce.defaultConfig.dateFormat + " H:i" + (n.enableSeconds ? ":S" : "")), n.altInput && n.enableTime && !n.altFormat && (a.altFormat = n.noCalendar ? "h:i" + (n.enableSeconds ? ":S K" : " K") : ce.defaultConfig.altFormat + " h:i" + (n.enableSeconds ? ":S" : "") + " K"), Object.defineProperty(D.config, "minDate", {
                    get: function () {
                        return D.config._minDate
                    }, set: _("min")
                }), Object.defineProperty(D.config, "maxDate", {
                    get: function () {
                        return D.config._maxDate
                    }, set: _("max")
                });
                var i = function (t) {
                    return function (e) {
                        D.config["min" === t ? "_minTime" : "_maxTime"] = D.parseDate(e, "H:i")
                    }
                };
                Object.defineProperty(D.config, "minTime", {
                    get: function () {
                        return D.config._minTime
                    }, set: i("min")
                }), Object.defineProperty(D.config, "maxTime", {
                    get: function () {
                        return D.config._maxTime
                    }, set: i("max")
                }), Object.assign(D.config, a, n);
                for (var o = 0; o < e.length; o++) D.config[e[o]] = !0 === D.config[e[o]] || "true" === D.config[e[o]];
                for (var r = t.length; r--;) void 0 !== D.config[t[r]] && (D.config[t[r]] = G(D.config[t[r]] || []).map(f));
                "time" === D.config.mode && (D.config.noCalendar = !0, D.config.enableTime = !0);
                for (var l = 0; l < D.config.plugins.length; l++) {
                    var c = D.config.plugins[l](D) || {};
                    for (var d in c) ~t.indexOf(d) ? D.config[d] = G(c[d]).map(f).concat(D.config[d]) : void 0 === n[d] && (D.config[d] = c[d])
                }
                D.isMobile = !D.config.disableMobile && !D.config.inline && "single" === D.config.mode && !D.config.disable.length && !D.config.enable.length && !D.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), W("onParseConfig")
            }(), F(), function () {
                if (D.input = D.config.wrap ? s.querySelector("[data-input]") : s, !D.input) return D.config.errorHandler(new Error("Invalid input element specified"));
                D.input._type = D.input.type, D.input.type = "text", D.input.classList.add("flatpickr-input"), D._input = D.input, D.config.altInput && (D.altInput = ie(D.input.nodeName, D.input.className + " " + D.config.altInputClass), D._input = D.altInput, D.altInput.placeholder = D.input.placeholder, D.altInput.disabled = D.input.disabled, D.altInput.required = D.input.required, D.altInput.tabIndex = D.input.tabIndex, D.altInput.type = "text", D.input.type = "hidden", !D.config.static && D.input.parentNode && D.input.parentNode.insertBefore(D.altInput, D.input.nextSibling)), D.config.allowInput || D._input.setAttribute("readonly", "readonly"), D._positionElement = D.config.positionElement || D._input
            }(), function () {
                D.selectedDates = [], D.now = D.parseDate(D.config.now) || new Date;
                var e = D.config.defaultDate || D.input.value;
                e && H(e, D.config.dateFormat);
                var t = 0 < D.selectedDates.length ? D.selectedDates[0] : D.config.minDate && D.config.minDate.getTime() > D.now.getTime() ? D.config.minDate : D.config.maxDate && D.config.maxDate.getTime() < D.now.getTime() ? D.config.maxDate : D.now;
                D.currentYear = t.getFullYear(), D.currentMonth = t.getMonth(), 0 < D.selectedDates.length && (D.latestSelectedDateObj = D.selectedDates[0]), void 0 !== D.config.minTime && (D.config.minTime = D.parseDate(D.config.minTime, "H:i")), void 0 !== D.config.maxTime && (D.config.maxTime = D.parseDate(D.config.maxTime, "H:i")), D.minDateHasTime = !!D.config.minDate && (0 < D.config.minDate.getHours() || 0 < D.config.minDate.getMinutes() || 0 < D.config.minDate.getSeconds()), D.maxDateHasTime = !!D.config.maxDate && (0 < D.config.maxDate.getHours() || 0 < D.config.maxDate.getMinutes() || 0 < D.config.maxDate.getSeconds()), Object.defineProperty(D, "showTimeInput", {
                    get: function () {
                        return D._showTimeInput
                    }, set: function (e) {
                        D._showTimeInput = e, D.calendarContainer && ae(D.calendarContainer, "showTimeInput", e), D.isOpen && P()
                    }
                })
            }(), D.utils = {
                getDaysInMonth: function (e, t) {
                    return void 0 === e && (e = D.currentMonth), void 0 === t && (t = D.currentYear), 1 === e && (t % 4 == 0 && t % 100 != 0 || t % 400 == 0) ? 29 : D.l10n.daysInMonth[e]
                }
            }, D.isMobile || function () {
                var e = window.document.createDocumentFragment();
                if (D.calendarContainer = ie("div", "flatpickr-calendar"), D.calendarContainer.tabIndex = -1, !D.config.noCalendar) {
                    if (e.appendChild(function () {
                        D.monthNav = ie("div", "flatpickr-months"), D.yearElements = [], D.monthElements = [], D.prevMonthNav = ie("span", "flatpickr-prev-month"), D.prevMonthNav.innerHTML = D.config.prevArrow, D.nextMonthNav = ie("span", "flatpickr-next-month"), D.nextMonthNav.innerHTML = D.config.nextArrow, D.monthNav.appendChild(D.prevMonthNav);
                        for (var e = D.config.showMonths; e--;) {
                            var t = C();
                            D.yearElements.push(t.yearElement), D.monthElements.push(t.monthElement), D.monthNav.appendChild(t.container)
                        }
                        return D.monthNav.appendChild(D.nextMonthNav), Object.defineProperty(D, "_hidePrevMonthArrow", {
                            get: function () {
                                return D.__hidePrevMonthArrow
                            }, set: function (e) {
                                D.__hidePrevMonthArrow !== e && (ae(D.prevMonthNav, "disabled", e), D.__hidePrevMonthArrow = e)
                            }
                        }), Object.defineProperty(D, "_hideNextMonthArrow", {
                            get: function () {
                                return D.__hideNextMonthArrow
                            }, set: function (e) {
                                D.__hideNextMonthArrow !== e && (ae(D.nextMonthNav, "disabled", e), D.__hideNextMonthArrow = e)
                            }
                        }), D.currentYearElement = D.yearElements[0], K(), D.monthNav
                    }()), D.innerContainer = ie("div", "flatpickr-innerContainer"), D.config.weekNumbers) {
                        var t = function () {
                            D.calendarContainer.classList.add("hasWeeks");
                            var e = ie("div", "flatpickr-weekwrapper");
                            e.appendChild(ie("span", "flatpickr-weekday", D.l10n.weekAbbreviation));
                            var t = ie("div", "flatpickr-weeks");
                            return e.appendChild(t), {weekWrapper: e, weekNumbers: t}
                        }(), n = t.weekWrapper, a = t.weekNumbers;
                        D.innerContainer.appendChild(n), D.weekNumbers = a, D.weekWrapper = n
                    }
                    D.rContainer = ie("div", "flatpickr-rContainer"), D.rContainer.appendChild(function () {
                        D.weekdayContainer || (D.weekdayContainer = ie("div", "flatpickr-weekdays"));
                        for (var e = D.config.showMonths; e--;) {
                            var t = ie("div", "flatpickr-weekdaycontainer");
                            D.weekdayContainer.appendChild(t)
                        }
                        return M(), D.weekdayContainer
                    }()), D.daysContainer || (D.daysContainer = ie("div", "flatpickr-days"), D.daysContainer.tabIndex = -1), w(), D.rContainer.appendChild(D.daysContainer), D.innerContainer.appendChild(D.rContainer), e.appendChild(D.innerContainer)
                }
                D.config.enableTime && e.appendChild(function () {
                    D.calendarContainer.classList.add("hasTime"), D.config.noCalendar && D.calendarContainer.classList.add("noCalendar"), D.timeContainer = ie("div", "flatpickr-time"), D.timeContainer.tabIndex = -1;
                    var e = ie("span", "flatpickr-time-separator", ":"), t = re("flatpickr-hour");
                    D.hourElement = t.childNodes[0];
                    var n = re("flatpickr-minute");
                    if (D.minuteElement = n.childNodes[0], D.hourElement.tabIndex = D.minuteElement.tabIndex = -1, D.hourElement.value = $(D.latestSelectedDateObj ? D.latestSelectedDateObj.getHours() : D.config.time_24hr ? D.config.defaultHour : function (e) {
                        switch (e % 24) {
                            case 0:
                            case 12:
                                return 12;
                            default:
                                return e % 12
                        }
                    }(D.config.defaultHour)), D.minuteElement.value = $(D.latestSelectedDateObj ? D.latestSelectedDateObj.getMinutes() : D.config.defaultMinute), D.hourElement.setAttribute("data-step", D.config.hourIncrement.toString()), D.minuteElement.setAttribute("data-step", D.config.minuteIncrement.toString()), D.hourElement.setAttribute("data-min", D.config.time_24hr ? "0" : "1"), D.hourElement.setAttribute("data-max", D.config.time_24hr ? "23" : "12"), D.minuteElement.setAttribute("data-min", "0"), D.minuteElement.setAttribute("data-max", "59"), D.timeContainer.appendChild(t), D.timeContainer.appendChild(e), D.timeContainer.appendChild(n), D.config.time_24hr && D.timeContainer.classList.add("time24hr"), D.config.enableSeconds) {
                        D.timeContainer.classList.add("hasSeconds");
                        var a = re("flatpickr-second");
                        D.secondElement = a.childNodes[0], D.secondElement.value = $(D.latestSelectedDateObj ? D.latestSelectedDateObj.getSeconds() : D.config.defaultSeconds), D.secondElement.setAttribute("data-step", D.minuteElement.getAttribute("data-step")), D.secondElement.setAttribute("data-min", D.minuteElement.getAttribute("data-min")), D.secondElement.setAttribute("data-max", D.minuteElement.getAttribute("data-max")), D.timeContainer.appendChild(ie("span", "flatpickr-time-separator", ":")), D.timeContainer.appendChild(a)
                    }
                    return D.config.time_24hr || (D.amPM = ie("span", "flatpickr-am-pm", D.l10n.amPM[q(11 < (D.latestSelectedDateObj ? D.hourElement.value : D.config.defaultHour))]), D.amPM.title = D.l10n.toggleTitle, D.amPM.tabIndex = -1, D.timeContainer.appendChild(D.amPM)), D.timeContainer
                }()), ae(D.calendarContainer, "rangeMode", "range" === D.config.mode), ae(D.calendarContainer, "animate", !0 === D.config.animate), ae(D.calendarContainer, "multiMonth", 1 < D.config.showMonths), D.calendarContainer.appendChild(e);
                var i = void 0 !== D.config.appendTo && void 0 !== D.config.appendTo.nodeType;
                if ((D.config.inline || D.config.static) && (D.calendarContainer.classList.add(D.config.inline ? "inline" : "static"), D.config.inline && (!i && D.element.parentNode ? D.element.parentNode.insertBefore(D.calendarContainer, D._input.nextSibling) : void 0 !== D.config.appendTo && D.config.appendTo.appendChild(D.calendarContainer)), D.config.static)) {
                    var o = ie("div", "flatpickr-wrapper");
                    D.element.parentNode && D.element.parentNode.insertBefore(o, D.element), o.appendChild(D.element), D.altInput && o.appendChild(D.altInput), o.appendChild(D.calendarContainer)
                }
                D.config.static || D.config.inline || (void 0 !== D.config.appendTo ? D.config.appendTo : window.document.body).appendChild(D.calendarContainer)
            }(), function () {
                if (D.config.wrap && ["open", "close", "toggle", "clear"].forEach(function (t) {
                    Array.prototype.forEach.call(D.element.querySelectorAll("[data-" + t + "]"), function (e) {
                        return o(e, "click", D[t])
                    })
                }), D.isMobile) return function () {
                    var e = D.config.enableTime ? D.config.noCalendar ? "time" : "datetime-local" : "date";
                    D.mobileInput = ie("input", D.input.className + " flatpickr-mobile"), D.mobileInput.step = D.input.getAttribute("step") || "any", D.mobileInput.tabIndex = 1, D.mobileInput.type = e, D.mobileInput.disabled = D.input.disabled, D.mobileInput.required = D.input.required, D.mobileInput.placeholder = D.input.placeholder, D.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S", 0 < D.selectedDates.length && (D.mobileInput.defaultValue = D.mobileInput.value = D.formatDate(D.selectedDates[0], D.mobileFormatStr)), D.config.minDate && (D.mobileInput.min = D.formatDate(D.config.minDate, "Y-m-d")), D.config.maxDate && (D.mobileInput.max = D.formatDate(D.config.maxDate, "Y-m-d")), D.input.type = "hidden", void 0 !== D.altInput && (D.altInput.type = "hidden");
                    try {
                        D.input.parentNode && D.input.parentNode.insertBefore(D.mobileInput, D.input.nextSibling)
                    } catch (e) {
                    }
                    o(D.mobileInput, "change", function (e) {
                        D.setDate(e.target.value, !1, D.mobileFormatStr), W("onChange"), W("onClose")
                    })
                }();
                var e = z(O, 50);
                D._debouncedChange = z(p, le), D.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && o(D.daysContainer, "mouseover", function (e) {
                    "range" === D.config.mode && S(e.target)
                }), o(window.document.body, "keydown", I), D.config.static || o(D._input, "keydown", I), D.config.inline || D.config.static || o(window, "resize", e), void 0 !== window.ontouchstart && o(window.document, "touchstart", T), o(window.document, "mousedown", a(T)), o(window.document, "focus", T, {capture: !0}), !0 === D.config.clickOpens && (o(D._input, "focus", D.open), o(D._input, "mousedown", a(D.open))), void 0 !== D.daysContainer && (o(D.monthNav, "mousedown", a(U)), o(D.monthNav, ["keyup", "increment"], n), o(D.daysContainer, "mousedown", a(j))), void 0 !== D.timeContainer && void 0 !== D.minuteElement && void 0 !== D.hourElement && (o(D.timeContainer, ["input", "increment"], d), o(D.timeContainer, "mousedown", a(r)), o(D.timeContainer, ["input", "increment"], D._debouncedChange, {passive: !0}), o([D.hourElement, D.minuteElement], ["focus", "click"], function (e) {
                    return e.target.select()
                }), void 0 !== D.secondElement && o(D.secondElement, "focus", function () {
                    return D.secondElement && D.secondElement.select()
                }), void 0 !== D.amPM && o(D.amPM, "mousedown", a(function (e) {
                    d(e), p()
                })))
            }(), (D.selectedDates.length || D.config.noCalendar) && (D.config.enableTime && g(D.config.noCalendar ? D.latestSelectedDateObj || D.config.minDate : void 0), B(!1)), D.showTimeInput = 0 < D.selectedDates.length || D.config.noCalendar, void 0 !== D.daysContainer) {
                D.calendarContainer.style.visibility = "hidden", D.calendarContainer.style.display = "block";
                var e = (D.daysContainer.offsetWidth + 1) * D.config.showMonths;
                D.daysContainer.style.width = e + "px", D.calendarContainer.style.width = e + "px", void 0 !== D.weekWrapper && (D.calendarContainer.style.width = e + D.weekWrapper.offsetWidth + "px"), D.calendarContainer.style.visibility = "visible", D.calendarContainer.style.display = null
            }
            var t = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            !D.isMobile && t && P(), W("onReady")
        }(), D
    }

    function n(e, t) {
        for (var n = Array.prototype.slice.call(e), a = [], i = 0; i < n.length; i++) {
            var o = n[i];
            try {
                if (null !== o.getAttribute("data-fp-omit")) continue;
                void 0 !== o._flatpickr && (o._flatpickr.destroy(), o._flatpickr = void 0), o._flatpickr = r(o, t || {}), a.push(o._flatpickr)
            } catch (e) {
                console.error(e)
            }
        }
        return 1 === a.length ? a[0] : a
    }

    "undefined" != typeof HTMLElement && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (e) {
        return n(this, e)
    }, HTMLElement.prototype.flatpickr = function (e) {
        return n([this], e)
    });
    var ce = function (e, t) {
        return e instanceof NodeList ? n(e, t) : n("string" == typeof e ? window.document.querySelectorAll(e) : [e], t)
    };
    return ce.defaultConfig = b, ce.l10ns = {
        en: Object.assign({}, Q),
        default: Object.assign({}, Q)
    }, ce.localize = function (e) {
        ce.l10ns.default = Object.assign({}, ce.l10ns.default, e)
    }, ce.setDefaults = function (e) {
        ce.defaultConfig = Object.assign({}, ce.defaultConfig, e)
    }, ce.parseDate = X({}), ce.formatDate = t({}), ce.compareDates = ee, "undefined" != typeof jQuery && (jQuery.fn.flatpickr = function (e) {
        return n(this, e)
    }), Date.prototype.fp_incr = function (e) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e))
    }, ce
});

/* flatpickr v4.4.3, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (factory((global.ru = {})));
}(this, (function (exports) {
    'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
    };
    var Russian = {
        weekdays: {
            shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            longhand: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
        },
        months: {
            shorthand: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            longhand: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
        },
        firstDayOfWeek: 1,
        ordinal: function ordinal() {
            return "";
        },
        rangeSeparator: " — ",
        weekAbbreviation: "Нед.",
        scrollTitle: "Прокрутите для увеличения",
        toggleTitle: "Нажмите для переключения",
        amPM: ["ДП", "ПП"],
        yearAriaLabel: "Год"
    };
    fp.l10ns.ru = Russian;
    var ru = fp.l10ns;

    exports.Russian = Russian;
    exports.default = ru;

    Object.defineProperty(exports, '__esModule', {value: true});

})));