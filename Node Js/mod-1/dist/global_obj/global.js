"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.stdout.write("How are you? \n");
process.stdin.on("data", (data) => {
    console.log(data.toString().trim());
    process.exit();
});
//# sourceMappingURL=global.js.map