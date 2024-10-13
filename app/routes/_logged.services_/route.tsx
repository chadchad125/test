import React, { useState } from 'react'
import { Typography, Card, Row, Col, Button, Spin, Modal } from 'antd'
import {
  ShoppingCartOutlined,
  TagOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ServicesPage() {
  const navigate = useNavigate()
  const [selectedService, setSelectedService] = useState<any>(null)

  const { data: services, isLoading } = Api.service.findMany.useQuery({
    include: { bookingServices: true },
  })

  const { data: deals } = Api.service.findMany.useQuery({
    where: { category: 'Deal' },
  })

  const groupedServices = services?.reduce((acc: any, service: any) => {
    if (!acc[service.category]) {
      acc[service.category] = []
    }
    acc[service.category].push(service)
    return acc
  }, {})

  const handleBookNow = (serviceId: string) => {
    navigate(`/appointments/new?serviceId=${serviceId}`)
  }

  const showServiceDetails = (service: any) => {
    setSelectedService(service)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={1}>Our Services</Title>
      <Paragraph>
        Discover our wide range of nail care services, from manicures and
        pedicures to stunning nail art.
      </Paragraph>

      {isLoading ? (
        <Spin size="large" />
      ) : (
        <>
          {deals && deals.length > 0 && (
            <Card
              title={
                <Title level={3}>
                  <TagOutlined /> Current Deals and Offers
                </Title>
              }
              style={{ marginBottom: 24 }}
            >
              <Row gutter={[16, 16]}>
                {deals.map((deal: any) => (
                  <Col xs={24} sm={12} md={8} key={deal.id}>
                    <Card
                      hoverable
                      title={deal.name}
                      extra={
                        <Button
                          type="primary"
                          onClick={() => handleBookNow(deal.id)}
                        >
                          Book Now
                        </Button>
                      }
                    >
                      <Paragraph>{deal.description}</Paragraph>
                      <Text strong>Price: {deal.price}</Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          )}

          {groupedServices &&
            Object.entries(groupedServices).map(
              ([category, categoryServices]: [string, any]) =>
                category !== 'Deal' && (
                  <Card
                    title={<Title level={3}>{category}</Title>}
                    key={category}
                    style={{ marginBottom: 24 }}
                  >
                    <Row gutter={[16, 16]}>
                      {categoryServices.map((service: any) => (
                        <Col xs={24} sm={12} md={8} key={service.id}>
                          <Card
                            hoverable
                            title={service.name}
                            extra={
                              <Button
                                type="primary"
                                icon={<ShoppingCartOutlined />}
                                onClick={() => handleBookNow(service.id)}
                              >
                                Book Now
                              </Button>
                            }
                            actions={[
                              <Button
                                type="link"
                                icon={<InfoCircleOutlined />}
                                onClick={() => showServiceDetails(service)}
                              >
                                Details
                              </Button>,
                            ]}
                          >
                            <Paragraph ellipsis={{ rows: 2 }}>
                              {service.description}
                            </Paragraph>
                            <Text strong>Price: {service.price}</Text>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Card>
                ),
            )}
        </>
      )}

      <Modal
        title={selectedService?.name}
        visible={!!selectedService}
        onCancel={() => setSelectedService(null)}
        footer={[
          <Button key="close" onClick={() => setSelectedService(null)}>
            Close
          </Button>,
          <Button
            key="book"
            type="primary"
            onClick={() => handleBookNow(selectedService?.id)}
          >
            Book Now
          </Button>,
        ]}
      >
        <Paragraph>{selectedService?.description}</Paragraph>
        <Paragraph>
          <strong>Duration:</strong> {selectedService?.duration?.toString()}{' '}
          minutes
        </Paragraph>
        <Paragraph>
          <strong>Technique:</strong> {selectedService?.technique}
        </Paragraph>
        <Paragraph>
          <strong>Price:</strong> {selectedService?.price}
        </Paragraph>
      </Modal>
    </PageLayout>
  )
}
