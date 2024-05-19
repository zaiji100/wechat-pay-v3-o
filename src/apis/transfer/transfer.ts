import type { WechatPayV3Base } from 'src/base'
import { TransferBatchParams, TransferBatchResult } from './transfer.types'


const UrlMap = {
    transfer: {
        business: `https://api.mch.weixin.qq.com/v3/transfer/batches`,
    },
} as const
/**
 * 企业付款
 */
export class Transfer {
    constructor(public base: WechatPayV3Base) { }

    //=========================================下单
    protected async _transfer<T = TransferBatchResult>(data: any) {
        const apiUrl = UrlMap.transfer.business
        console.log(JSON.stringify(this.base.apiCretSerialNo))
        const result = await this.base.request.post<T>(apiUrl, data, {
            headers: {
                'Wechatpay-Serial': this.base.apiCretSerialNo,
            },
        })
        return result.data
    }
    /** 下单-直连商户 */
    async transfer(data: TransferBatchParams) {
        return this._transfer(data)
    }

}
