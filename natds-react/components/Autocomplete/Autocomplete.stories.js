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
exports.Disabled = exports.ReadOnly = exports.Required = exports.HasError = exports.HasSuccess = exports.WithHelperText = exports.WithPlaceholder = exports.Playground = void 0;
var react_1 = __importStar(require("react"));
var react_jss_1 = require("react-jss");
var _1 = require(".");
var componentStatus = "\n- - -\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 Standard\n\nWith the following attribute statuses:\n\n  - **Attributes:**\n    - \u2705 Label\n    - \u2705 Name\n    - \u2705 Placeholder\n    - \u2705 Options\n    - \u2705 Size\n    - \u2705 HelperText\n    - \u2705 Feedback\n    - \u2705 Required\n    - \u2705 Disabled\n    - \u2705 Readonly\n    - \u2705 Position\n    - \u2705 handleSelect\n    - \u2705 NotFound\n    - \u2705 Placeholder\n\n- - -\n";
var options = [{
        value: '1',
        label: 'Kaiak Masculino'
    },
    {
        value: '2',
        label: 'Kaiak Aventura'
    },
    {
        value: '3',
        label: 'Natura Homem'
    },
    {
        value: '4',
        label: 'Humor a Dois'
    },
    {
        value: '5',
        label: 'Una Artisan Deo Parfum'
    },
    {
        value: '6',
        label: 'Essencial Deo Parfum'
    }
];
exports.default = {
    title: 'Components/Autocomplete',
    component: _1.Autocomplete,
    parameters: {
        componentSubtitle: '',
        docs: { description: { component: componentStatus } }
    },
    argTypes: {
        feedback: {
            options: ['success', 'error', undefined],
            controls: {
                type: 'radio'
            }
        }
    }
};
var Playground = function (args) {
    var theme = (0, react_jss_1.useTheme)();
    var _a = (0, react_1.useState)(options[0].label), value = _a[0], setValue = _a[1];
    var _b = (0, react_1.useState)(options), filterOptions = _b[0], setFilterOptions = _b[1];
    var handleSelect = function (values) {
        setValue(values.label);
        // handleChange(value)
    };
    var handleChange = function (values) {
        setValue(values);
        var newFilter = options.filter(function (opt) { return opt.label.toLowerCase().includes(values.toLowerCase()); });
        if (newFilter.length > 0) {
            setFilterOptions(newFilter);
        }
        else {
            setFilterOptions([{ value: 'false', label: 'false' }]);
        }
    };
    return (react_1.default.createElement("div", { style: {
            height: '500px',
            // border: '1px solid yellow',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: theme.color.highEmphasis
        } },
        react_1.default.createElement(_1.Autocomplete, __assign({}, args, { onChange: function (e) { return handleChange(e.target.value); }, options: filterOptions, value: value, handleSelect: handleSelect }))));
};
exports.Playground = Playground;
exports.Playground.args = {
    placeholder: ' Placeholder ',
    label: 'Label',
    notFound: 'Item não encontrado',
    helperText: '',
    feedback: undefined,
    required: false,
    readonly: false,
    position: 'top'
};
var WithPlaceholder = function (args) { return react_1.default.createElement(_1.Autocomplete, __assign({}, args)); };
exports.WithPlaceholder = WithPlaceholder;
exports.WithPlaceholder.args = { placeholder: 'Placeholder', label: 'Label' };
var WithHelperText = function (args) { return react_1.default.createElement(_1.Autocomplete, __assign({}, args, { placeholder: "Placeholder", label: "Label", helperText: "Helper Text" })); };
exports.WithHelperText = WithHelperText;
var HasSuccess = function (args) { return react_1.default.createElement(_1.Autocomplete, __assign({}, args, { placeholder: "Placeholder", feedback: "success", label: "Label", helperText: "Helper Text" })); };
exports.HasSuccess = HasSuccess;
var HasError = function (args) { return react_1.default.createElement(_1.Autocomplete, __assign({}, args, { placeholder: "Placeholder", label: "Label", helperText: "Helper Text" })); };
exports.HasError = HasError;
exports.HasError.args = { feedback: 'error' };
var Required = function (args) { return react_1.default.createElement(_1.Autocomplete, __assign({}, args, { placeholder: "Placeholder", label: "Label" })); };
exports.Required = Required;
exports.Required.args = { required: true };
var ReadOnly = function (args) { return react_1.default.createElement(_1.Autocomplete, __assign({}, args, { placeholder: "Placeholder", label: "Label" })); };
exports.ReadOnly = ReadOnly;
exports.ReadOnly.args = { readonly: true };
var Disabled = function (args) { return react_1.default.createElement(_1.Autocomplete, __assign({}, args, { placeholder: "Placeholder", label: "Label" })); };
exports.Disabled = Disabled;
exports.Disabled.args = { disabled: true };
//# sourceMappingURL=Autocomplete.stories.js.map