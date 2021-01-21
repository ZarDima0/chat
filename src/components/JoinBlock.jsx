import React from 'react';
// import axios from 'axios'

import { Button, Input, Row, Col, Layout } from 'antd'; 


const JoinBlock =  () => {
  let [roomsId, setRoomId] = React.useState('');
  let [userName, setUserName] = React.useState('');


  const onEnter =  () => {
    if (!roomsId || !userName) {
        alert('заполните поля')
    }
    // axios.post('/rooms',{ 
    //   roomsId,
    //   userName,
    // });
  }
 
    return ( 
        <Layout>
        <div className="site-layout-background" style={{ padding: 100, minHeight: 380 }}>
          <Row justify='center'>
            <Col span={6}>
              <Input type='text' placeholder="Введи номер комнаты" value = {roomsId} onChange = {(e) =>setRoomId(e.target.value)} />
              <Input type='text' placeholder="Введи свой ник" value = {userName} onChange = {(e) => setUserName (e.target.value)} />
              <Row justify='center' style={{ padding: 10, minHeight: 400 }}  >
                <Button onClick = {onEnter} type="primary">Поиск</Button>
              </Row>
            </Col>
          </Row>
        </div>
      </Layout>
    )
}

export default JoinBlock