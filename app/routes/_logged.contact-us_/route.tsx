import React from 'react'
import { Form, Input, Button, Typography, Row, Col, message } from 'antd'
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ContactUsPage() {
  const [form] = Form.useForm()
  const { mutateAsync: createContactMessage } =
    Api.contactMessage.create.useMutation()

  const onFinish = async (values: any) => {
    try {
      await createContactMessage({
        data: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
        },
      })
      message.success('Your message has been sent successfully!')
      form.resetFields()
    } catch (error) {
      message.error('Failed to send message. Please try again.')
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Contact Us</Title>
      <Paragraph>
        We'd love to hear from you! Get in touch with us using the form below or
        through our contact information.
      </Paragraph>

      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please enter a valid email',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone">
              <Input />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} md={12}>
          <Title level={4}>Contact Information</Title>
          <Paragraph>
            <PhoneOutlined /> Phone: <Text strong>(123) 456-7890</Text>
          </Paragraph>
          <Paragraph>
            <MailOutlined /> Email: <Text strong>info@salonbeauty.com</Text>
          </Paragraph>
          <Paragraph>
            <EnvironmentOutlined /> Address:{' '}
            <Text strong>123 Beauty Street, Stylish City, ST 12345</Text>
          </Paragraph>
          <Paragraph>
            <ClockCircleOutlined /> Hours:
            <br />
            <Text>Monday - Friday: 9:00 AM - 7:00 PM</Text>
            <br />
            <Text>Saturday: 10:00 AM - 6:00 PM</Text>
            <br />
            <Text>Sunday: Closed</Text>
          </Paragraph>
          <div
            style={{
              marginTop: '20px',
              height: '300px',
              border: '1px solid #ccc',
            }}
          >
            {/* Replace this div with an actual map component when available */}
            <Text>Map placeholder - Salon location</Text>
          </div>
        </Col>
      </Row>
    </PageLayout>
  )
}
