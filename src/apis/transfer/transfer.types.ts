export interface TransferBatchParams {
    /** 【商户appid】 申请商户号的appid或商户号绑定的appid（企业号corpid即为此appid） */
    appid: string
    /** 商家批次单号 */
    out_batch_no: string
    /** 批次名称 */
    batch_name: string
    /** 批次备注 */
    batch_remark: string
    /** 转账总金额 */
    total_amount: number
    /** 转账总笔数 */
    total_num: number
    /** 转账明细列表 */
    transfer_detail_list: TransferDetail[]
    /** 回调URL */
    notify_url: string
}

export interface TransferDetail{
    /** 【商家明细单号】 商户系统内部区分转账批次单下不同转账明细单的唯一标识，要求此参数只能由数字、大小写字母组成 */
    out_detail_no: string
    /** 【转账金额】 转账金额单位为“分” */
    transfer_amount: number
    /** 【转账备注】 单条转账备注（微信用户会收到该备注），UTF8编码，最多允许32个字符 */
    transfer_remark: string
    /** 【收款用户openid】 商户appid下，某用户的openid */
    openid: string
}

export interface TransferBatchResult {
    /** 商家批次单号 */
    out_batch_no: string
    /** 微信批次单号 */
    batch_id: number
    /** 批次创建时间 */
    create_time: string
    /** 
     * 批次状态
     * - ACCEPTED:已受理。批次已受理成功，若发起批量转账的30分钟后，转账批次单仍处于该状态，可能原因是商户账户余额不足等。商户可查询账户资金流水，若该笔转账批次单的扣款已经发生，则表示批次已经进入转账中，请再次查单确认
     * - PROCESSING:转账中。已开始处理批次内的转账明细单
     * - FINISHED:已完成。批次内的所有转账明细单都已处理完成
     * - CLOSED:已关闭。可查询具体的批次关闭原因确认
     */
    batch_status?: string
}