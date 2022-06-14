exports.id = 882;
exports.ids = [882];
exports.modules = {

/***/ 5395:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "auth_main__OmsbE",
	"list": "auth_list__wD5Uu",
	"title": "auth_title__Knl3y",
	"home": "auth_home__Z6tAy",
	"form": "auth_form__ExkWI",
	"textInput": "auth_textInput__swnDP",
	"saubmitButton": "auth_saubmitButton__3XTZk",
	"question": "auth_question__l1zP7",
	"linkLogin": "auth_linkLogin__c1lcI",
	"label": "auth_label__ot9qn"
};


/***/ }),

/***/ 5151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ validationLoginSchema)
/* harmony export */ });
/* unused harmony export validationRegisterSchema */
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const validationRegisterSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object({
    email: yup__WEBPACK_IMPORTED_MODULE_0__.string("Enter your email").email("Enter a valid email").required("Email is required"),
    password: yup__WEBPACK_IMPORTED_MODULE_0__.string("Enter your password").min(8, "Password should be of minimum 8 characters length").required("Password is required")
});
const validationLoginSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object({
    email: yup__WEBPACK_IMPORTED_MODULE_0__.string("Enter your email").email("Enter a valid email").required("Email is required"),
    password: yup__WEBPACK_IMPORTED_MODULE_0__.string("Enter your password").min(8, "Password should be of minimum 8 characters length").required("Password is required")
});


/***/ })

};
;