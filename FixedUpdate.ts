export class FixedUpdate {
    /** 累计时间 */
    private _deltaTime = 0;
    /** 上一fixed update 剩余时间 */
    private _savedTime = 0;
    /** fixed update 执行次数 */
    private _fiexdTimes = 0;
    /** 逻辑帧间隔时间 单位毫秒 50即每秒更新20次*/
    private _intervals = 50;

    /**
    * 固定更新
    */
    private fixedUpdate() {
        let mark = false;
        let curDelta = Laya.timer.delta;
        curDelta = curDelta < this._intervals ? curDelta : this._intervals;
        //防止出现长时间放置导致的保存时间过长
        if (this._savedTime > this._intervals) {
            this._savedTime = this._intervals;
        }
        //累计间隔时间
        this._deltaTime += curDelta + this._savedTime;
        //更新次数
        this._fiexdTimes = this._deltaTime / this._intervals;
        for (let i = 1; i < this._fiexdTimes; i++) {
            this.onFixedUpdate();
            mark = true;
        }

        if (mark) {
            this._savedTime = this._deltaTime - Math.floor(this._fiexdTimes) * this._intervals;
            this._deltaTime = 0;
        } else {
            this._savedTime = 0;
        }
    }

    /**
     * 固定更新运行内容
     */
    onFixedUpdate() {

    }
}