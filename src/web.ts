import { WebPlugin } from '@capacitor/core';

import type { SafeAreaPlugin, SafeAreaInsets, StatusBarInfo } from './definitions';

export class SafeAreaWeb extends WebPlugin implements SafeAreaPlugin {
  async getSafeAreaInsets(): Promise<SafeAreaInsets> {
    return {
      insets: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }
    };
  }
  async getStatusBarHeight(): Promise<StatusBarInfo> {
    return {
      statusBarHeight: 0
    };
  }
}
