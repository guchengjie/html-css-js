一、Git常用命令
git init
	初始化git，会在执行命令所在目录中创建.git目录，用于存储项目变更信息
git status
	查看本地仓储的状态
git add 文件名
	添加指定文件到跟踪列表
创建.gitignore忽略文件
	在当前目录中创建git忽略文件.gitignore，并指定忽略文件名，每行写一个
git add . 或git add --all
	将当前目录所有文件添加到跟踪列表
git commit -m '提交日志'
	将变化文件提交到本地仓库中，需要指定提交日志(消息)

二、GitHub基本使用

克隆版本库到本地
git clone 版本库地址 目录


三、分支
git branch
git branch v2.0
git checkout v2.0
git push -u origin v2.0	


四、托管页面
方式1：使用gh-pages分支
	git branch gh-pages
	git checkoiut gh-pages
	git push -u origin gh-pages

方式2：使用master分支 
	创建一个新的respository，需要注意命名规则
	git remote add itany https://github.com/tangyang8942/tangyang8942.github.io.git
	git push -u itany master


