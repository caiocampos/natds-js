"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playground = void 0;
/* eslint-disable react/no-array-index-key */
var react_1 = __importStar(require("react"));
var react_jss_1 = require("react-jss");
var _1 = require(".");
var IconButton_1 = require("../IconButton");
var Button_1 = require("../Button");
var Icon_1 = require("../Icon");
var Avatar_1 = require("../Avatar");
var Divider_1 = require("../Divider");
var ListItem_1 = require("../ListItem");
var Badge_1 = require("../Badge");
var componentStatus = "\n---\n\n**NOTE FOR UX**: This component is available in the following variants:\n\n  - \u274C `modal`\n  - \u2705 `standard`\n\nWith the following attribute status:\n\n  - **Position**\n      - \u2705 `left`\n      - \u274C `right`\n      - \u274C `bottom`\n      - \u274C `top`\n  - **Size**\n      - \u2705 `small`\n      - \u2705 `medium`\n      - \u2705 `large`\n\n---\n";
exports.default = {
    title: 'Components/Drawer',
    component: _1.Drawer,
    parameters: {
        componentSubtitle: 'A Drawer is a thin line that groups content in lists and layouts',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) {
    var _a = (0, react_1.useState)(true), showDrawer = _a[0], setShowDrawer = _a[1];
    var _b = styles(), footer = _b.footer, header = _b.header, headerButton = _b.headerButton, headerTitle = _b.headerTitle, main = _b.main, sectionItem = _b.sectionItem;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Button_1.Button, { onClick: function () { return setShowDrawer(!showDrawer); } }, "Open Drawer"),
        react_1.default.createElement(_1.Drawer, __assign({}, args, { open: showDrawer }),
            react_1.default.createElement("div", { className: header },
                react_1.default.createElement(Avatar_1.Avatar, { type: "image", src: "https://pbs.twimg.com/profile_images/1493260750386835462/Z13XvXbo_400x400.jpg", alt: "avatar" }),
                react_1.default.createElement("h6", { className: headerTitle }, "Hello, Design System"),
                react_1.default.createElement("div", { className: headerButton },
                    react_1.default.createElement(IconButton_1.IconButton, { onClick: function () { return setShowDrawer(!showDrawer); }, ariaLabel: "close drawer", IconComponent: react_1.default.createElement(Icon_1.Icon, { name: "outlined-navigation-close" }) }))),
            react_1.default.createElement(Divider_1.Divider, null),
            react_1.default.createElement("div", { className: main },
                react_1.default.createElement("ul", { style: { padding: 0, margin: 0, width: '100%' } }, items.body.map(function (item, id) { return (react_1.default.createElement(ListItem_1.ListItem, { key: id, interaction: "action" },
                    react_1.default.createElement("div", { style: { display: 'flex', gap: 16, alignItems: 'center' } },
                        react_1.default.createElement(Icon_1.Icon, { name: item.icon }),
                        react_1.default.createElement("span", { className: sectionItem },
                            item.name,
                            item.new && react_1.default.createElement(Badge_1.Badge, { variant: "pulse" }))))); }))),
            react_1.default.createElement("div", { className: footer },
                react_1.default.createElement(Divider_1.Divider, null),
                react_1.default.createElement("ul", { style: { padding: 0, margin: 0, overflow: 'auto' } }, items.footer.map(function (item, id) { return (react_1.default.createElement(ListItem_1.ListItem, { key: id, interaction: "action" },
                    react_1.default.createElement("div", { style: { display: 'flex', gap: 16, alignItems: 'center' } },
                        react_1.default.createElement(Icon_1.Icon, { name: item.icon }),
                        react_1.default.createElement("span", { className: sectionItem },
                            item.name,
                            item.new && react_1.default.createElement(Badge_1.Badge, { variant: "pulse" }))))); }))))));
};
exports.Playground = Playground;
var items = {
    body: [
        {
            name: 'Favorites',
            icon: 'outlined-action-love',
            new: false
        },
        {
            name: 'Invite & Earn',
            icon: 'outlined-social-groupofpeople',
            new: false
        },
        {
            name: 'Coupons',
            icon: 'outlined-finance-discount',
            new: true
        },
        {
            name: 'Orders',
            icon: 'outlined-action-request',
            new: false
        },
        {
            name: 'Gifts',
            icon: 'outlined-content-gift',
            new: false
        },
        {
            name: 'Perfumery',
            icon: 'outlined-product-perfumery',
            new: false
        },
        {
            name: 'Body',
            icon: 'outlined-product-dailycare',
            new: false
        },
        {
            name: 'Make Up',
            icon: 'outlined-product-makeup',
            new: false
        },
        {
            name: 'Sales',
            icon: 'outlined-product-promotionproduct',
            new: false
        }
    ],
    footer: [
        {
            name: 'Sign Out',
            icon: 'outlined-navigation-exit',
            new: false
        },
        {
            name: 'Help',
            icon: 'outlined-action-help',
            new: false
        },
        {
            name: 'Privacy Policy',
            icon: 'outlined-social-person',
            new: false
        }
    ]
};
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    sectionItem: {
        fontFamily: [
            theme.navigationDrawer.section.item.primary.fontFamily,
            theme.navigationDrawer.section.item.fallback.fontFamily
        ],
        fontWeight: [
            theme.navigationDrawer.section.item.primary.fontWeight,
            theme.navigationDrawer.section.item.fallback.fontWeight
        ],
        fontSize: theme.navigationDrawer.section.item.fontSize,
        letterSpacing: theme.navigationDrawer.section.item.letterSpacing,
        lineHeight: theme.navigationDrawer.section.item.lineHeight,
        display: 'flex',
        gap: theme.spacing.micro
    },
    footer: {},
    header: {
        padding: theme.spacing.small
    },
    headerButton: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 8,
        position: 'absolute',
        top: 0,
        right: 0
    },
    headerTitle: {
        fontFamily: [
            theme.navigationDrawer.header.title.primary.fontFamily,
            theme.navigationDrawer.header.title.fallback.fontFamily
        ],
        fontWeight: theme.navigationDrawer.header.title.primary.fontWeight,
        fontSize: theme.navigationDrawer.header.title.fontSize,
        letterSpacing: theme.navigationDrawer.header.title.letterSpacing,
        lineHeight: theme.navigationDrawer.header.title.lineHeight,
        margin: [theme.spacing.small, 0, theme.spacing.micro]
    },
    main: {
        flex: '1 1 auto',
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
        overflowY: 'auto'
    }
}); });
//# sourceMappingURL=Drawer.stories.js.map