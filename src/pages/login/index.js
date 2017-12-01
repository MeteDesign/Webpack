import React, { Component } from "react";
import {
  Form,
  Input,
  Tabs,
  Button,
  Icon,
  Checkbox,
  Row,
  Col,
  Alert
} from "antd";
import axios from "axios";
import scss from "./styles/index.scss";

const FormItem = Form.Item;
const { TabPane } = Tabs;
class Login extends Component {
  state = {
    loginText: "登录",
    message: null
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields({ force: true }, (err, values) => {
      if (!err) {
        this.setState({ loginText: "正在登录..." });
        axios
          .post(
            `/api/users/login`,{ ...values },{
              withCredentials: true
            }
          )
          .then(res => {
            const { data } = res;
            if (data.success) {
              const message = this.renderMessage(data.message, "success");
              this.setState({ message },()=>{
                window.location.href = '/'
              });

            } else {
              const message = this.renderMessage(data.message, "error");
              this.setState({ message,loginText:'登录' });
            }
          })
          .catch(err => {
            const message = this.renderMessage(err.message, "error");
            this.setState({ message, loginText: "登录" });
          });
      }
    });
  };

  renderMessage = (message, type) => {
    return (
      <Alert
        style={{ marginBottom: 24 }}
        message={message}
        type={type}
        closable
        showIcon
      />
    );
  };

  render() {
    const { form, login } = this.props;
    const { getFieldDecorator } = form;
    const { loginText, message } = this.state;
    return (
      <div className="login">
        <div className="logo">
          <h1>
            <img src={require('../../assets/images/md.png')} alt="" />
            <span>METE DESIGN</span>
          </h1>
        </div>
        <div className="title">欢迎回来</div>
        <div className="message">{message || null}</div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="用户名">
            {getFieldDecorator("account", {
              rules: [
                {
                  required: true,
                  message: "请输入用户名"
                }
              ]
            })(
              <Input
                size="large"
                prefix={<Icon type="user" />}
                placeholder="请输入用户名"
              />
            )}
          </FormItem>
          <FormItem label="密码">
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "请输入密码！"
                }
              ]
            })(
              <Input
                size="large"
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="请输入密码！"
              />
            )}
          </FormItem>

          <FormItem>
            <div style={{ marginTop: "10px" }}>
              <Button size="large" type="primary" htmlType="submit">
                {loginText}
              </Button>
            </div>
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default Form.create()(Login);
