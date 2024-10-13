import React from 'react'
import { Typography, Row, Col, Button, Card, Carousel } from 'antd'
import { CalendarOutlined, StarOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { data: services } = Api.service.findMany.useQuery({ take: 3 })
  const { data: galleryImages } = Api.galleryImage.findMany.useQuery({
    take: 4,
  })
  const { data: testimonials } = Api.testimonial.findMany.useQuery({
    take: 3,
    include: { user: true },
  })

  return (
    <PageLayout layout="narrow">
      <Title level={1} style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Welcome to Our Nail Salon
      </Title>
      <Paragraph
        style={{
          textAlign: 'center',
          fontSize: '1.2rem',
          marginBottom: '3rem',
        }}
      >
        Experience luxury and beauty at your fingertips
      </Paragraph>

      <Carousel autoplay style={{ marginBottom: '3rem' }}>
        {galleryImages?.map(image => (
          <div key={image.id}>
            <img
              src={image.imageUrl || ''}
              alt={image.caption || ''}
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Carousel>

      <Row justify="center" style={{ marginBottom: '3rem' }}>
        <Col>
          <Button
            type="primary"
            icon={<CalendarOutlined />}
            size="large"
            onClick={() => navigate('/appointments/new')}
          >
            Book an Appointment
          </Button>
        </Col>
      </Row>

      <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Our Services
      </Title>
      <Row gutter={[16, 16]} justify="center" style={{ marginBottom: '3rem' }}>
        {services?.map(service => (
          <Col xs={24} sm={12} md={8} key={service.id}>
            <Card title={service.name} extra={<a href="/services">More</a>}>
              <Paragraph ellipsis={{ rows: 3 }}>
                {service.description}
              </Paragraph>
              <Text strong>Price: {service.price}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Our Work
      </Title>
      <Row gutter={[16, 16]} justify="center" style={{ marginBottom: '3rem' }}>
        {galleryImages?.map(image => (
          <Col xs={12} sm={6} key={image.id}>
            <img
              src={image.imageUrl || ''}
              alt={image.caption || ''}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </Col>
        ))}
      </Row>
      <Row justify="center" style={{ marginBottom: '3rem' }}>
        <Col>
          <Button type="default" onClick={() => navigate('/gallery')}>
            View Full Gallery
          </Button>
        </Col>
      </Row>

      <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Customer Testimonials
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {testimonials?.map(testimonial => (
          <Col xs={24} sm={12} md={8} key={testimonial.id}>
            <Card>
              <StarOutlined
                style={{
                  fontSize: '24px',
                  color: '#faad14',
                  marginBottom: '1rem',
                }}
              />
              <Paragraph ellipsis={{ rows: 3 }}>
                {testimonial.content}
              </Paragraph>
              <Text strong>{testimonial.user?.name}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
