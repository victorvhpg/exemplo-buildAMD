//Arquivo de configuracao do build "r.js"
({
    mainConfigFile: "../js/require-config.js",
    //base dos modulos a  partir de onde este  arquivo esta
    baseUrl: "../",
    // modulo 'principal'
    name: "js/main",
    //local onde sera gerado o build
    out: "../js-build/build.js",
    //metodo  chamado antes  do build de cada  modulo
    onBuildWrite: function(moduleName, path, contents) {
        console.log("build de : " + moduleName);
        if (moduleName === "js/main") {
            contents = contents.replace(/#databuild/, (new Date()).toString());
        }
        return contents;
    }
});
