import React, { useState } from 'react'
import { Typography, Input, List, Card, Space, Button } from 'antd'
import { SearchOutlined, QuestionCircleOutlined } from '@ant-design/icons'
const { Title, Paragraph, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const { data: faqs, isLoading } = Api.faq.findMany.useQuery({})

  const filteredFaqs = faqs?.filter(
    faq =>
      faq.question?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const handleContactUs = () => {
    navigate('/contact-us')
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={1}>Frequently Asked Questions</Title>
        <Paragraph>
          Find quick answers to common questions about our salon services,
          booking process, and policies.
        </Paragraph>

        <Input
          placeholder="Search FAQs"
          prefix={<SearchOutlined />}
          onChange={e => handleSearch(e.target.value)}
          style={{ marginBottom: '20px' }}
        />

        {isLoading ? (
          <Paragraph>Loading FAQs...</Paragraph>
        ) : (
          <List
            grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
            dataSource={filteredFaqs}
            renderItem={item => (
              <List.Item>
                <Card>
                  <Space direction="vertical">
                    <Text strong>
                      <QuestionCircleOutlined /> {item.question}
                    </Text>
                    <Paragraph>{item.answer}</Paragraph>
                  </Space>
                </Card>
              </List.Item>
            )}
          />
        )}

        <Space direction="vertical" align="center" style={{ width: '100%' }}>
          <Paragraph>Can't find the answer you're looking for?</Paragraph>
          <Button type="primary" onClick={handleContactUs}>
            Contact Us
          </Button>
        </Space>
      </Space>
    </PageLayout>
  )
}
