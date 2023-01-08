"use strict";
exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 9909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OQ": () => (/* binding */ useLoginUserMutation),
/* harmony export */   "Ql": () => (/* binding */ useRegistrationUserMutation),
/* harmony export */   "iJ": () => (/* binding */ authApi),
/* harmony export */   "lm": () => (/* binding */ useGetIsActivUserQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const PORT = process.env.PORT || "https://api-world-future.onrender.com";
// Define a service using a base URL and expected endpoints
const authApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "authApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: `${PORT}/auth/`,
        prepareHeaders: (headers, { getState  })=>{
            const token = getState().token;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder)=>({
            tagTypes: [
                "curentUser"
            ],
            getIsActivUser: builder.query({
                query: ()=>({
                        url: `/current`,
                        method: "GET"
                    })
            }),
            registrationUser: builder.mutation({
                query: (newUser)=>({
                        url: "/signup",
                        method: "POST",
                        body: newUser
                    })
            }),
            loginUser: builder.mutation({
                query: (userData)=>({
                        url: `/login`,
                        method: "POST",
                        body: userData
                    })
            })
        })
});
const { useGetIsActivUserQuery , useRegistrationUserMutation , useLoginUserMutation  } = authApi;


/***/ }),

/***/ 3597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$D": () => (/* binding */ isAuth),
/* harmony export */   "$r": () => (/* binding */ curentUser),
/* harmony export */   "D2": () => (/* binding */ curentToken),
/* harmony export */   "sV": () => (/* binding */ newToken)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialUser = "";
const initialToken = "";
const curentUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState: initialUser,
    reducers: {
        isAuth (_state, action) {
            return action.payload;
        }
    }
});
const curentToken = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "token",
    initialState: initialToken,
    reducers: {
        newToken (_state, action) {
            return action.payload;
        }
    }
});
const { newToken  } = curentToken.actions;
const { isAuth  } = curentUser.actions;


/***/ })

};
;