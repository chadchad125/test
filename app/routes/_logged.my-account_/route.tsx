import React, { useState, useEffect } from 'react'
import {
  Typography,
  Form,
  Input,
  Button,
  Switch,
  message,
  Tabs,
  List,
  Spin,
} from 'antd'
import { UserOutlined, MailOutlined, CalendarOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MyAccountPage() {
  const { user } = useUserContext()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(true)
  const [appointments, setAppointments] = useState<any[]>([])

  const {
    data: userData,
    isLoading: isUserLoading,
    refetch: refetchUser,
  } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
  })

  const { mutateAsync: updateUser } = Api.user.update.useMutation()

  const {
    data: bookingsData,
    isLoading: isBookingsLoading,
    refetch: refetchBookings,
  } = Api.booking.findMany.useQuery({
    where: { userId: user?.id },
    include: { bookingServices: { include: { service: true } } },
  })

  useEffect(() => {
    if (userData) {
      form.setFieldsValue({
        name: userData.name,
        email: userData.email,
      })
      setLoading(false)
    }
  }, [userData, form])

  useEffect(() => {
    if (bookingsData) {
      setAppointments(bookingsData)
    }
  }, [bookingsData])

  const onFinish = async (values: any) => {
    try {
      await updateUser({
        where: { id: user?.id },
        data: values,
      })
      message.success('Account information updated successfully')
      refetchUser()
    } catch (error) {
      message.error('Failed to update account information')
    }
  }

  const renderAppointments = (appointmentList: any[]) => (
    <List
      itemLayout="horizontal"
      dataSource={appointmentList}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<CalendarOutlined />}
            title={`Appointment on ${dayjs(item.date).format(
              'MMMM D, YYYY',
            )} at ${item.timeSlot}`}
            description={
              <>
                <Text>Status: {item.status}</Text>
                <br />
                <Text>
                  Services:{' '}
                  {item.bookingServices
                    ?.map((bs: any) => bs.service?.name)
                    .join(', ')}
                </Text>
              </>
            }
          />
        </List.Item>
      )}
    />
  )

  if (loading || isUserLoading || isBookingsLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Account</Title>
      <Text>Manage your personal information and appointments</Text>

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Personal Information" key="1">
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please input a valid email!',
                },
              ]}
            >
              <Input prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update Information
              </Button>
            </Form.Item>
          </Form>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Appointments" key="2">
          <Title level={4}>Upcoming Appointments</Title>
          {renderAppointments(
            appointments?.filter(a => dayjs(a.date).isAfter(dayjs())) || [],
          )}
          <Title level={4}>Past Appointments</Title>
          {renderAppointments(
            appointments?.filter(a => dayjs(a.date).isBefore(dayjs())) || [],
          )}
        </Tabs.TabPane>
      </Tabs>
    </PageLayout>
  )
}
