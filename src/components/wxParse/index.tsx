import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import * as WxParse from './wxParse.js';

import './wxParse.scss';

export interface IProps {
  content: string;
}

/**
 * 富文本组件
 * 需要注意的是，在项目的 config/index.js 文件中，有 copy 模板与样式的操作
 */
export default class ParseComponent extends Component<IProps> {
  componentDidMount() {
    const { content } = this.props;
    WxParse.wxParse('content', 'html', content, this.$scope, 5);
  }

  render() {
    return (
      <View>
        <import src="../../components/wxParse/wxParse.wxml" />
        <template is="wxParse" data="{{wxParseData:content.nodes}}" />
      </View>
    );
  }
}
