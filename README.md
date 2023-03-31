初始化项目
npm init

配置eslint 和 prettier

1.安装相关插件：需要安装eslint、prettier、eslint-plugin-prettier和eslint-config-prettier等插件。
其中，eslint-plugin-prettier插件用于将Prettier的规则集集成到ESLint中，
eslint-config-prettier插件用于关闭ESLint和Prettier之间可能存在的冲突规则
**npm install eslint prettier eslint-plugin-prettier eslint-config-prettier --save-dev**

2.配置.eslintrc文件：在.eslintrc文件中，使用extends和plugins选项来配置ESLint和Prettier的规则集。
**{
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "prettier"
  ]
}**

3.配置.prettierrc文件：在.prettierrc文件中，使用JSON格式配置Prettier的选项。
**{
  "singleQuote": true,
  "semi": false
}**

4.配置VS Code：在VS Code中，安装ESLint和Prettier - Code formatter插件，并在settings.json文件中进行以下配置：
**
{
  "editor.formatOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue"
  ],
  "prettier.singleQuote": true,
  "prettier.semi": false
}**



