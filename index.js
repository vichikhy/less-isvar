module.exports = {
    install: function(less, manager) {
        less.functions.functionRegistry.addMultiple(require("./isvar")(less));
    },
    printUsage: function() {
        console.log("\n-- less-plugin-isvar--\n");
    }
};
