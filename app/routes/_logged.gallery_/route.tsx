import React, { useState } from 'react'
import { Typography, Row, Col, Card, Modal, Select, Space } from 'antd'
import { ZoomInOutlined, InstagramOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    style: '',
    color: '',
    designType: '',
  })

  const { data: galleryImages, isLoading } = Api.galleryImage.findMany.useQuery(
    {},
  )

  const { data: testimonials } = Api.testimonial.findMany.useQuery({})

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  const handleFilterChange = (value: string, type: string) => {
    setFilters({ ...filters, [type]: value })
  }

  const filteredImages = galleryImages?.filter(image => {
    return (
      (!filters.style || image.style === filters.style) &&
      (!filters.color || image.color === filters.color) &&
      (!filters.designType || image.designType === filters.designType)
    )
  })

  return (
    <PageLayout layout="narrow">
      <Title level={1}>Nail Design Gallery</Title>
      <Paragraph>
        Explore our stunning collection of nail designs. Filter by style, color,
        or design type to find your perfect look.
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Select
          style={{ width: 120 }}
          placeholder="Style"
          onChange={value => handleFilterChange(value, 'style')}
        >
          <Option value="">All Styles</Option>
          {Array.from(new Set(galleryImages?.map(img => img.style))).map(
            style => (
              <Option key={style} value={style}>
                {style}
              </Option>
            ),
          )}
        </Select>
        <Select
          style={{ width: 120 }}
          placeholder="Color"
          onChange={value => handleFilterChange(value, 'color')}
        >
          <Option value="">All Colors</Option>
          {Array.from(new Set(galleryImages?.map(img => img.color))).map(
            color => (
              <Option key={color} value={color}>
                {color}
              </Option>
            ),
          )}
        </Select>
        <Select
          style={{ width: 120 }}
          placeholder="Design Type"
          onChange={value => handleFilterChange(value, 'designType')}
        >
          <Option value="">All Types</Option>
          {Array.from(new Set(galleryImages?.map(img => img.designType))).map(
            type => (
              <Option key={type} value={type}>
                {type}
              </Option>
            ),
          )}
        </Select>
      </Space>

      <Row gutter={[16, 16]}>
        {filteredImages?.map(image => (
          <Col xs={24} sm={12} md={8} lg={6} key={image.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={image.caption || 'Nail design'}
                  src={image.imageUrl || ''}
                  onClick={() => handleImageClick(image.imageUrl || '')}
                />
              }
              actions={[
                <ZoomInOutlined
                  key="zoom"
                  onClick={() => handleImageClick(image.imageUrl || '')}
                />,
              ]}
            >
              <Card.Meta
                title={image.caption}
                description={`${image.style} - ${image.color}`}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        visible={!!selectedImage}
        onCancel={handleCloseModal}
        footer={null}
        width="80%"
      >
        <img
          alt="Enlarged nail design"
          src={selectedImage || ''}
          style={{ width: '100%' }}
        />
      </Modal>

      <Title level={2} style={{ marginTop: 32 }}>
        Customer Stories
      </Title>
      <Row gutter={[16, 16]}>
        {testimonials?.map(testimonial => (
          <Col xs={24} sm={12} md={8} key={testimonial.id}>
            <Card>
              <Paragraph>{testimonial.content}</Paragraph>
              <Paragraph strong>{testimonial.userId}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={2} style={{ marginTop: 32 }}>
        Instagram Feed
      </Title>
      <Card>
        <InstagramOutlined style={{ fontSize: 48 }} />
        <Paragraph>
          Follow us on Instagram for the latest designs and updates!
        </Paragraph>
      </Card>
    </PageLayout>
  )
}
