import React from 'react'
import { Typography, Row, Col, Card, Button } from 'antd'
import {
  HeartOutlined,
  HistoryOutlined,
  PictureOutlined,
  SmileOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AboutUsPage() {
  return (
    <PageLayout layout="narrow">
      <Title level={1} style={{ textAlign: 'center', marginBottom: '2rem' }}>
        About Us
      </Title>
      <Paragraph style={{ textAlign: 'center', marginBottom: '3rem' }}>
        Discover what makes our salon unique and learn about our journey.
      </Paragraph>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <HeartOutlined /> What Makes Us Unique
              </>
            }
            style={{ height: '100%' }}
          >
            <Paragraph>
              At our salon, we pride ourselves on our commitment to using only
              the highest quality products and creating a friendly, welcoming
              atmosphere for all our clients. Our team of skilled professionals
              is dedicated to providing exceptional service and ensuring that
              every visit leaves you feeling refreshed and beautiful.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <HistoryOutlined /> Our History & Vision
              </>
            }
            style={{ height: '100%' }}
          >
            <Paragraph>
              Founded in 2010, our salon began with a vision to create a space
              where beauty and relaxation meet. Over the years, we've grown and
              evolved, always staying true to our core values of excellence,
              innovation, and customer satisfaction. Our vision is to continue
              being a leader in the beauty industry, setting trends and
              providing unparalleled experiences for our clients.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: '2rem' }}>
        <Col span={24}>
          <Card
            title={
              <>
                <PictureOutlined /> Our Salon
              </>
            }
          >
            <Paragraph>
              Step into our modern and inviting space, designed to make you feel
              comfortable and relaxed from the moment you enter. Our salon
              features state-of-the-art equipment, comfortable seating areas,
              and a soothing ambiance that will make your visit a truly
              enjoyable experience.
            </Paragraph>
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={12} md={8}>
                <img
                  src="https://example.com/salon-image-1.jpg"
                  alt="Salon Interior"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Col>
              <Col xs={24} sm={12} md={8}>
                <img
                  src="https://example.com/salon-image-2.jpg"
                  alt="Salon Equipment"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Col>
              <Col xs={24} sm={12} md={8}>
                <img
                  src="https://example.com/salon-image-3.jpg"
                  alt="Salon Atmosphere"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: '2rem' }}>
        <Col span={24}>
          <Card>
            <Title level={3} style={{ textAlign: 'center' }}>
              <SmileOutlined /> A Personal Note from Sarli
            </Title>
            <Paragraph style={{ textAlign: 'center' }}>
              Dear valued client,
              <br />
              <br />
              I'm thrilled to welcome you to our salon. Our team is passionate
              about making you look and feel your best. We can't wait to meet
              you and provide you with an exceptional experience. Book your
              appointment today and let us pamper you!
              <br />
              <br />
              Warmly,
              <br />
              Sarli
            </Paragraph>
            <Row justify="center" style={{ marginTop: '1rem' }}>
              <Button type="primary" size="large" href="/appointments/new">
                Book an Appointment
              </Button>
            </Row>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
