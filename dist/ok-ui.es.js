import { jsx as e, jsxs as t } from "react/jsx-runtime";
var n = { button: "_button_e28os_1" }, r = ({ children: t, className: r, ...i }) => /* @__PURE__ */ e("button", {
	className: `${n.button} ${r ?? ""}`,
	...i,
	children: t
});
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function i(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var a = e.length;
		for (t = 0; t < a; t++) e[t] && (n = i(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function a() {
	for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = i(e)) && (r && (r += " "), r += t);
	return r;
}
var o = {
	overlay: "_overlay_zmqu6_1",
	modal: "_modal_zmqu6_16",
	header: "_header_zmqu6_29",
	title: "_title_zmqu6_38",
	subtitle: "_subtitle_zmqu6_43",
	body: "_body_zmqu6_49",
	footer: "_footer_zmqu6_56",
	actionWrapper: "_actionWrapper_zmqu6_65",
	left: "_left_zmqu6_70",
	center: "_center_zmqu6_74",
	right: "_right_zmqu6_78",
	xs: "_xs_zmqu6_83",
	sm: "_sm_zmqu6_84",
	md: "_md_zmqu6_85",
	lg: "_lg_zmqu6_86",
	xl: "_xl_zmqu6_87",
	size2xl: "_size2xl_zmqu6_88",
	size3xl: "_size3xl_zmqu6_89",
	size4xl: "_size4xl_zmqu6_90",
	full: "_full_zmqu6_91"
}, s = {
	xs: o.xs,
	sm: o.sm,
	md: o.md,
	lg: o.lg,
	xl: o.xl,
	"2xl": o.size2xl,
	"3xl": o.size3xl,
	"4xl": o.size4xl,
	full: o.full
}, c = {
	left: o.left,
	center: o.center,
	right: o.right
}, l = ({ open: n, onClose: r, title: i, subtitle: l, children: u, size: d = "md", closable: f = !0, primaryAction: p, secondaryAction: m, align: h = {}, className: g, classNames: _, styleOverrides: v, ...y }) => n ? /* @__PURE__ */ e("div", {
	className: a(o.overlay, _?.overlay),
	style: v?.overlay,
	onClick: r,
	children: /* @__PURE__ */ t("div", {
		...y,
		className: a(o.modal, s[d], g, _?.modal),
		style: v?.modal,
		onClick: (e) => e.stopPropagation(),
		children: [
			(i || l || f) && /* @__PURE__ */ t("header", {
				className: a(o.header, _?.header),
				style: v?.header,
				children: [i && /* @__PURE__ */ e("div", {
					className: a(o.title, c[h.title ?? "left"], _?.title),
					children: i
				}), l && /* @__PURE__ */ e("div", {
					className: a(o.subtitle, c[h.subtitle ?? "left"], _?.subtitle),
					children: l
				})]
			}),
			/* @__PURE__ */ e("div", {
				className: a(o.body, _?.body),
				children: u
			}),
			(p || m) && /* @__PURE__ */ t("footer", {
				className: a(o.footer, _?.footer),
				children: [/* @__PURE__ */ e("div", {
					className: a(o.actionWrapper, c[h.secondaryAction ?? "left"], _?.secondaryActionWrapper),
					children: m
				}), /* @__PURE__ */ e("div", {
					className: a(o.actionWrapper, c[h.primaryAction ?? "right"], _?.primaryActionWrapper),
					children: p
				})]
			})
		]
	})
}) : null, u = {
	root: "_root_d6s62_1",
	none: "_none_d6s62_12",
	sm: "_sm_d6s62_16",
	md: "_md_d6s62_20",
	lg: "_lg_d6s62_24",
	xl: "_xl_d6s62_28",
	shadowNone: "_shadowNone_d6s62_34",
	shadowSm: "_shadowSm_d6s62_38",
	shadowMd: "_shadowMd_d6s62_42",
	shadowLg: "_shadowLg_d6s62_46",
	header: "_header_d6s62_52",
	title: "_title_d6s62_58",
	subtitle: "_subtitle_d6s62_64",
	left: "_left_d6s62_74",
	center: "_center_d6s62_78",
	right: "_right_d6s62_82",
	body: "_body_d6s62_88",
	footer: "_footer_d6s62_94"
}, d = {
	none: u.none,
	sm: u.sm,
	md: u.md,
	lg: u.lg,
	xl: u.xl
}, f = {
	none: u.shadowNone,
	sm: u.shadowSm,
	md: u.shadowMd,
	lg: u.shadowLg
}, p = {
	left: u.left,
	center: u.center,
	right: u.right
}, m = ({ title: n, subtitle: r, footer: i, children: o, radius: s = "lg", shadow: c = "md", align: l = {}, className: m, classNames: h, styles: g, ..._ }) => /* @__PURE__ */ t("div", {
	..._,
	className: a(u.root, d[s], f[c], m, h?.root),
	style: g?.root,
	children: [
		(n || r) && /* @__PURE__ */ t("header", {
			className: a(u.header, h?.header),
			style: g?.header,
			children: [n && /* @__PURE__ */ e("div", {
				className: a(u.title, p[l.title ?? "left"], h?.title),
				children: n
			}), r && /* @__PURE__ */ e("div", {
				className: a(u.subtitle, p[l.subtitle ?? "left"], h?.subtitle),
				children: r
			})]
		}),
		/* @__PURE__ */ e("div", {
			className: a(u.body, h?.body),
			style: g?.body,
			children: o
		}),
		i && /* @__PURE__ */ e("footer", {
			className: a(u.footer, h?.footer),
			style: g?.footer,
			children: i
		})
	]
});
//#endregion
export { r as Button, m as Card, l as Modal };
