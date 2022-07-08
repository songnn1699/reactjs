import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { priorityFilter, searchFilter, statusFilter} from '../../redux/actions'
import  FilterReducer from './filterReducer'


const { Search } = Input;

export default function Filters() {
  const dispatch= useDispatch();
  const [search, setSearch] =useState('');
  const [filterStatus, setFilterStatus] =useState('All');
  const [filterPriority, setFilterPriority] =useState([]);




  const handleSearchchange=(e)=>{
    setSearch(e.target.value); 
    dispatch(FilterReducer.actions.searchFilter(e.target.value));

  }

  const handleStatusChange=(e)=>{
    setFilterStatus(e.target.value); 
    dispatch(FilterReducer.actions.statusFilter(e.target.value));   
  }
  const handlePriorityChange=(e)=>{
    setFilterPriority(e); 
    dispatch(FilterReducer.actions.priorityFilter(e)); 
  }



  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' val={search} onChange={handleSearchchange} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filterPriority}
          onChange={handlePriorityChange}

        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
