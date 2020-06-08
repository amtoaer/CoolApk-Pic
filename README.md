# 酷安酷图客户端

## Current Progress

>   最近要赶ddl，项目暂且搁置。

完成了基本的浏览/下载功能，目前主要需要解决如下几个问题：

1.  操作逻辑

    现在展开图集时，只能通过`侧栏->主页`返回，但返回会返回到第一页，不会保存浏览进度。

2.  自定义保存路径

    赶工做了做自定义保存路径，在图集界面可以进行修改。但因为我没有做路径保存功能，将路径设置好之后打开另一个图集，路径又会回到最开始的`~`。

    >   It's not a bug, but a feature.（滑稽

3.  界面/功能优化

    目前这个程序只是勉强能用，在界面和功能上都有优化空间。比如将保存路径的设置放到单独的路由中，通过`侧栏->设置`进行跳转、增加图集下载按钮等等。

4.  项 目 重 构

    写的时候只是抱着玩玩的态度，并没有考虑太多，现在遇到了很多问题。例如，问题3中提出的将保存路径的设置放到单独的路由中，保存路径作为单独路由的数据，是很难被图集路由访问到的，而如果一开始采用`Vuex`，这个问题就不复存在了。

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:9080
yarn dev

# build electron application for production
yarn build

```

## Demo Screenshot

### 首页

![image-20200608151212653](https://allwens-work.oss-cn-beijing.aliyuncs.com/bed/image-20200608151212653.png)

### 图集

![image-20200608151233853](https://allwens-work.oss-cn-beijing.aliyuncs.com/bed/image-20200608151233853.png)

### 下载

![image-20200608151258018](https://allwens-work.oss-cn-beijing.aliyuncs.com/bed/image-20200608151258018.png)

## Thanks To

1.  `electron-vue`
2.  `muse-ui`

