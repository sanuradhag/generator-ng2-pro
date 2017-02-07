'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = process.cwd();
module.exports = Generator.extend({
 

  writing: function () {
    
    const name = this.options.name || 'myDirective';
    const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
    const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
    var path = process.cwd();   

    this.fs.copyTpl(
      this.templatePath('directive.ts'),
      this.destinationPath(`${path}/${name}.ts`),
      { 
        directiveName : lowerCase(name),
        className :titleCase(name),
        name: name
       }
    );
     this.fs.copyTpl(
      this.templatePath('directive.spec.ts'),
      this.destinationPath(`${path}/${name}.spec.ts`),
      { 
        directiveName : lowerCase(name),
        className :titleCase(name),
        name: name
       }
    );
  },

  
});
