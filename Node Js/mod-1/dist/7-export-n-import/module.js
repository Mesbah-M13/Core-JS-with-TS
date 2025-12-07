"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const getFileExt = () => {
    return path.extname(path.basename(__filename));
};
// console.log(getFileExt());
// 2 types of exports - default & naming
// module.exports = getFileExt;
module.exports = {
    fileExt: getFileExt,
};
//# sourceMappingURL=module.js.map