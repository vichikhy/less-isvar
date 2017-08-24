module.exports = function (less) {
    var True = less.tree.Keyword.True,
        False = less.tree.Keyword.False,
        Keyword = less.tree.Keyword,
        Variable = less.tree.Variable;
    return {
        "isvar": function (target) {
            result = False;
            try {
                var v = new Variable('@' + target.value, target.index, target.currentFileInfo).eval(this.context, true);
                result = True;
            } catch(err) { }
            return result;
        }
    };
};
