'use strict';
var shell = require('shelljs');
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the awesome ' + chalk.red('typescript-library-boilerplate') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'projectname',
      message: 'Your project name? (Please make sure it is unique if you want to publish in NPM library)\n',
      default: this.appname.split(' ').join('-')
    },
    {
      type: 'input',
      name: 'username',
      message: 'Github\'s username',
      default: shell.exec('git config --get user.name', {silent: true}).stdout.trim()
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description',
      default: ''
    },
    {
      type: 'input',
      name: 'keywords',
      message: 'Package keywords (comma to split)',
      default: ''
    },
    {
      type: 'input',
      name: 'author',
      message: 'Author',
      default: `${shell.exec('git config --get user.name', {silent: true}).stdout.trim()} <${shell.exec('git config --get user.email', {silent: true}).stdout.trim()}>`
    },
    {
      type: 'input',
      name: 'version',
      message: 'Version',
      default: '0.0.0'
    }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.keywords = this.props.keywords.split(',');
      this.props.appname = this.appname
        .split(' ')
        .map(v => v.charAt(0).toUpperCase() + v.slice(1))
        .join(' ');
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('_travis.yml'),
      this.destinationPath('.travis.yml')
    );

    this.fs.copyTpl(
      `${this.templatePath()}/**/!(_)*`,
      this.destinationPath(),
      // this.templatePath('package.json'),
      // this.destinationPath('public/package.json'),
      this.props
    );
  },

  install: function () {
    this.yarnInstall();
    // this.installDependencies();
  }
});
