//#region ../../node_modules/@lit/reactive-element/css-tag.js
var e = globalThis, t = e.ShadowRoot && (e.ShadyCSS === void 0 || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, n = Symbol(), r = /* @__PURE__ */ new WeakMap(), i = class {
	constructor(e, t, r) {
		if (this._$cssResult$ = !0, r !== n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, n = this.t;
		if (t && e === void 0) {
			let t = n !== void 0 && n.length === 1;
			t && (e = r.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), t && r.set(n, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, a = (e) => new i(typeof e == "string" ? e : e + "", void 0, n), o = (e, ...t) => new i(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, n), s = (n, r) => {
	if (t) n.adoptedStyleSheets = r.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let t of r) {
		let r = document.createElement("style"), i = e.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, n.appendChild(r);
	}
}, c = t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return a(t);
})(e) : e, { is: l, defineProperty: u, getOwnPropertyDescriptor: d, getOwnPropertyNames: ee, getOwnPropertySymbols: te, getPrototypeOf: ne } = Object, f = globalThis, p = f.trustedTypes, re = p ? p.emptyScript : "", ie = f.reactiveElementPolyfillSupport, m = (e, t) => e, h = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? re : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, g = (e, t) => !l(e, t), _ = {
	attribute: !0,
	type: String,
	converter: h,
	reflect: !1,
	useDefault: !1,
	hasChanged: g
};
Symbol.metadata ??= Symbol("metadata"), f.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var v = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = _) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && u(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = d(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? _;
	}
	static _$Ei() {
		if (this.hasOwnProperty(m("elementProperties"))) return;
		let e = ne(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(m("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(m("properties"))) {
			let e = this.properties, t = [...ee(e), ...te(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(Infinity).reverse());
			for (let e of n) t.unshift(c(e));
		} else e !== void 0 && t.push(c(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return s(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? h : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? h : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? g)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
v.elementStyles = [], v.shadowRootOptions = { mode: "open" }, v[m("elementProperties")] = /* @__PURE__ */ new Map(), v[m("finalized")] = /* @__PURE__ */ new Map(), ie?.({ ReactiveElement: v }), (f.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region ../../node_modules/lit-html/lit-html.js
var y = globalThis, b = (e) => e, x = y.trustedTypes, S = x ? x.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, C = "$lit$", w = `lit$${Math.random().toFixed(9).slice(2)}$`, ae = "?" + w, oe = `<${ae}>`, T = document, E = () => T.createComment(""), D = (e) => e === null || typeof e != "object" && typeof e != "function", O = Array.isArray, se = (e) => O(e) || typeof e?.[Symbol.iterator] == "function", k = "[ 	\n\f\r]", A = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, j = /-->/g, M = />/g, N = RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), P = /'/g, F = /"/g, I = /^(?:script|style|textarea|title)$/i, L = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), R = Symbol.for("lit-noChange"), z = Symbol.for("lit-nothing"), B = /* @__PURE__ */ new WeakMap(), V = T.createTreeWalker(T, 129);
function H(e, t) {
	if (!O(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return S === void 0 ? t : S.createHTML(t);
}
var ce = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = A;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === A ? c[1] === "!--" ? o = j : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = N) : (I.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = N) : o = M : o === N ? c[0] === ">" ? (o = i ?? A, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? N : c[3] === "\"" ? F : P) : o === F || o === P ? o = N : o === j || o === M ? o = A : (o = N, i = void 0);
		let d = o === N && e[t + 1].startsWith("/>") ? " " : "";
		a += o === A ? n + oe : l >= 0 ? (r.push(s), n.slice(0, l) + C + n.slice(l) + w + d) : n + w + (l === -2 ? t : d);
	}
	return [H(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, U = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = ce(t, n);
		if (this.el = e.createElement(l, r), V.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = V.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(C)) {
					let t = u[o++], n = i.getAttribute(e).split(w), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? ue : r[1] === "?" ? de : r[1] === "@" ? fe : K
					}), i.removeAttribute(e);
				} else e.startsWith(w) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (I.test(i.tagName)) {
					let e = i.textContent.split(w), t = e.length - 1;
					if (t > 0) {
						i.textContent = x ? x.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], E()), V.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], E());
					}
				}
			} else if (i.nodeType === 8) if (i.data === ae) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(w, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += w.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = T.createElement("template");
		return n.innerHTML = e, n;
	}
};
function W(e, t, n = e, r) {
	if (t === R) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = D(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = W(e, i._$AS(e, t.values), i, r)), t;
}
var le = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? T).importNode(t, !0);
		V.currentNode = r;
		let i = V.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new G(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new pe(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = V.nextNode(), a++);
		}
		return V.currentNode = T, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, G = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = z, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = W(this, e, t), D(e) ? e === z || e == null || e === "" ? (this._$AH !== z && this._$AR(), this._$AH = z) : e !== this._$AH && e !== R && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? se(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== z && D(this._$AH) ? this._$AA.nextSibling.data = e : this.T(T.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = U.createElement(H(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new le(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = B.get(e.strings);
		return t === void 0 && B.set(e.strings, t = new U(e)), t;
	}
	k(t) {
		O(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(E()), this.O(E()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = b(e).nextSibling;
			b(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, K = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = z, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = z;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = W(this, e, t, 0), a = !D(e) || e !== this._$AH && e !== R, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = W(this, r[n + o], t, o), s === R && (s = this._$AH[o]), a ||= !D(s) || s !== this._$AH[o], s === z ? e = z : e !== z && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === z ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, ue = class extends K {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === z ? void 0 : e;
	}
}, de = class extends K {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== z);
	}
}, fe = class extends K {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = W(this, e, t, 0) ?? z) === R) return;
		let n = this._$AH, r = e === z && n !== z || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== z && (n === z || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, pe = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		W(this, e);
	}
}, me = y.litHtmlPolyfillSupport;
me?.(U, G), (y.litHtmlVersions ??= []).push("3.3.3");
var he = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new G(t.insertBefore(E(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, q = globalThis, J = class extends v {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = he(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return R;
	}
};
J._$litElement$ = !0, J.finalized = !0, q.litElementHydrateSupport?.({ LitElement: J });
var ge = q.litElementPolyfillSupport;
ge?.({ LitElement: J }), (q.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region src/easy-schedule-card.ts
var Y = [
	{
		value: "mon",
		fallbackLabel: "Mo",
		date: /* @__PURE__ */ new Date("2024-01-01T12:00:00Z")
	},
	{
		value: "tue",
		fallbackLabel: "Tu",
		date: /* @__PURE__ */ new Date("2024-01-02T12:00:00Z")
	},
	{
		value: "wed",
		fallbackLabel: "We",
		date: /* @__PURE__ */ new Date("2024-01-03T12:00:00Z")
	},
	{
		value: "thu",
		fallbackLabel: "Th",
		date: /* @__PURE__ */ new Date("2024-01-04T12:00:00Z")
	},
	{
		value: "fri",
		fallbackLabel: "Fr",
		date: /* @__PURE__ */ new Date("2024-01-05T12:00:00Z")
	},
	{
		value: "sat",
		fallbackLabel: "Sa",
		date: /* @__PURE__ */ new Date("2024-01-06T12:00:00Z")
	},
	{
		value: "sun",
		fallbackLabel: "Su",
		date: /* @__PURE__ */ new Date("2024-01-07T12:00:00Z")
	}
], X = "easy_schedule_card", _e = {
	en: {
		addRule: "Add rule",
		cancel: "Cancel",
		createRule: "Create rule",
		deleteRule: "Delete rule",
		disabled: "Rule disabled",
		editRule: "Edit rule",
		enabled: "Rule enabled",
		noRules: "No rules",
		off: "Off",
		on: "On",
		refresh: "Refresh",
		saveRule: "Save rule",
		title: "Easy Schedule"
	},
	ru: {
		addRule: "Додати правило",
		cancel: "Скасувати",
		createRule: "Створити правило",
		deleteRule: "Видалити правило",
		disabled: "Правило вимкнено",
		editRule: "Редагувати правило",
		enabled: "Правило увімкнено",
		noRules: "Немає правил",
		off: "Вимк",
		on: "Увімк",
		refresh: "Оновити",
		saveRule: "Зберегти правило",
		title: "Простий розклад"
	},
	uk: {
		addRule: "Додати правило",
		cancel: "Скасувати",
		createRule: "Створити правило",
		deleteRule: "Видалити правило",
		disabled: "Правило вимкнено",
		editRule: "Редагувати правило",
		enabled: "Правило увімкнено",
		noRules: "Немає правил",
		off: "Вимк",
		on: "Увімк",
		refresh: "Оновити",
		saveRule: "Зберегти правило",
		title: "Простий розклад"
	}
};
function ve(e) {
	if (Array.isArray(e)) return e;
	if (e && typeof e == "object" && "schedule_id" in e) return [e];
	if (e && typeof e == "object" && "value" in e) {
		let t = e.value;
		if (Array.isArray(t)) return t;
	}
	return e && typeof e == "object" ? Object.values(e).filter((e) => !!(e && typeof e == "object" && "schedule_id" in e)) : [];
}
function ye(e, t) {
	let n = e.tags ?? [];
	return n.includes(X) && n.includes(`easy_schedule:${t}`);
}
function Z(e) {
	return e.includes("daily") ? new Set(Y.map((e) => e.value)) : new Set(e.filter((e) => e !== "daily"));
}
function Q(e) {
	return e.size === Y.length ? ["daily"] : Y.map((e) => e.value).filter((t) => e.has(t));
}
function be(e) {
	return e.split(".", 1)[0] ?? "";
}
function xe(e) {
	let t = (e?.locale?.language ?? e?.language ?? "en").toLowerCase();
	return t.startsWith("ru") ? "ru" : t.startsWith("uk") || t.startsWith("ua") ? "uk" : "en";
}
function Se(e, t) {
	if (xe(t) === "en") return e.fallbackLabel;
	try {
		return new Intl.DateTimeFormat("uk-UA", { weekday: "short" }).format(e.date).replace(".", "").slice(0, 2);
	} catch {
		return e.fallbackLabel;
	}
}
function $(e) {
	switch (e) {
		case "refresh": return L`<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 12a9 9 0 1 1-2.64-6.36" />
        <path d="M21 3v6h-6" />
      </svg>`;
		case "power": return L`<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2v10" />
        <path d="M18.36 6.64a9 9 0 1 1-12.72 0" />
      </svg>`;
		case "trash": return L`<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6h18" />
        <path d="M8 6V4h8v2" />
        <path d="M19 6l-1 14H6L5 6" />
        <path d="M10 11v5" />
        <path d="M14 11v5" />
      </svg>`;
		case "plus": return L`<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>`;
		case "edit": return L`<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>`;
		case "check": return L`<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" />
      </svg>`;
		case "x": return L`<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>`;
	}
}
var Ce = class extends J {
	static {
		this.properties = {
			hass: { attribute: !1 },
			config: { state: !0 },
			rulesBySchedule: { state: !0 },
			selectedScheduleId: { state: !0 },
			draftTime: { state: !0 },
			draftWeekdays: { state: !0 },
			draftValue: { state: !0 },
			editorMode: { state: !0 },
			editingRuleId: { state: !0 },
			loading: { state: !0 },
			error: { state: !0 }
		};
	}
	get hass() {
		return this._hass;
	}
	set hass(e) {
		let t = this._hass;
		this._hass = e, this.requestUpdate("hass", t), this.requestInitialRefresh();
	}
	constructor() {
		super(), this.initialRefreshRequested = !1, this.config = void 0, this.rulesBySchedule = {}, this.selectedScheduleId = "", this.draftTime = "06:00", this.draftWeekdays = new Set(Y.map((e) => e.value)), this.draftValue = !0, this.editorMode = "closed", this.editingRuleId = "", this.loading = !1, this.error = "";
	}
	setConfig(e) {
		if (!Array.isArray(e.schedules) || e.schedules.length === 0) throw Error("Easy Schedule Card requires at least one schedule");
		this.config = e, this.selectedScheduleId = e.schedules[0].id, this.draftValue = e.schedules[0].value_type === "boolean" ? !0 : e.schedules[0].min ?? 0, this.initialRefreshRequested = !1, this.requestInitialRefresh();
	}
	firstUpdated() {
		this.requestInitialRefresh();
	}
	updated(e) {
		(e.has("hass") || e.has("config")) && this.requestInitialRefresh();
	}
	t(e) {
		return _e[xe(this.hass)][e];
	}
	render() {
		if (!this.config) return z;
		let e = this.config.schedules, t = e.find((e) => e.id === this.selectedScheduleId) ?? e[0], n = this.rulesBySchedule[t.id] ?? [];
		return L`
      <ha-card>
        <div class="content">
          <header>
            <h2>${this.config.title ?? this.t("title")}</h2>
            <div class="header-actions">
              <button
                class="primary icon"
                title=${this.t("addRule")}
                ?disabled=${this.loading}
                @click=${() => this.openCreateEditor(t)}
              >
                ${$("plus")}
              </button>
              <button class="icon" title=${this.t("refresh")} ?disabled=${this.loading} @click=${this.refreshRules}>
                ${$("refresh")}
              </button>
            </div>
          </header>

          ${e.length > 1 ? L`
                <div class="tabs">
                  ${e.map((e) => L`
                      <button
                        class=${e.id === t.id ? "active" : ""}
                        @click=${() => this.selectSchedule(e)}
                      >
                        ${e.name}
                      </button>
                    `)}
                </div>
              ` : L`<h3>${t.name}</h3>`}

          ${this.error ? L`<div class="error">${this.error}</div>` : z}

          <div class="rules">
            ${n.length === 0 ? L`<div class="empty">${this.t("noRules")}</div>` : n.map((e) => this.renderRule(t, e))}
          </div>

          ${this.editorMode === "create" ? this.renderEditor(t) : z}
        </div>
      </ha-card>
    `;
	}
	renderRule(e, t) {
		return this.editorMode === "edit" && this.editingRuleId === t.scheduleId ? this.renderRuleEditor(e, t) : L`
      <div class="rule">
        <button
          class=${t.enabled ? "icon toggle on" : "icon toggle"}
          title=${t.enabled ? this.t("enabled") : this.t("disabled")}
          @click=${() => this.setRuleEnabled(t, !t.enabled)}
        >
          ${$("power")}
        </button>
        <div class="rule-main">
          <div class="rule-line">
            ${this.renderDayTokens(Z(t.weekdays))}
          </div>
          <div class="next">
            ${this.renderFormattedValue(e, t.value)}
            ${t.nextTrigger ? L`<span>${this.formatNextTrigger(t.nextTrigger)}</span>` : z}
          </div>
        </div>
        <button class="icon" title=${this.t("editRule")} @click=${() => this.openEditEditor(e, t)}>
          ${$("edit")}
        </button>
      </div>
    `;
	}
	renderRuleEditor(e, t) {
		return L`
      <form class="rule-edit" @submit=${(t) => this.submitEditor(t, e)}>
        <input
          type="time"
          .value=${this.draftTime}
          @input=${(e) => {
			this.draftTime = e.target.value;
		}}
        />
        ${this.renderDayButtons(this.draftWeekdays)}
        ${this.renderValueInput(e)}
        <div class="editor-actions">
          <button class="primary icon" title=${this.t("saveRule")} ?disabled=${this.loading}>
            ${$("check")}
          </button>
          <button class="icon" type="button" title=${this.t("cancel")} ?disabled=${this.loading} @click=${() => this.closeEditor()}>
            ${$("x")}
          </button>
          <button
            class="icon danger"
            type="button"
            title=${this.t("deleteRule")}
            ?disabled=${this.loading}
            @click=${() => this.deleteEditingRule()}
          >
            ${$("trash")}
          </button>
        </div>
      </form>
    `;
	}
	renderEditor(e) {
		let t = this.editorMode === "edit";
		return L`
      <form class="editor" @submit=${(t) => this.submitEditor(t, e)}>
        <input
          type="time"
          .value=${this.draftTime}
          @input=${(e) => {
			this.draftTime = e.target.value;
		}}
        />
        ${this.renderDayButtons(this.draftWeekdays)}
        ${this.renderValueInput(e)}
        <div class="editor-actions">
          <button class="primary icon" title=${t ? this.t("saveRule") : this.t("createRule")} ?disabled=${this.loading}>
            ${$(t ? "check" : "plus")}
          </button>
          <button class="icon" type="button" title=${this.t("cancel")} ?disabled=${this.loading} @click=${() => this.closeEditor()}>
            ${$("x")}
          </button>
          ${t ? L`
                <button
                  class="icon danger"
                  type="button"
                  title=${this.t("deleteRule")}
                  ?disabled=${this.loading}
                  @click=${() => this.deleteEditingRule()}
                >
                  ${$("trash")}
                </button>
              ` : z}
        </div>
      </form>
    `;
	}
	renderValueInput(e) {
		return e.value_type === "boolean" ? L`
        <select
          .value=${String(this.draftValue)}
          @change=${(e) => {
			this.draftValue = e.target.value === "true";
		}}
        >
          <option value="true">${this.t("on")}</option>
          <option value="false">${this.t("off")}</option>
        </select>
      ` : L`
      <input
        type="number"
        .value=${String(this.draftValue)}
        min=${e.min ?? z}
        max=${e.max ?? z}
        step=${e.step ?? 1}
        @input=${(e) => {
			this.draftValue = Number(e.target.value);
		}}
      />
    `;
	}
	selectSchedule(e) {
		this.selectedScheduleId = e.id, this.draftValue = e.value_type === "boolean" ? !0 : e.min ?? 0, this.closeEditor();
	}
	openCreateEditor(e) {
		this.editorMode = "create", this.editingRuleId = "", this.draftTime = "06:00", this.draftWeekdays = new Set(Y.map((e) => e.value)), this.draftValue = e.value_type === "boolean" ? !0 : e.min ?? 0;
	}
	openEditEditor(e, t) {
		this.editorMode = "edit", this.editingRuleId = t.scheduleId, this.draftTime = t.time, this.draftWeekdays = Z(t.weekdays), this.draftValue = t.value;
	}
	closeEditor() {
		this.editorMode = "closed", this.editingRuleId = "";
	}
	renderDayTokens(e) {
		return L`
      <div class="days" aria-label="Weekdays">
        ${Y.map((t) => L`
            <span class=${e.has(t.value) ? "day-token active" : "day-token"}>
              ${Se(t, this.hass)}
            </span>
          `)}
      </div>
    `;
	}
	renderDayButtons(e) {
		return L`
      <div class="day-buttons" aria-label="Select weekdays">
        ${Y.map((t) => L`
            <button
              class=${e.has(t.value) ? "day-button active" : "day-button"}
              type="button"
              aria-pressed=${e.has(t.value)}
              @click=${() => this.toggleWeekday(t.value)}
            >
              ${Se(t, this.hass)}
            </button>
          `)}
      </div>
    `;
	}
	toggleWeekday(e) {
		let t = new Set(this.draftWeekdays);
		t.has(e) ? t.delete(e) : t.add(e), t.size === 0 && t.add(e), this.draftWeekdays = t;
	}
	requestInitialRefresh() {
		this.initialRefreshRequested || !this.hass || !this.config || (this.initialRefreshRequested = !0, this.refreshRules());
	}
	async refreshRules() {
		if (!(!this.hass || !this.config)) {
			this.loading = !0, this.error = "";
			try {
				let e = ve(await this.hass.callApi("GET", "scheduler/list")), t = {};
				for (let n of this.config.schedules) t[n.id] = e.filter((e) => ye(e, n.id)).map((e) => this.toScheduleRule(n, e)).filter((e) => !!e).sort((e, t) => e.time.localeCompare(t.time));
				this.rulesBySchedule = t;
			} catch (e) {
				this.error = e instanceof Error ? e.message : String(e);
			} finally {
				this.loading = !1;
			}
		}
	}
	toScheduleRule(e, t) {
		let n = t.timeslots?.[0], r = n?.actions?.[0];
		if (!n || !r) return;
		let i = e.value_type === "boolean" ? r.service.endsWith(".turn_on") : Number(r.service_data?.value);
		return {
			id: t.schedule_id,
			scheduleId: t.schedule_id,
			entityId: t.entity_id,
			enabled: t.enabled ?? !0,
			time: n.start,
			weekdays: t.weekdays?.length ? t.weekdays : ["daily"],
			value: i,
			nextTrigger: t.timestamps?.[0]
		};
	}
	async submitEditor(e, t) {
		if (e.preventDefault(), this.editorMode === "edit") {
			await this.editRule(t);
			return;
		}
		await this.addRule(t);
	}
	async addRule(e) {
		if (this.hass) {
			this.loading = !0, this.error = "";
			try {
				await this.hass.callApi("POST", "scheduler/add", {
					name: `${e.name} ${this.draftTime}`,
					weekdays: Q(this.draftWeekdays),
					repeat_type: "repeat",
					tags: [X, `easy_schedule:${e.id}`],
					timeslots: [{
						start: this.draftTime,
						actions: [this.actionForValue(e, this.draftValue)]
					}]
				}), this.closeEditor(), await this.refreshRules();
			} catch (e) {
				this.error = e instanceof Error ? e.message : String(e);
			} finally {
				this.loading = !1;
			}
		}
	}
	async editRule(e) {
		if (!(!this.hass || !this.editingRuleId)) {
			this.loading = !0, this.error = "";
			try {
				await this.hass.callApi("POST", "scheduler/edit", {
					schedule_id: this.editingRuleId,
					name: `${e.name} ${this.draftTime}`,
					weekdays: Q(this.draftWeekdays),
					repeat_type: "repeat",
					tags: [X, `easy_schedule:${e.id}`],
					timeslots: [{
						start: this.draftTime,
						actions: [this.actionForValue(e, this.draftValue)]
					}]
				}), this.closeEditor(), await this.refreshRules();
			} catch (e) {
				this.error = e instanceof Error ? e.message : String(e);
			} finally {
				this.loading = !1;
			}
		}
	}
	actionForValue(e, t) {
		let n = be(e.target_entity_id);
		return e.value_type === "boolean" ? {
			service: `${n}.${t ? "turn_on" : "turn_off"}`,
			entity_id: e.target_entity_id,
			service_data: {}
		} : {
			service: `${n}.set_value`,
			entity_id: e.target_entity_id,
			service_data: { value: t }
		};
	}
	async setRuleEnabled(e, t) {
		if (!(!this.hass || !e.entityId)) {
			this.loading = !0, this.error = "";
			try {
				await this.hass.callService("switch", t ? "turn_on" : "turn_off", { entity_id: e.entityId }), await this.refreshRules();
			} catch (e) {
				this.error = e instanceof Error ? e.message : String(e);
			} finally {
				this.loading = !1;
			}
		}
	}
	async deleteRule(e) {
		if (this.hass) {
			this.loading = !0, this.error = "";
			try {
				await this.hass.callApi("POST", "scheduler/remove", { schedule_id: e.scheduleId }), await this.refreshRules();
			} catch (e) {
				this.error = e instanceof Error ? e.message : String(e);
			} finally {
				this.loading = !1;
			}
		}
	}
	async deleteEditingRule() {
		let e = Object.values(this.rulesBySchedule).flat().find((e) => e.scheduleId === this.editingRuleId);
		e && (await this.deleteRule(e), this.closeEditor());
	}
	formatValue(e, t) {
		return e.value_type === "boolean" ? t ? this.t("on") : this.t("off") : `${t}${e.unit ? ` ${e.unit}` : ""}`;
	}
	renderFormattedValue(e, t) {
		return e.value_type === "boolean" ? L`
        <span class="action-value">
          <span class=${t ? "value-strong value-on" : "value-strong value-off"}>
            ${t ? this.t("on") : this.t("off")}
          </span>
        </span>
      ` : L`<span class="value-strong value-off">${this.formatValue(e, t)}</span>`;
	}
	formatNextTrigger(e) {
		let t = new Date(e);
		return Number.isNaN(t.getTime()) ? e : t.toLocaleString(void 0, {
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit"
		});
	}
	static {
		this.styles = o`
    :host {
      display: block;
    }

    .content {
      padding: 16px;
    }

    header {
      align-items: center;
      display: flex;
      gap: 8px;
      justify-content: space-between;
      margin-bottom: 12px;
    }

    .header-actions,
    .editor-actions {
      align-items: center;
      display: flex;
      gap: 6px;
    }

    h2,
    h3 {
      font-size: 18px;
      font-weight: 600;
      line-height: 1.25;
      margin: 0;
    }

    h3 {
      margin-bottom: 12px;
    }

    button,
    input,
    select {
      border: 1px solid var(--divider-color, #d8dce2);
      border-radius: 6px;
      box-sizing: border-box;
      font: inherit;
      min-height: 36px;
    }

    button {
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #1f2933);
      cursor: pointer;
      padding: 0 12px;
    }

    button:disabled {
      cursor: default;
      opacity: 0.6;
    }

    input,
    select {
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #1f2933);
      padding: 0 10px;
    }

    .icon {
      align-items: center;
      display: inline-flex;
      justify-content: center;
      min-height: 36px;
      min-width: 36px;
      padding: 0;
    }

    .icon svg {
      fill: none;
      height: 18px;
      pointer-events: none;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 2;
      width: 18px;
    }

    .primary {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-weight: 600;
    }

    .danger {
      color: var(--error-color, #db4437);
    }

    .tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 12px;
    }

    .tabs button.active {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
    }

    .error {
      background: color-mix(in srgb, var(--error-color, #db4437) 12%, transparent);
      border-radius: 6px;
      color: var(--error-color, #db4437);
      margin-bottom: 12px;
      padding: 10px;
    }

    .rules {
      display: grid;
      gap: 8px;
      margin-bottom: 14px;
    }

    .empty {
      color: var(--secondary-text-color, #637381);
      padding: 6px 0;
    }

    .rule {
      align-items: center;
      border: 1px solid var(--divider-color, #d8dce2);
      border-radius: 8px;
      display: grid;
      gap: 10px;
      grid-template-columns: 36px minmax(0, 1fr) 36px;
      min-height: 54px;
      padding: 8px;
    }

    .toggle {
      color: var(--secondary-text-color, #637381);
    }

    .toggle.on {
      background: color-mix(in srgb, var(--success-color, #0f9d58) 16%, transparent);
      border-color: color-mix(in srgb, var(--success-color, #0f9d58) 70%, transparent);
      color: var(--success-color, #0f9d58);
    }

    .rule-main {
      min-width: 0;
    }

    .rule-line {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .next {
      align-items: center;
      color: var(--secondary-text-color, #637381);
      display: flex;
      flex-wrap: wrap;
      font-size: 12px;
      gap: 8px;
      margin-top: 3px;
    }

    .action-value {
      align-items: baseline;
      display: inline-flex;
      gap: 4px;
    }

    .value-strong {
      font-weight: 700;
    }

    .value-on {
      color: var(--success-color, #0f9d58);
    }

    .value-off {
      color: var(--primary-text-color, #1f2933);
    }

    .editor {
      display: grid;
      gap: 10px;
      grid-template-columns: 110px 1fr minmax(86px, auto) auto;
    }

    .rule-edit {
      align-items: center;
      border: 1px solid var(--primary-color, #03a9f4);
      border-radius: 8px;
      display: grid;
      gap: 10px;
      grid-template-columns: 110px 1fr minmax(86px, auto) auto;
      padding: 8px;
    }

    .days,
    .day-buttons {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      min-width: 0;
    }

    .day-token,
    .day-button {
      border: 1px solid var(--divider-color, #d8dce2);
      border-radius: 5px;
      box-sizing: border-box;
      display: inline-grid;
      font-size: 12px;
      font-weight: 500;
      height: 26px;
      line-height: 1;
      min-height: 26px;
      min-width: 0;
      padding: 0;
      place-items: center;
      width: 28px;
    }

    .day-token {
      color: var(--secondary-text-color, #637381);
    }

    .day-token.active {
      background: color-mix(in srgb, var(--primary-color, #03a9f4) 14%, transparent);
      border-color: color-mix(in srgb, var(--primary-color, #03a9f4) 60%, transparent);
      color: var(--primary-text-color, #1f2933);
    }

    .day-button {
      background: var(--card-background-color, #fff);
      color: var(--secondary-text-color, #637381);
    }

    .day-button.active {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--text-primary-color, #fff) 70%, transparent);
      color: var(--text-primary-color, #fff);
    }

    @media (max-width: 640px) {
      .editor {
        grid-template-columns: 1fr;
      }

      .rule-edit {
        grid-template-columns: 1fr;
      }
    }
  `;
	}
};
customElements.define("easy-schedule-card", Ce), window.customCards = window.customCards ?? [], window.customCards.push({
	type: "easy-schedule-card",
	name: "Easy Schedule Card",
	description: "Simple time-based number and boolean schedules"
});
//#endregion
export { Ce as EasyScheduleCard };
