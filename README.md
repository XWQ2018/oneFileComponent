# 单文件项目

```javascript

created Single file project

```

### Project setup

```javascript

npm install

```

```javascript

yarn

```

### start project

```javascript

vue serve  如果没有指定入口，默认查找main.js、index.js、App.vue 或 app.vue 中的一个。你也可以显式地指定入口文件。

```

### Packaged production document

```javascript

vue build  如果没有指定入口，则会使用 src/App.vue

```

### Project tree structure

```javascript

|——components           公共组件 
|——dist                 打包后的文件存放目录
|——node_modules         依赖文件夹
|——public               静态文件目录
|  |———img              图片目录
|  |———css              公共样式目录
|——.gitignore           文件过滤
|——app.vue              入口文件
|——package.json         依赖安装文件
|——README.md            md文档
|——vue.config.js        配置文件

```
