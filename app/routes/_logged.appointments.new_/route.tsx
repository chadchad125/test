import React, { useState } from 'react'
import {
  Typography,
  Calendar,
  Select,
  TimePicker,
  Form,
  Input,
  Checkbox,
  Button,
  message,
  Space,
} from 'antd'
import {
  CalendarOutlined,
  ClockCircleOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AppointmentBookingPage() {
  const navigate = useNavigate()
  const { user, isLoggedIn } = useUserContext()
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null)

  const { data: services } = Api.service.findMany.useQuery({})
  const { data: availableDates } = Api.booking.findMany.useQuery({
    select: { date: true },
    distinct: ['date'],
  })

  const { mutateAsync: createBooking } = Api.booking.create.useMutation()

  const onDateSelect = (date: dayjs.Dayjs) => {
    setSelectedDate(date)
  }

  const onServiceSelect = (values: string[]) => {
    setSelectedServices(values)
  }

  const onTimeSlotSelect = (time: dayjs.Dayjs | null) => {
    setSelectedTimeSlot(time ? time.format('HH:mm') : null)
  }

  const onFinish = async (values: any) => {
    if (!selectedDate || !selectedTimeSlot || selectedServices.length === 0) {
      message.error('Please select date, time, and services')
      return
    }

    try {
      await createBooking({
        data: {
          date: selectedDate.format('YYYY-MM-DD'),
          timeSlot: selectedTimeSlot,
          status: 'PENDING',
          contactDetails: JSON.stringify(values),
          optInNotification: values.optInNotification,
          userId: user?.id,
          bookingServices: {
            create: selectedServices.map(serviceId => ({ serviceId })),
          },
        },
      })
      message.success('Appointment booked successfully!')
      navigate('/my-account')
    } catch (error) {
      message.error('Failed to book appointment. Please try again.')
    }
  }

  const disabledDate = (current: dayjs.Dayjs) => {
    return !availableDates?.some(booking =>
      dayjs(booking.date).isSame(current, 'day'),
    )
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Book an Appointment</Title>
        <Paragraph>
          Choose your preferred date, services, and time slot to schedule your
          appointment.
        </Paragraph>

        <Calendar
          fullscreen={false}
          onSelect={onDateSelect}
          disabledDate={disabledDate}
          dateCellRender={date => {
            const isAvailable = availableDates?.some(booking =>
              dayjs(booking.date).isSame(date, 'day'),
            )
            return isAvailable ? (
              <CalendarOutlined style={{ color: 'green' }} />
            ) : null
          }}
        />

        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Select services"
          onChange={onServiceSelect}
        >
          {services?.map(service => (
            <Option key={service.id} value={service.id}>
              {service.name} - {service.price}
            </Option>
          ))}
        </Select>

        <TimePicker
          format="HH:mm"
          minuteStep={30}
          onChange={onTimeSlotSelect}
          placeholder="Select time slot"
          style={{ width: '100%' }}
        />

        <Form onFinish={onFinish} layout="vertical">
          {!isLoggedIn && (
            <>
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please input a valid email!',
                  },
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <Input prefix={<PhoneOutlined />} placeholder="Phone" />
              </Form.Item>
            </>
          )}

          <Form.Item name="optInNotification" valuePropName="checked">
            <Checkbox>
              Receive appointment confirmations and reminders via email or SMS
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<ClockCircleOutlined />}
            >
              Book Appointment
            </Button>
          </Form.Item>
        </Form>

        <Paragraph>
          <Text strong>Selected Date:</Text>{' '}
          {selectedDate?.format('YYYY-MM-DD')}
        </Paragraph>
        <Paragraph>
          <Text strong>Selected Services:</Text> {selectedServices.join(', ')}
        </Paragraph>
        <Paragraph>
          <Text strong>Selected Time Slot:</Text> {selectedTimeSlot}
        </Paragraph>
      </Space>
    </PageLayout>
  )
}
