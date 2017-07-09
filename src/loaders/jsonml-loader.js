'use strict';
const loaderUtils = require('loader-utils');
const generator = require('babel-generator').default;
const transformer = require('./transformer');
 const fs = require('fs');
 const util = require('util');
module.exports = function jsonmlReactLoader(content) {
  // console.log("loader的类型", content);
  if (this.cacheable) {
    this.cacheable();
  }
  const query = loaderUtils.getOptions(this);
  const lang = query.lang || 'react-example';
  //we get configured language in dora-plugin-preview
  const res = transformer(content, lang);
  //we input jsonml as content to tranformer function
  const inputAst = res.inputAst;

  const imports = res.imports;
  for (let k = 0; k < imports.length; k++) {
    inputAst.program.body.unshift(imports[k]);
  }
  //We insert `import` before ast. But, if you want to update ast, you need to take care of ImportDeclaration and etc
  const code = generator(inputAst, null, content).code;
  //Turns an AST into code.
  const noreact = query.noreact;
  //You can pass noreact to refuse to import react
  if (noreact) {
    return code;
  }
 const processedCode= 'const React =  require(\'react\');\n' +
        'const ReactDOM = require(\'react-dom\');\n'+
        code;
 console.log("抽象语法树处理后得到:",util.inspect(processedCode,{showHidden:true,depth:3}));

  fs.writeFile('ast.js',processedCode,()=>{
    console.log('ended');
  })
  return processedCode;
};
