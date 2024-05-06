import React from "react";
import { Form, Input } from "antd";
const CustomInputField = ({
  label = "",
  name = "",
  rules,
  value = "",
  defaultValue = "",
  onChange = () => {},
  password = false,
  placeholder = "",
}) => {
  return (
    <div>
      <Form.Item label={label} name={name} rules={rules}>
        {password ? (
          <Input.Password name={name} value={value} onChange={onChange} />
        ) : (
          <Input
            name={name}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
      </Form.Item>
    </div>
  );
};

export default CustomInputField;
