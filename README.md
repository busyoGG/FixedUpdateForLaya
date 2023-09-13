# FixedUpdateForLaya
Laya的FixedUpdate实现方案

## 使用方法

复制本代码到游戏的主更新逻辑中，在onFixedUpdate中执行你所要执行的代码，通过_intervals调整帧间隔时间，计算方法为 `1000 / 每秒执行次数`

具体说明见 [](https://busyo.buzz/article/Laya/%E5%B7%A5%E5%85%B7/Laya%E5%AE%9E%E7%8E%B0FixedUpdate/)