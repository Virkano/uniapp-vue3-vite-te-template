import { request } from '@/utils/http'
import type { BannerItem } from '@/services/model/homeModel'

const Banner = '/home/banner'

/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 */
export function getHomeBannerAPI(distributionSite = 1) {
  return request.Get<BannerItem[]>(Banner, { params: { distributionSite } })
}
