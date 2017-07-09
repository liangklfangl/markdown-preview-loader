import ReactDOM from "react-dom";
import React from "react";
const content =  require('../demos/basic.md');
console.log('content====',content);
const converters = [
      [
        function(node) { return typeof node === 'function'; },
        function(node, index) {
          return React.cloneElement(node(), { key: index });
        }
      ]
    ];
const JsonML = require('jsonml.js/lib/utils');
//得到我们的jsonml
const toReactComponent = require('jsonml-to-react-component');

ReactDOM.render(toReactComponent(content.content,converters), document.getElementById('react-content'));
