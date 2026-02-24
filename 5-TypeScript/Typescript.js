// ======================================================
// TypeScript
// --> TypeScript is a syntactic superset of JavaScript
// which adds static typing to JavaScript.
// ======================================================
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// CMD - npm install typescript --save-dev
// Run - npx tsc <fileName>
// ------------------------------------------------------
// ======================================================
// Basic Types
// ======================================================
var age = 25;
var username = "Shikhar";
var isActive = true;
var hobbies = ["coding", "reading"];
// ======================================================
// Explicit Typing vs Type Inference
// ======================================================
// 1️⃣ Explicit Typing
var score = 90;
// 2️⃣ Type Inference (TypeScript automatically detects type)
var city = "Mumbai"; // inferred as string
// ======================================================
// Type: any
// --> Skips type checking (NOT recommended in production)
// ======================================================
var data = 10;
data = "Now I'm a string";
data = true;
// ======================================================
// Type: unknown
// --> Safer alternative to any
// You must check the type before using it
// ======================================================
var value = "Hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
// ======================================================
// Union Types
// --> Variable can hold multiple types
// ======================================================
var userId;
userId = 101;
userId = "A101";
var userRole = "ADMIN";
// ======================================================
// Enum
// --> Group of named constants
// ======================================================
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound); // 404
console.log(StatusCodes.Success); // 200
var newUser = {
    id: 1,
    name: "Shikhar",
    isAdmin: true,
    createdAt: new Date()
};
// ======================================================
// Function with Types
// ======================================================
function createUser(user) {
    return "User ".concat(user.name, " created successfully");
}
console.log(createUser(newUser));
// ======================================================
// Generics
// --> Allows reusable and type-safe functions
// ======================================================
function wrapInArray(value) {
    return [value];
}
var numberArray = wrapInArray(100);
var stringArray = wrapInArray("TypeScript");
console.log(numberArray);
console.log(stringArray);
// ======================================================
// Tuples
// --> Fixed-length array with specific types
// ======================================================
var userTuple = [1, "Admin"];
// ======================================================
// Classes & Access Modifiers
// ======================================================
var Account = /** @class */ (function () {
    function Account(owner, balance, accountType) {
        this.owner = owner;
        this.balance = balance;
        this.accountType = accountType;
    }
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
var myAccount = new Account("Shikhar", 5000, "Savings");
myAccount.deposit(2000);
console.log("Balance:", myAccount.getBalance());
// ======================================================
// Async Function with Types
// ======================================================
var fakeApiCall = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) {
                setTimeout(function () {
                    resolve("Data fetched successfully");
                }, 1000);
            })];
    });
}); };
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fakeApiCall()];
                case 1:
                    result = _a.sent();
                    console.log(result);
                    return [2 /*return*/];
            }
        });
    });
}
fetchData();
var partialUser = {
    name: "Only Name"
};
console.log(partialUser);
