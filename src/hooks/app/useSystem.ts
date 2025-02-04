/**
 * 系统信息
 * @description 除去uni官方不推荐使用的返回参数
 * @link https://uniapp.dcloud.net.cn/api/system/info.html
 */
export const useSystem = () => {
  const {
    // device
    deviceId,
    deviceBrand,
    deviceModel,
    deviceType,
    devicePixelRatio,
    deviceOrientation,
    // os
    osName,
    osVersion,
    osLanguage,
    osTheme,
    // @ts-ignore
    osAndroidAPILevel,
    // rom
    romName,
    romVersion,
    // browser
    browserName,
    browserVersion,
    // host
    hostFontSizeSetting,
    hostSDKVersion,
    hostName,
    hostVersion,
    hostLanguage,
    hostTheme,
    hostPackageName,
    // uni-app框架
    uniPlatform,
    uniCompileVersion,
    uniRuntimeVersion,
    // app
    appId,
    appName,
    appVersion,
    appVersionCode,
    appLanguage,
    // @ts-ignore
    appWgtVersion,
    // 其他
    ua,
    screenWidth,
    screenHeight,
    windowWidth,
    windowHeight,
    windowTop,
    windowBottom,
    statusBarHeight,
    safeArea,
    safeAreaInsets,
    // 某些小程序特殊的返回参数
    // @ts-ignore
    benchmarkLevel,
    // @ts-ignore
    batteryLevel,
    currentBattery,
    navigationBarHeight,
    titleBarHeight,
    albumAuthorized,
    cameraAuthorized,
    locationAuthorized,
    microphoneAuthorized,
    notificationAuthorized,
    notificationAlertAuthorized,
    notificationBadgeAuthorized,
    notificationSoundAuthorized,
    bluetoothEnabled,
    locationEnabled,
    wifiEnabled,
    cacheLocation,
    storage,
  } = uni.getSystemInfo()
  const {
    top: safeAreaTop,
    bottom: safeAreaBottom,
    left: safeAreaLeft,
    right: safeAreaRight,
    height: safeAreaHeight,
    width: safeAreaWidth,
  } = safeArea!
  const {
    top: safeAreaInsetsTop,
    bottom: safeAreaInsetsBottom,
    left: safeAreaInsetsLeft,
    right: safeAreaInsetsRight,
  } = safeAreaInsets!
  return {
    deviceId,
    deviceBrand,
    deviceModel,
    deviceType,
    devicePixelRatio,
    deviceOrientation,
    osName,
    osVersion,
    osLanguage,
    osTheme,
    osAndroidAPILevel,
    romName,
    romVersion,
    browserName,
    browserVersion,
    hostFontSizeSetting,
    hostSDKVersion,
    hostName,
    hostVersion,
    hostLanguage,
    hostTheme,
    hostPackageName,
    uniPlatform,
    uniCompileVersion,
    uniRuntimeVersion,
    appId,
    appName,
    appVersion,
    appVersionCode,
    appLanguage,
    appWgtVersion,
    ua,
    screenWidth,
    screenHeight,
    windowWidth,
    windowHeight,
    windowTop,
    windowBottom,
    statusBarHeight,
    safeAreaTop,
    safeAreaBottom,
    safeAreaLeft,
    safeAreaRight,
    safeAreaHeight,
    safeAreaWidth,
    safeAreaInsetsTop,
    safeAreaInsetsBottom,
    safeAreaInsetsLeft,
    safeAreaInsetsRight,
    benchmarkLevel,
    batteryLevel,
    currentBattery,
    navigationBarHeight,
    titleBarHeight,
    albumAuthorized,
    cameraAuthorized,
    locationAuthorized,
    microphoneAuthorized,
    notificationAuthorized,
    notificationAlertAuthorized,
    notificationBadgeAuthorized,
    notificationSoundAuthorized,
    bluetoothEnabled,
    locationEnabled,
    wifiEnabled,
    cacheLocation,
    storage,
  }
}
