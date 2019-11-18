import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';

import ParseComponent from '@/components/wxParse';

/**
 * 需要注意的是，在项目的 config/index.js 文件中，有 copy 模板与样式的操作
 */
export default class WxParsePage extends Component {
  config = {
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'WxParse 使用示例',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light',
    usingComponents: {
      'van-popup': '../../components/vant-weapp/popup/index'
    }
  };

  state = {
    show: false
  };

  showPopup = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <View>
        {process.env.TARO_ENV === 'weapp' ? (
          <ParseComponent content="<div style='color:red'>我是富文本内容</div>" />
        ) : (
          <View>只在小程序里支持</View>
        )}
        <Button onClick={this.showPopup}>打开弹窗 vant-popup</Button>
        <van-popup onClose={this.showPopup} closeOnOverlay={true} show={this.state.show}>
          <Button onClick={this.showPopup}>我是弹窗内容</Button>
        </van-popup>
      </View>
    );
  }
}
