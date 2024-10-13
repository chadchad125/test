import React, { useState } from 'react'
import { Calendar, Modal, Button, Space, Tag } from 'antd'
import { Typography } from 'antd'
import {
  CalendarOutlined,
  UserOutlined,
  ToolOutlined,
  CheckOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
import { Prisma } from '@prisma/client'
const { Title, Text } = Typography
type BookingWithServices = Prisma.BookingGetPayload<{
  include: { bookingServices: { include: { service: true } }; user: true }
}>
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AdminAppointmentsCalendarPage() {
  const { checkRole } = useUserContext()
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null)
  const [selectedBooking, setSelectedBooking] =
    useState<BookingWithServices | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const {
    data: bookings,
    isLoading,
    refetch,
  } = Api.booking.findMany.useQuery({
    include: {
      bookingServices: {
        include: {
          service: true,
        },
      },
      user: true,
    },
  })

  const { mutateAsync: updateBooking } = Api.booking.update.useMutation()

  if (!checkRole('ADMIN')) {
    return (
      <PageLayout layout="narrow">
        <Title level={3}>Access Denied</Title>
        <Text>You do not have permission to view this page.</Text>
      </PageLayout>
    )
  }

  const handleDateSelect = (date: dayjs.Dayjs) => {
    setSelectedDate(date)
  }

  const handleBookingClick = (booking: BookingWithServices) => {
    setSelectedBooking(booking)
    setIsModalVisible(true)
  }

  const handleModalClose = () => {
    setIsModalVisible(false)
    setSelectedBooking(null)
  }

  const handleStatusUpdate = async (newStatus: string) => {
    if (selectedBooking) {
      await updateBooking({
        where: { id: selectedBooking.id },
        data: { status: newStatus },
      })
      refetch()
      handleModalClose()
    }
  }

  const dateCellRender = (date: dayjs.Dayjs) => {
    const dayBookings = bookings?.filter(
      booking => booking.date === date.format('YYYY-MM-DD'),
    )

    return (
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {dayBookings?.map(booking => (
          <li key={booking.id} onClick={() => handleBookingClick(booking)}>
            <Tag color="blue" style={{ cursor: 'pointer' }}>
              {booking.timeSlot}
            </Tag>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Appointments Calendar</Title>
      <Text>Manage salon appointments and schedules efficiently.</Text>

      <Calendar
        onSelect={(date: dayjs.Dayjs) => handleDateSelect(date) as any}
        dateCellRender={(date: dayjs.Dayjs) =>
          dateCellRender(date) as React.ReactNode
        }
      />

      <Modal
        title="Appointment Details"
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="cancel" onClick={handleModalClose}>
            Close
          </Button>,
          <Button
            key="complete"
            type="primary"
            onClick={() => handleStatusUpdate('COMPLETED')}
          >
            Mark as Completed
          </Button>,
        ]}
      >
        {selectedBooking && (
          <Space direction="vertical">
            <Text strong>
              <CalendarOutlined /> Date: {selectedBooking.date}
            </Text>
            <Text strong>
              <ClockCircleOutlined /> Time: {selectedBooking.timeSlot}
            </Text>
            <Text strong>
              <UserOutlined /> Customer: {selectedBooking.user?.name}
            </Text>
            <Text strong>
              <ToolOutlined /> Services:
            </Text>
            <ul>
              {selectedBooking.bookingServices?.map(bs => (
                <li key={bs.id}>{bs.service?.name}</li>
              ))}
            </ul>
            <Text strong>
              <CheckOutlined /> Status: {selectedBooking.status}
            </Text>
          </Space>
        )}
      </Modal>
    </PageLayout>
  )
}
