import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import ListItem from '../../components/listItem/listItem'
import {AtButton} from 'taro-ui'
import './list.less'

export default class List extends Component {
  state = {
    list: [{
      name: 'A',
      value: '1'
    }, {
      name: 'B',
      value: '2'
    }, {
      name: 'C',
      value: '3'
    }]
  }

  render () {
    return (
      <View>
        {this.state.list.map(item => {
          return <ListItem name={item.name} value={item.value} key={item.name} />
        })}
        <AtButton>12</AtButton>
      </View>
    )
  }
}