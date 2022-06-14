(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1127);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3986);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
react_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import type { AppProps } from "next/app";




const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "WORLD FUTURE"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                newestOnTop: false,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                theme: "dark",
                transition: react_toastify__WEBPACK_IMPORTED_MODULE_3__.Zoom
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__.PersistGate, {
                loading: null,
                persistor: _redux_store__WEBPACK_IMPORTED_MODULE_5__/* .persistor */ .D,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ persistor)
});

// UNUSED EXPORTS: store

;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: external "@reduxjs/toolkit/query/react"
const react_namespaceObject = require("@reduxjs/toolkit/query/react");
;// CONCATENATED MODULE: ./redux/authFetch.js

const PORT = process.env.PORT || "https://list-contacts-test.herokuapp.com";
// Define a service using a base URL and expected endpoints
const authApi = (0,react_namespaceObject.createApi)({
    reducerPath: "contactApi",
    baseQuery: (0,react_namespaceObject.fetchBaseQuery)({
        baseUrl: `${PORT}/auth/`,
        //тут я создаю базовый хедерс для всех запросов вытягивая токен из стейта на любой глубине.
        prepareHeaders: (headers, { getState  })=>{
            const token = getState().token;
            // If we have a token set in state, let's assume that we should be passing it.
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
            registrationUser: builder.mutation({
                query: (newUser)=>({
                        url: "/signup",
                        method: "POST",
                        body: newUser
                    })
                ,
                invalidatesTags: [
                    "contact",
                    "user"
                ]
            }),
            //запрос получение нового токена для работы пользователя с бэкендом
            loginUser: builder.mutation({
                query: (userData)=>({
                        url: `/login`,
                        method: "POST",
                        body: userData
                    })
                ,
                invalidatesTags: [
                    "contact",
                    "user"
                ]
            }),
            //запрос для проверки валидный ли токен храниться в памяти для последующих запросов на бэкенд
            //отправляет только токен возвращает имя пользователя и эмеил
            getIsActivUser: builder.query({
                query: ()=>({
                        url: `/current`,
                        method: "GET"
                    })
                ,
                providesTags: [
                    "user"
                ]
            })
        })
});
const { useGetIsActivUserQuery , useRegistrationUserMutation , useLoginUserMutation  } = authApi;

;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: ./redux/sliceAuth.js

const initialUser = "";
const initialToken = "";
const curentUser = (0,toolkit_namespaceObject.createSlice)({
    name: "auth",
    initialState: initialUser,
    reducers: {
        isAuth (_state, action) {
            return action.payload;
        }
    }
});
const curentToken = (0,toolkit_namespaceObject.createSlice)({
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

;// CONCATENATED MODULE: ./redux/store.js



 // defaults to localStorage for web

// ***********************local*************************
const tokenPersistConfig = {
    key: "root",
    storage: (storage_default()),
    whitelist: [
        "token"
    ]
};
// *****************reduser*************************************
const rootReduser = (0,toolkit_namespaceObject.combineReducers)({
    [authApi.reducerPath]: authApi.reducer,
    token: curentToken.reducer,
    user: curentUser.reducer
});
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(tokenPersistConfig, rootReduser);
// ****************store*********************************
const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    external_redux_persist_namespaceObject.FLUSH,
                    external_redux_persist_namespaceObject.REHYDRATE,
                    external_redux_persist_namespaceObject.PAUSE,
                    external_redux_persist_namespaceObject.PERSIST,
                    external_redux_persist_namespaceObject.PURGE,
                    external_redux_persist_namespaceObject.REGISTER
                ]
            }
        }).concat(authApi.middleware)
});
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store); // это параметры для обертки приложения в индексе


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1127:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3675));
module.exports = __webpack_exports__;

})();