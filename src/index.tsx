import * as React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
// import './index.css'
import { Input, Button, Row, Col, InputNumber, Select, Table } from 'antd'
import 'antd/dist/antd.css';
import { Api } from './share/Api';
const { Search } = Input;

type State = {
  tableData: string[]
}
class App extends React.Component<{}, State> {
  private Api = new Api();
  public filterData: string[] = [];

  state = {
    tableData: [],

  }
  
  componentDidMount(): void {
    this.onGetCatagory()
  }
  onGetCatagory = () => {
    this.Api.getCatagory()
    .then(res => {
      this.setState({tableData: res.data.categories})
      this.filterData = res.data.categories;
    })
  }
  onSearch = (e) => {
    let keyword = e.target.value
    this.setState({
      tableData: this.filterData.filter(x => x.toUpperCase().includes(keyword.toUpperCase()))
    });
  }
  render() {
    let {tableData} = this.state
    const columns = [
      {
          title: "Catagory",
          render: text => <span>{text}</span>

      }
  ];
    return (
      <>
      <div style={{margin: 10}}>
         Keyword: <Input onChange={this.onSearch} style={{margin: 20,width: 300}}/>
         </div>
      <Table columns={columns} dataSource={tableData} />
      </>
    )
  }
}

render(<App />, document.getElementById('root'))